export class Platform {
  constructor(x, y, w = 80, type = "normal") {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 12;

    this.type = type;
    this.broken = false;
    this.toRemove = false;

    this.vx = 0;
    if (type === "moving") this.vx = random([-1.5, 1.5]);
  }

  update() {
    if (this.type === "moving") {
      this.x += this.vx;
      if (this.x < 40 || this.x > width - 40) this.vx *= -1;
    }

    if (this.broken) {
      this.y += 6;
      if (this.y > height + 60) this.toRemove = true;
    }
  }

  break() {
    this.broken = true;
  }

  draw() {
    push();
    rectMode(CENTER);
    noStroke();

    if (this.type === "normal") fill(180);
    else if (this.type === "moving") fill(120, 180, 255);
    else if (this.type === "breaking") fill(255, 120, 120);

    if (this.broken) fill(140, 80, 80);

    rect(this.x, this.y, this.w, this.h, 6);
    pop();
  }
}
