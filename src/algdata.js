const availableAlgsets = ["oll", "pll"];

const pageDetails = {
    "prototype": {
        "name": "",
        "title": "",
        "description": "",
        "canGenImages": true,
        "view": "plan" // for image genning
    },
    "oll": {
        "name": "OLL",
        "title": "3x3 OLL",
        "description": "description here",
        "canGenImages": true,
        "view": "plan"
    },
    "pll": {
        "name": "PLL",
        "title": "3x3 PLL",
        "description": "description here",
        "canGenImages": true,
        "view": "plan"
    }
};

const algsetData = {
    oll: [
        {name: 1, alg: ["R U2 R' R' F R F' U2 R' F R F'"], group: "Dot"},
        {name: 2, alg: ["r U r' U2 r U2 R' U2 R U' r'",
                "y' F R U R' U' F' f R U R' U' f'",
                "y' F R U R' U' S R U R' U' f'"], group: "Dot"},
        {name: 3, alg: ["r' R2 U R' U r U2 r' U M'"], group: "Dot"},
        {name: 4, alg: ["M U' r U2 r' U' R U' R' M'"], group: "Dot"},
        {name: 5, alg: ["l' U2 L U L' U l"], group: "Square Shape"},
        {name: 6, alg: ["r U2 R' U' R U' r'"], group: "Square Shape"},
        {name: 7, alg: ["r U R' U R U2 r'"], group: "Small Lightning Bolt"},
        {name: 8, alg: ["l' U' L U' L' U2 l"], group: "Small Lightning Bolt"},
        {name: 9, alg: ["R U R' U' R' F R2 U R' U' F'"], group: "Fish Shape"},
        {name: 10, alg: ["R U R' U R' F R F' R U2 R'"], group: "Fish Shape"},
        {name: 11, alg: ["r U R' U R' F R F' R U2 r'"], group: "Small Lightning Bolt"},
        {name: 12, alg: ["M' R' U' R U' R' U2 R U' R r'"], group: "Small Lightning Bolt"},
        {name: 13, alg: ["F U R U' R2 F' R U R U' R'"], group: "Knight Move Shape"},
        {name: 14, alg: ["R' F R U R' F' R F U' F'"], group: "Knight Move Shape"},
        {name: 15, alg: ["l' U' l L' U' L U l' U l"], group: "Knight Move Shape"},
        {name: 16, alg: ["r U r' R U R' U' r U' r'"], group: "Knight Move Shape"},
        {name: 17, alg: ["F R' F' R2 r' U R U' R' U' M'"], group: "Dot"},
        {name: 18, alg: ["r U R' U R U2 r' r' U' R U' R' U2 r"], group: "Dot"},
        {name: 19, alg: ["r' R U R U R' U' M' R' F R F'"], group: "Dot"},
        {name: 20, alg: ["r U R' U' M2 U R U' R' U' M'"], group: "Dot"},
        {name: 21, alg: ["R U2 R' U' R U R' U' R U' R'"], group: "Cross"},
        {name: 22, alg: ["R U2 R2 U' R2 U' R2 U2 R"], group: "Cross"},
        {name: 23, alg: ["R2 D' R U2 R' D R U2 R"], group: "Cross"},
        {name: 24, alg: ["r U R' U' r' F R F'"], group: "Cross"},
        {name: 25, alg: ["F' r U R' U' r' F R"], group: "Cross"},
        {name: 26, alg: ["R U2 R' U' R U' R'"], group: "Cross"},
        {name: 27, alg: ["R U R' U R U2 R'"], group: "Cross"},
        {name: 28, alg: ["r U R' U' r' R U R U' R'"], group: "Corners Oriented"},
        {name: 29, alg: ["R U R' U' R U' R' F' U' F R U R'"], group: "Awkward Shape"},
        {name: 30, alg: ["F R' F R2 U' R' U' R U R' F2"], group: "Awkward Shape"},
        {name: 31, alg: ["R' U' F U R U' R' F' R"], group: "P Shape"},
        {name: 32, alg: ["L U F' U' L' U L F L'"], group: "P Shape"},
        {name: 33, alg: ["R U R' U' R' F R F'"], group: "T Shape"},
        {name: 34, alg: ["R U R2 U' R' F R U R U' F'"], group: "C Shape"},
        {name: 35, alg: ["R U2 R' R' F R F' R U2 R'"], group: "Fish Shape"},
        {name: 36, alg: ["L' U' L U' L' U L U L F' L' F"], group: "W Shape"},
        {name: 37, alg: ["F R' F' R U R U' R'"], group: "Fish Shape"},
        {name: 38, alg: ["R U R' U R U' R' U' R' F R F'"], group: "W Shape"},
        {name: 39, alg: ["L F' L' U' L U F U' L'"], group: "Big Lightning Bolt"},
        {name: 40, alg: ["R' F R U R' U' F' U R"], group: "Big Lightning Bolt"},
        {name: 41, alg: ["R U R' U R U2' R' F R U R' U' F'"], group: "Awkward Shape"},
        {name: 42, alg: ["R' U' R U' R' U2 R F R U R' U' F'"], group: "Awkward Shape"},
        {name: 43, alg: ["F' U' L' U L F"], group: "P Shape"},
        {name: 44, alg: ["F U R U' R' F'"], group: "P Shape"},
        {name: 45, alg: ["F R U R' U' F'"], group: "T Shape"},
        {name: 46, alg: ["R' U' R' F R F' U R"], group: "C Shape"},
        {name: 47, alg: ["R' U' R' F R F' R' F R F' U R"], group: "Small L Shape"},
        {name: 48, alg: ["F R U R' U' R U R' U' F'"], group: "Small L Shape"},
        {name: 49, alg: ["r U' r2 U r2 U r2 U' r"], group: "Small L Shape"},
        {name: 50, alg: ["r' U r2 U' r2 U' r2 U r'"], group: "Small L Shape"},
        {name: 51, alg: ["F U R U' R' U R U' R' F'"], group: "I Shape"},
        {name: 52, alg: ["R U R' U R U' B U' B' R'"], group: "I Shape"},
        {name: 53, alg: ["l' U2 L U L' U' L U L' U l"], group: "Small L Shape"},
        {name: 54, alg: ["r U2 R' U' R U R' U' R U' r'"], group: "Small L Shape"},
        {name: 55, alg: ["R' F R U R U' R2 F' R R U' R' U R U R'"], group: "I Shape"},
        {name: 56, alg: ["r' U' r U' R' U R U' R' U R r' U r"], group: "I Shape"},
        {name: 57, alg: ["R U R' U' M' U R U' r'"], group: "Corners Oriented"}
    ],
    pll: [
        {
            name: "H",
            alg: [
                "M2 U M2 U2 M2 U M2"
            ],
            group: "Edges Only"},
        {
            name: "Z",
            alg: [
                "M' U M2 U M2 U M' U2 M2",
                "y M' U' M2 U' M2 U' M' U2 M2",
                "y M2 U M2 U M' U2 M2 U2 M'",
                "M2 U' M2 U' M' U2 M2 U2 M'"
            ],
            group: "Edges Only"
        },
        {
            name: "Ua",
            alg: [
                "M2 U M U2 M' U M2",
                "R U' R U R U R U' R' U' R2",
                "y2 R2 U' R' U' R U R U R U' R"
            ],
            group: "Edges Only"
        },
        {
            name: "Ub",
            alg: [
                "M2 U' M U2 M' U' M2",
                "R2 U (R U R' U') R' U' R' U R'",
                "y2 R' U R' U' R' U' R' U R U R2",
                "y2 R' U R' U' R3 U' R' U R U R2"
            ],
            group: "Edges Only"
        },
        {
            name: "Aa",
            alg: [
                "x L2 D2 L' U' L D2 L' U L' x'",
                "y' x' L' U L' D2 L U' L' D2 L2 x",
                "y x R' U R' D2 R U' R' D2 R2 x'",
                "y2 x' R2 D2 R' U' R D2 R' U R' x"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Ab",
            alg: [
                "x' L2 D2 L U L' D2 L U' L x",
                "y x L U' L D2 L' U L D2 L2 x'",
                "y2 x R2 D2 R U R' D2 R U' R x'",
                "y' x' R U' R D2 R' U R D2 R2 x"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "E",
            alg: [
                "x' L' U L D' L' U' L D L' U' L D' L' U L D x",
                "x' R U' R' D R U R' D' R U R' D R U' R' D' x"
            ],
            group: "Diagonal Corner Swap"
        },
        {
            name: "F",
            alg: [
                "(R' U' F') R U R' U' R' F R2 U' R' U' R U R' U R"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Ja",
            alg: [
                "x R2 F R F' R U2 r' U r U2 x'",
                "y2 L' U' L F L' U' L U L F' L2 U L",
                "y' R' U L' U2 R U' R' U2 R L"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Jb",
            alg: [
                "R U R' F' R U R' U' R' F R2 U' R'"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Ra",
            alg: [
                "R U' R' U' R U R D R' U' R D' R' U2 R'",
                "R U R' F' R U2 R' U2 R' F R U R U2 R'",
                "y' L U2 L' U2 L F' L' U' L U L F L2"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Rb",
            alg: [
                "R2 F R U R U' R' F' R U2 R' U2 R",
                "y' R' U2 R U2 R' F R U R' U' R' F' R2",
                "R' U2 R' D' R U' R' D R U R U' R' U' R"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "T", alg: [
                "R U R' U' R' F R2 U' R' U' (R U R') F'"
            ],
            group:"Adjacent Corner Swap"
        },
        {
            name: "Y",
            alg: [
                "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                "F R' F R2 U' R' U' R U R' F' R U R' U' F'"
            ],
            group: "Diagonal Corner Swap"
        },
        {
            name: "V",
            alg: [
                "R' U R' U' y R' F' R2 U' R' U R' F R F",
                "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
                "z D' R2 D R2 U R' D' R U' R U R' D R U' z'",
                "R U2 R' D R U' R U' R U R2 D R' U' R D2",
                "x' R' F R F' U R U2 R' U' R U' R' U2 R U R' U' x"
            ],
            group: "Diagonal Corner Swap"
        },
        {
            name: "Na",
            alg: [
                "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
                "z U R' D R2 U' R D' U R' D R2 U' R D' z'"
            ],
            group: "Diagonal Corner Swap"
        },
        {
            name: "Nb",
            alg: [
                "R' (U R U' R') F' U' F R U R' F R' F' R U' R",
                "z D' R U' R2 D R' U D' R U' R2 D R' U z'"
            ],
            group: "Diagonal Corner Swap"
        },
        {
            name: "Ga",
            alg: [
                "R2 U R' U R' U' R U' R2 (U' D) R' U R D'",
                "R2 u R' U R' U' R u' R2 y' R' U R"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Gb",
            alg: [
                "R' U' R (U D') R2 U R' U R U' R U' R2 D",
                "y F' U' F R2 u R' U R U' R u' R2"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Gc",
            alg: [
                "R2 U' R U' R U R' U R2 (U D') R U' R' D",
                "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
                "R2 u' R U' R U R' u R2 y R U' R'"
            ],
            group: "Adjacent Corner Swap"
        },
        {
            name: "Gd",
            alg: [
                "R U R' (U' D) R2 U' R U' R' U R' U R2 D'",
                "R U R' y' R2 u' R U' R' U R' u R2"
            ],
            group: "Adjacent Corner Swap"
        }
    ]
};

const scrambles = {
    pll: [
        [
            "U' R2 B2 D2 F2 R2 B2 U2 R2 F2 L' R' U2 L' R'",
            "U R2 B2 D2 F2 R2 B2 U2 R2 F2 L' R' U2 L' R'",
            "U2 R2 B2 D2 F2 R2 B2 U2 R2 F2 L' R' U2 L' R'"
        ],
        [
            "R2 U L2 D L2 U R2 D B2 U L2 F2 U L' R' U2 L' R'",
            "L2 R2 U' F2 R2 D2 L2 F2 R2 U2 B2 R2 U' L' R' U2 L' R'",
            "B2 R2 B2 R2 U R2 U R2 U R2 U R2 U L R' U2 L' R'"
        ],
        [
            "U' L2 R2 D' R2 F2 R2 D L' R' U2 L' R'",
            "D B2 F2 D' F2 L2 F2 U L' R' U2 L' R'",
            "D' F2 L2 R2 F2 U' F2 L2 B2 U' L' R' U2 L' R'"
        ],
        [
            "L2 R2 D L2 B2 L2 D' L' R' U2 L' R'",
            "R2 B2 F2 R2 D B2 R2 F2 U L' R' U2 L' R'",
            "L2 R2 D R2 F2 R2 D' L' R' U2 L' R'"
        ],
        [
            "D F2 U F2 R2 D L2 D' R2 F2 D' R2 U2 L' R' U2 L' R'",
            "D F2 U R2 F2 U B2 U' F2 R2 D' R2 U2 L' R' U2 L' R'",
            "L2 B2 R2 D' L2 D' F2 D F2 U' F2 U B2 L R' U2 L' R'"
        ],
        [
            "R2 U' L2 R2 F2 U F2 U' F2 L2 R2 U L R' U2 L' R'",
            "R2 D' L2 R2 F2 D F2 D' F2 L2 R2 D L R' U2 L' R'",
            "D B2 U' L2 D L2 D2 B2 U' R2 U' B2 U' L R' U2 L' R'"
        ],
        [
            "R2 U B2 D2 F2 R2 U B2 U F2 D2 L2 U L R' F2 L' R'",
            "R2 U' B2 U2 L2 U F2 U' L2 U2 B2 U' L R F2 L' R'",
            "U R2 U' B2 U2 L2 U F2 U' L2 U2 B2 U' L R F2 L' R'"
        ],
        [
            "F2 U' F2 U' F2 U2 R2 U F2 U' F2 U' L' R' U2 L R'",
            "F2 R2 D B2 D' R2 U F2 L2 R2 U' L2 U' L R' F2 L R'",
            "R2 U2 B2 U L2 U' R2 U L2 U2 L2 F2 D' L' R F2 L' R'"
        ],
        [
            "U2 F2 D' B2 L2 U' L2 U B2 F2 R2 U' B2 L R' U2 L' R'",
            "U2 F2 L2 D' L2 F2 R2 B2 D' R2 D R2 U' L R' U2 L' R'",
            "L2 D R2 F2 U L2 B2 D F2 R2 U L2 B2 L' R' U2 L' R'"
        ],
        [
            "D' B2 D' L2 D F2 U' F2 U F2 D U' L' R' U2 L' R'",
            "L2 U F2 U' F2 L2 R2 U B2 U' L2 D' L' R' U2 L' R'",
            "D2 R2 D L2 D' B2 L2 R2 D R2 U' B2 U' L' R' U2 L' R'"
        ],
        [
            "D B2 D' L2 R2 B2 U L2 U' B2 L2 R2 U L R' U2 L' R'",
            "L2 F2 L2 U R2 D F2 D' L2 U L2 U' F2 L R' U2 L' R'",
            "L2 R2 D L2 D' F2 U R2 U' F2 U B2 U' L' R' U2 L' R'"
        ],
        [
            "U2 L2 F2 D B2 D' L2 D F2 L2 U B2 L' R' U2 L' R'",
            "U' R2 B2 D F2 D' R2 D B2 R2 U F2 L' R' U2 L' R'",
            "L2 D B2 L2 F2 R2 U B2 U' F2 U L2 F2 L' R' U2 L' R'"
        ],
        [
            "R2 D' L2 B2 R2 U2 F2 R2 D' B2 U B2 U' L R' U2 L' R'",
            "F2 D R2 U' R2 D2 F2 D F2 U' F2 U L R F2 L' R'",
            "B2 U B2 D2 B2 L2 D B2 D F2 L2 U' B2 L' R' F2 L' R'"
        ],
        [
            "U' R2 U' R2 D B2 D' B2 U' L2 U L2 U L R B2 L' R'",
            "R2 U2 B2 D' R2 U2 F2 R2 F2 R2 D' F2 D2 L R' U2 L' R'",
            "U2 B2 D F2 D' R2 U F2 D F2 U' B2 U L' R U2 L' R'"
        ],
        [
            "B2 U L2 R2 U F2 U' F2 L2 U2 R2 U' B2 L R F2 L' R'",
            "R2 U2 B2 U' L2 U2 L2 B2 U B2 U2 L2 U' L' R' U2 L' R'",
            "R2 D2 B2 D' L2 B2 L2 B2 D2 L2 D' B2 D2 L R' U2 L' R'"
        ],
        [
            "U' F2 L2 U2 L2 U' F2 U2 L2 U L2 F2 U2 L' R U2 L R'",
            "U F2 L2 U2 L2 U' F2 U2 L2 U L2 F2 U2 L' R U2 L R'",
            "B2 L2 U2 R2 D R2 F2 D2 F2 U F2 L2 U2 L R' U2 L' R'"
        ],
        [
            "U' F2 R2 U2 R2 U F2 U2 R2 U' R2 F2 U2 L' R U2 L R'",
            "R2 U2 B2 U B2 R2 U2 B2 R2 U' B2 R2 U2 L R' U2 L' R'",
            "U F2 R2 U2 R2 U F2 U2 R2 U' R2 F2 U2 L' R U2 L R'"
        ],
        [
            "R2 D' R2 F2 U' F2 U F2 R2 U B2 D U' L' R' U2 L' R'",
            "U' R2 B2 D' R2 B2 U' R2 U L2 U' F2 L' R' U2 L' R'",
            "R2 U2 L2 R2 D F2 D R2 U' R2 U R2 D2 L' R' U2 L' R'"
        ],
        [
            "B2 D F2 R2 U F2 U' B2 U R2 F2 R2 F2 L' R' U2 L' R'",
            "F2 L2 F2 U' F2 D' F2 D B2 D' B2 R2 U' L R' U2 L' R'",
            "R2 B2 F2 D' R2 D R2 U' B2 U B2 F2 L R' U2 L' R'"
        ],
        [
            "U' B2 D' R2 B2 L2 R2 U' L2 U F2 U' F2 L R' U2 L' R'",
            "U R2 D R2 F2 L2 F2 R2 D' B2 U B2 U' L R' U2 L' R'",
            "L2 F2 R2 U R2 U' L2 U F2 U' F2 R2 U' L R' U2 L' R'"
        ],
        [
            "U' F2 D' L2 U B2 U' B2 L2 F2 R2 U' B2 L R' U2 L' R'",
            "L2 B2 R2 U B2 R2 D F2 U' R2 U F2 U' L R' U2 L' R'",
            "L2 F2 L2 R2 D R2 F2 U R2 U' L2 U B2 L' R' U2 L' R'"
        ]
    ],
    oll: [
        [
            "R2 U2 R2 D' F2 R2 U2 R2 F L' U L2 F2 L' R' F' D R",
            "U L2 U L2 U' L2 U' L' B' F U2 B U' R U' R' F' L'",
            "B2 L2 R2 F2 D R2 D F D' L' F L' R2 B R' B U' R'"
        ],
        [
            "U R2 U R2 U' R2 U' F' U2 L' B2 U' B' U B2 U L F",
            "B2 U R2 U R2 U' B2 R2 U B2 F' L' B' U2 L B' U2 F",
            "L2 U2 L2 U L2 B2 U L2 U L2 B L B' U2 B' L' B' L2"
        ],
        [
            "D2 L2 R2 D2 U2 L2 R' B2 R2 U2 R B' R' U2 R2 B2 R'",
            "L2 U L2 D' B2 R2 U' R2 F R F' D B2 L F U' F' L'",
            "R2 D2 L2 D2 B2 D B2 F L D F2 D' B F' D' L B' R2"
        ],
        [
            "U R2 F2 D L2 D' F2 R2 U B' U L2 F' L' F U' L' B'",
            "B2 D U B2 D' U B' R2 B' R B R' U2 B R B U2 R'",
            "F2 L2 D2 B2 L2 F2 U2 R U2 R2 B2 R' B R' U2 R2 B2 R'"
        ],
        [
            "U2 L2 D L2 B2 U L2 U' R2 U F2 R' B' L B' R' U2 L",
            "U' F2 R2 U R2 D' F2 D F2 U' F' U F2 L F L2 U L",
            "U B2 U' B2 U' B2 U2 B2 L2 U L2 R B' D' B' D B2 R'"
        ],
        [
            "L2 D F2 U' F2 L2 D' B2 U B2 U' R B L' B L B2 R'",
            "L2 F2 U' L2 U F2 L2 D F2 D' R' F D F D' F2 R",
            "U2 B2 U2 B2 R2 F2 L2 F2 R2 F' R' F U2 F' R B2 L' F"
        ],
        [
            "R2 B2 L2 D R2 F2 R2 D' B2 R2 B L B' R U2 L U2 R'",
            "D2 L2 D B2 F2 L2 D B2 R2 F' D2 F L2 B D R B R'",
            "L2 U2 L2 F2 U L2 U L2 U L F2 L' U2 R' F' R F'"
        ],
        [
            "L2 B2 F2 R2 D L2 B2 F2 R2 U' B' R2 F R F' R B",
            "B2 D L2 D' R2 D L2 D' R2 B' L' B' R B2 L B2 R'",
            "L2 D' B2 U B2 L2 D F2 U' F2 U' B' R2 F R F' R B"
        ],
        [
            "F2 U' F2 U' F2 U F2 R' F L2 D' L' D F2 L' F R",
            "R2 B2 F2 U B2 U' F2 D U B' D' B' U' B R' B U R'",
            "U' B2 D F2 R2 D B2 U L' F2 U2 L2 B' R' B2 L B'"
        ],
        [
            "U2 F2 D' B2 D' R2 B2 D2 F2 U B L2 F' L F L B' L2",
            "F2 U F2 L2 D' B2 D' B2 D2 B L2 F' L F L B' L2",
            "D' L2 F2 D2 R2 B2 D' U' R2 F U R' F2 R U' F2 U F'"
        ],
        [
            "U2 F2 R2 U' F2 U R' F2 L' U2 R' B' R B L R2",
            "U F2 U F2 L2 F2 U F2 L2 U' R' F' L2 F L2 F' L2 R",
            "F2 U F2 U' B2 U F2 U' B2 F' L R2 B' R' B L' R' F'"
        ],
        [
            "U2 B2 L2 D' R2 D L2 D' F R' F' R' F R' F' D B2",
            "B2 L2 D L2 D' R2 D L2 D' F2 L B R' B L2 R' F2 L'",
            "U' R2 B2 U R2 U R2 U2 B' R' B L U L' U B2 R'"
        ],
        [
            "F2 U2 F2 U' F2 U F2 U2 F' L F2 U' R U L' R' U F'",
            "F2 U2 F2 D R2 D' F2 U2 F2 R F R' U R' U' F' U R'",
            "D' U' B2 L2 D' L2 D B2 R U2 B' D' B R' D U2 R'"
        ],
        [
            "U2 R2 U B2 R2 B2 U2 B2 F D' R' D F' R2 B R B R2",
            "R2 D U2 R2 D2 L2 U' L U2 L F' D F R' F2 R' U2 R2",
            "U2 B2 D2 L2 B2 R2 U2 F2 R2 F' L' U L2 U L2 U' L' F"
        ],
        [
            "U L2 F2 R2 B2 U R2 F L' F L' D U' L U L",
            "R2 D' L2 F2 L2 U L2 F2 D R F' R2 F R2 D' L2 D R",
            "F2 L2 F2 U' B2 F2 D' F2 R2 B U R U2 R' U2 R' U B"
        ],
        [
            "U2 B2 U2 L2 B2 L2 B2 D' B2 U2 B' D U L U' B' U' L",
            "U2 R2 B2 R2 U' R2 B2 R' U' F' L2 B L2 F U' R'",
            "D R2 U' R2 U R2 B2 U B2 L' B' L D' R' B U B' R'"
        ],
        [
            "U R2 U B2 F2 D' L2 D2 R2 D' F' L2 B R F' D2 B L2",
            "R2 D L2 D' R2 D L2 D' B U L F U2 F' U L' B'",
            "R2 U' F2 D' B2 D B2 L2 U2 B' L' D' F R2 B' L' U F"
        ],
        [
            "U' B2 F2 D' L D B' L F U2 L' B' U' F",
            "U' B2 U B2 U2 B2 U' B2 L' R B' L U' B2 U' B2 U R'",
            "U' R2 U R2 U2 R2 U' R2 B' F R' B U' R2 U' R2 U F'"
        ],
        [
            "U2 L2 F2 U L2 U L2 U' B' R' F' R B U' F2 L' F L'",
            "U2 R2 U R2 U L2 R2 B2 U2 L F2 R2 B L D2 F' R' F'",
            "U F2 U' F2 U' F2 U2 F2 U' F' U2 L' U B' U B L F"
        ],
        [
            "U2 R2 U F2 U' L2 D R2 D L R B' L2 D2 F' L' R'",
            "F2 R2 U' F2 L2 R2 U F2 L2 R2 U' L' R' F U2 F2 L' R",
            "U2 R2 D' R2 U B2 U' R2 D' L' R' B D2 R2 F L R"
        ],
        [
            "B2 U B2 U2 B2 U' B2 U' L U L' U R U B2 U' R'",
            "U2 B2 R2 B2 R2 U' R2 U R2 U R U2 B2 R' B2 R2 U2 R",
            "L2 D L2 U R2 U' R2 B2 R U L' R' D2 L B2 U' R'"
        ],
        [
            "L2 R2 D2 L2 R2 U R2 U' L2 F D2 L2 U2 R2 B R2 U' R2",
            "U2 F2 L2 B2 L2 U' L2 D' L2 U F U F R2 U' F R2 F'",
            "F2 L2 R2 U B2 U' B2 R2 U' R' D L' F2 D L D L2 R"
        ],
        [
            "U2 F2 U' F2 L2 D' L2 D F2 L2 U2 R U' L2 U R' U' F2",
            "U2 R2 U' R2 U2 F2 U' F2 U' F2 U2 F' U' R2 U' R2 U F'",
            "B2 D' B2 L2 D F2 U' F2 L2 U' L' U B2 U B2 U' L"
        ],
        [
            "U' L2 R2 D' L2 R2 U' L2 R2 B2 R2 F' R2 F L2 F' R2 F'",
            "U' B2 D' R2 U R2 B2 D L2 U' B2 L' F2 L B2 L' F2 L'",
            "R2 D' F2 U2 R2 U R2 U F2 R2 U2 R' U' R' D R U R"
        ],
        [
            "F2 U2 F2 R2 D B2 D L2 D2 R2 U F2 U' R' D' L2 D R",
            "F2 D R2 D' L2 U F2 R2 U' L2 F' D B2 D' F'",
            "U2 L2 D2 B2 L2 F2 U L2 B2 D' L' D R2 D' L'"
        ],
        [
            "U' L2 U' F2 U' F2 U L2 U R U2 L U' R' U2 F2 U' L'",
            "U2 F2 U' B2 R2 U R2 B2 U L D2 L D' L' D' L' F2",
            "L2 U F2 R2 B2 D' B2 R2 F2 U2 L' U L' U L U2 L'"
        ],
        [
            "F2 L2 U' L2 D F2 D' F2 U F2 U2 R' U' R U' R' U2 R",
            "D' L2 R2 F2 U L2 F2 U' F2 U2 R' F2 R' D L D L' B2",
            "U F2 L2 B2 D' B2 L2 F2 U' R' U' R2 U R2 U' R'"
        ],
        [
            "B2 U B2 U' B2 R2 B2 U' R2 U L' B' L B2 R' B R'",
            "D F2 D' L2 U L2 F2 U2 L2 B L B' L2 F L' F'",
            "U' L2 R2 F2 D' F2 L2 R2 U' B2 U2 R' F' L U2 L' F R"
        ],
        [
            "U R2 D B2 D' B2 U B2 U' R F' U' F U R' B2 R2",
            "D B2 F2 D' B2 L2 B2 U L D2 B' R U2 R' B D2 L R2",
            "F2 D' L2 D F2 R2 B2 U B2 U' R F' U' F U R' B2 R2"
        ],
        [
            "U2 F2 D' L2 D F2 U B2 U' L2 R F R2 F' L2 R' U B2",
            "R2 D' L2 D' B2 L2 D2 R2 U F2 R U2 B' R B R' U2 R'",
            "L2 B2 D F2 D' F2 U F2 U' F2 L' F U F' U' L B2 L2"
        ],
        [
            "D' R2 U B2 L2 U' F2 L2 U L' B2 L U2 F R B2 F'",
            "F2 D R2 U' R2 F2 D' L2 U B2 R B' D' B D R' B2 L2",
            "R2 B2 U B2 D' R2 D R2 U' R F R U R' U' F' U R"
        ],
        [
            "R2 F2 D L2 D L2 D2 F2 R' B U R B' R' U' R'",
            "F2 D' F2 D R2 U' R2 F2 U F2 R2 B' R D R' D' B R2",
            "D' R2 D F2 U B2 D' L2 D' U2 L' F2 D2 B' U' B' U' R'"
        ],
        [
            "U F2 D B2 D L2 D' B2 D' F' R F' U' F R' F' U' R2",
            "U2 R2 B2 D L2 U' L2 B2 D' R2 F R' U R2 U' R F'",
            "F2 U' L2 D2 B2 R2 D B2 D L2 U' F R F U' F' R' F'"
        ],
        [
            "F2 U' R2 U' F2 U' F2 R2 U F' U2 R2 U' R' U' R' F'",
            "U' L2 D F2 D' B2 U F2 U' B2 L' U2 F2 U' F' U' F' L'",
            "U2 L2 D' B2 D B2 U' B2 U L' U F U' F' L B2 L2"
        ],
        [
            "U' L2 B2 F2 R2 D' L2 B2 F2 R' U2 R' F R' F' R2 U2 R'",
            "R2 B2 D' B2 U2 F2 U' F2 U' B' D' R2 D2 R B U R'",
            "D' F2 L2 D B2 U' B2 F2 R' F R2 F' R' U R2 B2 R2"
        ],
        [
            "U2 L2 U' R2 D' L2 D L2 R2 U L2 R' F U' F' U F' R",
            "U L2 B2 F2 U' L2 U' L2 U2 B2 F2 L B U' B' U B' L",
            "D B2 L2 B2 U L2 B2 U F2 R2 U R F' R2 F R' F2 L2"
        ],
        [
            "L2 B2 D F2 R2 D' B2 U F2 U' L2 U L B L2 B' L'",
            "F2 D B2 D L2 B2 D2 F2 U R2 U2 R' F R2 F' R'",
            "B2 U2 B2 D2 F2 R2 U2 R2 D' F2 D' L' B L2 B' L'"
        ],
        [
            "U2 R2 U' R2 B2 U R2 U' R2 U' B2 F R' U R U' R F'",
            "R2 B2 R2 U2 F2 D B2 L2 D' F2 U R' B' U B U' B R'",
            "U2 F2 D B2 D R2 F2 L2 F2 R2 D2 F' R' U R U' R F'"
        ],
        [
            "F2 U2 F2 U' R2 U2 F2 U F2 U R B2 U' F' U B2 F R",
            "L2 R2 D B2 D B2 D2 L2 R2 U' F R U R' U' F U' F2",
            "U R2 F2 R2 U R' F R U2 F U2 F' U' R2 F2 R2"
        ],
        [
            "U L2 D R2 B2 L2 U R2 F2 U L' B' L B' U' B U B",
            "L2 F2 D' R2 D' R2 D2 F2 L2 B' R B' R2 U R2 B R' B",
            "U L2 D' R2 D' F2 R2 D2 L2 B' R B R' U B2 L U L'"
        ],
        [
            "R2 B2 L2 D' F2 L2 B R2 U' B L F U2 F U' L'",
            "F2 L2 F2 L2 U' F2 U' F2 U F' R B' U2 B U R' U' F'",
            "U2 F2 L2 R2 B' D R' B L2 R' F' U' F'"
        ],
        [
            "U R2 U R2 U R2 U2 R' F' L2 D' B D L2 F R'",
            "B2 D' F2 D B2 D' F2 D B R' F2 D' L D F2 R B'",
            "U2 F2 D B2 L2 F2 U' R F R F L2 D2 F2 R B' R'"
        ],
        [
            "R2 B2 D' F2 D B2 D' F2 D R2 U2 R' F' U' F U R",
            "U L2 B2 U' L2 U' L2 U B2 L2 F' L' F U' F' L F",
            "U' F2 U F2 U F2 U2 F2 L2 U' L2 F' L' F U' F' L F"
        ],
        [
            "R2 D B2 D' R2 F2 L2 U' L2 U L2 F' R U R' U' F'",
            "U2 F2 D B2 F2 L2 B2 U' F2 R2 D2 F' R F' U F R' F'",
            "U L2 U' B2 U' B2 U' L2 B2 U2 B' L B' U B L' B'"
        ],
        [
            "U F2 D' R2 D2 F2 U L2 U2 F D' R' D R B U2 B F'",
            "F2 L2 U' L2 D F2 D' F2 U F2 U' B' U' R' U R B",
            "R2 U F2 L2 B2 D' B2 L2 F2 U2 R2 U F' U' L' U L F"
        ],
        [
            "B2 R2 U' B2 U' B2 U2 L2 U' R2 B R B2 R' B U L2 B2",
            "B2 D L2 D' L2 U L2 U' L2 B2 L U F' L F L' U' L'",
            "B2 D L2 U' L2 B2 D' R2 U R2 F U R' F R F' U' F'"
        ],
        [
            "L2 B2 R2 F2 U L2 F2 R2 D2 R' F' R D' L2 U' F' L2 F",
            "U B2 U' B2 U' L2 F2 D2 F L B2 L' F2 R F' L B2 L",
            "U2 F2 U' F2 U2 F2 U L2 F U2 F U2 F2 R' F L2 R F2"
        ],
        [
            "U' F2 L2 U F2 U F2 U2 R B' R B L2 R F' R U2 F'",
            "F2 L2 U R2 B2 L' F L' D R2 B' U' B2 U B",
            "U2 L2 U' B2 D B2 U L U' B2 D' B U B L2 U' L'"
        ],
        [
            "D2 F2 D' F2 R2 B2 U' R2 D2 U2 L' B2 R2 B' L' F2 L2 B'",
            "L2 U2 B2 D U F2 D U' L' U2 F D2 B' D2 F D2 R'",
            "F2 U2 L2 U F2 L2 F2 U F2 U2 L' F2 L2 B L' F2 L2 B'"
        ],
        [
            "D' R2 B2 F2 D F2 L2 F2 U' L' U2 L' U2 B R' B U2 R",
            "L2 D2 B2 L2 F2 U2 F2 L2 R2 B' L2 F2 L' B' L2 F2 L'",
            "L2 U L2 U B2 U' B2 L2 U' L D L' D' U2 L2 F' L' F"
        ],
        [
            "D' U' R2 U B2 D B2 R' B2 D' B R2 B U' R2 D R'",
            "B2 L2 F2 D2 F2 D2 F2 L D2 B' R U R' U' B L B2 R",
            "U' B2 D B2 U' L2 D2 B' R B D2 L2 B2 D' B R' B"
        ],
        [
            "L2 U L' F' L U' L' U F2 U' F' L'",
            "D L2 D2 U' B2 D' F2 U' R' D R2 U' B' D2 F2 L' D' B'",
            "R2 U' R2 U2 R' B F2 L F L' U B' U' F R"
        ],
        [
            "F2 U R2 D2 R2 F2 D' F2 L R2 B2 L' D2 U' R F' R F'",
            "B2 L2 D2 F2 D' F2 D' L2 B U2 B U2 R' B L' B' L R",
            "F2 U F2 R2 D R2 D' L' U2 L F2 R2 U' R F' R F'"
        ],
        [
            "R2 F2 U2 R2 U' F2 R2 U B' R2 B F2 U2 R F' R U R2",
            "U' F2 L2 U' R2 B2 R D2 R' B2 R2 U L' F L' F",
            "F2 L2 B2 D B2 L2 F2 R2 U2 R' B U B' R U2 R' U R'"
        ],
        [
            "B2 D' R2 D R2 U2 R2 B' U' B R' B R U' R2 B' U2 B'",
            "L2 D' F2 D2 L2 D' B2 L2 B' L' B D' U' F2 R' D L2 R'",
            "D' F2 D R2 U2 F2 L2 R' B' D2 B R D B2 D' L' F2 L'"
        ],
        [
            "U2 F2 R2 D B2 D B2 D F L F' L' D R2 F2 R U2 R'",
            "F2 D B2 D' F2 D B2 D' F R' F R U' F2 U R' F2 R",
            "F2 D2 L2 D F2 U' F2 L2 U2 L' F' L F D U2 F U2 F"
        ],
        [
            "U2 R2 U B2 U' B2 U R2 B2 L R' F' U2 F L' R' U' R2",
            "U' R2 B2 R2 U' R2 U B2 L R' B' R2 B L' R' U' R2",
            "U2 F2 D' B2 D' B2 U R2 D' R' U' F D2 L B2 D F L'"
        ]
    ]
};