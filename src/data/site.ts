/**
 * Données de référence du site.
 * Aucune donnée non vérifiée (avis, notes, certifications, statistiques,
 * effectifs, ancienneté) ne doit être ajoutée ici : les champs prévus à cet
 * effet restent vides tant qu'une information réelle n'est pas fournie.
 */

export const site = {
  brand: 'Blattis',
  legalName: 'Blattis',
  tagline: 'Spécialiste cafards & blattes — Île-de-France',
  shortDescription:
    "Entreprise spécialisée dans le traitement des cafards et des blattes en Île-de-France : diagnostic, traitement adapté, prévention et suivi, en logement comme en local professionnel.",
  url: 'https://www.blattis.fr',
  locale: 'fr-FR',
  lang: 'fr',

  phoneDisplay: '07 56 82 27 85',
  phoneHref: 'tel:+33756822785',
  phoneE164: '+33756822785',
  email: 'contact@blattis.fr',

  areaServed: [
    'Île-de-France',
    'Paris',
    'Seine-et-Marne',
    'Yvelines',
    'Essonne',
    'Hauts-de-Seine',
    'Seine-Saint-Denis',
    'Val-de-Marne',
    "Val-d'Oise",
  ],

  /** Horaires réels de prise d'appel. À ajuster si besoin. */
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { days: ['Saturday'], opens: '09:00', closes: '18:00' },
  ],

  /**
   * Avis clients : tableau volontairement vide.
   * Le composant <Reviews /> n'affiche rien tant qu'aucun avis réel n'est renseigné.
   * Ne jamais y ajouter d'avis fictif.
   */
  reviews: [] as Array<{ author: string; date: string; rating?: number; body: string; source?: string }>,
} as const;

/** Libellés d'appel à l'action réutilisables. */
export const cta = {
  primary: 'Demander une intervention',
  describe: 'Décrire mon infestation',
  quote: 'Demander un devis',
  specialist: 'Parler à un spécialiste',
  callback: 'Être rappelé',
  call: `Appeler le ${site.phoneDisplay}`,
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  {
    label: 'Cafards & blattes',
    href: '/cafards',
    children: [
      { label: 'Tout savoir sur les cafards', href: '/cafards' },
      { label: 'Identifier un cafard', href: '/identifier-cafard' },
      { label: 'Signes d’un nid', href: '/nid-cafards' },
      { label: 'Oothèque de cafard', href: '/ootheque-cafard' },
      { label: 'Blatte germanique', href: '/blatte-germanique' },
      { label: 'Blatte orientale', href: '/blatte-orientale' },
      { label: 'Blatte américaine', href: '/blatte-americaine' },
    ],
  },
  {
    label: 'Traitement',
    href: '/traitement-cafards',
    children: [
      { label: 'Traitement des cafards', href: '/traitement-cafards' },
      { label: 'Traitement des blattes', href: '/traitement-blattes' },
      { label: 'Désinsectisation cafards', href: '/desinsectisation-cafards' },
      { label: 'Prévention', href: '/prevention-cafards' },
    ],
  },
  {
    label: 'Vos locaux',
    href: '/cafards-particuliers',
    children: [
      { label: 'Particuliers', href: '/cafards-particuliers' },
      { label: 'Copropriétés', href: '/cafards-coproprietes' },
      { label: 'Restaurants', href: '/cafards-restaurants' },
      { label: 'Commerces', href: '/cafards-commerces' },
      { label: 'Hôtels', href: '/cafards-hotels' },
      { label: 'Entreprises & bureaux', href: '/cafards-entreprises' },
    ],
  },
  {
    label: 'Île-de-France',
    href: '/zones-intervention',
    children: [
      { label: 'Toutes les zones', href: '/zones-intervention' },
      { label: 'Paris (75)', href: '/zones-intervention/paris' },
      { label: 'Hauts-de-Seine (92)', href: '/zones-intervention/hauts-de-seine' },
      { label: 'Seine-Saint-Denis (93)', href: '/zones-intervention/seine-saint-denis' },
      { label: 'Val-de-Marne (94)', href: '/zones-intervention/val-de-marne' },
      { label: 'Seine-et-Marne (77)', href: '/zones-intervention/seine-et-marne' },
      { label: 'Yvelines (78)', href: '/zones-intervention/yvelines' },
      { label: 'Essonne (91)', href: '/zones-intervention/essonne' },
      { label: "Val-d'Oise (95)", href: '/zones-intervention/val-doise' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];
