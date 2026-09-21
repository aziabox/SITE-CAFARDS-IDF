/**
 * Fiches d'espèces.
 * Les caractéristiques indiquées correspondent aux descriptions couramment
 * admises pour ces espèces. Aucune caractéristique n'est inventée et les
 * formulations restent prudentes lorsque le comportement varie selon le contexte.
 */

export type Espece = {
  slug: string;
  nom: string;
  nomLatin: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  answer: string;
  apparence: string[];
  taille: string;
  couleur: string;
  environnement: string[];
  habitudes: string[];
  signes: string[];
  lieux: string[];
  prevention: string[];
  traitement: string[];
  faq: Array<{ q: string; a: string }>;
  /** Élément distinctif mis en avant sur la page d'accueil et la page pilier. */
  reperes: string[];
};

export const especes: Espece[] = [
  {
    slug: 'blatte-germanique',
    nom: 'Blatte germanique',
    nomLatin: 'Blattella germanica',
    short:
      "L'espèce la plus fréquemment rencontrée en logement et en cuisine professionnelle. De petite taille, elle reste à proximité immédiate de la chaleur et de l'eau.",
    metaTitle: 'Blatte germanique : la reconnaître et la traiter',
    metaDescription:
      "Blatte germanique (Blattella germanica) : apparence, taille, environnement, signes d'infestation, lieux fréquentés, prévention et traitement professionnel.",
    h1: 'Blatte germanique (Blattella germanica)',
    lede:
      "C'est l'espèce que l'on rencontre le plus souvent dans les cuisines de logements et de locaux professionnels en Île-de-France.",
    answer:
      "La blatte germanique est un petit cafard brun clair de 10 à 15 mm, reconnaissable à deux bandes sombres parallèles sur le pronotum, la plaque située juste derrière la tête. Elle reste à proximité de la chaleur et de l'eau, surtout en cuisine et en salle de bain.",
    apparence: [
      "Deux bandes longitudinales sombres, bien nettes, sur le pronotum : c'est le critère le plus fiable pour la distinguer des autres espèces.",
      "Corps allongé, aplati, de teinte brun clair à ocre, légèrement luisant.",
      "Ailes présentes et recouvrant l'abdomen chez l'adulte, mais l'espèce ne se déplace pratiquement pas en volant.",
      "Les jeunes (larves) sont plus foncés, presque noirs, avec une bande claire visible sur le dos : ils sont souvent pris pour une autre espèce.",
    ],
    taille: '10 à 15 mm à l’état adulte',
    couleur: 'Brun clair à ocre, avec deux bandes sombres sur le pronotum',
    environnement: [
      "Recherche une température élevée et une humidité constante : c'est pourquoi elle s'installe près des appareils qui chauffent.",
      "Occupe des volumes fermés et étroits : arrière et socle des appareils, coffrages de canalisations, vides de plinthe, charnières de meubles.",
      "Se maintient difficilement dans des locaux froids et secs, ce qui explique sa concentration dans les cuisines et les salles d'eau.",
    ],
    habitudes: [
      "Activité principalement nocturne : les individus sortent lorsque la pièce est calme et sombre.",
      "Déplacements courts, généralement à moins de quelques mètres du refuge, le long des angles et des jonctions.",
      "La femelle porte son oothèque jusqu'à un stade avancé du développement, ce qui la rend moins vulnérable qu'une oothèque déposée.",
      "Observer des individus en plein jour indique généralement une population déjà importante, l'espace de refuge devenant insuffisant.",
    ],
    signes: [
      "Petits points noirs semblables à des grains de poivre dans les angles de placards ou sur les charnières.",
      "Traces brunes à l'arrière ou sous les appareils, formant parfois des coulures.",
      "Odeur particulière, un peu grasse, perceptible lorsque la population est installée depuis longtemps.",
      "Présence d'individus de tailles différentes, signe d'une reproduction en cours sur place.",
      "Enveloppes d'oothèques vides dans les interstices.",
    ],
    lieux: [
      'Arrière et socle du réfrigérateur',
      'Sous et derrière le lave-vaisselle',
      'Dessous d’évier et coffrage de canalisations',
      'Vides de plinthe des meubles bas',
      'Contour du four et de la plaque de cuisson',
      'Machine à café et petits appareils chauffants',
      'Gaines techniques et trappes de visite',
    ],
    prevention: [
      "Essuyer les points d'eau le soir : évier, plan de travail, bac de dégivrage du réfrigérateur.",
      "Conserver les denrées sèches dans des contenants fermés plutôt que dans leur emballage d'origine.",
      "Nettoyer périodiquement le dessous et l'arrière des appareils, zones rarement atteintes.",
      "Limiter les cartons et papiers dans les placards bas.",
      "Reboucher les passages de canalisations une fois le diagnostic réalisé.",
    ],
    traitement: [
      "Le traitement s'appuie d'abord sur l'identification des refuges : il ne sert à rien d'agir sur des surfaces dégagées.",
      "Les produits sont positionnés dans les volumes fermés et hors de portée, à proximité des zones de passage relevées.",
      "Un contrôle après quelques semaines permet de vérifier l'absence de nouvelle génération issue des oothèques.",
      "En immeuble, le périmètre inclut les logements voisins et les réseaux qui les relient lorsque le diagnostic le justifie.",
    ],
    reperes: [
      'Deux bandes sombres derrière la tête',
      'Petite taille (10–15 mm)',
      'Cuisines et salles de bain',
      'Espèce la plus fréquente en logement',
    ],
    faq: [
      {
        q: 'Comment distinguer une blatte germanique d’une jeune blatte orientale ?',
        a: "Les deux bandes sombres sur le pronotum de la blatte germanique constituent le critère le plus sûr. Les jeunes blattes orientales sont uniformément très sombres et plus trapues, sans ces bandes parallèles.",
      },
      {
        q: 'La blatte germanique peut-elle voler ?',
        a: "Elle possède des ailes couvrant l'abdomen mais ne s'en sert pratiquement pas pour se déplacer. Les observations concernent presque toujours des individus au sol ou sur une paroi verticale.",
      },
      {
        q: 'Pourquoi cette espèce est-elle plus difficile à éliminer ?',
        a: "Parce qu'elle se reproduit rapidement dans des refuges très étroits et difficiles d'accès, et parce que la femelle conserve son oothèque sur elle. Un traitement qui n'atteint pas ces refuges laisse en place une génération suivante.",
      },
      {
        q: 'Voir un seul individu signifie-t-il qu’il y en a beaucoup ?',
        a: "Pas nécessairement, mais une observation isolée mérite un examen des zones fermées voisines. Voir plusieurs individus, ou des individus de tailles différentes, indique en revanche une population installée.",
      },
    ],
  },

  {
    slug: 'blatte-orientale',
    nom: 'Blatte orientale',
    nomLatin: 'Blatta orientalis',
    short:
      "Plus grande et plus sombre, elle recherche les endroits frais et humides : caves, sous-sols, canalisations, locaux techniques en partie basse.",
    metaTitle: 'Blatte orientale : la reconnaître et la traiter',
    metaDescription:
      "Blatte orientale (Blatta orientalis) : apparence, taille, environnement humide et frais, signes, lieux fréquentés, prévention et traitement professionnel.",
    h1: 'Blatte orientale (Blatta orientalis)',
    lede:
      "On la rencontre surtout dans les parties basses des bâtiments : caves, sous-sols, locaux techniques et abords de canalisations.",
    answer:
      "La blatte orientale est un cafard sombre, presque noir et d'aspect luisant, mesurant 20 à 30 mm. Contrairement à la blatte germanique, elle supporte des températures plus fraîches et privilégie les zones humides en partie basse des bâtiments.",
    apparence: [
      "Teinte brun très foncé à noir, avec un aspect luisant caractéristique.",
      "Corps plus large et plus trapu que celui de la blatte germanique.",
      "Absence de bandes sur le pronotum, qui est uniformément sombre.",
      "Ailes courtes chez la femelle, plus développées chez le mâle, mais l'espèce ne vole pas.",
    ],
    taille: '20 à 30 mm à l’état adulte',
    couleur: 'Brun très foncé à noir, luisant',
    environnement: [
      "Tolère des températures plus basses que la blatte germanique, ce qui lui permet d'occuper des locaux non chauffés.",
      "Recherche une humidité marquée : abords de canalisations, siphons, regards, sols humides.",
      "S'installe dans les volumes enterrés ou semi-enterrés, où les conditions varient peu au cours de l'année.",
    ],
    habitudes: [
      "Activité nocturne, avec des déplacements au sol plus lents et plus visibles que ceux de la blatte germanique.",
      "Se déplace volontiers le long des canalisations et des réseaux d'évacuation.",
      "Dépose son oothèque dans un endroit abrité plutôt que de la porter jusqu'à l'éclosion.",
      "Peut apparaître ponctuellement dans les étages en remontant par une gaine ou un conduit.",
    ],
    signes: [
      "Individus sombres observés au sol dans une cave, un garage ou une buanderie.",
      "Présence près d'un regard d'évacuation, d'un siphon de sol ou d'une canalisation suintante.",
      "Enveloppes d'oothèques déposées dans les interstices d'un sol ou d'un mur de sous-sol.",
      "Observations concentrées en partie basse, sans présence notable en cuisine.",
    ],
    lieux: [
      'Caves et sous-sols',
      'Locaux de chauffage et buanderies',
      'Abords de canalisations et regards',
      'Locaux de collecte des déchets',
      'Vides sanitaires',
      'Garages semi-enterrés',
      'Cours et coursives humides',
    ],
    prevention: [
      "Réduire l'humidité des locaux enterrés par une ventilation adaptée.",
      "Maintenir les siphons de sol en eau pour éviter qu'ils s'assèchent et laissent passer les insectes.",
      "Réparer les fuites et les suintements le long des canalisations.",
      "Éviter les stockages de cartons et de bois directement au sol dans les caves.",
      "Vérifier l'état des soupiraux et des grilles d'aération basses.",
    ],
    traitement: [
      "L'inspection porte en priorité sur les parties basses et les réseaux, pas sur les pièces de vie.",
      "La recherche du point d'entrée est déterminante : un traitement sans correction de l'accès reste temporaire.",
      "Le traitement des zones humides est associé à des recommandations sur la ventilation et l'étanchéité.",
      "En immeuble, l'accès aux locaux techniques par le syndic ou le gardien conditionne la qualité du résultat.",
    ],
    reperes: [
      'Grande taille (20–30 mm)',
      'Couleur presque noire, luisante',
      'Caves, sous-sols, canalisations',
      'Supporte le froid et l’humidité',
    ],
    faq: [
      {
        q: 'La blatte orientale monte-t-elle dans les étages ?',
        a: "Elle peut remonter par une gaine technique, un conduit ou une colonne, mais elle ne s'installe généralement pas durablement dans un logement chauffé et sec. Les observations en étage sont le plus souvent ponctuelles.",
      },
      {
        q: 'Pourquoi en trouve-t-on dans ma cave et pas dans ma cuisine ?',
        a: "Parce que les conditions qu'elle recherche — fraîcheur relative et humidité — se trouvent en partie basse. Une cuisine chauffée et sèche ne lui convient pas aussi bien qu'à la blatte germanique.",
      },
      {
        q: 'Cette espèce est-elle plus facile à traiter ?',
        a: "Elle se reproduit plus lentement que la blatte germanique, ce qui joue en faveur du traitement. En revanche, son environnement — réseaux, regards, vides sanitaires — est souvent moins accessible, ce qui complique l'inspection.",
      },
    ],
  },

  {
    slug: 'blatte-americaine',
    nom: 'Blatte américaine',
    nomLatin: 'Periplaneta americana',
    short:
      "La plus grande des espèces couramment citées. Elle est associée aux réseaux chauds et humides et reste moins fréquente en logement en France.",
    metaTitle: 'Blatte américaine : la reconnaître et la traiter',
    metaDescription:
      "Blatte américaine (Periplaneta americana) : apparence, taille, environnement, signes, lieux fréquentés, prévention et traitement professionnel.",
    h1: 'Blatte américaine (Periplaneta americana)',
    lede:
      "Nettement plus grande que les deux espèces précédentes, elle est surtout associée aux réseaux techniques chauds et humides.",
    answer:
      "La blatte américaine est un grand cafard brun-roux de 30 à 40 mm, avec une bordure claire sur le pronotum. Elle fréquente les réseaux chauds et humides — canalisations, sous-sols techniques, grandes cuisines collectives — et reste moins courante en logement en France que la blatte germanique.",
    apparence: [
      "Teinte brun-roux à acajou, plus claire que celle de la blatte orientale.",
      "Bordure jaunâtre dessinant un liseré sur le pourtour du pronotum.",
      "Ailes bien développées dépassant l'extrémité de l'abdomen chez l'adulte.",
      "Silhouette élancée malgré la grande taille, avec de longues antennes.",
    ],
    taille: '30 à 40 mm à l’état adulte',
    couleur: 'Brun-roux à acajou, avec un liseré clair sur le pronotum',
    environnement: [
      "Recherche des locaux chauds et humides, avec une préférence pour les réseaux techniques.",
      "Fréquente les canalisations, les sous-sols chauffés et les vides techniques de grands bâtiments.",
      "Présente surtout dans des contextes collectifs ou industriels plutôt qu'en logement individuel.",
    ],
    habitudes: [
      "Activité nocturne, avec des déplacements plus rapides et sur de plus longues distances que les autres espèces.",
      "Capable de vol plané depuis un point haut dans certaines conditions, sans être une espèce véritablement volante.",
      "Dépose son oothèque dans un abri, souvent à proximité d'une source de chaleur.",
      "Peut apparaître dans un local par un réseau d'évacuation sans y être installée.",
    ],
    signes: [
      "Observation d'individus de grande taille, souvent près d'un réseau ou d'un local technique.",
      "Traces et déjections plus volumineuses que celles des petites espèces.",
      "Présence dans un vide technique, une galerie ou un local chauffé en sous-sol.",
      "Apparitions ponctuelles en partie haute après remontée par une gaine.",
    ],
    lieux: [
      'Galeries et vides techniques',
      'Sous-sols chauffés',
      'Réseaux d’évacuation',
      'Grandes cuisines collectives',
      'Locaux de production alimentaire',
      'Chaufferies',
      'Locaux de déchets de grands ensembles',
    ],
    prevention: [
      "Contrôler l'étanchéité des accès aux réseaux et aux vides techniques.",
      "Maintenir les siphons en eau et vérifier les regards.",
      "Limiter l'humidité et les stagnations dans les locaux techniques.",
      "Veiller à l'évacuation régulière des déchets dans les grands bâtiments.",
      "Signaler toute observation isolée : elle peut révéler une présence dans un réseau.",
    ],
    traitement: [
      "L'intervention porte sur les réseaux et les locaux techniques plutôt que sur les pièces de vie.",
      "L'identification des points de remontée est essentielle : c'est là que se joue l'efficacité du traitement.",
      "Dans un bâtiment collectif, la coordination avec le gestionnaire technique est indispensable.",
      "Le suivi consiste souvent à vérifier l'absence de nouvelles remontées après correction des accès.",
    ],
    reperes: [
      'Très grande taille (30–40 mm)',
      'Liseré clair sur le pronotum',
      'Réseaux techniques chauds et humides',
      'Moins fréquente en logement',
    ],
    faq: [
      {
        q: 'La blatte américaine vole-t-elle vraiment ?',
        a: "Elle peut effectuer un vol plané depuis un point élevé, mais elle ne se déplace pas habituellement en volant. Ses déplacements se font principalement au sol et le long des parois.",
      },
      {
        q: 'Peut-elle s’installer dans un appartement ?',
        a: "C'est possible mais moins courant. Les observations en logement correspondent souvent à des individus remontés par un réseau d'évacuation depuis un sous-sol ou une galerie technique.",
      },
      {
        q: 'Comment savoir si l’espèce vient des canalisations ?',
        a: "La localisation des observations est déterminante : proximité d'un siphon, d'un regard, d'une gaine ou d'une trappe technique. L'inspection cherche à établir le point de remontée plutôt qu'à traiter la pièce où l'insecte a été vu.",
      },
    ],
  },
];

/** Autres espèces réellement observées en France, présentées sans exagération. */
export const autresEspeces = [
  {
    nom: 'Blatte rayée (Supella longipalpa)',
    text: "Plus petite et plus claire, elle supporte des ambiances plus sèches que la blatte germanique et se réfugie volontiers en hauteur : arrière de cadres, mobilier, appareils électriques. Elle reste peu fréquente, mais sa localisation inhabituelle peut retarder l'identification.",
  },
  {
    nom: 'Blattes forestières (genre Ectobius)',
    text: "Ces espèces vivent à l'extérieur, dans la végétation et la litière. Elles peuvent pénétrer accidentellement dans une habitation, surtout en été, mais ne s'y installent pas durablement. Les confondre avec une blatte germanique conduit parfois à des traitements inutiles.",
  },
];
