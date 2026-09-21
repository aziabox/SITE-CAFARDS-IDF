#!/usr/bin/env node
/**
 * Audit de sécurité du build.
 *
 * Vérifie ce qui est vérifiable hors serveur :
 *  - aucun secret, source map ou fichier sensible dans dist/ ;
 *  - aucune ressource externe (script, style, police, image, iframe) ;
 *  - aucun script JavaScript en ligne (une CSP stricte resterait possible) ;
 *  - la même politique de sécurité déclarée dans les trois configurations
 *    d'hébergement (.htaccess, vercel.json, netlify.toml) ;
 *  - présence des en-têtes attendus dans chaque configuration.
 *
 * Usage : npm run build && npm run audit:security
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) {
  console.error('dist/ introuvable. Lancez « npm run build » d’abord.');
  process.exit(1);
}

const problems = [];
const notes = [];
const add = (l, code, where, msg) => l.push({ code, where, msg });

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(DIST);
const html = files.filter((f) => f.endsWith('.html'));

/** Domaine canonique du site, lu sur la page d'accueil : les URL qui le visent
 *  (canonical, Open Graph, sitemap) ne sont pas des ressources tierces. */
const ownHost = (() => {
  const home = join(DIST, 'index.html');
  if (!existsSync(home)) return '';
  const m = readFileSync(home, 'utf8').match(/<link rel="canonical" href="https?:\/\/([^"/]+)/i);
  return m ? m[1] : '';
})();
const urlOf = (f) => '/' + relative(DIST, f).split(sep).join('/').replace(/index\.html$/, '');

// --- 1. Fichiers qui ne doivent pas être publiés ---
const forbidden = /(^|\/)(\.env|\.git|node_modules|package(-lock)?\.json|tsconfig\.json|astro\.config\.mjs)(\/|$)|\.(map|ts|tsx|log|bak|sql|sh)$/i;
for (const f of files) {
  const rel = relative(DIST, f).split(sep).join('/');
  if (forbidden.test(rel)) add(problems, 'FICHIER_A_NE_PAS_PUBLIER', rel, 'présent dans dist/');
}

// --- 2. Secrets ---
const secret = /(api[_-]?key|client[_-]?secret|private[_-]?key|password\s*[:=]|BEGIN (RSA |EC )?PRIVATE KEY|AKIA[0-9A-Z]{16}|sk_live_[0-9a-zA-Z]{10,})/i;
for (const f of files.filter((f) => /\.(html|js|css|json|xml|txt|webmanifest)$/.test(f))) {
  const c = readFileSync(f, 'utf8');
  if (secret.test(c)) add(problems, 'SECRET_POSSIBLE', relative(DIST, f), 'motif sensible détecté');
}

// --- 3. Ressources externes et scripts en ligne ---
for (const f of html) {
  const c = readFileSync(f, 'utf8');
  const u = urlOf(f);

  // Seules les balises qui CHARGENT une ressource comptent. Un rel=canonical
  // ou une URL Open Graph pointe vers le domaine du site : ce n'est pas une
  // ressource tierce, et le domaine propre est de toute façon exclu.
  for (const m of c.matchAll(/<(script|link|iframe|img|source|video|audio)\b([^>]*)>/gi)) {
    const tag = m[1].toLowerCase();
    const attrs = m[2];
    if (tag === 'link') {
      const rel = (attrs.match(/\brel="([^"]+)"/i) || [, ''])[1].toLowerCase();
      if (!/stylesheet|preload|prefetch|preconnect|dns-prefetch|icon|manifest|modulepreload/.test(rel)) continue;
    }
    const url = (attrs.match(/\b(?:src|href)="((?:https?:)?\/\/[^"]+)"/i) || [])[1];
    if (!url) continue;
    const host = url.replace(/^(https?:)?\/\//, '').split('/')[0];
    if (host === ownHost) continue;
    add(problems, 'RESSOURCE_EXTERNE', u, `${tag} vers ${host}`);
  }
  for (const m of c.matchAll(/url\((['"]?)(https?:)?\/\/([^)'"]+)/gi)) {
    add(problems, 'RESSOURCE_EXTERNE_CSS', u, m[3]);
  }
  // Les blocs <script> en ligne empêchent « script-src 'self' ».
  // Le JSON-LD est exclu : ce n'est pas du JavaScript exécutable.
  for (const m of c.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1] || '';
    if (/application\/ld\+json/i.test(attrs)) continue;
    if (m[2].trim() === '') continue;
    add(problems, 'SCRIPT_EN_LIGNE', u, `${m[2].trim().length} octets — bloque une CSP stricte`);
  }
  if (/\sstyle="/i.test(c)) add(notes, 'ATTRIBUT_STYLE', u, "attribut style= présent (impose style-src-attr 'unsafe-inline')");
  for (const m of c.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
    if (!/rel="[^"]*noopener/i.test(m[0])) add(problems, 'TARGET_BLANK_SANS_NOOPENER', u, m[0].slice(0, 70));
  }
}

// --- 4. Cohérence des en-têtes entre hébergeurs ---
const attendus = [
  'Content-Security-Policy',
  'Strict-Transport-Security',
  'X-Content-Type-Options',
  'Referrer-Policy',
  'X-Frame-Options',
  'Permissions-Policy',
  'Cross-Origin-Opener-Policy',
  'Cross-Origin-Resource-Policy',
];

const confs = {
  '.htaccess (Apache / Hostinger)': join(DIST, '.htaccess'),
  'vercel.json': 'vercel.json',
  'netlify.toml': 'netlify.toml',
};

const csps = {};
for (const [nom, chemin] of Object.entries(confs)) {
  if (!existsSync(chemin)) {
    add(problems, 'CONFIG_MANQUANTE', nom, `${chemin} introuvable`);
    continue;
  }
  const c = readFileSync(chemin, 'utf8');
  for (const h of attendus) {
    if (!new RegExp(h.replace(/-/g, '[-_]?'), 'i').test(c)) {
      add(problems, 'ENTETE_MANQUANT', nom, h);
    }
  }
  const m = c.match(/default-src[^"\n]*/i);
  if (m) csps[nom] = m[0].replace(/\s+/g, ' ').trim().replace(/["';]+$/, '');
  else add(problems, 'CSP_ABSENTE', nom, 'aucune directive default-src trouvée');

  for (const laxiste of ["'unsafe-inline'", "'unsafe-eval'", '*']) {
    const re = new RegExp(`script-src[^"\\n]*${laxiste.replace(/[*']/g, '\\$&')}`, 'i');
    if (re.test(c)) add(problems, 'CSP_TROP_PERMISSIVE', nom, `script-src contient ${laxiste}`);
  }
}

const uniques = [...new Set(Object.values(csps))];
if (uniques.length > 1) {
  add(problems, 'CSP_DIVERGENTE', Object.keys(csps).join(' / '), `${uniques.length} politiques différentes`);
}

// --- 5. Rapport ---
const group = (l) => {
  const m = new Map();
  for (const it of l) (m.get(it.code) ?? m.set(it.code, []).get(it.code)).push(it);
  return [...m.entries()].sort((a, b) => b[1].length - a[1].length);
};

console.log('\n=== AUDIT SÉCURITÉ BLATTIS ===');
console.log(`Fichiers publiés    : ${files.length} (${html.length} pages HTML)`);
console.log(`Configurations      : ${Object.keys(confs).length} vérifiées`);
console.log(`Politique commune   : ${uniques.length === 1 ? 'oui' : 'NON'}`);
if (uniques.length === 1) console.log(`  ${uniques[0].slice(0, 120)}…`);

if (problems.length === 0) console.log('\n✓ Aucune anomalie de sécurité.');
else {
  console.log(`\n✗ ${problems.length} anomalie(s) :`);
  for (const [code, items] of group(problems)) {
    console.log(`\n  [${code}] ${items.length}`);
    for (const it of items.slice(0, 10)) console.log(`    ${it.where} — ${it.msg}`);
    if (items.length > 10) console.log(`    … et ${items.length - 10} autre(s)`);
  }
}
if (notes.length) {
  console.log(`\n⚠ ${notes.length} remarque(s) :`);
  for (const [code, items] of group(notes)) console.log(`  [${code}] ${items.length} — ${items[0].msg}`);
}
console.log('');
process.exit(problems.length ? 1 : 0);
