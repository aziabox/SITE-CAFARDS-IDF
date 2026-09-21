# Blattis — site spécialisé cafards & blattes en Île-de-France

Site statique dédié **exclusivement** au traitement des cafards et des blattes en
Île-de-France : diagnostic, traitement, prévention et suivi, en habitation comme en
local professionnel. Aucun contenu généraliste sur les autres nuisibles.

**Téléphone utilisé sur tout le site :** 07 56 82 27 85 (`tel:+33756822785`)

---

## 1. Démarrage

```bash
npm install
npm run dev        # serveur de développement sur http://localhost:4321
npm run build      # génère dist/
npm run preview    # prévisualise dist/
npm run audit:content   # audit SEO / contenu / accessibilité sur dist/
```

Node 20+ recommandé (développé et testé avec Node 22).

## 2. Pile technique

| Élément | Choix | Raison |
| --- | --- | --- |
| Générateur | **Astro 5** (sortie statique) | HTML pré-rendu, zéro framework côté client |
| JavaScript livré | **≈ 2,2 Ko** (un seul fichier) | navigation mobile, accordéons, carte |
| CSS | CSS natif, variables, pas de framework | ~26 Ko au total, styles critiques intégrés |
| Polices | Sora + Source Sans 3, **auto-hébergées** | 184 Ko au total, aucune requête vers un tiers |
| Images | SVG vectoriel écrit pour le site | pas de photo simulée, pas de requête bloquante |
| Sitemap | `@astrojs/sitemap` | `sitemap-index.xml` généré au build |

Pas de traceur, pas de régie, pas de bouton social, pas de cookie.

## 3. Configuration avant mise en ligne

### 3.1 Variables d'environnement

Copier `.env.example` en `.env` :

```
SITE_URL=https://votre-domaine.fr    # canonical, sitemap, Open Graph
FORM_ENDPOINT=                        # destination du formulaire de contact
```

`SITE_URL` peut aussi être fourni au moment du build (`SITE_URL=… npm run build`).
Le domaine par défaut (`https://www.blattis.fr`) est un **placeholder** : il doit être
remplacé.

### 3.2 Formulaire de contact

Sans `FORM_ENDPOINT`, le formulaire pointe vers `/merci` et **n'envoie rien**.
Il faut brancher un service de traitement (Netlify Forms, Formspree, fonction
serverless…) avant la mise en ligne. Le formulaire est en `multipart/form-data`
(champ photo).

Deux garde-fous anti-spam sont déjà en place : un champ leurre invisible
(`site_web`) et un horodatage d'ouverture. Le service de traitement doit rejeter
les envois où `site_web` est rempli.

### 3.3 Mentions légales — obligatoire

`src/pages/mentions-legales.astro` et `src/pages/politique-confidentialite.astro`
contiennent des champs `[à compléter]` : raison sociale, SIREN/SIRET, TVA, siège,
directeur de la publication, hébergeur, prestataire du formulaire.

**Aucune de ces informations n'a été inventée.** Publier le site sans les
renseigner serait non conforme. Les deux pages affichent un encadré d'alerte
tant que les champs ne sont pas remplis — pensez à le retirer ensuite.

### 3.4 Avis clients

`site.reviews` dans `src/data/site.ts` est un **tableau vide, volontairement**.
Le composant `Reviews.astro` n'affiche rien tant qu'aucun avis réel n'est
renseigné, et aucune note agrégée (`aggregateRating`) n'est publiée en
schema.org. Pour ajouter de vrais avis :

```ts
reviews: [
  { author: 'Prénom N.', date: '2025-03-12', body: '…', source: 'Google' },
]
```

Ne jamais y placer d'avis fictif : le script d'audit échoue si un balisage
`aggregateRating`, `review`, `ratingValue`, `priceRange` ou `offers` apparaît.

## 3.5 Déploiement

Le site est **entièrement statique** : la commande de build produit `dist/`, qu'il
suffit de servir. Aucun serveur applicatif n'est nécessaire.

| Réglage | Valeur |
| --- | --- |
| Commande de build | `npm run build` |
| Dossier publié | `dist` |
| Version de Node | 20 ou plus (`.node-version`, `engines`) |
| Commande de démarrage (plateformes type Node) | `npm start` |

`npm start` sert le site **construit** via `astro preview`, en écoutant sur
`0.0.0.0` et sur le port fourni par la plateforme (`PORT`). Ne pas utiliser
`npm run dev` en production : c'est le serveur de développement.

Trois configurations d'hébergeur sont fournies et n'ont rien à régler :

- **Vercel** — `vercel.json` : framework, build, dossier de sortie,
  `trailingSlash: true`, redirections 301, en-têtes de cache et de sécurité.
- **Netlify / Cloudflare Pages** — `netlify.toml` + `public/_redirects`.
- **Autre plateforme** — reporter la commande de build, le dossier `dist` et les
  redirections du tableau de la section suivante.

`trailingSlash` est volontairement à `true` : le site est généré au format
« répertoire » et ses URL canoniques portent un slash final (`/cafards/`). Un
hébergeur réglé autrement redirigerait vers une URL différente de l'URL
canonique déclarée, ce qui brouille l'indexation.

### Branche

La branche **`main`** contient le projet et c'est celle à déployer. La plupart
des importateurs Git la cherchent par son nom ; si le vôtre utilise la branche
par défaut du dépôt, vérifiez dans GitHub (*Settings → General → Default
branch*) qu'elle est bien réglée sur `main`.

## 4. Architecture des URL

```
/                                  accueil
/cafards                           page pilier
/traitement-cafards                déroulement d'une intervention
/traitement-blattes                protocole par espèce
/desinsectisation-cafards          locaux professionnels, traçabilité
/identifier-cafard                 guide d'identification
/nid-cafards                       zones de refuge
/ootheque-cafard                   œufs et cycle
/prevention-cafards                prévention
/blatte-germanique  /blatte-orientale  /blatte-americaine

/cafards-particuliers   /cafards-coproprietes   /cafards-restaurants
/cafards-commerces      /cafards-hotels         /cafards-entreprises

/cafards-appartement  /cafards-maison  /cafards-cuisine
/cafards-immeuble     /cafards-cave

/zones-intervention/                hub SEO local + carte
/zones-intervention/paris/
/zones-intervention/seine-et-marne/      …yvelines, essonne,
/zones-intervention/hauts-de-seine/      …seine-saint-denis,
/zones-intervention/val-de-marne/        …val-doise

/cafards-paris/   /cafards-boulogne-billancourt/   /cafards-nanterre/
/cafards-montreuil/   /cafards-saint-denis/   /cafards-aubervilliers/
/cafards-creteil/   /cafards-vitry-sur-seine/   /cafards-versailles/
/cafards-mantes-la-jolie/   /cafards-evry-courcouronnes/
/cafards-argenteuil/   /cafards-cergy/   /cafards-meaux/

/faq   /contact   /merci (noindex)
/mentions-legales   /politique-confidentialite   /404

/blog/                             hub, 20 articles
/blog/cafards/  /blog/blattes/  /blog/identification/  /blog/prevention/
/blog/traitement/  /blog/copropriete/  /blog/restaurant/  /blog/habitation/
/blog/<slug>/                      articles
```

**81 pages HTML dont 79 indexables** (`/merci` et `/404` sont en `noindex`),
plus 7 pages de redirection. ~96 000 mots de contenu rédigé.

### Redirections 301

Les variantes au singulier redirigent vers la page canonique, afin d'éviter deux
URL au contenu quasi identique :

| De | Vers |
| --- | --- |
| `/cafards-commerce` | `/cafards-commerces` |
| `/cafards-copropriete` | `/cafards-coproprietes` |
| `/cafards-restaurant` | `/cafards-restaurants` |
| `/cafards-hotel` | `/cafards-hotels` |
| `/cafards-entreprise` | `/cafards-entreprises` |
| `/blattes` | `/traitement-blattes` |
| `/cafard` | `/cafards` |
| `/zones-intervention/<code>` | page départementale correspondante |

Elles sont déclarées à trois endroits, selon l'hébergeur :
`astro.config.mjs` (page de redirection statique), `public/_redirects`
(Netlify / Cloudflare Pages, vrai 301) et `vercel.json` (Vercel, vrai 301).
**Sur un autre hébergeur, reporter ces règles dans sa configuration** pour
obtenir des 301 et non des redirections méta.

## 5. Où se trouve le contenu

| Fichier | Contenu |
| --- | --- |
| `src/data/site.ts` | NAP, horaires, libellés de CTA, navigation, avis (vide) |
| `src/data/departements.ts` | les 8 pages départementales, rédigées une par une |
| `src/data/villes.ts` | les 14 pages villes, rédigées une par une |
| `src/data/especes.ts` | fiches blatte germanique / orientale / américaine |
| `src/data/faq.ts` | FAQ générale, 5 thèmes |
| `src/data/idf-map.json` | contours SVG des 8 départements + positions des villes |
| `src/content/blog/*.md` | les 20 articles |
| `src/pages/**` | les pages de service et les gabarits locaux |

### Ajouter une ville

1. Ajouter une entrée dans `src/data/villes.ts` (tous les champs sont requis).
2. Ajouter son `slug` dans le tableau `cities` du département concerné
   (`src/data/departements.ts`).
3. Calculer `mapX` / `mapY` si vous voulez un point sur la carte :

```bash
node -e "
const [lat,lon]=[48.85,2.35];                 // coordonnées de la commune
const k=Math.cos(48.6851*Math.PI/180);        // latitude moyenne de la région
const minx=1.4297*k, miny=-49.2415, scale=984/((3.5591-1.4297)*k);
console.log('mapX:', (lon*k-minx)*scale+8, 'mapY:', (-lat-miny)*scale+8);
"
```

4. `npm run build && npm run audit:content` — l'audit refuse une page dont le
   corps rédactionnel est trop proche d'une autre page locale.

**Règle absolue :** une page ville n'existe que si son contenu est réellement
différent (introduction, contexte du bâti, problématiques, prévention, FAQ,
quartiers). Ne jamais dupliquer un texte en remplaçant le nom de la commune.

## 6. Images

Le site n'utilise **aucune photographie**. L'illustration du héros
(`src/components/art/HeroScene.astro`) est un dessin vectoriel réalisé pour le
site : inspection d'un meuble sous-évier, technicien de profil, annotations
techniques. Aucune photo n'est simulée.

### Remplacer par de vraies photographies

Placer les fichiers dans `public/img/`, en WebP ou AVIF, et remplacer
`<HeroScene />` dans `src/components/Hero.astro` par une balise `<img>` ou le
composant `<Image />` d'Astro (`astro:assets`, avec `width`, `height` et
`loading="eager"` pour le héros).

Nommage et texte alternatif recommandés :

| Fichier | Alt |
| --- | --- |
| `traitement-cafards-cuisine-paris.webp` | Inspection d'une cuisine lors d'une intervention contre les cafards |
| `inspection-blatte-appartement.webp` | Technicien inspectant le dessous d'un évier dans un appartement |
| `intervention-cafards-restaurant.webp` | Contrôle des zones de plonge dans une cuisine de restaurant |
| `inspection-arriere-equipement.webp` | Inspection derrière un équipement de cuisine professionnelle |

Consignes : sujets réels (technicien, cuisine, local, matériel, zones
techniques) ; les images de cafards restent secondaires et de petite taille ;
aucune photo d'un autre nuisible ; pas de sur-optimisation du nom de fichier.

## 7. SEO, GEO et balisage

- `title`, `meta description` et `h1` **uniques sur chacune des 79 pages
  indexables** (vérifié par l'audit).
- `canonical` sur toutes les pages, `noindex` sur `/merci` et `/404`.
- Fil d'Ariane visible + `BreadcrumbList`.
- Open Graph et Twitter Card complets, image 1200×630 générée
  (`public/img/blattis-og.png`).
- `robots.txt` généré à partir de `SITE_URL`, avec autorisation explicite des
  agents de moteurs génératifs (GPTBot, OAI-SearchBot, PerplexityBot,
  Google-Extended, ClaudeBot).
- **GEO :** chaque page de fond et chaque article ouvre par un bloc
  « réponse directe » factuel, repris dans le champ `answer` du contenu, avant
  le développement.

### Schema.org — ce qui est publié et ce qui ne l'est pas

Publié : `Organization` + `LocalBusiness`, `WebSite`, `WebPage`, `Service`,
`BreadcrumbList`, `FAQPage`, `Article`, `CollectionPage`.

**Jamais publié :** `aggregateRating`, `review`, `ratingValue`, `priceRange`,
`offers`, certification, statistique, effectif, ancienneté. Le script d'audit
échoue si l'un de ces éléments apparaît dans le JSON-LD.

## 8. Accessibilité

- Contraste conforme AA sur les textes et les composants.
- Navigation clavier complète, focus visible (contour terracotta 2,5 px).
- Lien d'évitement vers le contenu principal.
- Hiérarchie de titres sans saut de niveau (vérifié).
- Labels de formulaire explicites, champs requis signalés.
- SVG décoratifs masqués (`aria-hidden`), SVG informatifs avec `aria-label`.
- Aucun texte sous 12 px, aucune cible d'interaction sous 24 px hors texte
  courant.
- `prefers-reduced-motion` respecté (animations neutralisées).

**Une exception documentée :** les points de ville sur la carte ont une surface
de contact inférieure à 24 px sur petit écran. Les mêmes liens sont fournis à
taille normale dans la liste textuelle sous la carte ou dans la section
« villes » de la page — ce qui correspond à l'exception « contrôle
équivalent » du critère WCAG 2.5.8.

## 9. Performance

Mesures sur le build :

| Élément | Poids |
| --- | --- |
| JavaScript total | 2,2 Ko (non minifié : un fichier) |
| CSS (page d'accueil) | ~10 Ko, styles critiques intégrés |
| Polices chargées au premier rendu | 2 fichiers, ~54 Ko (sous-ensemble latin) |
| HTML page d'accueil | 110 Ko brut, **27,6 Ko gzip** |
| Requêtes tierces | 0 |

Choix de performance :
- Polices variables auto-hébergées, sous-ensembles `latin` / `latin-ext`,
  `font-display: swap`, préchargement des deux fichiers du premier rendu.
- Héros en SVG **inline** : pas de requête image, donc pas de LCP dépendant du
  réseau.
- La carte reste dans le HTML (maillage interne et accessibilité) mais porte
  `content-visibility: auto` : elle n'est ni mise en page ni rastérisée tant
  qu'elle est hors de l'écran.
- Aucune bibliothèque d'animation ; apparitions via `IntersectionObserver`, et
  désactivées si `prefers-reduced-motion`.
- `vercel.json` définit un cache immuable d'un an sur `/fonts/` et `/_astro/`.

## 10. Audit

```bash
npm run build && npm run audit:content
```

Le script (`scripts/audit-content.mjs`) vérifie, sur le HTML généré :

- unicité et longueur des `title`, `meta description`, `h1` ;
- présence des `canonical` et des balises Open Graph ;
- validité du JSON-LD **et absence de balisage interdit** (avis, notes, prix) ;
- liens internes morts et assets manquants ;
- `alt` des images, `aria-hidden` / `aria-label` des SVG, attribut `lang` ;
- cohérence du sitemap (toute page indexable présente, aucune page `noindex`) ;
- présence de `robots.txt`, `sitemap-index.xml`, `site.webmanifest`, `404.html` ;
- **similarité entre pages locales** : la comparaison porte sur le corps
  rédactionnel seul (en-tête, pied de page, carte et bandeaux CTA exclus) et
  échoue au-delà de 35 % de recouvrement.

Le script sort en code 1 s'il trouve une anomalie : il peut être branché en CI.

## 11. Règles éditoriales appliquées

Elles ne sont pas décoratives — elles ont guidé la rédaction des 96 000 mots.

- **Aucune donnée inventée** : ni statistique locale, ni nombre d'interventions,
  ni ancienneté, ni certification, ni avis, ni client.
- **Aucune promesse de résultat** : pas de délai fixe annoncé avant diagnostic,
  pas de garantie d'élimination en une visite. Les pages expliquent *pourquoi*
  (cycle des oothèques, accès aux refuges, périmètre).
- **Pas de peur comme argument** : aucune commune n'est décrite comme
  « envahie », aucun registre anxiogène.
- **Pas de page créée pour l'URL** : 14 villes seulement, chacune avec un
  contenu réellement spécifique ; les autres communes figurent dans les pages
  départementales.
- **Pied de page sobre** : trois colonnes courtes, pas d'accumulation de
  mots-clés.
- **Maillage contextuel** : les liens internes sont placés dans les paragraphes
  et les sections où ils ont un sens, selon la chaîne cafards → identification →
  espèces → traitement → prévention → type de bâtiment → département → ville →
  blog.

## 12. Structure du dépôt

```
src/
├── components/        en-tête, pied de page, héros, FAQ, carte, formulaire…
│   └── art/           illustration vectorielle du héros
├── content/blog/      20 articles Markdown
├── data/              contenu structuré (départements, villes, espèces, FAQ)
├── layouts/           BaseLayout (SEO + schema), TopicPage
├── lib/               aides schema.org, libellés de liens
├── pages/             les pages et gabarits
└── styles/            global.css (design system), fonts.css
public/
├── fonts/             6 fichiers woff2 auto-hébergés
├── img/               logo, icônes, image Open Graph
└── _redirects         301 Netlify / Cloudflare
scripts/
└── audit-content.mjs  audit du build
```

## 13. Identité visuelle

| Rôle | Valeur |
| --- | --- |
| Bordeaux profond (principale) | `#571523`, déclinaisons `#2E0810` → `#9C3A4B` |
| Crème / ivoire | `#F6F0E6`, `#FBF6EE`, `#FFFDF8` |
| Graphite | `#262220`, `#4A423D`, `#6E6459` |
| Terracotta (accent, parcimonieux) | `#B4512C`, cuivre `#C77B45` |
| Titres, navigation, CTA | **Sora** (600 / 700) |
| Textes, FAQ, articles | **Source Sans 3** (400 / 600) |

Le terracotta est réservé aux CTA, aux icônes et aux petits détails. Le crème
porte l'essentiel des surfaces. Le bordeaux tient l'en-tête, les titres, les
bandeaux et le pied de page.
