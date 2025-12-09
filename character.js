export class Character {
  constructor() {
    this.x = width / 2;
    this.y = height - 120;
    this.w = 36;
    this.h = 36;
    this.velocity = 0;
    this.gravity = 0.6;
  }
  reset() {
    this.x = width / 2;
    this.y = height - 120;
    this.velocity = 0;
  }
  update() {
    // gravity
    this.velocity += this.gravity;
    this.y += this.velocity;

    // left / right movement
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.x += 5;
    }

    // wrap horizontally
    if (this.x < -this.w / 2) this.x = width + this.w / 2;
    if (this.x > width + this.w / 2) this.x = -this.w / 2;
  }

  bounce(force = -20) {
    this.velocity = force;
  }

  draw() {
    push();
    noStroke();
    // body
    fill(120, 200, 255);
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }
}
