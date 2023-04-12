class Fighter {
  constructor({ position, ctx, canvas, gravity, velocity, color, offset }) {
    this.position = position; //position on canvas
    this.ctx = ctx;
    this.canvas = canvas;
    this.gravity = gravity;
    this.velocity = velocity; //gravity on canvas
    this.height = 150;
    this.width = 50;
    this.attackBox = {
      position: {
        x:this.position.x,
        y: this.position.y,
      },
      offset,
      width: 100,
      height: 50,
    };
    this.color = color;
    this.isAttacking = false;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    //attack box
    if (this.isAttacking) {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
  }

  update() {
    this.draw();

    //attack box
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

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

  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
  }
}

export default Fighter;
