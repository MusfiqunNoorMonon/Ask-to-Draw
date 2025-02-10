let x, y;
let drawCircle = false;
let drawRect = false;

// Set up speech recognition
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function startListening() {
    document.getElementById("status").innerText = "Listening... Speak now!";
    recognition.start();
}

recognition.onresult = function(event) {
    let command = event.results[0][0].transcript.toLowerCase();
    document.getElementById("status").innerText = "You said: " + command;

    x = Math.floor(Math.random() * 400) + 50;
    y = Math.floor(Math.random() * 400) + 50;

    if (command.includes("circle")) {
        drawCircle = true;
        drawRect = false;
    } else if (command.includes("rectangle")) {
        drawCircle = false;
        drawRect = true;
    }
};

function setup() {
    createCanvas(500, 500);
    background("pink");
}

function draw() {
    if (drawCircle) {
        let radius = Math.floor(Math.random() * 50) + 20;
        fill("blue");
        circle(x, y, radius);
        drawCircle = false;
        document.getElementById("status").innerText = "Circle drawn!";
    }

    if (drawRect) {
        fill("red");
        rect(x, y, 70, 50);
        drawRect = false;
        document.getElementById("status").innerText = "Rectangle drawn!";
    }
}
