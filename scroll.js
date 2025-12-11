export default function scrollScreen(character, platforms, scoreObject) {
  // if character goes in the upper part of the screen
  if (character.y < height / 2) {
    let difference = height / 2 - character.y; // how much it moves
    character.y = height / 2; // character stays in the middle

    // moving all the platforms down
    platforms.forEach((p) => {
      p.y += difference;

      // removing platforms that go off the screen
      if (p.y > height + 60) p.toRemove = true;
    });

    // score increase because of vertical movement
    scoreObject.value += Math.floor(difference);
  }
}

export { scrollScreen };
