export function gameRestart(character, setGameState) {
  if (character.y - character.h / 2 > 600) {
    setGameState("gameover");
  }
}
