import { Character } from "./character.js";
import { Platform } from "./platform.js";
let gameState = "start";
let score = 0;
let character;
let platforms = [];

function setup() {
  createCanvas(400, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
  character = new Character();
  platforms.push(new Platform(width / 2, height - 50, 120, "normal"));
  platforms.push(new Platform(150, 400, 80, "moving"));
  platforms.push(new Platform(250, 300, 80, "breaking"));
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

  for (let p of platforms) {
    p.update();
    p.draw();
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
