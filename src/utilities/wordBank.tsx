const wordBank = [
[
    "flask",
    "skald",
    "flak",
    "kafs",
    "daks",
    "fads",
    "dals",
    "lads",
    "kaf",
    "dak",
    "aks",
    "ask",
    "fad",
    "kas",
    "ska",
    "fas",
    "dal",
    "lad",
    "lsd",
    "ads",
    "als",
    "las",
    "sad",
    "sal",
    "ja",
    "ka",
    "fa",
    "ad",
    "al",
    "da",
    "la",
    "as"
],
[
    "jarfuls",
    "jarsful",
    "jarful",
    "jaruls",
    "faulds",
    "frauds",
    "jauks",
    "jarul",
    "judas",
    "jural",
    "jarls",
    "fauld",
    "lurks",
    "darks",
    "fraud",
    "furls",
    "larks",
    "rakus",
    "sulfa",
    "fards",
    "farls",
    "duals",
    "dural",
    "lauds",
    "jauk",
    "jarl",
    "jura",
    "jars",
    "frak",
    "dusk",
    "kula",
    "lurk",
    "sulk",
    "auks",
    "dark",
    "flus",
    "fuds",
    "furl",
    "lark",
    "raku",
    "rusk",
    "jua",
    "jus",
    "jar",
    "raj",
    "auk",
    "flu",
    "fud",
    "suk",
    "ark",
    "fur",
    "arf",
    "far",
    "fas",
    "fu",
    "us",
    "ar"
],
[
    "surflike",
    "failures",
    "residual",
    "adjures",
    "jailers",
    "flukier",
    "flakers",
    "flakier",
    "frisked",
    "dareful",
    "darkles",
    "direful",
    "duikers",
    "duskier",
    "skirled",
    "sulfide",
    "sulkier",
    "daikers",
    "earfuls",
    "failure",
    "fardels",
    "jauked",
    "fjelds",
    "adjure",
    "jailed",
    "judies",
    "julias",
    "jurels",
    "juried",
    "fluked",
    "jailer",
    "jerids",
    "juries",
    "flaked",
    "flukes",
    "flaker",
    "flakes",
    "kalifs",
    "fakers",
    "juked",
    "fjeld",
    "jukes",
    "fujis",
    "jakes",
    "jerks",
    "jarul",
    "julia",
    "jurel",
    "jades",
    "jails",
    "jerid",
    "jirds",
    "juris",
    "fluke",
    "kulfi",
    "juke",
    "fuji",
    "jake",
    "jerk",
    "jade",
    "jail",
    "jali",
    "jird",
    "jure",
    "kufi",
    "fake",
    "kaif",
    "kefs",
    "jeu",
    "jai",
    "kef",
    "kif",
    "elk",
    "ilk",
    "ked",
    "kid",
    "kue",
    "lek",
    "je",
    "ki",
    "ef",
    "fe",
    "fi",
    "if",
    "de",
    "ed",
    "el",
    "id",
    "li"
],
[
    "fieldworks",
    "dwarflike",
    "fieldwork",
    "falsework",
    "lifeworks",
    "leadworks",
    "swordlike",
    "fluorides",
    "koradjis",
    "frijoles",
    "jalousie",
    "lifework",
    "leadwork",
    "sidewalk",
    "folksier",
    "selfward",
    "weariful",
    "airflows",
    "fluoride",
    "fluorids",
    "foulards",
    "kilorads",
    "foresaid",
    "foresail",
    "roulades",
    "jawlike",
    "judokas",
    "adjikos",
    "koradji",
    "frijole",
    "jowlier",
    "feijoas",
    "wakeful",
    "jealous",
    "jailors",
    "folkier",
    "folkies",
    "jouked",
    "judoka",
    "adjiko",
    "jowled",
    "fjords",
    "frijol",
    "jokers",
    "jokier",
    "feijoa",
    "jowars",
    "jouals",
    "joules",
    "joked",
    "jouks",
    "fjord",
    "jawed",
    "joker",
    "jokes",
    "jowed",
    "jowls",
    "jowar",
    "joual",
    "joule",
    "jouk",
    "joke",
    "jowl",
    "koji",
    "jaws",
    "jows",
    "judo",
    "jole",
    "jols",
    "jour",
    "jaw",
    "jow",
    "jol",
    "joe",
    "wok",
    "few",
    "jo",
    "ok",
    "aw",
    "ew",
    "of",
    "ow",
    "we",
    "wo"
],
[
    "squawkier",
    "odalisque",
    "squalider",
    "ropewalks",
    "spadework",
    "polewards",
    "praiseful",
    "epidurals",
    "poulardes",
    "polarised",
    "squawked",
    "squawker",
    "oldsquaw",
    "aquifers",
    "jalopies",
    "jeopards",
    "piroques",
    "prosequi",
    "liquored",
    "upflowed",
    "powerful",
    "queridas",
    "ropewalk",
    "spurfowl",
    "wasplike",
    "peafowls",
    "quirked",
    "opaqued",
    "pasquil",
    "plaques",
    "quakers",
    "quakier",
    "aquifer",
    "faquirs",
    "jeopard",
    "opaquer",
    "opaques",
    "piroque",
    "squawk",
    "kopjes",
    "quaked",
    "juleps",
    "piqued",
    "plaque",
    "quaker",
    "quakes",
    "quarks",
    "quirks",
    "squark",
    "squeak",
    "equips",
    "kopje",
    "julep",
    "quake",
    "quark",
    "quirk",
    "equip",
    "jalop",
    "japed",
    "jaups",
    "waqf",
    "jaup",
    "jupe",
    "puja",
    "quip",
    "jape",
    "quad",
    "quid",
    "loq",
    "qua",
    "que",
    "qui",
    "quo",
    "suq",
    "esq",
    "qis",
    "raj",
    "seq",
    "qi",
    "up",
    "op",
    "pa"
],
[
    "dealfish",
    "gadflies",
    "jehadis",
    "khalifs",
    "flashed",
    "fleadhs",
    "deafish",
    "halides",
    "silaged",
    "hadjes",
    "hadjis",
    "jadish",
    "jehadi",
    "jehads",
    "jihads",
    "khalif",
    "skeigh",
    "fleadh",
    "khadis",
    "khedas",
    "kliegs",
    "elfish",
    "hadji",
    "jehad",
    "jhils",
    "jihad",
    "hajes",
    "hajis",
    "khafs",
    "dhaks",
    "hiked",
    "hadj",
    "jhil",
    "haji",
    "jags",
    "jigs",
    "khaf",
    "dhak",
    "khad",
    "lakh",
    "flag",
    "haj",
    "jag",
    "jig",
    "gak",
    "keg",
    "khi",
    "fah",
    "feh",
    "fig",
    "ag",
    "ah",
    "eh",
    "gi",
    "ha",
    "he",
    "hi",
    "sh"
],
[
    "skylighted",
    "hayfields",
    "daylights",
    "safelight",
    "giltheads",
    "jadishly",
    "jehadist",
    "skylight",
    "flighted",
    "giftedly",
    "hayfield",
    "ladyfish",
    "daylight",
    "dayshift",
    "flakiest",
    "dayflies",
    "ladyfies",
    "alighted",
    "delights",
    "gilthead",
    "slighted",
    "hyalites",
    "gladiest",
    "flighty",
    "lekythi",
    "shadfly",
    "shakily",
    "fatlike",
    "fidgety",
    "flasket",
    "flights",
    "heftily",
    "thyself",
    "dykiest",
    "fetidly",
    "ghastly",
    "glaiket",
    "hatlike",
    "sightly",
    "jetski",
    "jetlag",
    "jilted",
    "flakey",
    "fledgy",
    "gadfly",
    "khyals",
    "kythed",
    "alkyds",
    "filthy",
    "flaky",
    "jilts",
    "fakey",
    "fykes",
    "jatis",
    "khyal",
    "tajes",
    "alkyd",
    "jays",
    "jilt",
    "fyke",
    "jati",
    "jest",
    "jets",
    "alky",
    "dyke",
    "jay",
    "jet",
    "jit",
    "taj",
    "tej",
    "fly",
    "kay",
    "key",
    "kye",
    "sky",
    "ay",
    "ya",
    "ye"
],
[
    "hamfistedly",
    "makeshift",
    "dimethyls",
    "halftimes",
    "hamfisted",
    "megaliths",
    "khedival",
    "milkshed",
    "almighty",
    "gamefish",
    "dimethyl",
    "famished",
    "fishmeal",
    "halftime",
    "mayflies",
    "datively",
    "festival",
    "majesty",
    "mikvahs",
    "mikvehs",
    "skydive",
    "maglevs",
    "flemish",
    "heavily",
    "himself",
    "misgave",
    "mitsvah",
    "majlis",
    "masjid",
    "mikvah",
    "mikveh",
    "vatjes",
    "jetsam",
    "mikvas",
    "favism",
    "flakey",
    "jivey",
    "jived",
    "jives",
    "vatje",
    "mikva",
    "milky",
    "filmy",
    "jivy",
    "jive",
    "jams",
    "jam",
    "jim",
    "gym",
    "vim",
    "emf",
    "fem",
    "hm",
    "my",
    "am",
    "em",
    "ma",
    "me",
    "mi"
],
[
    "fieldsman",
    "mandibles",
    "javelins",
    "lambkins",
    "lambskin",
    "bankside",
    "findable",
    "flavines",
    "inflamed",
    "mandible",
    "sinkable",
    "bailsmen",
    "bimensal",
    "flamines",
    "inflames",
    "semibald",
    "knaidels",
    "sandlike",
    "javelin",
    "basenji",
    "jalebis",
    "jasmine",
    "lambkin",
    "embanks",
    "blanked",
    "blinked",
    "fankled",
    "fimbles",
    "flambes",
    "flanked",
    "kelvins",
    "deskman",
    "fankles",
    "fanlike",
    "flavine",
    "flavins",
    "malkins",
    "manlike",
    "jambed",
    "jambes",
    "jinked",
    "kanjis",
    "jalebi",
    "jasmin",
    "embank",
    "fimble",
    "flambe",
    "kelvin",
    "balked",
    "banked",
    "bilked",
    "blanks",
    "jambe",
    "jambs",
    "jinks",
    "kanji",
    "jibed",
    "jibes",
    "sabji",
    "djins",
    "janes",
    "jeans",
    "blank",
    "blink",
    "flank",
    "jamb",
    "jank",
    "jink",
    "jabs",
    "jibe",
    "jibs",
    "djin",
    "jane",
    "jean",
    "jins",
    "balk",
    "bank",
    "bilk",
    "fink",
    "jab",
    "jib",
    "jin",
    "kab",
    "bam",
    "fab",
    "fib",
    "mib",
    "ab",
    "ba",
    "be",
    "bi"
],
[
    "backfields",
    "backfield",
    "blackfins",
    "backlines",
    "backslide",
    "canfields",
    "backveld",
    "blackfin",
    "finbacks",
    "limbecks",
    "backends",
    "backline",
    "backslid",
    "blackens",
    "calfskin",
    "backside",
    "diebacks",
    "medivacs",
    "scablike",
    "alembics",
    "canfield",
    "jackies",
    "jacksie",
    "finback",
    "limbeck",
    "backend",
    "blacked",
    "blacken",
    "flacked",
    "flicked",
    "mackled",
    "climbed",
    "dieback",
    "embanks",
    "mackles",
    "medicks",
    "jacked",
    "backed",
    "backne",
    "blacks",
    "fickle",
    "flacks",
    "flecks",
    "flicks",
    "mackle",
    "jacks",
    "black",
    "flack",
    "fleck",
    "flick",
    "backs",
    "becks",
    "jack",
    "back",
    "beck",
    "feck",
    "ack",
    "ick",
    "vac",
    "cab",
    "cam"
],
[
    "climaxed",
    "climaxes",
    "exclaims",
    "jezails",
    "mezcals",
    "exclaim",
    "admixes",
    "calixes",
    "jezail",
    "mezcal",
    "climax",
    "vizsla",
    "axlike",
    "maizes",
    "silvex",
    "vexils",
    "calxes",
    "flaxes",
    "lazied",
    "zaxes",
    "cimex",
    "fazed",
    "mazed",
    "mazel",
    "fazes",
    "maize",
    "mazes",
    "smaze",
    "smize",
    "vexil",
    "zamis",
    "admix",
    "calix",
    "faxed",
    "zack",
    "zeks",
    "faze",
    "maze",
    "zami",
    "calx",
    "falx",
    "flax",
    "flex",
    "adze",
    "amex",
    "daze",
    "exam",
    "fixe",
    "jade",
    "zax",
    "zek",
    "fez",
    "fiz",
    "zac",
    "kex",
    "vex",
    "adz",
    "fax",
    "fix",
    "max",
    "mix",
    "zed",
    "saz",
    "sez",
    "zas",
    "zes",
    "za",
    "ax",
    "ex",
    "xi"
]
];

export default wordBank;