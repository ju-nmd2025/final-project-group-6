export default function gameRestart(character, setGameState) {
  if (character.y - character.h / 2 > 600) {
    // falls below the screen
    setGameState("gameover");
    if (score > bestScore) bestScore = score; // update best score

    character.reset(); // reseting the character
  }
}

export { gameRestart };
