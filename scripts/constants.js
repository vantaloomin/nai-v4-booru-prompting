// constants.js

// Artists constant
const artists = [
    "NONE",
    "RANDOM",
    "coach (artist)",
    "artist:aizen (syoshiyuki)",
    "xenotrip",
    "keung lee",
    "sencha (senchat)",
    "runa (nori31291404)",
    "tarte (hodarake)",
    "artist:lewdlemage",
    "by agnidevi",
    "artist:yoshimura masato",
    "artist:sadakage",
    "artist:musashino sekai",
    "artist:wallace pires",
    "zhixie jiaobu",
    "artist:r1",
    "kall alves",
    "sei shoujo",
    "artist:shigenori soejima, persona, persona 5",
    "simon stafsnes andersen",
    "jeff miga",
    "artist:bingo tarte, dithering, rotoscope pixel art",
    "artist:yuki oto",
    "by ryuuta (msxtr)",
    "by sirknightbot",
    "by eencya, pixel art",
    "superbusty",
    "greph",
    "dowman sayman",
    "rariatto_(ganguri)",
    "RAITA",
    "snegovski",
    "hoshi san3",
    "steb",
    "fizrotart",
    "jason rainville",
    "abigail larson",
    "esao andrews",
    "artist:homare_fool",
    "milkychu",
    "artist:konomidraws",
    "artist:kittew",
    "lexiaduer",
    "kishimoto masashi",
    "artist:rinko (mg54)",
  ];
  
  const suggestedArtistCombinations = [
    "sam yang, blushyspicy, khyle., parororo, gashi-gashi",
    "greph, tarakanovich, khyle.",
    "dowman sayman, rariatto_(ganguri), RAITA",
    "snegovski, hoshi san3, steb, painterly",
    "alex ahad, khyle., fizrotart",
    "jason rainville, abigail larson, esao andrews",
    "magai akashi, yabuki kentarou",
  ];
  
  // Character Data (without ", anime")
  const characterData = [
    {
      name: "d.va (overwatch)",
      category: "Overwatch",
      mainTags: "d.va (overwatch), brown eyes, brown hair, long hair, overwatch",
      enhancers: [
          "[mecha pilot suit", "blue body suit", "gloves,]", 
          "black cat d.va",
          "officer d.va",
          "shooting star d.va",
          "[--mecha pilot suit", "--blue body suit", "palanquin d.va", "hanbok]",
          "academy d.va",
          "cruiser d.va",
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "tracer (overwatch)",
      category: "Overwatch",
      mainTags:
        "tracer (overwatch), brown eyes, brown hair, short hair, spiked hair, overwatch",
      enhancers: [
          "[yellow pants", "grey jacket", "breastplate", "goggles]",
          "graffiti tracer",
          "track and field tracer"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "mei (overwatch)",
      category: "Overwatch",
      mainTags:
        "mei (overwatch), brown eyes, brown hair, long hair, plump, overwatch",
      enhancers: [
          "[blue pants", "gloves", "glasses", "fur-trimmed coat]",
          "honeydew mei",
          "jiangshi mei"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "widowmaker (overwatch)",
      category: "Overwatch",
      mainTags:
        "widowmaker (overwatch), yellow eyes, blue hair, long hair, purple skin, colored skin, overwatch",
      enhancers: [
          "[purple leotard", "headgear", "gloves", "single pant leg]", "cote d'azur widowmaker", "[--purple skin", "colored skin", "talon widowmaker]", "black lily widowmaker",
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "pharah (overwatch)",
      category: "Overwatch",
      mainTags:
        "pharah (overwatch), brown eyes, brown hair, short hair, dark skin, dark-skinned female, overwatch",
      enhancers: [
      "[armor", "mechanical wings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "sombra (overwatch)",
      category: "Overwatch",
      mainTags:
        "sombra (overwatch), brown eyes, purple hair, short hair, dark skin, dark-skinned female, overwatch",
      enhancers: [
          "[multicolored pants", "black jacket", "fingerless gloves]",
          "[slay star sombra", "hat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "symmetra (overwatch)",
      category: "Overwatch",
      mainTags:
        "symmetra (overwatch), brown eyes, black hair, long hair, dark skin, dark-skinned female, overwatch",
      enhancers: [
          "[blue dress", "pelvic curtain", "headgear", "goggles", "mechanical arm", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "brigitte (overwatch)",
      category: "Overwatch",
      mainTags:
        "brigitte (overwatch), muscular female, brown eyes, brown hair, long hair, ponytail, tattoo, overwatch",
      enhancers: [
          "[armor", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "zarya (overwatch)",
      category: "Overwatch",
      mainTags:
        "zarya (overwatch), blue eyes, pink hair, short hair, muscular female, overwatch",
      enhancers: [
          "[blue sleeveless shirt", "gloves", "arm band", "blue pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "mercy (overwatch)",
      category: "Overwatch",
      mainTags:
        "mercy (overwatch), blue eyes, blonde hair, long hair, overwatch",
      enhancers: [
          "[white armor", "pantyhose", "knee boots", "mechanical wings]",
      "[witch mercy", "witch hat]", "pink mercy", "[--yellow hair", "devil mercy]", "imp mercy", "winged victory mercy", "[zhuque mercy", "black hair]", "sugar plum fairy mercy", "[life guard mercy", "red swimsuit", "black shorts]",
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "lucca ashtear",
      category: "Chrono (Series)",
      mainTags:
        "lucca ashtear, purple eyes, purple hair, short hair, chrono trigger",
      enhancers: [
          "[glasses", "helmet", "orange robe", "black shorts", "belt pouch]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "marle (chrono trigger)",
      category: "Chrono (Series)",
      mainTags:
        "marle (chrono trigger), blue eyes, blonde hair, long hair, ponytail, chrono trigger",
      enhancers: [
          "[white pants", "white shirt", "belt", "collar", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "ayla (chrono trigger)",
      category: "Chrono (Series)",
      mainTags:
        "ayla (chrono trigger), brown eyes, blonde hair, long hair, chrono trigger",
      enhancers: [
          "[grey fur scarf", "grey fur tube top", "grey fur skirt", "grey wrist cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "schala zeal",
      category: "Chrono (Series)",
      mainTags: "schala zeal, blue eyes, blue hair, long hair, chrono trigger",
      enhancers: [
      "[ purple robes", "wide sleeves", "sleeves past wrists", "gold earrings,]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "crono (chrono trigger)",
      category: "Chrono (Series)",
      mainTags:
        "crono (chrono trigger), blue eyes, red hair, short hair, spiked hair, chrono trigger",
      enhancers: [
      "[blue tunic", "yellow pants", "yellow kerchief", "belt", "headband]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "magus (chrono trigger)",
      category: "Chrono (Series)",
      mainTags:
        "magus (chrono trigger), red eyes, blue hair, long hair, chrono trigger",
      enhancers: [
      "[breastplate", "purple pants", "red cape", "gloves", "codpiece]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "kid (chrono cross)",
      category: "Chrono (Series)",
      mainTags:
        "kid (chrono cross), blue eyes, blonde hair, long hair, ponytail, chrono cross",
      enhancers: [
      "[red cropped jacket", "red skirt", "white tube top", "belt", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "serge (chrono cross)",
      category: "Chrono (Series)",
      mainTags:
        "serge (chrono cross), blue eyes, blue hair, short hair, chrono cross",
      enhancers: [
      "[red bandana", "vest", "black shirt", "blue shorts", "black belt", "gloves,]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "harle (chrono cross)",
      category: "Chrono (Series)",
      mainTags:
        "harle (chrono cross), red eyes, black hair, short hair, chrono cross",
      enhancers: [
      "[two-tone leotard", "harem pants", "see-through pants", "long sleeves", "red gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "leena (chrono cross)",
      category: "Chrono (Series)",
      mainTags:
        "leena (chrono cross), blue eyes, brown hair, long hair, chrono cross",
      enhancers: [
      "[brown dress", "purple dress", "dress under dress", "green belt", "headband]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "marcy (chrono cross)",
      category: "Chrono (Series)",
      mainTags:
        "marcy (chrono cross), blue eyes, blue hair, short hair, double bun, chrono cross",
      enhancers: [
      "[pink dress", "breastplate", "fingerless gauntlets", "back bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "refia",
      category: "Final Fantasy 1-3",
      mainTags:
        "refia, brown eyes, red hair, medium hair, final fantasy iii, final fantasy",
      enhancers: [
      "[white dress", "blue vest", "pantyhose", "red thigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "black mage (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "black mage (final fantasy), yellow eyes, final fantasy",
      enhancers: [
      "[brown witch hat", "blue robe", "covered face]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "white mage (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "white mage (final fantasy), final fantasy",
      enhancers: [
      "[white hooded robe", "long skirt", "wide sleeves", "sleeves past wrists]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "dancer (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "dancer (final fantasy), final fantasy",
      enhancers: [
      "[brown sleeveless cropped shirt", "high collar", "wrist bangles", "brown skirt", "belt", "midriff]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "red mage (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "red mage (final fantasy), final fantasy",
      enhancers: [
      "[red hat", "hat feather", "red cloak", "white ascot]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "dark knight (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "dark knight (final fantasy), red eyes, black hair, short hair, final fantasy",
      enhancers: [
      "[purple armor", "full armor", "knee pads", "shoulder armor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "ninja (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "ninja (final fantasy), brown eyes, black hair, short hair, final fantasy",
      enhancers: [
      "[red sleeveless tunic", "brown belt", "belt pouch", "black mask", "covered mouth", "detached sleeves", "elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "dragoon (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "dragoon (final fantasy), blue eyes, purple hair, short hair, final fantasy",
      enhancers: [
      "[armor", "horned helmet", "chestplate]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "scholar (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "scholar (final fantasy), brown eyes, brown hair, long hair, final fantasy",
      enhancers: [
      "[mortarboard", "green coat", "black skirt", "yellow dress", "glasses]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "thief (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "thief (final fantasy), green eyes, brown hair, short hair, final fantasy",
      enhancers: [
      "[green shirt", "green shorts", "green bandana", "brown vest", "fingerless gloves", "long sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "shiva (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "shiva (final fantasy), colored skin, blue skin, blue eyes, blue hair, very long hair, final fantasy",
      enhancers: [
      "[forehead jewel", "blue highleg leotard", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "carbuncle (final fantasy)",
      category: "Final Fantasy 1-3",
      mainTags:
        "carbuncle (final fantasy), fox girl, fox ears, fox tail, animal ear fluff, red eyes, green hair, forehead jewel, final fantasy",
      enhancers: [
      "[blue dress", "layered skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "rydia (ff4)",
      category: "Final Fantasy 4",
      mainTags:
        "rydia (ff4), green eyes, green hair, long hair, final fantasy iv, final fantasy",
      enhancers: [
      "[green dress", "cape", "thighhighs", "hair ornament]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "rosa farrell",
      category: "Final Fantasy 4",
      mainTags:
        "rosa farrell, blue eyes, blonde hair, long hair, final fantasy iv, final fantasy",
      enhancers: [
      "[white leotard", "cape", "hair ornament", "fingerless gloves", "belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "barbariccia",
      category: "Final Fantasy 4",
      mainTags:
        "barbariccia, yellow eyes, green hair, long hair, final fantasy iv, final fantasy",
      enhancers: [
      "[bikini top only", "pelvic curtain", "shawl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "porom",
      category: "Final Fantasy 4",
      mainTags:
        "porom, blue eyes, blonde hair, short hair, final fantasy iv, final fantasy",
      enhancers: [
      "[striped thighhighs", "cape", "sleeveless pink dress", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "lenna charlotte tycoon",
      category: "Final Fantasy 5",
      mainTags:
        "lenna charlotte tycoon, blue eyes, blonde hair, long hair, final fantasy v, final fantasy",
      enhancers: [
      "[sleeveless orange dress", "hair ornament", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "faris scherwiz",
      category: "Final Fantasy 5",
      mainTags:
        "faris scherwiz, purple eyes, purple hair, long hair, final fantasy v, final fantasy",
      enhancers: [
      "[green headband", "sleeveless blue jacket", "blue tunic", "belt", "green shawl", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "krile mayer baldesion (ff5)",
      category: "Final Fantasy 5",
      mainTags:
        "krile mayer baldesion (ff5), blue eyes, blonde hair, short hair, final fantasy v, final fantasy",
      enhancers: [
      "[sleeveless pink leotard", "blue cape", "pink gauntlets", "white thighhighs", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "terra branford",
      category: "Final Fantasy 6",
      mainTags:
        "terra branford, blue eyes, green hair, long hair, ponytail, final fantasy vi, final fantasy",
      enhancers: [
      "[red dress", "purple sash", "yellow cape", "red bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "trance terra branford",
      category: "Final Fantasy 6",
      mainTags:
        " trance terra branford, purple eyes, pink hair, long hair, monster girl, floating hair, colored skin, pink skin, pointy ears, claws, final fantasy vi, final fantasy",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "celes chere",
      category: "Final Fantasy 6",
      mainTags:
        "celes chere, blue eyes, blonde hair, long hair, final fantasy vi, final fantasy",
      enhancers: [
      "[hair ornament", "blue shirt", "yellow pants", "yellow sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "tifa lockhart",
      category: "Final Fantasy 7",
      mainTags:
        "tifa lockhart, brown eyes, brown hair, long hair, final fantasy vii remake, final fantasy",
      enhancers: [
          "[white cropped shirt", "low tied hair", "suspenders", "black skirt", "detached black sleeves", "red fingerless gloves", "single elbow pad]",
          "[tifa lockhart (refined dress)", "purple sleeveless dress", "short dress", "neck ribbon", "gold earrings]",
          "[tifa lockhart (shining spirit)", "multicolored bikini", "bikini skirt", "hair flower", "side locks", "hair bun", "official alternate costume]",
          "[tifa lockhart (cowgirl)", "cowboy hat", "cropped leather vest", "short leather skirt", "black gloves", "official alternate costume]",
          "[tifa lockhart (lifeguard)", "low tied hair", "black hat", "bikini under clothes", "fingerless gloves", "see-through shirt", "skirt", "official alternate costume]",
          "[tifa lockhart (sporty dress)", "china dress", "leopard print", "double bun", "pelvic curtain", "tassel hair ornament", "fishnet thighhighs", "official alternate costume]",
          "[tifa lockhart (majestic glamour)", "striped crop top", "denim shorts", "pantylines", "front-tie top", "official alternate costume]",
          "[tifa lockhart (bahamut suit)", "armor", "clawed gauntlets", "dragon wings", "horned headwear", "low tied hair", "shoulder armor", "official alternate costume]",
          "[tifa lockhart (fairy of the holy flame)", "santa hat", "santa costume", "holly hat ornament", "skirt", "fur-trimmed capelet", "fur-trimmed gloves", "fur-trimmed headwear", "fur-trimmed skirt", "white turtleneck sweater", "official alternate costume]",
          "[tifa lockhart (exotic dress)", "black kimono", "black thighhighs", "hair flower", "wide sleeves", "zettai ryouiki", "official alternate costume]",
          "[tifa lockhart (passion mermaid)", "bikini", "bikini skirt", "see-through clothes", "jewelry", "belly chain", "fingerless gloves", "official alternate costume]",
          "[tifa lockhart (loveless dress)", "white sleeveless dress", "crown", "earrings", "princess rosa costume", "official alternate costume]",
          "[tifa lockhart (bunny bustier)", "animal ear headband", "rabbit ears", "rabbit tail", "detached collar", "elbow gloves", "blue bow", "black frilled miniskirt", "fishnet pantyhose", "nontraditional playboy bunny", "official alternate costume]",
          "[tifa lockhart (honey bee inn)", "bee costume", "black hairband", "fake antennae", "fake wings", "fishnet pantyhose", "frills", "sideless leotard", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "aerith gainsborough",
      category: "Final Fantasy 7",
      mainTags:
        "aerith gainsborough, green eyes, brown hair, long hair, parted bangs, final fantasy vii remake, final fantasy",
      enhancers: [
          "[pink dress", "braided ponytail", "red cropped jacket", "bangles", "hair bow]",
          "[aerith gainsborough (red dress)", "braided ponytail", "red dress", "flamenco dress", "hair flowers", "official alternate costume]",
          "[aerith gainsborough (pink mermaid)", "frilled bikini", "official alternate costume]",
          "[aerith gainsborough (white floral dress)", "white strapless dress", "dress flower", "official alternate costume]",
          "[aerith gainsborough (prism dress)", "ponytail", "blue hair bow", "white dress", "dress flower", "gold trim", "official alternate costume]",
          "[aerith gainsborough (sunny robe)", "straw hat", "pink bikini", "white lace swimsuit cover-up]",
          "[aerith gainsborough (fairy of snowfall)", "white dress", "white hat", "white coat", "winter clothes", "thigh strap", "fur trim", "cable knit", "official alternate costume]",
          "[aerith gainsborough (bahamut robe)", "armor", "single shoulder pad", "pantyhose", "headdress", "long dress", "official alternate costume]",
          "[aerith gainsborough (floral delight)", "single braid", "hair flower", "pink crop top", "floral pink sarong", "short sleeves", "midriff", "official alternate costume]",
          "[aerith gainsborough (citric dress)", "food themed earrings", "half updo", "green ribbon", "strapless dress", "see-through clothes", "official alternate costume]",
          "[aerith gainsborough (loveless dress)", "princess rosa dress", "white dress", "crown", "single braid", "official alternate costume]",
          "[aerith gainsborough (honey bee inn)", "bee costume", "fake antennae", "fake wings", "fishnet pantyhose", "sideless leotard", "fur collar", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "yuffie kisaragi",
      category: "Final Fantasy 7",
      mainTags:
        "yuffie kisaragi, brown eyes, black hair, short hair, final fantasy vii remake, final fantasy",
      enhancers: [
          "[headband", "green shirt", "single shoulder pad", "white shorts]",
          "[yuffie kisaragi (summer orange)", "orange floral bikini top", "white shorts", "orange hairband", "official alternate costume]",
          "[moogle (cosplay)", "brown hooded cloak", "hood up", "official alternate costume]",
          "[yuffie kisaragi (summer moogle)", "orange o-ring bikini top", "white shorts", "orange bikini straps", "thigh strap", "goggles on head", "single elbow pad", "official alternate costume]",
          "[yuffie kisaragi (bahamut mantle)", "armor", "horned hood", "thighhighs", "fake dragon tail", "purple leotard", "black shorts", "fingerless gloves", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "cloud strife",
      category: "Final Fantasy 7",
      mainTags:
        "cloud strife, blue eyes, blonde hair, short hair, spiked hair, final fantasy vii remake, final fantasy",
      enhancers: [
          "[black shirt", "black pants", "single shoulder pad", "gauntlets]",
          "[cloud strife (blue dress)", "blue dress", "hair bow", "fishnet sleeves", "puffy sleeves", "twin braids", "official alternate costume]",
          "[cloud strife (bahamut garb)", "armor", "high collar", "single wing", "gauntlets", "see-through shirt", "official alternate costume]",
          "[cloud strife (ball gown)", "purple dress", "tiara", "ribbon choker", "official alternate costume]",
          "[cloud strife (maritime sailor)", "black shirt", "black pants", "sailor collar", "single elbow pad", "official alternate costume]",
          "[cloud strife (wild surf)", "black swim trunks", "suspenders hanging", "official alternate costume]",
          "[cloud strife (alphreid costume)", "blue cloak", "gloves", "leather armor", "official alternate costume]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "riona heartilly",
      category: "Final Fantasy 8",
      mainTags:
        "riona heartilly, brown eyes, black hair, long hair, final fantasy viii, final fantasy",
      enhancers: [
          "[long blue sweater", "black shorts", "blue skirt", "blue arm warmers]",
          "[short white dress", "halter dress", "crossed straps", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "selphie tilmitt",
      category: "Final Fantasy 8",
      mainTags:
        "selphie tilmitt, green eyes, brown hair, short hair, final fantasy viii, final fantasy",
      enhancers: [
          "[yellow zipper dress", "knee boots", "necklace]",
          "[seed uniform (ff8)", "military uniform", "yellow ascot", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "quistis trepe",
      category: "Final Fantasy 8",
      mainTags:
        "quistis trepe, blue eyes, blonde hair, long hair, final fantasy viii, final fantasy",
      enhancers: [
          "[orange shirt", "orange skirt", "zipper", "detached sleeves", "high collar", "gloves]",
          "[seed uniform (ff8)", "military outfit", "red necktie", "grey skirt", "grey jacket", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "edea kramer",
      category: "Final Fantasy 8",
      mainTags:
        "edea kramer, yellow eyes, black hair, long hair, final fantasy viii, final fantasy",
      enhancers: [
      "[headdress", "feather trim", "dress", "plunging neckline", "black dress", "clawed gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "ultimecia",
      category: "Final Fantasy 8",
      mainTags:
        "ultimecia, yellow eyes, silver hair, long hair, final fantasy viii, final fantasy",
      enhancers: [
      "[red dress", "side slit", "plunging neckline", "feather trim", "black wings", "body markings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "garnet til alexandros xvii",
      category: "Final Fantasy 9",
      mainTags:
        "garnet til alexandros xvii, brown eyes, brown hair, final fantasy ix, final fantasy",
      enhancers: [
          "[long hair", "orange overalls", "white shirt", "leg strap", "low tied hair", "red gloves]",
          "[long hair", "low tied hair", "white strapless dress", "elbow gloves", "hair flower", "headdress", "leaf print", "official alternate costume]",
          "[short hair", "bob cut", "orange overalls", "white shirt", "wide sleeves]",
          "[short hair", "bob cut", "white hooded robe", "white mage (final fantasy)", "orange overalls", "wide sleeves]"        
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "eiko carol",
      category: "Final Fantasy 9",
      mainTags:
        "eiko carol, blue eyes, single horn, blue hair, short hair, final fantasy ix, final fantasy",
      enhancers: [
      "[pink bodysuit", "yellow pants", "red shirt", "puffy sleeves", "hair bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "freija crescent",
      category: "Final Fantasy 9",
      mainTags:
        "freija crescent, green eyes, blonde hair, short hair, mouse girl, mouse tail, final fantasy ix, final fantasy",
      enhancers: [
      "[oversized red hat", "ascot", "red jacket", "orange bloomers", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "kuja",
      category: "Final Fantasy 9",
      mainTags:
        "kuja, purple eyes, silver hair, long hair, final fantasy ix, final fantasy",
      enhancers: [
      "[jacket", "jockstrap", "cropped jacket", "puffy sleeves", "thighhighs", "waist cape", "feather hair ornament]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "beatrix (ff9)",
      category: "Final Fantasy 9",
      mainTags:
        "beatrix (ff9), brown eyes, brown hair, long hair, final fantasy ix, final fantasy",
      enhancers: [
      "[asymmetrical hair", "eyepatch", "one eye covered", "grey sleeveless dress", "brown pantyhose", "oversized belt", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "paine (ff10)",
      category: "Final Fantasy 10",
      mainTags:
        "paine (ff10), red eyes, black hair, short hair, final fantasy x, final fantasy",
      enhancers: [
      "[black choker", "black leather gloves", "black leather shorts", "black leather crop top", "black thighhighs", "garter straps", "red suspenders]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "yuna (ff10)",
      category: "Final Fantasy 10",
      mainTags:
        "yuna (ff10), heterochromia, blue eye, green eye, brown hair, medium hair, final fantasy x, final fantasy",
      enhancers: [
          "[bra peek", "long blue skirt", "hair ornament", "japanese clothes", "nontraditional miko", "obi", "wide sleeves", "detached sleeves]",
          "[white crop top", "plunging neckline", "pink hood", "hood down", "blue showgirl skirt", "black short shorts", "yellow armbands", "wrist band", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "rikku (ff10)",
      category: "Final Fantasy 10",
      mainTags:
        "rikku (ff10), green eyes, blonde hair, medium hair, half updo, final fantasy x, final fantasy",
      enhancers: [
          "[brown shirt", "green shorts", "belt", "gloves", "detached sleeves", "goggles around neck", "thigh strap", "knee boots]",
          "[blue bandana", "yellow bikini top", "brown skirt", "white detached sleeves", "bikini straps", "gradient scarf]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "lulu (ff10)",
      category: "Final Fantasy 10",
      mainTags:
        "lulu (ff10), purple eyes, black hair, braided bun, final fantasy x, final fantasy",
      enhancers: [
          "[fur-trimmed black dress", "off-shoulder dress", "multiple belts", "multiple necklaces", "thighhighs]", 
          "[moogle", "stuffed animal", "fur-trimmed black dress", "off-shoulder dress", "multiple belts", "multiple necklaces", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "lightning farron",
      category: "Final Fantasy 13",
      mainTags:
        "lightning farron, blue eyes, pink hair, medium hair, final fantasy xiii, final fantasy",
      enhancers: [
          "[fingerless gloves", "skirt", "white jacket", "high collar", "red cape", "thigh strap]",
          "[armor", "breastplate", "shoulder armor", "greaves", "arm guards", "leotard", "feather skirt]",
          "[asymmetrical clothes", "armor", "silver breastplate", "silver shoulder armor", "greaves", "gauntlets", "white feather skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "serah farron",
      category: "Final Fantasy 13",
      mainTags:
        "serah farron, blue eyes, pink hair, long hair, side ponytail,final fantasy xiii, final fantasy",
      enhancers: [
          "[red plaid miniskirt", "black thighhighs", "see-through clothes", "white sleeveless shirt", "sleeveless jacket", "white jacket", "high collar", "white armband]",
          "[white dress", "red thighhighs", "zettai ryouiki", "choker", "gloves", "detached sleeves", "belt pouch]",
          "[pink bikinitop", "pink shorts", "yellow bow", "frilled thigh band", "pink bikini strap", "flowers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "oerba dia vanille",
      category: "Final Fantasy 13",
      mainTags:
        "oerba dia vanille, green eyes, red hair, medium hair, twintails,final fantasy xiii, final fantasy",
      enhancers: [
      "[pink crop top, orange skirt, belt pouch, bracelets, fur-trimmed waist cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "oerba yun fang",
      category: "Final Fantasy 13",
      mainTags:
        "oerba yun fang, green eyes, black hair, gradient hair, medium hair, final fantasy xiii, final fantasy",
      enhancers: [
      "[indian clothes", "sari", "blue dress", "crop top", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "y'shtola rhul",
      category: "Final Fantasy 14",
      mainTags:
        "y'shtola rhul, miqo'te, blue eyes, white hair, short hair, final fantasy xiv, final fantasy",
      enhancers: [
          "[blue cross-laced pants", "white coat", "wide sleeves]",
          "[white coat", "high collar", "shoulder armor", "pantyhose", "thigh boots]",
          "[feather-trimmed black dress", "cross-laced footwear", "thigh boots", "wide sleeves", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "venat (ff14)",
      category: "Final Fantasy 14",
      mainTags:
        "venat (ff14), blue eyes, white hair, long hair, final fantasy xiv, final fantasy",
      enhancers: [
      "[white hooded robe", "hood down", "white capelet", "wide sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "ryne waters",
      category: "Final Fantasy 14",
      mainTags:
        "ryne waters, blue eyes, red hair, long hair, final fantasy xiv, final fantasy",
      enhancers: [
      "[white lace-trimmed dress", "clothing cutout", "puffy sleeves", "thigh boots", "thigh belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "gaia (ff14)",
      category: "Final Fantasy 14",
      mainTags:
        "gaia (ff14), blue eyes, black hair, long hair, final fantasy xiv, final fantasy",
      enhancers: [
      "[black dress", "choker", "black ascot", "detached sleeves", "wide sleeves", "fishnet thighhighs", "zettai ryouiki]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "meteion",
      category: "Final Fantasy 14",
      mainTags:
        "meteion, blue eyes, blue hair, short hair, final fantasy xiv, final fantasy",
      enhancers: [
      "[blue head wings", "feathers", "blue dress", "blue capelet", "thighboots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "alisaie leveilleur",
      category: "Final Fantasy 14",
      mainTags:
        "alisaie leveilleur, blue eyes, white hair, short hair, final fantasy xiv, final fantasy",
      enhancers: [
          "[red dress", "cropped jacket", "fur-trimmed jacket", "thigh boots", "utility belt]",
          "[white shorts", "white shirt", "red jacket", "thigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "g'raha tia",
      category: "Final Fantasy 14",
      mainTags:
        "g'raha tia, muscular man, final fantasy xiv, final fantasy",
      enhancers: [
      "[red sleeveless shirt", "collar", "leather vest", "gauntlets", "belt", "thigh boots", "white pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "lunafreya nox fleuret",
      category: "Final Fantasy 15",
      mainTags:
        "lunafreya nox fleuret, blue eyes, blonde hair, long hair, final fantasy xv, final fantasy",
      enhancers: [
      "[white sleeveless dress", "crown braid]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "cindy aurum",
      category: "Final Fantasy 15",
      mainTags:
        "cindy aurum, green eyes, blonde hair, short hair, final fantasy xv, final fantasy",
      enhancers: [
      "[red hat", "goggles around neck", "yellow jacket", "pink bikini top only", "denim shorts", "belt pouch", "thighhighs", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "aranea highwind",
      category: "Final Fantasy 15",
      mainTags:
        "aranea highwind, green eyes, silver hair, short hair, final fantasy xv, final fantasy",
      enhancers: [
      "[armor", "boobplate", "o-ring belt", "black choker", "greaves", "shoulder armor", "gauntlets", "multicolored cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "iris amicitia",
      category: "Final Fantasy 15",
      mainTags:
        "iris amicitia, brown eyes, brown hair, short hair, final fantasy xv, final fantasy",
      enhancers: [
      "[pleated skirt", "plaid skirt", "black sleeveless shirt", "high collar", "choker", "multiple belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "sora (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "sora (kingdom hearts), blue eyes, brown hair, short hair, spiked hair, kingdom hearts, disney",
      enhancers: [
          "[red shorts", "red shirt", "two-tone jacket", "fingerless gloves", "blue belt", "belt chain]",
          "[black puffy pants", "black jacket", "black shirt", "fingerless gloves", "necklace]",
          "[black puffy pants", "black jacket", "red shirt", "fingerless gloves", "necklace", "multiple belts", "yellow straps]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "sora (halloween town) (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "sora (halloween town) (kingdom hearts), blue eyes, brown hair, short hair, spiked hair, kingdom hearts, disney",
      enhancers: [
      "[mask over one eye", "bat wings", "open jacket", "glowing eyes", "halloween]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "kairi (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "kairi (kingdom hearts), blue eyes, red hair, short hair, kingdom hearts, disney",
      enhancers: [
          "[purple shorts", "white camisole", "black tanktop", "choker", "purple belt]",
          "[two-tone dress", "white tank top", "belt]",
          "[blue plaid skirt", "sleeveless white shirt", "knee socks", "blue necktie]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "aqua (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "aqua (kingdom hearts), blue eyes, blue hair, short hair, kingdom hearts, disney",
      enhancers: [
      "[black corset", "black shorts", "blue cape", "waist cape", "detached sleeves", "wide sleeves", "see-through cleavage", "pink straps]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "xion (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "xion (kingdom hearts), blue eyes, black hair, short hair, kingdom hearts, disney",
      enhancers: [
          "black coat (kingdom hearts)",
          "[grey pleated skirt", "sleeveless black shirt", "black belt", "official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "riku (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "riku (kingdom hearts), green eyes, silver hair, medium hair, kingdom hearts, disney",
      enhancers: [
          "[blue pants", "black zipper vest", "white and yellow jacket", "high collar", "open jacket]",
          "[blue pants", "puffy pants", "two-tone shirt", "yellow shirt", "black shirt", "sleeveless shirt", "chest strap]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "axel (kingdom hearts)",
      category: "Kingdom Hearts",
      mainTags:
        "axel (kingdom hearts), green eyes, red hair, short hair, spiked hair, kingdom hearts, disney",
      enhancers: ["black coat (kingdom hearts)"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games",
    },
    {
      name: "lady (devil may cry)",
      category: "Devil May Cry",
      mainTags: "lady (devil may cry), brown eyes, black hair, short hair, devil may cry (series)",
      enhancers: [
      "[white shirt", "bike shorts", "suspenders", "thigh holster", "utility belt", "knee boots", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nico (devil may cry)",
      category: "Devil May Cry",
      mainTags: "nico (devil may cry), brown eyes, brown hair, medium hair, devil may cry (series)",
      enhancers: [
      "[glasses", "cropped yellow vest", "white shirt", "denim shorts", "tool belt", "arm tattoos]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "dante (devil may cry)",
      category: "Devil May Cry",
      mainTags: "dante (devil may cry), blue eyes, white hair, short hair, devil may cry (series)",
      enhancers: [
          "[brown pants", "red coat", "chest strap]",
          "[black pants", "red coat", "black shirt", "fingerless gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vergil (devil may cry)",
      category: "Devil May Cry",
      mainTags: "vergil (devil may cry), blue eyes, white hair, short hair, devil may cry (series)",
      enhancers: [
      "[black pants", "black coat", "blue shirt", "high collar", "fingerless gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "trish (devil may cry)",
      category: "Devil May Cry",
      mainTags: "trish (devil may cry), green eyes, blonde hair, long hair, devil may cry (series)",
      enhancers: [
      "[black pants", "leather crop top", "cross-laced top", "choker", "belt", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nero (devil may cry)",
      category: "Devil May Cry",
      mainTags: "nero (devil may cry), blue eyes, white hair, short hair, devil may cry (series)",
      enhancers: [
      "[black pants", "white shirt", "red shirt", "shirt under shirt", "black coat", "mechanical arm", "single fingerless glove]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "v (devil may cry)",
      category: "Devil May Cry",
      mainTags: "v (devil may cry), green eyes, black hair, short hair, devil may cry (series)",
      enhancers: [
      "[black pants", "sleeveless black jacket", "leather corset", "arm tattoos", "chest tattoo]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rebecca chambers",
      category: "Resident Evil (Series)",
      mainTags: "rebecca chambers, brown eyes, brown hair, short hair, resident evil",
      enhancers: [
          "[red headband", "white bulletproof vest", "green shirt", "green pants", "s.t.a.r.s. uniform]",
          "[red choker", "white bulletproof vest", "green shirt", "green pants", "s.t.a.r.s. uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "claire redfield",
      category: "Resident Evil (Series)",
      mainTags: "claire redfield, brown eyes, brown hair, long hair, resident evil 2, resident evil",
      enhancers: [
      "[jeans", "red jacket", "white shirt", "belt", "thigh holster]",
          "[denim shorts", "red vest", "black shirt", "belt pouch", "cowboy boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jill valentine",
      category: "Resident Evil (Series)",
      mainTags: "jill valentine, blue eyes, brown hair, short hair, resident evil 3: nemesis, resident evil",
      enhancers: [
          "[black pants, blue camisole, white shirt, thigh holster, belt, holster]",
          "[black skirt, blue tube top, sweater around waist, knee boots]",
          "[blue pants, blue shirt, blue hat, s.t.a.r.s. uniform, shoulder armor, straps]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nemesis (resident evil)",
      category: "Resident Evil (Series)",
      mainTags: "nemesis (resident evil), black eyes, bald, , zombie, one-eyed, no pupils, zombie, monster girl, resident evil 3: nemesis, resident evil",
      enhancers: ["bodysuit"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ada wong",
      category: "Resident Evil (Series)",
      mainTags: "ada wong, brown eyes, black hair, short hair, resident evil 4 (remake), resident evil",
      enhancers: [
          "[china dress", "red dress", "halterneck", "choker", "thigh holster]",
          "[black pants", "red sweater dress", "ribbed sweater", "holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "leon s. kennedy",
      category: "Resident Evil (Series)",
      mainTags: "leon s. kennedy, blue eyes, blonde hair, short hair, resident evil 4, resident evil",
      enhancers: [
          "[purple tank top", "green pants", "black hat", "fingerless gloves]",
          "[black hat", "grey police uniform", "sheriff badge", "belt]",
          "[bulletproof vest", "police uniform", "elbow pad", "fingerless gloves]",
          "[brown jacket", "fur-trimmed jacket", "black pants", "thigh holster", "blue shirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ashley graham",
      category: "Resident Evil (Series)",
      mainTags: "ashley graham, blue eyes, blonde hair, long hair, resident evil 4, resident evil",
      enhancers: [
          "[orange cableknit shirt", "orange jacket", "green skirt", "pantyhose", "knee boots", "red kerchief]",
          "[orange cableknit shirt", "green skirt", "pantyhose", "knee boots", "red kerchief]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jack krauser",
      category: "Resident Evil (Series)",
      mainTags: "jack krauser, blue eyes, blonde hair, short hair, resident evil 4, resident evil",
      enhancers: [
      "[camoflague pants", "red beret", "brown military shirt", "holster]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "chris redfield",
      category: "Resident Evil (Series)",
      mainTags: "chris redfield, brown eyes, brown hair, short hair, resident evil 5, resident evil",
      enhancers: [
      "[green shirt", "jeans", "fingerless gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sheva alomar",
      category: "Resident Evil (Series)",
      mainTags: "sheva alomar, brown eyes, brown hair, long hair, dark skin, dark-skinned female, resident evil 5, resident evil",
      enhancers: [
      "[purple shirt", "ponytail", "brown pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sherry birkin",
      category: "Resident Evil (Series)",
      mainTags: "sherry birkin, blue eyes, blonde hair, short hair, resident evil 6, resident evil",
      enhancers: [
          "[white shirt", "blue scarf", "capri pants", "belt", "holster", "shoulder holster]",
          "[white coat", "fur-trimmed coat", "white shirt", "blue scarf", "black leggings", "belt", "holster", "shoulder holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "alcina dimitrescu",
      category: "Resident Evil (Series)",
      mainTags: "alcina dimitrescu, yellow eyes, black hair, short hair, resident evil village, resident evil",
      enhancers: [
      "[black hat", "white dress", "claws", "black rose", "pearl necklace]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "albert wesker",
      category: "Resident Evil (Series)",
      mainTags: "albert wesker, blue eyes, blonde hair, short hair, resident evil",
      enhancers: [
      "[sunglasses", "hair slicked back", "black pants", "black shirt", "shoulder holster]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rosalina",
      category: "Super Mario",
      mainTags: "rosalina, blue eyes, blonde hair, long hair, mario (series)",
      enhancers: [
      "[blue gown", "wide sleeves", "crown", "star (symbol)]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bowsette",
      category: "Super Mario",
      mainTags: "bowsette, orange eyes, blonde hair, long hair, mario (series)",
      enhancers: [
      "[strapless black dress", "spiked choker", "spiked wrist cuffs", "spiked turtle shell", "spiked tail", "super crown]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess king boo",
      category: "Super Mario",
      mainTags: "princess king boo, pink eyes, white hair, long hair, mario (series)",
      enhancers: [
      "[white frilled dress", "puffy short sleeves", "white frilled gloves", "crown", "brooch]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess peach",
      category: "Super Mario",
      mainTags: "princess peach, blue eyes, blonde hair, long hair, mario (series)",
      enhancers: [
      "[pink dress", "frilled dress", "white elbow gloves", "crown]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess daisy",
      category: "Super Mario",
      mainTags: "princess daisy, blue eyes, brown hair, long hair, mario (series)",
      enhancers: [
      "[yellow dress", "puffy short sleeves", "orange sash", "white gloves", "crown]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "warupeach",
      category: "Super Mario",
      mainTags: "warupeach, purple eyes, purple hair, long hair, mario (series)",
      enhancers: [
      "[gradient strapless leotard", "highleg leotard", "thigh boots", "elbow gloves", "two-tone cape", "high collar", "spiked belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mario",
      category: "Super Mario",
      mainTags: "mario, brown eyes, brown hair, short hair, mario (series)",
      enhancers: [
      "[overalls", "red hat", "red shirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "luigi",
      category: "Super Mario",
      mainTags: "luigi, blue eyes, brown hair, short hair, mario (series)",
      enhancers: [
      "[overalls", "green hat", "green shirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yoshi (cosplay)",
      category: "Super Mario",
      mainTags: "yoshi (cosplay), black eyes, green hair, short hair, mario (series)",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kitana",
      category: "Mortal Kombat",
      mainTags: "kitana, brown eyes, black hair, long hair, mortal kombat (series)",
      enhancers: [
      "[mouth mask", "pelvic curtain", "cross-laced clothes", "blue halter top", "blue thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mileena (mortal kombat)",
      category: "Mortal Kombat",
      mainTags: "mileena (mortal kombat), yellow eyes, black hair, long hair, mortal kombat 1 (2023), mortal kombat (series)",
      enhancers: [
      "[pink mouth mask", "cross-laced clothes", "pink thighhighs", "pelvic curtain]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jade (mortal kombat)",
      category: "Mortal Kombat",
      mainTags: "jade (mortal kombat), brown eyes, black hair, long hair, mortal kombat (series)",
      enhancers: [
      "[green mouth mask", "green leotard", "cross-laced clothes", "knee boots", "green elbow gloves", "plunging neckline]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "scorpion (mortal kombat)",
      category: "Mortal Kombat",
      mainTags: "scorpion (mortal kombat), brown eyes, black hair, short hair, mortal kombat (series)",
      enhancers: [
      "[yellow tunic", "mouth mask]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sub-zero",
      category: "Mortal Kombat",
      mainTags: "sub-zero, brown eyes, black hair, short hair, mortal kombat (series)",
      enhancers: [
      "[blue tunic", "mouth mask]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sindel",
      category: "Mortal Kombat",
      mainTags: "sindel, white eyes, gray hair, long hair, two-tone hair, , mortal kombat (series)",
      enhancers: [
      "[two-tone highleg leotard", "sleeveless leotard", "high collar", "plunging neckline", "thigh boots", "garter straps", "purple gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "felicia (darkstalkers)",
      category: "Darkstalkers",
      mainTags: "felicia (darkstalkers), blue eyes, blue hair, huge ahoge, white fur, long hair, darkstalkers",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "morrigan aensland",
      category: "Darkstalkers",
      mainTags: "morrigan aensland, green eyes, green hair, long hair, darkstalkers",
      enhancers: [
      "[black leotard", "pink pantyhose", "bat print", "bat wings", "head wings", "orange elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hsien-ko",
      category: "Darkstalkers",
      mainTags: "hsien-ko, colored skin, purple skin, yellow eyes, purple hair, short hair, darkstalkers",
      enhancers: [
      "[jiangshi", "ofuda", "qingdai guanmao", "chinese clothes", "wide sleeves", "sleeves past wrists]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "q-bee",
      category: "Darkstalkers",
      mainTags: "q-bee, black eyes, solid eyes, purple hair, short hair, darkstalkers",
      enhancers: [
      "[anthropod girl", "bee girl", "wings", "purple pantyhose", "leotard]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lilith (darkstalkers)",
      category: "Darkstalkers",
      mainTags: "lilith (darkstalkers), red eyes, purple hair, short hair, darkstalkers",
      enhancers: [
      "[red highleg leotard", "bat wings", "head wings", "blue pantyhose", "bat print", "diamond cutout]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "b.b. hood",
      category: "Darkstalkers",
      mainTags: "b.b. hood, blue eyes, blonde hair, short hair, darkstalkers",
      enhancers: [
      "[red hooded capelet", "red shirt", "red skirt", "waist apron", "red bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cammy white",
      category: "Street Fighter",
      mainTags: "cammy white, blue eyes, blonde hair, long hair, street fighter",
      enhancers: [
          "[green highleg leotard", "red beret", "red fingerless gloves", "pantyhose", "camouflage print]",
          "[black capri pants", "black crop top", "blue jacket", "black fingerless gloves", "red wrist cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "han juri",
      category: "Street Fighter",
      mainTags: "han juri, purple eyes, black hair, long hair, street fighter",
      enhancers: [
      "[white harem pants", "multiple belts", "pink fingerless gloves", "black halter top", "elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "marisa (street fighter)",
      category: "Street Fighter",
      mainTags: "marisa (street fighter), brown eyes, red hair, short hair, muscular female, street fighter",
      enhancers: [
      "[chain necklace", "sports bra", "black skirt", "shorts under skirt", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "chun-li",
      category: "Street Fighter",
      mainTags: "chun-li, brown eyes, brown hair, double bun, street fighter",
      enhancers: [
          "[blue dress, pelvic curtain, puffy short sleeves, spiked wrist cuffs, pantyhose]",
          "[blue bodysuit, blue cropped vest, single wrist cuff]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rainbow mika",
      category: "Street Fighter",
      mainTags: "rainbow mika, blue eyes, blonde hair, long hair, twintails, street fighter",
      enhancers: [
      "[wrestling outfit", "mask", "blue frilled leotard", "clothing cutout", "single bare leg", "white knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elena (street fighter)",
      category: "Street Fighter",
      mainTags: "elena (street fighter), very dark skin, dark-skinned female, brown eyes, white hair, short hair, street fighter",
      enhancers: [
      "[white bikini", "criss-cross halter", "multiple bracelets", "neck ring]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kasugano sakura",
      category: "Street Fighter",
      mainTags: "kasugano sakura, brown eyes, brown hair, short hair, street fighter",
      enhancers: [
      "[headband", "sailor collar", "school uniform", "white shirt", "blue pleated skirt", "yellow neckerchief", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kanzuki karin",
      category: "Street Fighter",
      mainTags: "kanzuki karin, brown eyes, blonde hair, long hair, drill hair,street fighter",
      enhancers: [
      "[blue hair bow", "red dress", "red jacket", "red skirt", "white ascot", "fingerless gloves", "black pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "makoto (street fighter)",
      category: "Street Fighter",
      mainTags: "makoto (street fighter), brown eyes, black hair, short hair, street fighter",
      enhancers: [
      "[karate gi", "black belt", "red chest sarashi", "yellow ribbon choker]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ibuki (street fighter)",
      category: "Street Fighter",
      mainTags: "ibuki (street fighter), brown eyes, black hair, long hair, high ponytail, street fighter",
      enhancers: [
      "[ninja", "ninja mask", "white dougi", "hip vent", "arm guards", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "crimson viper",
      category: "Street Fighter",
      mainTags: "crimson viper, green eyes, red hair, long hair, braid, street fighter",
      enhancers: [
      "[white crop top", "pant suit", "black pants", "black necktie", "orange-tinted eyewear", "black jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ken masters",
      category: "Street Fighter",
      mainTags: "ken masters, brown eyes, blonde hair, long hair, street fighter",
      enhancers: [
      "[red tunic", "red pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ryu (street fighter)",
      category: "Street Fighter",
      mainTags: "ryu (street fighter), brown eyes, black hair, short hair, street fighter",
      enhancers: [
      "[white tunic", "white pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "akuma (street fighter)",
      category: "Street Fighter",
      mainTags: "akuma (street fighter), red eyes, red hair, short hair, dark skin, dark-skinned male, muscular male, street fighter",
      enhancers: [
      "[chest sarashi", "white pants", "rope belt", "glowing eyes]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "m. bison",
      category: "Street Fighter",
      mainTags: "m. bison, brown eyes, black hair, short hair, muscular male, street fighter",
      enhancers: [
      "[military hat", "shoulder armor", "lightning bolt symbol", "cape", "bracers]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "guile",
      category: "Street Fighter",
      mainTags: "guile, blue eyes, blonde hair, short hair, muscular male, tall hair, american flag tattoo, street fighter",
      enhancers: [
      "[camouflage pants", "green tank top]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sylvanas windrunner",
      category: "Warcraft / Starcraft",
      mainTags: "sylvanas windrunner, red eyes, blonde hair, long hair, world of warcraft, warcraft",
      enhancers: [
      "[bikini armor", "gauntlets", "greaves", "boobplate", "red hooded cloak", "hood down]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jaina proudmoore",
      category: "Warcraft / Starcraft",
      mainTags: "jaina proudmoore, blue eyes, blonde hair, long hair, world of warcraft, warcraft",
      enhancers: [
          "[purple hooded cape", "hood up", "white pants", "white crop top", "purple skirt]",
          "[armor", "breastplate", "cloak", "shoulder armor", "white dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tyrande whisperwind",
      category: "Warcraft / Starcraft",
      mainTags: "tyrande whisperwind, white eyes, green hair, long hair, night elf (warcraft), colored skin, purple skin, crescent facial mark, world of warcraft, warcraft",
      enhancers: [
      "[silver armored dress", "shoulder armor", "pelvic curtain", "vambraces", "white gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sarah kerrigan",
      category: "Warcraft / Starcraft",
      mainTags: "sarah kerrigan, dark skin, dark-skinned female, green eyes, red hair, long hair, tentacle hair, zerg (starcraft), starcraft",
      enhancers: [
      "[purple bodysuit", "armored bodysuit", "wings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "alexstrasza",
      category: "Warcraft / Starcraft",
      mainTags: "alexstrasza, red eyes, red hair, long hair, world of warcraft, warcraft",
      enhancers: [
      "[dragon girl", "horn ring", "horn ornament", "bikini armor", "vambraces", "wings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sally whitemane",
      category: "Warcraft / Starcraft",
      mainTags: "sally whitemane, blue eyes, white hair, long hair, warcraft, world of warcraft",
      enhancers: [
      "[black eyeshadow", "two-tone highleg leotard", "red hat", "red gloves", "gold trim", "red cape", "red thighhighs", "pelvic curtain]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess zelda",
      category: "Zelda",
      mainTags: "princess zelda, blue eyes, blonde hair, long hair, the legend of zelda",
      enhancers: [
      "[the legend of zelda: breath of the wild, two-tone shirt, black pants, belt]",
      "[the legend of zelda: tears of the kingdom, two-tone shirt, black pants, belt, brown cloak]",
      "[the legend of zelda: twilight princess, white dress, pink shirt, detached sleeves, shoulder armor, hair decoration]",
      "[the legend of zelda: ocarina of time, pink dress, purple vest, shoulder armor, elbow gloves]",
      "[the legend of zelda: skyward sword, pink dress, belt, white capelet, green wrist cuffs]",
      "[the legend of zelda: a link to the past, white dress, pink tunic, white cape, necklace, bracers]",
      "[the legend of zelda: echoes of wisdom, white dress, pink dress, grey scarf]",
      "[the legend of zelda: spirit tracks, toon zelda,sleeveless pink skirt, pink shirt, pink capelet, white elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "malon",
      category: "Zelda",
      mainTags: "malon, blue eyes, red hair, long hair, the legend of zelda",
      enhancers: [
      "[white shirt", "yellow neckerchief", "pink skirt", "brown waist apron]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nabooru",
      category: "Zelda",
      mainTags: "nabooru, dark skin, dark-skinned female, green eyes, orange hair, long hair, the legend of zelda",
      enhancers: [
      "[pink harem pants", "tube top", "elbow gloves", "neck ring]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "impa",
      category: "Zelda",
      mainTags: "impa, gray eyes, white hair, short hair, facial mark, the legend of zelda",
      enhancers: [
      "[black bodysuit", "white jacket", "red trim", "white shorts", "fingerless gloves", "hat on back]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "purah",
      category: "Zelda",
      mainTags: "purah, red eyes, white hair, long hair, the legend of zelda",
      enhancers: [
      "[red bodysuit", "bodysuit under clothes", "sleeveless shirt", "pantyhose", "red trim", "brown coat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mipha",
      category: "Zelda",
      mainTags: "mipha, colored skin, red skin, yellow eyes, monster girl, zora, the legend of zelda",
      enhancers: [
      "[blue sash", "neck ring]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sheik",
      category: "Zelda",
      mainTags: "sheik, blue eyes, blonde hair, short hair, turban, scarf, covered mouth, the legend of zelda",
      enhancers: [
      "[two-tone bodysuit", "breast curtain", "bandages]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "urbosa",
      category: "Zelda",
      mainTags: "urbosa, dark skin, dark-skinned female, green eyes, red hair, long hair, muscular female, the legend of zelda",
      enhancers: [
      "[blue skirt", "belt", "multicolored tube top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "paya (zelda)",
      category: "Zelda",
      mainTags: "paya (zelda), brown eyes, white hair, long hair, the legend of zelda",
      enhancers: [
      "[puffy sleeves", "shirt", "brown hat", "large hat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "midna",
      category: "Zelda",
      mainTags: "midna, two-tone skin, yellow eyes, orange hair, long hair, the legend of zelda",
      enhancers: [
      "[one eye covered", "helmet", "neon trim]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "midna (true)",
      category: "Zelda",
      mainTags: "midna (true), two-tone skin,yellow eyes, orange hair, long hair, the legend of zelda",
      enhancers: [
      "[front ponytail", "hooded cape", "bridal gauntlets", "skirt", "neon trim]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fi (zelda)",
      category: "Zelda",
      mainTags: "fi (zelda), colored skin, blue skin, blue eyes, blue hair, short hair, the legend of zelda",
      enhancers: [
      "[two-tone cape", "forehead jewel", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "saria (zelda)",
      category: "Zelda",
      mainTags: "saria (zelda), green eyes, green hair, short hair, the legend of zelda",
      enhancers: [
      "[green shorts", "ribbed green sweater", "turtleneck", "black belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess ruto",
      category: "Zelda",
      mainTags: "princess ruto, colored skin, fish girl, blue skin, purple eyes, zora, the legend of zelda",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "link",
      category: "Zelda",
      mainTags: "link, blue eyes, blonde hair, short hair, the legend of zelda",
      enhancers: [
          "[the legend of zelda: breath of the wild]",
          "[the legend of zelda: tears of the kingdom]",
          "[the legend of zelda: twilight princess]",
          "[the legend of zelda: ocarina of time]",
          "[the legend of zelda: skyward sword]",
          "[the legend of zelda: a link to the past]",
          "[the legend of zelda: echoes of wisdom]",
          "[the legend of zelda: spirit tracks]"
        ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "riju",
      category: "Zelda",
      mainTags: "riju, green eyes, red hair, long hair, the legend of zelda",
      enhancers: [
      "[black tube top", "black skirt", "neck ring]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ciri",
      category: "Witcher",
      mainTags: "ciri, green eyes, white hair, long hair, the witcher 3, the witcher (series)",
      enhancers: [
      "[necklace", "white shirt", "brown corset", "brown pants", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yennefer of vengerberg",
      category: "Witcher",
      mainTags: "yennefer of vengerberg, purple eyes, black hair, long hair, the witcher (series)",
      enhancers: [
      "[black pants", "fur-trimmed coat", "fur-trimmed gloves", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "triss merigold",
      category: "Witcher",
      mainTags: "triss merigold, green eyes, red hair, long hair, the witcher 3, the witcher (series)",
      enhancers: [
      "[brown vest", "black pants", "knee boots", "green capelet", "red sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "isabella valentine",
      category: "Soulcalibur",
      mainTags: "isabella valentine, green eyes, white hair, short hair, soulcalibur",
      enhancers: [
          "[soulcalibur vi", "shoulder armor", "purple straps", "impossible clothes", "detached sleeves", "elbow gloves", "purple bikini armor]",
          "[soulcalibur v", "single gauntlet", "claw gauntlet", "single shoulder pad", "asymmetric clothes", "black leotard", "cross laced clothes", "garter straps", "purple highleg leotard", "purple thighhighs", "purple gloves", "high collar", "wrist cuff", "purple sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cassandra alexandra",
      category: "Soulcalibur",
      mainTags: "cassandra alexandra, blue eyes, blonde hair, short hair, soulcalibur",
      enhancers: [
          "[soulcalibur vi", "orange dress", "blue scarf", "arm bands", "detached collar", "short hair", "pantyhose]",
          "[soulcalibur iv", "blue dress", "brown hair bow", "thigh boots", "pink necktie", "pink ribbons", "white elbow gloves", "shoulder armor]",
          "[soulcalibur ii", "white headband", "sleeveless dress", "two-tone dress", "pink necktie", "pantyhose", "belt", "white elbow gloves", "sailor collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sophitia alexandra",
      category: "Soulcalibur",
      mainTags: "sophitia alexandra, blue eyes, blonde hair, long hair, soulcalibur",
      enhancers: [
          "[soulcalibur vi", "armored dress", "thigh boots", "silver laurel crown", "multicolored dress]",
          "[soulcalibur iv", "greco-roman clothes", "white dress", "see-through clothes", "blue belt", "vambraces]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "taki (soulcalibur)",
      category: "Soulcalibur",
      mainTags: "taki (soulcalibur), brown eyes, brown hair, long hair, soulcalibur",
      enhancers: [
      "[ninja", "sleeveless red bodysuit", "skin tight", "shoulder armor", "fingerless gloves", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "chai xianghua",
      category: "Soulcalibur",
      mainTags: "chai xianghua, brown eyes, black hair, short hair, soulcalibur",
      enhancers: [
      "[china dress", "blue thighhighs", "detached sleeves", "headband]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "amy sorel",
      category: "Soulcalibur",
      mainTags: "amy sorel, red eyes, red hair, long hair, twin drills, soulcalibur",
      enhancers: [
      "[gothic lolita", "lolita hairband", "cross-laced clothes", "black dress", "black fishnet gloves", "purple flower", "red shawl", "fishnet thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "talim",
      category: "Soulcalibur",
      mainTags: "talim, dark skin, dark-skinned female, brown eyes, black hair, short hair, soulcalibur",
      enhancers: [
      "[bandeau", "capri pants", "see-through clothes", "sleeveless green vest", "hat", "pink sash", "white panties", "white panty strap", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pyrrha alexandra",
      category: "Soulcalibur",
      mainTags: "pyrrha alexandra, green eyes, blonde hair, medium hair, soulcalibur",
      enhancers: [
      "[white dress", "white capelet", "brown corset", "hair ornament", "brown thighhighs", "folded top thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "seong mi-na",
      category: "Soulcalibur",
      mainTags: "seong mi-na, brown eyes, brown hair, long hair, soulcalibur",
      enhancers: [
      "[fingerless gloves", "crop top", "breast curtain", "pelvic curtain", "wide short sleeves", "vambraces]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tira (soulcalibur)",
      category: "Soulcalibur",
      mainTags: "tira (soulcalibur), green eyes, two-tone hair, short hair, soulcalibur",
      enhancers: [
      "[purple gloves", "fingerless elbow gloves", "short hair", "green shirt", "black pants", "black jacket", "torn clothes", "green feathers", "feather trim", "choker]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "viola (soulcalibur)",
      category: "Soulcalibur",
      mainTags: "viola (soulcalibur), purple eyes, white hair, medium hair, twin drills, soulcalibur",
      enhancers: [
      "[black dress", "cross-laced cutout", "detached sleeves", "brown thighhighs", "garter straps", "black hooded cape", "hood up", "claw (weapon)]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ahri (league of legends)",
      category: "League of Legends",
      mainTags: "ahri (league of legends), yellow eyes, black hair, long hair, league of legends",
      enhancers: [
        "k/da ahri", "k/da all out ahri", "spirit blossom ahri", "star guardian ahri", "[academy ahri", "red hair]", "arcade ahri", "dynasty ahri", "popstar ahri"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jinx (league of legends)",
      category: "League of Legends",
      mainTags: "jinx (league of legends), blue eyes, blue hair, long hair, league of legends",
      enhancers: ["star guardian jinx", "ambitious elf jinx"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "akali",
      category: "League of Legends",
      mainTags: "akali, green eyes, black hair, long hair, league of legends",
      enhancers: [
        "k/da akali", "k/da all out akali", "akali (legacy)", "nurse akali", "star guardian akali", "blood moon akali"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lux (league of legends)",
      category: "League of Legends",
      mainTags: "lux (league of legends), blue eyes, blonde hair, long hair, league of legends",
      enhancers: [
        "star guardian lux", "light elementalist lux", "dark elementalist lux", "[--blonde hair", "battle academia lux", "red hair", "pony tail]",
      "[--blonde hair", "lunar empress lux", "blue hair]", "dark cosmic lux", "space groove lux"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vi (league of legends)",
      category: "League of Legends",
      mainTags: "vi (league of legends), blue eyes, pink hair, short hair, gauntlets, league of legends",
      enhancers: ["officer vi"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sona (league of legends)",
      category: "League of Legends",
      mainTags: "sona (league of legends), blue eyes, blue hair, long hair, league of legends",
      enhancers: [
        "arcade sona", "[dj sona", "multicolor bodysuit", "visor", "helmet", "multicolor hair", "purple hair]", "sweetheart sona", "[--blue hair", "star guardian sona", "glasses", "green hair]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gwen (league of legends)",
      category: "League of Legends",
      mainTags: "gwen (league of legends), blue eyes, blue hair, long hair, twin drills, league of legends",
      enhancers: ["soul fighter gwen", "cafe cuties gwen"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "caitlyn (league of legends)",
      category: "League of Legends",
      mainTags: "caitlyn (league of legends), blue eyes, brown hair, long hair, league of legends",
      enhancers: [
          "officer caitlyn",
          "[pool party caitlyn", "innertube", "bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "katarina (league of legends)",
      category: "League of Legends",
      mainTags: "katarina (league of legends), green eyes, red hair, long hair, league of legends",
      enhancers: [
      "[kitty cat katarina", "fake animal ears", "cat tail]", "battle academia katarina", "[--red hair", "slay belle katarina", "blonde hair", "santa dress", "no hood]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "annie (league of legends)",
      category: "League of Legends",
      mainTags: "annie (league of legends), green eyes, red hair, long hair, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "zoe (league of legends)",
      category: "League of Legends",
      mainTags: "zoe (league of legends), blue eyes, orange hair, long hair, league of legends",
      enhancers: [
          "star guardian zoe",
          "[pool party zoe", "blue hair]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "leona (league of legends)",
      category: "League of Legends",
      mainTags: "leona (league of legends), orange eyes, brown hair, long hair, league of legends",
      enhancers: ["pool party leona", "solar eclipse leona"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "diana (league of legends)",
      category: "League of Legends",
      mainTags: "diana (league of legends), blue eyes, white hair, long hair, league of legends",
      enhancers: ["blood moon diana"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "riven (league of legends)",
      category: "League of Legends",
      mainTags: "riven (league of legends), green eyes, white hair, short hair, league of legends",
      enhancers: [
        "battle bunny riven", "spirit blossom riven", "[--white hair", "arcade riven", "green hair", "blue bandanna", "helmet visor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "miss fortune (league of legends)",
      category: "League of Legends",
      mainTags: "miss fortune (league of legends), blue eyes, red hair, long hair, league of legends",
      enhancers: [
      "[pirate", "pirate hat,", "hoop earrings]", "star guardian miss fortune", "arcade miss fortune", "battle bunny miss fortune", "crime city miss fortune", "[pool party miss fortune", "sun hat]",
      "[gun goddess miss fortune", "forehead protector]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "poppy (league of legends)",
      category: "League of Legends",
      mainTags: "poppy (league of legends), blue eyes, blonde hair, long hair, yordle, twintails, big hair, league of legends",
      enhancers: [
      "[--yellow hair", "star guardian poppy", "armored dress", "blue hair]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "janna (league of legends)",
      category: "League of Legends",
      mainTags: "janna (league of legends), blue eyes, blonde hair, long hair, league of legends",
      enhancers: ["star guardian janna"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lulu (league of legends)",
      category: "League of Legends",
      mainTags: "lulu (league of legends), purple eyes, purple hair, long hair, colored skin, purple skin, league of legends",
      enhancers: [
        "wicked lulu", "[--colored skin, --purple skin, star guardian lulu]", "winter wonder lulu", "[bitter sweet lulu", "candy", "striped thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "soraka (league of legends)",
      category: "League of Legends",
      mainTags: "soraka (league of legends), purple eyes, white hair, long hair, league of legends",
      enhancers: [
        "star guardian soraka", "cafe cuties soraka", "spirit blossom soraka", "[--soraka (league of legends)", "dryad soraka", "green hair", "shoulder tattoo]", "immortal journey soraka", "order of the banana soraka", "[dawnbringer soraka", "gradient hair", "blue skin]", "winter wonder soraka"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "evelynn (league of legends)",
      category: "League of Legends",
      mainTags: "evelynn (league of legends), yellow eyes, purple hair, long hair, purple skin, league of legends",
      enhancers: [
      "[--purple skin, --yellow eyes, k/da all out evelynn]", "k/da evelynn", "the baddest evelynn", "blood moon evelynn", "soul fighter evelynn", "spirit blossom evelynn", "coven evelynn", "[--yellow eyes, sugar rush evelynn, multicolor hair, black hair, pink hair, twin drills, gold eyes]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "irelia",
      category: "League of Legends",
      mainTags: "irelia, blue eyes, black hair, long hair, league of legends",
      enhancers: [
      "[crown", "silver hair ornament]", "divine sword irelia", "[--black hair", "frost blade irelia", "blue hair", "short hair]",
      "[--black hair", "mythmaker irelia", "hair bun", "white hair]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ashe (league of legends)",
      category: "League of Legends",
      mainTags: "ashe (league of legends), blue eyes, white hair, long hair, league of legends",
      enhancers: [
        "hood up", "heartseeker ashe", "[project: ashe", "power armor", "holographic monitor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fiora (league of legends)",
      category: "League of Legends",
      mainTags: "fiora (league of legends), blue eyes, brown hair, long hair, league of legends",
      enhancers: [
        "headmistress fiora", "[pool party fiora", "striped bikini", "bikini top only", "shorts", "scarf]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vayne (league of legends)",
      category: "League of Legends",
      mainTags: "vayne (league of legends), purple eyes, black hair, short hair, league of legends",
      enhancers: [
        "spirit blossom vayne", "firecracker vayne", "heartseeker vayne"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nidalee",
      category: "League of Legends",
      mainTags: "nidalee, green eyes, brown hair, long hair, league of legends",
      enhancers: ["french maid nidalee"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "samira",
      category: "League of Legends",
      mainTags: "samira, brown eyes, black hair, long hair, league of legends",
      enhancers: ["soul fighter samira"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "leblanc (league of legends)",
      category: "League of Legends",
      mainTags: "leblanc (league of legends), purple eyes, black hair, long hair, league of legends",
      enhancers: [
        "ravenborn leblanc", "[mistletoe leblanc", "cape", "short dress", "belt", "fur trim]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "syndra",
      category: "League of Legends",
      mainTags: "syndra, purple eyes, white hair, long hair, league of legends",
      enhancers: [
        "star guardian syndra", "spirit blossom syndra", "[--white hair", "withered rose syndra", "purple hair]",
      "[--white hair", "snow day syndra", "fur coat", "blonde hair", "earmuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "xayah",
      category: "League of Legends",
      mainTags: "xayah, blue eyes, purple hair, long hair, league of legends",
      enhancers: ["star guardian xayah"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "seraphine (league of legends)",
      category: "League of Legends",
      mainTags: "seraphine (league of legends), blue eyes, pink hair, long hair, league of legends",
      enhancers: [
      "[purple dress", "star tattoo]",
      "[--pink hair", "star guardian seraphine", "blonde hair", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sivir",
      category: "League of Legends",
      mainTags: "sivir, blue eyes, brown hair, long hair, league of legends",
      enhancers: ["pizza delivery sivir"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "zeri (league of legends)",
      category: "League of Legends",
      mainTags: "zeri (league of legends), green eyes, green hair, long hair, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "karma (league of legends)",
      category: "League of Legends",
      mainTags: "karma (league of legends), purple eyes, black hair, long hair, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kindred (league of legends)",
      category: "League of Legends",
      mainTags: "kindred (league of legends), blue eyes, white hair, long hair, lamb (league of legends), body fur, league of legends",
      enhancers: [
          "spirit blossom kindred",
          "porcelain kindred"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "neeko (league of legends)",
      category: "League of Legends",
      mainTags: "neeko (league of legends), yellow eyes, green hair, long hair, league of legends",
      enhancers: [
          "k/da neeko",
          "bewitching neeko",
          "winter wonder neeko"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tristana (league of legends)",
      category: "League of Legends",
      mainTags: "tristana (league of legends), purple eyes, blue hair, long hair, league of legends",
      enhancers: [
      "[firecracker tristana", "hair buns]", "spirit blossom tristana"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "briar (league of legends)",
      category: "League of Legends",
      mainTags: "briar (league of legends), red eyes, gray hair, long hair, bound wrists, back decoration, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "morgana (league of legends)",
      category: "League of Legends",
      mainTags: "morgana (league of legends), purple eyes, black hair, long hair, league of legends",
      enhancers: [
          "star nemesis morgana",
          "coven morgana",
          "bewitching morgana"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nami (league of legends)",
      category: "League of Legends",
      mainTags: "nami (league of legends), blue eyes, pink hair, long hair, mermaid, league of legends",
      enhancers: [
          "coven nami",
          "splended staff nami"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vex (league of legends)",
      category: "League of Legends",
      mainTags: "vex (league of legends), yellow eyes, blue hair, long hair, frown, grey skin, yordle, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "qiyana (league of legends)",
      category: "League of Legends",
      mainTags: "qiyana (league of legends), blue eyes, blue hair, long hair, league of legends",
      enhancers: [
      "[true damage qiyana", "blue hair", "pink hair", "multicolored hair", "eyewear on head]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kayle (league of legends)",
      category: "League of Legends",
      mainTags: "kayle (league of legends), blue eyes, blonde hair, long hair, league of legends",
      enhancers: [
      "[--blonde hair", "armor", "boobplate", "glowing eyes", "feathered wings", "white hair", "multiple wings]",
      "[helmet", "angel wings", "armor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lillia (league of legends)",
      category: "League of Legends",
      mainTags: "lillia (league of legends), blue eyes, purple hair, long hair, centauroid, league of legends",
      enhancers: [
          "spirit blossom lillia",
          "shan hai scrolls lillia"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elise (league of legends)",
      category: "League of Legends",
      mainTags: "elise (league of legends), red eyes, black hair, long hair, spider legs, league of legends",
      enhancers: [
        "bewitching elise", "blood moon elise", "crystal rose elise", "coven elise"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "camille (league of legends)",
      category: "League of Legends",
      mainTags: "camille (league of legends), blue eyes, gray hair, short hair, prosthesis, mechanical legs, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nilah (league of legends)",
      category: "League of Legends",
      mainTags: "nilah (league of legends), purple eyes, blue hair, long hair, dark skin, tattoos, league of legends",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "2b (nier:automata)",
      category: "Nier",
      mainTags: "2b (nier:automata), blue eyes, white hair, short hair, nier (series)",
      enhancers: [
          "[--blue eyes", "black blindfold", "black dress", "black hairband", "feather-trimmed sleeves", "black thighhighs", "cleavage cutout", "puffy sleeves]",
          "[black dress", "black hairband", "feather-trimmed sleeves", "black thighhighs", "cleavage cutout", "puffy sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "a2 (nier:automata)",
      category: "Nier",
      mainTags: "a2 (nier:automata), blue eyes, white hair, very long hair, nier (series)",
      enhancers: [
      "[black shorts", "black elbow gloves", "black shirt", "robot joints]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "2p (nier:automata)",
      category: "Nier",
      mainTags: "2p (nier:automata), blue eyes, black hair, short hair, dark skin, dark-skinned female, nier (series), soulcalibur",
      enhancers: [
      "[white dress", "feather-trimmed dress", "cleavage cutout", "white thighhighs", "leotard under dress", "two-sided dress", "white blindfold]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rosa (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "rosa (pokemon), brown eyes, brown hair, long hair, pokemon bw, pokemon bw2, pokemon",
      enhancers: [
      "[double bun", "two-tone shirt", "yellow skirt", "black pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "erika (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "erika (pokemon), brown eyes, black hair, long hair, pokemon frlg, pokemon",
      enhancers: [
      "[headband", "hakama]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "carmine (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "carmine (pokemon), yellow eyes, black hair, long hair, pokemon sv, pokemon",
      enhancers: [
      "[yellow headwear", "two-tone hair", "open jacket", "blue pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "whitney (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "whitney (pokemon), brown eyes, pink hair, short hair, pokemon hgss, pokemon",
      enhancers: [
      "[blue shorts", "white shirt", "short twintails]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "skyla (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "skyla (pokemon), blue eyes, red hair, long hair, pokemon bw, pokemon",
      enhancers: [
      "[blue shorts", "blue gloves", "blue crop top", "hair ornament", "thigh holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lillie (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "lillie (pokemon), green eyes, blonde hair, long hair, pokemon sm, pokemon",
      enhancers: [
      "[white dress", "hat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hilda (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "hilda (pokemon), brown eyes, brown hair, long hair, pokemon bw, pokemon",
      enhancers: [
      "[hat", "jean shorts", "vest]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "selene (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "selene (pokemon), brown eyes, black hair, long hair, pokemon sm, pokemon",
      enhancers: [
      "[yellow shirt", "red hat", "white shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "marnie (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "marnie (pokemon), green eyes, black hair, long hair, pokemon swsh, pokemon",
      enhancers: [
      "[pink dress", "black jacket", "open jacket", "medium hair]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "piers (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "piers (pokemon), green eyes, black hair, long hair, multicolored hair, pokemon swsh, pokemon",
      enhancers: [
      "[two-tone shirt", "white jacket", "open jacket", "pink shorts", "white belt", "gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lacey (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "lacey (pokemon), blue eyes, pink hair, long hair, pokemon sv, pokemon",
      enhancers: [
      "[hair ornament", "pink sweater", "red tie", "blue skirt", "white shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gloria (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "gloria (pokemon), brown eyes, brown hair, short hair, pokemon swsh, pokemon",
      enhancers: [
      "[green hat", "pink collared dress", "hooded cardigan", "hood down", "puffy sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cynthia (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "cynthia (pokemon), gray eyes, blonde hair, long hair, pokemon dppt, pokemon",
      enhancers: [
      "[black pants", "black coat", "fur trim]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "iono (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "iono (pokemon), blue eyes, blue hair, long hair, multicolor hair, pokemon sv, pokemon",
      enhancers: [
      "[yellow jacket", "grey shirt", "single leg pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nessa (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "nessa (pokemon), blue eyes, black hair, long hair, dark skin, dark-skinned female, gym trainer (pokemon), pokemon swsh, pokemon",
      enhancers: [
      "[crop top", "bikini shorts", "hoop earrings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "akari (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "akari (pokemon), blue eyes, black hair, long hair, pokemon legends: arceus, pokemon",
      enhancers: [
      "[blue kimono", "blue pants", "headscarf", "loose socks]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bea (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "bea (pokemon), blue eyes, silver hair, short hair, pokemon swsh, pokemon",
      enhancers: [
      "[black hairband", "black leotard under clothes", "white crop top", "white shorts", "single glove]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lyra (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "lyra (pokemon), brown eyes, brown hair, long hair, pokemon hgss, pokemon",
      enhancers: [
      "[blue overalls", "white hat", "bow", "red shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "juliana (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "juliana (pokemon), brown eyes, brown hair, long hair, pokemon sv, pokemon",
      enhancers: [
      "[blue hat", "white shirt", "orange tie", "orange shorts", "backpack]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "leaf (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "leaf (pokemon), brown eyes, brown hair, long hair, pokemon frlg, pokemon",
      enhancers: [
      "[white hat", "red skirt", "blue shirt", "yellow bag]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hex maniac (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "hex maniac (pokemon), purple eyes, black hair, long hair, pokemon xy, pokemon",
      enhancers: [
      "[crazy eyes", "crazy grin", "purple sleeveless dress", "black thighhighs", "elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "melony (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "melony (pokemon), blue eyes, white hair, long hair, big hair, streaked hair, pokemon swsh, pokemon",
      enhancers: [
      "[white hat", "white coat", "fur trim", "wide sleeves", "teal pants", "knee boots", "curvy", "plump]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lusamine (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "lusamine (pokemon), green eyes, blonde hair, long hair, pokemon sm, pokemon",
      enhancers: [
      "[white sleeveless dress", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sonia (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "sonia (pokemon), green eyes, red hair, long hair, pokemon masters ex, pokemon",
      enhancers: [
      "[glasses on head", "jacket", "blue pants", "green shirt", "single wrist cuff", "black bag]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "irida (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "irida (pokemon), blue eyes, blonde hair, short hair, pokemon legends: arceus, pokemon",
      enhancers: [
      "[white shorts", "two-tone shirt", "hair ornament", "necklace]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mallow (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "mallow (pokemon), green eyes, green hair, long hair, dark skin, dark-skinned female, pokemon sm, pokemon",
      enhancers: [
      "[hair ornament", "grey overalls", "grey shorts", "pink shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elesa (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "elesa (pokemon), blue eyes, black hair, short hair, pokemon bw2, pokemon",
      enhancers: [
      "[headphones", "yellow coat", "puffy sleeves", "two-tone shorts", "two-tone crop top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bianca (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "bianca (pokemon), green eyes, blonde hair, short hair, pokemon bw2, pokemon",
      enhancers: [
      "[green hat", "white dress", "puffy short sleeves", "orange vest", "green bag]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "green (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "green (pokemon), green eyes, brown hair, long hair, pokemon lgpe, pokemon",
      enhancers: [
      "[blue shorts", "black shirt", "yellow bag]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "allister (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "allister (pokemon), purple eyes, black hair, short hair, pokemon swsh, pokemon",
      enhancers: [
      "[mask", "striped shirt", "wide sleeves", "polka dot shorts", "one glove]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "grusha (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "grusha (pokemon), blue eyes, blue hair, long hair, pokemon sv",
      enhancers: [
      "[yellow winter coat", "two-tone scarf", "blue pants", "mittens]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "serena (pokemon)",
      category: "Pokemon (Game)",
      mainTags: "serena (pokemon), blue eyes, blonde hair, long hair, pokemon xy",
      enhancers: [
      "[red hat", "black shirt", "red pleated skirt", "black thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ranni the witch",
      category: "Elden Ring",
      mainTags: "ranni the witch, blue eyes, blue hair, long hair, colored skin, blue skin, witch hat, elden ring, {{{{{{{extra arms, four arms}}}}}}",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "queen marika the eternal",
      category: "Elden Ring",
      mainTags: "queen marika the eternal, gold eyes, blonde hair, long hair, elden ring",
      enhancers: [
      "[black dress", "belts", "tiara", "cleavage]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "melina (elden ring)",
      category: "Elden Ring",
      mainTags: "melina (elden ring), pink eyes, brown hair, short hair, elden ring",
      enhancers: [
      "[hooded cloak", "hood down]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "miquella (elden ring)",
      category: "Elden Ring",
      mainTags: "miquella (elden ring), gold eyes, blonde hair, long hair, multiple braids, elden ring",
      enhancers: ["white dress"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "malenia blade of miquella",
      category: "Elden Ring",
      mainTags: "malenia blade of miquella, green eyes, red hair, long hair, elden ring",
      enhancers: [
      "[armor", "mechanical arm", "helmet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "malenia goddess of rot",
      category: "Elden Ring",
      mainTags: "malenia goddess of rot, green eyes, red hair, long hair, absurdly long hair, elden ring",
      enhancers: [
      "[wings", "the wings are rotted", "single shoulder pad", "single gauntlet", "single thighhigh]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "messmer the impaler",
      category: "Elden Ring",
      mainTags: "messmer the impaler, yellow eyes, red hair, long hair, animal, red snakes, elden ring",
      enhancers: [
      "[helmet", "chainmail", "red shawl]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bloody wolf (elden ring)",
      category: "Elden Ring",
      mainTags: "bloody wolf (elden ring), brown eyes, brown hair, short hair, full armor, elden ring",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "blaidd the half-wolf",
      category: "Elden Ring",
      mainTags: "blaidd the half-wolf, yellow eyes, black hair, short hair, furry, wolf boy, elden ring",
      enhancers: [
      "[fur cape", "armor]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "starscourge radahn",
      category: "Elden Ring",
      mainTags: "starscourge radahn, red eyes, red hair, long hair, elden ring",
      enhancers: [
      "[full armor", "helmet", "horse]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mohg lord of blood",
      category: "Elden Ring",
      mainTags: "mohg lord of blood, red eyes, black hair, long hair, monster, multiple horns, elden ring",
      enhancers: ["staff"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rennala queen of the full moon",
      category: "Elden Ring",
      mainTags: "rennala queen of the full moon, blue eyes, red hair, long hair, elden ring",
      enhancers: [
      "[black robe", "epaulettes", "tall hat]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "radagon of the golden order",
      category: "Elden Ring",
      mainTags: "radagon of the golden order, gold eyes, red hair, long hair, elden ring",
      enhancers: [
      "[no shirt", "tattoo", "black skirt", "cracked skin", "false arm", "hole on body]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "millicent (elden ring)",
      category: "Elden Ring",
      mainTags: "millicent (elden ring), brown eyes, red hair, long hair, elden ring",
      enhancers: [
      "[mechanical arm", "grey dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sorceress sellen",
      category: "Elden Ring",
      mainTags: "sorceress sellen, brown eyes, brown hair, short hair, elden ring",
      enhancers: [
      "[stone mask", "helmet", "crystal]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fia the deathbed companion",
      category: "Elden Ring",
      mainTags: "fia the deathbed companion, brown eyes, blonde hair, long hair, elden ring",
      enhancers: [
      "[black dress", "black veil", "fringe trim", "hooded dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "needle knight leda",
      category: "Elden Ring",
      mainTags: "needle knight leda, brown eyes, blonde hair, long hair, elden ring",
      enhancers: [
      "[full armor", "white cloak", "no hood", "holding helmet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rellana twin moon knight",
      category: "Elden Ring",
      mainTags: "rellana twin moon knight, blue eyes, black hair, long hair, elden ring",
      enhancers: [
      "[full armor", "chest armor", "armored", "holding helmet", "blue sash]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "patches (fromsoftware)",
      category: "Elden Ring",
      mainTags: "patches (fromsoftware), brown eyes, bald, elden ring",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "morgott the omen king",
      category: "Elden Ring",
      mainTags: "morgott the omen king, yellow eyes, gray hair, long hair, elden ring",
      enhancers: [
      "[asymmetric horns", "simple robe", "torn robe]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "white-faced varre",
      category: "Elden Ring",
      mainTags: "white-faced varre, brown eyes, brown hair, short hair, elden ring",
      enhancers: [
      "[mask", "hooded robe", "cowl", "belt pouch]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "st. trina (elden ring)",
      category: "Elden Ring",
      mainTags: "st. trina (elden ring), purple eyes, purple hair, long hair, floating hair, elden ring",
      enhancers: [
      "[white tunic", "short sleeves", "long skirt", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "godwyn the golden",
      category: "Elden Ring",
      mainTags: "godwyn the golden, gold eyes, blonde hair, long hair, elden ring",
      enhancers: [
      "[black armor", "golden trim", "golden armor]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "roderika (elden ring)",
      category: "Elden Ring",
      mainTags: "roderika (elden ring), blue eyes, blonde hair, long hair, elden ring",
      enhancers: [
      "[grey dress", "red hooded cape", "brown gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lunar princess ranni",
      category: "Elden Ring",
      mainTags: "lunar princess ranni, blue eyes, red hair, long hair, braid, elden ring",
      enhancers: [
      "[black robe", "ornate clothes", "black cape", "halo", "brooch]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sir ansbach",
      category: "Elden Ring",
      mainTags: "sir ansbach, brown eyes, white hair, long hair, full beard, elden ring",
      enhancers: [
      "[black robe", "cloak]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "godfrey first elden lord",
      category: "Elden Ring",
      mainTags: "godfrey first elden lord, brown eyes, brown hair, long hair, braided beard, elden ring",
      enhancers: [
      "[armor", "full armor", "armored boots", "cape]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "finger maiden hyetta",
      category: "Elden Ring",
      mainTags: "finger maiden hyetta, brown eyes, blonde hair, long hair, elden ring",
      enhancers: [
      "[brown robe", "bandages", "cloak]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "godrick the grafted",
      category: "Elden Ring",
      mainTags: "godrick the grafted, yellow eyes, gray hair, long hair, colored skin, grey skin, giant, elden ring, {{{{{{multiple arms, extra arms, extra legs}}}}}}",
      enhancers: [
      "[brown cloak", "crown]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "thiollier (elden ring)",
      category: "Elden Ring",
      mainTags: "thiollier (elden ring), brown eyes, black hair, short hair, elden ring",
      enhancers: [
      "[black robe", "white cloak", "mask", "brown gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gideon ofnir",
      category: "Elden Ring",
      mainTags: "gideon ofnir, brown eyes, gray hair, short hair, elden ring",
      enhancers: [
      "[full armor", "helmet", "cloak]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nepheli loux",
      category: "Elden Ring",
      mainTags: "nepheli loux, brown eyes, black hair, short hair, very dark skin, dark-skinned female, elden ring",
      enhancers: [
      "[bandeau", "fur-trimmed armor", "fur-trimmed armor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sorcerer rogier",
      category: "Elden Ring",
      mainTags: "sorcerer rogier, blue eyes, brown hair, short hair, elden ring",
      enhancers: [
      "[brown wizard hat", "hat ornament", "white hood", "leather tunic", "puffy sleeves", "brown cloak", "frills", "white gloves", "grey pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cleanrot knight finlay",
      category: "Elden Ring",
      mainTags: "cleanrot knight finlay, brown eyes, red hair, short hair, face mark, scar, elden ring",
      enhancers: [
      "[full armor", "holding helmet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "war counselor iji",
      category: "Elden Ring",
      mainTags: "war counselor iji, yellow eyes, white hair, long hair, giant, elden ring",
      enhancers: ["helmet"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "midra lord of frenzied flame",
      category: "Elden Ring",
      mainTags: "midra lord of frenzied flame, yellow eyes, gray hair, long hair, emaciated, flaming head, shawl, elden ring",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "preceptor seluvis",
      category: "Elden Ring",
      mainTags: "preceptor seluvis, brown eyes, gray hair, short hair, elden ring",
      enhancers: [
      "[mage hat", "mask", "brown hood", "hat over hood", "brown robe]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "praetor rykard",
      category: "Elden Ring",
      mainTags: "praetor rykard, red eyes, red hair, long hair, elden ring",
      enhancers: [
      "[crown", "cape", "long hair", "full beard", "ornate clothes]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shadowheart (baldur's gate)",
      category: "Baldur's Gate 3",
      mainTags: "shadowheart (baldur's gate), green eyes, black hair, long hair, single braid, baldur's gate 3, baldur's gate",
      enhancers: [
          "[leather armor", "chainmail", "brown pants", "vambraces", "pelvic curtain", "knee boots", "blue skirt]",
          "[black shirt", "plunging neckline", "black pants]",
          "[--black hair", "white hair", "armor", "boobplate", "full armor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "karlach",
      category: "Baldur's Gate 3",
      mainTags: "karlach, orange eyes, black hair, short hair, muscular female, colored skin, dark red skin, asymmetric horns, multicolored hair, baldur's gate 3, baldur's gate",
      enhancers: [
          "[leather armor", "clothing cutout]",
          "[black pants", "clothing cutout", "black tube top", "single bare shoulder", "leather strap", "o-ring]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "astarion",
      category: "Baldur's Gate 3",
      mainTags: "astarion, red eyes, white hair, short hair, fangs, vampire, baldur's gate 3, baldur's gate",
      enhancers: [
          "[leather armor", "brown pants", "multicolored shirt]",
          "[white frilled shirt", "brown pants", "cross-laced top]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "orin the red",
      category: "Baldur's Gate 3",
      mainTags: "orin the red, colored skin, grey skin, red eyes, white hair, long hair, black lips, baldur's gate 3, baldur's gate",
      enhancers: ["red bodysuit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lae'zel",
      category: "Baldur's Gate 3",
      mainTags: "lae'zel, yellow eyes, brown hair, short hair, colored skin, green skin, gith (d&d), baldur's gate 3, baldur's gate",
      enhancers: [
          "[armor", "full armor", "paundrons", "short sleeves", "hip armor", "thigh straps]",
          "[black capri pants", "belt", "bikini top only", "o-ring bikini]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "minthara",
      category: "Baldur's Gate 3",
      mainTags: "minthara, red eyes, white hair, short hair, dark elf, colored skin, black skin, dark-skinned female, baldur's gate 3, baldur's gate",
      enhancers: [
          "[armor", "full armor", "pauldrons", "gauntlets", "greaves]",
          "[black pants", "black vest", "cross-laced top", "shoulder pads]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gale (baldur's gate)",
      category: "Baldur's Gate 3",
      mainTags: "gale (baldur's gate), brown eyes, brown hair, short hair, baldur's gate 3, baldur's gate",
      enhancers: ["purple robe"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "the dark urge (baldur's gate)",
      category: "Baldur's Gate 3",
      mainTags: "the dark urge (baldur's gate), red eyes, white hair, long hair, dragon girl, dragon, white scales, animal nose, furry, baldur's gate 3, baldur's gate",
      enhancers: ["black armor"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mizora (baldur's gate)",
      category: "Baldur's Gate 3",
      mainTags: "mizora (baldur's gate), red eyes, red hair, long hair, demon girl, colored skin, grey skin, horns, black sclera, baldur's gate 3, baldur's gate",
      enhancers: [
      "[blue dress, cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "raphael (baldur's gate)",
      category: "Baldur's Gate 3",
      mainTags: "raphael (baldur's gate), red eyes, brown hair, short hair, colored skin, red skin, demon horns, multiple horns, demon wings, demon tail, demon boy, baldur's gate 3, baldur's gate",
      enhancers: ["black armor", "ornate clothes"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "stelle (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "stelle (honkai: star rail), gold eyes, grey hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[white shirt", "open jacket", "bike shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "firefly (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "firefly (honkai: star rail), grey eyes, grey hair, long hair, gradient hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[headband", "hair decoration", "white dress", "black jacket", "orange bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kafka (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "kafka (honkai: star rail), purple eyes, red hair, medium hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[black jacket", "glasses on head", "belts", "pantyhose", "black shorts", "white shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "acheron (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "acheron (honkai: star rail), purple eyes, blue hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[black halter top", "black shorts", "belt", "jacket", "wide sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "march 7th (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "march 7th (honkai: star rail), blue eyes, pink hair, medium hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[two-tone dress", "blue jacket", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sparkle (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "sparkle (honkai: star rail), red eyes, black hair, long hair, twintails, honkai: star rail, honkai (series)",
      enhancers: [
      "[mask on head", "red dress", "chinese clothes]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "robin (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "robin (honkai: star rail), blue eyes, blue hair, long hair, gradient hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[halo", "two-tone dress", "gloves", "bracelet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "silver wolf (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "silver wolf (honkai: star rail), purple eyes, grey hair, short hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[bow", "glasses on head", "fur-trimmed jacket", "crop top", "bike shorts", "leg belt", "holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "herta (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "herta (honkai: star rail), purple eyes, grey hair, long hair, big witch hat, honkai: star rail, honkai (series)",
      enhancers: [
      "[choker", "white dress", "black corset", "detached sleeves", "necklace", "puffy sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "black swan (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "black swan (honkai: star rail), yellow eyes, grey hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hood", "detached collar", "detached sleeves", "halter dress", "bike shorts", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ruan mei (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "ruan mei (honkai: star rail), green eyes, black hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hair flower", "green dress", "chinese clothes]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "topaz (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "topaz (honkai: star rail), red eyes, grey hair, short hair, streaked hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[black jumper", "detached sleeves", "one elbow glove]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "himeko (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "himeko (honkai: star rail), yellow eyes, red hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hair ornament", "white dress", "two-sided cloak]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "feixiao (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "feixiao (honkai: star rail), green eyes, grey hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[white jacket", "green shirt", "black shorts", "belts", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jingliu (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "jingliu (honkai: star rail), red eyes, grey hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hat", "multicolored dress", "detached sleeves", "single gauntlet", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fu xuan (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "fu xuan (honkai: star rail), gold eyes, pink hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[face mark", "hair ornament", "black dress", "white skirt", "detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tingyun (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "tingyun (honkai: star rail), yellow eyes, brown hair, long hair, fox girl, fox ears, fox tail, honkai: star rail, honkai (series)",
      enhancers: [
      "[brown hair", "multicolored dress", "detached sleeves", "collar", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bronya rand",
      category: "Honkai: Star Rail",
      mainTags: "bronya rand, blue eyes, grey hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[white dress", "pantyhose", "thigh boots", "elbow gloves", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "seele (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "seele (honkai: star rail), purple eyes, purple hair, long hair, gradient hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[white leotard", "black shorts", "detached sleeves", "single gauntlet", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yunli (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "yunli (honkai: star rail), red eyes, black hair, short hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[tiara", "white dress", "green dress", "detached sleeves", "red cape", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lingsha (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "lingsha (honkai: star rail), orange eyes, black hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hair ornament", "black dress", "white leotard under dress", "thigh belt", "gloves", "single bracer", "tattoo]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "qingque (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "qingque (honkai: star rail), green eyes, grey hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hairclip", "green eyes", "brown sweater", "shoulder cutouts", "multicolor dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "huohuo (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "huohuo (honkai: star rail), blue eyes, green hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hat", "hat ornament", "earrings", "blue eyes", "shirt", "brown shorts", "brown sash]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jade (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "jade (honkai: star rail), pink eyes, purple hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[black hat", "big hat", "multicolored dress", "gold belt", "open sleeves", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rappa (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "rappa (honkai: star rail), purple eyes, pink hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hat", "fake horns", "red jacket", "single sleeve", "white croptop", "short shorts", "belt", "single knee boot", "single thigh boot]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "clara (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "clara (honkai: star rail), pink eyes, white hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[pink eyes", "red jacket", "fur-trimmed jacket", "white dress", "detached collar", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sushang (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "sushang (honkai: star rail), brown eyes, brown hair, long hair, twintails, honkai: star rail, honkai (series)",
      enhancers: [
      "[multiple hair bows", "hair ornament", "white dress", "detached sleeves", "yellow sleeves", "thigh belt", "purple cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pela (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "pela (honkai: star rail), blue eyes, purple hair, short hair, glasses, honkai: star rail, honkai (series)",
      enhancers: [
      "[black hat", "hat ornaments", "white dress", "black dress", "blue bow", "white cape", "ribbons", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fugue (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "fugue (honkai: star rail), yellow eyes, black hair, long hair, fox girl, fox ears, fox tail, ninetales, honkai: star rail, honkai (series)",
      enhancers: [
      "[black off-shoulder dress", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "asta (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "asta (honkai: star rail), blue eyes, pink hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[white shirt", "hairclip", "detached sleeves", "bowtie", "lanyard", "multicolor skirt", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hanya (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "hanya (honkai: star rail), orange eyes, grey hair, long hair, gradient hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hair feathers", "earring", "choker", "mesh leotard", "green dress", "detached sleeves", "tattoo", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "guinaifen (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "guinaifen (honkai: star rail), yellow eyes, red hair, long hair, ponytail, honkai: star rail, honkai (series)",
      enhancers: [
      "[hair ornament", "earrings", "dress", "corset", "gloves", "pantyhose", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "serval landau",
      category: "Honkai: Star Rail",
      mainTags: "serval landau, blue eyes, blonde hair, long hair, streaked hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[black crop top", "white jacket", "detached sleeves", "blue skirt", "pantyhose", "single thigh boot", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lynx landau",
      category: "Honkai: Star Rail",
      mainTags: "lynx landau, blue eyes, blonde hair, short hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[fake cat ears", "blue bandana", "black dress", "multicolored jacket", "blue leggings", "thigh belt", "shoulder bag", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yukong (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "yukong (honkai: star rail), green eyes, teal hair, long hair, fox girl, fox ears, fox tail, honkai: star rail, honkai (series)",
      enhancers: [
      "[multicolored dress", "shoulder cutout", "fur collar", "detached collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hook (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "hook (honkai: star rail), brown eyes, blonde hair, short hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[hat", "brown coat", "fur-trimmed coat", "yellow shirt", "brown shorts", "kneehighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "natasha (honkai: star rail)",
      category: "Honkai: Star Rail",
      mainTags: "natasha (honkai: star rail), purple eyes, teal hair, long hair, honkai: star rail, honkai (series)",
      enhancers: [
      "[white jacket", "single elbow glove", "blue dress", "black leotard", "leggings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ganyu (genshin impact)",
      category: "Genshin Impact",
      mainTags: "ganyu (genshin impact), blue eyes, blue hair, long hair, horns, ahoge, genshin impact",
      enhancers: [
      "[multicolored dress", "pantyhose", "detached sleeves", "black gloves", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lumine (genshin impact)",
      category: "Genshin Impact",
      mainTags: "lumine (genshin impact), brown eyes, blonde hair, short hair, genshin impact",
      enhancers: [
      "[hair flower", "white dress", "black trim", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "raiden shogun",
      category: "Genshin Impact",
      mainTags: "raiden shogun, purple eyes, purple hair, long hair, genshin impact",
      enhancers: [
      "[japanese clothes", "hair ornament", "kimono", "collar", "belts", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hu tao (genshin impact)",
      category: "Genshin Impact",
      mainTags: "hu tao (genshin impact), red eyes, brown hair, short hair, genshin impact",
      enhancers: [
      "[hat", "hat flower", "black dress", "black shorts", "wide sleeves", "collar", "kneehighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "furina (genshin impact)",
      category: "Genshin Impact",
      mainTags: "furina (genshin impact), blue eyes, white hair, short hair, genshin impact",
      enhancers: [
      "[mini top hat", "blue eyes", "black dress", "black shorts", "blue jacket", "gloves", "thigh belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yae miko",
      category: "Genshin Impact",
      mainTags: "yae miko, purple eyes, pink hair, long hair, genshin impact",
      enhancers: [
      "[japanese clothes", "nontraditional miko", "detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nahida (genshin impact)",
      category: "Genshin Impact",
      mainTags: "nahida (genshin impact), green eyes, white hair, long hair, pointy ears, ponytail, genshin impact",
      enhancers: [
      "[hair ornament", "white dress", "green cape", "single bangle", "detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "keqing (genshin impact)",
      category: "Genshin Impact",
      mainTags: "keqing (genshin impact), purple eyes, grey hair, long hair, cone hair bun, red eyes, genshin impact",
      enhancers: [
      "[purple collared dress", "detached sleeves", "gloves", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mona (genshin impact)",
      category: "Genshin Impact",
      mainTags: "mona (genshin impact), green eyes, black hair, long hair, twintails, genshin impact",
      enhancers: [
      "[mage hat", "grey eyes", "leotard", "long sleeves", "elbow gloves", "pantyhose", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kamisato ayaka",
      category: "Genshin Impact",
      mainTags: "kamisato ayaka, blue eyes, blue hair, long hair, genshin impact",
      enhancers: [
      "[hair ornament", "necklace", "japanese armor", "blue dress", "elbow gloves", "rope belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "klee (genshin impact)",
      category: "Genshin Impact",
      mainTags: "klee (genshin impact), red eyes, blonde hair, short hair, genshin impact",
      enhancers: [
      "[hat", "hat ornament", "red dress", "gloves", "kneehighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "paimon (genshin impact)",
      category: "Genshin Impact",
      mainTags: "paimon (genshin impact), purple eyes, white hair, short hair, glowing eyes, genshin impact",
      enhancers: [
      "[halo", "white dress", "wide sleeves", "single thighhigh]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "eula (genshin impact)",
      category: "Genshin Impact",
      mainTags: "eula (genshin impact), blue eyes, blue hair, short hair, genshin impact",
      enhancers: [
      "[feather hair ornament", "black dress", "white jacket", "wide sleeves", "gloves", "thighhighs", "thigh belt", "blue tie]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shenhe (genshin impact)",
      category: "Genshin Impact",
      mainTags: "shenhe (genshin impact), blue eyes, white hair, long hair, hair over one eye, genshin impact",
      enhancers: [
      "[hair ornament", "black bodysuit", "white shirt", "breast curtains", "detached sleeves", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yelan (genshin impact)",
      category: "Genshin Impact",
      mainTags: "yelan (genshin impact), blue eyes, black hair, long hair, gradient hair, genshin impact",
      enhancers: [
      "[black bodysuit", "white jacket", "fur-trimmed jacket", "choker", "single elbow glove", "single glove", "leggings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nilou (genshin impact)",
      category: "Genshin Impact",
      mainTags: "nilou (genshin impact), blue eyes, red hair, long hair, horns, genshin impact",
      enhancers: [
      "[long sleeves", "crop top", "skirt", "belt", "leg belt", "navel]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "arlecchino (genshin impact)",
      category: "Genshin Impact",
      mainTags: "arlecchino (genshin impact), red eyes, grey hair, long hair, streaked hair, genshin impact",
      enhancers: [
      "[aristocratic clothes", "grey jacket", "black pants", "cape", "collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sangonomiya kokomi",
      category: "Genshin Impact",
      mainTags: "sangonomiya kokomi, pink eyes, blonde hair, long hair, genshin impact",
      enhancers: [
      "[bow", "hair ornament", "long hair", "collar", "off-shoulder dress", "bow", "wide sleeves", "white shorts", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "barbara (genshin impact)",
      category: "Genshin Impact",
      mainTags: "barbara (genshin impact), blue eyes, blonde hair, long hair, twin drills, genshin impact",
      enhancers: [
      "[hat", "detached collar", "off-shoulder dress", "white dress", "frills", "white leggings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fischl (genshin impact)",
      category: "Genshin Impact",
      mainTags: "fischl (genshin impact), green eyes, blonde hair, long hair, hair over one eye, genshin impact",
      enhancers: [
      "[neck bow", "detached sleeves", "single glove", "black dress", "pantyhose", "single legwear garter]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jean (genshin impact)",
      category: "Genshin Impact",
      mainTags: "jean (genshin impact), blue eyes, blonde hair, long hair, genshin impact",
      enhancers: [
      "[ponytail", "blue jacket", "white shirt", "white pants", "belt", "gauntlets", "detached collar", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "amber (genshin impact)",
      category: "Genshin Impact",
      mainTags: "amber (genshin impact), brown eyes, brown hair, long hair, genshin impact",
      enhancers: [
      "[hair bow", "brown eyes", "goggles", "red sleeves", "white shirt", "black corset", "brown shorts", "thighhighs", "thigh belt", "holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ningguang (genshin impact)",
      category: "Genshin Impact",
      mainTags: "ningguang (genshin impact), red eyes, white hair, long hair, parted bangs, genshin impact",
      enhancers: [
      "[chinese hairpin", "tassel hair ornament", "chinese clothes", "claw ring", "elbow gloves", "fur collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yoimiya (genshin impact)",
      category: "Genshin Impact",
      mainTags: "yoimiya (genshin impact), brown eyes, red hair, short hair, genshin impact",
      enhancers: [
      "[hair ornament", "sarashi", "single bare shoulder", "single thighhigh", "single glove", "choker]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "qiqi (genshin impact)",
      category: "Genshin Impact",
      mainTags: "qiqi (genshin impact), pink eyes, grey hair, short hair, genshin impact",
      enhancers: [
      "[hat", "ofuda", "purple dress", "wide sleeves", "necklace", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "clorinde (genshin impact)",
      category: "Genshin Impact",
      mainTags: "clorinde (genshin impact), purple eyes, black hair, long hair, genshin impact",
      enhancers: [
      "[purple ascot", "hat", "hat feather", "epaulettes", "black skirt", "cape", "black corset", "framed breasts", "white shirt", "fold-over gloves", "black pantyhose", "thigh belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kujou sara",
      category: "Genshin Impact",
      mainTags: "kujou sara, brown eyes, black hair, short hair, genshin impact",
      enhancers: [
      "[mask on head", "black bodysuit", "white shirt", "breast curtain", "shoulder cutout", "gloves", "black leggings", "multicolored skirt", "bow belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "noelle (genshin impact)",
      category: "Genshin Impact",
      mainTags: "noelle (genshin impact), green eyes, grey hair, short hair, genshin impact",
      enhancers: [
      "[hat", "hair flower", "rose", "armored dress", "belt", "single shoulderpad", "single elbow glove", "single glove", "greaves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "beidou (genshin impact)",
      category: "Genshin Impact",
      mainTags: "beidou (genshin impact), red eyes, brown hair, long hair, one eye, genshin impact",
      enhancers: [
      "[eyepatch", "hairpin", "fur-trimmed cape", "fingerless gloves", "chinese clothes", "sleeveless turtleneck leotard", "thighhighs", "pelvic curtain]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lynette (genshin impact)",
      category: "Genshin Impact",
      mainTags: "lynette (genshin impact), purple eyes, grey hair, long hair, animal ear fluff, animal ears, cat ears, cat tail, cat girl, genshin impact",
      enhancers: [
      "[hair ribbon", "white shirt", "pantyhose", "black leotard]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "dehya (genshin impact)",
      category: "Genshin Impact",
      mainTags: "dehya (genshin impact), blue eyes, brown hair, long hair, genshin impact",
      enhancers: [
      "[fingerless gloves", "claw ring", "belt", "single shoulder pad", "bandeau", "black shorts", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lisa (genshin impact)",
      category: "Genshin Impact",
      mainTags: "lisa (genshin impact), green eyes, brown hair, long hair, genshin impact",
      enhancers: [
      "[witch hat", "thighband pantyhose", "purple dress", "puffy short sleeves", "black elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "navia (genshin impact)",
      category: "Genshin Impact",
      mainTags: "navia (genshin impact), blue eyes, blonde hair, long hair, genshin impact",
      enhancers: [
      "[black hat", "hat flower", "black rose", "steampunk dress", "thigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yanfei (genshin impact)",
      category: "Genshin Impact",
      mainTags: "yanfei (genshin impact), green eyes, red hair, long hair, genshin impact",
      enhancers: [
      "[hat", "crop top", "detached sleeves", "puffy sleeves", "sash", "black bloomers", "belt", "red skirt", "fur-trimmed boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mavuika (genshin impact)",
      category: "Genshin Impact",
      mainTags: "mavuika (genshin impact), red eyes, red hair, long hair, multicolored hair, genshin impact",
      enhancers: [
      "[choker", "black bikesuit", "red trim", "zipper]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "citlali (genshin impact)",
      category: "Genshin Impact",
      mainTags: "citlali (genshin impact), pink eyes, pink hair, long hair, genshin impact",
      enhancers: [
      "[floating headgear", "braid", "purple necktie", "black ribbed leotard", "black ribbed sleeves", "asymmetric sleeves", "fingerless gloves", "purple skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "xiangling (genshin impact)",
      category: "Genshin Impact",
      mainTags: "xiangling (genshin impact), yellow eyes, black hair, short hair, genshin impact",
      enhancers: [
      "[hairclip", "yellow eyes", "chinese clothes", "fingerless gloves", "ribbon]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kuki shinobu",
      category: "Genshin Impact",
      mainTags: "kuki shinobu, purple eyes, green hair, short hair, genshin impact",
      enhancers: [
      "[ninja", "mask", "miniskirt", "black gloves", "jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kirara (genshin impact)",
      category: "Genshin Impact",
      mainTags: "kirara (genshin impact), green eyes, blonde hair, long hair, animal girl, animal ears, cat ears, cat tail, two tails, cat girl, genshin impact",
      enhancers: [
      "[bare shoulders", "black sleeves", "crop top", "black shorts", "blue skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rosaria (genshin impact)",
      category: "Genshin Impact",
      mainTags: "rosaria (genshin impact), purple eyes, red hair, short hair, genshin impact",
      enhancers: [
      "[nun", "bare shoulders", "short hair", "veil", "hat", "white tanktop leotard", "black skirt", "belts", "white elbow gloves", "claw ring", "fishnet pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "chiori (genshin impact)",
      category: "Genshin Impact",
      mainTags: "chiori (genshin impact), brown eyes, brown hair, long hair, genshin impact",
      enhancers: [
      "[hair ornament", "choker", "grey kimono", "yellow skirt", "gloves", "sash", "thighhighs over pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "layla (genshin impact)",
      category: "Genshin Impact",
      mainTags: "layla (genshin impact), yellow eyes, blue hair, long hair, twin drills, genshin impact",
      enhancers: [
      "[blue hood", "choker", "crown", "detached sleeves", "black gloves", "white pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sucrose (genshin impact)",
      category: "Genshin Impact",
      mainTags: "sucrose (genshin impact), amber eyes, green hair, long hair, streaked hair, glasses, genshin impact",
      enhancers: [
      "[hat", "blue dress", "white gloves", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "xianyun (genshin impact)",
      category: "Genshin Impact",
      mainTags: "xianyun (genshin impact), green eyes, black hair, long hair, gradient hair, glasses, genshin impact",
      enhancers: [
      "[hairpin", "ponytail", "black bodysuit", "fine fabric emphasis", "fishnet pantyhose", "yellow tassel]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mualani (genshin impact)",
      category: "Genshin Impact",
      mainTags: "mualani (genshin impact), blue eyes, white hair, short hair, genshin impact",
      enhancers: [
      "[hairband", "halterneck", "skirt", "fingerless gloves", "tattoo]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sigewinne (genshin impact)",
      category: "Genshin Impact",
      mainTags: "sigewinne (genshin impact), red eyes, blue hair, long hair, genshin impact",
      enhancers: [
      "[nurse cap", "hair ornament", "blue jacket", "white shirt", "shorts", "white leggings", "red bow", "waist bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "faruzan (genshin impact)",
      category: "Genshin Impact",
      mainTags: "faruzan (genshin impact), green eyes, aqua hair, long hair, genshin impact",
      enhancers: [
      "[hair ornament", "green eyes", "multicolored dress", "bangles]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yun jin (genshin impact)",
      category: "Genshin Impact",
      mainTags: "yun jin (genshin impact), red eyes, purple hair, long hair, genshin impact",
      enhancers: [
      "[hat", "lolita fashion", "two-tone skirt", "puffy sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "columbina (genshin impact)",
      category: "Genshin Impact",
      mainTags: "columbina (genshin impact), purple hair, long hair, eyes closed, genshin impact",
      enhancers: [
      "[head wings", "ribbon", "fur-trimmed coat", "strap slip", "white dress", "thigh belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "signora (genshin impact)",
      category: "Genshin Impact",
      mainTags: "signora (genshin impact), blue eyes, blonde hair, long hair, one eye covered, genshin impact",
      enhancers: [
      "[mask over one eye", "long hair", "lace-trimmed eyepatch", "dress", "strapless dress", "studded elbow gloves", "fur trim]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "focalors (genshin impact)",
      category: "Genshin Impact",
      mainTags: "focalors (genshin impact), blue eyes, white hair, long hair, streaked hair, genshin impact",
      enhancers: [
      "[blue dress", "gradient clothes]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "candace (genshin impact)",
      category: "Genshin Impact",
      mainTags: "candace (genshin impact), blue eyes, purple hair, long hair, dark skin, dark-skinned female, genshin impact",
      enhancers: [
      "[headband", "hair ornament", "halter crop top", "ankh necklace", "shorts", "pelvic curtain]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sayu (genshin impact)",
      category: "Genshin Impact",
      mainTags: "sayu (genshin impact), pink eyes, blonde hair, short hair, animal hood, genshin impact",
      enhancers: [
      "[half-closed eyes", "fake animal ears", "fake animal tail", "japanese armor", "thigh belt", "fingerless gloves", "belt pouch]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "diona (genshin impact)",
      category: "Genshin Impact",
      mainTags: "diona (genshin impact), blue eyes, pink hair, short hair, animal girl, cat girl, cat ears, animal ear fluff, cat tail, genshin impact",
      enhancers: [
      "[hat", "detached sleeves", "cape", "shirt", "shorts", "belt pouch]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "charlotte (genshin impact)",
      category: "Genshin Impact",
      mainTags: "charlotte (genshin impact), blue eyes, pink hair, short hair, genshin impact",
      enhancers: [
      "[cabbie hat", "ribbon", "choker", "detached long sleeves", "white gloves", "bowtie", "monocle", "suspenders", "red miniskirt", "thigh strap]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ellen joe",
      category: "Zenless Zone Zero",
      mainTags: "ellen joe, red eyes, black hair, multicolored hair, short hair, shark girl, shark tail, sharp teeth, zenless zone zero",
      enhancers: [
      "[maid apron", "maid headdress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hoshimi miyabi",
      category: "Zenless Zone Zero",
      mainTags: "hoshimi miyabi, brown eyes, fox girl, fox ears, black hair, long hair, zenless zone zero",
      enhancers: [
      "[black necktie", "white shirt", "black skirt", "pantyhose", "corset", "gauntlets]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jane doe (zenless zone zero)",
      category: "Zenless Zone Zero",
      mainTags: "jane doe (zenless zone zero), brown eyes, mouse girl, mouse ears, mouse tail, black hair, gradient hair, long hair, zenless zone zero",
      enhancers: [
      "[black shirt", "black shorts", "green jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nicole demara",
      category: "Zenless Zone Zero",
      mainTags: "nicole demara, green eyes, pink hair, long hair, twintails, zenless zone zero",
      enhancers: [
      "[hair bows", "black jacket", "shoulder cutout", "white crop top", "black denim shorts", "single thighhigh", "belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "belle (zenless zone zero)",
      category: "Zenless Zone Zero",
      mainTags: "belle (zenless zone zero), blue eyes, purple hair, gradient hair, short hair, zenless zone zero",
      enhancers: [
      "[hairclip", "black shirt", "jacket", "long sleeves", "fingerless gloves", "grey shorts", "single thighhigh]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tsukishiro yanagi",
      category: "Zenless Zone Zero",
      mainTags: "tsukishiro yanagi, pink eyes, pink hair, long hair, glasses, zenless zone zero",
      enhancers: [
      "[collared shirt", "ribbon", "black skirt", "single shoulder pad", "single gauntlet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "zhu yuan",
      category: "Zenless Zone Zero",
      mainTags: "zhu yuan, brown eyes, black hair, two-tone hair, streaked hair, long hair, zenless zone zero",
      enhancers: [
      "[police uniform", "black pants", "jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "burnice white",
      category: "Zenless Zone Zero",
      mainTags: "burnice white, blue eyes, blonde hair, long hair, twintails, zenless zone zero",
      enhancers: [
      "[glasses on head", "hair ornament", "leather jacket", "fingerless gloves", "black tube top", "pleated skirt", "belt", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "luciana de montefio",
      category: "Zenless Zone Zero",
      mainTags: "luciana de montefio, red eyes, blonde hair, long hair, ponytail, zenless zone zero",
      enhancers: [
      "[spiked helmet", "red eyes", "leather jacket", "black denim shorts", "belt", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "soukaku (zenless zone zero)",
      category: "Zenless Zone Zero",
      mainTags: "soukaku (zenless zone zero), blue eyes, demon girl, white hair, short hair, horns, colored skin, blue skin, demon tail, zenless zone zero",
      enhancers: [
      "[green jacket", "wrist cuffs", "white shirt", "black tie", "black skirt", "thigh holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "grace howard",
      category: "Zenless Zone Zero",
      mainTags: "grace howard, brown eyes, black hair, medium hair, zenless zone zero",
      enhancers: [
      "[glasses on head", "black halter top", "single sleeve", "fingerless gloves", "single elbow glove", "black pants", "holster", "knee pads]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "qingyi (zenless zone zero)",
      category: "Zenless Zone Zero",
      mainTags: "qingyi (zenless zone zero), green eyes, green hair, long hair, twintails, zenless zone zero",
      enhancers: [
      "[blue shirt", "black shorts", "knee boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "caesar king (zenless zone zero)",
      category: "Zenless Zone Zero",
      mainTags: "caesar king (zenless zone zero), yellow eyes, green hair, short hair, zenless zone zero",
      enhancers: [
      "[hair ornament", "black horns", "fur-trimmed red jacket", "prosthetic arm", "black short shorts", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "anby demara",
      category: "Zenless Zone Zero",
      mainTags: "anby demara, orange eyes, grey hair, short hair, zenless zone zero",
      enhancers: [
      "[armored jacket", "green jacket", "fingerless gloves", "black skirt", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "corin wickes",
      category: "Zenless Zone Zero",
      mainTags: "corin wickes, purple eyes, green hair, short hair, zenless zone zero",
      enhancers: [
      "[maid headdress", "maid apron", "black dress", "black ribbon", "wrist cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "alexandrina sebastiane",
      category: "Zenless Zone Zero",
      mainTags: "alexandrina sebastiane, red eyes, grey hair, long hair, zenless zone zero",
      enhancers: [
      "[maid headdress", "red eyes", "maid apron]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nekomiya mana",
      category: "Zenless Zone Zero",
      mainTags: "nekomiya mana, red eyes, dark skin, dark-skinned female, catgirl, cat ears, animal ear fluff, cat tail, two tails, black hair, very long hair, zenless zone zero",
      enhancers: [
      "[neck bell", "red headband", "detached red sleeves", "knee boots", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "piper wheel",
      category: "Zenless Zone Zero",
      mainTags: "piper wheel, blue eyes, brown hair, long hair, zenless zone zero",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "koleda belobog",
      category: "Zenless Zone Zero",
      mainTags: "koleda belobog, orange eyes, red hair, very long hair, twintails, zenless zone zero",
      enhancers: [
      "[fake animal ears", "white pants", "goggles around neck", "multicolored crop top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cortana",
      category: "Other",
      mainTags: "cortana, colored skin, blue skin blue eyes, blue hair, short hair, glowing skin, aura, see-through, hologram, halo (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "morrigan (dragon age)",
      category: "Other",
      mainTags: "morrigan (dragon age), yellow eyes, black hair, long hair, dragon age",
      enhancers: ["[black pants", "red hood", "hood down", "feathers", "single detached sleeve]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "quiet (metal gear)",
      category: "Other",
      mainTags: "quiet (metal gear), green eyes, brown hair, medium hair, ponytail, metal gear (series)",
      enhancers: ["[black bikini", "torn pantyhose", "utility belt", "suspenders", "green glove", "black elbow glove]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "palutena",
      category: "Other",
      mainTags: "palutena, green eyes, green hair, very long hair, kid icarus",
      enhancers: ["[white dress", "white thighhighs", "circlet", "headdress", "necklace", "red trim", "single shoulder pad]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bloodrayne",
      category: "Other",
      mainTags: "bloodrayne, green eyes, red hair, short hair, bloodrayne (videogame)",
      enhancers: ["[black leather pants", "two-tone pants", "black leather vest", "cropped vest", "cross-laced top", "elbow gloves", "fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "samus aran",
      category: "Other",
      mainTags: "samus aran, blue eyes, blonde hair, long hair, ponytail, metroid",
      enhancers: ["varia suit", "power suit", "power armor"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lara croft",
      category: "Other",
      mainTags: "lara croft, brown eyes, brown hair, long hair, ponytail, tomb raider",
      enhancers: [
        "[brown short shorts", "tank top", "thigh holster]",
        "[sleeveless grey shirt", "brown pants", "fingerless gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bayonetta",
      category: "Other",
      mainTags: "bayonetta, blue eyes, black hair, very long hair, bayonetta (series)",
      enhancers: ["bayonetta 1", "bayonetta 2", "bayonetta 3"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jeanne (bayonetta)",
      category: "Other",
      mainTags: "jeanne (bayonetta), grey eyes, white hair, very long hair, bayonetta (series)",
      enhancers: ["[red bodysuit", "black trim", "red thigh boots", "red gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elizabeth (bioshock infinite)",
      category: "Other",
      mainTags: "elizabeth (bioshock infinite), blue eyes, brown hair, long hair, bioshock (series)",
      enhancers: [
        "[cropped blue jacket", "blue skirt", "white corset", "necklace]",
        "[ponytail", "high-waist skirt", "blue skirt", "sleeve cuffs", "white shirt", "black ascot", "knee boots]",
        "[black skirt", "pencil skirt", "long skirt", "white shirt", "red bolo tie", "brooch", "sleeve cuffs", "fishnet pantyhose]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "v (cyberpunk)",
      category: "Other",
      mainTags: "v (cyberpunk), brown eyes, black hair, short hair, cyberpunk 2077",
      enhancers: ["valerie (cyberpunk)", "vincent (cyberpunk)"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "arcane vi",
      category: "Arcane: League of Legends",
      mainTags: "arcane vi, blue eyes, pink hair, short hair, arcane: league of legends",
      enhancers: ["[red cropped jacket", "black pants", "multiple belts", "white shirt", "single fingerless gloves", "bandages]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "arcane jinx",
      category: "Arcane: League of Legends",
      mainTags: "arcane jinx, blue eyes, blue hair, very long hair, braid, arcane: league of legends",
      enhancers: ["[purple capri pants", "black halter top", "fingerless elbow gloves", "belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "arcane caitlyn",
      category: "Arcane: League of Legends",
      mainTags: "arcane caitlyn, blue eyes, blue hair, long hair, arcane: league of legends",
      enhancers: ["[blue jacket", "shoulder pads", "short sleeves", "fingerless gloves", "two-tone dress", "thigh boots", "zettai ryouiki]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "firelight ekko",
      category: "Arcane: League of Legends",
      mainTags: "firelight ekko, very dark skin, dark-skinned male, brown eyes, black hair, short hair, arcane: league of legends",
      enhancers: ["[long green coat", "graffiti on coat", "orange neckerchief", "brown pants", "single knee pad]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kiwi (cyberpunk)",
      category: "Cyberpunk: Edgerunners",
      mainTags: "kiwi (cyberpunk), blue eyes, blonde hair, short hair, cyberpunk edgerunners",
      enhancers: ["[mouth mask", "long red coat", "red pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rebecca (cyberpunk)",
      category: "Cyberpunk: Edgerunners",
      mainTags: "rebecca (cyberpunk), colored skin, blue skin, artifical eyes, green eyes, teal hair, medium hair, twintails, cyberpunk edgerunners",
      enhancers: ["[black jacket", "tattoo", "black panties", "black bra]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lucy (cyberpunk)",
      category: "Cyberpunk: Edgerunners",
      mainTags: "lucy (cyberpunk), purple eyes, white hair, short hair, multicolored hair, cyberpunk edgerunners",
      enhancers: ["[black leotard", "white jacket", "white shorts", "thighhighs", "belt pouch]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "darkness (konosuba)",
      category: "Konosuba",
      mainTags: "darkness (konosuba), blue eyes, blonde hair, long hair, ponytail, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[armor", "black bodysuit", "boobplate", "shoulder armor", "pelvic curtain", "red ribbon", "vambraces]",
        "[wedding dress", "bridal veil", "tiara", "elbow gloves", "frills]",
        "[maid", "long sleeves", "detached collar", "wrist cuffs", "maid apron", "maid headdress", "black thighhighs]",
        "[pink dress", "frilled dress", "pajamas", "short puffy sleeves]",
        "towel",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aqua (konosuba)",
      category: "Konosuba",
      mainTags: "aqua (konosuba), blue eyes, blue hair, long hair, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[blue dress", "thigh boots", "detached sleeves", "blue bow", "blue skirt", "white thighhighs]",
        "[black highleg leotard", "black elbow gloves", "wrist cuffs", "animal ear hairband", "rabbit ears", "rabbit tail", "detached collar", "nontraditional playboy bunny", "fishnet pantyhose]",
        "towel",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "[darkness (konosuba) (cosplay)", "armor]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "megumin",
      category: "Konosuba",
      mainTags: "megumin, red eyes, brown hair, long hair, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[red dress", "belt", "witch hat", "single black thighhigh", "bandaged leg", "fingerless gloves]",
        "[red eyepatch", "red dress", "belt", "witch hat", "single black thighhigh", "bandaged leg", "fingerless gloves]",
        "[red prison magic school uniform", "witch hat", "fingerless gloves", "pink dress", "black cloak", "two-sided fabric", "kono subarashii sekai ni bakuen wo!]",
        "towel",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yunyun (konosuba)",
      category: "Konosuba",
      mainTags: "yunyun (konosuba), red eyes, brown hair, long hair, twintails, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[black dress", "pink skirt", "red thighhighs", "pink necktie", "hair decoration", "belt]",
        "[red prison magic school uniform", "pink dress", "black cloak", "two-sided fabric", "black thighhighs", "black pantyhose", "kono subarashii sekai ni bakuen wo!]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "wiz (konosuba)",
      category: "Konosuba",
      mainTags: "wiz (konosuba), purple eyes, brown hair, long hair, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[purple dress", "purple coak", "bat brooch", "wide sleeves]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
        "towel"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "satou kazuma",
    category: "Konosuba",
    mainTags: "satou kazuma, green eyes, brown hair, short hair, kono subarashii sekai ni shukufuku wo!",
    enhancers: [
      "[black pants", "white shirt", "high collar", "green cape]",
      "[darkness (konosuba) (cosplay)", "armor]",
      "[megumin (cosplay)", "witch hat]",
      "aqua (konosuba) (cosplay)",
      "towel",
      "green track suit"
    ],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "vanir",
    category: "Konosuba",
    mainTags: "vanir, mask, two-tone mask, black hair, short hair, kono subarashii sekai ni shukufuku wo!",
    enhancers: ["[black suit", "yellow ascot]"],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "iris (konosuba)",
      category: "Konosuba",
      mainTags: "iris (konosuba), blue eyes, blonde hair, long hair, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[white dress", "purple dress", "blue bow", "necklace", "food-themed hair ornament]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
        "towel"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "komekko",
      category: "Konosuba",
      mainTags: "komekko, red eyes, brown hair, short hair, twintails,kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[brown skirt", "white shirt", "suspenders", "two-sided cape]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chris (konosuba)",
      category: "Konosuba",
      mainTags: "chris (konosuba), blue eyes, silver hair, short hair, kono subarashii sekai ni shukufuku wo!",
      enhancers: [
        "[blue shorts", "blue scarf", "green cropped jacket", "black tube top", "detached sleeves", "gloves", "white thighhighs]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "eris (konosuba)",
    category: "Konosuba",
    mainTags: "eris (konosuba), purple eyes, purple hair, long hair,  kono subarashii sekai ni shukufuku wo!",
    enhancers: [
      "[long white dress", "purple habit", "purple shirt", "cross-laced top", "white leggings]",
      "[darkness (konosuba) (cosplay)", "armor]",
      "[megumin (cosplay)", "witch hat]",
      "[satou kazuma (cosplay)", "green cape]",
      "[satou kazuma (cosplay)", "green track suit]",
      "aqua (konosuba) (cosplay)",
  ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "luna (konosuba)",
    category: "Konosuba",
    mainTags: "luna (konosuba), brown eyes, blonde hair, hair bun,  kono subarashii sekai ni shukufuku wo!",
    enhancers: [
        "[white shirt", "detached sleeves", "detached collar", "red bow", "denim shorts]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
  ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "shinjin succubus (konosuba)",
    category: "Konosuba",
    mainTags: "shinjin succubus (konosuba), grey hair, short hair, red eyes, demon girl, demon dail, head wings, kono subarashii sekai ni shukufuku wo!",
    enhancers: [
        "[black gloves", "black thighhighs", "garter straps", "red panties", "o-ring top", "black babydoll]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
  ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "arue (konosuba)",
    category: "Konosuba",
    mainTags: "arue (konosuba), red eyes, black hair, long hair, drill hair",
    enhancers: [
        "[red prison magic school uniform", "pink dress", "black cloak", "two-sided fabric", "black thighhighs", "zettai ryouiki", "kono subarashii sekai ni bakuen wo!]",
        "[darkness (konosuba) (cosplay)", "armor]",
        "[megumin (cosplay)", "witch hat]",
        "[satou kazuma (cosplay)", "green cape]",
        "[satou kazuma (cosplay)", "green track suit]",
        "aqua (konosuba) (cosplay)",
  ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "revy (black lagoon)",
      category: "Black Lagoon",
      mainTags: "revy (black lagoon), blue eyes, black hair, medium hair, ponytail, black lagoon",
      enhancers: ["[black tank top", "denim shorts", "belt", "fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "balalaika (black lagoon)",
      category: "Black Lagoon",
      mainTags: "balalaika (black lagoon), blue eyes, blonde hair, long hair, scars, black lagoon",
      enhancers: ["[red suit", "red skirt", "jacket on shoulders]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "roberta (black lagoon)",
      category: "Black Lagoon",
      mainTags: "roberta (black lagoon), brown eyes, black hair, long hair, twin braids, black lagoon",
      enhancers: ["[glasses", "cross necklace", "maid", "maid apron", "maid headdress", "black dress", "juliet sleeves", "wrist cuffs", "white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "frederica sawyer",
    category: "Black Lagoon",
    mainTags: "frederica sawyer, purple hair, short hair, scar on neck, blue eyes, black lagoon",
    enhancers: ["[purple shirt", "shirt under shirt", "striped sleeves]"],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "shenhua",
    category: "Black Lagoon",
    mainTags: "shenhua, black hair, long hair, blue eyes, black lagoon",
    enhancers: ["[red china dress", "floral print", "white cropped jacket", "pelvic curtain", "tassel earrings", "thigh strap]"],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "nico robin",
      category: "One Piece",
      mainTags: "nico robin, blue eyes, black hair, long hair, one piece",
      enhancers: [
        "[black dress", "zipper", "high collar", "black thighhighs]",
        "[purple skirt", "purple vest", "cross-laced top", "purple hat", "armband", "frills]",
        "[white hat", "white coat", "fur-trimmed coat]",
        "[purple hat", "purple jacket", "white shirt", "purple pants]",
        "[white hat", "yellow tank top", "purple capri pants", "orange belt]",
        "[purple shirt", "black skirt]",
        "[blue zipper vest", "orange sarong]",
        "[eyewear on head", "pink shirt", "high collar", "plunging neckline]",
        "[white sleeveless kimono", "floral print kimono", "black haori", "obi", "side slit]",
        "[yellow shirt", "eyewear on head", "yellow plaid skirt", "wide sleeves", "v-neck]",
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nami (one piece)",
      category: "One Piece",
      mainTags: "nami (one piece), brown eyes, orange hair, short hair, one piece",
      enhancers: [
        "[white shirt", "striped shirt", "orange skirt]",
        "[pink shirt", "orange skirt]",
        "[green tank top", "polka dot shirt", "blue shorts]",
        "[white coat", "fur-trimmed coat", "white vest", "grey skirt", "fur-trimmed skirt]",
        "[red dress", "side slit", "arm tattoo", "fur scarf]",
        "[blue bikini top", "yellow skirt", "brown belt]",
        "[white tank top", "striped shirt", "yellow skirt]",
        "[camouflage bikini", "bikini top only", "brown pants", "yellow belt]",
        "[dark blue shirt", "short sleeves", "blue necktie", "white skirt", "rings on skirt]",
        "[bikini top only", "jeans", "black belt", "bracelet]",
        "[pink tanktop", "striped shorts]",
        "[white halter top", "red skirt", "frills]",
        "[red dress", "white shirt", "puffy short sleeves", "pink back bow]",
        "[short white dress", "long sleeves", "brown belt]",
        "[blue kimono", "orange bow", "blue hair ribbon]",
        "[sleeveless white leotard", "high collar", "pink knee boots", "headphones", "science fiction]",
        "[brown fur vest", "black fur-trimmed cape", "brown miniskirt", "official alternate costume]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "boa hancock",
      category: "One Piece",
      mainTags: "boa hancock, blue eyes, black hair, very long hair, one piece",
      enhancers: [
        "[red sarong", "red crop top", "epaulettes", "plunging neckline", "white cape]",
        "[sleeveless purple dress", "side slit", "skull print", "collar]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "miss valentine",
      category: "One Piece",
      mainTags: "miss valentine, brown eyes, blonde hair, short hair, one piece",
      enhancers: ["[yellow hat", "yellow dress", "print dress", "white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yamato (one piece)",
      category: "One Piece",
      mainTags: "yamato (one piece), blue eyes, white hair, long hair, one piece",
      enhancers: ["[japanese clothes", "sleeveless white kimono", "red hakama", "shimenawa]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "s-snake",
      category: "One Piece",
      mainTags: "s-snake, blue eyes, black hair, long hair, one piece",
      enhancers: ["[white dress", "black wings", "knee boots", "green arm band]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kalifa (one piece)",
      category: "One Piece",
      mainTags: "kalifa (one piece), blue eyes, blonde hair, long hair, one piece",
      enhancers: ["[glasses", "hair bun", "green hairband", "yellow jacket", "high collar jacket", "black skirt]",
        "[glasses", "black dress", "plunging neckline", "fishnet thighhighs", "garter straps", "black gloves", "high collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "uta (one piece)",
      category: "One Piece",
      mainTags: "uta (one piece), purple eyes, red hair, long hair, white hair, split-color hair, one piece",
      enhancers: [
        "[white dress", "black ribbon", "headphones", "pink jacket", "puffy sleeves", "hood down]",
        "[sleeveless white dress", "black ribbon", "single sleeve", "wings", "two-tone wings", "headphones]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "monet (one piece)",
      category: "One Piece",
      mainTags: "monet (one piece), harpy, yellow eyes, green hair, long hair, wings, one piece",
      enhancers: ["[green tanktop", "striped pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "vegapunk lilith",
      category: "One Piece",
      mainTags: "vegapunk lilith, brown eyes, brown hair, short hair, one piece",
      enhancers: ["[pink bodysuit", "purple jacket", "single knee boot", "headphones]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jewelry bonney",
      category: "One Piece",
      mainTags: "jewelry bonney, purple eyes, pink hair, long hair, one piece",
      enhancers: ["[brown cropped jacket", "striped shorts", "belt", "suspenders", "white shirt", "green hat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lust (fma)",
      category: "Fullmetal Alchemist",
      mainTags: "lust (fma), red eyes, black hair, long hair, fullmetal alchemist",
      enhancers: ["[black dress", "plunging neckline", "claws", "detached sleeves", "ouroboros", "chest tattoo", "thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "riza hawkeye",
      category: "Fullmetal Alchemist",
      mainTags: "riza hawkeye, brown eyes, blonde hair, updo, fullmetal alchemist",
      enhancers: [
        "[amestris military uniform", "blue jacket", "blue pants]",
        "[black turtleneck", "long skirt]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "winry rockbell",
      category: "Fullmetal Alchemist",
      mainTags: "winry rockbell, blue eyes, blonde hair, long hair, ponytail, fullmetal alchemist",
      enhancers: [
        "[black pleated skirt", "white tanktop]",
        "[black pleated skirt", "black cropped jacket", "white tanktop]",
        "[red bandana", "purple overalls", "clothes around waist", "black tube top", "brown gloves]",
        "[green bandana", "grey overalls", "clothes around waist", "black tube top]",
        "[grey overalls", "clothes around waist", "black and white crop top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "olivier mira armstrong",
      category: "Fullmetal Alchemist",
      mainTags: "olivier mira armstrong, blue eyes, blonde hair, long hair, muscular female, fullmetal alchemist",
      enhancers: ["[amestris military uniform", "blue jacket", "blue pants", "coat on shoulders", "black fur-trimmed coat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "may chang",
      category: "Fullmetal Alchemist",
      mainTags: "may chang, brown eyes, black hair, long hair, twin hair bun, fullmetal alchemist",
      enhancers: ["[chinese clothes", "pink shirt", "pink sash", "wide sleeves", "white pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "lan fan",
    category: "Fullmetal Alchemist",
    mainTags: "lan fan, black eyes, black hair, single hair bun, fullmetal alchemist",
    enhancers: ["[mask on head", "automail", "mechanical arm", "armor", "shoulder armor", "ninja", "hood down", "black pants", "black fingerless glove]"],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "edward elric",
    category: "Fullmetal Alchemist",
    mainTags: "edward elric, blonde hair, long hair, single braid, yellow eyes, automail, mechanical arm, fullmetal alchemist",
    enhancers: ["[red coat", "black jacket", "black pants", "black shirt", "belt", "single white glove]"],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "alphonse elric",
    category: "Fullmetal Alchemist",
    mainTags: "alphonse elric, fullmetal alchemist",
    enhancers: [
        "[armor", "full armor", "shoulder spikes", "arm tattoo", "red eyes]",
        "[blonde hair", "short hair", "brown eyes", "black suit", "black pants", "black vest", "red necktie", "white shirt]"
    ],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "roy mustang",
    category: "Fullmetal Alchemist",
    mainTags: "roy mustang, black hair, short hair, black eyes, fullmetal alchemist",
    enhancers: [
        "[amestris military uniform", "blue jacket", "blue pants", "black coat", "coat on shoulders", "white gloves]",
        "[amestris military uniform", "blue jacket", "blue pants", "white gloves]"
    ],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "ash ketchum",
      category: "Pokemon (Anime)",
      mainTags: "ash ketchum, brown eyes, black hair, short hair, pokemon (classic anime)",
      enhancers: [
      "[jeans", "white shirt", "blue vest", "hat]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "misty (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "misty (pokemon), green eyes, orange hair, short hair, ponytail, pokemon (anime)",
      enhancers: [
      "[jean shorts", "yellow crop top", "suspenders]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jessie (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "jessie (pokemon), blue eyes, red hair, long hair, pokemon (anime)",
      enhancers: [
      "[white skirt", "black shirt", "shirt under shirt", "team rocket uniform", "team rocket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "james (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "james (pokemon), green eyes, purple hair, short hair, pokemon (anime)",
      enhancers: [
      "[white pants", "black shirt", "shirt under shirt", "team rocket uniform", "team rocket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "joy (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "joy (pokemon), blue eyes, pink hair, short hair, hair loops, pokemon (anime)",
      enhancers: [
      "[nurse", "nurse cap", "apron", "pink dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jenny (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "jenny (pokemon), blue eyes, teal hair, short hair, pokemon (anime)",
      enhancers: [
      "[police woman", "police hat", "pencil skirt", "two-tone shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dawn (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "dawn (pokemon), blue eyes, blue hair, long hair, pokemon (anime)",
      enhancers: [
      "[beanie", "black vest", "pink skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "may (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "may (pokemon), blue eyes, brown hair, long hair, pokemon (anime)",
      enhancers: [
      "[red bandanna", "blue shorts", "shirt under shirt", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jasmine (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "jasmine (pokemon), brown eyes, brown hair, long hair, pokemon (anime)",
      enhancers: [
      "[white dress", "white bow]",
      "[blue dress", "hair ornament", "white sweater", "orange bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lana (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "lana (pokemon), blue eyes, blue hair, short hair, pokemon (anime)",
      enhancers: [
      "[one-piece swimsuit", "swimsuit under clothes", "blue pants", "white crop top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "liko (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "liko (pokemon), blue eyes, black hair, long hair, pokemon (anime)",
      enhancers: [
      "[hair ornament", "blue shorts", "white shirt", "jacket", "yellow bag]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sabrina (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "sabrina (pokemon), purple eyes, green hair, long hair, pokemon (anime)",
      enhancers: [
      "[two-tone latex dress", "thighhigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "iris (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "iris (pokemon), brown eyes, purple hair, very long hair, dark skin, dark-skinned female, pokemon (anime)",
      enhancers: [
      "[crown", "pink dress", "two-tone dress", "bow", "wide sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dot (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "dot (pokemon), purple eyes, purple hair, short hair, pokemon (anime)",
      enhancers: [
      "[striped sweater", "black tanktop", "green pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "coral (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "coral (pokemon), purple eyes, pink hair, long hair, multicolored hair, pokemon (anime)",
      enhancers: [
      "[black crop top", "long sleeves", "black pants", "one thigh cutout", "kneehigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "brock (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "brock (pokemon), brown eyes, brown hair, short hair, spiked hair, dark skin, dark-skinned male, pokemon (anime)",
      enhancers: [
      "[green vest", "orange shirt", "brown pants", "belt pouch]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chloe (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "chloe (pokemon), brown eyes, brown hair, long hair, pokemon (anime)",
      enhancers: [
      "[white dress", "blue trim", "yellow tie", "knee socks", "backpack]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "delia ketchum (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "delia ketchum (pokemon), brown eyes, brown hair, long hair, pokemon (anime)",
      enhancers: [
      "[pink jacket", "open jacket", "yellow shirt", "blue skirt", "yellow belt", "belt buckle]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bonnie (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "bonnie (pokemon), blue eyes, blonde hair, short hair, pokemon (anime)",
      enhancers: [
      "[hair ornament", "brown shirt", "black bow", "black shorts", "shorts under skirt", "white skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bugsy (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "bugsy (pokemon), green eyes, purple hair, short hair, pokemon (anime)",
      enhancers: [
      "[green shirt", "yellow tie", "green shorts", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elesa (pokemon)",
      category: "Pokemon (Anime)",
      mainTags: "elesa (pokemon), blue eyes, blonde hair, long hair, twin tails, pokemon (anime)",
      enhancers: [
      "[two-tone dress", "black pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
    {
      name: "pikachu (cosplay)",
      category: "PokemonCosplay",
      mainTags: "pikachu (cosplay), pokemon",
      enhancers: [
      "[two-tone dress", "tail]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies",
    },
    {
      name: "eevee (cosplay)",
      category: "PokemonCosplay",
      mainTags: "eevee (cosplay), pokemon",
      enhancers: [
      "[two-tone dress", "tail]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies",
    },
    {
      name: "bulma",
      category: "Dragon Ball",
      mainTags: "bulma, blue eyes, blue hair, long hair, dragon ball, dragon ball super",
      enhancers: [
      "[rabbit costume", "black headband", "fake animal ears", "detached collar", "red bow", "black leotard", "blue pantyhose]",
      "[orange dress", "purple neckerchief]",
      "[red jacket", "brown shorts", "white shirt", "hat]",
      "[pink shorts", "pink shirt]",
      "[yellow vest", "black shirt", "pink hairband]",
      "[red panties", "red tank top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "android 18",
      category: "Dragon Ball",
      mainTags: "android 18, blue eyes, blonde hair, short hair, dragon ball, dragon ball super",
      enhancers: [
      "[blue vest", "blue skirt", "black pants", "black shirt]",
      "[black vest", "badge", "white shirt", "jeans]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "android 21",
      category: "Dragon Ball",
      mainTags: "android 21, brown eyes, brown hair, long hair, dragon ball, dragon ball super",
      enhancers: [
      "[two-tone dress", "white lab coat", "black pants", "black sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pan (dragon ball)",
      category: "Dragon Ball",
      mainTags: "pan (dragon ball), brown eyes, black hair, short hair, dragon ball, dragon ball super",
      enhancers: [
      "[pan (xeno) (dragon ball)", "orange headband", "red jacket", "black crop top", "green shorts", "fur-trimmed shorts", "thighhighs]",
      "[white pants", "red shirt", "backpack", "fingerless gloves", "orange bandana]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cheelai",
      category: "Dragon Ball",
      mainTags: "cheelai, purple eyes, white hair, short hair, colored skin, green skin, dragon ball, dragon ball super",
      enhancers: [
      "[saiyan armor", "purple bodysuit", "white breastplate", "scouter", "white gloves", "kneehighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "majin android 21",
      category: "Dragon Ball",
      mainTags: "majin android 21, red eyes, white hair, long hair, colored skin, pink skin, black sclera, dragon ball, dragon ball super",
      enhancers: [
      "[white harem pants", "black tube top", "detached sleeves", "wrist cuffs", "choker]",
      "[{purple skin}", "dark persona", "white harem pants", "black tube top", "detached sleeves", "wrist cuffs", "choker]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kefla (dragon ball)",
      category: "Dragon Ball",
      mainTags: "kefla (dragon ball), green eyes, black hair, short hair, spiked hair, dragon ball, dragon ball super",
      enhancers: [
      "[purple shirt", "purple pants", "bracers]",
      "[--black hair", "green hair", "blue eyes", "purple shirt", "purple pants", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "son goku",
      category: "Dragon Ball",
      mainTags: "son goku, black eyes, black hair, short hair, spiked hair, dragon ball, dragon ball super",
      enhancers: [
        "orange dougi", "super saiyan", "super saiyan 3", "super saiyan blue"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chi-chi (dragon ball)",
      category: "Dragon Ball",
      mainTags: "chi-chi (dragon ball), black eyes, black hair, long hair, dragon ball, dragon ball z",
      enhancers: [
      "[purple dress", "orange capelet]",
      "[armor", "helmet", "boobplate]",
      "[yellow dress", "white sleeves", "blue capelet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "vegeta",
      category: "Dragon Ball",
      mainTags: "vegeta, black eyes, black hair, short hair, spiked hair, dragon ball, dragon ball super",
      enhancers: [
      "[blue bodysuit, saiyan armor]", "super saiyan", "super saiyan 3", "super saiyan blue", "[majin vegeta", "face mark]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "piccolo",
      category: "Dragon Ball",
      mainTags: "piccolo, black eyes, bald, colored skin, green skin, dragon ball, dragon ball super",
      enhancers: [
      "[jumpsuit", "turban]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "son gohan",
      category: "Dragon Ball",
      mainTags: "son gohan, black eyes, black hair, short hair, spiked hair, dragon ball, dragon ball super",
      enhancers: [
      "[purple jumpsuit", "orange sash]", "super saiyan", "super saiyan blue"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "trunks (dragon ball)",
      category: "Dragon Ball",
      mainTags: "trunks (dragon ball), blue eyes, purple hair, short hair, dragon ball, dragon ball z",
      enhancers: [
      "[black pants", "black shirt", "cropped jacket", "belt]",
      "[super saiyan", "spiked hair]",
      "[super saiyan 3", "spiked hair]",
      "[super saiyan blue", "spiked hair]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gogeta",
      category: "Dragon Ball",
      mainTags: "gogeta, black eyes, black hair, short hair, spiked hair, vest, pants, sash, dragon ball, dragon ball gt",
      enhancers: [
      "[--black hair", "super saiyan", "yellow hair]",
      "[--black hair", "super saiyan 3", "yellow hair]",
      "[--black hair", "super saiyan blue", "blue hair]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tokisaki kurumi",
      category: "Date a Live",
      mainTags: "tokisaki kurumi, red eyes, black hair, long hair, twintails, date a live",
      enhancers: [
        "[raizen high school uniform", "black jacket", "white shirt", "blue skirt", "red bow]",
        "[frilled red dress", "red ribbon", "headdress", "elbow gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hoshimiya mukuro",
      category: "Date a Live",
      mainTags: "hoshimiya mukuro, yellow eyes, blonde hair, very long hair, date a live",
      enhancers: [
        "[frilled blue dress", "hair bows", "puffy sleeves", "ribbon]",
        "[pink dress", "greaves", "black gloves]",
        "[red dress", "pelvic curtain", "elbow gloves", "arm guards", "thigh boots", "thigh straps]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "himekawa yoshino",
      category: "Date a Live",
      mainTags: "himekawa yoshino, blue eyes, blue hair, long hair, date a live",
      enhancers: [
        "[white sun dress", "short dress", "pink trim", "puffy short sleeves", "sun hat]",
        "[white dress", "green coat", "animal hood", "rabbit ears]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kyouno natsumi",
      category: "Date a Live",
      mainTags: "kyouno natsumi, green eyes, green hair, long hair, date a live",
      enhancers: [
        "[orange crop top", "off shoulder", "suspenders", "black bloomers", "ba wings", "striped thighhighs", "uneven legwear", "witch hat]",
        "[kyouno natsumi (adult)", "bodystocking", "bodysuit", "black skirt", "halter top", "see-through clothes", "witch hat", "black capelet", "high collar]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "izayoi miku",
      category: "Date a Live",
      mainTags: "izayoi miku, purple eyes, purple hair, long hair, date a live",
      enhancers: [
        "[frilled purple dress", "pink shirt", "yellow frills]",
        "[yellow skirt", "white elbow gloves", "layered skirt", "see-through clothes", "white pantyhose]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sonogami rinne",
      category: "Date a Live",
      mainTags: "sonogami rinne, brown eyes, pink hair, short hair, date a live",
      enhancers: ["[blue pleated skirt", "white shirt", "sweater vest", "neck ribbon]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tobiichi origami",
      category: "Date a Live",
      mainTags: "tobiichi origami, blue eyes, white hair, short hair, date a live",
      enhancers: [
        "[raizen high school uniform", "blue pleated skirt", "black jacket]",
        "[white dress", "white bow", "white elbow gloves", "gold crown", "gold trim", "over-kneehighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "asuna (sao)",
      category: "Sword Art Online",
      mainTags: "asuna (sao), brown eyes, orange hair, long hair, sword art online",
      enhancers: [
      "[knights of blood uniform (sao)", "armor", "white dress]",
      "[asuna (sao-alo)", "blue hair", "pointy ears", "white dress", "detached sleeves]",
      "[asuna (stacia) (sao)", "hair ribbons", "armored dress", "hip armor]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kirito",
      category: "Sword Art Online",
      mainTags: "kirito, black eyes, black hair, short hair, sword art online",
      enhancers: [
      "[black shirt", "black pants", "black coat]",
      "[kirito_(sao-ggo)", "very long hair", "black jacket", "breastplate", "fingerless gloves]",
      "[kirito_(sao-alo)", "pointy ears", "fairy wings", "multiple wings", "black jacket", "black pants", "black shirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kirigaya suguha",
      category: "Sword Art Online",
      mainTags: "kirigaya suguha, brown eyes, black hair, short hair, sword art online",
      enhancers: [
        "grey school uniform", "[red jacket", "blue shorts", "blue shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sinon",
      category: "Sword Art Online",
      mainTags: "sinon, blue eyes, blue hair, short hair, sword art online",
      enhancers: [
      "[green pants", "green jacket", "white scarf", "black shorts]",
      "[sinon (sao-alo)", "cat girl", "cat ears", "cat tail", "black shorts", "green jacket", "breastplate]",
      "[sinon (solus)", "blue armor", "breastplate", "single shoulder pad", "cape", "sword wing]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yuuki (sao)",
      category: "Sword Art Online",
      mainTags: "yuuki (sao), purple eyes, purple hair, short hair, sword art online",
      enhancers: [
      "[breastplate", "detached sleeves", "belts", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yui (sao)",
      category: "Sword Art Online",
      mainTags: "yui (sao), brown eyes, black hair, short hair, sword art online",
      enhancers: [
        "white dress", "[yui (sao-alo)", "pointy ears", "fairy wings", "pink dress", "detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mito (sao)",
      category: "Sword Art Online",
      mainTags: "mito (sao), purple eyes, purple hair, long hair, sword art online",
      enhancers: [
      "[white cape, bracers, purple dress, black shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "silica",
      category: "Sword Art Online",
      mainTags: "silica, brown eyes, brown hair, long hair, twintails, sword art online",
      enhancers: [
      "[red coat, black skirt, thighhighs, fingerless gloves]",
      "[silica (sao-alo)", "cat girl", "cat ears", "cat tail", "breastplate", "blue jacket", "black skirt", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lisbeth (sao)",
      category: "Sword Art Online",
      mainTags: "lisbeth (sao), brown eyes, pink hair, short hair, sword art online",
      enhancers: [
      "[breastplate, red maid dress]",
      "[lisbeth (sao-alo)", "breastplate", "white pants", "gauntlets", "single shoulder pad]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "leafa (sao)",
      category: "Sword Art Online",
      mainTags: "leafa (sao), green eyes, blonde hair, long hair, sword art online",
      enhancers: [
      "[green jacket, white shirt, brown corset, thigh cutouts]",
      "[leafa (terraria) (sao)", "detached sleeves", "breastplate", "green dress", "white garter straps]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "alice zuberg",
      category: "Sword Art Online",
      mainTags: "alice zuberg, blue eyes, blonde hair, long hair, sword art online",
      enhancers: [
      "[armor", "armored dress]",
      "[black eyepatch", "blue dress", "brown coat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elizabeth thompson",
      category: "Soul Eater",
      mainTags: "elizabeth thompson, blue eyes, brown hair, long hair, soul eater",
      enhancers: ["cowboy hat"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "patricia thompson",
      category: "Soul Eater",
      mainTags: "patricia thompson, blue eyes, blonde hair, short hair, soul eater",
      enhancers: ["cowboy hat"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "maka albarn",
      category: "Soul Eater",
      mainTags: "maka albarn, green eyes, blonde hair, long hair, ponytail, soul eater",
      enhancers: [
      "[black coat", "white shirt", "necktie", "plaid skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "soul evans",
      category: "Soul Eater",
      mainTags: "soul evans, red eyes, white hair, short hair, soul eater",
      enhancers: [
      "[headband, two-tone jacket, red pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "marie mjolnir",
      category: "Soul Eater",
      mainTags: "marie mjolnir, yellow eyes, blonde hair, short hair, soul eater",
      enhancers: [
      "[eyepatch", "black shirt", "black wide sleeves", "yellow dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "crona (soul eater)",
      category: "Soul Eater",
      mainTags: "crona (soul eater), blue eyes, pink hair, short hair, soul eater",
      enhancers: [
      "[black dress", "high collar", "wrist cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: false,
      mediaType: "Shows or Movies"
  },
  {
      name: "death the kid",
      category: "Soul Eater",
      mainTags: "death the kid, yellow eyes, black hair, short hair, soul eater",
      enhancers: [
      "[asymmetric hair", "formal clothes", "bolo tie]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "blair (soul eater)",
      category: "Soul Eater",
      mainTags: "blair (soul eater), yellow eyes, purple hair, long hair, soul eater",
      enhancers: [
      "[witch hat", "wide sleeves", "black dress", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nakatsukasa tsubaki",
      category: "Soul Eater",
      mainTags: "nakatsukasa tsubaki, brown eyes, black hair, long hair, ponytail, ninja, soul eater",
      enhancers: [
      "[white dress", "single side slit", "detached sleeves", "star symbol]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "black star",
      category: "Soul Eater",
      mainTags: "black star, gray eyes, blue hair, short hair, soul eater",
      enhancers: [
      "[high collar", "sleeveless black shirt", "two-tone pants", "fingerless gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "medusa gorgon",
      category: "Soul Eater",
      mainTags: "medusa gorgon, yellow eyes, blonde hair, long hair, soul eater",
      enhancers: [
      "[hooded leotard", "black pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "midoriya izuku",
      category: "My Hero Academia",
      mainTags: "midoriya izuku, green eyes, green hair, short hair, boku no hero academia",
      enhancers: [
      "[jumpsuit", "belt pouch", "gloves]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "midnight (boku no hero academia)",
      category: "My Hero Academia",
      mainTags: "midnight (boku no hero academia), blue eyes, purple hair, long hair, boku no hero academia",
      enhancers: [
      "[white bodysuit", "black leotard", "thighhighs]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yaoyorozu momo",
      category: "My Hero Academia",
      mainTags: "yaoyorozu momo, gray eyes, black hair, long hair, ponytail, boku no hero academia",
      enhancers: [
      "[red leotard", "high collar", "yellow belts]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shiozaki ibara",
      category: "My Hero Academia",
      mainTags: "shiozaki ibara, green eyes, green hair, long hair, boku no hero academia",
      enhancers: ["u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mirko",
      category: "My Hero Academia",
      mainTags: "mirko, red eyes, white hair, long hair, dark skin, dark-skinned female, rabbit girl, rabbit ears, boku no hero academia",
      enhancers: [
      "[crescent print", "white leotard", "thighhighs", "fur collar]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bakugou katsuki",
      category: "My Hero Academia",
      mainTags: "bakugou katsuki, red eyes, blonde hair, short hair, spiked hair, boku no hero academia",
      enhancers: [
      "[black sleeveless shirt", "gloves", "black pants", "belt", "collar", "eye mask]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "toga himiko",
      category: "My Hero Academia",
      mainTags: "toga himiko, yellow eyes, blonde hair, long hair, double bun, boku no hero academia",
      enhancers: [
      "[mask", "sweater", "sleeves past wrists", "red kerchief", "blue skirt", "thigh holders", "tank (container)s]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "asui tsuyu",
      category: "My Hero Academia",
      mainTags: "asui tsuyu, green eyes, green hair, long hair, boku no hero academia",
      enhancers: [
      "[green bodysuit", "gloves", "goggles on head]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hawks (boku no hero academia)",
      category: "My Hero Academia",
      mainTags: "hawks (boku no hero academia), yellow eyes, blonde hair, short hair, boku no hero academia",
      enhancers: [
      "[fur-trimmed jacket", "glasses", "black shirt", "gloves", "yellow pants]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "endeavor (boku no hero academia)",
      category: "My Hero Academia",
      mainTags: "endeavor (boku no hero academia), blue eyes, red hair, short hair, boku no hero academia",
      enhancers: [
      "[superhero costume", "fingerless gloves", "shoulder armor]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ashido mina",
      category: "My Hero Academia",
      mainTags: "ashido mina, yellow eyes, pink hair, short hair, colored skin, pink skin, horns, boku no hero academia",
      enhancers: [
      "[multicolored sleeveless leotard", "fur-trimmed vest", "eye mask]",
      "[purple tank top", "denim shorts]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jirou kyoka",
      category: "My Hero Academia",
      mainTags: "jirou kyoka, purple eyes, purple hair, short hair, boku no hero academia",
      enhancers: [
      "[pink shirt", "black pants", "white gloves", "black jacket]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hado nejire",
      category: "My Hero Academia",
      mainTags: "hado nejire, blue eyes, blue hair, long hair, boku no hero academia",
      enhancers: [
      "[bodysuit", "gloves", "wrist cuffs]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hagakure toru",
      category: "My Hero Academia",
      mainTags: "hagakure toru, green eyes, green hair, long hair, messy hair, ahoge, boku no hero academia",
      enhancers: ["grey gloves", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kirishima eijirou",
      category: "My Hero Academia",
      mainTags: "kirishima eijirou, red eyes, red hair, short hair, spiked hair, boku no hero academia",
      enhancers: [
      "[black pants", "black sleeves", "headgear", "belt", "shoulder pads]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "all might",
      category: "My Hero Academia",
      mainTags: "all might, blue eyes, blonde hair, short hair, boku no hero academia",
      enhancers: [
      "[muscular male", "superhero costume]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yagi toshinori",
      category: "My Hero Academia",
      mainTags: "yagi toshinori, blue eyes, blonde hair, long hair, boku no hero academia",
      enhancers: [
      "[black jacket", "black necktie", "white shirt", "black pants]",
      "[loose white t-shirt", "green pants", "belt buckle]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eraser head (boku no hero academia)",
      category: "My Hero Academia",
      mainTags: "eraser head (boku no hero academia), gray eyes, black hair, long hair, boku no hero academia",
      enhancers: [
      "[black jacket", "black pants", "scarf", "utility belt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dabi (boku no hero academia)",
      category: "My Hero Academia",
      mainTags: "dabi (boku no hero academia), blue eyes, black hair, short hair, boku no hero academia",
      enhancers: [
      "[black jacket", "white shirt", "black pants", "belt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eri (boku no hero academia)",
      category: "Soul Eater",
      mainTags: "eri (boku no hero academia), red eyes, gray hair, long hair, horn, boku no hero academia",
      enhancers: [
      "[red dress", "white shirt", "black leggings", "shoulder bag]",
      "[long short sleeve white dress", "arm bandages", "leg bandages]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hatsume mei",
      category: "My Hero Academia",
      mainTags: "hatsume mei, yellow eyes, pink hair, short hair, boku no hero academia",
      enhancers: [
      "[black tanktop", "black pants", "gloves", "goggles on head]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mount lady",
      category: "My Hero Academia",
      mainTags: "mount lady, blue eyes, blonde hair, long hair, boku no hero academia",
      enhancers: [
      "[superhero costume", "domino mask]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "utsushimi kemii",
      category: "My Hero Academia",
      mainTags: "utsushimi kemii, brown eyes, blonde hair, long hair, boku no hero academia",
      enhancers: [
      "[china dress", "domino mask", "belt]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kendo itsuka",
      category: "My Hero Academia",
      mainTags: "kendo itsuka, green eyes, orange hair, short hair, ponytail, boku no hero academia",
      enhancers: [
      "[black bodysuit", "police hat", "wrist cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bakugou mitsuki",
      category: "My Hero Academia",
      mainTags: "bakugou mitsuki, red eyes, blonde hair, short hair, spikey hair, boku no hero academia",
      enhancers: [
      "[purple sweater", "white shirt", "black skirt]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lady nagant",
      category: "My Hero Academia",
      mainTags: "lady nagant, blue eyes, purple hair, long hair, boku no hero academia",
      enhancers: [
      "[purple dress", "belt", "knee boots]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "uraraka ochako",
      category: "My Hero Academia",
      mainTags: "uraraka ochako, brown eyes, brown hair, short hair, boku no hero academia",
      enhancers: [
      "[headgear", "wrist cuffs", "bodysuit]", "u.a. school uniform", "[u.a. school uniform", "grey jacket]", "u.a. gym uniform", "[u.a. cheerleader uniform", "orange shirt", "orange skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ryuukyuu",
      category: "My Hero Academia",
      mainTags: "ryuukyuu, red eyes, blonde hair, long hair, boku no hero academia",
      enhancers: [
      "[mask over one eye", "head wings", "red dress", "detached sleeves", "side slit", "thigh holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "la brava",
      category: "My Hero Academia",
      mainTags: "la brava, brown eyes, red hair, long hair, twin tails, boku no hero academia",
      enhancers: [
      "[white shirt", "blue vest", "pink bow", "white puffy pants", "gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "c.c.",
      category: "Code Geass",
      mainTags: "c.c., yellow eyes, green hair, long hair, code geass",
      enhancers: [
      "[white bodysuit", "sleeves past wrists", "straps]",
      "[white shorts", "black dress", "thigh boots", "high collar", "detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kouzuki kallen",
      category: "Code Geass",
      mainTags: "kouzuki kallen, blue eyes, red hair, short hair, code geass",
      enhancers: [
      "[red headband", "red bodysuit", "silver jacket", "knee boots]",
      "[red headband", "red crop top", "brown vest", "brown shorts", "detached sleeves", "red thighhighs]",
      "[yellow jacket", "black skirt", "blue thighhighs", "necktie]",
      "[red headband", "shiny black jacket", "black shorts", "thigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "inoue orihime",
      category: "Bleach",
      mainTags: "inoue orihime, brown eyes, orange hair, long hair, bleach",
      enhancers: [
        "karakura high school uniform", "[karakura high school uniform", "grey jacket]",
      "[white dress", "two-sided cape]",
      "[pink shirt", "grey pants with red stripe]",
      "[sleeveless pink hoodie", "brown shorts", "blue thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tsunade (naruto)",
      category: "Naruto",
      mainTags: "tsunade (naruto), brown eyes, blonde hair, long hair, naruto (series)",
      enhancers: [
      "[green jacket", "grey shirt", "blue pants", "blue belt]",
      "[aged down, ponytail, green dress", "bracers]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yamanaka ino",
      category: "Naruto",
      mainTags: "yamanaka ino, green eyes, blonde hair, long hair, ponytail, naruto (series)",
      enhancers: [
      "[purple crop top", "purple skirt", "knee pads", "elbow pads]",
      "[puffy green vest", "black shirt", "black pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mitarashi anko",
      category: "Naruto",
      mainTags: "mitarashi anko, brown eyes, purple hair, short hair, naruto (series)",
      enhancers: [
      "[trench coat, orange skirt, fishnet top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "haruno sakura",
      category: "Naruto",
      mainTags: "haruno sakura, green eyes, pink hair, long hair, naruto (series)",
      enhancers: [
      "[red headband", "red shirt", "black shorts", "pink skirt", "gloves", "thigh holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hyuuga hinata",
      category: "Naruto",
      mainTags: "hyuuga hinata, white eyes, black hair, long hair, naruto (series)",
      enhancers: [
      "[grey shirt", "grey shorts", "thighhighs", "thigh holster]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "uzumaki kushina",
      category: "Naruto",
      mainTags: "uzumaki kushina, blue eyes, red hair, long hair, naruto (series)",
      enhancers: ["[green pinafore dress", "white shirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "uchiha sarada",
      category: "Naruto",
      mainTags: "uchiha sarada, black eyes, black hair, short hair, naruto (series)",
      enhancers: [
        "[glasses", "purple headband", "red shirt", "grey shorts", "thigh pouch", "detached sleeves]",
        "[glasses", "black choker", "black coat", "two-sided coat", "single thighhigh", "fishnet thighhigh", "thigh boots", "red belt", "strapless black leotard", "leotard under clothes", "black skirt]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "makima (chainsaw man)",
      category: "Chainsaw Man",
      mainTags: "makima (chainsaw man), yellow eyes, red hair, long hair, single braid, chainsaw man",
      enhancers: ["[black pants", "white shirt", "black tie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "reze (chainsaw man)",
      category: "Chainsaw Man",
      mainTags: "reze (chainsaw man), green eyes, purple hair, short hair, chainsaw man",
      enhancers: ["[white shirt", "blue ribbon", "blue choker", "black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yoru (chainsaw man)",
      category: "Chainsaw Man",
      mainTags: "yoru (chainsaw man), red eyes, black hair, long hair, chainsaw man",
      enhancers: ["[fourth east high school uniform", "sleeveless black dress", "black ribbon", "white shirt", "kneehighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "himeno (chainsaw man)",
      category: "Chainsaw Man",
      mainTags: "himeno (chainsaw man), brown eyes, black hair, short hair, eyepatch, chainsaw man",
      enhancers: [
        "[black suit", "suit jacket", "white shirt", "black necktie", "black pants]",
        "[white panties", "blue tanktop]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "power (chainsaw man)",
      category: "Chainsaw Man",
      mainTags: "power (chainsaw man), yellow eyes, blonde hair, long hair, red horns, chainsaw man",
      enhancers: ["[black capri pants", "white shirt", "black necktie", "blue coat]",
      "[red longsleeve shirt", "blue shorts]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "higashiyama kobeni",
      category: "Chainsaw Man",
      mainTags: "higashiyama kobeni, brown eyes, brown hair, short hair, ponytail, chainsaw man",
      enhancers: ["[black suit", "suit jacket", "white shirt", "black necktie", "black pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "esdeath",
      category: "Akame Ga Kill!",
      mainTags: "esdeath, blue eyes, blue hair, very long hair, akame ga kill!",
      enhancers: ["[military uniform", "military hat", "peaked cap", "thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akame (akame ga kill!)",
      category: "Akame Ga Kill!",
      mainTags: "akame (akame ga kill!), red eyes, black hair, very long hair, akame ga kill!",
      enhancers: ["[black pleated skirt", "sleeveless black shirt", "red necktie", "collar", "black gloves", "red belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "najenda (akame ga kill!)",
      category: "Akame Ga Kill!",
      mainTags: "najenda (akame ga kill!), purple eyes, silver hair, short hair, prosthetic arm, eyepatch, akame ga kill!",
      enhancers: ["[black jacket", "black pants", "cross-laced clothes", "choker]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mine (akame ga kill!)",
      category: "Akame Ga Kill!",
      mainTags: "mine (akame ga kill!), pink eyes, pink hair, long hair, twintails, akame ga kill!",
      enhancers: ["[pink shirt", "pink capelet", "center frills", "black thighband pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chelsea (akame ga kill!)",
      category: "Akame Ga Kill!",
      mainTags: "chelsea (akame ga kill!), brown eyes, red hair, long hair, akame ga kill!",
      enhancers: ["[black hairband", "white shirt", "black vest", "red pleated skirt", "red ribbon", "headphones]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "leone (akame ga kill!)",
      category: "Akame Ga Kill!",
      mainTags: "leone (akame ga kill!), yellow eyes, blonde hair, long hair, akame ga kill!",
      enhancers: [
        "[white scarf", "black tube top", "white chaps", "black panties", "belt", "detached sleeves]",
        "[animal ears", "lion ears", "animal hands", "lion tail", "white scarf", "black tube top", "white chaps", "black panties", "belt", "detached sleeves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hatsune miku",
      category: "Other",
      mainTags: "hatsune miku, blue eyes, blue hair, long hair, twin tails",
      enhancers: ["[black skirt","white sleeveless shirt","detached sleeves","blue necktie","thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hinata hajime",
      category: "Danganronpa",
      mainTags: "hinata hajime, brown eyes, brown hair, short hair, spiked hair, danganronpa (series)",
      enhancers: ["[white shirt","black necktie","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "erza scarlet",
      category: "Fairy Tail",
      mainTags: "erza scarlet, brown eyes, red hair, long hair, fairy tail",
      enhancers: [
        "[armored dress","blue skirt","pauldrons","gauntlets","knee boots]",
        "[chest sarashi","red pants","ponytail","white straps", "official alternate costume]",
        "[japanese clothes","purple kimono","pelvic curtain","pink thighhighs","bandaged arms","official alternate costume]",
        "[red highleg leotard","black pantyhose","nontraditional playboy bunny","fake animal ears","rabbit ears","wrist cuffs","detached collar]",
        "[maid","red vest","white shirt","red skirt","white thighhighs","maid headdress","white gloves","puffy short sleeves","waist apron","twintails","fairy tail logo","arm tattoo]",
        "[ponytail","black bikini","side-tie bikini bottom]",
        "towel",
        "[black latex bodysuit","hair flower]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lucy heartfilia",
      category: "Fairy Tail",
      mainTags: "lucy heartfilia, brown eyes, blonde hair, long hair, fairy tail",
      enhancers: [
        "[side ponytail","blue ribbon","two-tone sleeveless shirt","collar","blue skirt","brown belt","knee boots]",
        "[twintails","black skirt","two-tone tube top","blue vest","detached sleeves","puffy sleeves","thighhighs","white belt]",
        "[high ponytail","single detached sleeve","black sleeve","blue sleeveless shirt","collar","white skirt","belt pouch","thigh boots]",
        "[double bun","asymmetrical legwear","cow print bikini","bikini top only","detached sleeves","cow print sleeves","fingerless gloves","black pants","belt","bell collar","official alternate costume]",
        "[fake animal ears","rabbit ears","pink leotard","black pantyhose","detached collar","wrist cuffs","official alternate costume]",
        "[fake animal ears","rabbit ears","red leotard","white trim","pantyhose","detached collar","wrist cuffs","official alternate costume]",
        "[side ponytail","purple ribbon","purple tube top","white winter coat","fur-trimmed coat","black skirt","white belt","pantyhose","knee boots","cross-laced footwear","official alternate costume]",
        "[updo","short black dress","v-neck","white trim","frills","white bow","white belt","belt buckle","heart necklace","official alternate costume]",
        "[low twintails","sleeveless blue shirt","pink neck bow","brooch","blue skirt","blue thighhighs","frilled legwear","frilled wrist cuffs","official alternate costume]",
        "[white bikini","side-tie bikini bottom","halterneck","pink floral print","print bikini","official alternate costume]",
        "[long twintails","pink bikini","bikini top only","short pelvic curtain","gold thighlet","print bikini","floral print","choker","hair ornament","official alternate costume]",
        "[twintails","maid","maid headress","black vest","white shirt","puffy short sleeves","black skirt","waist apron","frilled wrist cuffs","lace-trimmed thighhighs","white thighhighs","black neck ribbon","official alternate costume]",
        "[fake animal ears","cat ears","cat tail","black short shorts","black tube top","cross-laced clothes","red belt","pink trim","neck bell","official alternate costume]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "wendy marvell",
      category: "Fairy Tail",
      mainTags: "wendy marvell, brown eyes, blue hair, long hair, fairy tail",
      enhancers: [
        "[twintails", "black pleated skirt","red jacket","white shirt","yellow bow","black thighhighs]",
        "[twintails","green sleeveless dress","halterneck","arm bands]",
        "[twintails","black latex bodysuit","metal collar","official alternate costume]",
        "[twintails","green plaid bikini","halterneck]",
        "[ponytail","yellow hair bow","green bikini","bikini skirt","official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "juvia lockser",
      category: "Fairy Tail",
      mainTags: "juvia lockser, blue eyes, blue hair, long hair, fairy tail",
      enhancers: [
        "[blue skirt","green shirt","blue jacket","fur-trimmed jacket","blue hat","thigh boots","waist sash]",
        "[blue dress","blue hat","hat flower","blue capelet","fur trim","thigh boots]",
        "[purple bikini","polka dot","white frilled trim","front-tie top","bikini skirt]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lisanna strauss",
      category: "Fairy Tail",
      mainTags: "lisanna strauss, blue eyes, white hair, short hair, fairy tail",
      enhancers: [
        "[sleeveless red dress","pink shirt collar","detached pink sleeves","puffy sleeves","kneehighs","white ribbon]",
        "[animal girl","cat girl","white cat ears","animal feet","cat paws","cat tail","white bikini","white tiger print","white fairy tail logo on thigh]",
        "[purple bikini","frilled bikini top","halter neck","side-tie bikini bottom","fairy tail logo on thigh]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cana alberona",
      category: "Fairy Tail",
      mainTags: "cana alberona, brown eyes, brown hair, long hair, fairy tail",
      enhancers: ["[brown pants","black frilled bikini","strapless bikini","bikini top only]",
        "[brown pants","teal bikini","bikini top only","arm bands","multiple bracelets]",
        "[striped bikini","halterneck","red bikini","green stripes","arm bands","multiple bracelets]",
        "[white shirt","center frills","pink skirt","puffy sleeves","pink ribbon","yellow hat","hat flower","rose]",
        "black latex bodysuit",
        "[checkered bikini","blue and white bikini","bikini top only","brown capri pants","red floral print skirt","side slit","arm bands","multiple bracelets]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mirajane strauss",
      category: "Fairy Tail",
      mainTags: "mirajane strauss, blue eyes, white hair, long hair, fairy tail",
      enhancers: [
        "[black turtleneck","long white skirt]",
        "[long black dress","frilled dress","white frills","off shoulder","neck ribbon]",
        "[long red dress","pink bow on chest","pink bow on hip","necklace","bracelet]",
        "[teal bikini","o-ring bikini","o-ring bottom","o-ring top","white trim]",
        "[black leotard","collared leotard","sleeveless leotard","thighhigh boots","zipper]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "levy mcgarden",
      category: "Fairy Tail",
      mainTags: "levy mcgarden, brown eyes, blue hair, short hair, fairy tail",
      enhancers: [
        "[yellow hairband","flower ornament","orange dress","detached sleeves","halterneck]",
        "[yellow hairband","striped bikini","red bikini","white bikini","halterneck]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mavis vermilion",
      category: "Fairy Tail",
      mainTags: "mavis vermilion, green eyes, blonde hair, long hair, fairy tail",
      enhancers: [
        "[pink dress","white capelet","pink ribbon","wing hair ornament]",
        "[striped bikini","blue bikini","yellow bikini","halterneck]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "irene belserion",
      category: "Fairy Tail",
      mainTags: "irene belserion, red eyes, red hair, absurdly long hair, multiple braids, fairy tail",
      enhancers: ["[hat","underboob","heart print","multiple braids","black cape","black gloves","pelvic curtain","thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "natsu dragneel",
    category: "Fairy Tail",
    mainTags: "natsu dragneel, pink hair, spiked hair, yellow eyes, fairy tail",
    enhancers: ["[black vest","scarf","white pants]"],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "gray fullbuster",
    category: "Fairy Tail",
    mainTags: "gray fullbuster, black hair, black eyes, short hair, fairy tail",
    enhancers: ["[topless male","black pants","belt","belt chain]"],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "brandish mu",
    category: "Fairy Tail",
    mainTags: "brandish mu, green hair, short hair, green eyes, fairy tail",
    enhancers: ["[blunt bangs","purple fur trim","long coat","black and gold bikini","halterneck","collar","hair ornament]"],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "xenovia quarta",
      category: "Highschool DxD",
      mainTags: "xenovia quarta, blue eyes, blue hair, streaked hair, short hair, high school dxd",
      enhancers: [
        "[kuoh academy school uniform","pink pleated skirt","white shirt","black corset","black ribbon","kneehighs]",
        "[kuoh academy school uniform","pink pleated skirt","white shirt","black corset","black capelet","black ribbon","kneehighs]",
        "[black bodysuit","black shoulder armor","black thighhighs","zettai ryouiki","short sleeves","fingerless elbow gloves","black gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rias gremory",
      category: "Highschool DxD",
      mainTags: "rias gremory, blue eyes, red hair, long hair, high school dxd",
      enhancers: [
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon","black capelet]",
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "himejima akeno",
      category: "Highschool DxD",
      mainTags: "himejima akeno, purple eyes, black hair, long hair, ponytail, high school dxd",
      enhancers: [
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon","black capelet]",
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kuroka (high school dxd)",
      category: "Highschool DxD",
      mainTags: "kuroka (high school dxd), yellow eyes, black hair, long hair,  animal girl, cat girl, cat ears, cat tail, multiple tails, high school dxd",
      enhancers: ["[black kimono","off shoulder","yellow obi","hair rings]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rossweisse",
      category: "Highschool DxD",
      mainTags: "rossweisse, blue eyes, silver hair, long hair, high school dxd",
      enhancers: [
        "[grey pants suit","grey pants","grey suit jacket","white shirt]",
        "[armored dress","armor","boobplate","detached sleeves","gauntlets","faulds","gold trim","black leotard","black thighhighs","fingerless gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "toujou koneko",
      category: "Highschool DxD",
      mainTags: "toujou koneko, yellow eyes, white hair, short hair, high school dxd",
      enhancers: [
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon","black capelet]",
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon]",
        "[animal girl","cat ears","cat tail","multiple tails","kuoh academy school uniform","pink skirt","white shirt","black corset","back ribbon]",
        "[animal girl","cat ears","cat tail","multiple tails","frilled kimono","white kimono","kimono skirt","black obi","blue pleated skirt","medium breasts","frilled thighhighs]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shidou irina",
      category: "Highschool DxD",
      mainTags: "shidou irina, purple eyes, brown hair, long hair, twin tails, high school dxd",
      enhancers: [
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon","black capelet]",
        "[kuoh academy school uniform","pink skirt","black corset","white shirt","black ribbon]",
        "[sleeveless black bodysuit","black elbow gloves","thighhighs","zettai ryouiki","underbust strap]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shiota nagisa",
      category: "Asssassination Classroom",
      mainTags: "shiota nagisa, blue eyes, blue hair, short hair, twintails, ansatsu kyoushitsu",
      enhancers: ["[kunugigaoka middle school uniform","black necktie","white shirt","blue vest]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "irina jelavic",
      category: "Asssassination Classroom",
      mainTags: "irina jelavic, blue eyes, blonde hair, very long hair, ansatsu kyoushitsu",
      enhancers: ["[white suit","white skirt","black tube top","choker","black belt","sheer pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "okuda manami",
      category: "Asssassination Classroom",
      mainTags: "okuda manami, brown eyes, brown hair, short hair, twin braids, ansatsu kyoushitsu",
      enhancers: ["[jimiko","glasses","kunugigaoka middle school uniform","grey pleated skir","grey vest","black necktie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kayano kaede",
      category: "Asssassination Classroom",
      mainTags: "kayano kaede, yellow eyes, green hair, short hair, twintails, ansatsu kyoushitsu",
      enhancers: ["[kunugigaoka middle school uniform","grey pleated skir","grey vest","black necktie","green knee socks]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shiro (no game no life)",
      category: "No Game, No Life",
      mainTags: "shiro (no game no life), blue eyes, multicolored hair, absurdly long hair, no game no life",
      enhancers: ["[purple sailor dress","orange neckerhief","white sailor collar","long sleeves","wide sleeves","sleeves past wrists","oversized clothes","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jibril (no game no life)",
      category: "No Game, No Life",
      mainTags: "jibril (no game no life), pink eyes, pink hair, gradient hair, very long hair, no game no life",
      enhancers: ["[single detached sleeve","single purple elbow glove","purple bikini","bikini bottom only","white crop top","angel wings","low wings","halo","sarong]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hatsuse izuna",
      category: "No Game, No Life",
      mainTags: "hatsuse izuna, red eyes, purple hair, short hair, purple fox ears, purple fox tail",
      enhancers: ["[pink kimono","yellow haori","yellow hairband","red bow]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kamado nezuko",
      category: "Demon Slayer",
      mainTags: "kamado nezuko, pink eyes, black hair, two-tone hair, long hair, kimetsu no yaiba",
      enhancers: [
        "[pink kimono","pink ribbon","checkered sash","black coat","bamboo gag]",
        "[demon girl","single demon horn","cracked skin","pink kimono","pink ribbon","checkered sash","black coat]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kanroji mitsuri",
      category: "Demon Slayer",
      mainTags: "kanroji mitsuri, green eyes, pink hair, gradient hair,long hair, twin braids, kimetsu no yaiba",
      enhancers: ["[demon slayer uniform","black skirt","white shirt","black jacket","green thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kochou shinobu",
      category: "Demon Slayer",
      mainTags: "kochou shinobu, purple eyes, black hair, gradient hair,short hair, kimetsu no yaiba",
      enhancers: ["[demon slayer uniform","black jacket","black pants","butterfly hair ornament","butterfly cloak]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "kamado tanjirou",
    category: "Demon Slayer",
    mainTags: "kamado tanjirou, red eyes, black hair, gradient hair, scar on face, kimetsu no yaiba",
    enhancers: ["[checkered haori","brown kimono","hanafuda earrings]"],
    defaultGender: "boy",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "daki (kimetsu no yaiba)",
    category: "Demon Slayer",
    mainTags: "daki (kimetsu no yaiba), green eyes, white hair, gradient hair, very long hair, facial tattoo, hair ornament, kimetsu no yaiba",
    enhancers: [
        "[--white hair", "--gradient hair", "black hair", "brown kimono","revealing clothes","multicolored obi","stirrup thighhighs]",
        "[brown kimono","revealing clothes","multicolored obi","stirrup thighhighs]"
    ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
{
    name: "kanzaki aoi (kimetsu no yaiba)",
    category: "Demon Slayer",
    mainTags: "kanzaki aoi (kimetsu no yaiba), blue eyes, black hair, twintails, butterfly hair ornament, kimetsu no yaiba",
    enhancers: [
        "[demon slayer uniform","black jacket","blue skirt]",
        "[demon slayer uniform","black jacket","blue skirt","white jacket","white skirt","pants under skirt","short over long sleeves]"
    ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "busujima saeko",
      category: "Highschool of the Dead",
      mainTags: "busujima saeko, purple eyes, purple hair, long hair, highschool of the dead",
      enhancers: [
        "[fujimi high school uniform","green skirt","white shirt","green sailor collar","black bow","kneehighs]",
        "[white apron","ponytail","long apron","nearly naked apron","black thong","side-tie panties]",
        "[fujimi high school uniform","white shirt","green sailor collar","black bow","purple thighhighs","black skirt","single side slit","side-tie panties","armored boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "miyamoto rei",
      category: "Highschool of the Dead",
      mainTags: "miyamoto rei, brown eyes, orange hair, long hair, highschool of the dead",
      enhancers: [
        "[fujimi high school uniform","green skirt","white shirt","green sailor collar","black bow","black thighhighs]",
        "[pink camisole","plain white panties]",
        "[plaid green skirt","white shirt","green sailor collar","black bow","knee pads]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "takagi saya",
      category: "Highschool of the Dead",
      mainTags: "takagi saya, glasses,brown eyes, pink hair, long hair, twin tails, highschool of the dead",
      enhancers: [
        "[fujimi high school uniform","green skirt","white shirt","green sailor collar","black bow","white knee socks]",
        "[black short shorts","blue tank top]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "marikawa shizuka",
      category: "Highschool of the Dead",
      mainTags: "marikawa shizuka, brown eyes, blonde hair, long hair, highschool of the dead",
      enhancers: [
        "[brown pencil skirt","torn skirt","single side slit","white collared shirt","red ribbon]",
        "[long white shirt","no panties]",
        "[blue turtleneck sweater","white pants","capri pants]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hestia (danmachi)",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "hestia (danmachi), blue eyes, black hair, very long hair, twintails, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[white microdress","blue ribbon","rei no himo","white gloves","hair ribbon]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bell cranel",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "bell cranel, red eyes, white hair, short hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[brown coat","chestplate","black pants","black shirt","belt pouch","brown gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ryu lion",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "ryu lion, blue eyes, blonde hair, short hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[green dress","maid","maid headdress","maid apron","black leggings","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aiz wallenstein",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "aiz wallenstein, blue eyes, blonde hair, long hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[armor","boobplate","arm guards","gauntlets","black sleeves","white dress","blue thigh boots","knee pads","headdress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "liliruca arde",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "liliruca arde, brown eyes, brown hair, short hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[torn clothes","two-tone shirt","red shirt","red hood","black gloves","red skirt","unbuttoned skirt","belt","unbuckled belt","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "freya (danmachi)",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "freya (danmachi), purple eyes, silver hair, long hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[black dress","black elbow gloves","plunging neckline","red trim","detached collar","hair ornament]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tiona hyryute",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "tiona hyryute, dark skin, dark-skinned female, green eyes, black hair, short hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[white tube top","bracers","sarong","pelvic curtain","hair tubes","necklace]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sanjouno haruhime",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "sanjouno haruhime, green eyes, blonde hair, long hair, fox girl, fox ears, fox tail, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[red kimono","furisode","black obi]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eina tulle",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "eina tulle, green eyes, glasses, brown hair, medium hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[black pant suit","suit pants","black vest","white shirt","grey bowtie","black gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yamato mikoto",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "yamato mikoto, black eyes, black hair, long hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[side ponytail","purple kimono","short kimono","red thigh boots","red sash","red shoulder armor","zettai ryouiki]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lefiya viridis",
      category: "Is it Wrong to Try to Pick Up Girls in a Dungeon",
      mainTags: "lefiya viridis, blue eyes, yellow hair, long hair, dungeon ni deai wo motomeru no wa machigatteiru darou ka",
      enhancers: ["[pink suspender skirt","high waist skirt","white shirt","long sleeves","blue ascot","hair tie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "albedo (overlord)",
      category: "Overlord",
      mainTags: "albedo (overlord), yellow eyes, black hair, horns, very long hair, overlord (maruyama)",
      enhancers: [
        "[white dress","frilled dress","hip vent","black wings","low wings","detached collar","white elbow gloves]",
        "[black armor","full armor","boobplate","greaves","clawed gauntlets","leg armor]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shalltear bloodfallen",
      category: "Overlord",
      mainTags: "shalltear bloodfallen, red eyes, silver hair, short hair, overlord (maruyama)",
      enhancers: ["[ponytail","black bow","black dress","gothic lolita","neck ribbon","bonnet","bubble skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lupusregina beta",
      category: "Overlord",
      mainTags: "lupusregina beta, dark skin, dark-skinned female, yellow eyes, red hair, long hair, twin braids, overlord (maruyama)",
      enhancers: ["[animal ear headwear","black bridal guantlets","black choker","black dress","black hat","wrist cuffs","criss-cross strings","maid","single side slit","white thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "clementine (overlord)",
      category: "Overlord",
      mainTags: "clementine (overlord), red eyes, blonde hair, short hair, overlord (maruyama)",
      enhancers: ["[armor","bikini armor","gauntlets","shoulder pads","asymmetrical footwear","halterneck","black thighhighs","garter straps","o-ring legwear garter","black miniskirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "entoma vasilissa zeta",
      category: "Overlord",
      mainTags: "entoma vasilissa zeta, anthropod girl, red eyes, purple hair, short hair, overlord (maruyama)",
      enhancers: ["[black kimono","brown pantyhose","long sleeves","wide sleeves","maid","maid headdress","ofuda on clothes]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "solution epsilon",
      category: "Overlord",
      mainTags: "solution epsilon, blue eyes, blonde hair, long hair, twin drills, overlord (maruyama)",
      enhancers: ["[black dress","puffy short sleeves","black fingerless gloves","black choker","black thighhighs","armored boots","maid","maid headdress","ribbon trimmed skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yuri alpha",
      category: "Overlord",
      mainTags: "yuri alpha, glasses, black eyes, black hair, short hair, overlord (maruyama)",
      enhancers: ["[black dress","maid","maid headdress","green arm guards","spiked arm guards","armored dress","single shoulder pad","blue ribbon","blue choker","hip armor]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "faye valentine",
      category: "Cowboy Bebop",
      mainTags: "faye valentine, green eyes, purple hair, short hair, cowboy bebop",
      enhancers: ["[orange headband","yellow shorts","yellow shirt","high collar","red jacket","light colored pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "edward wong hau pepelu tivrusky iv",
      category: "Cowboy Bebop",
      mainTags: "edward wong hau pepelu tivrusky iv, dark skin, dark skinned-female, brown eyes, red hair, blush stickers, short hair, cowboy bebop",
      enhancers: ["[sleeveless white shirt","midriff","black shorts","goggles on head]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "julia (cowboy bebop)",
      category: "Cowboy Bebop",
      mainTags: "julia (cowboy bebop), blue eyes, blonde hair, long hair, cowboy bebop",
      enhancers: ["[black trench coat","red turtleneck","black pants","o-ring belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yor briar",
      category: "SPY X FAMILY",
      mainTags: "yor briar, red eyes, black hair, long hair, spy x family",
      enhancers: [
        "[white headband","red sweater dress","off shoulder","black pantyhose","gold earrings]",
        "[gold headband","gold rose","hair flower","black halter dress","black choker","off shoulder","fingerless gloves","two-sided fabric","thigh boots]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "anya (spy x family)",
      category: "SPY X FAMILY",
      mainTags: "anya (spy x family), green eyes, pink hair, short hair, hair pods, spy x family",
      enhancers: [
        "[eden academy school uniform","black dress","white thighhighs]",
        "[red dress","white collar","yellow jacket]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kim possible",
      category: "Kim Possible",
      mainTags: "kim possible, green eyes, red hair, long hair, kim possible (series)",
      enhancers: [
        "[green crop top","blue capri pants]",
        "[black turtleneck","crop top","black gloves","green cargo pants","utility belt]",
        "[purple turtleneck","short sleeves","grey gloves","black pants","thigh holster]",
        "[cheerleader","purple sleeveless shirt","crop top","purple skirt]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ann possible",
      category: "Kim Possible",
      mainTags: "ann possible, blue eyes, red hair, short hair, kim possible (series)",
      enhancers: ["[purple dress","lab coat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shego",
      category: "Kim Possible",
      mainTags: "shego, colored skin, green skin, green eyes, black hair, very long hair, black lips, kim possible (series)",
      enhancers: ["[black bodysuit","green bodysuit","multicolored bodysuit","black gloves","green gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "scarlet witch",
      category: "Marvel",
      mainTags: "scarlet witch, wanda maximoff, green eyes, brown hair, long hair, avengers (series),marvel",
      enhancers: ["[superhero costume","red highleg leotard","headdress","red cape","pink pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "she-hulk",
      category: "Marvel",
      mainTags: "she-hulk, colored skin, green skin, muscular female, green eyes, green hair, long hair, marvel",
      enhancers: ["[purple highleg leotard","white leotard","two-tone leotard","fingerless purple gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "spider-gwen",
      category: "Marvel",
      mainTags: "spider-gwen, gwen stacy, spider-man (series), marvel",
      enhancers: [
        "[blue eyes","blonde hair","medium hair","superhero costume","black bodysuit","multicolored bodysuit","hood down","black hairband]",
        "[superhero costume","white mask","black bodysuit","multicolored bodysuit]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "spider-woman",
      category: "Marvel",
      mainTags: "spider-woman, jessica drew, black hair, long hair, spider-man (series), marvel",
      enhancers: [
        "[superhero costume","red bodysuit","yellow gloves","yellow knee boots","red mask]",
        "[green eyes", "no mask", "superhero costume","red bodysuit","yellow gloves","yellow knee boots]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "loki (marvel)",
      category: "Marvel",
      mainTags: "loki (marvel), blue eyes, black hair, medium hair, marvel cinematic universe, marvel",
      enhancers: ["[black coat","horned helmet","fur-trimmed coat","green shirt","black pants","multiple belts","fingerless gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "thor (marvel)",
      category: "Marvel",
      mainTags: "thor (marvel), blue eyes, blonde hair, long hair, marvel cinematic universe, marvel",
      enhancers: ["[armor","black breastplate","red cape","multiple belts","sleeveless shirt","wrist guards","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "iron man",
      category: "Marvel",
      mainTags: "iron man, avengers (series), marvel",
      enhancers: [
        "[superhero costume","red armor","power armor","blue eyes","glasses","brown hair","short hair","no helmet]",
        "[superhero costume","red armor","power armor]"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sue storm",
      category: "Marvel",
      mainTags: "sue storm, blue eyes, blonde hair, long hair, fantastic four, marvel",
      enhancers: ["[superhero costume","skin tight","blue bodysuit]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cyclops (x-men)",
      category: "Marvel",
      mainTags: "cyclops (x-men), visor, brown hair, short hair, x-men (anime), marvel",
      enhancers: ["[superhero costume","blue bodysuit","yellow shorts","yellow gloves","yellow harness","thigh straps]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "emma frost",
      category: "Marvel",
      mainTags: "emma frost, blue eyes, blue lips, blonde hair, long hair, x-men (anime), marvel",
      enhancers: [
        "[superhero costume","white corset","cross-laced top","white panties","white cape","white thigh boots","fur-trimmed cape","white elbow gloves]",
        "[superhero costume","white off-shoulder shirt","crop top","white pants","white cape","white elbow gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gambit",
      category: "Marvel",
      mainTags: "gambit, red eyes, brown hair, short hair, x-men (anime), marvel",
      enhancers: ["[black headband","brown trenchcoat","pink vest","blue shirt","black pants","blue knee boots]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jean grey",
      category: "Marvel",
      mainTags: "jean grey, green eyes, red hair, long hair,  x-men (anime), marvel",
      enhancers: [
        "[phoenix (x-men)","superhero costume","green bodysuit","yellow elbow gloves","headband","shoulder pads]",
        "[superhero costume","black headband","black bodysuit","yellow bodysuit","two-tone bodysuit","black shoulder pads","fingerless elbow gloves","black gloves]",
        "[superhero costume","yellow bodysuit","blue highleg leotard","bodysuit under clothes","blue bracers","blue headdress","red forehead jewel","blue belt]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jubilee",
      category: "Marvel",
      mainTags: "jubilee, brown eyes, black hair, short hair, x-men, marvel",
      enhancers: [
        "[superhero costume","yellow coat","black shirt","pink shirt","two-tone shirt","eyewear on head","black fingerless gloves","denim shorts","black belt","black thighhighs","knee boots]",
        "[superhero costume","black bodysuit","skintight","pink choker","pink belt","yellow coat","eyewear on head]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "magik (x-men)",
      category: "Marvel",
      mainTags: "magik (x-men), blue eyes, blonde hair, long hair, x-men, marvel",
      enhancers: ["[superhero costume","hair decoration","shoulder pads","single spiked vambrace","black crop top","black short shorts","leg armor","knee pads","single detached sleeve","black gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "psylocke",
      category: "Marvel",
      mainTags: "psylocke, purple eyes, black hair, streaked hair, purple hair, long hair, facial mark, x-men (anime), marvel",
      enhancers: ["[superhero costume","dark purple leotard","highleg leotard","detached sleeves","fingerless gloves","purple gloves","red sash]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rogue (x-men)",
      category: "Marvel",
      mainTags: "rogue (x-men), green eyes, brown hair, white hair, two-tone hair, long hair, x-men (anime), marvel",
      enhancers: ["[superhero costume","green bodysuit","yellow bodysuit","two-tone bodysuit","yellow gloves","red belt","brown cropped jacket]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "wolverine(x-men)",
      category: "Marvel",
      mainTags: "wolverine(x-men), blue eyes, black hair, short hair, x-men (anime), x-men, marvel",
      enhancers: ["[superhero costume","sleeveless bodysuit","yellow bodysuit","blue gloves","claws","blue knee boots","yellow helmet","fake blue horns]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "black cat (marvel)",
      category: "Marvel",
      mainTags: "black cat (marvel), felicia hardy, blue eyes, white hair, long hair, spider-man (series), marvel",
      enhancers: ["[superhero costume","black bodysuit","domino mask","fur trim","white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "doctor strange",
      category: "Marvel",
      mainTags: "doctor strange, gray eyes, black hair, streaked hair, short hair, doctor strange (series), marvel",
      enhancers: ["[superhero costume","blue shirt","blue pants","belt","red cloak","two-sided cloak","eye of agamotto]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "deadpool",
      category: "Marvel",
      mainTags: "deadpool, deadpool (series), marvel",
      enhancers: ["[superhero costume","red bodysuit","utility belt","black gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gwenpool",
      category: "Marvel",
      mainTags: "gwenpool, blue eyes, blonde hair, gradient hair, short hair, deadpool (series), marvel",
      enhancers: ["[superhero costume","pink leotard","multicolored leotard","harness","utility belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "carnage (marvel)",
      category: "Marvel",
      mainTags: "carnage (marvel), red eyes, red hair, very long hair, symbiote, claws, glowing eyes, living clothes, spider-man (series), marvel",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "doctor octopus",
      category: "Marvel",
      mainTags: "doctor octopus, brown eyes, brown hair, short hair, mechanical tentacles, marvel",
      enhancers: ["[superhero costume","sunglasses","brown trench coat","black shirt","black pants","black gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "magneto",
      category: "Marvel",
      mainTags: "magneto, blue eyes, white hair, short hair, x-men (anime), marvel",
      enhancers: ["[superhero costume","red bodysuit","purple cape","red helmet","purple underwear","purple gauntlets]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mystique",
      category: "Marvel",
      mainTags: "mystique, yellow eyes, red hair, medium hair, colored skin, blue skin, x-men, marvel",
      enhancers: ["[superhero costume","white dress","pelvic curtain","white elbow gloves","white thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "venom (marvel)",
      category: "Marvel",
      mainTags: "venom (marvel), white eyes, black hair, short hair, black bodysuit, very long tongue, tentacles, symbiote, marvel",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "superman",
      category: "DC",
      mainTags: " superman, blue eyes, black hair, short hair, superman (series), dc comics",
      enhancers: ["[superhero costume","blue bodysuit","red male underwear","red cape","superman logo]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "supergirl",
      category: "DC",
      mainTags: "supergirl, blue eyes, blonde hair, long hair, superman (series), dc comics",
      enhancers: [
        "[superhero costume","blue shirt","red skirt","red cape","superman logo]",
        "[superhero costume","blue crop top","blue miniskirt","red cape","superman logo","long sleeves","red knee boots]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "power girl",
      category: "DC",
      mainTags: "power girl, blue eyes, blonde hair, short hair, superman (series), dc comics",
      enhancers: ["[superhero costume","white leotard","cleavage cutout","blue elbow gloves","red cape","blue knee boots","high collar","red belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "batman",
      category: "DC",
      mainTags: "batman, blue eyes, black hair, short hair, batman (series), dc comics",
      enhancers: ["[superhero costume","black bodysuit","black male underwear","utility belt","black gloves","black cape","batman symbol","black mask]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "batgirl",
      category: "DC",
      mainTags: "batgirl, blue eyes, red hair, long hair, grey bodysuit, batman (series), dc comics",
      enhancers: [
        "[superhero costume","black bodysuit","yellow gloves","blue capelet","yellow capelet","two-sided capelet","yellow belt","black mask","batman symbol]",
        "[superhero costume","grey bodysuit","blue gloves","blue capelet","black capelet","two-sided capelet","yellow belt","blue mask","batman symbol]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "wonder woman",
      category: "DC",
      mainTags: "wonder woman, blue eyes, black hair, long hair, wonder woman (series), dc comics",
      enhancers: [
        "[superhero costume","blue highleg leotard","strapless leotard","star print","bracers","gold headband]",
        "[superhero costume","red highleg leotard","strapless leotard","star print","blue skirt","bracers","gold headband]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "green lantern",
      category: "DC",
      mainTags: "green lantern, brown eyes, black hair, short hair, green lantern (series), dc comics",
      enhancers: ["[superhero costume","black bodysuit","green domino mask","white gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "the flash",
      category: "DC",
      mainTags: "the flash, blue eyes, brown hair, short hair, justice league, dc comics",
      enhancers: ["[superhero costume","red bodysuit","hair ornament","red helmet","lightning bolt symbol]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "zatanna zatara",
      category: "DC",
      mainTags: "zatanna zatara, blue eyes, black hair, long hair, dc comics",
      enhancers: ["[superhero costume","fishnet pantyhose","two-tone leotard","black leotard","white leotard","thigh boots","top hat","black jacket]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "robin (dc)",
      category: "DC",
      mainTags: "robin (dc), green eyes, black hair, short hair, spiked hair, batman (series), dc comics",
      enhancers: [
        "[superhero costume","black domino mask","green bodysuit","red shirt","utility belt","green gloves]",
        "[superhero costume","black domino mask","red bodysuit","red pants","black male underwear","underwear over clothes","utility belt","black gloves]"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nightwing",
      category: "DC",
      mainTags: "nightwing, dick grayson,blue eyes, black hair, short hair, bodysuit, domino mask, batman (series), dc comics",
      enhancers: ["[superhero costume","black bodysuit","blue batman symbol","domino mask]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "beast boy (dc)",
      category: "DC",
      mainTags: "beast boy (dc), green eyes, green hair, short hair, colored skin, green skin, two-tone super hero costume, teen titans, dc comics",
      enhancers: ["[superhero costume","black bodysuit","purple bodysuit","two-tone bodysuit","grey gloves","belt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "raven (dc)",
      category: "DC",
      mainTags: "raven (dc), purple eyes, purple hair, short hair, colored skin, grey skin, forehead jewel, belt, black leotard, teen titans, dc comics",
      enhancers: ["[superhero costume","black highleg leotard","purple hooded cloak","hood up","fingerless gloves","belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "starfire",
      category: "DC",
      mainTags: "starfire, green eyes, orange hair, long hair, tan skin, green scelera, purple crop top, purple shorts, tamaranean, teen titans, dc comics",
      enhancers: [
        "[superhero costume","purple crop top","silver collar","silver bracers","purple skirt","silver belt","purple knee boots]",
        "[superhero costume","starfire (1980 costume)","impossible clothes","clothing cutouts","plunging neckline","purple slingshot swimsuit","revealing clothes","purple collar]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "terra (dc)",
      category: "DC",
      mainTags: "terra (dc), blue eyes, blonde hair, long hair, teen titans, dc comics",
      enhancers: ["[superhero costume","black shirt","yellow shorts","midriff","utility belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "joker (dc)",
      category: "DC",
      mainTags: "joker (dc), green eyes, green hair, short hair, facepaint, red lips, batman (series), dc comics",
      enhancers: [
        "[superhero costume","purple suit","pinstripe suit pants","green vest","orange shirt","green ascot","white gloves]",
        "[superhero costume","purple suit","yellow shirt","blue ascot","white gloves]"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "harley quinn",
      category: "DC",
      mainTags: "harley quinn, blue eyes, batman (series), dc comics",
      enhancers: [
        "[harley quinn (classic)","black bodysuit","red bodysuit","two-tone bodysuit","frilled collar","jester cap","mask]",
        "[harley quinn (suicide squad)","blonde hair","long hair","twintails","gradient hair","multicolored hair","fishnet pantyhose","white crop top","mutlicolored short shorts","single fingerless glove]",
        "[harley quinn (2021 outfit)","blonde hair","long hair","twintails","gradient hair","multicolored hair","green hair","pink hair","black pants","red pants","two-tone pants","black camisole","red camisole","two-two camisole","red gloves","red choker]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "catwoman",
      category: "DC",
      mainTags: "catwoman, green eyes, black hair, short hair, batman (series), dc comics",
      enhancers: [
        "[superhero costume","grey bodysuit","black elbow gloves","mask","fake animal ears","yellow belt]",
        "[superhero costume","black latex bodysuit","fake animal ears","goggles on head","black elbow gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "poison ivy",
      category: "DC",
      mainTags: "poison ivy, green eyes, red hair, long hair, colored skin, green skin, tattoo, green lips, monster girl, batman (series), dc comics",
      enhancers: [
        "[superhero costume","colored skin","green skin","tattoo","green lips","monster girl","red collared shirt","revealing clothes","green panties]",
        "[superhero costume","strapless leotard","sleeveless leotard","leaf highleg leotard","leaf hair ornament]",
        "[superhero costume","strapless leotard","sleeveless leotard","green leotard","green pantyhose","green elbow gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jinx (dc)",
      category: "DC",
      mainTags: "jinx (dc), colored skin, grey skin, purple eyes, pink hair, long hair, hair horns, teen titans, dc comics",
      enhancers: ["[superhero costume","purple dress","wide sleeves","striped pantyhose","purple pantyhose","black pantyhose","high collar]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ariel (disney)",
      category: "Disney",
      mainTags: "ariel (disney), blue eyes, red hair, long hair, the little mermaid, disney",
      enhancers: [
      "[monster girl", "fish tail", "shell bikini", "mermaid]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "belle (disney)",
      category: "Disney",
      mainTags: "belle (disney), brown eyes, brown hair, long hair, beauty and the beast, disney",
      enhancers: [
        "[ponytail","blue hair bow","white shirt","blue pinaforedress","white waist apron]",
        "[high ponytail","yellow sleeveless dress","off shoulder","yellow elbow gloves]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "beast (disney)",
      category: "Disney",
      mainTags: "beast (disney), brown eyes, brown hair, long hair, wolf tail, monster, monsterification, aristocractic clothes, neck fur, furry body, furry, beauty and the beast, disney",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aurora (disney)",
      category: "Disney",
      mainTags: "aurora (disney), blue eyes, blonde hair, long hair, sleeping beauty, disney",
      enhancers: ["pink off shoulder dress", "blue off shoulder dress"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jasmine (disney)",
      category: "Disney",
      mainTags: "jasmine (disney),  dark skin, dark-skinned female, brown eyes, black hair, long hair, multi-tied hair, aladdin (disney), disney",
      enhancers: ["[see-through pants","see-through clothes","blue bandeau","harem pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rapunzel (disney)",
      category: "Disney",
      mainTags: "rapunzel (disney), green eyes, blonde hair, absurdely long hair, single braid, tangled, disney",
      enhancers: ["[hair flower","off-shoulder dress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "snow white (disney)",
      category: "Disney",
      mainTags: "snow white (disney), brown eyes, black hair, short hair, snow white and the seven dwarfs, disney",
      enhancers: ["[yellow skirt","two-tone dress","puffy short sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elsa (frozen)",
      category: "Disney",
      mainTags: "elsa (frozen), blue eyes, blonde hair, long hair, single braid, frozen (disney), disney",
      enhancers: [
        "[off shoulder","aqua dress","blue cape]",
        "[black shirt","strapless blue dress","purple cape","pleated skirt","long dress]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "anna (frozen)",
    category: "Disney",
    mainTags: "anna (frozen), brown hair, green eyes, long hair, frozen, disney",
    enhancers: [
        "[braided bun","frilled green dress","pleated skirt","black corset","necklace]",
        "[twin braids","pink cape","teal shirt","blue skirt","black corset","knee boots]"
  ],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "cinderella (disney)",
      category: "Disney",
      mainTags: "cinderella (disney), blue eyes, blonde hair, long hair, hair bun, makeup, detached sleeves, corset, elbow gloves, cinderella, disney",
      enhancers: [
        "[blue dress","hair bun","makeup","detached sleeves","corset","white elbow gloves]",
        "[white bandanna","long brown dress","teal shirt","long sleeves","black vest","white waist apron]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tinker bell (disney)",
      category: "Disney",
      mainTags: "tinker bell (disney), green eyes, blonde hair, short hair, hair bun, peter pan (disney), disney",
      enhancers: ["[fairy","fairy wings","green dress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "megara (disney)",
      category: "Disney",
      mainTags: "megara (disney), brown eyes, brown hair, long hair, ponytail, hercules (1997 film), disney",
      enhancers: ["[roman","greco-roman clothes","sleeveless pink dress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hades (disney)",
      category: "Disney",
      mainTags: "hades (disney), yellow eyes, blue hair, short hair, fiery hair, colored skin, blue skin, hercules (1997 film), disney",
      enhancers: ["[greco-roman clothes","off-shoulder dress]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "esmeralda (disney)",
      category: "Disney",
      mainTags: "esmeralda (disney), very dark skin, dark-skinned female, green eyes, black hair, long hair, the hunchback of notre dame, disney",
      enhancers: ["[bracer","white shirt","puffy sleeves","hoop earrings","purple skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pocahontas (disney)",
      category: "Disney",
      mainTags: "pocahontas (disney), dark skin, dark-skinned female, brown eyes, black hair, long hair, pocahontas, disney",
      enhancers: ["[dress","single-shoulder dress","tattoo","feather earring]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "maid marian (disney)",
      category: "Disney",
      mainTags: "maid marian (disney), brown eyes, brown hair, long hair, animal nose, fox girl, fox tail, robin hood (disney), disney",
      enhancers: ["[pinafore dress","pink dress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hiro hamada",
      category: "Disney",
      mainTags: "hiro hamada, brown eyes, black hair, short hair, big hero 6, disney",
      enhancers: ["[blue hoodie","red shirt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gogo tomago",
      category: "Disney",
      mainTags: "gogo tomago, brown eyes, black hair, short hair, big hero 6, disney",
      enhancers: ["[bike shorts","open jacket]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "honey lemon",
      category: "Disney",
      mainTags: "honey lemon, green eyes, blonde hair, long hair, glasses, big hero 6, disney",
      enhancers: ["[yellow knit sweater","sweater dress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cass hamada",
      category: "Disney",
      mainTags: "cass hamada, brown eyes, brown hair, short hair, big hero 6, disney",
      enhancers: ["[green shirt","yoga pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elastigirl",
      category: "Disney",
      mainTags: "elastigirl, helen parr, brown eyes, brown hair, short hair, the incredibles, disney",
      enhancers: ["bodysuit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "violet parr",
      category: "Disney",
      mainTags: "violet parr, blue eyes, black hair, long hair, the incredibles, disney",
      enhancers: ["[eye mask","yellow hair band","red bodysuit]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "amane misa",
      category: "Other",
      mainTags: "amane misa, yellow eyes, blonde hair, long hair, twintails, death note",
      enhancers: ["[sleeveless black dress","detached lace sleeves","lace thighhighs","garter straps","cross-laced clothes]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "holo",
      category: "Other",
      mainTags: "holo, wolf girl, wolf ears, wolf tail, red eyes, brown hair, long hair, spice and wolf",
      enhancers: [
        "[purple shirt","black pants","wide sleeves","red sash]",
        "[black skirt","blue shirt","black fest","fur trim","red sash]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "violet evergarden",
      category: "Other",
      mainTags: "violet evergarden, blue eyes, blonde hair, long hair, violet evergarden (series)",
      enhancers: ["[blue jacket","juliet sleeves","pink dress","green brooch","brown gloves","red ribbon]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "queen of hearts (alice in wonderland)",
      category: "Other",
      mainTags: "queen of hearts (alice in wonderland), black eyes, black hair, short hair, alice in wonderland",
      enhancers: ["[crown","red dress","juliet sleeves","wide sleeves","frills]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jessica rabbit",
      category: "Other",
      mainTags: "jessica rabbit, green eyes, red hair, long hair, who framed roger rabbit",
      enhancers: ["red dress"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "amano maya",
      category: "Persona (Series)",
      mainTags: "amano maya, brown eyes, black hair, short hair, persona 2, persona",
      enhancers: ["[kasugayama high school uniform", "brown jacket","brown skirt","blue necktie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lisa silverman",
      category: "Persona (Series)",
      mainTags: "lisa silverman, blue eyes, blonde hair, long hair, persona 2, persona",
      enhancers: ["[kasugayama high school uniform", "black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fushimi chihiro",
      category: "Persona (Series)",
      mainTags: "fushimi chihiro, brown eyes, brown hair, long hair, persona 2, persona",
      enhancers: ["[kasugayama high school uniform", "black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mishina eikichi",
      category: "Persona (Series)",
      mainTags: "mishina eikichi, brown eyes, blue hair, short hair, persona 2, persona",
      enhancers: ["[kasugayama high school uniform","blue jacket","blue pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shiomi kotone",
      category: "Persona (Series)",
      mainTags: "shiomi kotone, brown eyes, brown hair, long hair, ponytail, persona 3, persona",
      enhancers: ["[gekkoukan high school uniform","black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "takeba yukari",
      category: "Persona (Series)",
      mainTags: "takeba yukari, brown eyes, brown hair, medium hair, persona 3, persona",
      enhancers: ["[gekkoukan high school uniform","black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kirijou mitsuru",
      category: "Persona (Series)",
      mainTags: "kirijou mitsuru, brown eyes, red hair, long hair, persona 3, persona",
      enhancers: ["[gekkoukan high school uniform","black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yoshino chidori",
      category: "Persona (Series)",
      mainTags: "yoshino chidori, brown eyes, red hair, long hair, persona 3, persona",
      enhancers: ["[white cableknit sweater","white pleated skirt","white pantyhose","black necktie","white hairband]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "metis (persona)",
      category: "Persona (Series)",
      mainTags: "metis (persona), red eyes, black hair, short hair, persona 3, persona",
      enhancers: ["[armored dress","robot joints]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elizabeth (persona)",
      category: "Persona (Series)",
      mainTags: "elizabeth (persona), yellow eyes, blonde hair, short hair, persona 3, persona",
      enhancers: ["[blue dress","blue hat","black pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yamagishi fuuka",
      category: "Persona (Series)",
      mainTags: "yamagishi fuuka, green eyes, teal hair, short hair, persona 3, persona",
      enhancers: ["[gekkoukan high school uniform","black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "aigis (persona)",
      category: "Persona (Series)",
      mainTags: "aigis (persona), blue eyes, blonde hair, short hair, persona 3, persona",
      enhancers: ["[gekkoukan high school uniform","black jacket","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shirogane naoto",
      category: "Persona (Series)",
      mainTags: "shirogane naoto, blue eyes, blue hair, short hair, blue coat, plaid pants, persona 4, persona",
      enhancers: ["[yasogami school uniform","black jacket","blue cabbie hat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "satonaka chie",
      category: "Persona (Series)",
      mainTags: "satonaka chie, brown eyes, brown hair, short hair, persona 4, persona",
      enhancers: ["[yasogami school uniform","green coat","fur trim","skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "margaret (persona)",
      category: "Persona (Series)",
      mainTags: "margaret (persona), yellow eyes, blonde hair, long hair, persona 4, persona",
      enhancers: ["[blue dress","blue hairband","black pantyhose","pelvic curtain]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kujikawa rise",
      category: "Persona (Series)",
      mainTags: "kujikawa rise, brown eyes, brown hair, long hair, twintails, black coat, black skirt, persona 4, persona",
      enhancers: ["[yasogami school uniform","black skirt","black jacket]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "himiko (persona 4)",
      category: "Persona (Series)",
      mainTags: "himiko (persona 4), yellow eyes, blonde hair, long hair, persona 4, persona",
      enhancers: ["[yasogami school uniform","black skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "amagi yukiko",
      category: "Persona (Series)",
      mainTags: "amagi yukiko, brown eyes, black hair, long hair, persona 4, persona",
      enhancers: ["[yasogami school uniform","red shirt","yellow neckerchief","red skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "marie (persona 4)",
      category: "Persona (Series)",
      mainTags: "marie (persona 4), green eyes, black hair, short hair, persona 4, persona",
      enhancers: ["[sleeveless white shirt","collar","red choker","red pleated skirt","plaid skirt","striped fingerless gloves","black necktie","blue cabbie hat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "doujima nanako",
      category: "Persona (Series)",
      mainTags: "doujima nanako, brown eyes, brown hair, short hair, twintails, short twintails, persona 4, persona",
      enhancers: ["[three-tone dress","white turtleneck sweater]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "takamaki anne",
      category: "Persona (Series)",
      mainTags: "takamaki anne, blue eyes, blonde hair, long hair, twintails, persona 5, persona",
      enhancers: [
        "[shuujin academy school uniform","striped skirt","pleated skirt","blue jacket","white shirt]",
      "[panther (persona 5)", "red bodysuit]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sakura futaba",
      category: "Persona (Series)",
      mainTags: "sakura futaba, green eyes, orange hair, long hair, persona 5, persona",
      enhancers: [
        "[black shorts","white shirt","green jacket","fur-trimmed jacket","headphones]",
      "[oracle (persona 5)", "black bodysuit]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "niijima makoto",
      category: "Persona (Series)",
      mainTags: "niijima makoto, brown eyes, brown hair, short hair, persona 5, persona",
      enhancers: [
        "[shuujin academy school uniform","black vest","plaid skirt]",
      "[queen (persona 5)", "bike suit]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "okumura haru",
      category: "Persona (Series)",
      mainTags: "okumura haru, brown eyes, brown hair, short hair, persona 5, persona",
      enhancers: [
        "[pink turtleneck sweater","plaid skirt","white pantyhose]",
      "[noir (persona 5)", "eye mask", "hat", "white ascot", "pink shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yoshizawa kasumi",
      category: "Persona (Series)",
      mainTags: "yoshizawa kasumi, brown eyes, red hair, long hair, ponytail, persona 5, persona",
      enhancers: [
        "[shuujin academy school uniform","black jacket","plaid skirt]",
      "[violet (persona 5)", "black leotard", "leather jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "amamiya ren",
      category: "Persona (Series)",
      mainTags: "amamiya ren, gray eyes, black hair, short hair, black jacket, plaid skirt, persona 5, persona",
      enhancers: [
        "[shuujin academy school uniform","black jacket","plaid pants]",
      "[joker (persona 5)", "long black coat", "eye mask]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kawakami sadayo",
      category: "Persona (Series)",
      mainTags: "kawakami sadayo, brown eyes, brown hair, short hair, persona 5, persona",
      enhancers: ["[striped shirt","denim skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sakamoto ryuuji",
      category: "Persona (Series)",
      mainTags: "sakamoto ryuuji, brown eyes, blonde hair, short hair,persona 5, persona",
      enhancers: [
        "[shuujin academy school uniform","black jacket","plaid pants]",
      "[skull (persona 5)", "leather jacket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kitagawa yuusuke",
      category: "Persona (Series)",
      mainTags: "kitagawa yuusuke, blue eyes, blue hair, short hair, persona 5, persona",
      enhancers: ["[white shirt","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "takemi tae",
      category: "Persona (Series)",
      mainTags: "takemi tae, brown eyes, black hair, short hair, persona 5, persona",
      enhancers: ["[black dress","red belt","black choker","white lab coat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yoshizawa sumire",
      category: "Persona (Series)",
      mainTags: "yoshizawa sumire, brown eyes, red hair, long hair, ponytail,persona 5, persona",
      enhancers: ["[shuujin academy school uniform","black jacket","plaid skirt]",],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "niijima sae",
      category: "Persona (Series)",
      mainTags: "niijima sae, gray eyes, silver hair, long hair, persona 5, persona",
      enhancers: ["[black pant suit","black jacket","black pants","necklace","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tougou hifumi",
      category: "Persona (Series)",
      mainTags: "tougou hifumi, brown eyes, black hair, long hair, persona 5, persona",
      enhancers: ["[kosei high school uniform","black skirt","blue jacket","striped bowtie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "caroline (persona 5)",
      category: "Persona (Series)",
      mainTags: "caroline (persona 5), yellow eyes, blonde hair, short hair, persona 5, persona",
      enhancers: ["[military uniform","eyepatch","military hat","blue shirt","arm band","black shorts","knee socks","black necktie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "justine (persona 5)",
      category: "Persona (Series)",
      mainTags: "justine (persona 5), yellow eyes, blonde hair, short hair, persona 5, persona",
      enhancers: ["[military uniform","eyepatch","military hat","blue shirt","arm band","black shorts","knee socks","black necktie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lavenza (persona 5)",
      category: "Persona (Series)",
      mainTags: "lavenza (persona 5), yellow eyes, blonde hair, very long hair, twintails, persona 5, persona",
      enhancers: ["[blue dress","black bloomers","black turtleneck","black elbow gloves","blue maid headdress","hair ornament]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "maam",
      category: "Dragon Quest (Series)",
      mainTags: "maam, blue eyes, pink hair, long hair, dragon quest dai no daibouken, dragon quest",
      enhancers: ["[pink china dress","fingerless gloves","bracers","blue sash","black pantyhose","single shoulder pad]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "daisy (dq)",
      category: "Dragon Quest (Series)",
      mainTags: "daisy (dq), brown eyes, blonde hair, long hair, dragon quest dai no daibouken, dragon quest",
      enhancers: ["[armored dress","bare shoulders","boobplate","hip armor","belt","brown gloves","blue thighhighs","pelvic curtain]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess laura",
      category: "Dragon Quest (Series)",
      mainTags: "princess laura, blue eyes, blonde hair, long hair, dragon quest i, dragon quest",
      enhancers: ["[yellow dress","crown","purple back bow","white elbow gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "princess of moonbrook",
      category: "Dragon Quest (Series)",
      mainTags: "princess of moonbrook, red eyes, blonde hair, long hair, dragon quest ii, dragon quest",
      enhancers: ["[white dress","wide sleeves","purple capelet","hooded capelet]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "warrior (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "warrior (dq3), brown eyes, purple hair, long hair, purple hair, dragon quest iii, dragon quest",
      enhancers: ["[red armor","bikini armor","pelvic curtain","detached sleeves","red gauntlets","thigh straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sage (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "sage (dq3), red eyes, blue hair, long hair, dragon quest iii, dragon quest",
      enhancers: ["[sleeveless white dress","teal cape","circlet","yellow elbow gloves","belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "priest (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "priest (dq3), red eyes, blue hair, long hair, dragon quest iii, dragon quest",
      enhancers: ["[orange bodysuit","blue tabard","blue mitre","yellow glove]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mage (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "mage (dq3), green eyes, purple hair, long hair, dragon quest iii, dragon quest",
      enhancers: ["[green dress","single side slit","brown cloak","high collar","brown over-kneehighs","purple sash","witch hat","black detached sleeves","brown gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "thief (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "thief (dq3), dark skin, dark-skinned female, brown eyes, white hair, short hair, dragon quest iii, dragon quest",
      enhancers: ["[black bodysuit","yellow cropped vest","belt","pearl necklace","pink gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gadabout (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "gadabout (dq3), blue eyes, blonde hair, long hair, blonde hair, dragon quest iii, dragon quest",
      enhancers: ["[fake animal ears","rabbit ears","blue highleg leotard","rabbit tail","black pantyhose","detached collar","blue bow","nontraditional playboy bunny]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "merchant (dq3)",
      category: "Dragon Quest (Series)",
      mainTags: "merchant (dq3), brown eyes, brown hair, short hair, dragon quest iii, dragon quest",
      enhancers: ["[high ponytail","white pants","blue vest","arabian clothes","white shirt","red sash","wrist cuffs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "manya (dq4)",
      category: "Dragon Quest (Series)",
      mainTags: "manya (dq4), dark skin, dark-skinned female, blue eyes, purple hair, long hair, dragon quest iv, dragon quest",
      enhancers: ["[bikini armor","orange pelvic curtain","forehead jewel","green gemstones","thigh strap]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "minea (dq4)",
      category: "Dragon Quest (Series)",
      mainTags: "minea (dq4), brown eyes, silver hair, long hair, dark skin, dark-skinned female, dragon quest iv, dragon quest",
      enhancers: ["[orange dress","single bare shoulder","single sleeve","wide sleeves","yellow skirt","metal belt","forehead jewel","green gemstones]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "alena (dq4)",
      category: "Dragon Quest (Series)",
      mainTags: "alena (dq4), blue eyes, red hair, short hair, dragon quest iv, dragon quest",
      enhancers: ["[yellow dress","blue cape","blue hat","brown gloves","black pantyhose","belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bianca (dq5)",
      category: "Dragon Quest (Series)",
      mainTags: "bianca (dq5), blue eyes, blonde hair, long hair, single braid, dragon quest v, dragon quest",
      enhancers: ["[green dress","orange cape","green knee socks","bracers","arm band]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hero's daughter (dq5)",
      category: "Dragon Quest (Series)",
      mainTags: "hero's daughter (dq5), blue eyes, blonde hair, long hair, dragon quest v, dragon quest",
      enhancers: ["[white dress","green hair bows","purple cape","white gloves","belt","belt pouch]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "flora (dq5)",
      category: "Dragon Quest (Series)",
      mainTags: "flora (dq5), blue eyes, blue hair, long hair, dragon quest v, dragon quest",
      enhancers: ["[white single-shoulder dress","purple bow","purple corset","silver bracers","choker]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "deborah (dq5)",
      category: "Dragon Quest (Series)",
      mainTags: "deborah (dq5), purple eyes, black hair, long hair, dragon quest v, dragon quest",
      enhancers: ["[short pink dress","long fur scarf","hair flower","red frills","belt","bracers]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "barbara (dq6)",
      category: "Dragon Quest (Series)",
      mainTags: "barbara (dq6), purple eyes, orange hair, long hair, high ponytail, dragon quest vi, dragon quest",
      enhancers: ["[blue tunic","belt","black detached sleeves","yellow gloves","red cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mireyu",
      category: "Dragon Quest (Series)",
      mainTags: "mireyu, blue eyes, blonde hair, long hair, dragon quest vi, dragon quest",
      enhancers: ["[blue coat","white shirt","white pants","orange sash","metal underbust","bracers","circlet]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "maribel (dq7)",
      category: "Dragon Quest (Series)",
      mainTags: "maribel (dq7), green eyes, orange hair, long hair, dragon quest vii, dragon quest",
      enhancers: ["[long multicolored dress","red dress","green dress","orange dress","orange hat","orange ribbon]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jessica albert",
      category: "Dragon Quest (Series)",
      mainTags: "jessica albert, brown eyes, orange hair, long hair, twin tails, dragon quest viii, dragon quest",
      enhancers: ["[purple off-shoulder shirt","yellow corset","red skirt","belt pouch]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "martina (dq11)",
      category: "Dragon Quest (Series)",
      mainTags: "martina (dq11), brown eyes, purple hair, long hair, high ponytail, dragon quest xi, dragon quest",
      enhancers: ["[green halter top","o-ring top","black shorts","green belt","green bracers","black fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "veronica (dq11)",
      category: "Dragon Quest (Series)",
      mainTags: "veronica (dq11), blue eyes, blonde hair, long hair, twin braids, dragon quest xi, dragon quest",
      enhancers: ["[red hat","white dress","cross-laced clothes","two-tone dress","puffy short sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "senya (dq11)",
      category: "Dragon Quest (Series)",
      mainTags: "senya (dq11), blue eyes, blonde hair, long hair, dragon quest xi, dragon quest",
      enhancers: ["[green dress","green headband","white dress","juliet sleeves","orange sash","blue pearl necklace]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "aya brea",
      category: "Other",
      mainTags: "aya brea, blue eyes, blonde hair, short hair, black vest, ripped jeans, parasite eve i, parasite eve (series)",
      enhancers: [
        "[black vest","cross-laced top","ripped jeans","black belt","knee boots]",
        "[black dress","single side slit]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "regina (dino crisis)",
      category: "Other",
      mainTags: "regina (dino crisis), green eyes, red hair, short hair, dino crisis",
      enhancers: ["[black bodysuit","black leotard","detached sleeves","black fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ayane (doa)",
      category: "Dead or Alive",
      mainTags: "ayane (doa), purple eyes, purple hair, short hair, dead or alive",
      enhancers: ["[short purple kimono","detached sleeves","red obi","purple thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "marie rose",
      category: "Dead or Alive",
      mainTags: "marie rose, blue eyes, blonde hair, long hair, twintails, dead or alive 5, dead or alive",
      enhancers: [
        "[black dress","gothic lolita","black choker","red back bow]",
        "[marie rose (devilish servant against the splashing waves)","blue one-piece swimsuit","highleg one-piece swimsuit","see-through clothes","blue thighhighs","detached sleeves","black gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kasumi (doa)",
      category: "Dead or Alive",
      mainTags: "kasumi (doa), brown eyes, brown hair, long hair, ponytail, dead or alive 6, dead or alive",
      enhancers: ["[japanese clothes","pelvic curtain","white thighhighs","arm guards]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "honoka (doa)",
      category: "Dead or Alive",
      mainTags: "honoka (doa), brown eyes, pink hair, long hair, dead or alive 6, dead or alive",
      enhancers: [
        "[blue jacket","plaid skirt","thigh socks","red necktie","single blue glove]",
        "[honoka (summer angel on the shore) (doa) bikini","official alternate costume]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nyotengu",
      category: "Dead or Alive",
      mainTags: "nyotengu, purple eyes, black hair, long hair, hair cones, wings, dead or alive 6, dead or alive",
      enhancers: ["[black kimono","yellow obi","hair ornament","torkin hat","thighlets]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hitomi (doa)",
      category: "Dead or Alive",
      mainTags: "hitomi (doa), blue eyes, brown hair, short hair, dead or alive 6, dead or alive",
      enhancers: ["[karate gi","white pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tina armstrong",
      category: "Dead or Alive",
      mainTags: "tina armstrong, blue eyes, blonde hair, long hair, dead or alive 6, dead or alive",
      enhancers: ["[leather coat","red bikini top","two-tone leather pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "christie (doa)",
      category: "Dead or Alive",
      mainTags: "christie (doa), gray eyes, silver hair, short hair, dead or alive 6, dead or alive",
      enhancers: ["[black sleeveless sweater","leather pants","black belt","black fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kokoro (doa)",
      category: "Dead or Alive",
      mainTags: "kokoro (doa), brown eyes, black hair, long hair, dead or alive 6, dead or alive",
      enhancers: ["[chinese clothes","sleeveless pink shirt","detached collar","puffy white pants","frilled cuffs","pink wrist ribbons]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mila (doa)",
      category: "Dead or Alive",
      mainTags: "mila (doa), brown eyes, red hair, short hair, dead or alive 6, dead or alive",
      enhancers: ["[boxer","red sports bra","black boxing shorts","midriff]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "inkling girl",
      category: "Splatoon",
      mainTags: "inkling girl, orange eyes, orange hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "octoling girl",
      category: "Splatoon",
      mainTags: "octoling girl, red eyes, red hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "callie (splatoon)",
      category: "Splatoon",
      mainTags: "callie (splatoon), yellow eyes, black hair, tentacle hair, splatoon (series)",
      enhancers: [
      "[callie (squid sister outfit) (splatoon)", "black dress", "detached collar]",
      "callie (octo idol outfit) (splatoon)"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "marie (splatoon)",
      category: "Splatoon",
      mainTags: "marie (splatoon), yellow eyes, green hair, tentacle hair, splatoon (series)",
      enhancers: [
      "[marie (squid sister outfit) (splatoon)", "black dress", "detached collar]",
      "marie (octo idol outfit) (splatoon)",
      "marie (kimono) (splatoon)"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "marina (splatoon)",
      category: "Splatoon",
      mainTags: "marina (splatoon), turquoise eyes, teal hair, tentacle hair, dark skin, dark-skinned female, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shiver (splatoon)",
      category: "Splatoon",
      mainTags: "shiver (splatoon), blue eyes, blue hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pearl (splatoon)",
      category: "Splatoon",
      mainTags: "pearl (splatoon), yellow eyes, pink hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "frye (splatoon)",
      category: "Splatoon",
      mainTags: "frye (splatoon), yellow eyes, yellow hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "agent 3 (splatoon)",
      category: "Splatoon",
      mainTags: "agent 3 (splatoon), orange eyes, orange hair, tentacle hair, inkling girl, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "takozonesu",
      category: "Splatoon",
      mainTags: "takozonesu, purple eyes, purple hair, tentacle hair, gradient hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "agent 4 (splatoon)",
      category: "Splatoon",
      mainTags: "agent 4 (splatoon), yellow eyes, yellow hair, tentacle hair, inkling girl, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kaori (splatoon)",
      category: "Splatoon",
      mainTags: "kaori (splatoon), orange eyes, orange hair, very long hair, tentacle hair, inkling girl, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tao blu (splatoon)",
      category: "Splatoon",
      mainTags: "tao blu (splatoon), blue eyes, blue hair, tentacle hair, dark skin, dark-skinned female, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "harmony (splatoon)",
      category: "Splatoon",
      mainTags: "harmony (splatoon), pink eyes, pink hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yoko (splatoon)",
      category: "Splatoon",
      mainTags: "yoko (splatoon), purple eyes, purple hair, tentacle hair, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "dedf1sh",
      category: "Splatoon",
      mainTags: "dedf1sh, green eyes, green hair, tentacle hair, colored skin, green skin, splatoon (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "roll (mega man)",
      category: "Mega Man",
      mainTags: "roll (mega man), blue eyes, blonde hair, long hair, mega man (series)",
      enhancers: ["[red dress","black shirt","black sleeves","wrist cuffs","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "roll caskett (mega man)",
      category: "Mega Man",
      mainTags: "roll caskett (mega man), green eyes, blonde hair, long hair, mega man legends (series), mega man (series)",
      enhancers: ["[red shorts","black bodysuit","red shirt","white collar","short sleeves","midriff","red hat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "roll.exe (mega man)",
      category: "Mega Man",
      mainTags: "roll.exe (mega man), green eyes, blonde hair, long hair, mega man battle network (series), mega man (series)",
      enhancers: ["[black bodysuit","pink shirt","helmet","red elbow gloves","red panties","panties over clothes","red thighhighs","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "zero (mega man)",
      category: "Mega Man",
      mainTags: "zero (mega man), blue eyes, blonde hair, long hair, ponytail, mega man (series)",
      enhancers: ["[armor","full armor","chestplate","helmet","shoulder pads","gauntlets]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mega man (character)",
      category: "Mega Man",
      mainTags: "mega man (character), blue eyes, black hair, short hair, mega man (series)",
      enhancers: ["[armor","blue bodysuit","helmet]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "aile (mega man zx)",
      category: "Mega Man",
      mainTags: "aile (mega man zx), green eyes, brown hair, short hair, mega man zx, mega man (series)",
      enhancers: ["[black bodysuit","blue cropped jacket","white shorts","wrist cuffs","fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "x (mega man)",
      category: "Mega Man",
      mainTags: "x (mega man), blue eyes, brown hair, short hair, mega man x, mega man (series)",
      enhancers: ["[armor","blue bodysuit","helmet","forehead jewel]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tron bonne (mega man)",
      category: "Mega Man",
      mainTags: "tron bonne (mega man), blue eyes, brown hair, medium hair, mega man legends (series), mega man (series)",
      enhancers: ["[pink dress","blue cropped jacket","pink gloves","wrist cuffs","black pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "zero(z) (mega man)",
      category: "Mega Man",
      mainTags: "zero(z) (mega man), blue eyes, blonde hair, long hair, ponytail, mega man zero (series), mega man (series)",
      enhancers: ["[black bodysuit","helmet","red gloves","chestplate","forehead jewel]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fairy leviathan (mega man)",
      category: "Mega Man",
      mainTags: "fairy leviathan (mega man), blue eyes, blue hair, long hair, mega man zero (series), mega man (series)",
      enhancers: ["[white bodysuit","blue cropped jacket","detached sleeves","blue thighboots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "megaman.exe",
      category: "Mega Man",
      mainTags: "megaman.exe, blue eyes, black hair, short hair, mega man battle network (series), mega man (series)",
      enhancers: ["[multicolored bodysuit","blue glove","blue helmet]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ciel (mega man)",
      category: "Mega Man",
      mainTags: "ciel (mega man), blue eyes, blonde hair, long hair, mega man battle zero (series), mega man (series)",
      enhancers: ["[black bodysuit","sleeveless pink dress","white gloves","helmet]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "iris (mega man)",
      category: "Mega Man",
      mainTags: "iris (mega man), brown eyes, brown hair, long hair, mega man x (series), mega man (series)",
      enhancers: ["[armored dress","multicolored dress","red dress","blue dress","multi-tied hair","white pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "luna platz (mega man)",
      category: "Mega Man",
      mainTags: "luna platz (mega man), blue eyes, blonde hair, long hair, twin drills, mega man star force (series), mega man (series)",
      enhancers: ["[blue dress","red ascot","striped pantyhose","blue pantyhose","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "proto man",
      category: "Mega Man",
      mainTags: "proto man, brown eyes, brown hair, short hair, mega man (classic), mega man (series)",
      enhancers: ["[grey bodysuit","yellow scarf","red armor","red helmet","red gauntlets]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sonia strumm (mega man)",
      category: "Mega Man",
      mainTags: "sonia strumm (mega man), green eyes, brown hair, short hair, mega man star force (series), mega man (series)",
      enhancers: [
        "[pink hoodie","striped fingerless gloves","green shorts]",
        "[harp note (mega man)","black bodysuit","pink dress","heart","helmet","striped sleeves","pink gloves","pink knee boots","wrist cuffs]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mayl sakurai (mega man)",
      category: "Mega Man",
      mainTags: "mayl sakurai (mega man), brown eyes, red hair, short hair, mega man battle network (series), mega man (series)",
      enhancers: ["[green shirt","blue vest","pink skirt","wide sleeves","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pandora (mega man)",
      category: "Mega Man",
      mainTags: "pandora (mega man), red eyes, green hair, long hair, mega man zx, mega man (series)",
      enhancers: ["[black bodysuit","white boobplate","helmet","white elbow gloves","wrist cuffs","leg armor","robot joints]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "alia (mega man)",
      category: "Mega Man",
      mainTags: "alia (mega man), blue eyes, blonde hair, medium hair, mega man x, mega man (series)",
      enhancers: ["[black bodysuit","boobplate","white gloves","shoulderpads","headset]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ashe (mega man)",
      category: "Mega Man",
      mainTags: "ashe (mega man), blue eyes, gray hair, long hair, mega man zx, mega man (series)",
      enhancers: ["[black bodysuit","orange cropped jacket","belt","fingerless gloves","red headband]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rico (mega man)",
      category: "Mega Man",
      mainTags: "rico (mega man), blue eyes, blue hair, short hair, side ponytail, mega man x (series), mega man (series)",
      enhancers: ["[armor","blue bodysuit","white boobplate","white shorts","white skirt","white knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "layer (mega man)",
      category: "Mega Man",
      mainTags: "layer (mega man), purple eyes, purple hair, long hair, mega man x (series), mega man (series)",
      enhancers: ["[robot joints","orange bodysuit","black pantyhose","breast curtains","armor","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sage harpuia (mega man)",
      category: "Mega Man",
      mainTags: "sage harpuia (mega man), green eyes, green hair, long hair, mega man zero (series), mega man (series)",
      enhancers: ["[robot joints","white bodysuit","green armor","green boobplate","mechanical wings","bikini armor","wrist cuffs","green thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "solid snake",
      category: "Metal Gear (Series)",
      mainTags: "solid snake, blue eyes, brown hair, short hair, metal gear solid, metal gear (series)",
      enhancers: ["[black headband","grey bodysuit","harness","arm bands","utility belt","thigh holster","thigh straps","knee pads]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shiranui mai",
      category: "King of Fighters / SNK",
      mainTags: "shiranui mai, brown eyes, brown hair, long hair, ponytail, the king of fighters",
      enhancers: ["[japanese clothes","obi","sash","pelvic curtain]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "angel (kof)",
      category: "King of Fighters / SNK",
      mainTags: "angel (kof), blue eyes, silver hair, short hair, the king of fighters",
      enhancers: ["[cropped leather jacket","denim chaps","black panties","fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "leona heidern",
      category: "King of Fighters / SNK",
      mainTags: "leona heidern, blue eyes, blue hair, long hair, ponytail, the king of fighters",
      enhancers: ["[military uniform","green cropped jacket","green shorts","black gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kula diamond",
      category: "King of Fighters / SNK",
      mainTags: "kula diamond, blue eyes, blue hair, long hair, the king of fighters",
      enhancers: ["[black bodysuit","white leotard","red jacket","gold gloves","red pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yuri sakazaki",
      category: "King of Fighters / SNK",
      mainTags: "yuri sakazaki, brown eyes, brown hair, long hair, single braid, the king of fighters",
      enhancers: ["[karate gi","red bandanna","purple pantyhose","yellow martial arts belt","blue fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "asamiya athena",
      category: "King of Fighters / SNK",
      mainTags: "asamiya athena, purple eyes, purple hair, long hair, the king of fighters",
      enhancers: ["[short red dress","red fingerless gloves","red hairband","puffy short sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shermie (kof)",
      category: "King of Fighters / SNK",
      mainTags: "shermie (kof), brown eyes, brown hair, long hair, the king of fighters",
      enhancers: ["[purple collared leotard","pink skirt","cross-laced skirt","pink cropped jacket","cleavage cutout]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "terry bogard",
      category: "King of Fighters / SNK",
      mainTags: "terry bogard, muscular male, blue eyes, blonde hair, long hair, ponytail, the king of fighters",
      enhancers: ["[red hat","red vest","white sleeveless shirt","jeans","black fingerless gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yagami iori",
      category: "King of Fighters / SNK",
      mainTags: "yagami iori, red eyes, red hair, short hair, the king of fighters",
      enhancers: ["[black coat","two-sided coat","fold-over collar","red vest","black shirt","red pants","belt","high collar]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "blue mary",
      category: "King of Fighters / SNK",
      mainTags: "blue mary, blue eyes, blonde hair, short hair, the king of fighters",
      enhancers: ["[red crop top","halterneck","blue fingerless gloves","bracelets","blue pants","brown belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "whip (kof)",
      category: "King of Fighters / SNK",
      mainTags: "whip (kof), brown eyes, brown hair, long hair, ponytail, the king of fighters",
      enhancers: ["[military uniform","brown pants","brown jacket","brown gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "king (snk)",
      category: "King of Fighters / SNK",
      mainTags: "king (snk), blue eyes, blonde hair, short hair, the king of fighters",
      enhancers: ["[purple pants","white shirt","black bowtie","black fingerless gloves","purple vest","yellow belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vanessa (kof)",
      category: "King of Fighters / SNK",
      mainTags: "vanessa (kof), brown eyes, red hair, short hair, the king of fighters",
      enhancers: ["[pinstripe pants","cropped white shirt","sleeveless shirt","red necktie","suspenders]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ryou sakazaki",
      category: "King of Fighters / SNK",
      mainTags: "ryou sakazaki, brown eyes, blonde hair, short hair, the king of fighters",
      enhancers: ["[orange karate gi","black shirt","wrist cuffs","black belt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ash crimson",
      category: "King of Fighters / SNK",
      mainTags: "ash crimson, green eyes, blonde hair, long hair, updo, the king of fighters",
      enhancers: ["[red coat","fur-trimmed coat","wide sleeves","red pants","red hairband]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vice (kof)",
      category: "King of Fighters / SNK",
      mainTags: "vice (kof), brown eyes, brown hair, long hair, the king of fighters",
      enhancers: ["[red vest","black shirt","wide sleeves","see-through clothes","black skirt","black shorts","pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mature (kof)",
      category: "King of Fighters / SNK",
      mainTags: "mature (kof), blue eyes, blonde hair, long hair, updo, the king of fighters",
      enhancers: ["[black dress","white vest","pantyhose","wide sleeves","see-through clothes]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jenet behrn",
      category: "King of Fighters / SNK",
      mainTags: "jenet behrn, blue eyes, blonde hair, long hair, snk, fatal fury",
      enhancers: ["[purple dress","single side-slit","red belt","choker","red fingerless gloves","bracelets","thigh strap]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "billy kane",
      category: "King of Fighters / SNK",
      mainTags: "billy kane, blue eyes, blonde hair, short hair, the king of fighters",
      enhancers: ["[striped bandana","blue jacket","blue pants","belt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elisabeth blanctorche",
      category: "King of Fighters / SNK",
      mainTags: "elisabeth blanctorche, blue eyes, black hair, short hair, the king of fighters",
      enhancers: ["[purple pants","white shirt","cleavage cutout","purple ascot","purple wrist cuffs","white knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ralf jones",
      category: "King of Fighters / SNK",
      mainTags: "ralf jones, muscular man, brown eyes, brown hair, short hair, the king of fighters",
      enhancers: ["[bandana","white shirt","black vest","bandolier","jeans]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "neptune (neptunia)",
      category: "Neptune (series)",
      mainTags: "neptune (neptunia), purple eyes, purple hair, short hair, twintails, neptune (series)",
      enhancers: [
        "[white hoodie","striped thighhighs","wide sleeves","hair ornament]",
        "[adult neptune","black hoodie","thigh strap","black choker]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "noire (neptunia)",
      category: "Neptune (series)",
      mainTags: "noire (neptunia), red eyes, black hair, long hair, hair bows, neptune (series)",
      enhancers: ["[white dress","black vest","off-shoulder dress","black thighhighs","blue garter straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "purple heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "purple heart (neptunia), purple eyes, purple hair, long hair, hair ornaments, neptune (series)",
      enhancers: [
        "[black leotard","black thighhighs","wrist cuffs","cleavage cutout","long sleeves","black gloves]",
        "[purple heart (goddesses' promise)","black dress","single side slit","halterneck","black elbow gloves","plunging neckline]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "blanc (neptunia)",
      category: "Neptune (series)",
      mainTags: "blanc (neptunia), blue eyes, brown hair, short hair, neptune (series)",
      enhancers: ["[white dress","spaghetti strap","blue neck ribbon","white hat","fur-trimmed coat","white coat","sleeves past wrists","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nepgear",
      category: "Neptune (series)",
      mainTags: "nepgear, purple eyes, purple hair, long hair, hair ornament, neptune (series)",
      enhancers: ["[white dress","yellow ribbon","striped thighhighs","thigh strap]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "vert (neptunia)",
      category: "Neptune (series)",
      mainTags: "vert (neptunia), blue eyes, blonde hair, long hair, neptune (series)",
      enhancers: ["[green dress","white dress","multicolored dress","pelvic curtain","halterneck","detached sleeves","wrist cuffs","frilled gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "black heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "black heart (neptunia), blue eyes, silver hair, long hair, neptune (series)",
      enhancers: ["[black leotard","detached sleeves","thigh boots","black gloves","halterneck]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "uni (neptunia)",
      category: "Neptune (series)",
      mainTags: "uni (neptunia), red eyes, black hair, long hair, hair bows, neptune (series)",
      enhancers: ["[black dress","detached sleeves","detached collar","knee socks]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tennouboshi uzume",
      category: "Neptune (series)",
      mainTags: "tennouboshi uzume, orange eyes, red hair, long hair, twintails, neptune (series)",
      enhancers: ["[grey pleated skirt","white shirt","black suspenders","orange necktie","single sleeve","fingerless gloves","asymmetrical legwear]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "white heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "white heart (neptunia), red eyes, white hair, short hair, neptune (series)",
      enhancers: ["[white leotard","detached white sleeves","clawed gauntlets","white thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "iris heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "iris heart (neptunia), red eyes, purple hair, very long hair, neptune (series)",
      enhancers: ["[black crop top","halterneck","black panties","suspenders","black detached sleeves","wrist cuffs","black gloves","black chaps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rom (neptunia)",
      category: "Neptune (series)",
      mainTags: "rom (neptunia), blue eyes, white hair, short hair, neptune (series)",
      enhancers: [
        "[blue hat","blue dress","pink bows","fur-trimmed dress","wide sleeves","white pantyhose","fur-trimmed boots","blue knee boots]",
        "[--white hair","white sister rom","blue hair","white leotard","pink trim","white elbow gloves","halterneck","knee boots]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ram (neptunia)",
      category: "Neptune (series)",
      mainTags: "ram (neptunia), blue eyes, brown hair, short hair, neptune (series)",
      enhancers: [
        "[pink hat","pink dress","blue bows","fur-trimmed dress","fur-trimmed boots","pink boots","white pantyhose]",
        "[--brown hair", "white system ram","white leotard","pink trim","white elbow gloves","halterneck","knee boots]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "green heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "green heart (neptunia), green eyes, green hair, very long hair, neptune (series)",
      enhancers: ["[white bikini armor","underboob","elbow gloves","gauntlets","white thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "if (neptunia)",
      category: "Neptune (series)",
      mainTags: "if (neptunia), green eyes, brown hair, long hair, neptune (series)",
      enhancers: ["[black shirt","black shorts","blue coat","wide sleeves","sleeves past wrists","fur-trimmed coat","high collar","choker","black knee socks]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "purple sister",
      category: "Neptune (series)",
      mainTags: "purple sister, purple eyes, purple hair, long hair, neptune (series)",
      enhancers: ["[black bikini armor","harness","black elbow gloves","black thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pururut",
      category: "Neptune (series)",
      mainTags: "pururut, red eyes, purple hair, long hair, single braid, neptune (series)",
      enhancers: ["[multicolored dress","off-shoulder dress","wide sleeves","pink boys","striped thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "histoire",
      category: "Neptune (series)",
      mainTags: "histoire, green eyes, blonde hair, very long hair, hair bows, neptune (series)",
      enhancers: ["[purple dress","blue ribbons","white pantyhose","headdress]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "orange heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "orange heart (neptunia), orange eyes, orange hair, long hair, neptune (series)",
      enhancers: ["[hat","sleeveless white dress","halterneck","see-through cleavage","white elbow gloves","orange panties","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "black sister",
      category: "Neptune (series)",
      mainTags: "black sister, red eyes, white hair, long hair, twin drills,  neptune (series)",
      enhancers: ["[black sleeveless leotard","black elbow gloves","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "compa",
      category: "Neptune (series)",
      mainTags: "compa, brown eyes, orange hair, long hair, neptune (series)",
      enhancers: ["[black headband","white sweater","detached sleeves","red plaid skirt","lace trim thighhighs","zettai ryouiki","belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pish",
      category: "Neptune (series)",
      mainTags: "pish, purple eyes, blonde hair, short hair, hair bobbles, neptune (series)",
      enhancers: ["[multicolored jacket","animal hands","black shorts","two-tone jacket]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ankokuboshi kurome",
      category: "Neptune (series)",
      mainTags: "ankokuboshi kurome, blue eyes, black hair, medium hair, neptune (series)",
      enhancers: ["[black bodysuit","black jacket","black shorts","blue necktie","asymmetrical legwear]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "next purple",
      category: "Neptune (series)",
      mainTags: "next purple, purple eyes, purple hair, long hair, neptune (series)",
      enhancers: ["[purple bodysuit","impossible bodysuit","see-through clothes","black gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "yellow heart (neptunia)",
      category: "Neptune (series)",
      mainTags: "yellow heart (neptunia), blue eyes, blonde hair, medium hair, neptune (series)",
      enhancers: ["[white leotard","detached sleeves","white thigh boots","white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kiseijou rei",
      category: "Neptune (series)",
      mainTags: "kiseijou rei, blue eyes, blue hair, long hair, neptune (series)",
      enhancers: [
        "[black jacket","white shirt","black necktie","gauntlets","skull belt","black pantyhose","white knee boots]",
        "[kiseijou rei (goddess form)","armored dress","black leotard","cleavage cutout","black sleeves","black gloves","arm guards","black leggings","thigh cutouts","shoulder pads]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nippon ichi (neptunia)",
      category: "Neptune (series)",
      mainTags: "nippon ichi (neptunia), purple eyes, blue hair, long hair, neptune (series)",
      enhancers: ["[red scarf","black bodysuit","black shorts","wrist cuffs","black gloves","knee boots","headband]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cyberconnect2",
      category: "Neptune (series)",
      mainTags: "cyberconnect2, green eyes, orange hair, short hair, neptune (series)",
      enhancers: ["[animal ears","fox ears","fox tail","white crop top","white shorts","detached sleeves","white gloves","goggles on head]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "c-sha",
      category: "Neptune (series)",
      mainTags: "c-sha, brown eyes, blonde hair, long hair, neptune (series)",
      enhancers: ["[blue hat","blue sleeveless vest","high collar","black fingerless gloves","white shirt","white panties","pantyhose","black thigh straps","clothing cutout]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "5pb (neptunia)",
      category: "Neptune (series)",
      mainTags: "5pb (neptunia), purple eyes, blue hair, long hair, neptune (series)",
      enhancers: ["[black hairband","black crop top","frilled arm bands","black skirt","pink belt","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "red (neptunia)",
      category: "Neptune (series)",
      mainTags: "red (neptunia), red eyes, red hair, short hair, neptune (series)",
      enhancers: ["[red dress","black vest","detached sleeves","cross-laced top","wide sleeves","sleeves past wrists","gold belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "k-sha",
      category: "Neptune (series)",
      mainTags: "k-sha, brown eyes, blonde hair, long hair, neptune (series)",
      enhancers: ["[black dress","red dress","yellow bow","puffy short sleeves","knee socks","belt","red headband]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "cave (neptunia)",
      category: "Neptune (series)",
      mainTags: "cave (neptunia), red eyes, brown hair, long hair, twintails, neptune (series)",
      enhancers: ["[headdress","white dress","black leotard","thighhighs","red trim","cross-laced clothes","red bow]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pyra (xenoblade)",
      category: "Xenoblade",
      mainTags: "pyra (xenoblade), red eyes, red hair, short hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[core crystal (xenoblade)","red leotard","black fingerless gloves","shoulder pads","tiara]",
        "pyra (pro swimmer) (xenoblade)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mythra (xenoblade)",
      category: "Xenoblade",
      mainTags: "mythra (xenoblade), green eyes, blonde hair, long hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[mythra (massive melee) (xenoblade)", "core crystal (xenoblade)","white dress","detached sleeves","halterneck","thigh strap","white elbow gloves]",
        "mythra (radiant beach) (xenoblade)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nia (xenoblade)",
      category: "Xenoblade",
      mainTags: "nia (xenoblade), yellow eyes, silver hair, short hair, cat girl, cat ears, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[yellow jumpsuit","belt","wide sleeves","white cloak]",
        "[nia (blade) (xenoblade)","white leotard","detached sleeves","detached collar","white thigh boots","sleeves past wrists]",
        "nia (fancy sundress) (xenoblade)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rex (xenoblade)",
      category: "Xenoblade",
      mainTags: "rex (xenoblade), brown eyes, brown hair, short hair, spiked hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[core crystal (xenoblade)","blue bodysuit","sleeveless blue vest","gauntlets","multiple belts]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mio (xenoblade)",
      category: "Xenoblade",
      mainTags: "mio (xenoblade), yellow eyes, brown hair, short hair, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[core crystal (xenoblade)","white shirt","white skirt","pantyhose","white jacket","white knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "eunie (xenoblade)",
      category: "Xenoblade",
      mainTags: "eunie (xenoblade), green eyes, brown hair, short hair, head wings, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: [
        "[black bodysuit","black choker","black jacket","green trim","multiple belts]",
        "[bikini","blue bikini","green bikini","two-tone bikini","multi-strapped bikini bottom","sarong","thigh strap]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pneuma (xenoblade)",
      category: "Xenoblade",
      mainTags: "pneuma (xenoblade), green eyes, green hair, long hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[core crystal (xenoblade)","black leotard","pantyhose","white armor","cleavage cutout","arm guards","gauntlets","hip armor]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "melia antiqua",
      category: "Xenoblade",
      mainTags: "melia antiqua, purple eyes, silver hair, twintails, curly hair, head wings, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[blue dress","pink dress","multicolored dress","headdress","capelet","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "morag ladair (xenoblade)",
      category: "Xenoblade",
      mainTags: "morag ladair (xenoblade), blue eyes, black hair, short hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[military uniform","military jacket","hat","single shlouder pad","white gloves","hip armor","black pants","cape","armored knee boots]",
        "[black one-piece swimsuit","see-through clothing","official alternate costume]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "poppi (xenoblade)",
      category: "Xenoblade",
      mainTags: "poppi (xenoblade), orange eyes, blue hair, long hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[poppi qtpi (xenoblade)","robot joints","black leotard","detached sleeves","black gloves","red garter straps","thighhighs","thigh straps]",
        "[poppi alpha (xenoblade)","puffy shorts","armor","mechnical arms]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fiora (xenoblade)",
      category: "Xenoblade",
      mainTags: "fiora (xenoblade), green eyes, blonde hair, long hair, xenoblade chronicles 1, xenoblade chronicles (series)",
      enhancers: [
        "[white tube top","detached sleeves","detached collar","brown skirt","multiple belts]",
        "[mecha-fiora","cyborg","white armor","robot joints","white bodysuit","mechanical wings]",
        "[mecha-fiora (speed cowling)","cyborg","blue armor","robot joints","revealing clothes]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "brighid (xenoblade)",
      category: "Xenoblade",
      mainTags: "brighid (xenoblade), purple eyes, blue hair, long hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[see-through clothes","purple dress","detached sleeves","blue gloves","fire gloves","thigh boots","fire boots]",
        "[brighid (water lily) (xenoblade)","teal one-piece swimsuit","cleavage cutout","halterneck","fire gloves","floral print]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sena (xenoblade)",
      category: "Xenoblade",
      mainTags: "sena (xenoblade), blue eyes, black hair, gradient hair, short hair, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[blue vest","black crop top","blue shorts","open vest","black fingerless elbow gloves","bracers","belt","belt pouch]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "noah (xenoblade)",
      category: "Xenoblade",
      mainTags: "noah (xenoblade), blue eyes, black hair, long hair, ponytail, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[red jacket","black shirt","black pants","multiple belts","knee pads]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pandoria (xenoblade)",
      category: "Xenoblade",
      mainTags: "pandoria (xenoblade), green eyes, green hair, short hair, round eyewear, pointy ears, tail, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: [
        "[black shorts","black sleeveless shirt","robot joints","steampunk","high collar","frilled gloves","black knee boots]",
        "[pandoria (beach date) (xenoblade)","steampunk","robot joints","teal bikini","bikini skirt","frilled bikini","side-tie bikini bottom]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lora (xenoblade)",
      category: "Xenoblade",
      mainTags: "lora (xenoblade), yellow eyes, red hair, short hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[samurai armor","red dress","black shoulder pads","black gauntlets","red thighhighs","black greaves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fan la norne",
      category: "Xenoblade",
      mainTags: "fan la norne, yellow eyes, brown hair, long hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[chest jewel","hakama","hakama skirt","hagoromo","tiara","white coat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "glimmer (xenoblade)",
      category: "Xenoblade",
      mainTags: "glimmer (xenoblade), brown eyes, red hair, long hair, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[core crystal (xenoblade)","white skirt","detached sleeves","wide sleeves","halterneck","black fingerless gloves","thigh pouch]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "taion (xenoblade)",
      category: "Xenoblade",
      mainTags: "taion (xenoblade),  dark skin, dark-skinned male, green eyes, black hair, short hair, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[white jacket","black pants","bracers","orange scarf]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ethel (xenoblade)",
      category: "Xenoblade",
      mainTags: "ethel (xenoblade), blue eyes, silver hair, long hair, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[black bodysuit","white coat","armor","shoulder pads","gauntlets","greaves","multiple belts","hip armor]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "a (xenoblade)",
      category: "Xenoblade",
      mainTags: "a (xenoblade), blue eyes, white hair, long hair, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[black bodysuit","blue armor","blue cape","high collar","gauntlets","thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lanz (xenoblade)",
      category: "Xenoblade",
      mainTags: "lanz (xenoblade), colored skin, grey skin, red eyes, silver hair, short hair, muscular male, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[fur-trimmed jacket","grey shirt","grey pants","sleeveless jacket","gauntlets]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "elma (xenoblade x)",
      category: "Xenoblade",
      mainTags: "elma (xenoblade x), dark skin, dark-skinned female, blue eyes, white hair, medium hair, xenoblade chronicles x, xenoblade chronicles (series)",
      enhancers: ["[black bodysuit","red shirt","multiple belts","gauntlets","thihh boots","high collar]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "na'el (xenoblade)",
      category: "Xenoblade",
      mainTags: "na'el (xenoblade), green eyes, white hair, short hair, cat girl, cat ears, xenoblade chronicles 3, xenoblade chronicles (series)",
      enhancers: ["[core crystal (xenoblade)","black shirts","white shirt","halterneck","grey coat","two-sided fabric","black thighhighs","gradient thighhighs","fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sharla (xenoblade)",
      category: "Xenoblade",
      mainTags: "sharla (xenoblade), dark skin, dark-skinned female, brown eyes, black hair, long hair, xenoblade chronicles 1, xenoblade chronicles (series)",
      enhancers: ["[blue crop top","red vest","goggles around neck","white short shorts","brown gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "praxis (xenoblade)",
      category: "Xenoblade",
      mainTags: "praxis (xenoblade), dark skin, dark-skinned female, purple eyes, blue hair, short hair,  eyepatch, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[white jacket","white thighhighs","revealing clothes]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "theory (xenoblade)",
      category: "Xenoblade",
      mainTags: "theory (xenoblade), blue eyes, blue hair, hair bun, eyepatch, horns,xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[core crystal (xenoblade)","black bodysuit","impossible clothes","armor","shoulder pads","hip armor","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "dunban (xenoblade)",
      category: "Xenoblade",
      mainTags: "dunban (xenoblade), brown eyes, brown hair, long hair, ahoge, xenoblade chronicles 1, xenoblade chronicles (series)",
      enhancers: ["[red vest","white shirt","black pants","black cloak]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shulk (xenoblade)",
      category: "Xenoblade",
      mainTags: "shulk (xenoblade), blue eyes, blonde hair, short hair, xenoblade chronicles 1, xenoblade chronicles (series)",
      enhancers: ["[black shirt","black shorts","red vest","knee pads]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "reyn (xenoblade)",
      category: "Xenoblade",
      mainTags: "reyn (xenoblade), brown eyes, brown hair, short hair, xenoblade chronicles 1, xenoblade chronicles (series)",
      enhancers: ["[orange crop top","orange shorts","leg armor","fingerless gloves","arm guards","cross-laced clothes]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kassandra (xenoblade)",
      category: "Xenoblade",
      mainTags: "kassandra (xenoblade), blue eyes, purple hair, long hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[horns","white dress","cross-laced clothes","detached sleeves","fingerless gloves","bandages","blue garter straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lin lee koo",
      category: "Xenoblade",
      mainTags: "lin lee koo, brown eyes, black hair, short hair, xenoblade chronicles x, xenoblade chronicles (series)",
      enhancers: ["[black shirt","white vest","brown shorts","blue thighhighs","black fingerless gloves","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "crossette (xenoblade)",
      category: "Xenoblade",
      mainTags: "crossette (xenoblade), green eyes, white hair, streaked hair, short hair, xenoblade chronicles 2, xenoblade chronicles (series)",
      enhancers: ["[white shirt","white skirt","gauntlets","white thighhighs","striped thighhighs","blue garter straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "celica (xenoblade x)",
      category: "Xenoblade",
      mainTags: "celica (xenoblade x), dark skin, dark-skinned female, blue eyes, blonde hair, long hair, animal ears, facial mark, xenoblade chronicles x, xenoblade chronicles (series)",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lucifer (helltaker)",
      category: "Helltaker",
      mainTags: "lucifer (helltaker), red eyes, white hair, long hair, demon girl, demon horns, demon tail, helltaker",
      enhancers: ["[headdress","pant suit","black jacket","black pants","red shirt","black necktie","white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "modeus (helltaker)",
      category: "Helltaker",
      mainTags: "modeus (helltaker), demon girl, small horns, demon tail, red eyes, white hair, medium hair, helltaker",
      enhancers: ["[black jacket","black skirt","red turtleneck sweater","red pantyhose","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "justice (helltaker)",
      category: "Helltaker",
      mainTags: "justice (helltaker), demon girl, small horns, demon tail, red eyes, white hair, short hair, helltaker",
      enhancers: ["[red headband","black jacket","red shirt","short sleeves","jacket on shoulders","black necktie","fingerless red gloves","black pants","sunglasses]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "helltaker (character)",
      category: "Helltaker",
      mainTags: "helltaker (character), muscular male, brown eyes, brown hair, short hair, helltaker",
      enhancers: ["[white suit jacket","red shirt","white pants","sunglasses]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "malina (helltaker)",
      category: "Helltaker",
      mainTags: "malina (helltaker), demon girl, small horns, demon tail, red eyes, white hair, short hair, helltaker",
      enhancers: ["[red shirt","black vest","black skirt","pantyhose","black knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "judgement (helltaker)",
      category: "Helltaker",
      mainTags: "judgement (helltaker), dark skin-dark-skinned female, demon girl, horns, demon tail, white eyes, white hair, long hair, ponytail, helltaker",
      enhancers: ["[black jacket","open jacket","gauntlets","belt","black panties","black thighhighs","thigh straps","red armband]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "azazel (helltaker)",
      category: "Helltaker",
      mainTags: "azazel (helltaker), blue eyes, black hair, short hair, halo, helltaker",
      enhancers: ["[white hair ribbon","white shirt","white pants","gradient pants","white gloves","short sleeves","cross necklace]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "zdrada (helltaker)",
      category: "Helltaker",
      mainTags: "zdrada (helltaker), demon girl, horns, demon tail, red eyes, white hair, short hair, helltaker",
      enhancers: ["[red shirt","black pants","cross necklace","black knee boots","wrist cuffs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pandemonica (helltaker)",
      category: "Helltaker",
      mainTags: "pandemonica (helltaker), demon girl, horns, demon tail, red eyes, glasses, white hair, short hair, helltaker",
      enhancers: ["[black suit","black skirt","black jacket","red shirt","lanyard","black gloves","black knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "beelzebub (helltaker)",
      category: "Helltaker",
      mainTags: " beelzebub (helltaker), demon girl, horns, demon tail, red eyes, white hair, short hair, spikes, helltaker",
      enhancers: ["[red suit","red jacket","two-sided jacket","red pants","black shirt","red vest","red ascot","red gloves","red knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "loremaster (helltaker)",
      category: "Helltaker",
      mainTags: "loremaster (helltaker), demon girl, horns, demon tail, red eyes, white hair, long hair, red-tinted eyewear, helltaker",
      enhancers: ["[red-tinted eyewear","black pants","black vest","black necktie","red shirt","lab coat","mechanical hands]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "baphomet (grizz)",
      category: "Helltaker",
      mainTags: "baphomet (grizz), goat girl, goat horns, goat ears, red eyes, white hair, long hair, helltaker",
      enhancers: ["[black high-waist pants","pinstripe pants","red shirt","sleeve cuffs","black suspenders]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "subject 67 (helltaker)",
      category: "Helltaker",
      mainTags: "subject 67 (helltaker), muscular male, colored skin, red skin, demon, black eyes, skull, demon tail, neck bolts, barcode tattoo, forehead tattoo, helltaker",
      enhancers: [
        "[black suit","black jacket","black vest","red shirt","black necktie","black pants","white gloves]",
        "[white fingerless gloves","bandaged hands","shirtless male","white pants]"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "amiya (arknights)",
      category: "Arknights",
      mainTags: "amiya (arknights), blue eyes, brown hair, long hair, arknights",
      enhancers: [
        "[black jacket","white sweater","blue skirt","pantyhose]",
        "amiya (newsgirl) (arknights)",
        "amiya (fresh fastener) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "texas (arknights)",
      category: "Arknights",
      mainTags: "texas (arknights), brown eyes, black hair, short hair, arknights",
      enhancers: [
        "[white jacket","black capelet","black shorts","multiple belts","pantyhose","thigh strap]",
        "texas (willpower) (arknights)",
        "texas (winter messenger) (arknights)",
        "texas (ambience synesthesia) (arknights)",
        "texas the omertosa (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lappland (arknights)",
      category: "Arknights",
      mainTags: "lappland (arknights), grey eyes, white hair, short hair, arknights",
      enhancers: [
        "[black jacket","high collar","wide sleeves","black shorts]",
        "lappland (refined horrormare) (arknights)",
        "lappland (ambience synesthesia) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "skadi (arknights)",
      category: "Arknights",
      mainTags: "skadi (arknights), red eyes, white hair, long hair, arknights",
      enhancers: [
        "[witch hat","black capelet","white shirt","black pants","cutouts]",
        "skadi (elite ii) (arknights)",
        "[skadi the corrupting heart (arknights)","red dress","aqua gloves","brown ascot]",
        "skadi (waverider) (arknights)",
        "skadi (the next afternoon tea) (arknights)",
        "skadi the corrupting heart (sublimation) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "suzuran (arknights)",
      category: "Arknights",
      mainTags: "suzuran (arknights), brown eyes, blonde hair, multiple braids, long hair, arknights",
      enhancers: [
        "[white sleeveless shirt","purple skirt","white pantyhose","thigh strap","white cape","two-sided cape]",
        "suzuran (spring praise) (arknights)",
        "suzuran (yukibare) (arknights)",
        "suzuran (lostlands flowering) (arknights)",
        "[suzuran (let's carnival!) (arknights)", "orange dress]", "suzuran (pajamas) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "kal'tsit (arknights)",
      category: "Arknights",
      mainTags: "kal'tsit (arknights), green eyes, white hair, medium hair, arknights",
      enhancers: [
        "[green dress","off-shoulder dress","white cape","choker]",
        "kal'tsit (remnants) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "exusiai (arknights)",
      category: "Arknights",
      mainTags: "exusiai (arknights), red eyes, red hair, short hair, halo, detached wings, arknights",
      enhancers: [
        "[black shirt","white vest","high collar","black skirt","pantyhose","fingerless gloves]",
        "[exusiai (city rider) (arknights)", "white jacket]",
        "exusiai (wild operation) (arknights)",
        "exusiai (midnight delivery) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ch'en (arknights)",
      category: "Arknights",
      mainTags: "ch'en (arknights), blue eyes, blue hair, long hair, arknights",
      enhancers: [
        "[black jacket","fingerless gloves","white shirt","cross-laced clothes","black shorts","navel","knee boots","orange necktie]",
        "ch'en (ageless afterglow) (arknights)",
        "ch'en (after storm) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mudrock (arknights)",
      category: "Arknights",
      mainTags: "mudrock (arknights), red eyes, white hair, long hair, arknights",
      enhancers: [
        "[--red eyes","--white hair","--long hair","white armor","full armor","pelvic curtain","helmet","shoulder pads","bracers","gauntlets","leg armor","shin guards]",
        "[mudrock (elite ii) (arknights)","white armor","off shoulder","black crop top","bracers","gauntlets","leg armor","shin guards]",
        "[mudrock (silent night) (arknights)","black bikini","hair flower","black sash]",
        "mudrock (obsidian) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "w (arknights)",
      category: "Arknights",
      mainTags: "w (arknights), red eyes, white hair, short hair, arknights",
      enhancers: [
        "[black jacket","white shirt","turtleneck","black shorts","fishnet pantyhose","fingerless gloves","black skirt","two-sided skirt]",
        "w (wanted) (arknights)",
        "[w (fugue) (arknights)","black cargo pants]",
        "[w (cannot wait for) (arknights)", "yellow jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mostima (arknights)",
      category: "Arknights",
      mainTags: "mostima (arknights), blue eyes, blue hair,  halo, detached wings, long hair, arknights",
      enhancers: [
        "[black jacket","fur-trimmed jacket","white gloves","white shirt","black shorts]",
        "mostima (spellbreaker) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "saria (arknights)",
      category: "Arknights",
      mainTags: "saria (arknights), orange eyes, white hair, long hair, arknights",
      enhancers: [
        "[white jacket","black high-waist skirt","straps]",
        "saria (the law) (arknights)",
        "saria (stronghold) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "specter (arknights)",
      category: "Arknights",
      mainTags: "specter (arknights), red eyes, white hair, long hair, arknights",
      enhancers: [
        "[nun","habit","black dress","side slits","pelvic curtain","black thighhighs","garter straps","black jacket","wide sleeves]",
        "[specter the unchained (arknights)","pirate hat","black dress","straps","black pantyhose","cutouts]",
        "specter (undercurrent) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "dusk (arknights)",
      category: "Arknights",
      mainTags: "dusk (arknights), red eyes, black hair, gradient hair, long hair, arknights",
      enhancers: [
        "[sleeveless white dress","red necktie","black jacket]",
        "dusk (everything is a miracle) (arknights)",
        "dusk (ambience synesthesia) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nian (arknights)",
      category: "Arknights",
      mainTags: "nian (arknights), purple eyes, white hair, long hair, arknights",
      enhancers: [
        "[red tube top","white shorts","belt","white jacket","red gloves]",
        "nian (unfettered freedom) (arknights)",
        "nian (thunderbolt director) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "angelina (arknights)",
      category: "Arknights",
      mainTags: "angelina (arknights), brown eyes, orange hair, long hair, arknights",
      enhancers: [
        "[black shirt","black shorts","white coat","knee socks","black gloves]",
        "angelina (summer flower) (arknights)",
        "angelina (distinguished visitor) (arknights)",
        "angelina (sports) (arknights)",
        "angelina (ambience synesthesia) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "shu (arknights)",
      category: "Arknights",
      mainTags: "shu (arknights), green eyes, multicolored hair, long hair, arknights",
      enhancers: ["[white shirt","white high-waist pants","yellow gloves","necklace]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "goldenglow (arknights)",
      category: "Arknights",
      mainTags: "goldenglow (arknights), yellow eyes, pink hair, short hair, arknights",
      enhancers: [
        "[white shirt","black skirt","pink coat","lanyard","white thighhighs","garter straps]",
        "goldenglow (maiden for the bright night) (arknights)",
        "goldenglow (summer flowers) (arknights)",
        "goldenglow (party in the garden) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "irene (arknights)",
      category: "Arknights",
      mainTags: "irene (arknights), blue eyes, white hair, long hair, arknights",
      enhancers: [
        "[black dress","two-tone skirt","white capelet","black gloves","wide sleeves]",
        "irene (voyage of feathers) (arknights)",
        "irene (the adjudicatrix and her resolve) (arknights)"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "blue poison (arknights)",
      category: "Arknights",
      mainTags: "blue poison (arknights), blue eyes, blue hair, medium hair, arknights",
      enhancers: [
        "[twintails","blue hoodie","black leggings","black shorts","white shirt","black vest]",
        "blue poison (shoal beat) (arknights)",
        "blue poison (elite ii) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "schwarz (arknights)",
      category: "Arknights",
      mainTags: "schwarz (arknights), yellow eyes, white hair, gradient hair, long hair, arknights",
      enhancers: [
        "[black scarf","black crop top","black shorts","white jacket","see-through jacket","straps","thigh pouch]",
        "schwarz (skyline) (arknights)",
        "schwarz (presents) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "eyjafjalla (arknights)",
      category: "Arknights",
      mainTags: "eyjafjalla (arknights), pink eyes, brown hair, gradient hair, long hair, arknights",
      enhancers: [
        "[black dress","white cloak","wide sleeves","red ribbons","black thighhighs","red garter straps]",
        "eyjafjalla (summer flower) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sussurro (arknights)",
      category: "Arknights",
      mainTags: "sussurro (arknights), brown eyes, brown hair, short hair, arknights",
      enhancers: [
        "[blue shirt","black skirt","pantyhose","white coat","wide sleeves","white gloves]",
        "sussurro (summer flower) (arknights)",
        "[sussurro (travel freely) (arknights)", "red coat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "hoshiguma (arknights)",
      category: "Arknights",
      mainTags: "hoshiguma (arknights), green eyes, black hair, long hair, arknights",
      enhancers: [
        "[black jacket around waist","black shirt","black capri pants","black armband","high collar","black gloves]",
        "hoshiguma (ronin huntress) (arknights)",
        "hoshiguma (seeker) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mountain (arknights)",
      category: "Arknights",
      mainTags: "fur dataset, mountain (arknights), purple eyes, white hair, short hair, furry male, muscular male, arknights",
      enhancers: [
        "[white shirt","white pants","black vest","white jacket","jacket on shoulders","fingerless gloves]",
        "mountain (book reader) (arknights)",
        "mountain (dark cloud) (arknights)"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "siege (arknights)",
      category: "Arknights",
      mainTags: "siege (arknights), orange eyes, brown hair, medium hair, updo, arknights",
      enhancers: [
        "[white tank top","red shorts","black leather jacket","fur-trimmed jacket","choker]",
        "siege (city destroyer) (arknights)",
        "siege (legacy) (arknights)",
        "siege (ambience synesthesia) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "silence (arknights)",
      category: "Arknights",
      mainTags: "silence (arknights), yellow eyes, brown hair, short hair, arknights",
      enhancers: [
        "[glasses","white dress","white coat","high collar","wide sleeves","asymmetrical legwear","single thighhigh","thigh strap]",
        "[silence (frosted breath) (arknights)","white coat","white scarf","black pantyhose","wide sleeves","feather trim","big feathers]",
        "[silence (lacquer) (arknights)","yellow coat","teal gloves","black shorts","see-through pants","transparent pants","knee pads]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ifrit (arknights)",
      category: "Arknights",
      mainTags: "ifrit (arknights), yellow eyes, blonde hair, short hair, arknights",
      enhancers: [
        "[twintails","white dress","wide sleeves","single kneehigh","thigh straps","black shirt]",
        "[ifrit (sunburn) (arknights)","waist apron","see-through clothes","transparent apron]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "blaze (arknights)",
      category: "Arknights",
      mainTags: "blaze (arknights), blue eyes, blue hair, long hair, arknights",
      enhancers: [
        "[white tank top","white coat","black skirt","single white thighhigh","thigh strap","multiple belts","fingerless gloves]",
        "blaze (burst feline) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "chongyue (arknights)",
      category: "Arknights",
      mainTags: "chongyue (arknights), brown eyes, brown hair, streaked hair, short hair, arknights",
      enhancers: [
        "[black coat","white pants","white shirt","black gloves]",
        "chongyue (alighting) (arknights)"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "virtuosa (arknights)",
      category: "Arknights",
      mainTags: "virtuosa (arknights), brown eyes, black hair, very long hair, two-tone hair, halo, detached wings,arknights",
      enhancers: [
        "[black dress","white jacket","black thighhighs","garter straps","black gloves]",
        "virtuosa (diversity oneness) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "nearl (arknights)",
      category: "Arknights",
      mainTags: "nearl (arknights), orange eyes, blonde hair, long hair, ponytail, arknights",
      enhancers: [
        "[armored dress","black dress","white boobplate","white shoulder pads","white gauntlets","black knee boots]",
        "[nearl the radiant knight (arknights)", "cape]",
        "[nearl (shimmering dew) (arknights)","one-piece swimsuit","eyewear on head","see-through clothes","swimsuit under clothes]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ho'olheyak (arknights)",
      category: "Arknights",
      mainTags: "ho'olheyak (arknights), blue eyes, grey hair, medium hair, arknights",
      enhancers: [
        "[white dress","hooded white coat","wide sleeves","pantyhose]",
        "ho'olheyak (carriage of the winds of time) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "swire (arknights)",
      category: "Arknights",
      mainTags: "swire (arknights), brown eyes, brown hair, long hair, arknights",
      enhancers: [
        "[black skirt","black vest","white shirt","black coat","two-sided coat","sheer thighhighs","thigh strap","thigh pouch","black hat]",
        "swire the elegant wit (arknights)",
        "swire (honor and splendor) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "muelsyse (arknights)",
      category: "Arknights",
      mainTags: "muelsyse (arknights), blue eyes, white hair, long hair, arknights",
      enhancers: ["[grey shirt","black high-waist skirt","white coat","choker","hair ornament]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ceobe (arknights)",
      category: "Arknights",
      mainTags: "ceobe (arknights), orange eyes, brown hair, long hair, arknights",
      enhancers: [
        "[black shirt","black skirt","multiple belts","thighhighs","cross-laced legwear","white jacket","wide sleeves]",
        "ceobe (unfettered) (arknights)",
        "ceobe (summer flowers) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "fiammetta (arknights)",
      category: "Arknights",
      mainTags: "fiammetta (arknights), red eyes, red hair, short hair, arknights",
      enhancers: ["[white shirt","black jacket","black skirt","thigh straps","red necktie]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "utage (arknights)",
      category: "Arknights",
      mainTags: "utage (arknights), pink eyes, brown hair, short hair, arknights",
      enhancers: [
        "[black shirt","black skirt","white coat","black thighhighs]",
        "[utage (summer flowers) (arknights)","sun hat","eyewear on head","pink-tinted eyewear]",
        "[black shirt","black jacket","black plaid skirt","yellow pantyhose]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "jessica (arknights)",
      category: "Arknights",
      mainTags: "jessica (arknights), green eyes, black hair, gradient hair, medium hair, streaked hair, high ponytail, arknights",
      enhancers: [
        "[black shirt","black shorts","black jacket","black gloves","single knee pad]",
        "[jessica (iron block) (arknights)", "gas mask]",
        "[jessica the liberated (arknights)", "tube top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "penance (arknights)",
      category: "Arknights",
      mainTags: "penance (arknights), brown eyes, brown hair, long hair, arknights",
      enhancers: [
        "[black dress","white ascot","black coat","thighhighs","single gauntlet","single arm guard]",
        "penance (occasionally flushed) (arknights)",
        "[penance (ambience synesthesia) (arknights)","leather jacket","black cropped jacket","fingerless gloves","black mini skirt","single side slit","cross-laced clothes","pantyhose","torn pantyhose]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "blemishine (arknights)",
      category: "Arknights",
      mainTags: "blemishine (arknights), yellow eyes, blonde hair, long hair, arknights",
      enhancers: [
        "[full armor","boobplate","shoulder pads","fur-trimmed cloak","gauntlets","hip armor","multiple belts","greaves]",
        "blemishine (moon catastrborn) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "pramanix (arknights)",
      category: "Arknights",
      mainTags: "pramanix (arknights), blue eyes, white hair, long hair, arknights",
      enhancers: [
        "[white cableknit turtleneck","white dress","pelvic curtain","side slit","white thighhighs","wide sleeves","black cloak]",
        "pramanix (caster's frost) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rosmontis (arknights)",
      category: "Arknights",
      mainTags: "rosmontis (arknights), blue eyes, white hair, short hair, arknights",
      enhancers: [
        "[black cape","two-sided cape","fingerless gloves","white dress","see-through clothes","thigh straps]",
        "rosmontis (become anew) (arknights)",
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "platinum (arknights)",
      category: "Arknights",
      mainTags: "platinum (arknights), yellow eyes, white hair, long hair, arknights",
      enhancers: [
        "[white shorts","white coat","wide sleeves","black thighhighs","garter straps]",
        "platinum (shimmering dew) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ptilopsis (arknights)",
      category: "Arknights",
      mainTags: "ptilopsis (arknights), orange eyes, white hair, medium hair, arknights",
      enhancers: [
        "[white dress","black coat","two-sided coat","two-tone gloves","orange armband]",
        "ptilopsis (elite ii) (arknights)",
        "ptilopsis (serenity) (arknights)",
        "ptilopsis (amongst the clouds) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "la pluma (arknights)",
      category: "Arknights",
      mainTags: "la pluma (arknights), brown eyes, black hair, short hair, arknights",
      enhancers: [
        "[fur-trimmed coat","black coat","black shorts","thigh straps","fingerless gloves]",
        "la pluma (summer flowers) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tequila (arknights)",
      category: "Arknights",
      mainTags: "tequila (arknights), blue eyes, blonde hair, short hair, arknights",
      enhancers: [
        "[white shorts","hooded white jacket","blue shirt","wristband]",
        "tequila (cardwinner) (arknights)"
    ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ling (arknights)",
      category: "Arknights",
      mainTags: "ling (arknights), blue eyes, blue hair, long hair, arknights",
      enhancers: [
        "[white shirt","black shorts","long white coat","yellow necktie","black elbow gloves]",
        "[ling (it does wash the strings) (arknights)","two-tone dress]",
        "ling (towering is cliff of nostalgia) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "frostnova (arknights)",
      category: "Arknights",
      mainTags: "frostnova (arknights), blue eyes, white hair, long hair, arknights",
      enhancers: ["[black shirt","black skirt","thighhighs","thighhighs under boots","white coat","gradient coat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "saga (arknights)",
      category: "Arknights",
      mainTags: "saga (arknights), orange eyes, brown hair, long hair, arknights",
      enhancers: [
        "[black kimono","knee pads","purple pants]",
        "saga (there they be) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "projekt red (arknights)",
      category: "Arknights",
      mainTags: "projekt red (arknights), red eyes, grey hair, short hair, arknights",
      enhancers: [
        "[two-tone dress","black pants","hooded red coat","fur-trimmed coat]",
        "projekt red (light breeze) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "lin (arknights)",
      category: "Arknights",
      mainTags: "lin (arknights), grey eyes, black hair, long hair, arknights",
      enhancers: ["lin (heavenly mirage) (arknights)"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "mizuki (arknights)",
      category: "Arknights",
      mainTags: "mizuki (arknights), pink eyes, blue hair, medium hair, arknights",
      enhancers: ["[black shirt","black shorts","blue jacket","blue hat","black leggings]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "bagpipe (arknights)",
      category: "Arknights",
      mainTags: "bagpipe (arknights), blue eyes, orange hair, long hair, arknights",
      enhancers: [
        "[green jacket","black jacket","black belt","black skirt","red skirt","plaid skirt","belt pouch","thighhighs]", 
        "bagpipe (queen no. 1) (arknights)",
        "[single braid","blue overall skirt","white skirt","white collared shirt","black belt]",
        "[bagpipe (royal guardswoman) (arknights)","black hat","black gloves","pantyhose","thigh straps]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "astesia (arknights)",
      category: "Arknights",
      mainTags: "astesia (arknights), purple eyes, black hair, long hair, arknights",
      enhancers: [
        "[white shirt","blue dress","sleeve cuffs","multiple belts]",
        "astesia (starseeker) (arknights)",
        "[astesia (frlibe on the palace) (arknights)", "high-waist dress", "detached sleeves", "thigh strap]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "whislash (arknights)",
      category: "Arknights",
      mainTags: "whislash (arknights), blue eyes, blonde hair, long hair, arknights",
      enhancers: [
        "[white cloak","black shirt","boobplate","black shorts","thighhighs","pelvic curtain","black hat]",
        "whislash (glory purple) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "magallan (arknights)",
      category: "Arknights",
      mainTags: "magallan (arknights), yellow eyes, brown hair, streaked hair, short hair, arknights",
      enhancers: [
        "[black coat","white gloves","pantyhose]",
        "[magallan (elite ii) (arknights)","brown ribbed sweater","white coat around waist","pantyhose","single white glove]",
        "[magallan (shaved-ice memories) (arknights)","coat around waist","blue pants]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "theresa (arknights)",
      category: "Arknights",
      mainTags: "theresa (arknights), orange eyes, white hair, long hair, arknights",
      enhancers: ["[white dress","black shirt","thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gravel (arknights)",
      category: "Arknights",
      mainTags: "gravel (arknights), orange eyes, pink hair, long hair, arknights",
      enhancers: [
        "[white leotard","boobplate","black dress","sheer thighhighs","torn thighhighs","thigh pouch]",
        "[gravel (modeling night) (arknights)","black hat","black gloves","white cloak]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "myrtle (arknights)",
      category: "Arknights",
      mainTags: "myrtle (arknights), green eyes, red hair, long hair, arknights",
      enhancers: [
        "[grey high-waist skirt","white tank top","white coat","wide sleeves","multiple belts]",
        "myrtle (summer flowers) (arknights)",
        "myrtle (light gold celebration) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "feater (arknights)",
      category: "Arknights",
      mainTags: "feater (arknights), orange eyes, white hair, streaked hair, short hair, arknights",
      enhancers: [
        "[white coat","black sleeves","wide sleeves","black china dress","patterned clothing","thigh strap]",
        "[feater (dojo star) (arknights)","black crop top","black pants","yellow jacket","jacket around waist]",
        "[feater (gourmet) (arknights)","white pants","white crop top","red cropped jacket","red-tinted eyewear]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gavial (arknights)",
      category: "Arknights",
      mainTags: "gavial (arknights), green eyes, green hair, short hair, crocodilian tail, arknights",
      enhancers: [
        "[sleeveless black dress","high collar dress","detached sleeves","black gloves]",
        "[gavial the invincible (arknights)","dreadlocks","green crop top","green shorts","kneehighs","detached sleeves","torn clothes]",
        "[gavial the invincible (holiday) (arknights)","blue bikini","white shorts","white jacket","blue sleeves","open fly","white hat]",
        "gavial (combat medic) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "aurora (arknights)",
      category: "Arknights",
      mainTags: "aurora (arknights), blue eyes, white hair, long hair, arknights",
      enhancers: [
        "[black hairband","black crop top","white cropped coat","hooded coat","breast curtains","grey shorts","blue pants","thigh cutouts","belt pouch]",
        "[aurora (elite ii) (arknights)","black tank top","white cropped jacket","hooded jacket","grey shorts","belt pouch","knee pads","black gloves]",
        "[aurora (polar catcher) (arknights)","orange shirt","orange shorts","black pants","pantyhose","black coat","black knee pads]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "liskarm (arknights)",
      category: "Arknights",
      mainTags: "liskarm (arknights), red eyes, white hair, short hair, arknights",
      enhancers: [
        "[black shirt","black skirt","thighhighs","blue coat]",
        "[liskarm (overload) (arknights)","black pantyhose","black shirt","black skirt","bulletproof vest]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "reed (arknights)",
      category: "Arknights",
      mainTags: "reed (arknights), blue eyes, white hair, long hair, arknights",
      enhancers: [
        "[black dress","thighhighs","criss-cross garter straps","white coat","red armband","two-sided coat]",
        "[reed the flame shadow (arknights)","white dress","long cape","floral print pantyhose","see-through sleeves","transparent sleeves","thigh straps]",
        "[reed the flame shadow (arknights)","reed the flame shadow (curator) (arknights)","witch hat","white dress","pantyhose","horns through headwear","black necktie","black jacket]",
        "[reed the flame shadow (arknights)","reed the flame shadow (summer flowers) (arknights)","mismatched bikini","black multi-strapped bikini bottom","blue bikini top","swimsuit cover-up","see-through shirt","thigh straps]",
        "[reed (emerald holiday) (arknights)","white dress","green strap","thigh straps","yellow shirt","black cape","two-sided cape]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gladiia (arknights)",
      category: "Arknights",
      mainTags: "gladiia (arknights), red eyes, white hair, long hair, arknights",
      enhancers: [
        "[white bodysuit","black shirt","white ascot","black coat","black thigh boots","black hat]",
        "gladiia (return) (arknights)",
        "gladiia (i am the tides) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "sora (arknights)",
      category: "Arknights",
      mainTags: "sora (arknights), red eyes, blonde hair, short hair, twintails, arknights",
      enhancers: [
        "[black dress","frilled dress","white shirt","wide sleeves","black gloves","white thighhighs]",
        "[sora (summer flowers) (arknights)","white bikini","white skirt","black belt","white cropped jacket","red bow]",
        "sora (melodiosa) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "gummy (arknights)",
      category: "Arknights",
      mainTags: "gummy (arknights), red eyes, blonde hair, short hair, arknights",
      enhancers: [
        "[blue sailor dress","black jacket","wide sleeves","sleeves past wrists","red pantyhose]",
        "[gummy (summer flowers) (arknights)","white dress","see-through dress","blue bikini skirt","blue hat]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "tomimi (arknights)",
      category: "Arknights",
      mainTags: "tomimi (arknights), yellow eyes, white hair, short hair, crocodilian tail, arknights",
      enhancers: [
        "[black dress","black hooded jacket","goggles around neck","flower","grey partially fingerless gloves","pelvic curtain","black thighhighs","torn clothes","black boots]",
        "tomimi (silent night) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "frostleaf (arknights)",
      category: "Arknights",
      mainTags: "frostleaf (arknights), red eyes, silver hair, gradient hair, medium hair, arknights",
      enhancers: [
        "[red coat","black shirt","red skirt","pantyhose","kneepads","detached collar","headphones]",
        "[frostleaf (breaking the ice) (arknights)","purple pants","purple scarf","cropped black jacket","ears through headwear]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "eunectes (arknights)",
      category: "Arknights",
      mainTags: "eunectes (arknights), yellow eyes, brown hair, short hair, snake tail, arknights",
      enhancers: [
        "[yellow dress","black tube top","single-shoulder dress","thigh pouch","black gloves","eyewear on head]",
        "eunectes (forgemaster) (arknights)"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "talulah (arknights)",
      category: "Arknights",
      mainTags: "talulah (arknights), green eyes, white hair, short hair, arknights",
      enhancers: [
        "[black dress","orange armband","pantyhose","thigh straps","wide sleeves]",
        "[talulah the fighter (arknights)","single knee pad","thigh strap]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "momiji (ninja gaiden)",
      category: "Ninja Gaiden",
      mainTags: "momiji (ninja gaiden), brown eyes, black hair, long hair, ninja gaiden",
      enhancers: ["[high ponytail","ninja","japanese clothes","red pants","thigh cutout","white tank top","red obi","detached sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "ryu hayabusa",
      category: "Ninja Gaiden",
      mainTags: "ryu hayabusa, green eyes, brown hair, short hair, claw weapon, ninja gaiden",
      enhancers: ["[--brown hair","--short hair","ninja","mask","helmet","black sleeveless bodysuit","black fingerless gloves","elbow gloves","armor","black scarf]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "rachel (ninja gaiden)",
      category: "Ninja Gaiden",
      mainTags: "rachel (ninja gaiden), blue eyes, blonde hair, long hair, ninja gaiden",
      enhancers: ["[black leotard","clothing cutout","black thigh boots","arm bands","black gloves","single detached sleeve","thigh straps","single garter strap]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Video Games"
  },
  {
      name: "frieren",
      category: "Frieren: Beyond Journey's End",
      mainTags: "frieren, green eyes, white hair, long hair, twintails, sousou no frieren",
      enhancers: ["[white skirt","striped shirt","black pantyhose","white capelet","collar]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fern (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "fern (sousou no frieren), purple eyes, purple hair, long hair, sousou no frieren",
      enhancers: ["[white dress","black cloak","center frills]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "stark (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "stark (sousou no frieren), red eyes, red hair, short hair, sousou no frieren",
      enhancers: ["[black shirt","black pants","red coat","bandaged arms","single fingerless glove","white sash]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ubel (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "ubel (sousou no frieren), black eyes, green hair, medium hair, side ponytail, sousou no frieren",
      enhancers: ["[black dress","spaghetti strap","choker","belt","thigh bands","single elbow glove]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "himmel (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "himmel (sousou no frieren), blue eyes, blue hair, short hair, sousou no frieren",
      enhancers: ["[blue tunic","white pants","white cloak]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aura (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "aura (sousou no frieren), purple eyes, pink hair, long hair, horns, sousou no frieren",
      enhancers: ["[black dress","white skirt","black thigh boots","black elbow gloves","red bow","red cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "serie (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "serie (sousou no frieren), yellow eyes, blonde hair, long hair, sousou no frieren",
      enhancers: ["[white shirt","white shorts","brooch","sleeves past wrists","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "land (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "land (sousou no frieren), green eyes, blonde hair, short hair, sousou no frieren",
      enhancers: ["[glasses","white shirt","mandarin collar","shoulder cape","black trim","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eisen (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "eisen (sousou no frieren), brown eyes, grey hair, short hair, dwarf, sousou no frieren",
      enhancers: ["[long beard","horned helmet","shoulder pads","red cloak","brown tunic","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "heiter",
      category: "Frieren: Beyond Journey's End",
      mainTags: "heiter, green eyes, blonde hair, short hair, sousou no frieren",
      enhancers: ["[glasses","black robe","gold trim","wide sleeves","black pants","white shirt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lawine (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "lawine (sousou no frieren), blue eyes, grey hair, long hair, sousou no frieren",
      enhancers: ["[blue dress","cross-laced clothes","white shirt","blue capelet","wide sleeves","white knee boots","white belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kanne (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "kanne (sousou no frieren), blue eyes, blonde hair, short hair, sousou no frieren",
      enhancers: ["[white crop top","sleeves past elbows","shoulder cutout","green shorts","white belt","white thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "laufen (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "laufen (sousou no frieren), brown eyes, orange hair, double bun, sousou no frieren",
      enhancers: ["[blue halterneck dress","sleeveless dress","blue elbow gloves","pelvic curtain","blue knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sense (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "sense (sousou no frieren), brown eyes, blonde hair, long hair, sousou no frieren",
      enhancers: ["[white dress","frilled collar","blue capelet]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "linie (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "linie (sousou no frieren), purple eyes, pink hair, medium hair, horns, sousou no frieren",
      enhancers: ["[white shirt","wide sleeves","brown ribbons","brown corset","cross-laced top","white skirt","brown dress","brown pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "methode (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "methode (sousou no frieren), brown eyes, blonde hair, long hair, sousou no frieren",
      enhancers: ["[white shirt","black shorts","criss-cross halter","black corset","red pantyhose","black knee boots","white cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "flamme (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "flamme (sousou no frieren), green eyes, red hair, long hair, sousou no frieren",
      enhancers: ["[white dress","black armband","cross-laced sandals]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "wirbel (sousou no frieren)",
      category: "Frieren: Beyond Journey's End",
      mainTags: "wirbel (sousou no frieren), green eyes, brown hair, short hair, sousou no frieren",
      enhancers: ["[fur-trimmed coat","white coat","white shirt","straps","blue pants","thigh belts]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "okajima rokuro",
      category: "Black Lagoon",
      mainTags: "okajima rokuro, brown eyes, black hair, short hair, black lagoon",
      enhancers: ["[white shirt","green necktie","blue pants","belt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eda (black lagoon)",
      category: "Black Lagoon",
      mainTags: "eda (black lagoon), blue eyes, blonde hair, long hair, black lagoon",
      enhancers: [
        "[nun","habit","pink-tinted eyewear","black dress]",
        "[green miniskirt","pink tank top","crop top","white belt","pink-tinted eyewear]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fabiola iglesias",
      category: "Black Lagoon",
      mainTags: "fabiola iglesias, green eyes, green hair, long hair, black lagoon",
      enhancers: ["[maid","maid headdress","black dress","oversized clothes","waist apron]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ranma-chan",
      category: "Ranma 1/2",
      mainTags: "ranma-chan, blue eyes, red hair, long hair, single braid, ranma 1/2",
      enhancers: ["[chinese clothes","red shirt","blue pants","blue sash]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shampoo (ranma 1/2)",
      category: "Ranma 1/2",
      mainTags: "shampoo (ranma 1/2), purple eyes, purple hair, long hair, ranma 1/2",
      enhancers: ["[red china dress","yellow sash","single side slit]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tendou akane",
      category: "Ranma 1/2",
      mainTags: "tendou akane, brown eyes, black hair, short hair, ranma 1/2",
      enhancers: ["[fuurinkan high school uniform","blue pinafore dress","white shirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "saotome ranma",
      category: "Ranma 1/2",
      mainTags: "saotome ranma, blue eyes, black hair, short hair, single braid, ranma 1/2",
      enhancers: ["[chinese clothes","red skirt","blue pants","blue sash]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hibiki ryouga",
      category: "Ranma 1/2",
      mainTags: "hibiki ryouga, brown eyes, black hair, short hair, ranma 1/2",
      enhancers: ["[yellow headband","chinese clothes","yellow shirt","black pants","black sash]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tendou nabiki",
      category: "Ranma 1/2",
      mainTags: "tendou nabiki, brown eyes, brown hair, short hair, ranma 1/2",
      enhancers: ["[green tank top","high-waist shorts","white shorts]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kuonji ukyou",
      category: "Ranma 1/2",
      mainTags: "kuonji ukyou, brown eyes, brown hair, long hair, ranma 1/2",
      enhancers: ["[white bow","blue kimono","black leggings]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mousse (ranma 1/2)",
      category: "Ranma 1/2",
      mainTags: "mousse (ranma 1/2), brown eyes, black hair, long hair, ranma 1/2",
      enhancers: ["[white robe","diamond (symbol)","wide sleeves","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kunou kodachi",
      category: "Ranma 1/2",
      mainTags: "kunou kodachi, purple eyes, black hair, long hair, ranma 1/2",
      enhancers: ["black highleg leotard"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tendou kasumi",
      category: "Ranma 1/2",
      mainTags: "tendou kasumi, brown eyes, brown hair, long hair, ranma 1/2",
      enhancers: ["[yellow dress","white apron","hair bow]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mikasa ackerman",
      category: "Attack on Titan",
      mainTags: "mikasa ackerman, red eyes, black hair, long hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eren yeager",
      category: "Attack on Titan",
      mainTags: "eren yeager, green eyes, brown hair, short hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "levi (shingeki no kyojin)",
      category: "Attack on Titan",
      mainTags: "levi (shingeki no kyojin), grey eyes, black hair, short hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "krista lenz",
      category: "Attack on Titan",
      mainTags: "krista lenz, blue eyes, blonde hair, long hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ymir (shingeki no kyojin)",
      category: "Attack on Titan",
      mainTags: "ymir (shingeki no kyojin), brown eyes, brown hair, short hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "armin arlert",
      category: "Attack on Titan",
      mainTags: "armin arlert, blue eyes, blonde hair, short hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "annie leonhart",
      category: "Attack on Titan",
      mainTags: "annie leonhart, blue eyes, blonde hair, short hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hange zoe",
      category: "Attack on Titan",
      mainTags: "hange zoe, brown eyes, brown hair, long hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sasha blouse",
      category: "Attack on Titan",
      mainTags: "sasha blouse, brown eyes, brown hair, long hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "erwin smith",
      category: "Attack on Titan",
      mainTags: "erwin smith, blue eyes, blonde hair, short hair, shingeki no kyojin",
      enhancers: [
      "[paradis military uniform", "brown jacket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pieck finger",
      category: "Attack on Titan",
      mainTags: "pieck finger, brown eyes, black hair, long hair, shingeki no kyojin",
      enhancers: ["[marley military uniform","jacket","long pleated skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "merida (brave)",
      category: "Disney",
      mainTags: "merida (brave), blue eyes, red hair, very long hair, brave (pixar), disney",
      enhancers: ["green medieval dress"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "moana waialiki",
      category: "Disney",
      mainTags: "moana waialiki, dark skin, dark-skinned female, brown eyes, brown hair, very long hair, moana (movie), disney",
      enhancers: ["[red tube top","white skirt","necklace","red sash]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "vanellope von schweetz",
      category: "Disney",
      mainTags: "vanellope von schweetz, brown eyes, black hair, long hair, ponytail, wreck-it-ralph, disney",
      enhancers: ["[green hoodie","brown skirt","striped pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dark magician girl",
      category: "Yu-Gi-Oh",
      mainTags: "dark magician girl, green eyes, blonde hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[blue off-shoulder dress","blue hat","pink skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dark magician",
      category: "Yu-Gi-Oh",
      mainTags: "dark magician, green eyes, purple hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[purple armor","purple helmet","purple shoulder pads","purple arm guards","purple greaves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gagaga girl",
      category: "Yu-Gi-Oh",
      mainTags: "gagaga girl, brown eyes, blonde hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[black hat","sleeveless black dress","detached sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "silent magician",
      category: "Yu-Gi-Oh",
      mainTags: "silent magician, blue eyes, white hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[white hat","blue dress","thigh cutout","white gloves","shoulder pads","white cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dogmatika ecclesia the virtuous",
      category: "Yu-Gi-Oh",
      mainTags: "dogmatika ecclesia the virtuous, blue eyes, blonde hair, long hair, horns, duel monster, yu-gi-oh!",
      enhancers: ["[armor","full armor","boobplate","shoulder pads","gauntlets","greaves","white cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "blazing cartesia the virtuous",
      category: "Yu-Gi-Oh",
      mainTags: "blazing cartesia the virtuous, red eyes, red hair, long hair, horns, duel monster, yu-gi-oh!",
      enhancers: ["[red dress","see-through cleavage","long black veil","black gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lovely labrynth of the silver castle",
      category: "Yu-Gi-Oh",
      mainTags: "lovely labrynth of the silver castle, red eyes, white hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[white dress","detached sleeves","silver corset","white pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "arianna the labrynth servant",
      category: "Yu-Gi-Oh",
      mainTags: "arianna the labrynth servant, green eyes, green hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[face mark","maid","maid headdress","black dress","two-tone pantyhose","black pantyhose","green pantyhose","green wings","horns","sleeves past wrists","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "laundry dragonmaid",
      category: "Yu-Gi-Oh",
      mainTags: "laundry dragonmaid, blue eyes, blue hair, medium hair, duel monster, yu-gi-oh!",
      enhancers: ["[eastern dragon horns","japanese clothes","kimono","wa maid","fingerless gloves","purple sleeves","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kitchen dragonmaid",
      category: "Yu-Gi-Oh",
      mainTags: "kitchen dragonmaid, red eyes, red hair, medium hair, duel monster, yu-gi-oh!",
      enhancers: ["[brown dress","waist apron","juliet sleeves","chef","frilled apron","brown ribbon]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "parlor dragonmaid",
      category: "Yu-Gi-Oh",
      mainTags: "parlor dragonmaid, green eyes, black hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["maid"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chamber dragonmaid",
      category: "Yu-Gi-Oh",
      mainTags: "chamber dragonmaid, yellow eyes, black hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[maid","black dress","maid headdress","yellow belt","wrist cuffs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "house dragonmaid",
      category: "Yu-Gi-Oh",
      mainTags: "house dragonmaid, blue eyes, grey hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[maid","maid headdress","black dress","red ascot","white apron","gauntlets]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nurse dragonmaid",
      category: "Yu-Gi-Oh",
      mainTags: "nurse dragonmaid, green eyes, pink hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[nurse","nurse cap","pink dress","white nurse apron]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yubel",
      category: "Yu-Gi-Oh",
      mainTags: "yubel, blue eyes, black hair, split-color hair, short hair, monster girl, wings, third eye, forehead eye",
      enhancers: ["multicolored bodysuit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "diabellstar the black witch",
      category: "Yu-Gi-Oh",
      mainTags: "diabellstar the black witch, yellow eyes, black hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[half mask","black hooded cloak","two-sided cloak","sleeveless black dress","red skirt","black thigh boots","garter straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sky striker ace - raye",
      category: "Yu-Gi-Oh",
      mainTags: "sky striker ace - raye, brown eyes, red hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[white dress","double-breasted","two-tone jacket","black necktie","thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tearlaments kitkallos",
      category: "Yu-Gi-Oh",
      mainTags: "tearlaments kitkallos, blue eyes, blue hair, long hair, monster girl, fish girl, head fins, duel monster, yu-gi-oh!",
      enhancers: ["[blue dress","detached sleeves","halterneck]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "wynn the wind charmer",
      category: "Yu-Gi-Oh",
      mainTags: "wynn the wind charmer, green eyes, green hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[updo","brown robe","tied robe","white shirt","black skirt","knee boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hiita (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "hiita (yu-gi-oh!), brown eyes, red hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[hiita the fire charmer","black miniskirt","white shirt","brown robe","black tank top","belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "i:p masquerena",
      category: "Yu-Gi-Oh",
      mainTags: "i:p masquerena, purple eyes, black hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[twintails","purple crop top","purple pants","roller skates","purple gloves","cat mask","mask on head]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "diabellze the original sinkeeper",
      category: "Yu-Gi-Oh",
      mainTags: "diabellze the original sinkeeper, heterochromia, red eye, blue eye, blonde hair, long hair, duel monster, yu-gi-oh!",
      enhancers: ["[witch hat","white dress","straps","white hooded jacket","two-sided jacket","asymmetrical clothes","single white glove","single black glove","wide sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "s-force rappa chiyomaru",
      category: "Yu-Gi-Oh",
      mainTags: "s-force rappa chiyomaru, green eyes, black hair, short hair, duel monster, yu-gi-oh!",
      enhancers: ["[ninja","black headband","sleeveless yellow shirt","detached sleeves","fingerless gloves","black scarf","black sash","pelvic curtain","metal thigh boots]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "harpie lady",
      category: "Yu-Gi-Oh",
      mainTags: "harpie lady, green eyes, red hair, long hair, monster girl, harpy, feathered wings, talons, duel monster, yu-gi-oh!",
      enhancers: ["[colored skin", "blue skin", "harpie lady (normal monster)", "blue slingshot swimsuit","pink leggings]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
    name: "harpie girl (yu-gi-oh!)",
    category: "Yu-Gi-Oh",
    mainTags: "harpie girl (yu-gi-oh!), monster girl, harpy, feathered wings, talons, blue eyes, blonde hair, long hair, duel monster, yu-gi-oh!",
    enhancers: ["[black leotard","cleavage cutout","stomach cutout","single leg pantyhose","pink pantyhose]"],
    defaultGender: "girl",
    genderswapAvailable: true,
    ageUpAvailable: true,
    mediaType: "Shows or Movies"
},
  {
      name: "kitt (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "kitt (yu-gi-oh!), yellow eyes, pink hair, short hair, fox ears, duel monster, yu-gi-oh!",
      enhancers: [
      "[tri-brigade kitt", "orange tube top", "goggles on head", "jumpsuit around waist]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yuki judai",
      category: "Yu-Gi-Oh",
      mainTags: "yuki judai, brown eyes, brown hair, short hair, yu-gi-oh! gx, yu-gi-oh!",
      enhancers: ["[black shirt","white pants","red jacket","high collar]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tenjouin asuka",
      category: "Yu-Gi-Oh",
      mainTags: "tenjouin asuka, blue eyes, blonde hair, long hair, yu-gi-oh! gx, yu-gi-oh!",
      enhancers: ["[sleeveless black shirt","open vest","white cropped vest","blue skirt","blue fingerless gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "manjoume jun",
      category: "Yu-Gi-Oh",
      mainTags: "manjoume jun, grey eyes, black hair, short hair, yu-gi-oh! gx, yu-gi-oh!",
      enhancers: [
      "[black coat", "black skirt", "belt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "johan andersen",
      category: "Yu-Gi-Oh",
      mainTags: "johan andersen, green eyes, blue hair, short hair, yu-gi-oh! gx, yu-gi-oh!",
      enhancers: ["blue vest"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "marufuji ryo",
      category: "Yu-Gi-Oh",
      mainTags: "marufuji ryo, blue eyes, black hair, short hair, yu-gi-oh! gx, yu-gi-oh!",
      enhancers: ["duel academy uniform (yu-gi-oh! gx)"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fudo yusei",
      category: "Yu-Gi-Oh",
      mainTags: "fudo yusei, black hair, short hair, streaked hair, spiked hair, yu-gi-oh! 5d's, yu-gi-oh!",
      enhancers: ["[blue jacket","black shirt","jeans","knee pads","brown gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "izayoi aki",
      category: "Yu-Gi-Oh",
      mainTags: "izayoi aki, brown eyes, red hair, medium hair, yu-gi-oh! 5d's, yu-gi-oh!",
      enhancers: ["[black dress","white sleeves","black fingerless gloves","elbow gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jack atlas",
      category: "Yu-Gi-Oh",
      mainTags: "jack atlas, purple eyes, blonde hair, short hair, yu-gi-oh! 5d's, yu-gi-oh!",
      enhancers: ["[white coat","blue pants","white shirt","two-sided coat]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bruno (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "bruno (yu-gi-oh!), blue eyes, blue hair, medium hair, yu-gi-oh! 5d's, yu-gi-oh!",
      enhancers: ["[multicolored jacket","two-tone shirt","jeans]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "carly nagisa",
      category: "Yu-Gi-Oh",
      mainTags: "carly nagisa, blue eyes, black hair, long hair, yu-gi-oh! 5d's, yu-gi-oh!",
      enhancers: [
        "[glasses", "orange vest","jeans","horizontal-striped shirt","two-tone shirt]",
        "[black crop top","black skirt","black sclera","white belt","black elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "luca (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "luca (yu-gi-oh!), brown eyes, green hair, short hair, yu-gi-oh! 5d's, yu-gi-oh!",
      enhancers: ["[red skirt","cropped pink jacket","white shorts]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kaiba seto",
      category: "Yu-Gi-Oh",
      mainTags: "kaiba seto, green eyes, brown hair, short hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: ["[black shirt","black pants","white coat","high collar","bracers]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "muto yugi",
      category: "Yu-Gi-Oh",
      mainTags: "muto yugi, purple eyes, black hair, short hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: ["[domino high school uniform", "blue suit jacket","blue pants","white shirt","millennium puzzle]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yami yugi",
      category: "Yu-Gi-Oh",
      mainTags: "yami yugi, purple eyes, black hair, short hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: ["[spiked hair", "open blue jacket", "millennium puzzle]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mazaki anzu",
      category: "Yu-Gi-Oh",
      mainTags: "mazaki anzu, brown eyes, brown hair, medium hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: [
        "[domino high school uniform","pink jacket","blue bowtie","blue skirt","black thighhighs]",
        "[sleeveless teal shirt","blue shorts","white belt","multiple bracelets","white thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "jonouchi katsuya",
      category: "Yu-Gi-Oh",
      mainTags: "jonouchi katsuya, brown eyes, blonde hair, short hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: [
        "[domino high school uniform","blue jacket","blue pants]",
        "[green jacket","high collar","two-tone shirt","single fingerless glove","jeans]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ishizu ishtar",
      category: "Yu-Gi-Oh",
      mainTags: "ishizu ishtar, dark skin, dark-skinned female, pink eyes, black hair, long hair, yu-gi-oh!",
      enhancers: ["[ancient egyptian","white dress","o-ring","millennium necklace","veil]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kujaku mai",
      category: "Yu-Gi-Oh",
      mainTags: "kujaku mai, purple eyes, blonde hair, long hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: ["[purple skirt","purple jacket","white crop top","white detached sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yami bakura",
      category: "Yu-Gi-Oh",
      mainTags: "yami bakura, brown eyes, white hair, long hair, yu-gi-oh! duel monsters, yu-gi-oh!",
      enhancers: ["[blue jacket", "millennium ring", "striped shirt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hiiragi yuzu",
      category: "Yu-Gi-Oh",
      mainTags: "hiiragi yuzu, blue eyes, pink hair, short hair, yu-gi-oh! arc-v, yu-gi-oh!",
      enhancers: ["[school uniform","pink necktie","two-tone sleeveless shirt","red skirt","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sakaki yuya",
      category: "Yu-Gi-Oh",
      mainTags: "sakaki yuya, red eyes, red hair, green hair, multicolored hair, short hair, yu-gi-oh! arc-v, yu-gi-oh!",
      enhancers: ["[red shirt","green cargo pants","wrist cuffs","white cape","goggles on head]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "serena (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "serena (yu-gi-oh!), green eyes, purple hair, medium hair, updo, yu-gi-oh! arc-v, yu-gi-oh!",
      enhancers: ["[red cropped jacket","black vest","white turtleneck","white skirt","brown belt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kurosaki ruri",
      category: "Yu-Gi-Oh",
      mainTags: "kurosaki ruri, red eyes, black hair, streaked hair, long hair, yu-gi-oh! arc-v, yu-gi-oh!",
      enhancers: ["[white shirt","purple skirt","pants under skirt","multiple belts]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rin (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "rin (yu-gi-oh!), red eyes, green hair, short hair, yu-gi-oh! arc-v, yu-gi-oh!",
      enhancers: ["[pink shorts","white thigh boots","multicolored jacket","choker]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mizuki kotori (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "mizuki kotori (yu-gi-oh!), brown eyes, green hair, medium hair, yu-gi-oh! zexal, yu-gi-oh!",
      enhancers: ["[sleeveless shirt","pink skirt","brown belt","kneehighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tsukumo yuma",
      category: "Yu-Gi-Oh",
      mainTags: "tsukumo yuma, red eyes, black hair, streaked hair, short hair, yu-gi-oh! zexal, yu-gi-oh!",
      enhancers: ["[red vest","white pants","two-tone shirt","belt]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kamishiro rio",
      category: "Yu-Gi-Oh",
      mainTags: "kamishiro rio, purple eyes, blue hair, gradient hair, long hair, yu-gi-oh! zexal, yu-gi-oh!",
      enhancers: ["[white dress","pink dress","red ascot","black thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kirishima romin",
      category: "Yu-Gi-Oh",
      mainTags: "kirishima romin, blue eyes, purple hair, long hair, yu-gi-oh! sevens, yu-gi-oh!",
      enhancers: [
        "[black tank top","red skirt","blue pants","multiple belts","belt pouch]",
        "[aqua dress","white cropped jacket","black pantyhose","white knee boots","cross-laced footwear]",
        "[orange sweater","blue pleated skirt","off-shoulder","black leotard","yellow pantyhose]"
    ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "zaizen aoi",
      category: "Yu-Gi-Oh",
      mainTags: "zaizen aoi, brown eyes, brown hair, short hair, yu-gi-oh! vrains, yu-gi-oh!",
      enhancers: ["[black jacket","blue necktie","black pleated skirt","white sweater","white shirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "blue angel (yu-gi-oh!)",
      category: "Yu-Gi-Oh",
      mainTags: "blue angel (yu-gi-oh!), blue eyes, blue hair, long hair, yu-gi-oh! vrains, yu-gi-oh!",
      enhancers: ["[white shirt","white wings","hearts","blue necktie","blue wrist cuffs","blue skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rem (re:zero)",
      category: "Re: Zero",
      mainTags: "rem (re:zero), blue eyes, blue hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black dress","wide sleeves","maid headdress","detached collar","detached sleeves","white thighhighs","garter straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ram (re:zero)",
      category: "Re: Zero",
      mainTags: "ram (re:zero), red eyes, pink hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black dress","wide sleeves","maid headdress","detached collar","detached sleeves","white thighhighs","garter straps]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "emilia (re:zero)",
      category: "Re: Zero",
      mainTags: "emilia (re:zero), purple eyes, silver hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[white dress","wide sleeves","detached collar","white thighhighs]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "natsuki subaru",
      category: "Re: Zero",
      mainTags: "natsuki subaru, brown eyes, black hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["track suit"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "beatrice (re:zero)",
      category: "Re: Zero",
      mainTags: "beatrice (re:zero), blue eyes, blonde hair, long hair, twin drills, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[red dress","red capelet","fur-trimmed capelet","striped pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "echidna (re:zero)",
      category: "Re: Zero",
      mainTags: "echidna (re:zero), black eyes, white hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[butterfly hair ornament","black dress","black capelet]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "felix argyle",
      category: "Re: Zero",
      mainTags: "felix argyle, yellow eyes, brown hair, short hair, cat boy, cat tail, animal ear fluff, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[white dress","black pantyhose","blue striped thighhighs","blue ribbon]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "felt (re:zero)",
      category: "Re: Zero",
      mainTags: "felt (re:zero), red eyes, blonde hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black tube top","brown vest","fur-trimmed vest","asymmetric legwear","brown belt","brown gloves","scarf]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "petra leyte",
      category: "Re: Zero",
      mainTags: "petra leyte, blue eyes, orange hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[maid","black dress","detached collar","detached sleeves","white pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "frederica baumann",
      category: "Re: Zero",
      mainTags: "frederica baumann, green eyes, blonde hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[maid","black dress","detached collar","waist apron]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elsa granhilte",
      category: "Re: Zero",
      mainTags: "elsa granhilte, purple eyes, black hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black dress","plunging neckline","brown pantyhose","black cloak","two-sided cloak","pelvic curtain","fingerless elbow gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "crusch karsten",
      category: "Re: Zero",
      mainTags: "crusch karsten, red eyes, green hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[military uniform","blue pants","blue jacket","blue hat","white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "priscilla barielle",
      category: "Re: Zero",
      mainTags: "priscilla barielle, red eyes, orange hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[aristocractic clothes","off-shoulder dress","red dress","black fingerless gloves","elbow gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "reinhard van astrea",
      category: "Re: Zero",
      mainTags: "reinhard van astrea, blue eyes, red hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[white coat","white pants","black gloves","high collar]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shaula (re:zero)",
      category: "Re: Zero",
      mainTags: "shaula (re:zero), green eyes, black hair, very long hair, multi-tied hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black bikini top","black short shorts","belt","black hooded cloak","two-sided cloak","hood down]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "otto suewen",
      category: "Re: Zero",
      mainTags: "otto suewen, grey eyes, grey hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[green shirt","black pants","green cloak","green hat","belt pouch]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "meili portroute",
      category: "Re: Zero",
      mainTags: "meili portroute, green eyes, blue hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black dress","black cloak","two-sided cloak","striped pantyhose]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "minerva (re:zero)",
      category: "Re: Zero",
      mainTags: "minerva (re:zero), blue eyes, blonde hair, medium hair, high side ponytail, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[purple dress","pantyhose","white thigh boots","white coat","detached sleeves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pandora (re:zero)",
      category: "Re: Zero",
      mainTags: "pandora (re:zero), blue eyes, blonde hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[white dress","single off shoulder]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "petelgeuse romaneeconti",
      category: "Re: Zero",
      mainTags: "petelgeuse romaneeconti, colored skin, green skin, bulging eyes, green hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black pants","black cape","high collar]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "anastasia hoshin",
      category: "Re: Zero",
      mainTags: "anastasia hoshin, blue eyes, purple hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[white hat","white cape","white dress","fur trim]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "satella (re:zero)",
      category: "Re: Zero",
      mainTags: "satella (re:zero), purple eyes, white hair, long hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[long dress","black dress","black veil","off-shoulder dress","halterneck]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "garfiel tinsel",
      category: "Re: Zero",
      mainTags: "garfiel tinsel, green eyes, blonde hair, short hair, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[black vest","purple coat","coat around waist","black pants","fingerless gloves]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mimi pearlbaton",
      category: "Re: Zero",
      mainTags: "mimi pearlbaton, green eyes, orange hair, short hair, cat girl, cat ears, cat tail, re:zero kara hajimeru isekai seikatsu",
      enhancers: ["[white coat","white capelet","white dress","wide sleeves","orange mittens]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "velma dinkley",
      category: "Scooby-Doo (Series)",
      mainTags: "velma dinkley, brown eyes, glasses, brown hair, short hair, scooby-doo",
      enhancers: ["[orange turtleneck sweater","red pleated skirt","orange knee socks]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "daphne blake",
      category: "Scooby-Doo (Series)",
      mainTags: "daphne blake, purple eyes, orange hair, long hair, scooby-doo",
      enhancers: ["[purple dress","pink pantyhose","purple headband","green scarf]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shaggy rogers",
      category: "Scooby-Doo (Series)",
      mainTags: "shaggy rogers, brown eyes, brown hair, short hair, scooby-doo",
      enhancers: ["[green t-shirt","white shirt","white long sleeves","shirt under shirt","brown pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fred jones",
      category: "Scooby-Doo (Series)",
      mainTags: "fred jones, muscular male, blue eyes, blonde hair, short hair, scooby-doo",
      enhancers: ["[white shirt","blue collar","orange ascot","blue pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "guts (berserk)",
      category: "Berserk",
      mainTags: "guts (berserk), muscular male, brown eyes, black hair, short hair, one eye closed, berserk",
      enhancers: ["[armor","shoulder pads","chestplate","gauntlets","greaves","cloak]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "griffith (berserk)",
      category: "Berserk",
      mainTags: "griffith (berserk), blue eyes, white hair, long hair, berserk",
      enhancers: ["[full armor","silver armor","chestplate","gauntlets","leg guards","white cape","two-sided cape]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "casca (berserk)",
      category: "Berserk",
      mainTags: "casca (berserk), dark skin, dark-skinned female, brown eyes, brown, hair, short hair, berserk",
      enhancers: ["[red cropped cape","brown shirt","boobplate","brown gloves","brown pants]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "schierke (berserk)",
      category: "Berserk",
      mainTags: "schierke (berserk), green eyes, brown hair, long hair, berserk",
      enhancers: ["[purple witch hat","purple robe","high collar]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "slan (berserk)",
      category: "Berserk",
      mainTags: "slan (berserk), purple eyes, black hair, long hair, aqua hair, tentacle hair, demon girl, demon wings, berserk",
      enhancers: ["[topless female","nude","black corset","choker","convenient censoring]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "clare (claymore)",
      category: "Claymore",
      mainTags: "clare (claymore), silver eyes, blonde hair, short hair, claymore (series)",
      enhancers: ["[armor","shoulderpads","white bodysuit","armored skirt","wrist cuffs","white gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "teresa (claymore)",
      category: "Claymore",
      mainTags: "teresa (claymore), silver eyes, blonde hair, long hair, claymore (series)",
      enhancers: ["[armor","white bodysuit","black cape","shoulder pads","metal skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "miria (claymore)",
      category: "Claymore",
      mainTags: "miria (claymore), silver eyes, brown hair, short hair, claymore (series)",
      enhancers: ["[scar on face","white bodysuit","shoulder pads","vambraces","metal skirt]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "galatea (claymore)",
      category: "Claymore",
      mainTags: "galatea (claymore), silver eyes, blonde hair, long hair, claymore (series)",
      enhancers: ["[armor","white bodysuit","shoulder pads","black cape","vambraces]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "helen (claymore)",
      category: "Claymore",
      mainTags: "helen (claymore), silver eyes, brown hair, short hair, claymore (series)",
      enhancers: ["[armor","white bodysuit","shoulder pads","black cape","vambraces]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lina inverse",
      category: "The Slayers",
      mainTags: "lina inverse, red eyes, red hair, long hair, slayers",
      enhancers: ["[black headband","red pants","red shirt","yellow tube top","black cape","white elbow gloves]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "naga the serpent",
      category: "The Slayers",
      mainTags: "naga the serpent, purple eyes, purple hair, very long hair, slayers",
      enhancers: ["[black bikini","multi-strapped bikini bottom","black gloves","detached collar","pauldrons","circlet","skull necklace","multicolored cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "amelia wil tesla seyruun",
      category: "The Slayers",
      mainTags: "amelia wil tesla seyruun, blue eyes, purple hair, short hair, slayers",
      enhancers: ["[yellow shirt","yellow pants","pink trim","yellow cloak","two-sided cloak]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "xelloss",
      category: "The Slayers",
      mainTags: "xelloss, purple eyes, purple hair, medium hair, slayers",
      enhancers: ["[yellow shirt","blue gloves","green cloak","black pants]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "zelgadiss graywords",
      category: "The Slayers",
      mainTags: "zelgadiss graywords, grey eyes, purple hair, short hair, colored skin, blue skin, slayers",
      enhancers: ["[yellow pants","yellow shirt","yellow cape","two-sided cape","multiple belts]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "filia ul copt",
      category: "The Slayers",
      mainTags: "filia ul copt, blue eyes, blonde hair, long hair, slayers",
      enhancers: ["[pink dress","white cloak","two-sided cloak","blue cloak","white gloves","white hat]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sylphiel nels lahda",
      category: "The Slayers",
      mainTags: "sylphiel nels lahda, blue eyes, black hair, long hair, slayers",
      enhancers: ["[purple shirt","blue pantyhose","purple elbow gloves","pauldrons","black cape","two-sided cape]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kaname madoka",
      category: "Puella Magi Madoka Magica",
      mainTags: "kaname madoka, pink eyes, pink hair, long hair, twintails, mahou shoujo madoka magica (anime)",
      enhancers: [
      "[kaname madoka (magical girl)", "frilled dress", "magical girl]",
      "[plaid skirt", "white shirt", "long sleeves", "white thighhighs]", "ultimate madoka"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akemi homura",
      category: "Puella Magi Madoka Magica",
      mainTags: "akemi homura, purple eyes, black hair, long hair, mahou shoujo madoka magica (anime)",
      enhancers: [
      "[akemi homura (magical girl)", "collared capelet", "magical girl]",
      "[plaid skirt", "white shirt", "long sleeves", "white thighhighs]",
      "[akuma homura", "feathered wings", "black dress", "elbow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "miki sayaka",
      category: "Puella Magi Madoka Magica",
      mainTags: "miki sayaka, blue eyes, blue hair, short hair, mahou shoujo madoka magica (anime)",
      enhancers: [
      "[miki sayaka (magical girl)", "cape", "armored dress]",
      "[plaid skirt", "white shirt", "long sleeves", "black knee socks]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tomoe mami",
      category: "Puella Magi Madoka Magica",
      mainTags: "tomoe mami, brown eyes, blonde hair, long hair, twin drills, mahou shoujo madoka magica (anime)",
      enhancers: [
      "[tomoe mami (magical girl)", "puffy short sleeves", "detached sleeves", "corset]",
      "[plaid skirt", "white shirt", "long sleeves", "red ribbon", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sakura kyoko",
      category: "Puella Magi Madoka Magica",
      mainTags: "sakura kyoko, red eyes, red hair, long hair, ponytail, mahou shoujo madoka magica (anime)",
      enhancers: [
      "[sakura kyoko (magical girl)", "detached sleeves", "magical girl", "red dress]",
      "[green jacket", "denim shorts", "fur-trimmed shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akuma homura",
      category: "Puella Magi Madoka Magica",
      mainTags: "akuma homura, purple eyes, black hair, long hair",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shizuki hitomi",
      category: "Puella Magi Madoka Magica",
      mainTags: "shizuki hitomi, green eyes, green hair, long hair, mahou shoujo madoka magica (anime)",
      enhancers: [
      "[plaid skirt", "white shirt", "long sleeves", "black knee socks]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tsukino usagi",
      category: "Sailor Moon",
      mainTags: "tsukino usagi, blue eyes, blonde hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor moon", "circlet", "sailor senshi uniform]",
      "[princess serenity", "white dress]",
      "[super sailor moon", "magical girl", "rainbow]",
      "[neo queen serenity", "white hair", "wings", "white dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aino minako",
      category: "Sailor Moon",
      mainTags: "aino minako, blue eyes, blonde hair, long hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor venus", "circlet", "sailor senshi uniform]",
      "[super sailor venus", "circlet]",
      "[sailor v", "glasses", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mizuno ami",
      category: "Sailor Moon",
      mainTags: "mizuno ami, blue eyes, blue hair, short hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor mercury", "circlet", "sailor senshi uniform]",
      "[super sailor mercury", "circlet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kino makoto",
      category: "Sailor Moon",
      mainTags: "kino makoto, green eyes, brown hair, long hair, ponytail, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor jupiter", "circlet", "sailor senshi uniform]",
      "[sailor jupiter", "circlet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chibi usa",
      category: "Sailor Moon",
      mainTags: "chibi usa, pink eyes, pink hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: ["small lady serenity", "[sailor chibi moon", "circlet", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tomoe hotaru",
      category: "Sailor Moon",
      mainTags: "tomoe hotaru, purple eyes, black hair, short hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor saturn", "circlet]",
      "[super sailor saturn", "circlet", "sailor senshi uniform]",
      "[mistress 9", "black dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ten'ou haruka",
      category: "Sailor Moon",
      mainTags: "ten'ou haruka, blue eyes, blonde hair, short hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor uranus", "circlet", "sailor senshi uniform]",
      "[super sailor uranus", "circlet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kaiou michiru",
      category: "Sailor Moon",
      mainTags: "kaiou michiru, green eyes, aqua hair, long hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor neptune", "circlet", "sailor senshi uniform]",
      "[super sailor neptune", "circlet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "luna (sailor moon) (human)",
      category: "Sailor Moon",
      mainTags: "luna (sailor moon) (human), purple eyes, black hair, long hair, bishoujo senshi sailor moon",
      enhancers: [
      "[cat girl", "cat ears", "cat tail]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "meiou setsuna",
      category: "Sailor Moon",
      mainTags: "meiou setsuna, red eyes, green hair, very long hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor pluto", "circlet", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "seiya kou",
      category: "Sailor Moon",
      mainTags: "seiya kou, blue eyes, black hair, long hair, ponytail, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor star fighter", "circlet", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "black lady (sailor moon)",
      category: "Sailor Moon",
      mainTags: "black lady (sailor moon), red eyes, pink hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "helios (sailor moon)",
      category: "Sailor Moon",
      mainTags: "helios (sailor moon), blue eyes, white hair, short hair, bishoujo senshi sailor moon",
      enhancers: [
      "[angel wings", "robe", "tassel]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "chibi chibi",
      category: "Sailor Moon",
      mainTags: "chibi chibi, blue eyes, pink hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor chibi chibi", "circlet", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sailor cosmos",
      category: "Sailor Moon",
      mainTags: "sailor cosmos, blue eyes, white hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: [
      "[magical girl", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yaten kou",
      category: "Sailor Moon",
      mainTags: "yaten kou, green eyes, silver hair, short hair, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor star healer", "circlet", "sailor senshi uniform]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "taiki kou",
      category: "Sailor Moon",
      mainTags: "taiki kou, brown eyes, brown hair, very long hair, ponytail, bishoujo senshi sailor moon",
      enhancers: [
      "[sailor star maker", "circlet]"
      ],
      defaultGender: "girl",
      genderswapAvailable: "true",
      mediaType: "Shows or Movies"
  },
  {
      name: "zoisite (sailor moon)",
      category: "Sailor Moon",
      mainTags: "zoisite (sailor moon), green eyes, blonde hair, long hair, ponytail, bishoujo senshi sailor moon",
      enhancers: [
      "[military uniform", "black jacket]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cerecere (sailor moon)",
      category: "Sailor Moon",
      mainTags: "cerecere (sailor moon), pink eyes, pink hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: [
      "[bikini top only", "yellow skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "vesves (sailor moon)",
      category: "Sailor Moon",
      mainTags: "vesves (sailor moon), red eyes, red hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: [
      "[bikini", "see-through skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "junjun (sailor moon)",
      category: "Sailor Moon",
      mainTags: "junjun (sailor moon), green eyes, green hair, long hair, ponytail, bishoujo senshi sailor moon",
      enhancers: [
      "[bandeau", "arabian clothes]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pallapalla (sailor moon)",
      category: "Sailor Moon",
      mainTags: "pallapalla (sailor moon), blue eyes, blue hair, long hair, twintails, bishoujo senshi sailor moon",
      enhancers: [
      "[blue leotard", "yellow skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fish eye (sailor moon)",
      category: "Sailor Moon",
      mainTags: "fish eye (sailor moon), blue eyes, blue hair, long hair, ponytail, bishoujo senshi sailor moon",
      enhancers: ["blue bodysuit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "beruche (sailor moon)",
      category: "Sailor Moon",
      mainTags: "beruche (sailor moon), blue eyes, white hair, long hair, bishoujo senshi sailor moon",
      enhancers: [
      "[blue leotard", "thigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sailor galaxia",
      category: "Sailor Moon",
      mainTags: "sailor galaxia, red eyes, orange hair, long hair, bishoujo senshi sailor moon",
      enhancers: [
      "[gold armored dress", "gold choker]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nehelenia (sailor moon)",
      category: "Sailor Moon",
      mainTags: "nehelenia (sailor moon), grey eyes, black hair, very long hair, absurdly long hair, gradient hair, bishoujo senshi sailor moon",
      enhancers: ["black dress"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "momomiya ichigo",
      category: "Tokyo Mew Mew",
      mainTags: "momomiya ichigo, red eyes, pink hair, short hair, tokyo mew mew",
      enhancers: ["maid", "[mew ichigo", "cat girl", "animal ear fluff", "cat ears", "cat tail", "pink dress", "puffy detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aizawa mint",
      category: "Tokyo Mew Mew",
      mainTags: "aizawa mint, blue eyes, blue hair, short hair, tokyo mew mew",
      enhancers: ["maid", "[mew mint", "bird girl", "blue wings", "blue parrot tail", "puffy detached sleeves", "dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fujiwara zakuro",
      category: "Tokyo Mew Mew",
      mainTags: "fujiwara zakuro, purple eyes, purple hair, long hair, tokyo mew mew",
      enhancers: ["maid", "[mew zakuro", "wolf girl", "wolf ears", "wolf tail", "puffy detached sleeves", "purple shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "midorikawa lettuce",
      category: "Tokyo Mew Mew",
      mainTags: "midorikawa lettuce, green eyes, green hair, long hair, tokyo mew mew",
      enhancers: [
      "[maid", "glasses]",
      "[mew lettuce", "antennae", "green leotard", "choker", "single hair tube]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "fong pudding",
      category: "Tokyo Mew Mew",
      mainTags: "fong pudding, brown eyes, yellow hair, long hair, twintails, tokyo mew mew",
      enhancers: ["maid", "[mew pudding", "monkey girl", "monkey tail", "monkey ears", "detached puffy sleeves", "yellow jumper]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kinomoto sakura",
      category: "Cardcaptor Sakura",
      mainTags: "kinomoto sakura, brown eyes, brown hair, short hair, cardcaptor sakura",
      enhancers: ["school uniform", "[kinomoto sakura (magic dream costume)", "magical girl", "red pinafore dress]",
      "[kinomoto sakura (platinum star dress)", "magical girl", "wings]",
      "[kinomoto sakura (crystal feather dress)", "magical girl]",
      "[kinomoto sakura (winged egg crown costume)", "magical girl", "wings]",
      "[kinomoto sakura (pink kitty costume)", "magical girl", "cat ears", "cat tail]",
      "[kinomoto sakura (princess costume)", "magical girl", "wings", "pink dress]",
      "[kinomoto sakura (pink ribbon dress)", "magical girl", "pink dress", "pink hat]",
      "[kinomoto sakura (red hearts costume)", "magical girl", "red dress", "capelet]",
      "[kinomoto sakura (pink star angel costume)", "magical girl", "pink dress", "pink hat]",
      "[kinomoto sakura (alice in wonderland costume)", "magical girl", "pink bow]",
      "[kinomoto sakura (blue jester costume)", "magical girl", "jester cap", "white coattails]",
      "[kinomoto sakura (red cape costume)", "magical girl", "red hat", "red cape]",
      "[kinomoto sakura (final judgment costume)", "magical girl", "pink cape", "blue thighhighs]",
      "[kinomoto sakura (remembrance dress)", "white dress", "white hat", "red skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "daidouji tomoyo",
      category: "Cardcaptor Sakura",
      mainTags: "daidouji tomoyo, purple eyes, black hair, long hair, cardcaptor sakura",
      enhancers: [
      "[hat", "pleated skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "li syaoran",
      category: "Cardcaptor Sakura",
      mainTags: "li syaoran, brown eyes, brown hair, short hair, cardcaptor sakura",
      enhancers: ["school uniform", "[green hat", "chinese clothes", "magical girl]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "li meiling",
      category: "Cardcaptor Sakura",
      mainTags: "li meiling, red eyes, black hair, long hair, twintails, cardcaptor sakura",
      enhancers: [
      "[chinese clothes", "wide sleeves", "red dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kinomoto touya",
      category: "Cardcaptor Sakura",
      mainTags: "kinomoto touya, brown eyes, brown hair, short hair, cardcaptor sakura",
      enhancers: ["[]"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sasaki rika",
      category: "Cardcaptor Sakura",
      mainTags: "sasaki rika, brown eyes, brown hair, short hair, cardcaptor sakura",
      enhancers: ["school uniform"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yanagisawa naoko",
      category: "Cardcaptor Sakura",
      mainTags: "yanagisawa naoko, brown eyes, brown hair, long hair, glasses, cardcaptor sakura",
      enhancers: ["school uniform"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mihara chiharu",
      category: "Cardcaptor Sakura",
      mainTags: "mihara chiharu, brown eyes, brown hair, long hair, twintails, cardcaptor sakura",
      enhancers: ["school uniform"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rimuru tempest",
      category: "That Time I Got Reincarnated as a Slime",
      mainTags: "rimuru tempest, blue eyes, blue hair, long hair, tensei shitara slime datta ken",
      enhancers: [
      "[black shirt", "black pants", "black jacket]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "milim nava",
      category: "That Time I Got Reincarnated as a Slime",
      mainTags: "milim nava, pink eyes, pink hair, long hair, twintails, fang out, tensei shitara slime datta ken",
      enhancers: [
      "[bikini bottom only", "long sleeves", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shion (tensura)",
      category: "That Time I Got Reincarnated as a Slime",
      mainTags: "shion (tensura), purple eyes, purple hair, long hair, tensei shitara slime datta ken",
      enhancers: ["purple suit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shuna (tensura)",
      category: "That Time I Got Reincarnated as a Slime",
      mainTags: "shuna (tensura), pink eyes, pink hair, long hair, oni, horns, tensei shitara slime datta ken",
      enhancers: [
      "[miko", "red hakama]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "raphtalia",
      category: "Rising of the Shield Hero",
      mainTags: "raphtalia, brown eyes, brown hair, long hair, tate no yuusha no nariagari",
      enhancers: [
      "[armor", "layered dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "iwatani naofumi",
      category: "Rising of the Shield Hero",
      mainTags: "iwatani naofumi, green eyes, black hair, short hair, tate no yuusha no nariagari",
      enhancers: [
      "[armor", "fur-trimmed cape]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "filo (tate no yuusha no nariagari)",
      category: "Rising of the Shield Hero",
      mainTags: "filo (tate no yuusha no nariagari), blue eyes, blonde hair, long hair, tate no yuusha no nariagari",
      enhancers: [
      "[blue dress", "long sleeves", "bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "melty q melromarc",
      category: "Rising of the Shield Hero",
      mainTags: "melty q melromarc, blue eyes, blue hair, long hair, tate no yuusha no nariagari",
      enhancers: [
      "[frilled dress", "multicolored dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "malty s melromarc",
      category: "Rising of the Shield Hero",
      mainTags: "malty s melromarc, green eyes, red hair, long hair, tate no yuusha no nariagari",
      enhancers: [
      "[armor", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rory mercury",
      category: "GATE",
      mainTags: "rory mercury, red eyes, black hair, long hair, gate - jieitai ka no chi nite kaku tatakaeri",
      enhancers: ["frilled headwear", "gothic lolita"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lelei la lalena",
      category: "GATE",
      mainTags: "lelei la lalena, blue eyes, blue hair, long hair, gate - jieitai ka no chi nite kaku tatakaeri",
      enhancers: [
      "[dress", "cloak]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tuka luna marceau",
      category: "GATE",
      mainTags: "tuka luna marceau, blue eyes, blonde hair, long hair, pointy ears, gate - jieitai ka no chi nite kaku tatakaeri",
      enhancers: [
      "[leather arm ribbon", "detached sleeves", "green dress", "wide sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "itami youji",
      category: "GATE",
      mainTags: "itami youji, brown eyes, black hair, short hair, spiked hair, gate - jieitai ka no chi nite kaku tatakaeri",
      enhancers: [
      "[camouflage", "military combat uniform]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "souryuu asuka langley",
      category: "Neon Genesis Evangelion",
      mainTags: "souryuu asuka langley, blue eyes, orange hair, long hair, neon genesis evangelion",
      enhancers: ["yellow dress", "tokyo-3 middle school uniform", "[white shirt", "denim shorts]",
      "[red bodysuit", "mecha pilot suit]",
      "[red bodysuit", "mecha pilot suit", "eyepatch]",
      "[white bodysuit", "mecha pilot suit", "eyepatch]", "striped bikini"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ayanami rei",
      category: "Neon Genesis Evangelion",
      mainTags: "ayanami rei, red eyes, blue hair, short hair, neon genesis evangelion",
      enhancers: ["tokyo-3 middle school uniform", "[white bodysuit", "mecha pilot suit]",
      "[white bodysuit", "mecha pilot suit", "very long hair]", "black bodysuit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ikari shinji",
      category: "Neon Genesis Evangelion",
      mainTags: "ikari shinji, blue eyes, brown hair, short hair, neon genesis evangelion",
      enhancers: ["tokyo-3 middle school uniform", "[white shirt", "black pants]", "mecha pilot suit"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nagisa kaworu",
      category: "Neon Genesis Evangelion",
      mainTags: "nagisa kaworu, red eyes, grey hair, short hair, neon genesis evangelion",
      enhancers: ["tokyo-3 middle school uniform", "[white shirt", "black pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "makinami mari illustrious",
      category: "Neon Genesis Evangelion",
      mainTags: "makinami mari illustrious, green eyes, brown hair, long hair, twintails, glasses, neon genesis evangelion",
      enhancers: ["school uniform", "pink mecha pilot suit", "white mecha pilot suit"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "katsuragi misato",
      category: "Neon Genesis Evangelion",
      mainTags: "katsuragi misato, brown eyes, purple hair, long hair, neon genesis evangelion",
      enhancers: [
      "[red jacket", "black dress]",
      "[black military dress uniform", "female service cap", "lanyard]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ikari gendou",
      category: "Neon Genesis Evangelion",
      mainTags: "ikari gendou, brown eyes, brown hair, short hair, orange-tinted glasses, neon genesis evangelion",
      enhancers: [
      "[black jacket", "black skirt", "white gloves", "red turtleneck]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akagi ritsuko",
      category: "Neon Genesis Evangelion",
      mainTags: "akagi ritsuko, brown eyes, blonde hair, short hair, neon genesis evangelion",
      enhancers: [
      "[blue shirt", "lab coat", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ibuki maya",
      category: "Neon Genesis Evangelion",
      mainTags: "ibuki maya, brown eyes, brown hair, short hair, neon genesis evangelion",
      enhancers: [
      "[tan jacket", "white pants", "uniform", "black belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "horaki hikari",
      category: "Neon Genesis Evangelion",
      mainTags: "horaki hikari, brown eyes, brown hair, long hair, twintails, neon genesis evangelion",
      enhancers: ["tokyo-3 middle school uniform"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tabris-xx",
      category: "Neon Genesis Evangelion",
      mainTags: "tabris-xx, purple eyes, white hair, long hair, neon genesis evangelion",
      enhancers: [
      "[angel wings", "multiple wings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ikari yui",
      category: "Neon Genesis Evangelion",
      mainTags: "ikari yui, brown eyes, brown hair, long hair, neon genesis evangelion",
      enhancers: [
      "[lab coat", "pink shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ahsoka tano",
      category: "Star Wars",
      mainTags: "ahsoka tano, blue eyes, orange skin, dark skin, dark-skinned female, star wars: ahsoka, star wars",
      enhancers: [
      "[brown tunic", "brown gloves", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "darth vader",
      category: "Star Wars",
      mainTags: "darth vader, black hair, short hair, black cape, star wars",
      enhancers: [
      "[faceless", "helmet]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "obi-wan kenobi",
      category: "Star Wars",
      mainTags: "obi-wan kenobi, blue eyes, brown hair, short hair, star wars",
      enhancers: [
      "[brown cloak", "jedi]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "princess leia",
      category: "Star Wars",
      mainTags: "princess leia, brown eyes, brown hair, long hair, twintails, star wars",
      enhancers: [
      "[white bodysuit", "brown vest", "brown gloves]",
      "[white pants", "white padded jacket]",
      "[white crop top", "long sleeves", "pelvic curtain", "white belt]", "huttslayer leia"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rey (star wars)",
      category: "Star Wars",
      mainTags: "rey (star wars), brown eyes, brown hair, long hair, star wars",
      enhancers: [
      "[jedi", "brown robe]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "han solo",
      category: "Star Wars",
      mainTags: "han solo, blue eyes, brown hair, short hair, star wars",
      enhancers: [
      "[black vest", "white shirt", "denim skirt]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "luke skywalker",
      category: "Star Wars",
      mainTags: "luke skywalker, blue eyes, blonde hair, short hair, star wars",
      enhancers: [
      "[huttslayer leia", "princess leia (cosplay)]",
      "[jedi", "robe", "utility belt]",
      "[jedi", "robe", "utility belt", "cape]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yoko littner",
      category: "Gurren Lagann",
      mainTags: "yoko littner, red eyes, red hair, long hair, ponytail, tengen toppa gurren lagann",
      enhancers: [
      "[bikini top", "scarf", "short shorts]", "space yoko", "yomako"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nia teppelin",
      category: "Gurren Lagann",
      mainTags: "nia teppelin, blue eyes, blonde hair, long hair, tengen toppa gurren lagann",
      enhancers: [
      "[pink dress", "red necktie", "belt]", "antispiral nia"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "simon (ttgl)",
      category: "Gurren Lagann",
      mainTags: "simon (ttgl), blue eyes, blue hair, short hair, tengen toppa gurren lagann",
      enhancers: [
      "[blue jacket", "sarashi", "brown shorts]",
      "[long coat", "chest sarashi", "skirt", "corset]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kamina (ttgl)",
      category: "Gurren Lagann",
      mainTags: "kamina (ttgl), blue eyes, blue hair, short hair, tengen toppa gurren lagann",
      enhancers: [
      "[chest sarashi", "red cape", "brown skirt", "triangular eyewear]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "viral (ttgl)",
      category: "Gurren Lagann",
      mainTags: "viral (ttgl), yellow eyes, blonde hair, long hair, fangs, tengen toppa gurren lagann",
      enhancers: [
      "[blue shirt", "red scarf", "multiple belts", "wide sleeves]",
      "[red sleeveless shirt", "red scarf", "multiple belts", "cape]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "darry adai",
      category: "Gurren Lagann",
      mainTags: "darry adai, brown eyes, orange hair, short hair, tengen toppa gurren lagann",
      enhancers: ["red bodysuit", "[pink dress", "red hair ribbon]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rossiu adai",
      category: "Gurren Lagann",
      mainTags: "rossiu adai, brown eyes, brown hair, long hair, ponytail, tengen toppa gurren lagann",
      enhancers: ["white cloak"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kiyal bachika",
      category: "Gurren Lagann",
      mainTags: "kiyal bachika, brown eyes, brown hair, short hair, tengen toppa gurren lagann",
      enhancers: [
      "[bike shorts", "tank top", "yellow gloves]",
      "[pink cheongsam", "long cheongsam", "black shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kinon bachika",
      category: "Gurren Lagann",
      mainTags: "kinon bachika, brown eyes, brown hair, short hair, glasses, tengen toppa gurren lagann",
      enhancers: [
      "[uniform", "hat", "pantyhose]",
      "[sleeveless bodysuit", "yellow gloves", "arm bands", "belt pouch]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "adiane",
      category: "Gurren Lagann",
      mainTags: "adiane, blue eyes, blonde hair, long hair, scorpion tail, tengen toppa gurren lagann",
      enhancers: [
      "[off-shoulder dress", "wide sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kiyoh bachika",
      category: "Gurren Lagann",
      mainTags: "kiyoh bachika, brown eyes, blonde hair, short hair, tengen toppa gurren lagann",
      enhancers: [
      "[black skirt", "black tube top", "yellow gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gimmy adai",
      category: "Gurren Lagann",
      mainTags: "gimmy adai, brown eyes, orange hair, short hair, spiked hair, tengen toppa gurren lagann",
      enhancers: [
      "[high collar", "blue bodysuit", "white bodysuit", "wide sleeves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "leeron littner",
      category: "Gurren Lagann",
      mainTags: "leeron littner, green eyes, teal hair, short hair, tengen toppa gurren lagann",
      enhancers: ["padded vest"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "leite jokin",
      category: "Gurren Lagann",
      mainTags: "leite jokin, brown eyes, brown hair, short hair, glasses, tengen toppa gurren lagann",
      enhancers: [
      "[blue shirt", "blue leather apron]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kohaku (dr. stone)",
      category: "Dr. Stone",
      mainTags: "kohaku (dr. stone), blue eyes, blonde hair, long hair, dr. stone",
      enhancers: [
      "[blue dress", "rope belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ishigami senkuu",
      category: "Dr. Stone",
      mainTags: "ishigami senkuu, red eyes, green hair, short hair, dr. stone",
      enhancers: [
      "[grey tunic", "high collar", "belt bag]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "asagiri gen",
      category: "Dr. Stone",
      mainTags: "asagiri gen, purple eyes, black hair, medium hair, dr. stone",
      enhancers: [
      "[layered clothes", "high collar", "purple robe]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ginro (dr. stone)",
      category: "Dr. Stone",
      mainTags: "ginro (dr. stone), green eyes, blonde hair, short hair, dr. stone",
      enhancers: ["blue dress"],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "suika (dr.stone)",
      category: "Dr. Stone",
      mainTags: "suika (dr.stone), brown eyes, brown hair, short hair, ahoge, dr. stone",
      enhancers: [
      "[blue dress", "rope necklace]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hanada nikki",
      category: "Dr. Stone",
      mainTags: "hanada nikki, brown eyes, blonde hair, long hair, muscular female, dr. stone",
      enhancers: [
      "[green dress", "purple bows", "rope belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "dandy (space dandy)",
      category: "Space Dandy",
      mainTags: "dandy (space dandy), brown eyes, black hair, short hair, pompadour, space dandy",
      enhancers: [
      "[two-tone jacket", "red shirt", "black pants", "lanyard]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "meow (space dandy)",
      category: "Space Dandy",
      mainTags: "meow (space dandy), green eyes, brown hair, short hair, personification, cat tail, whiskers, cat ears, space dandy",
      enhancers: [
      "[red hat", "green dress]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "honey (space dandy)",
      category: "Space Dandy",
      mainTags: "honey (space dandy), blue eyes, blonde hair, long hair, space dandy",
      enhancers: [
      "[choker", "hairband", "pink bikini", "wrist cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "adelie (space dandy)",
      category: "Space Dandy",
      mainTags: "adelie (space dandy), grey eyes, grey hair, short hair, space dandy",
      enhancers: [
      "[black leotard", "black leggings", "blue shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yuri (dirty pair)",
      category: "Dirty Pair",
      mainTags: "yuri (dirty pair), blue eyes, brown hair, long hair, dirty pair",
      enhancers: [
      "[yellow crop top", "yellow shorts", "single yellow elbow glove]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kei (dirty pair)",
      category: "Dirty Pair",
      mainTags: "kei (dirty pair), green eyes, red hair, long hair, dark skin, dark-skinned female, dirty pair",
      enhancers: [
      "[green headband", "green crop top", "green shorts", "single green elbow glove]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yuri (dirty pair flash)",
      category: "Dirty Pair",
      mainTags: "yuri (dirty pair flash), blue eyes, brown hair, long hair, dirty pair",
      enhancers: [
      "[blue leotard", "white vest", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kei (dirty pair flash)",
      category: "Dirty Pair",
      mainTags: "kei (dirty pair flash), green eyes, red hair, long hair, dirty pair",
      enhancers: [
      "[leotard", "red shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "snow white (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "snow white (mahoiku), brown eyes, black hair, long hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "dress", "sailor collar", "red armband]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "la pucelle (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "la pucelle (mahoiku), blue eyes, blonde hair, short hair, antennae, tail, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "purple leotard", "knee boots", "detached sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "swim swim",
      category: "Magical Girl Raising Project",
      mainTags: "swim swim, blue eyes, brown hair, long hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "swimsuit", "thigh strap", "demon wings", "goggles around neck]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nemurin",
      category: "Magical Girl Raising Project",
      mainTags: "nemurin, brown eyes, blonde hair, long hair, hair between eyes, half-closed eyes, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "yellow print nightgown", "rabbit print]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ruler (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "ruler (mahoiku), purple eyes, purple hair, short hair, double bun, mahou shoujo ikusei keikaku",
      enhancers: [
      "[black cape", "puffy sleeves", "white shirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hardgore alice",
      category: "Magical Girl Raising Project",
      mainTags: "hardgore alice, brown eyes, black hair, long hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "lolita hairband", "frilled choker", "striped leggings", "black dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ripple (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "ripple (mahoiku), brown eyes, black hair, short hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "red scarf", "puffy sleeves", "miniskirt", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cranberry (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "cranberry (mahoiku), red eyes, purple hair, long hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "frilled white dress", "center frills", "green pantyhose", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shadowgale",
      category: "Magical Girl Raising Project",
      mainTags: "shadowgale, grey eyes, grey hair, short hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "frilled dress", "black gloves", "thigh strap]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pfle",
      category: "Magical Girl Raising Project",
      mainTags: "pfle, blue eyes, blonde hair, very long hair, eyepatch, mahou shoujo ikusei keikaku",
      enhancers: [
      "[frilled dress", "pink dress", "purple dress", "multicolored dress", "detached sleeves", "sleeves past wrists", "dress bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "top speed",
      category: "Magical Girl Raising Project",
      mainTags: "top speed, green eyes, brown hair, short hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[witch hat", "black dress", "black cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lapis lazuline",
      category: "Magical Girl Raising Project",
      mainTags: "lapis lazuline, blue eyes, blue hair, short hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[blue dress", "detached sleeves", "tail", "cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sister nana",
      category: "Magical Girl Raising Project",
      mainTags: "sister nana, brown eyes, blonde hair, very long hair, drill hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[nun", "elbow gloves", "habit]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tama (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "tama (mahoiku), brown eyes, brown hair, short hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[spiked collar", "paw gloves", "animal ear hood]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "calamity mary",
      category: "Magical Girl Raising Project",
      mainTags: "calamity mary, green eyes, blonde hair, long hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "bikini top only", "orange skirt", "black belt", "hat", "cape]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "pechika (mahoiku)",
      category: "Magical Girl Raising Project",
      mainTags: "pechika (mahoiku), blue eyes, blonde hair, long hair, gradient hair, mahou shoujo ikusei keikaku",
      enhancers: [
      "[magical girl", "white dress", "white thighhighs", "white hat", "frilled dress", "frilled thighhighs", "rooster tail]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gasai yuno",
      category: "The Future Diary",
      mainTags: "gasai yuno, pink eyes, pink hair, long hair, mirai nikki",
      enhancers: [
        "strappy black dress", "[blue shirt", "blue skirt", "red bow]",
      "[white collar", "yellow shirt", "green sweater", "teal skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "uryuu minene",
      category: "The Future Diary",
      mainTags: "uryuu minene, purple eyes, purple hair, short hair, mirai nikki",
      enhancers: [
      "[green jacket", "green pants", "black shirt", "midriff", "belt", "shoulder holster]",
      "[crop top", "high collar", "cleavage cutout", "belt", "black pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "amano yukiteru",
      category: "The Future Diary",
      mainTags: "amano yukiteru, blue eyes, black hair, short hair, mirai nikki",
      enhancers: [
      "[orange hat", "green cropped jacket", "white shirt", "shirt under shirt", "orange shorts]",
      "[brown hat", "brown jacket", "black shirt", "shoulder bag]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akise aru",
      category: "The Future Diary",
      mainTags: "akise aru, red eyes, white hair, short hair, mirai nikki",
      enhancers: [
      "[blue shirt", "necktie", "black pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kasugano tsubaki",
      category: "The Future Diary",
      mainTags: "kasugano tsubaki, red eyes, black hair, long hair, mirai nikki",
      enhancers: [
      "[red hair bow", "red kimono", "white bow]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "murmur (mirai nikki)",
      category: "The Future Diary",
      mainTags: "murmur (mirai nikki), yellow eyes, purple hair, long hair, dark skin, dark-skinned female, mirai nikki",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lucy (elfen lied)",
      category: "Elfen Lied",
      mainTags: "lucy (elfen lied), red eyes, pink hair, long hair, elfen lied, aged up",
      enhancers: [
      "[pink shirt", "black dress", "black and grey striped thighhighs]", "naked bandage", "[nyuu", "oversized shirt", "white tank top]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nana (elfen lied)",
      category: "Elfen Lied",
      mainTags: "nana (elfen lied), purple eyes, pink hair, long hair, elfen lied, aged up",
      enhancers: [
      "[black dress", "collar", "cuffs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mariko (elfen lied)",
      category: "Elfen Lied",
      mainTags: "mariko (elfen lied), purple eyes, pink hair, short hair, elfen lied, aged up",
      enhancers: [
      "[blue bows", "blue ribbon", "center frills", "frilled yellow shirt", "plaid skirt", "wheelchair]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hiiragi utena",
      category: "Gushing Over Magical Girls",
      mainTags: "hiiragi utena, green eyes, black hair, short hair, mahou shoujo ni akogarete",
      enhancers: ["school uniform", "[magia baiser", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "araga kiwi",
      category: "Gushing Over Magical Girls",
      mainTags: "araga kiwi, yellow eyes, blonde hair, medium hair, mahou shoujo ni akogarete",
      enhancers: [
      "[school uniform", "oversized yellow jacket", "sleeves past wrists]",
      "[leoparde (mahou shoujo ni akogarete)", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "minakami sayo",
      category: "Gushing Over Magical Girls",
      mainTags: "minakami sayo, blue eyes, blue hair, long hair, mahou shoujo ni akogarete",
      enhancers: [
        "school uniform", "[magia azure", "magical girl]",
      "[magia azure (la verita)", "magical girl", "blue skirt", "hakama", "hakama skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hanabishi haruka",
      category: "Gushing Over Magical Girls",
      mainTags: "hanabishi haruka, brown eyes, orange hair, long hair, twin drills, mahou shoujo ni akogarete",
      enhancers: [
        "school uniform", "[magia magenta", "magical girl", "pink dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "morino korisu",
      category: "Gushing Over Magical Girls",
      mainTags: "morino korisu, brown eyes, brown hair, short hair, mahou shoujo ni akogarete",
      enhancers: [
      "[blue dress", "white shirt", "belt]",
      "[nero alice", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akoya matama",
      category: "Gushing Over Magical Girls",
      mainTags: "akoya matama, blue eyes, pink hair, medium hair, mahou shoujo ni akogarete",
      enhancers: [
      "[blue jacket", "grey skirt", "thighhighs", "red ribbon", "white shirt]",
      "[loco musica", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tenkawa kaoruko",
      category: "Gushing Over Magical Girls",
      mainTags: "tenkawa kaoruko, green eyes, blonde hair, long hair, yellow hair bow, mahou shoujo ni akogarete",
      enhancers: [
        "school uniform", "[magia sulfur", "yellow dress", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "anemo nemo",
      category: "Gushing Over Magical Girls",
      mainTags: "anemo nemo, purple eyes, brown hair, long hair, mahou shoujo ni akogarete",
      enhancers: [
      "[open blue cardigan", "oversized cardigan", "white shirt", "grey skirt]",
      "[leberblume", "magical girl]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sister gigant",
      category: "Gushing Over Magical Girls",
      mainTags: "sister gigant, yellow eyes, pink hair, very long hair, mahou shoujo ni akogarete",
      enhancers: [
      "[nun", "coif", "habit", "navel", "revealing clothes", "black dress", "star on a lanyard]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "eila ilmatar juutilainen",
      category: "Strike Witches",
      mainTags: "eila ilmatar juutilainen, blue eyes, blonde hair, short hair, strike witches",
      enhancers: [
      "[military uniform", "blue jacket", "white pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sanya v. litvyak",
      category: "Strike Witches",
      mainTags: "sanya v. litvyak, green eyes, silver hair, short hair, strike witches",
      enhancers: [
      "[military uniform", "white shirt", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "miyafuji yoshika",
      category: "Strike Witches",
      mainTags: "miyafuji yoshika, brown eyes, brown hair, medium hair, strike witches",
      enhancers: [
      "[blue one-piece swimsuit", "swimsuit under clothes", "sailor shirt", "sailor collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "erica hartmann",
      category: "Strike Witches",
      mainTags: "erica hartmann, blue eyes, blonde hair, short hair, strike witches",
      enhancers: [
      "[military uniform", "brown jacket", "white skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gertrud barkhorn",
      category: "Strike Witches",
      mainTags: "gertrud barkhorn, green eyes, brown hair, long hair, twintails, strike witches",
      enhancers: [
      "[military outfit", "white shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "perrine h. clostermann",
      category: "Strike Witches",
      mainTags: "perrine h. clostermann, yellow eyes, blonde hair, medium hair, glasses, strike witches",
      enhancers: [
      "[military uniform", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lynette bishop",
      category: "Strike Witches",
      mainTags: "lynette bishop, blue eyes, blonde hair, long hair, braid, strike witches",
      enhancers: [
      "[collared shirt", "blazer", "sweater", "thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "charlotte e. yeager",
      category: "Strike Witches",
      mainTags: "charlotte e. yeager, blue eyes, orange hair, long hair, strike witches",
      enhancers: [
      "[red jacket", "lapel pin", "white shirt", "no pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sakamoto mio",
      category: "Strike Witches",
      mainTags: "sakamoto mio, brown eyes, black hair, short hair, eyepatch, strike witches",
      enhancers: [
      "[military uniform", "white jacket", "white one-piece swimsuit]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elizabeth liones",
      category: "Seven Mortal Sins",
      mainTags: "elizabeth liones, blue eyes, silver hair, long hair, nanatsu no taizai",
      enhancers: [
      "[pink sleeveless shirt", "frilled shirt", "black bow", "black skirt", "single thighhigh]",
      "[purple halter shirt", "pink bow", "single detached sleeve", "white skirt", "single thighhigh]",
      "[leotard", "detached sleeves", "thigh boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "diane (nanatsu no taizai)",
      category: "Seven Mortal Sins",
      mainTags: "diane (nanatsu no taizai), purple eyes, brown hair, long hair, nanatsu no taizai",
      enhancers: [
      "[orange leotard", "cleavage cutout", "high collar", "gloves", "thigh tattoo]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "meliodas",
      category: "Seven Mortal Sins",
      mainTags: "meliodas, green eyes, blonde hair, short hair, nanatsu no taizai",
      enhancers: [
      "[white shirt", "red necktie", "blue vest", "capri pants]",
      "[ fur-trimmed coat", "white shirt", "green pants]",
      "[green cropped jacket", "arm band", "green pants", "belt chain]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "king (nanatsu no taizai)",
      category: "Seven Mortal Sins",
      mainTags: "king (nanatsu no taizai), yellow eyes, orange hair, short hair, nanatsu no taizai",
      enhancers: [
      "[multicolored coat", "blue pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "gowther",
      category: "Seven Mortal Sins",
      mainTags: "gowther, pink eyes, pink hair, short hair, glasses, nanatsu no taizai",
      enhancers: [
      "[white shirt", "purple sleeves", "shirt under shirt", "black pants]",
      "[detached collar", "black dress", "white pants", "white knee boots]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "elaine",
      category: "Seven Mortal Sins",
      mainTags: "elaine, yellow eyes, blonde hair, long hair, nanatsu no taizai",
      enhancers: [
      "[off-shoulder white dress", "large bow]",
      "[fairy wings", "pink dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "merlin (nanatsu no taizai)",
      category: "Seven Mortal Sins",
      mainTags: "merlin (nanatsu no taizai), red eyes, black hair, short hair, nanatsu no taizai",
      enhancers: [
      "[fur trim", "purple shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shera l. greenwood",
      category: "How Not to Summon a Demon Lord",
      mainTags: "shera l. greenwood, green eyes, blonde hair, long hair, isekai maou to shoukan shoujo no dorei majutsu",
      enhancers: [
      "[green dress", "metal collar]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "rem galeu",
      category: "How Not to Summon a Demon Lord",
      mainTags: "rem galeu, red eyes, black hair, short hair, isekai maou to shoukan shoujo no dorei majutsu",
      enhancers: [
      "[metal collar", "purple skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "alicia crystella",
      category: "How Not to Summon a Demon Lord",
      mainTags: "alicia crystella, blue eyes, blonde hair, long hair, glasses, isekai maou to shoukan shoujo no dorei majutsu",
      enhancers: [
      "[armor", "boobplate]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "lumachina weselia",
      category: "How Not to Summon a Demon Lord",
      mainTags: "lumachina weselia, purple eyes, black hair, long hair, isekai maou to shoukan shoujo no dorei majutsu",
      enhancers: [
      "[red hat", "detached sleeves", "two-tone dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "terakomari gandezblood",
      category: "Vexations of a Shut-In Vampire Princess",
      mainTags: "terakomari gandezblood, red eyes, blonde hair, short hair, cone hair bun, hikikomari kyuuketsuki no monmon",
      enhancers: [
      "[white skirt", "white thighhighs", "purple bowtie", "red jacket]",
      "[red bikini", "frilled bikini]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "villhaze",
      category: "Vexations of a Shut-In Vampire Princess",
      mainTags: "villhaze, blue eyes, silver hair, short hair, hikikomari kyuuketsuki no monmon",
      enhancers: ["maid", "[black bikini", "eyewear on head]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sakuna memoire",
      category: "Vexations of a Shut-In Vampire Princess",
      mainTags: "sakuna memoire, blue eyes, white hair, long hair, hikikomari kyuuketsuki no monmon",
      enhancers: [
      "[blue shirt", "blue ascot", "black skirt", "wide sleeves]",
      "[white two-tone bikini", "frilled bikini bottoms]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "tachibana kanade",
      category: "Angel Beats",
      mainTags: "tachibana kanade, yellow eyes, silver hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thighhighs] [brown jacket", "black skirt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "nakamura yuri",
      category: "Angel Beats",
      mainTags: "nakamura yuri, green eyes, purple hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thighhighs]",
      "[pink hoodie", "denim pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yui (angel beats!)",
      category: "Angel Beats",
      mainTags: "yui (angel beats!), pink eyes, pink hair, long hair, twintails, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thigh belts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hinata hideki",
      category: "Angel Beats",
      mainTags: "hinata hideki, blue eyes, blue hair, short hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thighhighs]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hotonashi yuzuru",
      category: "Angel Beats",
      mainTags: "hotonashi yuzuru, red eyes, orange hair, short hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thighhighs]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "naoi ayato",
      category: "Angel Beats",
      mainTags: "naoi ayato, green eyes, brown hair, short hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thighhighs]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "iwasawa masami",
      category: "Angel Beats",
      mainTags: "iwasawa masami, red eyes, brown hair, long hair, angel beats!",
      enhancers: ["shinda sekai sensen uniform"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yusa (angel beats!)",
      category: "Angel Beats",
      mainTags: "yusa (angel beats!), yellow eyes, blonde hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shiina (angel beats!)",
      category: "Angel Beats",
      mainTags: "shiina (angel beats!), blue eyes, black hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "knee boots]",
      "[shinda sekai sensen uniform", "knee boots", "black scarf", "covering mouth]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "hisako (angel beats!)",
      category: "Angel Beats",
      mainTags: "hisako (angel beats!), brown eyes, purple hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "thigh strap]",
      "[green jacket", "white tank top", "black yoga pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "sekine shiori",
      category: "Angel Beats",
      mainTags: "sekine shiori, blue eyes, blonde hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "white thighhighs", "single thigh belt]",
      "[black leather jacket", "yellow turtleneck", "fur-trimmed shorts]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "irie miyuki",
      category: "Angel Beats",
      mainTags: "irie miyuki, brown eyes, pink hair, long hair, angel beats!",
      enhancers: [
      "[shinda sekai sensen uniform", "white knee socks", "single thigh strap]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "ramona flowers",
      category: "Scott Pilgrim",
      mainTags: "ramona flowers, blue eyes, blue hair, short hair, scott pilgrim (series)",
      enhancers: [
      "[black hoodie", "grey jacket", "pink pantyhose", "blue skirt", "shoulder bag]",
      "[black hoodie", "hood up", "grey jacket", "fishnets", "pink short shorts", "shoulder bag]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kim pine",
      category: "Scott Pilgrim",
      mainTags: "kim pine, green eyes, red hair, short hair, scott pilgrim (series)",
      enhancers: [
      "[green striped jacket", "brown skirt", "pantyhose]",
      "[black and white striped jacket", "blue pleated skirt", "knee socks]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "knives chau",
      category: "Scott Pilgrim",
      mainTags: "knives chau, black eyes, black hair, short hair, hair between eyes, scott pilgrim (series)",
      enhancers: [
      "[leggings", "grey off-shoulder sweater", "boots]",
      "[ninja", "white and grey striped scarf", "red hair streak", "hair ornament]",
      "[ninja", "black bodysuit", "grey and white striped scarf", "red hair streak]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "roxie richter",
      category: "Scott Pilgrim",
      mainTags: "roxie richter, brown eyes, blonde hair, short hair, scott pilgrim (series)",
      enhancers: [
      "[white hoodie", "cleavage cutout", "white shorts", "multiple belts", "grey belt", "red belt", "single wrist cuff", "spiked cuff]",
      "[sleeveless black hoodie", "black shorts", "spiked cuff", "single wrist cuff", "red cloth belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "envy adams",
      category: "Scott Pilgrim",
      mainTags: "envy adams, brown eyes, blonde hair, long hair, scott pilgrim (series)",
      enhancers: [
      "[short black dress", "clothing cutouts", "short sleeves", "single gold bangle]",
      "[striped shirt", "short sleeves", "denim pants", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "julie powers",
      category: "Scott Pilgrim",
      mainTags: "julie powers, brown eyes, black hair, short hair, round glasses, scott pilgrim (series)",
      enhancers: [
      "[green cargo jacket", "necklace", "black shirt", "jeans]",
      "[two-stone shirt", "brown waist apron", "brown pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "blossom (ppg)",
      category: "Nick Toons",
      mainTags: "blossom (ppg), pink eyes, orange hair, long hair, ponytail, red hair bow, powerpuff girls",
      enhancers: [
      "[halterneck", "pink dress", "black corset", "white thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "bubbles (ppg)",
      category: "Nick Toons",
      mainTags: "bubbles (ppg), blue eyes, blonde hair, long hair, twintails, powerpuff girls",
      enhancers: [
      "[halterneck", "blue dress", "black corset", "white thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "buttercup (ppg)",
      category: "Nick Toons",
      mainTags: "buttercup (ppg), green eyes, black hair, short hair, very short hair, scruffy hair, powerpuff girls",
      enhancers: [
      "[halterneck", "green dress", "black corset", "white thighhighs]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "akazutsumi momoko",
      category: "Nick Toons",
      mainTags: "akazutsumi momoko, pink eyes, orange hair, long hair, ponytail, red hair bow, powerpuff girls z",
      enhancers: [
      "[white shirt", "cleavage", "striped sleeves", "blue skirt", "belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "goutokuji miyako",
      category: "Nick Toons",
      mainTags: "goutokuji miyako, blue eyes, blonde hair, long hair, twintails, hairclip, powerpuff girls z",
      enhancers: [
      "[blue shirt", "cleavage", "blue necktie", "choker", "plaid skirt", "white belt]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "matsubara kaoru",
      category: "Nick Toons",
      mainTags: "matsubara kaoru, green eyes, black hair, short hair, spiked hair, hair ornaments, powerpuff girls z",
      enhancers: [
      "[yellow vest", "green dress", "cleavage", "frills", "white belt", "fingerless gloves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "mandy (grim adventures)",
      category: "Nick Toons",
      mainTags: "mandy (grim adventures), black eyes, blonde hair, short hair, hair horns, black hairband, the grim adventures of billy & mandy",
      enhancers: [
      "[sleeveless dress", "pink collared dress", "flower print]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "frankie foster",
      category: "Nick Toons",
      mainTags: "frankie foster, green eyes, red hair, long hair, foster's home for imaginary friends",
      enhancers: [
      "[green jacket", "hairclip", "black shorts]",
      "[black dress", "black choker", "gold hoop earrings]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "vicky (fairly oddparents)",
      category: "Nick Toons",
      mainTags: "vicky (fairly oddparents), pink eyes, red hair, long hair, lipstick, the fairly oddparents",
      enhancers: [
      "[green shirt", "black pants]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "trixie tang",
      category: "Nick Toons",
      mainTags: "trixie tang, blue eyes, black hair, long hair, pink hairband, the fairly oddparents",
      enhancers: [
      "[pink sweater", "short sleeves", "high collar", "white skirt", "white boots]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "aizawa azusa",
      category: "Killing Slimes for 300 Years",
      mainTags: "aizawa azusa, blue eyes, blonde hair, long hair, slime taoshite 300 nen shiranai uchi ni level max ni nattemashita",
      enhancers: [
      "[witch hat", "yellow ascot", "black robe]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "laika (slime taoshite 300 nen)",
      category: "Killing Slimes for 300 Years",
      mainTags: "laika (slime taoshite 300 nen), red eyes, red hair, long hair, slime taoshite 300 nen shiranai uchi ni level max ni nattemashita",
      enhancers: [
      "[black pantyhose", "red dress", "wide sleeves]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "shalsha (slime taoshite 300 nen)",
      category: "Killing Slimes for 300 Years",
      mainTags: "shalsha (slime taoshite 300 nen), blue eyes, green hair, short hair, slime taoshite 300 nen shiranai uchi ni level max ni nattemashita",
      enhancers: ["yellow apron"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "provato pecora aries",
      category: "Killing Slimes for 300 Years",
      mainTags: "provato pecora aries, yellow eyes, white hair, long hair, gloves, slime taoshite 300 nen shiranai uchi ni level max ni nattemashita",
      enhancers: [
      "[fur trim", "black dress]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "halkara (slime taoshite 300 nen)",
      category: "Killing Slimes for 300 Years",
      mainTags: "halkara (slime taoshite 300 nen), blue eyes, blonde hair, long hair, slime taoshite 300 nen shiranai uchi ni level max ni nattemashita",
      enhancers: ["[]"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "orphen",
      category: "Other",
      mainTags: "orphen, brown eyes, brown hair, short hair, spiked hair, headband, majutsushi orphen",
      enhancers: [
      "[blue vest", "necklace", "fingerless gloves]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "cleo everlastin",
      category: "Other",
      mainTags: "cleo everlastin, blue eyes, blonde hair, long hair, majutsushi orphen",
      enhancers: ["orange dress"],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "kusanagi motoko",
      category: "Other",
      mainTags: "kusanagi motoko, purple eyes, purple hair, short hair, ghost in the shell",
      enhancers: [
      "[leather jacket", "fingerless gloves", "leotard", "thighhighs]",
      "[orange jacket", "grey pants", "gloves]",
      "[bodysuit", "belt", "gloves", "long coat]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "batou (gits)",
      category: "Other",
      mainTags: "batou (gits), brown eyes, white hair, very short hair, glasses, ghost in the shell",
      enhancers: [
      "[brown coat", "white shirt", "gloves", "cargo pants]"
      ],
      defaultGender: "boy",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "priscilla asagiri",
      category: "Other",
      mainTags: "priscilla asagiri, blue eyes, brown hair, long hair, bubblegum crisis",
      enhancers: [
      "[red leather jacket", "cleavage cutout", "black pants", "knee boots]", "hardsuit", "[blue skirt", "red tube top", "sleeveless shirt", "red elbow gloves", "gold bangles", "armlet", "brown pantyhose]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "yamamura sadako",
      category: "Other",
      mainTags: "yamamura sadako, black eyes, black hair, very long hair, wide-eyed, scar on face, scar on mouth, loose hair strand, wet",
      enhancers: [
      "[oversized clothes", "white shirt]",
      "[maid headdress", "maid bikini]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  },
  {
      name: "atom eve",
      category: "Other",
      mainTags: "atom eve, blue eyes, orange hair, long hair, invincible (series)",
      enhancers: [
      "[cape", "pink boots", "pink leotard]"
      ],
      defaultGender: "girl",
      genderswapAvailable: true,
      ageUpAvailable: true,
      mediaType: "Shows or Movies"
  }
  ];
  
  // Scenes constant: each theme includes 5 booru tags.
  const scenes = [
    { theme: "Forest", tags: "forest, nature, outdoors, tree, moss" },
    { theme: "Desert", tags: "desert, sand, arid, dune, scorching" },
    { theme: "Ocean", tags: "ocean, sea, water, beach, waves" },
    { theme: "Urban", tags: "city, metropolis, skyscraper, street, neon" },
    { theme: "Cyberpunk", tags: "cyberpunk, futuristic, neon, dystopia, tech" },
    { theme: "Mountain", tags: "mountain, alpine, rocky, summit, snow" },
    { theme: "Space", tags: "space, cosmos, galaxy, stars, nebula" },
    { theme: "Fantasy", tags: "fantasy, mystical, enchanted, magic, surreal" },
    { theme: "Ruins", tags: "ruins, abandoned, decay, derelict, crumbling" },
    { theme: "Tropical", tags: "tropical, island, palm, sunset, jungle" },
    // New scenes:
    { theme: "Bedroom", tags: "bedroom, cozy, indoor, warm, personal" },
    {
      theme: "Movie Theater",
      tags: "movie theater, cinema, dark, seats, screen",
    },
    {
      theme: "Living Room",
      tags: "living room, home, comfortable, sofa, modern",
    },
    { theme: "Arcade", tags: "arcade, retro, neon, gaming, fun" },
    { theme: "Halloween", tags: "halloween, spooky, costumes, pumpkins, eerie" },
    {
      theme: "Shopping Mall",
      tags: "shopping mall, retail, modern, crowds, glass",
    },
    // A few more along these lines:
    { theme: "Office", tags: "office, corporate, desk, computer, modern" },
    { theme: "Restaurant", tags: "restaurant, dining, food, ambiance, modern" },
    { theme: "Park", tags: "park, nature, green, outdoors, relaxation" },
    { theme: "Beach", tags: "beach, sand, ocean, sun, relaxation" },
  ];
  
  // Make scenes available globally
  window.scenes = scenes;
  
  // List of available action base words.
  const actionTags = [
    "dancing",
    "fighting",
    "kissing",
    "flirting",
    "mutual tail biting",
    "cooperative grinding",
    "spooning",
    "pointing",
    "kicking",
    "slapping",
    "pushing",
    "cuddling",
    "cupping",
    "headpat",
    "groping",
    "tail fondling",
    "rubbing",
    "biting ass",
    "biting another's tail",
    "breast biting",
    "biting cheek",
    "biting ear",
    "biting finger",
    "biting foreskin",
    "biting glove",
    "biting another's hand",
    "biting head",
    "biting penis",
    "elbowing",
    "hitting",
    "punching",
    "pulling",
    "throwing",
    "fingering",
    "anal fingering",
    "fisting",
    "anal fisting",
    "licking armpit",
    "licking breast",
    "licking another's cheek",
    "licking cum",
    "licking ear",
    "licking eye",
    "licking another's face",
    "licking finger",
    "licking floor",
    "licking foot",
    "licking blade",
    "licking leg",
    "licking navel",
    "licking nipple",
    "licking panties",
    "licking testicle",
    "licking thigh",
    "breast sucking",
    "finger sucking",
    "toe sucking",
    "unzipping with mouth",
    "unzipping",
    "dry humping",
    "humping",
    "spanking",
    "squirting liquid",
    "apologizing",
    "beckoning",
    "begging",
    "comforting",
    "feeding",
    "pov feeding",
    "patting",
    "pinching",
    "cheek pinching",
    "tickling",
    "tickling feet",
    "forced dressing",
    "undressing",
    "ear cleaning",
    "drawing on another's face",
    "measuring bust",
    "measuring penis",
    "measuring waist",
    "pantsing",
    "aiming",
    "aiming at viewer",
    "animal milking",
    "applying makeup",
    "balancing",
    "bathing",
    "blinking",
    "blocking",
    "bouncing",
    "bouncing breasts",
    "bowing",
    "breaking",
    "breastfeeding",
    "breathing",
    "heavy breathing",
    "panting",
    "blowing bubbles",
    "bumping",
    "carrying",
    "catching",
    "chasing",
    "cheering",
    "stroking own chin",
    "cleaning",
    "dishwashing",
    "sweeping",
    "climbing",
    "concentrating",
    "cooking",
    "baking",
    "chocolate making",
    "roasting",
    "stirring",
    "coughing",
    "covering privates",
    "cowering",
    "crawling",
    "crushing",
    "crying",
    "sobbing",
    "cutting",
    "wrist cutting",
    "pole dancing",
    "diaper changing",
    "digging",
    "diving",
    "dodging",
    "dragging",
    "dreaming",
    "dressing",
    "drinking",
    "dripping",
    "driving",
    "drooling",
    "dropping",
    "drying",
    "dual wielding",
    "quadruple wielding",
    "triple wielding",
    "dying",
    "eating",
    "chewing",
    "swallowing",
    "tasting",
    "eavesdropping",
    "firing",
    "flailing",
    "flapping",
    "floating",
    "flying",
    "gardening",
    "watering",
    "giving",
    "glaring",
    "glowing",
    "grabbing",
    "hairdressing",
    "brushing hair",
    "tucking hair",
    "twirling hair",
    "hanging",
    "hatching",
    "healing",
    "hiding",
    "holding",
    "imagining",
    "imitating",
    "juggling",
    "jumping",
    "hopping",
    "pouncing",
    "kneeing",
    "knocking",
    "landing",
    "laughing",
    "giggling",
    "launching",
    "leaning",
    "licking",
    "lifting",
    "looking",
    "looking at viewer",
    "looking away",
    "looking back",
    "looking down",
    "looking up",
    "lying",
    "measuring (self)",
    "melting",
    "mind reading",
    "moaning",
    "multitasking",
    "nose picking",
    "opening",
    "peeing",
    "bedwetting",
    "peeking",
    "peeling",
    "pitching",
    "playing",
    "playing games",
    "playing instrument",
    "playing sports",
    "poking",
    "cheek poking",
    "polishing",
    "pouring",
    "decantering",
    "praying",
    "presenting",
    "programming",
    "repairing",
    "resisting",
    "resting",
    "riding",
    "broom riding",
    "umbrella riding",
    "ripping",
    "roaring",
    "rolling",
    "running",
    "scratching",
    "screaming",
    "searching",
    "shading eyes",
    "shaking",
    "sharing",
    "shaving",
    "shopping",
    "shouting",
    "shushing",
    "singing",
    "sinking",
    "sitting",
    "reclining",
    "sketching",
    "skipping",
    "slashing",
    "sleeping",
    "sliding",
    "slipping",
    "smelling",
    "smelling clothes",
    "smelling pantyhose",
    "smelling underwear",
    "smoking",
    "sneezing",
    "snowing",
    "spilling",
    "spinning",
    "pen spinning",
    "spitting",
    "splashing",
    "spraying",
    "squeezing",
    "squinting",
    "stacking",
    "standing",
    "staring",
    "hug",
    "stepping",
    "stomping",
    "strangling",
    "struggling",
    "studying",
    "sucking (self)",
    "blood sucking",
    "self breast sucking",
    "sulking",
    "summoning",
    "sunbathing",
    "surfing",
    "broom surfing",
    "sky surfing",
    "swaying",
    "swinging",
    "swinging another",
    "swinging arm",
    "swinging arms",
    "swinging baseball bat",
    "swinging golf club",
    "swinging legs",
    "swinging object",
    "swinging on rope",
    "swinging on swing",
    "swinging tennis racket",
    "swinging weapon",
    "swinging (relationship)",
    "talking",
    "sleep talking",
    "teaching",
    "text messaging",
    "thinking",
    "training",
    "trembling",
    "trolling",
    "twitching",
    "tying",
    "scarf tying",
    "tying footwear",
    "untying",
    "typing",
    "unsheathing",
    "vomiting",
    "wading",
    "skinny dipping",
    "waiting",
    "walking",
    "pet walking",
    "rope walking",
    "wallwalking",
    "warming",
    "washing",
    "body soaping",
    "watching",
    "watching television",
    "waving",
    "whipping",
    "whisking",
    "whispering",
    "whistling",
    "working",
    "wringing",
    "zipping",
    "unzipping",
  ];
  