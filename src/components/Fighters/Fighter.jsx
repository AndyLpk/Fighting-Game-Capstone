class Fighter {
  constructor({ position, ctx, canvas, gravity }) {
    this.position = position;
    this.ctx = ctx;
    this.canvas = canvas;
    this.gravity = gravity;
  }
  draw() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.position.x, this.position.y, 50, 150)
  }
}

export default Fighter;
