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
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

export default Fighter;
