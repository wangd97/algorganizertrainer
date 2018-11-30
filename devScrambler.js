const Cube = require('cubejs');

Cube.initSolver();
console.log("Initialized");

const availableAlgsets = ["oll", "pll"];


const maxScrambleLength = 18;
const numScrambles = 3;

const trainerScramblerCube = new Cube();
const algset = "pll";

// 1 ALG:
//const algsToGen = Array.from({length: 1}).fill(0).map((v, i) => 14);

// ALL ALGS:
const algsToGen = Array.from({length: 21}).fill(0).map((v, i) => i);
console.log(algsToGen);


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

let pageDetails = {
    "prototype": {
        "name": "",
        "title": "",
        "description": "",
        "canGenImages": true,
        "view": "plan"
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

function equivalentRotations (alg) {
    return formatAlgPretty(formatAlgPretty(alg).replace(new RegExp("r|(l')", "g"), "x")
        .replace(new RegExp("l", "g"), "x'")
        .replace(new RegExp("u|(d')", "g"), "y")
        .replace(new RegExp("d", "g"), "y'")
        .replace(new RegExp("f|(b')", "g"), "z")
        .replace(new RegExp("b", "g"), "z'")
        .replace(new RegExp("''", "g"), "")
        .replace(new RegExp("'2", "g"), "2")
        .replace(new RegExp("[BRUFLDMES]['2]?", "g"), ""));
}
//console.log("brufldb'r'u'f'l'd'b2r2f2l2d2");
//console.log(equivalentRotations(formatAlgPretty(("BRUFLDB'R'U'F'L'D'B2R2U2F2L2D2brufldb'r'u'f'l'd'b2r2f2l2d2"))));
function undoRotations (alg) {
    const letters = ["b", "r", "u", "f", "l", "d", "x", "y", "z"]//, "Bw", "Rw", "Uw", "Fw", "Lw", "Dw"];
    const powers = ["", "'", "2"];

    const rotations = [];
    for (letter of letters) {
        for (power of powers) {
            rotations.push(letter + power);
        }
    }
    const oppRotations = rotations.map(v => Cube.inverse(v));

    const rotationsApplied = equivalentRotations(alg).split(" ");
    const reverseRotations = rotationsApplied.reverse().map(function (rotation) {
        return oppRotations[rotations.indexOf(rotation)];
    }).toString().replace(/,/g, " ");
    return formatAlgPretty(reverseRotations);
}
//console.log(undoRotations("R x U y r")); // red-top blue-front

function rotateScramble (scramble) {
    const rotated = ["R", "B", "L", "F"];
    const rotation = Math.floor(Math.random()*4);
    for (let i = 0; i < scramble.length; i++) {
        let c = scramble.charAt(i);
        for (let j = 0; j < rotated.length; j++) {
            let r = rotated[j];
            if (c === r) {
                scramble = scramble.substring(0, i) + rotated[(j + rotation) % 4] + scramble.substring(i+1, scramble.length);
            }
        }
    }
    return scramble.replace(/^U./g, "").replace(/U.?$/g, "").trim();
}

function generate (alg) {
    const numPreMoves = 3;
    alg = formatAlgPretty(alg.replace(/\(/g, "").replace(/\)/g, ""));
    const moves = ["U", "F", "R", "L", "B", "D"];
    const powers = ["", "'", "2"];

    let postMoves = "";
    let lastMove = "U";
    let thisMove = "U";
    for (let k = 0; k < numPreMoves; k++) {
        while (thisMove === lastMove) {
            thisMove = moves[Math.floor(Math.random() * (moves.length))];
        }
        let thisPower = powers[Math.floor(Math.random()*powers.length)];
        postMoves += thisMove + thisPower + " ";
        lastMove = thisMove;
    }

    let preMoves = "";
    lastMove = "U";
    thisMove = "U";
    for (let k = 0; k < numPreMoves; k++) {
        while (thisMove === lastMove) {
            thisMove = moves[Math.floor(Math.random() * (moves.length))];
        }
        let thisPower = powers[Math.floor(Math.random()*powers.length)];
        preMoves += thisMove + thisPower + " ";
        lastMove = thisMove;
    }

    const AUFs = ["U'", "U", "U2", ""];
    const AUF1 = AUFs[Math.floor(Math.random()*AUFs.length)] + " ";
    const AUF2 = AUFs[Math.floor(Math.random()*AUFs.length)] + " ";

    trainerScramblerCube.identity();
    let pregen;
    if (algset === "pll" || algset === "zbll") { // pure sets
        trainerScramblerCube.move(preMoves + AUF1 + alg + " " + undoRotations(alg));
        trainerScramblerCube.move(AUF2 + postMoves);
        pregen = postMoves + trainerScramblerCube.solve() + " " + preMoves;
    } else { // unpure sets like OLL
        trainerScramblerCube.move(AUF1 + alg + " " + AUF1 + AUF2);
        if (algset === "oll") {
            doRandomAlg("pll");
            trainerScramblerCube.move(AUF2);
        }
        pregen = trainerScramblerCube.solve();
    }

    // Clean up alg
    trainerScramblerCube.identity();
    trainerScramblerCube.move(pregen);
    const gen = Cube.inverse(trainerScramblerCube.solve(maxScrambleLength));
    return gen;
}

function doRandomAlg(whichAlgset) {
    let randomAlg = algsetData[whichAlgset][Math.floor(Math.random()*algsetData[whichAlgset].length)].alg[0];
    randomAlg = randomAlg.replace(/\(/g, "").replace(/\)/g, "");
    trainerScramblerCube.move(randomAlg);
}

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
function getMoves(alg, numMoves) {
    return alg.substring(0, getPosition(alg, " ", numMoves));
}


function getCaseById(id) {
    for (let thisCase of cases) {
        if (thisCase.id === id) {
            return thisCase;
        }
    }
}

function countMoves (alg) {
    let moves = ["r", "u", "f", "l", "d", "b", "m", "s", "e"];
    let rotations = ["x", "y", "z"];
    let str = "";
    for (let c of alg) {
        if (moves.concat(rotations).includes(c.toLowerCase()) && str.substring(str.length-1) != c) {
            str += c;
        }
    }
    let len = 0;
    for (let c of str) {
        if (!rotations.includes(c.toLowerCase())) {
            len++;
        }
    }
    return len;
}

function formatAlgNoRotation(alg) {
    alg = alg.trim();
    if (alg.startsWith("y")) {
        for (i = 0; i < alg.length; i++) {
            let c = alg.charAt(i);
            if (c !== "y" && c !== "2" && c !== "'" && c !== " ") {
                alg = alg.substring(i, alg.length);
                break;
            }
        }
    }
    let rotations = ["y", "y2", "y'", "x", "x2", "x'", "z", "z2", "z'"];
    let endsWithRotation = true;
    while (endsWithRotation) {
        endsWithRotation = false;
        for (let thisRotation of rotations) {
            while (alg.endsWith(thisRotation)) {
                alg = alg.substring(0, alg.length - thisRotation.length).trim();
                endsWithRotation = true;
            }
        }
    }
    return formatAlg(alg);
}

function formatAlg (alg) {
    return settings.showTriggers ? formatAlgShowTriggers(alg) : formatAlgHideTriggers(alg);
}

function formatAlgHideTriggers (alg) {
    alg = alg + " ";
    let moves = ["r", "u", "f", "l", "d", "b", "m", "s", "e"];
    let duplicates = [];
    for (let move of moves) {
        duplicates.push(move + " " + move + " ");
        duplicates.push(move + "' " + move + "' ");
    }
    alg = alg.replace(/\(/g, "").replace(/\)/g, "");
    for (let duplicate of duplicates) {
        while (alg.toLowerCase().includes(duplicate)) {
            let len = duplicate.length;
            let ind = alg.toLowerCase().indexOf(duplicate);
            alg = alg.substring(0, ind) + alg.charAt(ind) + "2" + alg.substring(ind+len, alg.length);
        }
    }
    return formatAlgPretty(alg.trim());
}

function formatAlgShowTriggers (alg) {
    let triggerMoves = ["r", "u", "l"];
    let triggers = [];
    triggers.push("r' f r f'", "f r' f' r", "l f' l' f", "f' l f l'");
    let wristMoves = [["l","l'"],["l'","l"],["r","r'"],["r'","r"]];
    let flickMoves = ["u'","u"];
    for (let wrist of wristMoves) {
        for (let flick1 of flickMoves) {
            for (let flick2 of flickMoves) {
                triggers.push(wrist[0] + " " + flick1 + " " + wrist[1] + " " + flick2);
                triggers.push(flick1 + " " + wrist[0] + " " + flick2 + " " + wrist[1]);
            }
        }
    }
    flickMoves.push("u2");
    for (let wrist of wristMoves) {
        for (let flick of flickMoves) {
            triggers.push(wrist[0] + " " + flick + " " + wrist[1]);
        }
    }

    for (i = 0; i < alg.length; i++) {
        if (!triggerMoves.includes(alg.charAt(i).toLowerCase())) {
            continue;
        }
        let rest = alg.substring(i, alg.length).toLowerCase() + " ";
        for (let trigger of triggers) {
            if (rest.startsWith(trigger + " ")) {
                alg = alg.substring(0, i) + "(" + alg.substring(i, i+trigger.length) + ")" + alg.substring(i+trigger.length);
                i += trigger.length+1;
                break;
            }
        }
    }
    return formatAlgPretty(alg);
}

function formatAlgPretty (alg) {
    return alg.replace(/ *([a-zA-Z]w?[2']?)/g, " " + "$1").replace(/2'/g, "2").replace(/\( /g, "(").trim();
}


function devGenScrambles () {
    let algsetScrambles = algsToGen.map(function (v, i) {
        let a = [];
        for (let j = 0; j < numScrambles; j++) {
            let newAlg;
            do {
                newAlg = generate(algsetData[algset][v].alg[0]);
            } while (a.includes(newAlg));
            a.push(newAlg);
            console.log(algsetData[algset][v].name + ": " + newAlg);
        }
        return a;
    });
}


devGenScrambles();