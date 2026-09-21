/**
 * FAQ générale du site.
 * Les réponses restent factuelles et ne promettent aucun résultat universel.
 */
export type FaqGroup = { title: string; intro?: string; items: Array<{ q: string; a: string | string[] }> };

export const faqGroups: FaqGroup[] = [
  {
    title: 'Identifier et évaluer',
    intro: "Savoir à quoi l'on a affaire, et distinguer une observation isolée d'une population installée.",
    items: [
      {
        q: 'Comment reconnaître un cafard ?',
        a: [
          "Quatre critères combinés suffisent : un corps ovale très aplati, de longues antennes fines en mouvement permanent, six pattes épineuses et une fuite rapide vers un interstice dès qu'une lumière s'allume. La tête est orientée vers le bas et souvent invisible lorsqu'on observe l'insecte de dessus.",
          "Pour l'espèce, le critère décisif est le pronotum — la plaque située juste derrière la tête : deux bandes sombres parallèles pour la blatte germanique, uniformément noir et luisant pour la blatte orientale, liseré clair sur le pourtour pour la blatte américaine.",
        ],
      },
      {
        q: 'Comment savoir si une infestation est importante ?',
        a: [
          "Une observation unique ne permet pas de conclure. Cinq indices, en revanche, sont informatifs par leur cumul : des observations répétées au même endroit, des déjections en forme de grains de poivre dans les angles de placards, des traces brunes derrière les appareils, des oothèques dans les interstices, et des individus de tailles différentes.",
          "Trois signaux indiquent une situation déjà avancée : des observations en pleine journée, une présence dans des pièces sans point d'eau, et des observations simultanées chez un voisin direct.",
        ],
      },
      {
        q: 'Où se cachent les cafards ?',
        a: "Dans des volumes fermés réunissant chaleur permanente, humidité, obscurité et espace resserré. En cuisine : compartiment moteur du réfrigérateur, socle du lave-vaisselle, habillage du four, dessous d'évier, vides de plinthe, charnières et rails de tiroir, intérieur des petits appareils. En partie basse d'un bâtiment : abords de canalisations, siphons de sol, regards d'évacuation, interstices de sol de sous-sol.",
      },
      {
        q: 'Pourquoi voit-on des cafards la nuit ?',
        a: "Les blattes évitent activement la lumière, ce qui réduit leur exposition. L'activité se déclenche après l'extinction des lumières, dans une pièce calme, et atteint son maximum plusieurs heures plus tard. Une observation en pleine journée indique généralement que les refuges disponibles ne suffisent plus à héberger la population.",
      },
      {
        q: 'Comment trouver une infestation chez soi ?',
        a: "Laissez la pièce dans l'obscurité et le calme une à deux heures, puis entrez et allumez d'un coup. Ce qui compte n'est pas le nombre d'insectes visibles mais la direction de leur fuite : en quelques secondes, chacun rejoint son refuge. En complément, suivez les déjections dans les placards bas : leur densité augmente à mesure qu'on approche de la zone de refuge.",
      },
      {
        q: 'Cafard et blatte : y a-t-il une différence ?',
        a: "Non, les deux mots désignent le même insecte. « Blatte » relève du vocabulaire zoologique, « cafard » de l'usage courant ; « cancrelat » et « ravet » sont deux autres synonymes. La distinction qui compte est entre les espèces, car elles n'occupent pas les mêmes zones et ne se traitent pas de la même manière.",
      },
    ],
  },
  {
    title: 'Traitement et intervention',
    intro: "Ce qui se passe concrètement, ce qui détermine la durée et ce qui ne peut pas être promis.",
    items: [
      {
        q: 'Comment fonctionne une intervention ?',
        a: [
          "Elle se déroule en sept étapes : échange initial, analyse du contexte, inspection des zones de refuge, recherche des conditions favorables, traitement adapté, conseils de prévention et contrôle lorsque nécessaire.",
          "L'inspection représente souvent la moitié du temps passé sur place, car c'est elle qui détermine où positionner le traitement. Un produit appliqué sur des surfaces visibles n'atteint pratiquement pas la population.",
        ],
      },
      {
        q: 'Combien de temps faut-il pour traiter une infestation ?',
        a: [
          "Cela dépend de l'espèce, de l'étendue de la population et de l'accès obtenu aux zones de refuge. Une baisse des observations est généralement perceptible dans les semaines suivant l'intervention.",
          "Le cycle des oothèques impose souvent un contrôle trois à quatre semaines plus tard. Aucun délai fixe ne peut être annoncé de manière fiable avant le diagnostic : l'espèce, l'étendue et l'accessibilité des refuges conditionnent trop fortement l'issue.",
        ],
      },
      {
        q: 'Faut-il quitter son logement pendant le traitement ?',
        a: "Dans la plupart des configurations en habitation, le traitement est conçu pour permettre une occupation normale des lieux. Des consignes précises sont remises selon la méthode retenue et selon la présence d'enfants ou d'animaux domestiques. Aucune règle générale ne s'applique à toutes les situations : les modalités sont indiquées avant l'intervention.",
      },
      {
        q: 'Pourquoi les cafards reviennent-ils ?',
        a: [
          "Cinq causes expliquent la grande majorité des réapparitions : le traitement n'a pas atteint les refuges ; des oothèques ont éclos après l'intervention ; une population subsiste chez un voisin ; un réseau commun sert de voie de circulation ; les conditions favorables n'ont pas changé.",
          "La taille des individus revenus est un bon indice : nettement plus petits, cela oriente vers les oothèques ; de taille comparable, vers des refuges non atteints ou une réalimentation extérieure.",
        ],
      },
      {
        q: 'Est-il normal de voir encore des cafards après le traitement ?',
        a: "Dans les premiers jours, oui : les individus circulent davantage et deviennent plus visibles. Ce qui compte est la tendance sur plusieurs semaines. Une reprise à trois ou quatre semaines, avec des individus nettement plus petits, correspond à l'éclosion des oothèques présentes lors de l'intervention — un phénomène prévisible, que le contrôle vise à couvrir.",
      },
      {
        q: 'Comment savoir si l’infestation est terminée ?',
        a: [
          "Trois éléments convergents : l'absence d'observation sur plusieurs semaines consécutives, l'absence de nouvelles déjections dans les zones auparavant fréquentées, et l'absence de nouvelles mues ou oothèques lors d'un contrôle des refuges identifiés.",
          "Le délai à observer dépend du cycle de l'espèce : il faut au minimum dépasser la période d'éclosion des oothèques présentes lors du traitement. Aucune confirmation ne peut être donnée à partir de la seule absence d'observation pendant quelques jours.",
        ],
      },
      {
        q: 'Peut-on traiter avec des enfants ou des animaux à la maison ?',
        a: "Les modalités sont adaptées en conséquence : positionnement dans des volumes fermés et hors de portée, et consignes spécifiques d'accès aux zones traitées. Ce point doit être signalé lors de l'échange initial, car il influence le choix des méthodes.",
      },
      {
        q: 'Une photo suffit-elle pour établir un diagnostic ?',
        a: "Une photo prise de dessus permet souvent d'orienter l'identification de l'espèce. Elle ne remplace pas une inspection : connaître l'espèce ne dit rien de l'étendue de la présence ni de la localisation des refuges, qui sont les deux éléments déterminants pour définir un périmètre de traitement.",
      },
    ],
  },
  {
    title: 'Logement collectif et copropriété',
    intro: "Ce qui change lorsque plusieurs logements partagent des réseaux.",
    items: [
      {
        q: 'Les cafards peuvent-ils passer d’un appartement à l’autre ?',
        a: "Oui. Les gaines techniques, les colonnes d'eaux usées, les traversées de canalisation non colmatées et les vides derrière les coffrages relient les logements. C'est l'une des principales raisons pour lesquelles une infestation réapparaît après un traitement réalisé dans un seul appartement.",
      },
      {
        q: 'Que faire dans une copropriété ?',
        a: [
          "Signaler par écrit au syndic, en précisant les pièces concernées, la fréquence et la période des observations. Encourager les voisins de la même colonne à signaler également : sans ce recoupement, l'étendue réelle reste invisible.",
          "Demander ensuite un diagnostic à l'échelle du bâtiment — pas un simple devis. Ce document décrit les logements concernés, les niveaux, l'état des gaines et la situation des locaux communs, et permet de proposer un périmètre défendable en assemblée.",
        ],
      },
      {
        q: 'Qui prend en charge le traitement : locataire, propriétaire ou copropriété ?',
        a: "La répartition dépend du bail, du règlement de copropriété et de l'origine de l'infestation. En pratique, le traitement des parties communes relève de la copropriété ou du bailleur, celui du logement du propriétaire ou de l'occupant selon les cas. Un diagnostic écrit indiquant si la présence provient des réseaux communs facilite cette discussion.",
      },
      {
        q: 'Faut-il traiter tous les appartements d’un immeuble ?',
        a: "Pas systématiquement. On traite les logements concernés, ceux qui les encadrent verticalement et horizontalement, ainsi que les parties communes reliées. Le périmètre est défini à partir des observations relevées lors du diagnostic, pas par principe.",
      },
      {
        q: 'Comment protéger une copropriété d’une nouvelle infestation ?',
        a: [
          "Cinq mesures ont un effet durable : colmater les traversées de canalisation entre logements et vers les gaines (après le traitement), ventiler le local de collecte des déchets et revoir sa fréquence d'évacuation, obturer définitivement un ancien vide-ordures lorsque c'est possible, maintenir les siphons de sol en eau dans les caves et locaux techniques, et réduire les stockages au sol dans les parties communes.",
          "S'y ajoute une mesure d'organisation : un canal de signalement clair pour les occupants, qui permet de détecter tôt et d'agir sur un périmètre restreint.",
        ],
      },
    ],
  },
  {
    title: 'Cuisine, commerces et locaux professionnels',
    intro: "Les contextes où la pression d'introduction est continue.",
    items: [
      {
        q: 'Comment traiter une cuisine infestée ?',
        a: "En traitant les volumes fermés et non les surfaces. Les zones à examiner sont connues : compartiment moteur du réfrigérateur, socle du lave-vaisselle, habillage du four, dessous d'évier, vides de plinthe, charnières et rails, petits appareils, hotte, trappe de gaine. À cela s'ajoute la suppression de l'eau disponible la nuit, qui est le levier le plus efficace à court terme.",
      },
      {
        q: 'Comment traiter un restaurant ?',
        a: [
          "L'intervention porte d'abord sur la plonge et les réserves, puis sur les équipements chauds, les siphons de sol, le local de déchets, les chambres froides et les vestiaires. Elle se planifie hors service : tôt le matin, après la fermeture ou sur un jour de repos.",
          "Le volet organisationnel est déterminant : surélever les stockages, laisser un passage le long des murs, éliminer les cartons vides et déballer les livraisons à la réception. Sans ces mesures, un traitement perd son effet en quelques semaines.",
        ],
      },
      {
        q: 'Les cafards peuvent-ils se cacher dans les appareils ?',
        a: "Oui, et c'est l'une de leurs localisations les plus fréquentes. Le compartiment moteur d'un réfrigérateur, le socle d'un lave-vaisselle, l'habillage d'un four ou l'intérieur d'une machine à café réunissent chaleur, humidité et abri resserré. C'est aussi la raison pour laquelle un appareil d'occasion doit être inspecté avant installation.",
      },
      {
        q: 'Les livraisons peuvent-elles introduire des blattes ?',
        a: "Oui. Les cartons, cageots et palettes figurent parmi les vecteurs les mieux documentés, en raison des interstices qu'ils comportent. Un local parfaitement traité peut être réalimenté par une livraison. Le déballage à la réception, avant la mise en réserve, et l'évacuation immédiate des emballages réduisent sensiblement ce risque.",
      },
      {
        q: 'Quels documents faut-il conserver en local professionnel ?',
        a: "Les rapports d'intervention avec les constats et les zones traitées, les recommandations émises et les actions engagées en réponse, le relevé des observations faites par les équipes entre deux passages, et la liste des zones à surveiller avec la fréquence des contrôles. Ces éléments constituent la trace de l'action menée.",
      },
    ],
  },
  {
    title: 'Prévention',
    intro: "Ce qui réduit réellement l'attractivité d'un lieu, et ce qui ne sert à rien.",
    items: [
      {
        q: 'Comment éviter une nouvelle infestation ?',
        a: [
          "En agissant sur les quatre besoins d'une blatte : l'eau disponible la nuit, la nourriture accessible, les abris resserrés et la chaleur permanente. Réduire fortement un seul de ces facteurs rend un lieu nettement moins accueillant.",
          "S'y ajoute le contrôle de ce qui entre : déballer les cartons de livraison à l'extérieur, inspecter l'arrière et le dessous d'un appareil d'occasion, vérifier un meuble récupéré avant installation.",
        ],
      },
      {
        q: 'Un logement propre est-il à l’abri ?',
        a: "Non. La propreté réduit la nourriture accessible en surface, ce qui est utile, mais elle ne change ni la chaleur produite par les appareils, ni l'humidité des points d'eau, ni le nombre d'interstices. En immeuble, elle ne change rien aux réseaux qui relient les logements.",
      },
      {
        q: 'Faut-il colmater les passages de canalisation ?',
        a: "Oui, mais après le diagnostic. Avant, ces passages constituent une information : ils indiquent par où circule la population, et cela détermine le positionnement du traitement. Deux précautions : ne jamais obturer une grille de ventilation, ce qui créerait de l'humidité, et ne pas condamner une trappe de gaine technique, qui doit rester accessible.",
      },
      {
        q: 'Les produits du commerce sont-ils efficaces ?',
        a: "Les aérosols appliqués sur les individus visibles tuent quelques insectes et agissent comme un répulsif sur les autres, qui se dispersent vers d'autres pièces et, en immeuble, vers les logements voisins : la zone concernée s'étend au lieu de se réduire. Les répulsifs d'ambiance ont un effet bref. Aucun de ces produits n'atteint la population installée dans des volumes fermés.",
      },
      {
        q: 'Quelles précautions d’hygiène prendre en attendant ?',
        a: "Protéger les denrées sèches dans des contenants fermés, nettoyer les surfaces de préparation avant usage et non seulement après, laver la vaisselle stockée dans un placard où des déjections ont été observées, ne pas laisser de vaisselle sale la nuit, aérer régulièrement, et manipuler insectes et oothèques avec un mouchoir plutôt qu'à mains nues.",
      },
    ],
  },
];

export const allFaqItems = faqGroups.flatMap((g) => g.items);
