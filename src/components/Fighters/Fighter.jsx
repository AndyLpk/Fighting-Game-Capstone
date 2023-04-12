class Fighter {
  constructor({ position, ctx, canvas, gravity, velocity }) {
    this.position = position; //position on canvas
    this.ctx = ctx;
    this.canvas = canvas;
    this.gravity = gravity;
    this.velocity = velocity; //gravity on canvas
    this.height = 150;
    this.width = 50;
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // stop the fighters from falling down of the canvas
    if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {
      this.velocity.y = 0;
    } else {
      // Sprite is in the air, gets affected by gravity.
      this.velocity.y += this.gravity; // Add gravity speed to the sprite every frame to slow it down.
    }
  }
}

export default Fighter;
