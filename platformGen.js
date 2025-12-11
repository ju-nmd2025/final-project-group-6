import { Platform } from "./platform.js";

export default function generatePlatforms(platforms, maxPlatforms = 10) {
  // Remove platforms
  platforms = platforms.filter((platform) => !platform.toRemove); // filter() returns a new cleaned array

  // Find the highest platform Y position
  let highestY = Math.min(...platforms.map((p) => p.y));

  // Generating new platforms till we reach maxPlatforms (10)
  while (platforms.length < maxPlatforms) {
    let x = Math.random() * (400 - 80) + 40; // random x between 40 and 360
    let y = highestY - (60 + Math.random() * 60); // random y above highestY
    let type = ["normal", "moving", "breaking"][Math.floor(Math.random() * 3)]; // random type
    platforms.push(new Platform(x, y, 80, type)); // create and add new platform

    highestY = y; // update highestY for next platform
  }
  return platforms; // return updated platforms array
}

export { generatePlatforms };
