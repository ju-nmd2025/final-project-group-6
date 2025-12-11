export default class Platform {
  constructor(x, y, w = 80, type = "normal") {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 12;

    this.type = type;
    this.broken = false; // means the platform is cracking and falling
    this.toRemove = false; // “remove this from the array soon”, because it’s off-screen

    this.vx = 0; // horizontal speed for moving platforms
    if (type === "moving") this.vx = random([-1.5, 1.5]);
  }

  update() {
    if (this.type === "moving") {
      this.x += this.vx; // move horizontally
      if (this.x < 40 || this.x > width - 40) this.vx *= -1; // if it hits the left or right boundary, it reverses direction
    }

    if (this.broken) {
      this.y += 6;
      if (this.y > height + 60) this.toRemove = true; // mark for removal if it goes off-screen
    }
  }

  break() {
    this.broken = true; // method to initiate breaking
  }

  draw() {
    push();
    rectMode(CENTER);
    noStroke();

    if (this.type === "normal") fill(50, 80, 50);
    else if (this.type === "moving") fill(111, 15, 17);
    else if (this.type === "breaking") fill(111, 55, 37);

    if (this.broken) fill(140, 80, 80);

    rect(this.x, this.y, this.w, this.h, 6);
    pop();
  }
}

export { Platform };
