/**
 * Contenu départemental.
 * Chaque département possède une rédaction propre : introduction, contexte de
 * l'habitat, problématiques, conseils et FAQ différents. Aucune statistique,
 * aucun volume d'intervention et aucun chiffre non vérifiable n'est publié.
 */

export type Departement = {
  slug: string;
  code: string;
  nom: string;
  /** Formulation « en Seine-et-Marne », « dans les Yvelines », « à Paris »… */
  loc: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  intro: string[];
  habitatTitle: string;
  habitat: string[];
  contexts: Array<{ title: string; text: string }>;
  conseilsTitle: string;
  conseils: string[];
  communes: string[];
  communesNote: string;
  faq: Array<{ q: string; a: string }>;
  cities: string[];
};

export const departements: Departement[] = [
  {
    slug: 'paris',
    code: '75',
    nom: 'Paris',
    loc: 'à Paris',
    metaTitle: 'Traitement des cafards à Paris (75) | Intervention spécialisée',
    metaDescription:
      "Traitement des cafards et des blattes à Paris : immeubles anciens, gaines techniques, petites cuisines, restauration. Diagnostic, traitement adapté et prévention.",
    h1: 'Traitement des cafards et des blattes à Paris (75)',
    lede:
      "Paris concentre un bâti ancien, des logements de petite surface et une densité de commerces alimentaires qui influencent directement la manière de traiter une infestation de blattes.",
    intro: [
      "À Paris, la question qui revient le plus souvent n'est pas « comment tuer un cafard » mais « d'où viennent-ils ». Dans un immeuble ancien, les colonnes d'eau, les gaines techniques et les percements réalisés au fil des travaux relient des logements qui n'ont aucun rapport entre eux. Un appartement parfaitement tenu peut donc voir apparaître des blattes germaniques sans que le point de départ se trouve chez lui.",
      "C'est pour cette raison qu'une intervention parisienne commence par une lecture du bâtiment autant que du logement. Repérer la colonne concernée, identifier si la présence se limite à une cuisine ou remonte le long d'une gaine, comprendre si un local commercial en rez-de-chaussée participe à la situation : ces éléments déterminent la suite, bien plus que le produit utilisé.",
    ],
    habitatTitle: 'Un bâti ancien et des logements compacts',
    habitat: [
      "Une grande partie du parc parisien est antérieure aux années 1950. Les cuisines y sont souvent réduites, parfois intégrées à la pièce principale, avec des appareils encastrés et peu d'espace entre le mur et le mobilier. Ces configurations laissent peu de zones accessibles à l'inspection : il faut déplacer ou ouvrir pour voir, notamment derrière un réfrigérateur, sous un évier ou le long d'un plan de travail scellé.",
      "S'y ajoutent des éléments propres aux immeubles anciens : coffrages de canalisations, anciens conduits, faux plafonds ajoutés lors d'une rénovation, plinthes décollées. Ce sont des abris stables, sombres et proches d'un point d'eau. Dans la plupart des cas, ce sont eux qu'il faut traiter, et non la surface visible du sol.",
    ],
    contexts: [
      {
        title: 'Immeubles en copropriété',
        text: "Lorsque plusieurs lots signalent des observations, un traitement limité à un seul appartement ne résout généralement rien durablement. L'échange avec le syndic permet d'aborder les parties communes, les gaines et les logements voisins de la même colonne.",
      },
      {
        title: 'Restauration et commerces alimentaires',
        text: "Les arrondissements centraux accueillent une forte densité de restaurants, boulangeries et épiceries. Les contraintes y sont différentes : continuité d'exploitation, zones de préparation, réserves, équipements chauds. L'intervention doit s'organiser autour des horaires de service.",
      },
      {
        title: 'Studios et petites surfaces',
        text: "Dans un studio, la cuisine, le rangement et le couchage se partagent le même volume. Le traitement doit donc être précis dans son positionnement et tenir compte de la proximité immédiate des zones de vie.",
      },
      {
        title: 'Locaux techniques et sous-sols',
        text: "Caves, locaux poubelles et locaux de chauffage sont souvent les premiers endroits à vérifier dans un immeuble parisien, en particulier lorsque des blattes orientales sont observées en partie basse.",
      },
    ],
    conseilsTitle: 'Ce qui aide réellement avant une intervention à Paris',
    conseils: [
      "Noter les dates, les heures et les pièces où des insectes ont été vus : dans un immeuble, cette chronologie aide à identifier la colonne concernée.",
      "Signaler la situation au syndic ou au gestionnaire dès que plusieurs logements semblent concernés, sans attendre.",
      "Éviter les insecticides en aérosol achetés dans l'urgence : ils dispersent les individus vers d'autres zones et compliquent le traitement ultérieur.",
      "Rendre accessibles le dessous de l'évier, l'arrière du réfrigérateur et les placards bas le jour de l'intervention.",
      "Réparer les petites fuites et les joints abîmés : ce sont des points d'eau permanents.",
    ],
    communes: [
      'Paris Centre (1ᵉʳ au 4ᵉ)', '5ᵉ', '6ᵉ', '7ᵉ', '8ᵉ', '9ᵉ', '10ᵉ', '11ᵉ', '12ᵉ',
      '13ᵉ', '14ᵉ', '15ᵉ', '16ᵉ', '17ᵉ', '18ᵉ', '19ᵉ', '20ᵉ',
    ],
    communesNote:
      "Interventions sur l'ensemble des arrondissements parisiens. Les communes limitrophes sont traitées depuis les pages départementales voisines.",
    faq: [
      {
        q: "Les cafards peuvent-ils passer d'un appartement à l'autre dans un immeuble parisien ?",
        a: "Oui. Les gaines techniques, les colonnes d'eau, les passages de canalisations et les vides derrière les coffrages relient des logements entre eux. C'est l'une des raisons pour lesquelles une infestation peut réapparaître après un traitement réalisé dans un seul appartement.",
      },
      {
        q: "Faut-il l'accord du syndic pour traiter les parties communes ?",
        a: "Le traitement de votre logement relève de votre décision. En revanche, une intervention dans les parties communes (gaines, locaux poubelles, caves, sous-sols) est décidée par la copropriété. Un signalement écrit au syndic est en général la première étape.",
      },
      {
        q: 'Peut-on intervenir dans un restaurant parisien sans fermer ?',
        a: "L'intervention s'organise en général en dehors des services, tôt le matin ou après la fermeture, avec un protocole adapté aux zones de préparation et de stockage. Les modalités précises dépendent de la configuration du local et sont définies lors de l'échange initial.",
      },
      {
        q: 'Mon logement est petit : le traitement est-il différent ?',
        a: "Le principe reste le même, mais le positionnement demande plus de précision. Dans un studio, on privilégie les zones fermées et hors de portée : intérieur des coffrages, arrière des appareils, dessous des meubles bas, plutôt que les surfaces exposées.",
      },
    ],
    cities: ['cafards-paris'],
  },

  {
    slug: 'hauts-de-seine',
    code: '92',
    nom: 'Hauts-de-Seine',
    loc: 'dans les Hauts-de-Seine',
    metaTitle: 'Traitement des cafards dans les Hauts-de-Seine (92)',
    metaDescription:
      "Cafards et blattes dans les Hauts-de-Seine : résidences récentes, immeubles tertiaires, pavillonnaire, restauration d'entreprise. Diagnostic et traitement adapté.",
    h1: 'Traitement des cafards et des blattes dans les Hauts-de-Seine (92)',
    lede:
      "Du nord du département aux communes pavillonnaires du sud, les Hauts-de-Seine réunissent des configurations très différentes : résidences collectives récentes, immeubles tertiaires et maisons individuelles.",
    intro: [
      "Les Hauts-de-Seine présentent une particularité utile à connaître : une partie du parc immobilier est récente ou fortement rénovée. Cela change la lecture d'une infestation. Dans un immeuble des années 2000, les gaines sont mieux compartimentées, mais les cuisines équipées avec électroménager intégré offrent en contrepartie de nombreux volumes fermés, chauds et difficiles d'accès.",
      "Le département accueille aussi une activité tertiaire importante, avec des restaurants d'entreprise, des cafétérias et des espaces de pause répartis sur plusieurs étages. Dans ce type de site, l'origine d'une présence de blattes est souvent à chercher du côté des locaux de plonge, des monte-charges ou des zones de déchets, plus que des espaces de bureau eux-mêmes.",
    ],
    habitatTitle: 'Trois types de bâti, trois lectures différentes',
    habitat: [
      "Au nord et au centre, les communes denses concentrent des immeubles collectifs de toutes époques. Les situations rencontrées ressemblent à celles de Paris : colonnes techniques partagées, cuisines compactes, commerces en pied d'immeuble.",
      "Au sud et à l'ouest, le tissu pavillonnaire domine davantage. Les observations concernent alors plus souvent des sous-sols, des garages accolés, des buanderies ou des locaux de chaufferie. Les espèces rencontrées en partie basse et en zone humide ne sont pas nécessairement les mêmes que dans une cuisine d'appartement.",
      "Enfin, les grands immeubles de bureaux imposent leurs propres contraintes : accès sécurisé, plages horaires limitées, coordination avec les services techniques et la restauration collective.",
    ],
    contexts: [
      {
        title: 'Résidences récentes',
        text: "Cuisines intégrées, plinthes techniques, lave-vaisselle et four encastrés : les refuges se situent surtout dans les volumes fermés. Le diagnostic passe par l'ouverture ou le déplacement des éléments, pas seulement par une observation au sol.",
      },
      {
        title: 'Bureaux et restauration collective',
        text: "Cuisines de production, laveries, locaux de tri, gaines de ventilation : ces espaces concentrent chaleur, humidité et matière organique. L'intervention se coordonne avec les services techniques du site.",
      },
      {
        title: 'Maisons individuelles',
        text: "Sous-sols, vides sanitaires, canalisations et regards d'évacuation sont à vérifier en priorité. Une remontée depuis un réseau extérieur suppose une approche différente d'une infestation de cuisine.",
      },
      {
        title: 'Commerces de centre-ville',
        text: "Boulangeries, traiteurs, supérettes : les réserves et les zones de stockage en palettes sont souvent les endroits où une présence s'installe sans être remarquée rapidement.",
      },
    ],
    conseilsTitle: 'Préparer une intervention dans les Hauts-de-Seine',
    conseils: [
      "Dans un appartement équipé, prévoir de pouvoir dégager le lave-vaisselle et le four : ce sont deux des zones les plus souvent concernées.",
      "En maison, vérifier l'état des siphons de sol, des regards et des accès au vide sanitaire.",
      "En site tertiaire, identifier un référent technique capable d'ouvrir les locaux de plonge et de déchets le jour de la visite.",
      "Conserver les emballages alimentaires ouverts dans des contenants fermés, en particulier dans les réserves de commerce.",
      "Signaler les observations même isolées au gestionnaire de la résidence : cela permet de recouper les informations entre lots.",
    ],
    communes: [
      'Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine', 'Colombes', 'Courbevoie',
      'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Levallois-Perret', 'Antony', 'Clichy',
      'Neuilly-sur-Seine', 'Clamart', 'Montrouge', 'Puteaux', 'Gennevilliers',
      'Suresnes', 'Bagneux', 'Meudon', 'Malakoff', 'Châtillon',
    ],
    communesNote:
      "Liste des principales communes desservies dans le département. Les communes voisines sont traitées au cas par cas selon la distance.",
    faq: [
      {
        q: 'Une cuisine équipée récente est-elle moins exposée ?',
        a: "Pas nécessairement. Un logement récent est mieux isolé et souvent mieux compartimenté, mais l'électroménager encastré crée des volumes chauds et fermés qui constituent des abris favorables. Ce qui change, c'est la localisation des zones à inspecter, pas le risque en lui-même.",
      },
      {
        q: "Comment se passe une intervention dans un immeuble de bureaux ?",
        a: "Elle est organisée avec le service technique ou le prestataire de restauration, en dehors des heures d'activité lorsque c'est possible. Les zones prioritaires sont les cuisines de production, les laveries, les locaux de déchets et les gaines qui les desservent.",
      },
      {
        q: 'Je vois des insectes dans mon sous-sol, est-ce la même chose ?',
        a: "Une présence localisée en sous-sol, près d'une canalisation ou d'un point humide, oriente souvent vers la blatte orientale plutôt que vers la blatte germanique. L'identification modifie la stratégie de traitement.",
      },
    ],
    cities: ['cafards-boulogne-billancourt', 'cafards-nanterre'],
  },

  {
    slug: 'seine-saint-denis',
    code: '93',
    nom: 'Seine-Saint-Denis',
    loc: 'en Seine-Saint-Denis',
    metaTitle: 'Traitement des cafards en Seine-Saint-Denis (93)',
    metaDescription:
      "Cafards et blattes en Seine-Saint-Denis : habitat collectif, copropriétés, commerces alimentaires. Diagnostic de l'infestation et traitement coordonné.",
    h1: 'Traitement des cafards et des blattes en Seine-Saint-Denis (93)',
    lede:
      "En Seine-Saint-Denis, la part importante d'habitat collectif rend la coordination entre logements et parties communes déterminante pour obtenir un résultat durable.",
    intro: [
      "Le département compte de nombreux ensembles collectifs construits entre les années 1950 et 1980. Ces bâtiments partagent une caractéristique technique importante : des réseaux verticaux mutualisés, souvent regroupés dans des gaines qui traversent l'ensemble des niveaux. Lorsqu'une blatte germanique s'installe dans un tel réseau, la présence se diffuse étage par étage, sans lien avec la tenue des logements concernés.",
      "Dans ce contexte, traiter un appartement isolé donne rarement un résultat stable. L'approche utile consiste à évaluer l'étendue réelle : combien de logements signalent des observations, sur quels niveaux, de quel côté de la cage. Cette cartographie permet ensuite de proposer une intervention cohérente, incluant les parties communes lorsque la copropriété ou le bailleur le décide.",
    ],
    habitatTitle: 'Habitat collectif et réseaux mutualisés',
    habitat: [
      "Les immeubles concernés présentent souvent des gaines techniques accessibles par des trappes en salle de bain ou en cuisine, des coffrages de descente d'eaux usées et des vides derrière les éléments sanitaires. Ce sont des zones chaudes, humides et rarement ouvertes : les conditions y sont stables toute l'année.",
      "Les locaux de collecte des déchets constituent un second point d'attention. Lorsqu'ils sont en sous-sol ou accolés à une cage d'escalier, ils peuvent entretenir une présence qui se reporte ensuite vers les logements des premiers niveaux.",
      "Le département compte également une activité commerciale alimentaire dense, notamment dans les centres-villes et autour des marchés. Les réserves, les chambres froides et les zones de réception y demandent un examen spécifique.",
    ],
    contexts: [
      {
        title: 'Copropriétés et bailleurs',
        text: "Le traitement gagne à être pensé à l'échelle de la cage d'escalier ou du bâtiment. Un diagnostic partagé entre les logements et les parties communes évite les réinfestations croisées.",
      },
      {
        title: 'Locaux de déchets',
        text: "Local poubelles, vide-ordures désaffectés, zones de stockage des bacs : ces espaces sont à vérifier systématiquement lorsque plusieurs logements bas signalent des observations.",
      },
      {
        title: 'Commerces alimentaires',
        text: "Réserves, arrière-boutiques, chambres froides et zones de livraison sont examinées en priorité. Les palettes et les cartons de transport sont des vecteurs fréquents d'introduction.",
      },
      {
        title: 'Logements en rez-de-chaussée',
        text: "Proximité immédiate des réseaux, des locaux techniques et des accès extérieurs : ces logements sont souvent les premiers à signaler une présence, et les premiers à voir la situation revenir si les parties communes ne sont pas prises en compte.",
      },
    ],
    conseilsTitle: 'Agir efficacement en habitat collectif',
    conseils: [
      "Faire un signalement écrit au bailleur ou au syndic, en précisant les pièces, la fréquence et la période des observations.",
      "Encourager les voisins de la même colonne à signaler également : sans cette information, l'étendue réelle reste invisible.",
      "Vérifier les trappes de gaine technique et l'état des joints autour des passages de canalisations.",
      "Ne pas condamner une gaine au silicone avant le diagnostic : cela peut déplacer le problème sans le résoudre.",
      "Dans un commerce, contrôler les livraisons à la réception plutôt qu'en réserve.",
    ],
    communes: [
      'Saint-Denis', 'Montreuil', 'Aubervilliers', 'Aulnay-sous-Bois', 'Drancy',
      'Noisy-le-Grand', 'Pantin', 'Bondy', 'Bobigny', 'Épinay-sur-Seine',
      'Rosny-sous-Bois', 'Sevran', 'La Courneuve', 'Stains', 'Le Blanc-Mesnil',
      'Neuilly-sur-Marne', 'Villepinte', 'Saint-Ouen-sur-Seine', 'Les Lilas', 'Le Pré-Saint-Gervais',
    ],
    communesNote:
      "Principales communes desservies. Les interventions en habitat collectif sont organisées avec le syndic, le bailleur ou le gestionnaire.",
    faq: [
      {
        q: 'Pourquoi les cafards reviennent-ils après un traitement dans mon appartement ?',
        a: "Dans un immeuble collectif, la cause la plus courante est une population encore présente dans les logements voisins ou dans les réseaux communs. Le traitement d'un seul lot réduit la population locale mais ne coupe pas les voies de circulation entre logements.",
      },
      {
        q: 'Qui prend en charge le traitement : le locataire, le propriétaire ou la copropriété ?',
        a: "La répartition dépend du bail, du règlement de copropriété et de l'origine de l'infestation. En pratique, le traitement des parties communes relève de la copropriété ou du bailleur, celui du logement du propriétaire ou de l'occupant selon les cas. Un diagnostic écrit facilite cette discussion.",
      },
      {
        q: "Faut-il traiter tous les appartements d'une cage d'escalier ?",
        a: "Pas systématiquement. On traite les logements concernés, ceux qui les encadrent verticalement et horizontalement, ainsi que les parties communes reliées. Le périmètre est défini à partir des observations relevées, pas par principe.",
      },
      {
        q: "Un local poubelles peut-il être à l'origine du problème ?",
        a: "Il peut entretenir une population et servir de réservoir, en particulier lorsqu'il est chauffé, mal ventilé ou proche d'une gaine. Il est donc inspecté lorsque des logements des premiers niveaux sont concernés.",
      },
    ],
    cities: ['cafards-montreuil', 'cafards-saint-denis', 'cafards-aubervilliers'],
  },

  {
    slug: 'val-de-marne',
    code: '94',
    nom: 'Val-de-Marne',
    loc: 'dans le Val-de-Marne',
    metaTitle: 'Traitement des cafards dans le Val-de-Marne (94)',
    metaDescription:
      "Cafards et blattes dans le Val-de-Marne : habitat mixte, pavillonnaire, logistique alimentaire et restauration. Diagnostic et traitement adapté.",
    h1: 'Traitement des cafards et des blattes dans le Val-de-Marne (94)',
    lede:
      "Le Val-de-Marne combine un habitat collectif dense au nord-ouest, un tissu pavillonnaire étendu et une activité de logistique alimentaire importante.",
    intro: [
      "Le département a ceci de particulier qu'on y rencontre, parfois dans la même commune, des immeubles collectifs des années 1960 et des rues entières de maisons individuelles. Ces deux contextes ne produisent pas les mêmes situations. En collectif, la question centrale reste la circulation entre logements. En pavillonnaire, elle porte plutôt sur les points d'entrée depuis l'extérieur et les zones humides en partie basse.",
      "Le Val-de-Marne accueille par ailleurs une activité de gros et de logistique alimentaire notable. Les flux de palettes, de cartons et de conteneurs constituent une voie d'introduction connue pour les blattes. Pour un commerce ou un restaurant approvisionné par ces circuits, le contrôle à la réception est souvent plus utile qu'un traitement répété en réserve.",
    ],
    habitatTitle: 'Un département à deux visages',
    habitat: [
      "Dans les communes du nord-ouest, proches de Paris, le bâti collectif domine : cages d'escalier, colonnes techniques partagées, commerces en pied d'immeuble. Les modalités d'intervention rejoignent celles de la petite couronne.",
      "Dans la partie sud et est, les maisons individuelles avec sous-sol, garage accolé ou véranda sont plus nombreuses. Les observations concernent alors souvent la buanderie, le local de chaudière ou l'espace autour des canalisations d'évacuation.",
      "Les zones d'activité et les locaux de stockage forment un troisième cas, où la priorité va au contrôle des flux entrants et à l'organisation des réserves plutôt qu'au seul traitement des surfaces.",
    ],
    contexts: [
      {
        title: 'Maisons avec sous-sol',
        text: "Chaudière, buanderie, regards d'évacuation : ces zones réunissent chaleur et humidité. Une présence localisée en partie basse oriente souvent vers la blatte orientale.",
      },
      {
        title: 'Immeubles du nord du département',
        text: "La démarche est identique à celle de la petite couronne : évaluer l'étendue verticale, associer les parties communes, coordonner avec le syndic.",
      },
      {
        title: 'Entrepôts et réserves alimentaires',
        text: "Le contrôle des palettes et des cartons à la réception limite les introductions. Le rangement en hauteur et l'espacement des stocks facilitent ensuite l'inspection.",
      },
      {
        title: 'Restauration',
        text: "Cuisines, plonges, locaux de déchets et vestiaires sont examinés ensemble. Les plages d'intervention sont calées sur les services.",
      },
    ],
    conseilsTitle: 'Points à vérifier dans le Val-de-Marne',
    conseils: [
      "En maison, inspecter le pourtour des canalisations, les siphons de sol et les gaines qui traversent les murs de sous-sol.",
      "Déballer les cartons de livraison à l'extérieur de la réserve lorsque c'est possible.",
      "Ne pas stocker de cartons vides en réserve : ils offrent un abri sec et sombre.",
      "En collectif, recouper les observations avec celles des voisins avant de programmer un traitement.",
      "Traiter les petites fuites et l'humidité résiduelle en buanderie et en salle d'eau.",
    ],
    communes: [
      'Créteil', 'Vitry-sur-Seine', 'Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Ivry-sur-Seine',
      'Maisons-Alfort', 'Villejuif', 'Alfortville', 'Vincennes', 'Fontenay-sous-Bois',
      'Choisy-le-Roi', 'Le Perreux-sur-Marne', "L'Haÿ-les-Roses", 'Cachan', 'Nogent-sur-Marne',
      'Thiais', 'Villeneuve-Saint-Georges', 'Charenton-le-Pont', 'Orly', 'Rungis',
    ],
    communesNote:
      "Principales communes desservies dans le département, en habitation comme en local professionnel.",
    faq: [
      {
        q: 'Les cafards peuvent-ils arriver par les livraisons ?',
        a: "Oui, c'est une voie d'introduction documentée, notamment via les cartons, les palettes et les cageots. Un contrôle visuel à la réception, avant le stockage en réserve, réduit sensiblement ce risque.",
      },
      {
        q: "J'ai des insectes uniquement dans mon sous-sol : est-ce grave ?",
        a: "Une présence limitée à un sous-sol humide n'implique pas forcément une infestation du logement. Elle signale en revanche des conditions favorables à proximité. L'identification de l'espèce et la recherche du point d'entrée orientent la suite.",
      },
      {
        q: 'Peut-on traiter une maison individuelle sans quitter les lieux ?',
        a: "Dans la plupart des configurations, le traitement est conçu pour permettre une occupation normale des lieux. Les consignes précises (aération, délai avant nettoyage de certaines zones, accès des animaux domestiques) sont indiquées à l'issue de l'intervention.",
      },
    ],
    cities: ['cafards-creteil', 'cafards-vitry-sur-seine'],
  },

  {
    slug: 'seine-et-marne',
    code: '77',
    nom: 'Seine-et-Marne',
    loc: 'en Seine-et-Marne',
    metaTitle: 'Traitement des cafards en Seine-et-Marne (77)',
    metaDescription:
      "Cafards et blattes en Seine-et-Marne : maisons individuelles, centres-villes anciens, hôtellerie et restauration. Diagnostic sur place et traitement adapté.",
    h1: 'Traitement des cafards et des blattes en Seine-et-Marne (77)',
    lede:
      "Plus étendue et moins dense que la petite couronne, la Seine-et-Marne présente surtout des maisons individuelles, des centres-villes anciens et une activité hôtelière et de restauration significative.",
    intro: [
      "En Seine-et-Marne, les situations rencontrées se distinguent nettement de celles de Paris. Le collectif existe, notamment dans les villes nouvelles et les centres urbains, mais la maison individuelle domine largement. Cela déplace les questions : au lieu de chercher une colonne technique partagée, on s'intéresse aux points d'entrée depuis l'extérieur, aux sous-sols, aux garages et aux réseaux d'évacuation.",
      "Le département accueille aussi une activité hôtelière et de restauration importante, liée au tourisme et aux axes de transit. Dans un hôtel, la contrainte est double : préserver l'expérience client et intervenir dans des zones techniques peu visibles (offices d'étage, locaux de linge, gaines, cuisines de production).",
    ],
    habitatTitle: 'Maisons, centres anciens et villes nouvelles',
    habitat: [
      "Les maisons individuelles, souvent avec garage accolé, cellier ou sous-sol partiel, concentrent l'essentiel des demandes en habitation. Les observations se font généralement en cuisine, en buanderie ou autour des arrivées et évacuations d'eau.",
      "Dans les centres anciens de Melun, Meaux, Fontainebleau ou Provins, on retrouve un bâti plus dense, parfois avec commerce en rez-de-chaussée et logements au-dessus. Les interactions entre le local commercial et les appartements sont alors à examiner.",
      "Les secteurs de villes nouvelles présentent un bâti plus récent et des ensembles résidentiels dont l'organisation technique se rapproche de celle de la petite couronne.",
    ],
    contexts: [
      {
        title: 'Maisons individuelles',
        text: "Priorité à l'inspection des zones humides et des jonctions : passage de canalisations, siphons de sol, seuils de porte de garage, gaines électriques traversantes.",
      },
      {
        title: 'Hôtellerie',
        text: "Cuisines, offices, locaux de linge, gaines et circulations de service. L'intervention se planifie avec la direction pour limiter l'impact sur l'exploitation.",
      },
      {
        title: 'Restauration en centre-ville',
        text: "Les locaux anciens cumulent souvent équipements anciens, réserves exiguës et proximité de logements. Le traitement tient compte de ces trois dimensions.",
      },
      {
        title: "Logements au-dessus d'un commerce",
        text: "Lorsque des blattes sont observées dans un appartement situé au-dessus d'un local alimentaire, l'examen conjoint des deux niveaux évite un traitement partiel.",
      },
    ],
    conseilsTitle: 'Bonnes pratiques en Seine-et-Marne',
    conseils: [
      "Vérifier les bas de portes, notamment celle du garage, et les grilles d'aération en partie basse.",
      "Contrôler l'état des regards d'évacuation et des siphons peu utilisés, qui peuvent s'assécher.",
      "Stocker les aliments pour animaux dans des contenants fermés, y compris au garage ou au cellier.",
      "En hôtel, mettre en place un canal de signalement simple pour les équipes d'étage.",
      "Éviter d'entreposer du bois ou des cartons directement contre un mur de façade.",
    ],
    communes: [
      'Meaux', 'Chelles', 'Melun', 'Pontault-Combault', 'Savigny-le-Temple',
      'Torcy', 'Champs-sur-Marne', 'Villeparisis', 'Lagny-sur-Marne', 'Combs-la-Ville',
      'Roissy-en-Brie', 'Ozoir-la-Ferrière', 'Dammarie-les-Lys', 'Nemours', 'Fontainebleau',
      'Provins', 'Coulommiers', 'Noisiel', 'Brie-Comte-Robert', 'Mitry-Mory',
    ],
    communesNote:
      "Le département étant étendu, les modalités d'intervention sont précisées lors de l'échange initial selon la commune.",
    faq: [
      {
        q: 'Une maison isolée peut-elle avoir des cafards ?',
        a: "Oui. L'isolement ne protège pas d'une introduction par un objet, un carton, un appareil d'occasion ou un réseau d'évacuation. En maison, les observations se concentrent souvent autour des zones chaudes et humides plutôt que dans l'ensemble du logement.",
      },
      {
        q: 'Comment se déroule une intervention dans un hôtel en activité ?',
        a: "Elle est planifiée avec la direction, généralement sur des chambres libérées et pendant les créneaux de faible occupation. Les zones techniques et les cuisines sont traitées en premier, car elles conditionnent souvent le reste.",
      },
      {
        q: 'Intervenez-vous dans tout le département ?',
        a: "Les interventions couvrent les principales communes du département. Pour les secteurs les plus éloignés, les modalités et les délais sont confirmés lors de la prise de contact plutôt qu'annoncés par avance.",
      },
    ],
    cities: ['cafards-meaux'],
  },

  {
    slug: 'yvelines',
    code: '78',
    nom: 'Yvelines',
    loc: 'dans les Yvelines',
    metaTitle: 'Traitement des cafards dans les Yvelines (78)',
    metaDescription:
      "Cafards et blattes dans les Yvelines : pavillonnaire, copropriétés, résidences meublées et commerces. Diagnostic et traitement adapté au contexte.",
    h1: 'Traitement des cafards et des blattes dans les Yvelines (78)',
    lede:
      "Les Yvelines associent un pavillonnaire étendu, des copropriétés de tailles variées et des résidences collectives dans les principaux pôles urbains du département.",
    intro: [
      "Dans les Yvelines, le premier élément à établir est la nature du bâtiment. Une maison avec sous-sol à Saint-Germain-en-Laye et un immeuble collectif à Trappes ou Mantes-la-Jolie ne posent pas les mêmes questions. Dans le premier cas, on cherche un point d'entrée et une zone humide. Dans le second, on évalue la diffusion entre logements et l'état des réseaux communs.",
      "Le département compte également des résidences étudiantes et des logements meublés, notamment autour des pôles d'enseignement et des zones d'activité. Ces sites présentent une rotation d'occupants élevée, ce qui multiplie les occasions d'introduction par les cartons, les petits électroménagers et les effets personnels. Un dispositif de signalement simple y est souvent plus utile qu'un traitement ponctuel.",
    ],
    habitatTitle: 'Pavillonnaire, copropriétés et logements meublés',
    habitat: [
      "Le pavillonnaire yvelinois comporte souvent des sous-sols aménagés, des garages intégrés et des celliers. Ces volumes, peu chauffés mais humides, méritent une inspection spécifique, distincte de celle de la cuisine.",
      "Les copropriétés des pôles urbains présentent des configurations classiques de collectif : gaines verticales, locaux de déchets, caves. La coordination avec le syndic conditionne l'efficacité du traitement.",
      "Les logements meublés et résidences à rotation rapide demandent une attention particulière lors des changements d'occupants : c'est le moment où une présence peut passer d'un logement à l'autre par l'intermédiaire du mobilier ou des cartons.",
    ],
    contexts: [
      {
        title: 'Résidences meublées et étudiantes',
        text: "Cuisines partagées, kitchenettes, locaux à vélos et laveries sont les points à examiner. Un protocole de vérification à chaque changement d'occupant limite les réinstallations.",
      },
      {
        title: 'Copropriétés',
        text: "Diagnostic à l'échelle du bâtiment, inspection des gaines et des locaux communs, puis traitement coordonné des logements concernés.",
      },
      {
        title: 'Maisons avec sous-sol',
        text: "Buanderie, chaufferie, regards : la présence y est souvent liée à un point d'eau permanent ou à une canalisation défectueuse.",
      },
      {
        title: 'Commerces et galeries marchandes',
        text: "Réserves communes, quais de livraison et locaux de déchets mutualisés peuvent relier plusieurs enseignes. Le périmètre de traitement doit en tenir compte.",
      },
    ],
    conseilsTitle: "Ce qu'il est utile de vérifier dans les Yvelines",
    conseils: [
      "Avant d'installer un électroménager d'occasion, inspecter l'arrière et le dessous de l'appareil.",
      "En résidence meublée, vérifier les kitchenettes et les plinthes lors de chaque remise en location.",
      "En maison, maintenir les sous-sols ventilés et limiter les stockages contre les murs.",
      "En copropriété, demander l'accès aux gaines techniques lors du diagnostic.",
      "Dans une galerie marchande, coordonner le signalement entre enseignes voisines.",
    ],
    communes: [
      'Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye', 'Poissy',
      'Conflans-Sainte-Honorine', 'Montigny-le-Bretonneux', 'Trappes', 'Plaisir', 'Chatou',
      'Houilles', 'Les Mureaux', 'Rambouillet', 'Le Chesnay-Rocquencourt', 'Élancourt',
      'Guyancourt', 'Maisons-Laffitte', 'Le Pecq', "Saint-Cyr-l'École", 'Vélizy-Villacoublay',
    ],
    communesNote:
      "Principales communes desservies. Les secteurs limitrophes du département sont traités selon la distance.",
    faq: [
      {
        q: "Comment éviter qu'un logement meublé soit recontaminé à chaque location ?",
        a: "En intégrant une vérification simple entre deux occupations : inspection de la kitchenette, de l'arrière des appareils et des plinthes, contrôle des cartons entrants. Ce sont les vecteurs les plus courants dans ce type de parc.",
      },
      {
        q: 'Mon pavillon est récent, pourquoi des blattes apparaissent-elles ?',
        a: "L'ancienneté du bâtiment n'est pas le facteur déterminant. Ce qui compte, c'est la présence simultanée de chaleur, d'humidité, de nourriture accessible et d'abris. Une construction récente peut réunir ces quatre conditions autour d'un lave-linge ou d'un lave-vaisselle.",
      },
      {
        q: "Les caves d'immeuble doivent-elles être traitées ?",
        a: "Elles sont inspectées lorsque des observations sont faites en partie basse ou lorsque la configuration les relie aux logements. Le traitement n'est proposé que si l'inspection le justifie.",
      },
    ],
    cities: ['cafards-versailles', 'cafards-mantes-la-jolie'],
  },

  {
    slug: 'essonne',
    code: '91',
    nom: 'Essonne',
    loc: 'en Essonne',
    metaTitle: 'Traitement des cafards en Essonne (91)',
    metaDescription:
      "Cafards et blattes en Essonne : copropriétés, résidences étudiantes, pavillonnaire et commerces de centre-ville. Diagnostic et traitement adapté.",
    h1: 'Traitement des cafards et des blattes en Essonne (91)',
    lede:
      "L'Essonne réunit des copropriétés urbaines, un pavillonnaire important et des résidences liées aux pôles d'enseignement et de recherche du département.",
    intro: [
      "En Essonne, une part notable des demandes concerne des copropriétés de taille moyenne, souvent construites entre les années 1960 et 1980. Ces ensembles partagent des réseaux verticaux et des locaux communs, ce qui donne au diagnostic une dimension collective : il ne suffit pas de savoir ce qui se passe dans un logement, il faut savoir si les logements voisins sont concernés.",
      "Le département accueille aussi des résidences étudiantes et des logements de courte durée, en lien avec les établissements d'enseignement supérieur et les zones d'activité. Comme ailleurs, la rotation des occupants augmente la probabilité d'introduction par du mobilier ou des cartons. La prévention passe alors autant par l'organisation que par le traitement.",
    ],
    habitatTitle: 'Copropriétés, campus et pavillonnaire',
    habitat: [
      "Les copropriétés urbaines présentent des gaines techniques, des vide-ordures parfois désaffectés et des locaux de déchets en partie basse. Ces éléments sont examinés dès lors que plusieurs logements signalent des observations.",
      "Les résidences liées aux campus comportent des kitchenettes individuelles ou des cuisines partagées. Les zones critiques y sont concentrées : plaque de cuisson, réfrigérateur, évier, rangements hauts.",
      "Le pavillonnaire, très présent dans le département, soulève les questions habituelles de la maison individuelle : point d'entrée extérieur, sous-sol, buanderie, garage.",
    ],
    contexts: [
      {
        title: 'Copropriétés de taille moyenne',
        text: "Diagnostic à l'échelle de la cage, inspection des gaines et des locaux communs, traitement coordonné des logements concernés.",
      },
      {
        title: 'Logements étudiants',
        text: "Kitchenettes, cuisines partagées et laveries. Un signalement rapide par les occupants est déterminant, car les observations sont souvent isolées au départ.",
      },
      {
        title: 'Commerces de centre-ville',
        text: "Réserves, arrière-boutiques et locaux de déchets. L'organisation du stockage conditionne la durée du résultat.",
      },
      {
        title: 'Maisons individuelles',
        text: "Vérification du pourtour, des passages de réseaux et des zones humides. Les espèces rencontrées en partie basse ne sont pas toujours celles des cuisines.",
      },
    ],
    conseilsTitle: "Points d'attention en Essonne",
    conseils: [
      "En résidence, signaler la première observation sans attendre d'en voir plusieurs.",
      "Vérifier les grilles de ventilation basse et l'état des joints autour des canalisations.",
      "Limiter les stockages alimentaires ouverts dans les kitchenettes.",
      "En copropriété, demander une inspection des locaux de déchets lorsque les premiers niveaux sont concernés.",
      "Nettoyer régulièrement le dessous et l'arrière des appareils de cuisson.",
    ],
    communes: [
      'Évry-Courcouronnes', 'Massy', 'Corbeil-Essonnes', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois',
      'Palaiseau', 'Athis-Mons', 'Viry-Châtillon', 'Draveil', 'Grigny',
      'Yerres', 'Brunoy', 'Les Ulis', 'Longjumeau', 'Ris-Orangis',
      'Montgeron', 'Verrières-le-Buisson', 'Étampes', 'Arpajon', 'Brétigny-sur-Orge',
    ],
    communesNote:
      "Principales communes desservies dans le département, en habitation comme en local professionnel.",
    faq: [
      {
        q: 'Une seule observation dans une résidence justifie-t-elle un signalement ?',
        a: "Oui. Dans un ensemble collectif, une observation isolée est souvent le premier signe visible d'une population déjà installée dans une zone fermée. Le signalement précoce permet d'agir sur un périmètre réduit.",
      },
      {
        q: 'Combien de temps faut-il pour traiter une copropriété ?',
        a: "Cela dépend de l'étendue constatée, du nombre de logements concernés et de l'accès aux parties communes. Un traitement comporte généralement une première intervention puis un contrôle, avec des délais précisés après le diagnostic plutôt qu'annoncés à l'avance.",
      },
      {
        q: 'Les cuisines partagées sont-elles plus exposées ?',
        a: "Elles cumulent un usage intensif, des rangements nombreux et plusieurs utilisateurs, ce qui rend le nettoyage complet plus difficile. Ce n'est pas une fatalité, mais cela justifie une inspection plus régulière.",
      },
    ],
    cities: ['cafards-evry-courcouronnes'],
  },

  {
    slug: 'val-doise',
    code: '95',
    nom: "Val-d'Oise",
    loc: "dans le Val-d'Oise",
    metaTitle: "Traitement des cafards dans le Val-d'Oise (95)",
    metaDescription:
      "Cafards et blattes dans le Val-d'Oise : habitat collectif, pavillonnaire, hôtellerie et commerces. Diagnostic de l'infestation et traitement adapté.",
    h1: "Traitement des cafards et des blattes dans le Val-d'Oise (95)",
    lede:
      "Le Val-d'Oise juxtapose des communes denses au sud du département, un bâti de ville nouvelle autour de Cergy et une activité hôtelière liée à la zone aéroportuaire.",
    intro: [
      "Au sud du département, les communes les plus proches de Paris présentent un habitat collectif dense, avec des immeubles de différentes époques et des commerces en pied d'immeuble. Les situations y sont proches de celles de la petite couronne : réseaux verticaux partagés, locaux de déchets, logements de premiers niveaux exposés.",
      "Plus au nord et à l'ouest, le bâti change : ensembles de ville nouvelle à Cergy et Pontoise, zones pavillonnaires étendues, centre ancien à Pontoise. S'y ajoute une activité hôtelière et de restauration liée à la proximité de la zone aéroportuaire, avec ses contraintes propres de continuité de service et de volumes de restauration importants.",
    ],
    habitatTitle: 'Du collectif dense au bâti de ville nouvelle',
    habitat: [
      "Dans les communes du sud, les immeubles collectifs dominent. L'évaluation porte sur l'étendue verticale de la présence et sur l'état des passages entre logements : gaines, coffrages, percements de canalisations.",
      "Autour de Cergy et Pontoise, le bâti de ville nouvelle présente des ensembles résidentiels avec locaux techniques mutualisés, parkings en sous-sol et locaux de déchets centralisés. Ces espaces sont inspectés lorsque plusieurs logements signalent des observations.",
      "Le pavillonnaire, présent dans une grande partie du département, ramène aux questions de point d'entrée, de sous-sol et de zones humides.",
    ],
    contexts: [
      {
        title: 'Hôtellerie et restauration de volume',
        text: "Cuisines de production, plonges, offices d'étage et locaux de linge. L'intervention se planifie avec la direction pour préserver l'exploitation.",
      },
      {
        title: 'Immeubles collectifs du sud du département',
        text: "Diagnostic à l'échelle du bâtiment, prise en compte des parties communes et coordination avec le syndic ou le bailleur.",
      },
      {
        title: 'Ensembles de ville nouvelle',
        text: "Parkings, locaux techniques et locaux de déchets mutualisés peuvent relier plusieurs bâtiments : le périmètre d'inspection est élargi en conséquence.",
      },
      {
        title: 'Maisons et pavillons',
        text: "Vérification du pourtour, des seuils, des grilles basses et des réseaux d'évacuation, en complément de l'inspection de la cuisine.",
      },
    ],
    conseilsTitle: "Préparer une intervention dans le Val-d'Oise",
    conseils: [
      "En hôtel, organiser la remontée d'information depuis les équipes d'étage et de cuisine.",
      "En collectif, recouper les observations entre logements avant de programmer le traitement.",
      "Vérifier les locaux de déchets et leur ventilation lorsque les premiers niveaux sont concernés.",
      "En maison, contrôler les passages de réseaux au niveau du sol et l'étanchéité des bas de portes.",
      "Éviter le stockage de cartons vides dans les réserves et les locaux communs.",
    ],
    communes: [
      'Argenteuil', 'Cergy', 'Sarcelles', 'Franconville', 'Garges-lès-Gonesse',
      'Pontoise', 'Goussainville', 'Bezons', 'Ermont', 'Villiers-le-Bel',
      'Herblay-sur-Seine', 'Sannois', 'Eaubonne', 'Taverny', "Saint-Ouen-l'Aumône",
      'Gonesse', 'Deuil-la-Barre', 'Montmorency', 'Osny', 'Jouy-le-Moutier',
    ],
    communesNote:
      "Principales communes desservies. Les modalités pour les secteurs les plus au nord sont précisées lors de la prise de contact.",
    faq: [
      {
        q: 'Un hôtel peut-il être traité sans fermer des chambres ?',
        a: "Le traitement porte en priorité sur les zones techniques et les cuisines. Lorsque des chambres sont concernées, elles sont traitées une fois libérées, ce qui suppose une coordination avec la réception plutôt qu'une fermeture générale.",
      },
      {
        q: 'Les parkings en sous-sol sont-ils concernés ?',
        a: "Ils le sont surtout lorsqu'ils abritent des locaux techniques, des locaux de déchets ou des gaines desservant les logements. Le parking lui-même est rarement le foyer, mais il peut constituer un chemin de circulation.",
      },
      {
        q: "Pourquoi inspecter les locaux poubelles d'une résidence ?",
        a: "Parce qu'ils réunissent chaleur, humidité et matière organique de façon continue. Lorsqu'ils sont reliés aux logements par une gaine ou une circulation, ils peuvent entretenir une présence malgré le traitement des appartements.",
      },
    ],
    cities: ['cafards-argenteuil', 'cafards-cergy'],
  },
];

export const bySlug = (slug: string) => departements.find((d) => d.slug === slug);
