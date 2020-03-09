const BORDER_BOT = 740;
const BORDER_TOP = 0;
const BORDER_RIGHT = 700;
const BORDER_RIGHT_ROAD = BORDER_RIGHT - 300;
const BORDER_LEFT_ROAD = 150;
const DEFAULT_SPEED = 20;
const DEFAULT_STEP = 10;
let c = document.getElementById("gameCanvas");
let ctx = c.getContext("2d");
let myObstacles = [];
let stepY = 0;
let posY = 0;

function drawRec(x, y, width, height, color) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function BoardGame() {
    this.start = function () {
        this.interval = setInterval(animate, 20);
    };
    this.gameFrame = function () {
        drawRec(BORDER_RIGHT - 150, 0, 150, 740, "black");
        drawRec(BORDER_RIGHT_ROAD, 0, 150, 740, "green");
        drawRec(0, 0, 150, 740, "green");
    };
    this.drawRoadComponent = function (y) {
        drawRec(270, y, 15, 100, "white");
    };
    this.step = DEFAULT_STEP;
}

// function Image() {
//     let image = 'image/redCar.png';
//     this.draw=ctx.drawImage(image, 110, 110);
// }

function animate() {
    ctx.clearRect(0, 0, 700, 740);
    // redCar.draw();
    gameBoard.gameFrame();

    myObstacles.push([270, stepY, 15, 100, "white"]);
    for (let i = 0; i < myObstacles.length; i++) {
        for (let j = 0; j < 1; j++) {
            drawRec(270, posY + stepY, 15, 300, "white");
            posY += 500;
        }
        posY = 0;
    }
    stepY += 5;
    if (stepY >= BORDER_BOT) stepY = -300;
}
// let redCar= new Image();
let gameBoard = new BoardGame();
gameBoard.start();