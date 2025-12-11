export default function checkPlatformCollision(character, platforms) {
  for (let p of platforms) {
    if (
      character.velocity > 0 && // character is falling down
      character.y + character.h / 2 >= p.y - p.h / 2 && // character's feet reached the top of the platform
      character.y + character.h / 2 <= p.y + p.h / 2 && // character's feet are not too low
      character.x + character.w / 2 > p.x - p.w / 2 && // character is not too far left
      character.x - character.w / 2 < p.x + p.w / 2 // character is not too far right
    ) {
      if (p.type === "breaking") {
        p.break(); // trigger break animation
      }
      character.bounce(); // make the character bounce
    }
  }
}

export { checkPlatformCollision };
