let btn = document.getElementById("btn");
var historyLog = "";
var countHistory = 0;
let targetNumber = 0;
//let life = getLife();
const LIVE_LIMIT = 10;
life = LIVE_LIMIT;

// hide :: Void -> Void
function hideAndStartNewGameButton() {
    document.getElementById("warn").style.zIndex = -2;
    document.getElementById("warn").style.opacity = 0;
}

// newGame :: Void -> Void
function newGame() {
    life = LIVE_LIMIT;
    targetNumber = Math.floor(Math.random() * 30);
    document.getElementById("message").innerText = "Let guess the secret number!"
    clearAllHistory();
}

// getNew :: Void -> Void
function getNew() {
    targetNumber = Math.floor(Math.random() * 30);
    life = LIVE_LIMIT;
}


// clearAllHistory :: Void -> Void
function clearAllHistory() {
    var blankText = "";
    document.getElementById("his").innerHTML = blankText;
    historyLog = "";
    countHistory = 0;
}

btn.addEventListener("click", function() {
    if (life == 10) {
        clearAllHistory();
    }

    setTimeout(() => {
        document.getElementById("dislike").className = 'ok';
        document.getElementById("like").className = 'ok';
    }, 600);

    const yourInput = parseInt(document.getElementById("anumber").value);

    if (life == 1 && yourInput != targetNumber) {
        document.getElementById("warn").style.zIndex = 2;
        document.getElementById("warn").style.opacity = 1;
    }

    console.log("You entered: ", yourInput);
    countHistory++;

    if (yourInput < targetNumber) {
        life--;
        document.getElementById("message").innerHTML = "The secret number is larger! " + life + " lifes left!";
        document.getElementById("dislike").className = "dislike";
    } else if (yourInput > targetNumber) {
        life--;
        document.getElementById("message").innerHTML = "The secret number is smaller! " + life + " lifes left!";
        document.getElementById("dislike").className = "dislike";
    } else if (yourInput == targetNumber) {
        document.getElementById("message").innerHTML = "Congratulation! The secret number is " + yourInput + "!" +
            "<br>" + "The new secret number has generated, continue?";
        document.getElementById("like").className = "like";
        getNew();
        clearAllHistory();
    }

    if (document.getElementById("anumber").value != "") {
        historyLog += countHistory + ". Guessed number: " + yourInput + "<br>";
        document.getElementById("his").innerHTML = historyLog;
    } else {
        countHistory--;
    }
    document.getElementById("anumber").value = "";
});