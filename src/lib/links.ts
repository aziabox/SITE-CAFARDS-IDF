/** Libellés lisibles pour les liens internes référencés par chemin. */
export const linkLabels: Record<string, string> = {
  '/': 'Accueil',
  '/cafards': 'Cafards et blattes : page de référence',
  '/traitement-cafards': 'Traitement des cafards',
  '/traitement-blattes': 'Traitement des blattes par espèce',
  '/desinsectisation-cafards': 'Désinsectisation en local professionnel',
  '/identifier-cafard': 'Identifier un cafard',
  '/nid-cafards': "Signes d'un nid de cafards",
  '/ootheque-cafard': 'Oothèque de cafard',
  '/prevention-cafards': 'Prévention des cafards',
  '/blatte-germanique': 'Blatte germanique',
  '/blatte-orientale': 'Blatte orientale',
  '/blatte-americaine': 'Blatte américaine',
  '/cafards-particuliers': 'Particuliers',
  '/cafards-coproprietes': 'Copropriétés',
  '/cafards-restaurants': 'Restaurants',
  '/cafards-commerces': 'Commerces',
  '/cafards-hotels': 'Hôtels',
  '/cafards-entreprises': 'Entreprises et bureaux',
  '/cafards-appartement': 'Cafards en appartement',
  '/cafards-maison': 'Cafards en maison',
  '/cafards-cuisine': 'Cafards dans la cuisine',
  '/cafards-immeuble': 'Cafards en immeuble',
  '/cafards-cave': 'Cafards en cave et sous-sol',
  '/zones-intervention': "Zones d'intervention en Île-de-France",
  '/faq': 'FAQ',
  '/contact': 'Contact',
};

export const labelFor = (href: string) =>
  linkLabels[href.replace(/\/$/, '') || '/'] ??
  href.replace(/^\//, '').replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
