var startBtn = document.getElementById("startBtn");
var nextButton = document.getElementById("nextButton");
var timerEl = document.getElementById("timer");

var QQ = document.getElementById("Qs");
var A = document.getElementById("a");
var B = document.getElementById("b");
var C = document.getElementById("c");
var D = document.getElementById("d");

var questions = [
    {
        q: "What does DOM stand for?",
        a: ["Display Or Make", "Document Object Material", "Document Object Model", "Dont Object Main"],
        correct: "Document Object Model"
    },
    {
        q: "What does var mean?",
        a: ["Variety", "Variable", "Various", "Variform"],
        correct: "Variable"
    },
    {
        q: "Which method saves data to localStorage: setItem() or getItem()?",
        a: ["setItem()", "getItem()"],
        correct: "setItem()"
    }
];

function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Time Remaining: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "You Failed :("; 
            clearInterval(timeInterval);
        }
    }, 600); 

    document.getElementById("timer").style.display = "none";

    quiz();
}

function quiz() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("questions").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("nextButton").style.display = "display";
    question();
}

function question() {
    QQ.textContent = questions[0].q;
    a.textContent = questions[0].a[0];
    b.textContent = questions[0].a[1];
    c.textContent = questions[0].a[2];
    d.textContent = questions[0].a[3];

    for (var i = 0; i < questions.length; i++) {
        var obj = questions[i];
    }
}

startBtn.onclick = timer;

nextButton.onclick = quiz;
