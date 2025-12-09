import { Platform } from "./platform.js";

export function generatePlatforms(platforms, maxPlatforms = 10) {
  // Remove platforms
  platforms = platforms.filter((platform) => !platform.toRemove);

  // Generating new platforms till we reach maxPlatforms (10)
  while (platforms.length < maxPlatforms) {
    let x = Math.random() * (400 - 80) + 40;
    let y = Math.random() * -100;
    let type = ["normal", "moving", "breaking"][Math.floor(Math.random() * 3)];
    platforms.push(new Platform(x, y, 80, type));
  }
  return platforms; // return updated platforms array
}
