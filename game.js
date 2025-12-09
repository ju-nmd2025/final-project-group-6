import { Character } from "./character.js";
let gameState = "start";
let score = 0;
let character;

function setup() {
  createCanvas(400, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
  character = new Character();
}

function draw() {
  background(10, 10, 30);

  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "game") {
    character.update();
    character.draw();

    fill(255);
    text("Game in Progress...", width / 2, height / 2);
  } else if (gameState === "gameover") {
    drawGameOver();
  }
}

function drawStartScreen() {
  fill(255);
  textSize(36);
  text("Welcome to the Game!", width / 2, height / 2 - 40);
  textSize(18);
  text("Press ENTER to Start", width / 2, height / 2 + 20);
}

function drawGameOver() {
  fill(255, 150, 150);
  textSize(36);
  text("Game Over!", width / 2, height / 2 - 40);
  textSize(20);
  text("Press SPACE to play again", width / 2, height / 2 + 20);
  text(`Score: ${score}`, width / 2, height / 2 + 50);
}

function keyPressed() {
  if (key === " ") {
    if (gameState === "start" || gameState === "gameover") {
      startGame();
    }
  }
}

function startGame() {
  score = 0;
  gameState = "game";
}
