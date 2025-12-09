export function checkPlatformCollision(character, platforms) {
  for (let p of platforms) {
    if (
      character.velocity > 0 &&
      character.y + character.h / 2 >= p.y - p.h / 2 &&
      character.y + character.h / 2 <= p.y + p.h / 2 &&
      character.x + character.w / 2 > p.x - p.w / 2 &&
      character.x - character.w / 2 < p.x + p.w / 2
    ) {
      if (p.type === "breaking") {
        p.break();
      }
      character.bounce();
    }
  }
}
