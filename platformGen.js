import { Platform } from "./platform.js";

export function generatePlatforms(platforms, maxPlatforms = 10) {
  // Remove platforms
  platforms = platforms.filter((platform) => !platform.toRemove);

  // Find the highest platform Y position
  let highestY = Math.min(...platforms.map((p) => p.y));

  // Generating new platforms till we reach maxPlatforms (10)
  while (platforms.length < maxPlatforms) {
    let x = Math.random() * (400 - 80) + 40;
    let y = highestY - (60 + Math.random() * 60);
    let type = ["normal", "moving", "breaking"][Math.floor(Math.random() * 3)];
    platforms.push(new Platform(x, y, 80, type));

    highestY = y; // update highestY for next platform
  }
  return platforms; // return updated platforms array
}
