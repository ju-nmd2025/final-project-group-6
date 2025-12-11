export default function scrollScreen(character, platforms, scoreObject) {
  // if character goes in the upper part of the screen
  if (character.y < height / 2) {
    // If the character’s y position is above the middle -> start scrolling the screen
    let difference = height / 2 - character.y;
    character.y = height / 2;

    platforms.forEach((p) => {
      p.y += difference; // move platforms down

      // removing platforms that go off the screen
      if (p.y > height + 60) p.toRemove = true;
    });

    // score increase because of vertical movement
    scoreObject.value += Math.floor(difference);
  }
}

export { scrollScreen };
