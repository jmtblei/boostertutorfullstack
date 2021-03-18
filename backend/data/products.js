const products = [
    {
        name: "Alpha (Limited Edition)",
        description: "The first print run of Limited Edition, the first core set of Magic: The Gathering.",
        price: 30000,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/e/ee/Alpha_booster.jpg/revision/latest?cb=20131109145038",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_AlphaBetaUnlimited_SetLogo.png",
        symbolURL: "A",
        setType: "Core",
        releaseDate: "1993-08-05",
        block: "Core",
    },
    {
        name: "Beta (Limited Edition)",
        description: "The second print run of Limited Edition. Contains revisions and fixes from the original Alpha print-run.",
        price: 7000,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/e/ee/Alpha_booster.jpg/revision/latest?cb=20131109145038",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_AlphaBetaUnlimited_SetLogo.png",
        symbolURL: "B",
        setType: "Core",
        releaseDate: "1993-10-04",
        block: "Core",
    },
    {
        name: "Unlimited Edition",
        description: "The second edition of the core set. The first set to feature all white-bordered cards to indicate a reprinting.",
        price: 2600,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/6/6d/Unlimited_booster.jpg/revision/latest?cb=20131109150010",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_AlphaBetaUnlimited_SetLogo.png",
        symbolURL: "U",
        setType: "Core",
        releaseDate: "1993-12-01",
        block: "Core",
    },
    {
        name: "Arabian Nights",
        description: "The very first Magic: The Gathering expansion. A stand-alone product whose setting is inspired and references One Thousand and One Nights ((Arabic: أَلْفُ لَيْلَةٍ وَلَيْلَةٌ‎, ʾAlf Laylah wa-Laylah), a collection of real-world Middle Eastern folk tales.",
        price: 2600,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/a/a4/Arabian_Nights_booster.jpg/revision/latest?cb=20080219120044",
        logoURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/bf/Arabian_Nights_logo.png/revision/latest?cb=20080219115905",
        symbolURL: "https://media.magic.wizards.com/images/featured/ARN_SetIcon.png",
        setType: "Non-block Expansion",
        releaseDate: "1993-12-17",
        block: "Stand-Alone",
    },
    {
        name: "Antiquities",
        description: "The second Magic: The Gathering expansion. The first set to have a backstory unique to Magic: The Gathering that explores the mythos of the Magic: The Gathering universe and a war of two brothers. This was the first set that featured multiple alternate art for specific cards (at a strange distribution) in a set.",
        price: 1000,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/8/8c/Antiquities_booster.jpg/revision/latest?cb=20131109185452",
        logoURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b5/ATQ_logo.jpg/revision/latest?cb=20080720223945",
        symbolURL: "https://media.magic.wizards.com/images/featured/ATQ_SetIcon.png",
        setType: "Non-block Expansion",
        releaseDate: "1994-03-04",
        block: "Stand-Alone",
    },
    {
        name: "Revised Edition",
        description: "The third edition of Magic: The Gathering core sets.",
        price: 400,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/0/09/Revised_booster.jpg/revision/latest?cb=20131109190743",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_3ED_SetLogo.png",
        symbolURL: "R",
        setType: "Core",
        releaseDate: "1994-04-01",
        block: "Core",
    },
    {
        name: "Legends",
        description: "The third Magic: The Gathering expansion set. The first expansion set to be sold in booster packs of 15 cards (previously 8), and the first set to contain multicolored cards.",
        price: 1000,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/6/61/Legends_booster.jpg/revision/latest?cb=20131109190907",
        logoURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/4/4a/LEG_logo.jpg/revision/latest?cb=20121230234135",
        symbolURL: "https://media.magic.wizards.com/images/featured/LED_SetIcon.png",
        setType: "Non-block Expansion",
        releaseDate: "1994-06-10",
        block: "Stand-Alone",
    },
    {
        name: "The Dark",
        description: "The fourth Magic: The Gathering expansion set. The storyline follows the events of a Dark Age after the climax of the Brothers' War in Antiquities.",
        price: 120,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/fe/The_Dark_booster.jpg/revision/latest?cb=20131109191746",
        logoURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/b/b4/TheDark_Logo.jpg/revision/latest?cb=20080717163831",
        symbolURL: "https://media.magic.wizards.com/images/featured/DRK_SetIcon.png",
        setType: "Non-block Expansion",
        releaseDate: "1994-08-08",
        block: "Stand-Alone",
    },
    {
        name: "Fallen Empires",
        description: "The fifth Magic: The Gathering expansion set.  The storyline is a continuation of the events that occured during The Dark. This was the first set that featured multiple alternate art for  specific cards (at a fixed distribution) in a set.",
        price: 15,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/4/48/Fallen_Empires_booster.jpg/revision/latest?cb=20131109193536",
        logoURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/9/91/FEM_logo.jpg/revision/latest?cb=20080717160608",
        symbolURL: "https://media.magic.wizards.com/images/featured/FEM_SetIcon.png",
        setType: "Non-block Expansion",
        releaseDate: "1994-11-15",
        block: "Stand-Alone",
    },
    {
        name: "Fourth Edition (4th Edition)",
        description: "The fourth edition of Magic: The Gathering core sets",
        price: 60,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/27/4ED_booster.jpg/revision/latest?cb=20131109211926",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_4ED_SetLogo.png",
        symbolURL: "https://media.magic.wizards.com/images/featured/4ED_SetIcon.png",
        setType: "Core",
        releaseDate: "1995-05-03",
        block: "Core",
    },
    {
        name: "Ice Age",
        description: "The sixth Magic: The Gathering expansion set, and the first set of the first featured block paradigm. The storyline follows a new ice age set after the events of the dark age.",
        price: 50,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/2f/ICE_booster.jpg/revision/latest?cb=20131110062223",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_ICE_SetLogo.png",
        symbolURL: "https://media.magic.wizards.com/images/featured/ICE_SetIcon.png",
        setType: "Block Expansion",
        releaseDate: "1995-06-02",
        block: "Ice Age",
    },
    {
        name: "Homelands",
        description: "The seventh Magic: The Gathering expansion set, praised for it's storyline setting and flavor that explored popular characters. This set also featured multiple alternate art for  specific cards (at a fixed distribution) in a set.",
        price: 14,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/2b/HML_booster.jpg/revision/latest?cb=20131110084410",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_HML_SetLogo.png",
        symbolURL: "https://media.magic.wizards.com/images/featured/HML_SetIcon.png",
        setType: "Non-block Expansion",
        releaseDate: "1995-10-14",
        block: "Stand-Alone",
    },
    {
        name: "Alliances",
        description: "The eighth Magic: The Gathering expansion set, and second set of the Ice Age Block. This was the last set that featured multiple alternate art for  specific cards (at a fixed distribution) in a set.",
        price: 70,
        countInStock: 1000,
        imageURL: "https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/8/85/ALL_booster.jpg/revision/latest?cb=20131110090740",
        logoURL: "https://media.magic.wizards.com/images/featured/EN_ALL_SetLogo.png",
        symbolURL: "https://media.magic.wizards.com/images/featured/ALL_SetIcon.png",
        setType: "Block Expansion",
        releaseDate: "1996-06-10",
        block: "Ice Age",
    },
    {
        name: "",
        description: "",
        price: ,
        countInStock: 1000,
        imageURL: "",
        logoURL: "",
        symbolURL: "",
        setType: "",
        releaseDate: "",
        block: "",
    },


];

module.exports = products;