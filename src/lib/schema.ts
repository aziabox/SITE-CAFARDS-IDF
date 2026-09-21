import { site } from '../data/site';

const abs = (path: string) => new URL(path, site.url).href;

/** Organisation / entreprise locale de services. */
export function organizationSchema() {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': abs('/#organisation'),
    name: site.brand,
    legalName: site.legalName,
    description: site.shortDescription,
    url: abs('/'),
    telephone: site.phoneE164,
    email: site.email,
    image: abs('/img/blattis-og.png'),
    logo: { '@type': 'ImageObject', url: abs('/img/blattis-logo.svg') },
    knowsAbout: [
      'Traitement des cafards',
      'Traitement des blattes',
      'Désinsectisation',
      'Blatte germanique',
      'Blatte orientale',
      'Blatte américaine',
      'Prévention des infestations',
    ],
    areaServed: site.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    openingHoursSpecification: site.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneE164,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['fr'],
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': abs('/#site'),
    url: abs('/'),
    name: site.brand,
    inLanguage: site.locale,
    description: site.shortDescription,
    publisher: { '@id': abs('/#organisation') },
  };
}

export function webPageSchema(opts: {
  url: string;
  title: string;
  description: string;
  breadcrumbId?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': abs(opts.url) + '#page',
    url: abs(opts.url),
    name: opts.title,
    description: opts.description,
    inLanguage: site.locale,
    isPartOf: { '@id': abs('/#site') },
    about: { '@id': abs('/#organisation') },
    ...(opts.breadcrumbId ? { breadcrumb: { '@id': opts.breadcrumbId } } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

export function breadcrumbSchema(url: string, items: Array<{ label: string; href?: string }>) {
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(url) + '#breadcrumb',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: abs(item.href) } : {}),
    })),
  };
}

/** Service : uniquement pour les pages qui décrivent réellement une prestation. */
export function serviceSchema(opts: {
  url: string;
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: readonly string[];
}) {
  return {
    '@type': 'Service',
    '@id': abs(opts.url) + '#service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? 'Traitement des cafards et des blattes',
    provider: { '@id': abs('/#organisation') },
    areaServed: (opts.areaServed ?? site.areaServed).map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    audience: { '@type': 'Audience', audienceType: 'Particuliers et professionnels' },
  };
}

export function faqSchema(url: string, items: Array<{ q: string; a: string }>) {
  return {
    '@type': 'FAQPage',
    '@id': abs(url) + '#faq',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function articleSchema(opts: {
  url: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    '@type': 'Article',
    '@id': abs(opts.url) + '#article',
    headline: opts.title,
    description: opts.description,
    inLanguage: site.locale,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@id': abs('/#organisation') },
    publisher: { '@id': abs('/#organisation') },
    mainEntityOfPage: { '@id': abs(opts.url) + '#page' },
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
  };
}

/** Assemble le graphe JSON-LD final. */
export function graph(nodes: object[]) {
  return JSON.stringify(
    { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) },
    null,
    0,
  );
}
