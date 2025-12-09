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
    ellipseMode(CENTER);

    // Face
    fill(255, 224, 189);
    ellipse(this.x, this.y, this.w, this.h);

    // Beard
    fill(255);
    ellipse(this.x, this.y + this.h / 4, this.w * 0.8, this.h / 2);

    // Eyes
    fill(0);
    ellipse(this.x - this.w / 6, this.y - this.h / 8, this.w / 8, this.h / 8);
    ellipse(this.x + this.w / 6, this.y - this.h / 8, this.w / 8, this.h / 8);

    // Mouth
    noFill();
    stroke(255, 150, 180);
    strokeWeight(3);
    arc(this.x, this.y + this.h / 16, this.w / 3, this.h / 6, 0, PI);

    // Santa hat
    noStroke();
    fill(255, 0, 0);
    triangle(
      this.x - this.w / 2,
      this.y - this.h / 2,
      this.x + this.w / 2,
      this.y - this.h / 2,
      this.x,
      this.y - this.h
    );

    fill(255); // hat bottom
    rect(this.x - this.w / 2, this.y - this.h / 2 - 2, this.w, 6, 3);

    fill(255); // pompom
    ellipse(this.x, this.y - this.h, this.w / 6);

    pop();
  }
}
