import Sprite from "../Sprite/Sprite";

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = "green",
    isAttacking,
    ctx,
    canvas,
    gravity,
    scale = 1,
    framesMax = 1,
    imageSrc,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
    });

    this.velocity = velocity;
    this.width = 50;
    this.height = 130;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.isAttacking = isAttacking;
    this.color = color;
    this.health = 100;
    this.ctx = ctx;
    this.canvas = canvas;
    this.gravity = gravity;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.sprites = sprites;
    this.dead = false;
    this.inTheAir = false;

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  update() {
    this.draw();
    if (!this.dead) this.animateFrame();

    //attack box
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    // this.ctx.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (
      this.position.y + this.height + this.velocity.y >=
      this.canvas.height - 95
    ) {
      this.velocity.y = 0;
      this.position.y = 381;
      this.inTheAir = false;
    } else {
      // Sprite is in the air, gets affected by gravity.
      this.velocity.y += this.gravity; // Add gravity speed to the sprite every frame to slow it down.
      if (this.velocity.y > 0) {
        // Sprite's y velocity is positive, it's falling.
        this.switchSprite("fall");
      } else {
        // Sprite is still going up.
        this.inTheAir = true; // Sprite is in the air and can't jump againg.
        this.switchSprite("jump");
      }
    }
  }

  attack() {
    this.switchSprite("attack1");
    this.isAttacking = true;
  }

  attackleft() {
    this.switchSprite("attack2");
    this.isAttacking = true;
  }

  takeHit() {
    this.health -= 1;

    if (this.health <= 0) {
      this.switchSprite("death");
    } else this.switchSprite("takeHit");
  }

  switchSprite(sprite) {
    //overide all animation after death animation
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true;
      return;
    }

    //overriding  all the animations with the attack animation
    if (
      (this.image === this.sprites.attack1.image ||
        this.image === this.sprites.attack2.image) &&
      (this.framesCurrent < this.sprites.attack1.framesMax - 1 ||
        this.framesCurrent < this.sprites.attack2.framesMax - 1)
    )
      return;

    //overriding when taking hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return;

    switch (sprite) {
      case "idle":
        if (
          this.image !== this.sprites.idle.image &&
          !this.inTheAir &&
          this.health > 0
        ) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "run":
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "runleft":
        if (this.image !== this.sprites.runleft.image) {
          this.image = this.sprites.runleft.image;
          this.framesMax = this.sprites.runleft.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "jump":
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "fall":
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "idleleft":
        if (this.image !== this.sprites.idleleft.image) {
          this.image = this.sprites.idleleft.image;
          this.framesMax = this.sprites.idleleft.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "attack1":
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "attack2":
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image;
          this.framesMax = this.sprites.attack2.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "takeHit":
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image;
          this.framesMax = this.sprites.takeHit.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "death":
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesCurrent = 0;
        }
        break;
      default:
        break;
    }
  }
}

export default Fighter;
