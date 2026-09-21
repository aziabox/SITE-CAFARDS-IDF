/**
 * Contenu par ville.
 * Règle appliquée : chaque ville dispose d'une rédaction propre (introduction,
 * contexte bâti, problématiques, prévention, FAQ). Aucun texte n'est dupliqué
 * d'une ville à l'autre, aucune statistique locale n'est inventée et aucune
 * commune n'est décrite comme « envahie ».
 */

export type Ville = {
  slug: string;
  nom: string;
  /** « à Paris », « à Créteil », « au Chesnay »… */
  loc: string;
  departement: string; // slug du département
  departementNom: string;
  departementCode: string;
  mapX: number;
  mapY: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  intro: string[];
  batiTitle: string;
  bati: string[];
  problematiques: Array<{ title: string; text: string }>;
  preventionTitle: string;
  prevention: string[];
  quartiersLabel: string;
  quartiers: string[];
  faq: Array<{ q: string; a: string }>;
};

export const villes: Ville[] = [
  {
    slug: 'cafards-paris',
    nom: 'Paris',
    loc: 'à Paris',
    departement: 'paris',
    departementNom: 'Paris',
    departementCode: '75',
    mapX: 430.0,
    mapY: 279.9,
    metaTitle: 'Cafards à Paris : traitement et intervention spécialisée',
    metaDescription:
      "Infestation de cafards à Paris : diagnostic du logement et de l'immeuble, traitement adapté au bâti ancien, coordination avec le syndic. Intervention sur tous les arrondissements.",
    h1: 'Cafards et blattes à Paris : diagnostic et traitement',
    lede:
      "À Paris, la difficulté principale n'est pas de traiter un logement mais de comprendre comment un immeuble entier peut alimenter une infestation.",
    intro: [
      "Dans un appartement parisien, une blatte germanique se remarque souvent le soir, dans la cuisine, près de l'évier ou du réfrigérateur. Ce qui surprend les occupants, c'est que le nettoyage le plus rigoureux ne change rien. La raison est simple : la population ne vit pas sur les surfaces visibles mais dans les volumes fermés qui les entourent — coffrage de canalisation, vide derrière un meuble scellé, interstice sous un plan de travail.",
      "L'autre particularité parisienne est verticale. Un immeuble haussmannien ou un immeuble des années 1930 comporte des colonnes d'eau, des gaines et des percements réalisés au fil des rénovations. Ces passages relient les logements. C'est pourquoi une intervention sérieuse commence par établir si la présence est cantonnée à un appartement ou si elle concerne une colonne, voire une cage entière.",
    ],
    batiTitle: 'Ce que le bâti parisien change concrètement',
    bati: [
      "Les cuisines parisiennes sont souvent petites et très équipées. Réfrigérateur encastré, lave-vaisselle sous évier, four intégré : autant de volumes chauds et fermés. Le diagnostic implique de déplacer ou d'ouvrir ces éléments, faute de quoi on traite une surface plutôt qu'un refuge.",
      "Les immeubles anciens ajoutent leurs propres contraintes. Les plinthes se décollent, les trous de passage de canalisation ne sont pas rebouchés, les faux plafonds installés lors d'une rénovation créent un volume continu au-dessus de plusieurs pièces. Ces éléments sont examinés un par un, car ce sont eux qui déterminent où positionner le traitement.",
      "Enfin, la mixité entre logements et commerces est très présente. Un local alimentaire en rez-de-chaussée, une cuisine de restaurant dans la cour, un local poubelles à l'entrée : chacun peut entretenir une population indépendamment des appartements des étages.",
    ],
    problematiques: [
      {
        title: 'Colonnes techniques et voisinage',
        text: "Lorsque deux appartements superposés signalent des observations, la colonne est très probablement concernée. Le traitement s'organise alors sur plusieurs lots plutôt qu'un seul, avec l'accord des occupants.",
      },
      {
        title: 'Restauration en pied d’immeuble',
        text: "Les arrondissements centraux concentrent une activité de restauration dense. Un examen conjoint du local commercial et des logements situés au-dessus évite de traiter deux fois la même population sans jamais l'atteindre.",
      },
      {
        title: 'Locations de courte durée',
        text: "La rotation rapide d'occupants multiplie les occasions d'introduction par les bagages et les cartons. Une inspection entre deux occupations reste le moyen le plus simple d'éviter une installation.",
      },
    ],
    preventionTitle: 'Limiter les conditions favorables dans un appartement parisien',
    prevention: [
      "Reboucher les passages de canalisations sous l'évier et derrière le lave-linge après le diagnostic, pas avant.",
      "Essuyer le bac de dégivrage et le dessous du réfrigérateur : c'est l'un des points d'eau les plus constants d'une cuisine.",
      "Éviter de stocker cartons et sacs papier dans les placards bas, qui constituent un abri sec et sombre.",
      "Signaler au syndic toute observation répétée, même si votre logement semble seul concerné.",
    ],
    quartiersLabel: 'Arrondissements couverts',
    quartiers: [
      'Paris Centre (1ᵉʳ–4ᵉ)', '5ᵉ', '6ᵉ', '7ᵉ', '8ᵉ', '9ᵉ', '10ᵉ', '11ᵉ', '12ᵉ',
      '13ᵉ', '14ᵉ', '15ᵉ', '16ᵉ', '17ᵉ', '18ᵉ', '19ᵉ', '20ᵉ',
    ],
    faq: [
      {
        q: "J'habite un immeuble haussmannien, mes voisins n'ont rien vu : est-ce possible ?",
        a: "Oui. Une population peut rester longtemps confinée à une seule cuisine avant de se diffuser. À l'inverse, des voisins peuvent héberger des blattes sans les remarquer, notamment s'ils cuisinent peu. L'absence de signalement ne prouve pas l'absence d'insectes.",
      },
      {
        q: 'Mon propriétaire doit-il prendre en charge le traitement ?',
        a: "Cela dépend de l'origine de l'infestation et des clauses du bail. Un diagnostic écrit indiquant si la présence provient des parties communes ou du logement lui-même constitue l'élément le plus utile pour trancher la question avec le propriétaire ou le syndic.",
      },
      {
        q: "Un traitement suffit-il dans un appartement parisien ?",
        a: "Lorsque la présence est récente et limitée à une pièce, une intervention suivie d'un contrôle peut suffire. Lorsque plusieurs pièces ou plusieurs logements sont concernés, un traitement en deux temps est généralement nécessaire. Aucune garantie de résultat en une seule visite ne peut être annoncée à l'avance.",
      },
    ],
  },

  {
    slug: 'cafards-boulogne-billancourt',
    nom: 'Boulogne-Billancourt',
    loc: 'à Boulogne-Billancourt',
    departement: 'hauts-de-seine',
    departementNom: 'Hauts-de-Seine',
    departementCode: '92',
    mapX: 382.4,
    mapY: 296.3,
    metaTitle: 'Cafards à Boulogne-Billancourt (92) : traitement des blattes',
    metaDescription:
      "Traitement des cafards à Boulogne-Billancourt : immeubles anciens du centre, résidences récentes des Rives de Seine, commerces. Diagnostic et intervention adaptée.",
    h1: 'Cafards et blattes à Boulogne-Billancourt',
    lede:
      "Boulogne-Billancourt juxtapose des immeubles d'avant-guerre et des résidences livrées ces vingt dernières années, deux contextes qui n'appellent pas la même approche.",
    intro: [
      "Dans la partie ancienne de la commune, les immeubles présentent les caractéristiques classiques du collectif d'avant-guerre : cuisines étroites, colonnes techniques anciennes, coffrages en bois, plinthes creuses. Les blattes germaniques y trouvent des abris nombreux et proches des points d'eau, et la présence se diffuse verticalement si elle n'est pas traitée assez tôt.",
      "Sur le secteur des Rives de Seine et dans les programmes plus récents, la configuration est différente. Les gaines sont mieux compartimentées, mais les cuisines intégrées et les locaux techniques mutualisés — locaux de déchets, parkings, laveries — créent d'autres points d'attention. Dans ce type de résidence, le diagnostic porte souvent autant sur les parties communes que sur les logements.",
    ],
    batiTitle: 'Deux générations de bâti dans la même ville',
    bati: [
      "Le centre-ville et les rues autour de l'avenue Jean-Baptiste-Clément comportent un parc ancien où les interventions ressemblent à celles de Paris : lecture de la colonne concernée, inspection des coffrages, coordination avec le syndic.",
      "Les programmes récents du Trapèze et des Rives de Seine présentent des cuisines entièrement équipées. Les zones à inspecter sont resserrées : socle du lave-vaisselle, arrière du four, plinthe technique, passage de la hotte.",
      "La commune compte également une activité commerciale dense, notamment alimentaire, avec des réserves souvent réduites. Ces locaux sont examinés en tenant compte des horaires d'ouverture.",
    ],
    problematiques: [
      {
        title: 'Résidences avec locaux mutualisés',
        text: "Local de déchets, laverie, local vélos : lorsque ces espaces sont reliés aux halls ou aux circulations, ils sont inspectés en même temps que les logements concernés.",
      },
      {
        title: 'Immeubles anciens du centre',
        text: "Les percements de canalisation non rebouchés et les coffrages en bois sont les premiers points examinés. Ils expliquent souvent la réapparition d'insectes après un traitement partiel.",
      },
      {
        title: 'Commerces de bouche',
        text: "Réserves compactes, chambres froides, zones de plonge : l'intervention est organisée en dehors des heures de service et porte en priorité sur les équipements et les jonctions.",
      },
    ],
    preventionTitle: 'Bonnes pratiques à Boulogne-Billancourt',
    prevention: [
      "Dans un logement récent, dégager périodiquement le socle du lave-vaisselle et vérifier l'absence d'humidité persistante.",
      "Dans un immeuble ancien, contrôler l'état des plinthes et des passages de tuyaux avant tout traitement.",
      "En résidence, signaler les observations au gestionnaire pour qu'il puisse faire vérifier les locaux communs.",
      "En commerce, sortir les cartons de livraison de la réserve après déballage.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre-ville', 'Billancourt', 'Rives de Seine — Le Trapèze', 'Les Princes — Marmottan',
      'Silly — Gallieni', 'République', 'Parchamp — Albert-Kahn',
    ],
    faq: [
      {
        q: 'Une résidence récente peut-elle vraiment être concernée ?',
        a: "Oui. Ce qui attire les blattes, c'est la combinaison de chaleur, d'humidité et d'abris fermés, que l'on trouve aussi bien dans une cuisine équipée neuve que dans un immeuble ancien. La différence porte sur les zones à inspecter, pas sur le niveau de risque.",
      },
      {
        q: 'Le syndic peut-il faire traiter uniquement les parties communes ?',
        a: "C'est possible, mais rarement suffisant lorsque des logements sont déjà concernés. Le traitement des parties communes limite la circulation ; celui des logements réduit la population. Les deux sont complémentaires.",
      },
      {
        q: 'Intervenez-vous dans les commerces du centre-ville ?',
        a: "Oui, avec un protocole distinct de celui des logements : priorité aux équipements, aux réserves et aux zones de plonge, et planification en dehors des heures d'ouverture.",
      },
    ],
  },

  {
    slug: 'cafards-nanterre',
    nom: 'Nanterre',
    loc: 'à Nanterre',
    departement: 'hauts-de-seine',
    departementNom: 'Hauts-de-Seine',
    departementCode: '92',
    mapX: 362.3,
    mapY: 254.6,
    metaTitle: 'Cafards à Nanterre (92) : traitement des blattes',
    metaDescription:
      "Cafards et blattes à Nanterre : habitat collectif, résidences universitaires, pavillonnaire et zones tertiaires. Diagnostic et traitement adapté au bâtiment.",
    h1: 'Cafards et blattes à Nanterre',
    lede:
      "Nanterre réunit des ensembles collectifs, un tissu pavillonnaire et des sites tertiaires proches de La Défense, avec pour chacun des points de vigilance distincts.",
    intro: [
      "Une partie des demandes à Nanterre concerne des ensembles collectifs où la question déterminante est l'étendue de la présence. Avant de traiter, il faut savoir combien de logements sont concernés et sur quels niveaux. Sans cette information, un traitement isolé se heurte régulièrement à une population encore installée dans les réseaux communs ou chez un voisin direct.",
      "La commune accueille aussi des résidences destinées aux étudiants et des logements à rotation rapide. Dans ces sites, la prévention se joue au moment des emménagements : un carton, un four à micro-ondes ou un petit meuble récupéré suffisent à introduire des blattes dans une kitchenette. Une vérification systématique entre deux occupations réduit sensiblement ce risque.",
    ],
    batiTitle: 'Collectif, résidences et tissu pavillonnaire',
    bati: [
      "Dans les immeubles collectifs, les gaines techniques et les trappes de visite en salle de bain constituent les zones à examiner en premier. Elles sont chaudes, humides et rarement ouvertes.",
      "Les résidences à kitchenettes présentent un plan resserré : réfrigérateur, plaque, évier et rangements sur quelques mètres. Le traitement y est très localisé, mais exige un accès à l'arrière des appareils.",
      "Le pavillonnaire du plateau et les maisons du centre soulèvent d'autres questions : bas de porte de garage, buanderie, regards d'évacuation, cave semi-enterrée.",
    ],
    problematiques: [
      {
        title: 'Logements à rotation rapide',
        text: "Le point de bascule est l'emménagement. Inspecter l'arrière des appareils et les plinthes avant l'installation du mobilier évite le plus souvent une installation durable.",
      },
      {
        title: 'Ensembles collectifs',
        text: "Le diagnostic est mené à l'échelle de la cage : logements concernés, niveaux, état des gaines. Le traitement suit ce périmètre plutôt qu'une demande isolée.",
      },
      {
        title: 'Sites tertiaires et restauration collective',
        text: "Cuisines de production, laveries et locaux de déchets sont traités en coordination avec les services techniques, sur des créneaux hors activité.",
      },
    ],
    preventionTitle: 'Réduire les risques à Nanterre',
    prevention: [
      "Avant d'installer un électroménager d'occasion, inspecter le compresseur, le dessous et l'arrière de l'appareil.",
      "En kitchenette, éviter de laisser de la vaisselle humide la nuit : l'eau disponible compte autant que la nourriture.",
      "En collectif, demander la vérification des trappes de gaine lors du diagnostic.",
      "En maison, maintenir le sous-sol ventilé et éloigner les stockages des murs.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre — Vieux Pont', 'Petit-Nanterre', 'Parc Sud', 'Plateau — Mont-Valérien',
      'Université', 'Provinces Françaises', 'Chemin-de-l’Île',
    ],
    faq: [
      {
        q: 'Une kitchenette peut-elle être traitée en une seule visite ?',
        a: "Lorsque la présence est récente et strictement localisée, c'est envisageable, avec un contrôle ultérieur pour vérifier l'absence de reprise. Si la résidence compte plusieurs logements concernés, le traitement est organisé à une échelle plus large.",
      },
      {
        q: 'Comment savoir si mes voisins sont concernés ?',
        a: "Par le signalement au gestionnaire ou au syndic, qui peut recouper les demandes. C'est souvent le seul moyen d'obtenir une vision d'ensemble, car les occupants ne communiquent pas spontanément sur ce sujet.",
      },
      {
        q: 'Intervenez-vous dans les locaux professionnels du secteur ?',
        a: "Oui, en habitation comme en local professionnel. Pour un site tertiaire, l'intervention est planifiée avec le service technique et porte d'abord sur les zones de restauration et de déchets.",
      },
    ],
  },

  {
    slug: 'cafards-montreuil',
    nom: 'Montreuil',
    loc: 'à Montreuil',
    departement: 'seine-saint-denis',
    departementNom: 'Seine-Saint-Denis',
    departementCode: '93',
    mapX: 474.9,
    mapY: 274.8,
    metaTitle: 'Cafards à Montreuil (93) : traitement des blattes',
    metaDescription:
      "Traitement des cafards à Montreuil : copropriétés du Bas-Montreuil, immeubles anciens, ateliers reconvertis et commerces. Diagnostic et intervention coordonnée.",
    h1: 'Cafards et blattes à Montreuil',
    lede:
      "Montreuil présente un bâti particulièrement varié : immeubles anciens, ateliers reconvertis en logements, copropriétés des années 1970 et maisons de ville.",
    intro: [
      "Cette diversité a une conséquence pratique : deux demandes voisines peuvent relever de logiques totalement différentes. Dans un ancien atelier transformé en logement, les volumes techniques ne suivent pas les schémas habituels : gaines improvisées, cloisons doublées, réseaux apparents. L'inspection y prend plus de temps mais reste indispensable, car c'est dans ces vides que la population se maintient.",
      "Dans les copropriétés plus classiques, notamment autour de Croix-de-Chavaux et du centre-ville, la question redevient celle de la colonne technique et des parties communes. Le traitement gagne alors à être discuté avec le syndic afin de couvrir les logements réellement concernés et les zones qui les relient.",
    ],
    batiTitle: 'Un bâti hétérogène qui impose une inspection réelle',
    bati: [
      "Le Bas-Montreuil comporte de nombreux bâtiments anciens et d'anciens locaux d'activité reconvertis. Les cheminements techniques y sont souvent irréguliers, ce qui rend l'inspection plus déterminante que le choix du produit.",
      "Les copropriétés du centre et des hauteurs présentent des configurations plus standard : colonnes verticales, locaux de déchets, caves. L'évaluation de l'étendue reste la première étape.",
      "Les maisons de ville et pavillons des quartiers hauts posent les questions habituelles de la maison individuelle : point d'entrée, cave, buanderie, évacuation.",
    ],
    problematiques: [
      {
        title: 'Anciens ateliers et lofts',
        text: "Cloisons doublées, faux plafonds et réseaux non repérés : l'inspection doit établir la cartographie réelle des vides avant toute intervention.",
      },
      {
        title: 'Copropriétés du centre',
        text: "Diagnostic à l'échelle de la cage, inspection des gaines et des locaux communs, puis traitement des logements concernés.",
      },
      {
        title: 'Commerces et marchés',
        text: "Réserves, arrière-boutiques et zones de livraison sont examinées en priorité, en tenant compte des flux de cartons et de cageots.",
      },
    ],
    preventionTitle: 'Points de vigilance à Montreuil',
    prevention: [
      "Dans un logement atypique, repérer et signaler les trappes, coffrages et vides accessibles lors de la prise de contact.",
      "Éviter de stocker cageots et cartons dans un cellier ou une buanderie.",
      "En copropriété, faire remonter les observations même ponctuelles au syndic.",
      "Vérifier l'étanchéité autour des évacuations de lave-linge et de lave-vaisselle.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Bas-Montreuil', 'Croix-de-Chavaux', 'Centre-ville', 'Bel-Air — Grands-Pêchers',
      'La Noue — Clos-Français', 'Ruffins — Théophile-Sueur', 'Solidarité — Carnot',
    ],
    faq: [
      {
        q: 'Mon logement est un ancien atelier : le traitement change-t-il ?',
        a: "La méthode reste la même, mais la phase d'inspection est plus longue. Les réseaux et les vides techniques de ces bâtiments ne suivent pas les plans habituels, et il faut les identifier avant de positionner un traitement.",
      },
      {
        q: 'Les cafards peuvent-ils venir du marché voisin ?',
        a: "Un marché ou un commerce alimentaire peut constituer une source de population, principalement via les cageots et les cartons. Cela n'en fait pas systématiquement l'origine d'une infestation dans un logement : le diagnostic cherche à établir les chemins réels, pas à désigner une cause plausible.",
      },
      {
        q: 'Faut-il prévenir les voisins avant une intervention ?',
        a: "Ce n'est pas obligatoire pour traiter votre logement, mais c'est utile. Dans un immeuble, un traitement simultané ou rapproché des logements concernés donne des résultats plus stables qu'une série d'interventions espacées.",
      },
    ],
  },

  {
    slug: 'cafards-saint-denis',
    nom: 'Saint-Denis',
    loc: 'à Saint-Denis',
    departement: 'seine-saint-denis',
    departementNom: 'Seine-Saint-Denis',
    departementCode: '93',
    mapX: 432.4,
    mapY: 223.6,
    metaTitle: 'Cafards à Saint-Denis (93) : traitement des blattes',
    metaDescription:
      "Cafards et blattes à Saint-Denis : habitat collectif, copropriétés, centre ancien et commerces alimentaires. Diagnostic de l'étendue et traitement coordonné.",
    h1: 'Cafards et blattes à Saint-Denis',
    lede:
      "À Saint-Denis, la coordination entre logements, parties communes et locaux commerciaux détermine largement la durabilité d'un traitement.",
    intro: [
      "La commune compte un centre ancien dense et de nombreux ensembles collectifs. Dans les deux cas, le point commun est la mutualisation des réseaux : une gaine, une colonne d'eau ou un local technique peut desservir un grand nombre de logements. Lorsqu'une population de blattes germaniques s'y installe, la présence se signale progressivement dans plusieurs appartements, souvent sans lien apparent entre eux.",
      "Le second facteur est commercial. Le centre-ville et les abords du marché accueillent une activité alimentaire importante, avec des réserves parfois exiguës et des flux de livraison quotidiens. Ces locaux ne sont pas responsables par principe, mais ils font partie du périmètre à examiner lorsqu'un immeuble mixte est concerné.",
    ],
    batiTitle: 'Centre ancien, grands ensembles et locaux commerciaux',
    bati: [
      "Dans le centre ancien, les immeubles comportent des coffrages, des conduits désaffectés et des cours intérieures qui relient logements et commerces. L'inspection porte sur ces jonctions autant que sur les cuisines.",
      "Dans les ensembles collectifs, les gaines verticales et les locaux de déchets constituent les points d'attention majeurs, en particulier pour les logements des premiers niveaux.",
      "Les locaux alimentaires — épiceries, boucheries, restaurants — sont examinés séparément, avec un protocole tenant compte des zones de préparation et de stockage.",
    ],
    problematiques: [
      {
        title: 'Immeubles mixtes logements-commerces',
        text: "L'examen conjoint des deux niveaux évite les traitements successifs sans résultat. Sans accès au local commercial, un traitement des logements ne tient généralement pas dans le temps.",
      },
      {
        title: 'Locaux de déchets en collectif',
        text: "Chauffés, humides et alimentés en continu, ils peuvent entretenir une population. Leur inspection est systématique lorsque les premiers niveaux signalent des observations.",
      },
      {
        title: 'Signalement et coordination',
        text: "L'étendue réelle n'apparaît que si les occupants signalent. Une remontée organisée vers le bailleur ou le syndic permet de définir un périmètre pertinent.",
      },
    ],
    preventionTitle: 'Ce qui aide à Saint-Denis',
    prevention: [
      "Signaler par écrit au bailleur ou au syndic, en précisant les pièces et la fréquence.",
      "Vérifier l'état des joints autour des canalisations de cuisine et de salle de bain.",
      "Conserver les denrées sèches dans des contenants fermés plutôt que dans leur emballage d'origine.",
      "En commerce, contrôler les cartons et cageots à la réception, avant mise en réserve.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre-ville — Basilique', 'Pleyel — Confluence', 'La Plaine Saint-Denis',
      'Franc-Moisin — Bel-Air', 'Floréal — Allende', 'Delaunay-Belleville', 'Grand Centre-Ville',
    ],
    faq: [
      {
        q: 'Le bailleur peut-il refuser de traiter les parties communes ?',
        a: "Un bailleur ou un syndic apprécie la demande au regard de ses obligations et des constats disponibles. Un diagnostic écrit décrivant les zones concernées et les chemins de circulation constitue le document le plus utile pour appuyer une demande.",
      },
      {
        q: 'Les blattes viennent-elles forcément du logement voisin ?',
        a: "Pas nécessairement. Elles peuvent provenir d'un local technique, d'un commerce du rez-de-chaussée, d'un local de déchets ou d'une introduction par un objet. Le diagnostic vise à identifier les chemins réels plutôt qu'à désigner un responsable.",
      },
      {
        q: 'Combien de visites faut-il prévoir ?',
        a: "En habitat collectif, un traitement comporte généralement une première intervention puis un contrôle. Le nombre exact dépend de l'étendue constatée et de l'accès obtenu aux différentes zones : il est précisé après le diagnostic, pas avant.",
      },
    ],
  },

  {
    slug: 'cafards-aubervilliers',
    nom: 'Aubervilliers',
    loc: 'à Aubervilliers',
    departement: 'seine-saint-denis',
    departementNom: 'Seine-Saint-Denis',
    departementCode: '93',
    mapX: 444.0,
    mapY: 238.9,
    metaTitle: "Cafards à Aubervilliers (93) : traitement des blattes",
    metaDescription:
      "Traitement des cafards à Aubervilliers : copropriétés, habitat ancien, entrepôts et commerces de gros. Diagnostic de l'infestation et traitement adapté.",
    h1: 'Cafards et blattes à Aubervilliers',
    lede:
      "À Aubervilliers, la présence d'activités de stockage et de commerce de gros ajoute une dimension logistique au traitement des blattes.",
    intro: [
      "La commune associe un habitat ancien, des copropriétés de différentes époques et une activité importante de négoce et d'entreposage. Cette dernière n'est pas neutre : les cartons, palettes et conteneurs constituent une voie d'introduction connue pour les blattes. Pour un commerce, contrôler ce qui entre est souvent plus efficace que multiplier les traitements en réserve.",
      "Du côté de l'habitation, les situations rejoignent celles rencontrées ailleurs en Seine-Saint-Denis : réseaux verticaux partagés, locaux de déchets, logements de premiers niveaux plus exposés. L'enjeu est d'établir l'étendue réelle avant d'intervenir, pour éviter un traitement qui ne couvre qu'une partie de la population.",
    ],
    batiTitle: 'Habitat, entrepôts et commerces de gros',
    bati: [
      "Les immeubles anciens du centre présentent des coffrages, des cours intérieures et des locaux communs souvent contigus à des activités commerciales.",
      "Les copropriétés plus récentes ont des réseaux mieux compartimentés, mais des locaux de déchets centralisés et des parkings qui servent parfois de zones de circulation.",
      "Les entrepôts et locaux de négoce concentrent de grands volumes de cartons et de palettes. Le traitement s'y accompagne nécessairement d'une organisation du stockage, sans laquelle il perd rapidement son effet.",
    ],
    problematiques: [
      {
        title: 'Flux de marchandises',
        text: "Le contrôle à la réception, le déballage hors réserve et l'élimination rapide des cartons vides constituent la première ligne de prévention dans un local de stockage.",
      },
      {
        title: 'Immeubles contigus à des locaux d’activité',
        text: "Lorsqu'un logement est mitoyen d'un local de stockage ou d'un commerce, le périmètre d'inspection inclut les deux, faute de quoi la population se maintient d'un côté.",
      },
      {
        title: 'Copropriétés et locaux de déchets',
        text: "Inspection systématique des locaux de collecte lorsque les logements bas sont concernés, et vérification de leur ventilation.",
      },
    ],
    preventionTitle: 'Mesures utiles à Aubervilliers',
    prevention: [
      "Déballer les livraisons à l'extérieur des réserves et évacuer les cartons vides sans les stocker.",
      "Surélever les stockages et laisser un passage le long des murs pour permettre l'inspection.",
      "En logement, vérifier les jonctions murales dans les pièces mitoyennes d'un local d'activité.",
      "Signaler au syndic les observations faites dans les circulations et les locaux communs.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre-ville', 'Villette — Quatre-Chemins', 'Landy — Plaine', 'Fort d’Aubervilliers',
      'Montfort', 'Paul-Bert', 'Vallès — La Frette',
    ],
    faq: [
      {
        q: 'Un entrepôt peut-il être traité sans interrompre l’activité ?',
        a: "Dans la plupart des cas, oui, en organisant l'intervention par zones et en dehors des pics d'activité. La contrainte principale n'est pas le produit mais l'accès : il faut pouvoir approcher les murs, les angles et les sous-faces de rayonnage.",
      },
      {
        q: 'Les palettes sont-elles vraiment un vecteur ?',
        a: "Elles font partie des supports régulièrement impliqués dans les introductions, avec les cartons et les cageots, en raison des interstices qu'ils comportent. C'est la raison pour laquelle un contrôle visuel à la réception est recommandé.",
      },
      {
        q: 'Mon appartement est mitoyen d’un local commercial, que faire ?',
        a: "Signaler la situation au syndic et demander un examen conjoint. Traiter seulement le logement revient souvent à réduire temporairement une population qui se reconstitue depuis le local voisin.",
      },
    ],
  },

  {
    slug: 'cafards-creteil',
    nom: 'Créteil',
    loc: 'à Créteil',
    departement: 'val-de-marne',
    departementNom: 'Val-de-Marne',
    departementCode: '94',
    mapX: 478.2,
    mapY: 326.7,
    metaTitle: 'Cafards à Créteil (94) : traitement des blattes',
    metaDescription:
      "Cafards et blattes à Créteil : grandes copropriétés, résidences des années 1970, pavillonnaire du Vieux Créteil. Diagnostic et traitement coordonné.",
    h1: 'Cafards et blattes à Créteil',
    lede:
      "Créteil compte de grandes copropriétés dont l'organisation technique conditionne directement la stratégie de traitement.",
    intro: [
      "Une part importante du parc cristolien a été construite dans les années 1960 à 1980, avec des ensembles résidentiels de grande taille. Ces bâtiments se caractérisent par des réseaux verticaux desservant de nombreux logements et par des locaux techniques mutualisés en partie basse. Lorsqu'une infestation de blattes s'installe dans ces réseaux, elle se manifeste souvent par vagues, niveau par niveau.",
      "Le traitement efficace passe donc par une cartographie préalable : quels logements, quels étages, quel côté de la cage, et quels locaux communs. Cette étape n'est pas administrative — elle détermine le périmètre du traitement et évite d'intervenir plusieurs fois sur des lots isolés sans réduire la population globale.",
    ],
    batiTitle: 'Grandes copropriétés et secteurs pavillonnaires',
    bati: [
      "Dans les grands ensembles, les gaines techniques sont accessibles par des trappes et desservent salles de bain et cuisines. Ce sont les zones prioritaires d'inspection.",
      "Les locaux de déchets, souvent situés en sous-sol ou en pied de bâtiment, constituent des réservoirs potentiels lorsqu'ils sont chauffés et peu ventilés.",
      "Le Vieux Créteil et les secteurs pavillonnaires présentent un autre profil : maisons avec sous-sol, garages, buanderies, où les observations concernent plus souvent la partie basse que la cuisine.",
    ],
    problematiques: [
      {
        title: 'Traitement à l’échelle de la cage',
        text: "Les logements concernés, leurs voisins immédiats et les gaines qui les relient forment le périmètre minimal utile dans une grande copropriété.",
      },
      {
        title: 'Locaux techniques en sous-sol',
        text: "Chaufferie, local de déchets, local de vide-ordures désaffecté : ces espaces sont inspectés avec le concours du gardien ou du syndic.",
      },
      {
        title: 'Maisons du Vieux Créteil',
        text: "Sous-sol, buanderie et regards d'évacuation sont examinés en priorité, avec une attention particulière aux espèces présentes en partie basse.",
      },
    ],
    preventionTitle: 'Prévenir une nouvelle installation à Créteil',
    prevention: [
      "En copropriété, obtenir l'accès aux gaines techniques lors du diagnostic plutôt qu'après le traitement.",
      "Ne pas obturer les trappes avant l'intervention : elles servent à l'inspection.",
      "En maison, contrôler l'humidité de la buanderie et l'état des siphons de sol.",
      "Éviter de laisser des gamelles d'animaux remplies pendant la nuit.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Vieux Créteil', 'Mont-Mesly', 'Palais — Préfecture', 'Croix-des-Mèches',
      'Échat', 'Bords de Marne', 'La Habette — Côte d’Or',
    ],
    faq: [
      {
        q: 'Pourquoi traiter plusieurs appartements et pas seulement le mien ?',
        a: "Parce que dans une grande copropriété, les logements d'une même colonne communiquent par les gaines et les passages de canalisation. Un traitement isolé réduit la population d'un lot, mais celle des lots voisins réalimente la zone.",
      },
      {
        q: 'Le gardien peut-il ouvrir les locaux techniques ?',
        a: "En général oui, avec l'accord du syndic. Cet accès change beaucoup la qualité du diagnostic, car les locaux en partie basse sont souvent les zones les plus stables pour une population installée.",
      },
      {
        q: 'Je vois des insectes uniquement dans mon garage, est-ce la même espèce ?',
        a: "Pas forcément. Une présence dans un garage ou un sous-sol humide oriente souvent vers la blatte orientale, tandis que les observations en cuisine concernent plus fréquemment la blatte germanique. L'identification modifie l'approche.",
      },
    ],
  },

  {
    slug: 'cafards-vitry-sur-seine',
    nom: 'Vitry-sur-Seine',
    loc: 'à Vitry-sur-Seine',
    departement: 'val-de-marne',
    departementNom: 'Val-de-Marne',
    departementCode: '94',
    mapX: 448.9,
    mapY: 328.7,
    metaTitle: 'Cafards à Vitry-sur-Seine (94) : traitement des blattes',
    metaDescription:
      "Traitement des cafards à Vitry-sur-Seine : habitat collectif, copropriétés, pavillonnaire et locaux d'activité. Diagnostic sur place et traitement adapté.",
    h1: 'Cafards et blattes à Vitry-sur-Seine',
    lede:
      "À Vitry-sur-Seine, l'habitat collectif et les secteurs pavillonnaires se côtoient, avec des zones d'activité qui complètent le tableau.",
    intro: [
      "Les demandes en habitation concernent fréquemment des immeubles collectifs où la présence est signalée d'abord en cuisine, puis en salle de bain. Cette progression est révélatrice : elle suit généralement le trajet des réseaux plutôt qu'un déplacement au sol. Le diagnostic cherche donc à savoir si une gaine ou une colonne est en cause, et jusqu'où elle dessert.",
      "La commune compte également des secteurs pavillonnaires et des locaux d'activité le long de la Seine et des axes ferroviaires. Dans ces contextes, les points d'entrée extérieurs et les zones de stockage deviennent les éléments déterminants, avec une logique plus proche de celle d'un local professionnel que d'un appartement.",
    ],
    batiTitle: 'Immeubles, pavillons et locaux d’activité',
    bati: [
      "Dans le collectif, l'inspection porte sur les trappes de gaine, l'arrière des équipements sanitaires et les passages de canalisations entre cuisine et salle d'eau.",
      "Dans le pavillonnaire, on examine le pourtour du bâtiment, les grilles d'aération basses, les seuils et les regards, en plus des zones humides intérieures.",
      "Les locaux d'activité demandent un travail sur l'organisation : dégagement des murs, limitation des cartons, contrôle des flux entrants.",
    ],
    problematiques: [
      {
        title: 'Progression cuisine puis salle de bain',
        text: "Cette séquence oriente vers un cheminement par les réseaux. Le traitement cible alors les passages plutôt que les surfaces des deux pièces.",
      },
      {
        title: 'Pavillons et points d’entrée',
        text: "Seuils, grilles basses, passages de câbles et regards d'évacuation sont vérifiés avant de conclure à une origine intérieure.",
      },
      {
        title: 'Zones de stockage',
        text: "Un traitement sans réorganisation du stockage tient rarement. L'espacement des stocks et l'accès aux murs conditionnent le résultat.",
      },
    ],
    preventionTitle: 'Gestes utiles à Vitry-sur-Seine',
    prevention: [
      "Colmater les passages de canalisations entre pièces humides après le diagnostic.",
      "Vérifier et remplir les siphons de sol peu utilisés pour éviter qu'ils s'assèchent.",
      "Dans un pavillon, contrôler les grilles d'aération basses et les bas de portes.",
      "En local d'activité, dégager un couloir d'inspection le long des murs.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre-ville', 'Port-à-l’Anglais', 'Les Ardoines', 'Balzac — Touraine',
      'Gare — Jean-Jaurès', 'Moulin-Vert', 'Plateau — Coteau',
    ],
    faq: [
      {
        q: 'Pourquoi des blattes apparaissent-elles dans ma salle de bain ?',
        a: "Parce qu'une salle de bain réunit humidité permanente, chaleur et abris derrière les équipements sanitaires. Elle est souvent reliée à la cuisine par une gaine ou un passage de canalisation, ce qui explique l'apparition successive dans les deux pièces.",
      },
      {
        q: 'Faut-il vider les placards avant l’intervention ?',
        a: "Pas systématiquement. Il est en revanche utile de pouvoir accéder au fond des placards bas, au dessous de l'évier et à l'arrière des appareils. Les consignes précises sont données avant la visite selon la configuration.",
      },
      {
        q: 'Un traitement peut-il être fait en présence d’enfants ou d’animaux ?',
        a: "Les modalités sont adaptées en conséquence, avec un positionnement hors de portée et des consignes spécifiques d'accès aux zones traitées. Ces éléments sont précisés lors de l'échange initial et rappelés après l'intervention.",
      },
    ],
  },

  {
    slug: 'cafards-versailles',
    nom: 'Versailles',
    loc: 'à Versailles',
    departement: 'yvelines',
    departementNom: 'Yvelines',
    departementCode: '78',
    mapX: 326.5,
    mapY: 318.9,
    metaTitle: 'Cafards à Versailles (78) : traitement des blattes',
    metaDescription:
      "Cafards et blattes à Versailles : immeubles anciens du centre, copropriétés, hôtels et restaurants. Diagnostic discret et traitement adapté au bâti.",
    h1: 'Cafards et blattes à Versailles',
    lede:
      "À Versailles, le bâti ancien du centre et une activité hôtelière et de restauration significative imposent des interventions particulièrement discrètes.",
    intro: [
      "Dans les quartiers Notre-Dame et Saint-Louis, une grande partie des immeubles est ancienne. Les caves voûtées, les conduits désaffectés et les cours intérieures y créent des cheminements que l'on ne devine pas depuis un appartement. Une présence de blattes signalée au premier étage peut ainsi être alimentée depuis un niveau inférieur ou depuis un local en rez-de-chaussée.",
      "La commune accueille par ailleurs de nombreux établissements recevant du public : hôtels, restaurants, salons de thé. Pour eux, la contrainte tient autant à la discrétion qu'à l'efficacité. Les interventions sont organisées hors présence de clientèle, avec un travail prioritaire sur les zones techniques : plonge, réserve, offices, gaines.",
    ],
    batiTitle: 'Immeubles anciens, copropriétés et établissements',
    bati: [
      "Les immeubles anciens du centre comportent des caves, des conduits et des coffrages qui relient les niveaux. L'inspection commence souvent par la partie basse plutôt que par le logement concerné.",
      "Les copropriétés plus récentes, notamment vers Clagny et les Chantiers, présentent des configurations classiques : colonnes verticales, locaux de déchets, caves individuelles.",
      "Les établissements de restauration et d'hébergement disposent de zones techniques spécifiques — plonges, chambres froides, offices d'étage — qui concentrent l'essentiel des points de vigilance.",
    ],
    problematiques: [
      {
        title: 'Caves et conduits anciens',
        text: "Les volumes enterrés, stables en température et humides, sont examinés en premier. Une population qui s'y maintient réalimente les logements des premiers niveaux.",
      },
      {
        title: 'Hôtels et restauration',
        text: "Interventions hors présence de clientèle, priorité aux zones techniques, coordination avec la direction pour préserver l'exploitation.",
      },
      {
        title: 'Discrétion en copropriété',
        text: "Véhicule et matériel non identifiés, intervention limitée dans le temps, échange organisé avec le syndic : ces éléments comptent autant que le protocole technique.",
      },
    ],
    preventionTitle: 'Bonnes pratiques à Versailles',
    prevention: [
      "Dans un immeuble ancien, vérifier l'état des soupiraux et des accès de cave.",
      "Limiter le stockage de cartons et de bois dans les caves individuelles.",
      "En établissement, formaliser un relevé simple des observations par les équipes.",
      "Contrôler les joints et les passages de canalisation dans les cuisines professionnelles.",
    ],
    quartiersLabel: 'Quartiers couverts',
    quartiers: [
      'Notre-Dame', 'Saint-Louis', 'Montreuil', 'Clagny — Glatigny',
      'Chantiers', 'Porchefontaine', 'Jussieu — Petits-Bois',
    ],
    faq: [
      {
        q: 'Une intervention peut-elle rester discrète dans une copropriété ?',
        a: "Oui. Le matériel utilisé est compact et le véhicule n'est pas marqué. La visite peut être planifiée sur un créneau choisi, et aucune information n'est communiquée aux autres occupants sans votre accord.",
      },
      {
        q: 'Comment traiter un hôtel sans gêner les clients ?',
        a: "En travaillant d'abord sur les zones techniques et les cuisines, puis sur les chambres au fur et à mesure de leur libération. Cette organisation évite une fermeture générale tout en couvrant les zones réellement concernées.",
      },
      {
        q: 'Les caves voûtées sont-elles souvent concernées ?',
        a: "Elles offrent des conditions stables et peu de dérangement, ce qui peut favoriser une installation, notamment de blattes orientales. Elles sont donc inspectées lorsque les logements bas signalent des observations.",
      },
    ],
  },

  {
    slug: 'cafards-mantes-la-jolie',
    nom: 'Mantes-la-Jolie',
    loc: 'à Mantes-la-Jolie',
    departement: 'yvelines',
    departementNom: 'Yvelines',
    departementCode: '78',
    mapX: 133.9,
    mapY: 185.2,
    metaTitle: 'Cafards à Mantes-la-Jolie (78) : traitement des blattes',
    metaDescription:
      "Traitement des cafards à Mantes-la-Jolie : habitat collectif, copropriétés, centre-ville et commerces. Diagnostic de l'étendue et intervention coordonnée.",
    h1: 'Cafards et blattes à Mantes-la-Jolie',
    lede:
      "À Mantes-la-Jolie, l'essentiel des demandes en habitation concerne des immeubles collectifs où l'étendue de la présence doit être établie avant tout traitement.",
    intro: [
      "Dans un ensemble collectif, la première question n'est pas « quel produit » mais « quelle étendue ». Un logement peut être le seul à signaler une présence alors que plusieurs voisins sont concernés sans l'avoir remarqué, ou au contraire être le point d'arrivée d'une population installée deux étages plus bas. Établir cette réalité conditionne tout le reste.",
      "Le centre-ville, avec ses commerces et ses immeubles plus anciens, présente un autre profil. Les locaux alimentaires en rez-de-chaussée et les logements des étages y partagent parfois les mêmes cheminements techniques, ce qui suppose d'examiner les deux ensemble plutôt que successivement.",
    ],
    batiTitle: 'Habitat collectif et centre-ville commerçant',
    bati: [
      "Les immeubles collectifs comportent des gaines techniques verticales, des locaux de déchets et des caves. Ces trois éléments sont inspectés dès que plusieurs logements signalent des observations.",
      "Le centre-ville associe logements et commerces dans les mêmes bâtiments. Les jonctions entre les deux — cours, conduits, passages de canalisation — sont examinées en priorité.",
      "Les secteurs pavillonnaires en périphérie renvoient aux questions habituelles de la maison : points d'entrée, buanderie, sous-sol, évacuation.",
    ],
    problematiques: [
      {
        title: 'Établir l’étendue avant d’intervenir',
        text: "Recoupement des signalements, relevé par niveau et par colonne, inspection des parties communes : cette étape définit le périmètre de traitement.",
      },
      {
        title: 'Immeubles mixtes du centre',
        text: "Sans examen du local commercial, un traitement des logements supérieurs risque de ne produire qu'un effet temporaire.",
      },
      {
        title: 'Coordination avec le gestionnaire',
        text: "L'accès aux gaines, caves et locaux techniques dépend du bailleur ou du syndic. Il est demandé dès la phase de diagnostic.",
      },
    ],
    preventionTitle: 'Points de vigilance à Mantes-la-Jolie',
    prevention: [
      "Signaler dès la première observation plutôt qu'après plusieurs semaines.",
      "Vérifier les trappes de gaine et les joints de canalisation dans la cuisine et la salle d'eau.",
      "Stocker les denrées sèches dans des contenants hermétiques.",
      "En commerce, limiter les cartons en réserve et contrôler les livraisons.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre-ville', 'Val Fourré', 'Gassicourt', 'Les Martraits',
      'Domaine de la Vallée', 'Les Brouets',
    ],
    faq: [
      {
        q: 'Mes voisins ne signalent rien, faut-il quand même traiter largement ?',
        a: "Le périmètre est défini à partir des constats faits sur place, pas par principe. Si l'inspection montre une présence limitée à votre logement, le traitement reste ciblé. Si elle révèle un cheminement par une gaine, le périmètre s'élargit en conséquence.",
      },
      {
        q: 'Qui contacter en premier : le bailleur ou une entreprise ?',
        a: "Les deux démarches sont complémentaires. Le signalement au bailleur ou au syndic est nécessaire pour les parties communes. Un diagnostic technique apporte les éléments concrets qui permettent de décider du périmètre d'intervention.",
      },
      {
        q: 'Combien de temps avant de constater une baisse ?',
        a: "Une diminution des observations est généralement perceptible dans les semaines qui suivent, mais le délai dépend de l'importance de la population et de l'accès obtenu aux zones de refuge. Aucun délai fixe ne peut être annoncé de manière fiable avant le diagnostic.",
      },
    ],
  },

  {
    slug: 'cafards-evry-courcouronnes',
    nom: 'Évry-Courcouronnes',
    loc: 'à Évry-Courcouronnes',
    departement: 'essonne',
    departementNom: 'Essonne',
    departementCode: '91',
    mapX: 466.1,
    mapY: 444.4,
    metaTitle: 'Cafards à Évry-Courcouronnes (91) : traitement des blattes',
    metaDescription:
      "Cafards et blattes à Évry-Courcouronnes : copropriétés, résidences étudiantes, commerces et restauration. Diagnostic et traitement coordonné.",
    h1: 'Cafards et blattes à Évry-Courcouronnes',
    lede:
      "À Évry-Courcouronnes, copropriétés de grande taille et résidences à rotation rapide demandent deux approches différentes du même problème.",
    intro: [
      "Les copropriétés construites lors du développement de la ville nouvelle présentent des réseaux verticaux desservant de nombreux logements, ainsi que des locaux techniques partagés. Comme dans tout ensemble de cette taille, une infestation de blattes germaniques se révèle progressivement : un logement, puis son voisin, puis un autre niveau. Le traitement suppose donc d'établir un périmètre avant d'agir.",
      "Les résidences liées aux établissements d'enseignement supérieur relèvent d'une autre logique. Les kitchenettes y sont compactes et les occupants changent régulièrement. L'essentiel se joue sur la détection précoce et sur la vérification entre deux occupations, car une population introduite par un carton ou un petit appareil peut s'installer en quelques semaines.",
    ],
    batiTitle: 'Copropriétés, résidences et locaux commerciaux',
    bati: [
      "Dans les copropriétés, les gaines techniques et les locaux de déchets sont les points d'inspection prioritaires, avec les logements des premiers niveaux.",
      "Dans les résidences à kitchenettes, le périmètre est réduit mais exige un accès complet : arrière du réfrigérateur, socle de plaque, plinthes, rangements hauts.",
      "Les commerces et la restauration du centre commercial et des axes principaux disposent de réserves et de zones de plonge qui concentrent les conditions favorables.",
    ],
    problematiques: [
      {
        title: 'Détection précoce en résidence',
        text: "Une observation isolée mérite un signalement immédiat : à ce stade, le périmètre reste réduit et le traitement plus simple.",
      },
      {
        title: 'Copropriétés de grande taille',
        text: "Relevé par cage et par niveau, inspection des locaux communs, traitement coordonné des logements concernés.",
      },
      {
        title: 'Restauration et commerces',
        text: "Priorité aux zones de plonge, réserves et équipements chauds, avec une planification hors service.",
      },
    ],
    preventionTitle: 'Limiter les risques à Évry-Courcouronnes',
    prevention: [
      "En résidence, inspecter l'arrière des appareils avant d'installer ses affaires.",
      "Ne pas conserver de vaisselle humide ni de restes la nuit dans une kitchenette.",
      "En copropriété, demander la vérification des locaux de déchets en cas d'observations en rez-de-chaussée.",
      "En commerce, limiter les stocks au sol et dégager les murs.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre — Agora', 'Les Pyramides', 'Les Épinettes', 'Bois-Sauvage',
      'Aunettes', 'Canal', 'Champtier du Coq',
    ],
    faq: [
      {
        q: 'Qui prévenir dans une résidence étudiante ?',
        a: "Le gestionnaire de la résidence, qui centralise les signalements et peut faire vérifier les logements voisins. Traiter un seul studio sans cette coordination donne rarement un résultat durable dans ce type de parc.",
      },
      {
        q: 'Une kitchenette compacte est-elle plus difficile à traiter ?',
        a: "Elle est plus rapide à inspecter, mais demande plus de précision dans le positionnement, car les zones traitées sont proches des surfaces d'usage. Le protocole en tient compte.",
      },
      {
        q: 'Peut-on intervenir pendant les vacances universitaires ?',
        a: "C'est souvent le créneau le plus favorable, car les logements sont accessibles et les traitements peuvent être menés sur plusieurs unités à la suite. L'organisation se fait avec le gestionnaire.",
      },
    ],
  },

  {
    slug: 'cafards-argenteuil',
    nom: 'Argenteuil',
    loc: 'à Argenteuil',
    departement: 'val-doise',
    departementNom: "Val-d'Oise",
    departementCode: '95',
    mapX: 380.8,
    mapY: 215.9,
    metaTitle: "Cafards à Argenteuil (95) : traitement des blattes",
    metaDescription:
      "Traitement des cafards à Argenteuil : habitat collectif, copropriétés, pavillonnaire des coteaux et commerces. Diagnostic et traitement adapté.",
    h1: 'Cafards et blattes à Argenteuil',
    lede:
      "Argenteuil combine un habitat collectif important, des secteurs pavillonnaires étendus sur les coteaux et un centre-ville commerçant.",
    intro: [
      "Dans les immeubles collectifs de la commune, les demandes portent souvent sur une présence en cuisine qui résiste aux traitements réalisés en autonomie. L'explication tient généralement à la localisation des refuges : les insectes occupent des volumes fermés — coffrages, gaines, arrière d'appareils — que les produits appliqués en surface n'atteignent pas.",
      "Sur les coteaux et dans les secteurs pavillonnaires, les observations concernent davantage les sous-sols, les garages et les buanderies. Les conditions y sont différentes : moins de chaleur, plus d'humidité, et des points d'entrée depuis l'extérieur qu'il faut identifier avant de conclure à une origine intérieure.",
    ],
    batiTitle: 'Collectif, coteaux pavillonnaires et centre commerçant',
    bati: [
      "Les immeubles collectifs présentent des gaines verticales et des locaux de déchets qui constituent les zones prioritaires d'inspection.",
      "Le pavillonnaire des coteaux comporte des sous-sols, des garages en demi-niveau et des buanderies. Ces volumes humides sont examinés séparément de la cuisine.",
      "Le centre-ville associe commerces alimentaires et logements. Les jonctions entre les deux sont vérifiées lorsque des appartements situés au-dessus signalent une présence.",
    ],
    problematiques: [
      {
        title: 'Refuges inaccessibles en cuisine',
        text: "Le traitement ne produit d'effet durable que s'il atteint les volumes fermés : arrière et socle des appareils, coffrages, vides de plinthe.",
      },
      {
        title: 'Sous-sols et garages',
        text: "Une présence en partie basse suppose de vérifier l'humidité, les regards et les passages de réseaux avant tout traitement de la maison.",
      },
      {
        title: 'Immeubles au-dessus d’un commerce',
        text: "L'examen conjoint du local commercial et des logements évite un traitement partiel suivi d'une réapparition.",
      },
    ],
    preventionTitle: 'Mesures utiles à Argenteuil',
    prevention: [
      "Dégager régulièrement le dessous et l'arrière du réfrigérateur et du lave-vaisselle.",
      "Ventiler les sous-sols et éviter les stockages de cartons au sol.",
      "Vérifier les bas de portes de garage et les grilles d'aération basses.",
      "Signaler au syndic les observations faites dans les circulations communes.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre-ville', 'Val Notre-Dame', 'Orgemont', 'Val d’Argent Nord',
      'Val d’Argent Sud', 'Coteaux — Mazagran', 'Côtes-du-Nord',
    ],
    faq: [
      {
        q: 'Pourquoi les produits du commerce ne suffisent-ils pas ?',
        a: "Parce qu'ils agissent surtout sur les individus exposés, alors que l'essentiel de la population reste dans des volumes fermés. Les aérosols peuvent même disperser les insectes vers d'autres pièces ou d'autres logements, ce qui étend la zone concernée.",
      },
      {
        q: 'Mon garage est humide : est-ce un facteur ?',
        a: "L'humidité permanente est l'un des quatre facteurs favorables, avec la chaleur, la nourriture accessible et les abris. Un garage humide peut donc entretenir une présence, en particulier de blattes orientales.",
      },
      {
        q: 'Intervenez-vous dans les commerces alimentaires ?',
        a: "Oui, avec un protocole distinct de celui des logements : examen des réserves, des équipements et des zones de livraison, et planification en dehors des heures d'ouverture.",
      },
    ],
  },

  {
    slug: 'cafards-cergy',
    nom: 'Cergy',
    loc: 'à Cergy',
    departement: 'val-doise',
    departementNom: "Val-d'Oise",
    departementCode: '95',
    mapX: 295.3,
    mapY: 153.0,
    metaTitle: 'Cafards à Cergy (95) : traitement des blattes',
    metaDescription:
      "Cafards et blattes à Cergy : résidences de ville nouvelle, logements étudiants, commerces et restauration. Diagnostic et traitement coordonné.",
    h1: 'Cafards et blattes à Cergy',
    lede:
      "Le bâti de ville nouvelle de Cergy se caractérise par des ensembles résidentiels aux locaux techniques mutualisés, ce qui élargit souvent le périmètre d'inspection.",
    intro: [
      "À Cergy, de nombreuses résidences disposent de parkings en sous-sol, de locaux de déchets centralisés et de circulations techniques reliant plusieurs bâtiments. Cette organisation présente un avantage — les espaces sont identifiés et accessibles — et un inconvénient : une population installée dans un local mutualisé peut concerner plusieurs entrées à la fois.",
      "La commune accueille également des logements étudiants et des résidences meublées liées aux établissements d'enseignement. Comme dans tout parc à rotation rapide, l'introduction par du mobilier ou des cartons est le scénario le plus fréquent. La vérification lors des changements d'occupants y est plus efficace que des traitements répétés.",
    ],
    batiTitle: 'Résidences de ville nouvelle et logements étudiants',
    bati: [
      "Les résidences comportent des locaux techniques et des locaux de déchets centralisés. Ils sont inspectés dès que plusieurs logements ou plusieurs entrées signalent des observations.",
      "Les parkings en sous-sol constituent rarement un foyer, mais peuvent servir de chemin de circulation entre bâtiments.",
      "Les logements étudiants, souvent équipés de kitchenettes, demandent une inspection rapprochée de l'arrière des appareils et des plinthes.",
    ],
    problematiques: [
      {
        title: 'Locaux mutualisés',
        text: "Lorsque plusieurs entrées partagent un local de déchets ou une circulation technique, le périmètre d'inspection dépasse le bâtiment concerné.",
      },
      {
        title: 'Parc meublé et rotation d’occupants',
        text: "La vérification entre deux occupations — kitchenette, plinthes, arrière des appareils — limite les réinstallations.",
      },
      {
        title: 'Restauration et commerces du centre',
        text: "Réserves, zones de plonge et locaux de déchets sont traités en priorité, avec une planification hors service.",
      },
    ],
    preventionTitle: 'Bonnes pratiques à Cergy',
    prevention: [
      "En résidence, signaler les observations faites dans les circulations et les locaux communs.",
      "Vérifier l'état de fermeture et la ventilation des locaux de déchets.",
      "En logement meublé, inspecter le mobilier et les appareils avant installation.",
      "Limiter les stockages de cartons dans les celliers et les locaux communs.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Cergy-Préfecture', 'Grand Centre', 'Axe Majeur — Horloge', 'Cergy-Saint-Christophe',
      'Cergy-le-Haut', 'Hauts-de-Cergy', 'Coteaux — Village',
    ],
    faq: [
      {
        q: 'Un local de déchets peut-il concerner plusieurs bâtiments ?',
        a: "Oui, lorsqu'il est mutualisé entre plusieurs entrées ou relié à des circulations techniques communes. C'est l'une des raisons pour lesquelles le périmètre d'inspection est parfois plus large que le bâtiment d'où vient le signalement.",
      },
      {
        q: 'Comment traiter une résidence meublée entre deux locations ?',
        a: "En profitant de la vacance du logement pour inspecter puis traiter les zones fermées, avant l'arrivée du nouvel occupant. Cette séquence est plus simple à organiser et plus efficace qu'une intervention en logement occupé.",
      },
      {
        q: 'Le parking souterrain doit-il être traité ?',
        a: "Il est inspecté lorsqu'il abrite des locaux techniques ou de déchets, ou lorsqu'il relie des bâtiments concernés. Un traitement n'est proposé que si l'inspection met en évidence une utilisation réelle par les insectes.",
      },
    ],
  },

  {
    slug: 'cafards-meaux',
    nom: 'Meaux',
    loc: 'à Meaux',
    departement: 'seine-et-marne',
    departementNom: 'Seine-et-Marne',
    departementCode: '77',
    mapX: 679.8,
    mapY: 206.6,
    metaTitle: 'Cafards à Meaux (77) : traitement des blattes',
    metaDescription:
      "Traitement des cafards à Meaux : centre historique, copropriétés, maisons individuelles, commerces et restauration. Diagnostic sur place et traitement adapté.",
    h1: 'Cafards et blattes à Meaux',
    lede:
      "À Meaux, le centre historique, les copropriétés et les secteurs pavillonnaires présentent trois configurations bien distinctes.",
    intro: [
      "Dans le centre historique, les bâtiments anciens comportent des caves, des conduits et des cours intérieures qui relient logements et commerces. Une présence signalée dans un appartement peut donc provenir d'un niveau inférieur ou d'un local voisin. L'inspection commence souvent par ces espaces plutôt que par la cuisine concernée.",
      "Dans les copropriétés et les maisons individuelles, les logiques changent. En collectif, on évalue l'étendue verticale et l'état des gaines. En maison, on cherche un point d'entrée, une zone humide et une source de chaleur — typiquement une buanderie, un cellier ou un garage accolé.",
    ],
    batiTitle: 'Centre historique, copropriétés et maisons',
    bati: [
      "Le centre ancien réunit logements et commerces dans des bâtiments où les cheminements techniques sont irréguliers. Les caves et les conduits y sont examinés en priorité.",
      "Les copropriétés plus récentes présentent des colonnes techniques et des locaux de déchets classiques, avec un diagnostic à l'échelle de la cage.",
      "Les maisons individuelles concentrent les points de vigilance autour du garage, du cellier, de la buanderie et des évacuations.",
    ],
    problematiques: [
      {
        title: 'Immeubles anciens du centre',
        text: "Caves, conduits désaffectés et cours intérieures créent des liaisons entre niveaux et entre locaux. Ces jonctions sont inspectées avant tout traitement.",
      },
      {
        title: 'Restauration de centre-ville',
        text: "Locaux souvent exigus, équipements anciens, réserves réduites : l'intervention porte sur les équipements et les jonctions, hors heures de service.",
      },
      {
        title: 'Maisons avec garage accolé',
        text: "Bas de porte, grilles basses, passages de réseaux et humidité de buanderie sont vérifiés avant de conclure à une origine intérieure.",
      },
    ],
    preventionTitle: 'Points de vigilance à Meaux',
    prevention: [
      "Contrôler les soupiraux et les accès de cave dans le bâti ancien.",
      "Conserver les aliments pour animaux dans des contenants fermés, y compris au garage.",
      "Vérifier l'humidité de la buanderie et l'état des siphons peu utilisés.",
      "En restauration, dégager l'arrière des équipements pour permettre l'inspection.",
    ],
    quartiersLabel: 'Secteurs couverts',
    quartiers: [
      'Centre historique', 'Beauval', 'La Pierre Collinet', 'Dunant — Chauffour',
      'Faubourg Saint-Nicolas', 'Hôpital — Colbert', 'Foch — Roosevelt',
    ],
    faq: [
      {
        q: 'Une maison individuelle peut-elle être concernée sans voisinage proche ?',
        a: "Oui. L'introduction peut se faire par un objet, un appareil d'occasion, un carton de livraison ou un réseau d'évacuation. En maison, la présence se concentre généralement autour des zones chaudes et humides plutôt que dans tout le logement.",
      },
      {
        q: 'Les caves du centre ancien sont-elles à inspecter systématiquement ?',
        a: "Elles le sont lorsque des logements des premiers niveaux signalent des observations, ou lorsque la configuration du bâtiment les relie aux parties habitées. Leur température stable et leur humidité en font des zones favorables.",
      },
      {
        q: 'Intervenez-vous dans les communes voisines ?',
        a: "Oui, sur les principales communes du secteur. Les modalités et les délais pour les communes les plus éloignées sont confirmés lors de la prise de contact plutôt qu'annoncés par avance.",
      },
    ],
  },
];

export const villeBySlug = (slug: string) => villes.find((v) => v.slug === slug);
export const villesByDept = (deptSlug: string) => villes.filter((v) => v.departement === deptSlug);
