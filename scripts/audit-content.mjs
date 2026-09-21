#!/usr/bin/env node
/**
 * Audit du site construit (dossier dist/).
 * Vérifie : unicité des titles / descriptions / H1, présence des canonical,
 * validité du JSON-LD, liens internes morts, images sans alt, doublons de
 * contenu entre pages locales, et poids des pages.
 *
 * Usage : npm run build && npm run audit:content
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) {
  console.error('dist/ introuvable. Lancez « npm run build » d’abord.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));

const problems = [];
const warnings = [];
const add = (list, code, file, msg) => list.push({ code, file, msg });

const urlOf = (file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  return '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
};

const pick = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};
const decode = (s) =>
  s == null
    ? s
    : s
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ');

const pages = [];
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const internalTargets = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const url = urlOf(file);
  const isRedirect = /<meta http-equiv="refresh"/i.test(html);
  const noindex = /name="robots" content="noindex/i.test(html);

  internalTargets.add(url.replace(/\/$/, '') || '/');

  if (isRedirect) continue;

  const title = decode(pick(html, /<title>([\s\S]*?)<\/title>/i));
  const desc = decode(pick(html, /<meta name="description" content="([\s\S]*?)"/i));
  const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/i);
  const h1All = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    decode(m[1].replace(/<[^>]+>/g, '').trim()),
  );
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  pages.push({ file, url, title, desc, canonical, h1All, text, noindex, bytes: Buffer.byteLength(html) });

  // --- Titles ---
  if (!title) add(problems, 'TITLE_MANQUANT', url, 'aucune balise <title>');
  else {
    if (title.length < 25) add(warnings, 'TITLE_COURT', url, `${title.length} caractères`);
    if (title.length > 70) add(warnings, 'TITLE_LONG', url, `${title.length} caractères : « ${title} »`);
    if (!noindex) {
      if (!titles.has(title)) titles.set(title, []);
      titles.get(title).push(url);
    }
  }

  // --- Descriptions ---
  if (!desc) add(problems, 'DESC_MANQUANTE', url, 'aucune meta description');
  else {
    if (desc.length < 70) add(warnings, 'DESC_COURTE', url, `${desc.length} caractères`);
    if (desc.length > 175) add(warnings, 'DESC_LONGUE', url, `${desc.length} caractères`);
    if (!noindex) {
      if (!descs.has(desc)) descs.set(desc, []);
      descs.get(desc).push(url);
    }
  }

  // --- H1 ---
  if (h1All.length === 0) add(problems, 'H1_MANQUANT', url, 'aucun <h1>');
  else if (h1All.length > 1) add(problems, 'H1_MULTIPLE', url, `${h1All.length} balises <h1>`);
  if (h1All.length === 1 && !noindex) {
    if (!h1s.has(h1All[0])) h1s.set(h1All[0], []);
    h1s.get(h1All[0]).push(url);
  }

  // --- Canonical ---
  if (!canonical) add(problems, 'CANONICAL_MANQUANT', url, 'aucun rel=canonical');

  // --- Open Graph ---
  if (!/property="og:title"/.test(html)) add(problems, 'OG_MANQUANT', url, 'og:title absent');
  if (!/property="og:image"/.test(html)) add(problems, 'OG_IMAGE_MANQUANTE', url, 'og:image absent');

  // --- JSON-LD ---
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (blocks.length === 0) add(problems, 'JSONLD_MANQUANT', url, 'aucun bloc JSON-LD');
  for (const [, raw] of blocks) {
    try {
      const data = JSON.parse(raw);
      const graph = data['@graph'] ?? [data];
      const banned = ['aggregateRating', 'review', 'ratingValue', 'priceRange', 'offers'];
      const flat = JSON.stringify(graph);
      for (const key of banned) {
        if (flat.includes(`"${key}"`)) {
          add(problems, 'JSONLD_INTERDIT', url, `le balisage contient « ${key} » (avis / notes / prix non vérifiables)`);
        }
      }
      for (const node of graph) {
        if (!node['@type']) add(problems, 'JSONLD_TYPE', url, 'nœud sans @type');
      }
    } catch (e) {
      add(problems, 'JSONLD_INVALIDE', url, e.message);
    }
  }

  // --- Images sans alt ---
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  for (const img of imgs) {
    if (!/\balt=/.test(img)) add(problems, 'IMG_SANS_ALT', url, img.slice(0, 90));
  }

  // --- SVG décoratifs / informatifs ---
  const svgs = [...html.matchAll(/<svg\b[^>]*>/gi)].map((m) => m[0]);
  for (const svg of svgs) {
    const hasRole = /role="img"/.test(svg);
    const hidden = /aria-hidden="true"/.test(svg);
    const labelled = /aria-label=/.test(svg);
    if (hasRole && !labelled) add(warnings, 'SVG_SANS_LABEL', url, svg.slice(0, 80));
    if (!hasRole && !hidden) add(warnings, 'SVG_NON_MASQUE', url, svg.slice(0, 80));
  }

  // --- Lang ---
  if (!/<html lang="fr"/.test(html)) add(problems, 'LANG_MANQUANT', url, 'attribut lang absent ou incorrect');

  // --- Poids ---
  const kb = Buffer.byteLength(html) / 1024;
  if (kb > 130) add(warnings, 'PAGE_LOURDE', url, `${kb.toFixed(0)} Ko de HTML`);
}

// --- Doublons ---
for (const [title, urls] of titles) {
  if (urls.length > 1) add(problems, 'TITLE_DUPLIQUE', urls.join(', '), `« ${title} »`);
}
for (const [desc, urls] of descs) {
  if (urls.length > 1) add(problems, 'DESC_DUPLIQUEE', urls.join(', '), `« ${desc.slice(0, 60)}… »`);
}
for (const [h1, urls] of h1s) {
  if (urls.length > 1) add(problems, 'H1_DUPLIQUE', urls.join(', '), `« ${h1} »`);
}

// --- Liens internes morts ---
const assetExists = (p) => existsSync(join(DIST, p.replace(/^\//, '')));
for (const page of pages) {
  const html = readFileSync(page.file, 'utf8');
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    const clean = href.replace(/\/$/, '') || '/';
    if (internalTargets.has(clean)) continue;
    if (assetExists(href)) continue;
    if (/\.(css|js|woff2?|png|jpe?g|svg|webp|avif|ico|xml|txt|webmanifest|pdf)$/i.test(href)) {
      add(problems, 'ASSET_MANQUANT', page.url, href);
    } else {
      add(problems, 'LIEN_MORT', page.url, href);
    }
  }
}

// --- Similarité entre pages locales (anti-duplication) ---
const shingles = (text, n = 8) => {
  const words = text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(' '));
  return set;
};
const jaccard = (a, b) => {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
};

/**
 * La comparaison porte uniquement sur le contenu rédactionnel propre à la page :
 * l'en-tête, le pied de page, le bandeau de confiance, la carte, les bandeaux CTA
 * et les blocs de liens sont retirés, car ils sont volontairement partagés.
 */
const bodyText = (file) => {
  let html = readFileSync(file, 'utf8');
  html = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<aside[\s\S]*?<\/aside>/gi, ' ')
    .replace(/<section class="ctab[\s\S]*?<\/section>/gi, ' ')
    .replace(/<section class="trust[\s\S]*?<\/section>/gi, ' ')
    .replace(/<div class="map"[\s\S]*?<\/div>\s*<\/div>/gi, ' ')
    .replace(/<section class="section section--tight rel[\s\S]*?<\/section>/gi, ' ');
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return (main ? main[1] : html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const local = pages.filter(
  (p) => /^\/cafards-[a-z-]+$/.test(p.url.replace(/\/$/, '')) || p.url.includes('/zones-intervention/'),
);
const withShingles = local.map((p) => ({ ...p, sh: shingles(bodyText(p.file)) }));
for (let i = 0; i < withShingles.length; i++) {
  for (let j = i + 1; j < withShingles.length; j++) {
    const sim = jaccard(withShingles[i].sh, withShingles[j].sh);
    if (sim > 0.35) {
      add(problems, 'CONTENU_TROP_PROCHE', `${withShingles[i].url} ↔ ${withShingles[j].url}`, `similarité ${(sim * 100).toFixed(0)} %`);
    } else if (sim > 0.22) {
      add(warnings, 'CONTENU_PROCHE', `${withShingles[i].url} ↔ ${withShingles[j].url}`, `similarité ${(sim * 100).toFixed(0)} %`);
    }
  }
}

// --- Contenu trop court ---
for (const page of pages) {
  const words = page.text.split(/\s+/).length;
  if (!page.noindex && words < 320) add(warnings, 'CONTENU_COURT', page.url, `${words} mots`);
}

// --- Fichiers techniques ---
for (const f of ['sitemap-index.xml', 'robots.txt', 'site.webmanifest', 'favicon.svg', '404.html']) {
  if (!existsSync(join(DIST, f))) add(problems, 'FICHIER_MANQUANT', f, 'attendu à la racine de dist/');
}

// --- Sitemap ---
const sitemapUrls = new Set();
for (const f of walk(DIST).filter((f) => /sitemap.*\.xml$/.test(f))) {
  const xml = readFileSync(f, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const u = m[1];
    if (!/sitemap.*\.xml$/.test(u)) sitemapUrls.add(new URL(u).pathname.replace(/\/$/, '') || '/');
  }
}
for (const page of pages) {
  const clean = page.url.replace(/\/$/, '') || '/';
  if (page.noindex) {
    if (sitemapUrls.has(clean)) add(problems, 'SITEMAP_NOINDEX', clean, 'page noindex présente dans le sitemap');
  } else if (!sitemapUrls.has(clean)) {
    add(problems, 'SITEMAP_ABSENT', clean, 'page indexable absente du sitemap');
  }
}

// --- Rapport ---
const group = (list) => {
  const m = new Map();
  for (const it of list) {
    if (!m.has(it.code)) m.set(it.code, []);
    m.get(it.code).push(it);
  }
  return [...m.entries()].sort((a, b) => b[1].length - a[1].length);
};

const totalWords = pages.reduce((n, p) => n + p.text.split(/\s+/).length, 0);
console.log('\n=== AUDIT BLATTIS ===');
console.log(`Pages HTML analysées : ${pages.length} (+ ${htmlFiles.length - pages.length} redirections)`);
console.log(`URL dans le sitemap  : ${sitemapUrls.size}`);
console.log(`Mots de contenu      : ~${totalWords.toLocaleString('fr-FR')}`);
console.log(`Titles uniques       : ${titles.size} / ${pages.filter((p) => !p.noindex).length} indexables`);
console.log(`H1 uniques           : ${h1s.size}`);

if (problems.length === 0) console.log('\n✓ Aucune anomalie bloquante.');
else {
  console.log(`\n✗ ${problems.length} anomalie(s) :`);
  for (const [code, items] of group(problems)) {
    console.log(`\n  [${code}] ${items.length}`);
    for (const it of items.slice(0, 12)) console.log(`    ${it.file} — ${it.msg}`);
    if (items.length > 12) console.log(`    … et ${items.length - 12} autre(s)`);
  }
}

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} avertissement(s) :`);
  for (const [code, items] of group(warnings)) {
    console.log(`\n  [${code}] ${items.length}`);
    for (const it of items.slice(0, 8)) console.log(`    ${it.file} — ${it.msg}`);
    if (items.length > 8) console.log(`    … et ${items.length - 8} autre(s)`);
  }
}
console.log('');
process.exit(problems.length ? 1 : 0);
