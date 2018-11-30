const algset = $_GET("algset");

$(document).prop("title", "Algorithms: " + pageDetails[algset].title);
    function $_GET (key) {
    if(document.location.toString().indexOf('?') !== -1) {
        const query = document.location.toString().replace(/^.*?\?/, '').replace(/#.*$/, '').split('&');
        for(let i=0, l=query.length; i<l; i++) {
            const aux = decodeURIComponent(query[i]).split('=');
            if (aux[0] === key) {
                return aux[1];
            }
        }
    }
    return null;
}

let cases = algsetData[algset].map(function (oldCase, i) {
    return {
        id: i,
        name: oldCase.name,
        img: oldCase.name,
        alg: oldCase.alg,
        group: oldCase.group,

    }
});

let chosenAlgs = localStorageSupported() && localStorage.getItem("chosenAlgs"+algset) != null ? JSON.parse(localStorage.getItem("chosenAlgs"+algset)) : defaultChosenAlgs();
let statuses = localStorageSupported() && localStorage.getItem("statuses"+algset) != null ? JSON.parse(localStorage.getItem("statuses"+algset)) : defaultStatuses();
let settings = localStorageSupported() && localStorage.getItem("settings"+algset) != null ? JSON.parse(localStorage.getItem("settings"+algset)) : defaultSettings();
let times = localStorageSupported() && localStorage.getItem("times"+algset) != null ? JSON.parse(localStorage.getItem("times"+algset)) : defaultTimes();
let trainingCases = getTrainingCases();

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

function checkLegalMoves (alg) {
    return /^(\(? *(([BRULFD]w)|[BRULFDMESxyz])[2']? *\)? *)+$/.test(alg.trim());
}













$(document).keydown(function (e) {
    let keyCode = e.keyCode || e.which;
    if ($("#trainer").css("display") !== "none") {
        if (keyCode === 32 && timer.state === 0) { // SPACE
            $("#timertd").css("color", "rgb(0, 240, 0");
            timer.state = 1;
        } else if (keyCode === 39) { // RIGHT ARROW KEY
            timer.hint++;
            console.log(timer.state);
            showHint();
            while (timer.thisAlg === getMoves(timer.thisAlg, timer.hint-1)) {
                timer.hint--;
            }
        } else if (keyCode === 37) { // LEFT ARROW KEY
            if (timer.hint > 0) {
                timer.hint--;
            }
            showHint();
        } else if (timer.state === 2) {
            if (timer.stop()) {
                timer.state = 3;
            }
        }
    }
    timer.ready = false;
});
$(document).keyup(function (e) { // SPACE
    let keyCode = e.keyCode || e.which;
    if ($("#trainer").css("display") !== "none") {
        if (keyCode === 32 && timer.state === 1) {
            $("#timertd").css("color", "rgb(0, 0, 0)");
            if (timer.start()) {
                timer.state = 2;
            } else {
                timer.state = 0;
            }
        } else if (timer.state === 3) {
            timer.state = 0;
        }
    }
    timer.ready = true;
});
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
function getMoves(alg, numMoves) {
    return alg.substring(0, getPosition(alg, " ", numMoves));
}

const timer = {
    hint: 0,
    timeId: 0,
    updateInterval: 3, // ms
    numDecimals: 2,
    timerStartBuffer: 20, // ms
    timerStopBuffer: 130, // ms
    lastTimerStart: 0,
    lastTimerStop: 0,
    state: 0, // 0: waiting, 1: held down, 2: timing, 3: just stopped
    updater: null,
    hit: function () {
        if (timer.state === 1) {
            this.stop();
        } else if (timer.state === 2) {
            this.start();
        }
    },
    start: function () {
        let that = this;
        if (Date.now() - this.lastTimerStop < this.timerStopBuffer) {
            return false;
        }
        this.lastTimerStart = Date.now();
        this.updater = setInterval(function () {
            $("#timertd").html(numToTime((Date.now()-that.lastTimerStart)/1000));
        }, this.updateInterval);
        return true;
    },
    stop: function () {
        let time = Date.now();
        let elapsed = time - this.lastTimerStart;
        if (elapsed < this.timerStartBuffer) {
            return false;
        }
        this.lastTimerStop = time;
        clearInterval(this.updater);
        $("#timertd").html((elapsed/1000).toFixed(this.numDecimals));
        this.addTimeToList(elapsed);
        this.getNewScramble();
        $("#prevScramble").html("");
        timer.hint = 0;
        showHint();
        return true;
    },
    addTimeToList: function (time) {
        storeTime(this.timeId, time/1000, this.thisCase);
        this.timeId++;
        this.displayTimes();
    },
    displayTimes: function () {
        let str = "";
        const container = $("#timerlist");
        $(container).html("");
        for (let i = 0; i < times.length; i++) {
            let thisSpan = document.createElement("span");
            const timeObj = times[i];
            $(thisSpan).attr("timeId", timeObj.timeId).html(times[i].time.toFixed(this.numDecimals))
                .click(function () {
                    showCase(timeObj.timeId);
                }).attr("class", "link");
            if (i === times.length-1) {
                $(container).append(thisSpan)
            } else {
                $(container).append(thisSpan).append(", ");
            }
        }
        $(container).scrollTop($(container)[0].scrollHeight);
    },
    getNewScramble: function () {
        let newAlg, newScramble;
        let id = trainingCases[Math.floor(Math.random()*trainingCases.length)];
        newAlg = formatAlgNoRotation(chosenAlgs[id]);
        newScramble = rotateScramble(scrambles[algset][id][Math.floor(Math.random()*scrambles[algset][id].length)]);
        if (this.lastAlg === "") { // first time loading page
            this.lastAlg = newAlg;
            this.lastScramble = newScramble;
            this.lastCase = id;
        } else {
            this.lastAlg = this.thisAlg;
            this.lastScramble = this.thisScramble;
            this.lastCase = this.thisCase;
        }
        this.thisAlg = newAlg;
        this.thisScramble = newScramble;
        this.thisCase = id;
        // Write next scramble
        $("#scramble").text(this.thisScramble);
    },
    lastAlg: "",
    lastScramble: "",
    lastCase: "",
    thisAlg: "",
    thisScramble: "",
    thisCase: ""
};
timer.timeId = times.length === 0 ? 0 : times[times.length-1].timeId + 1;
showHint();



function numToTime(sec_num) {
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    seconds = seconds.toFixed(timer.numDecimals);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    let time = hours+':'+minutes+':'+seconds;

    while (time.startsWith("0") || time.startsWith(":")) {
        time = time.substring(1, time.length);
    }
    if (time.startsWith(".")) {
        time = "0" + time;
    }

    return time;
}

let algTable;
createTable();




















$(".inactive").css("background-color", getColorByStatus(0));
$(".active").css("background-color", getColorByStatus(1));
$(".finished").css("background-color", getColorByStatus(2));
$("#resetButtonOrganizer").click(function () {
    if(confirm('Reset to defaults?')){
        resetOrganizer();
    }
});
//$("#optionsButtonOrganizer").click(showOptionsEditbox);
$("#trainerButtonOrganizer").click(function () {
    trainingCases = getTrainingCases();
    if (trainingCases.length > 0) {
        $("#organizer").hide();
        $("#trainer").show();
        timer.getNewScramble();
        timer.displayTimes();
        timer.hint = 0;
    } else {
        alert("No cases selected!");
    }
});
$("#organizerButtonTrainer").click(function () {
    $("#trainer").hide();
    $("#organizer").show();
});
$("#prevScrambleButton").click(function () {
    $("#scramble").html(timer.lastScramble);
});
$("#currentScrambleButton").click(function () {
    $("#scramble").html(timer.thisScramble);
});
$("#resetButtonTrainer").click(function () {
    deleteAllTimes();
    timer.displayTimes();
});
$(document).keydown(function (e) { // ESC
    let keyCode = e.keyCode || e.which;
    if (keyCode === 27) {
        const gray = $("#gray");
        if ($(gray).css("display") !== "none") {
            $(gray).click();
        }
        else if ($("#options").css("display") !== "none") {
            $("#optionsButtonOrganizer").click();
        }
    }
});
$(document).keyup(function (e) { // ENTER
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13 && $("#gray").css("display") !== "none") {
        try {
            $("#editbox-submit button:first").click();
        } catch (error) {}
    }
});
$("#gray").click(function () {$(".overlay").hide()});

function resetAlgs() {
    if (confirm ("Reset ALL algorithms to default?")) {
        chosenAlgs = defaultChosenAlgs();
        algTable = createTable();
    }
}

function resetSettings() {
    settings = defaultSettings();
    if (localStorageSupported()) {
        localStorage.setItem("settings"+algset, JSON.stringify(settings));
    }
    algTable = createTable();
}

function allowOptions() {
    $("#options li").click(function () {
        const input = $(this).find("input")[0];
        input.checked = !input.checked;
        storeSetting(input.name, input.checked);
        createTable();
    }).addClass("link").find("input").each(function () {
        this.checked = settings[this.name];
    });
}
allowOptions();
$("#resetAlgs").click(resetAlgs);
$("#resetSettings").click(function () {
    resetSettings();
    $("#options li").find("input").each(function () {
        this.checked = settings[this.name];
    });
});

$("#optionsButtonOrganizer").click(function () {
    const options = $("#options");
    $(options).toggle();
});

/*(function showOptionsEditbox() { // DECOM
    let options = [
        {"name": "showTriggers", "desc": "Show triggers in algorithms"},
        {"name": "finishedToBottom", "desc": "Keep <span style='background-color:"+getColorByStatus(2)+"'>Finished</span> cases at the bottom"},
        {"name": "activeToTop", "desc": "Keep <span style='background-color:"+getColorByStatus(1)+"'>Active</span> cases at the top"},
        {"name": "trainOnInactive", "desc": "Train <span style='background-color:"+getColorByStatus(0)+"'>Inactive</span> cases"},
        {"name": "trainOnActive", "desc": "Train <span style='background-color:"+getColorByStatus(1)+"'>Active</span> cases"},
        {"name": "trainOnFinished", "desc": "Train <span style='background-color:"+getColorByStatus(2)+"'>Finished</span> cases"}
    ];
    $("#editbox").children().html("");
    $("#editbox-text").html("Options");

    let lis = Array.from({length: options.length}).fill(null).map(e => addElement(document.getElementById("editbox-list"), "li"));
    $(lis).each(function (i, li) {
        $(li).html("<input type='checkbox' id='"+options[i].name+"' /><span>" + options[i].desc + "</span>").find("input:first").prop("checked", settings[options[i].name]);
        $(li).click(function () {$(li).find("input:first").click();});
    });

    const resetButton = addElement(document.getElementById("editbox-submit"), "span");
    $(resetButton).html("Reset Algs").click(function () {
        resetAlgs();
        $(".overlay").hide();
    }).addClass("link");

    const submitButton = addElement(document.getElementById("editbox-submit"), "span");
    $(submitButton).html("Update").click(function () {
        $(lis).each(function (i, li) {
            storeSetting(options[i].name, lis[i].getElementsByTagName("input")[0].checked);
        });
        createTable();
        $(".overlay").hide();
    }).addClass("link");

    const cancelButton = addElement(document.getElementById("editbox-submit"), "span");
    $(cancelButton).html("Cancel").click(function () {
        $(".overlay").hide();
    }).addClass("link");
    $(".overlay").show();
}*/

function showAlgEditbox(id) {
    $("#editbox").children().html("");
    $("#editbox-image").html(convertContent(id, "img", getCaseById(id).img));
    $("#editbox-text").html("Choose an algorithm:");

    let customAlgStartingText = chosenAlgs[id];
    let algs = getCaseById(id).alg;
    let lis = Array.from({length: getCaseById(id).alg.length}).fill(null);

    // Default algs
    $(lis).each(function (i) {
        lis[i] = addElement(document.getElementById("editbox-list"), "li");
        $(lis[i]).attr("algindex", i).attr("chosen", 0).html(formatAlg(algs[i]));
        if (formatAlgHideTriggers(algs[i]) === formatAlgHideTriggers(chosenAlgs[id])) {
            customAlgStartingText = "";
            $(lis[i]).css("background-color", "rgb(0, 255, 0)").attr("chosen", 1);
        }
    });

    // Custom alg
    let lastLi = addElement(document.getElementById("editbox-list"), "li");

    $(lastLi).attr("algindex", -1).attr("id", "custom").html("<input type='text' value=\""+customAlgStartingText+"\" maxlength='100' />");
    if (!!customAlgStartingText) {
        $(lastLi).css("background-color", "rgb(0, 255, 0)").attr("chosen", 1);
    }
    lis.push(lastLi);

    $(lis).each(function (i, li) {
        $(li).click(function () {
            $(this).parent().find("li").css("background-color", "rgb(255, 255, 255)").attr("chosen", 0);
            $(this).css("background-color", "rgb(0, 255, 0)").attr("chosen", 1);
        });
    });


    let submitButton = addElement(document.getElementById("editbox-submit"), "button");
    $(submitButton).html("Update").click(function () {
        const algIndex = $("li[chosen=1]:first").attr("algindex");
        if (algIndex != -1) {
            storeChosenAlg(id, getCaseById(id).alg[algIndex]);
            createTable();
            $(".overlay").hide();
        } else {
            let alg = formatAlgPretty($(lis[lis.length-1]).find("input")[0].value);
            if (checkLegalMoves(alg)) {
                storeChosenAlg(id, alg);
                createTable();
                $(".overlay").hide();
            } else {
                alert("Incorrectly formatted algorithm:\n- For cube rotations, use lower case (x instead of X)\n- Don't use numbers larger than 2 (R' instead of R3)\n- Brackets cannot have modifiers afterwards");
            }
        }
    });
    let cancelButton = addElement(document.getElementById("editbox-submit"), "button");
    $(cancelButton).html("Cancel").click(function(){$(".overlay").hide();});
    // Display
    $(".overlay").show();
}

function showCase (timeId) {
    $("#hint").hide();
    $("#showCase").show().children().html("");
    $("#deleteButtonTrainer").show().off().click(function () {
        deleteTime(timeId);
        timer.displayTimes();
        showHint();
    });
    timer.hint = 0;
    const timeObj = getTimeById(timeId);
    $("#showCase .misc-header").html((pageDetails[algset].name + "-" + getCaseById(timeObj.caseId).name).trim() + " (" + timeObj.time.toFixed(timer.numDecimals) + ")");
    $("#showCase .misc-image").html(convertContent(timeObj.caseId, "img", ""));
    $("#showCase .misc-text").html(convertContent(timeObj.caseId, "alg", ""));
}
function showHint () {
    const id = timer.thisCase;
    $("#hint").show().children().html("");
    $("#showCase").hide();
    $("#deleteButtonTrainer").hide();

    $("#hint .misc-header").html("Hint");
    if (timer.hint === 0) {
        $("#hint .misc-image").html(convertContent(id, "img", "solved"));
        $("#hint .misc-text").html("Use Left/Right arrow keys");
    } else {
        $("#hint .misc-image").html(convertContent(id, "img", ""));
        $("#hint .misc-text").html(getMoves(timer.thisAlg, timer.hint));
    }
}

function getTimeById (timeId) {
    for (let i = 0; i < times.length; i++) {
        if (Number(times[i].timeId) === Number(timeId)) {
            return times[i];
        }
    }
    console.log("getTimeById didn't work");
    return false;
}

function getCaseById(id) {
    for (let thisCase of cases) {
        if (thisCase.id === id) {
            return thisCase;
        }
    }
}

function getColorByStatus(status) {
    switch (status) {
        case 0: return "rgb(255, 255, 255)"; // default: white
        case 1: return "rgb(255, 255, 0)"; // in progress: yellow
        case 2: return "rgb(0, 255, 0)"; // learned: green
        default: return "rgb(255, 255, 255)";
    }
}

function allowStatus() {
    let tds = algTable.getElementsByClassName("img");
    for (let td of Array.from(tds)) {
        let id = td.parentNode.className;
        if (td.className === "img") {
            $(td).click(function () {
                toggleStatus(id)
            }).addClass("link");
        }
    }
}

function allowSorting() {
    let unsortableAttribute = ["img"];
    let tds = algTable.getElementsByClassName("heading");
    for (let td of Array.from(tds)) {
        let attribute = td.className.substring(td.className.indexOf(" ")+1, td.className.length);
        if (unsortableAttribute.includes(attribute)) {continue;}
        let button = addElement(td, "button");
        if (settings.sort.attribute === attribute) {
            if (settings.sort.order === 1) {
                button.innerHTML = "^";
            } else {
                button.innerHTML = "v";
            }
        } else {
            button.innerHTML = "^v";
        }
        $(button).click(function () {sortTableBy(attribute)});
    }
}

function allowEdits() {
    let canEdit = ["alg"]; // attributes that you are allowed to edit
    let tds = algTable.getElementsByClassName("alg");
    for (let td of Array.from(tds)) {
        if (!canEdit.includes(td.className)) {continue;}
        let id = Number(td.parentNode.className);
        let editButton = addElement(td, "div");
        $(editButton).addClass("edit-button").addClass("link").html("<img src='../images/edit.png' class='editButton' alt='Edit'/>").click(function(){showAlgEditbox(id)});
        $(td).mouseover(function(){$(editButton).show()}).mouseout(function(){$(editButton).hide()});
    }
}

function createTable () {
    let hiddenAttributes = ["id"];
    sortCases(settings.sort.attribute, settings.sort.order);

    const container = $("#table_container");

    $(container).html("");
    algTable = document.createElement("TABLE");
    $(algTable).attr("id", "table").attr("border", "1");

    // TR (headings)
    let tr = addElement(algTable, "tr");
    for (let attribute in cases[0]) {
        if (hiddenAttributes.includes(attribute)) {continue;}
        $(addElement(tr, "td")).addClass("heading " + attribute).html(convertHeading(attribute));
    }
    // TR (body)
    for (let thisCase of cases) {
        let tr = addElement(algTable, "tr");
        $(tr).addClass(thisCase.id.toString()).css("background-color", getColorByStatus(statuses[thisCase.id]));
        // TD
        for (let attribute in thisCase) {
            if (hiddenAttributes.includes(attribute)) {continue;}
            let value = thisCase[attribute];
            $(addElement(tr, "td")).addClass(attribute).html(convertContent(thisCase.id, attribute, value));
        }
    }
    $(container).append(algTable);
    allowEdits();
    allowSorting();
    allowStatus();
}

function sortTableBy (attribute) {
    let order = settings.sort.attribute === attribute && settings.sort.order === 1 ? -1 : 1;
    storeSetting("sort", {attribute: attribute, order: order});
    createTable();
}

// ties are broken by name
function sortCases (attribute, order) {
    cases.sort(function(a,b) {
        if (attribute === "alg") {
            algA = chosenAlgs[a.id];
            algB = chosenAlgs[b.id];
            return countMoves(algA) > countMoves(algB) ? order : countMoves(algA) < countMoves(algB) ? -order : a.name > b.name ? 1 : -1;
        }
        return a[attribute] > b[attribute] ? order : a[attribute] < b[attribute] ? -order : a.name > b.name ? 1 : -1;
    });
    if (settings.finishedToBottom) {
        let finishedCases = [];
        let restCases = [];
        for (let i = 0; i < cases.length; i++) {
            let thisCase = cases[i];
            if (statuses[thisCase.id] === 2) {
                finishedCases.push(thisCase);
            } else {
                restCases.push(thisCase);
            }
        }
        cases = restCases.concat(finishedCases);
    }
    if (settings.activeToTop) {
        let activeCases = [];
        let restCases = [];
        for (let i = 0; i < cases.length; i++) {
            let thisCase = cases[i];
            if (statuses[thisCase.id] === 1) {
                activeCases.push(thisCase);
            } else {
                restCases.push(thisCase);
            }
        }
        cases = activeCases.concat(restCases);
    }
}

// Format the heading string
function convertHeading (str) {
    switch (str) {
        case "name": return "Name";
        case "img": return "Case";
        case "alg": return "Algorithm";
        case "group": return "Group";
        case "status": return "";
        default: return str;
    }
}

// Format the table content (can be HTML)
function convertContent (id, attribute, value) {
    if (attribute === "img") {
        if (value === "solved") {
            return "<img class='case' src=\"https://cubing.net/api/visualcube/?fmt=png&bg=t&view=plan&pzl=3&stage="+algset+"&size="+settings.imgSize+"\" />";
        }
        let style = "";
        let alg = chosenAlgs[id];
        if (alg.substring(0,2) === "y2") {
            style = "transform: rotate(180deg)";
        } else if (alg.substring(0,2) === "y'") {
            style = "transform: rotate(270deg)";
        } else if (alg.substring(0,1) === "y") {
            style = "transform: rotate(90deg)";
        }
        return "<img class='case' src=\"https://cubing.net/api/visualcube/?fmt=png&bg=t&view=plan&pzl=3&stage="+algset+"&size="+settings.imgSize+"&case="+getCaseById(id).alg[0]+"\" style='"+style+"' />";
    }
    switch (attribute) {
        case "alg": return formatAlgNoRotation(chosenAlgs[id]);
        default: return value;
    }
}

function addElement (parent, elem) {
    let child = document.createElement(elem);
    parent.appendChild(child);
    return child;
}

function toggleTriggers() {
    storeSetting("showTriggers", !settings.showTriggers);
    createTable();
}

function toggleStatus(id) {
    id = Number(id);
    let tr = document.getElementsByClassName(id)[0];
    if (statuses[id] === 2) {
        storeStatus(id, 0);
        while (trainingCases.includes(id)) {
            trainingCases.splice(trainingCases.indexOf(id), 1);
        }
        tr.style.backgroundColor = "white";
    } else if (statuses[id] === 1) {
        storeStatus(id, 2);
        if (!trainingCases.includes(id)) {
            trainingCases.push(id);
        }
        tr.style.backgroundColor = "rgb(0, 255, 0)"
    } else {
        storeStatus(id, 1);
        if (!trainingCases.includes(id)) {
            trainingCases.push(id);
        }
        tr.style.backgroundColor = "rgb(255, 255, 0)";
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
        for (let i = 0; i < alg.length; i++) {
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

    for (let i = 0; i < alg.length; i++) {
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














function defaultChosenAlgs () {
    let arr = Array.from({length: cases.length}).fill(null);
    for (let thisCase of cases) {
        arr[thisCase.id] = thisCase.alg[0];
    }
    return arr;
}

function defaultStatuses (data) {
    return Array.from({length: cases.length}).fill(0);
}

function defaultSettings() {
    return {
        sort: {attribute: "name", order: "1"},
        showTriggers: false,
        finishedToBottom: false,
        activeToTop: false,
        trainOnInactive: true,
        trainOnActive: true,
        trainOnFinished: true,
        imgSize: 150
    };
}

function defaultTimes() {
    return [];
}

function getTrainingCases() {
    let trainingStatuses = [];
    if (settings.trainOnInactive) {
        trainingStatuses.push(0);
    }
    if (settings.trainOnActive) {
        trainingStatuses.push(1);
    }
    if (settings.trainOnFinished) {
        trainingStatuses.push(2);
    }
    let array = [];
    for (let i = 0; i < chosenAlgs.length; i++) {
        if (trainingStatuses.includes(statuses[i])) {
            array.push(i);
        }
    }
    return array;
}

const ver = 1;
function localStorageSupported() {
    try {
        return "localStorage" in window && window["localStorage"] !== null;
        if (localStorage.length < 1) {
            localStorage.setItem("ver", ver);
        }
        else if (Number(localStorage.getItem("ver")) !== ver) {
            console.log("Using ver " + localStorage.getItem("ver") + ", Current ver " + ver);
        }
    } catch (e) {
        return false;
    }
}

function storeChosenAlg (id, alg) {
    chosenAlgs[id] = alg;
    if (localStorageSupported()) {
        localStorage.setItem("chosenAlgs"+algset, JSON.stringify(chosenAlgs));
    }
}

function storeStatus (id, status) {
    statuses[id] = status;
    if (localStorageSupported()) {
        localStorage.setItem("statuses"+algset, JSON.stringify(statuses));
    }
}

function storeSetting(attribute, value) {
    settings[attribute] = value;
    if (localStorageSupported()) {
        localStorage.setItem("settings"+algset, JSON.stringify(settings));
    }
}

function storeTime(timeId, time, caseId) {
    times.push({timeId: timeId, time: time, caseId: caseId});
    if (localStorageSupported()) {
        localStorage.setItem("times"+algset, JSON.stringify(times));
    }
}

function deleteTime(timeId) {
    if (confirm("Delete the time " + getTimeById(timeId).time.toFixed(timer.numDecimals) + "?")) {
        for (let i = 0; i < times.length; i++) {
            if (times[i].timeId == timeId) {
                times.splice(i, 1);
            }
        }
        if (localStorageSupported()) {
            localStorage.setItem("times"+algset, JSON.stringify(times));
        }
    }
}

function deleteAllTimes() {
    if (confirm("Reset all times?")) {
        timer.timeId = 0;
        times = defaultTimes();
        if (localStorageSupported()) {
            localStorage.setItem("times" + algset, JSON.stringify(times));
        }
    }
}