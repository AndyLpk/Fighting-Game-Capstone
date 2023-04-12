import Fighter from "./Fighter";
import KenjiIdle from "../../assets/kenji/Idle.png";
import KenjiIdleLeft from "../../assets/kenji/IdleLeft.png";
import KenjiRun from "../../assets/kenji/Run.png";
import KenjiRunLeft from "../../assets/kenji/Runleft.png";
import KenjiJump from "../../assets/kenji/Jump.png";
import KenjiFall from "../../assets/kenji/Fall.png";
import KenjiAttack1 from "../../assets/kenji/Attack1.png";
import KenjiAttack2 from "../../assets/kenji/Attack2.png";
import KenjiTakeHit from "../../assets/kenji/Takehit.png";
import KenjiDeath from "../../assets/kenji/Death.png";

function Enemy({ canvas, ctx, gravity }) {
  const enemy = new Fighter({
    position: {
      x: 900,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    color: "red",
    isAttacking: false,
    ctx: ctx,
    canvas: canvas,
    gravity: gravity,
    imageSrc: KenjiIdle,
    scale: 2.5,
    framesMax: 4,
    offset: {
      x: 215,
      y: 220,
    },
    sprites: {
      idle: {
        imageSrc: KenjiIdle,
        framesMax: 4,
      },
      idleleft: {
        imageSrc: KenjiIdleLeft,
        framesMax: 4,
      },
      run: {
        imageSrc: KenjiRunLeft,
        framesMax: 8,
      },
      runleft: {
        imageSrc: KenjiRun,
        framesMax: 8,
      },
      jump: {
        imageSrc: KenjiJump,
        framesMax: 2,
      },
      fall: {
        imageSrc: KenjiFall,
        framesMax: 2,
      },
      attack1: {
        imageSrc: KenjiAttack1,
        framesMax: 4,
      },
      attack2: {
        imageSrc: KenjiAttack2,
        framesMax: 4,
      },
      takeHit: {
        imageSrc: KenjiTakeHit,
        framesMax: 3,
      },
      death: {
        imageSrc: KenjiDeath,
        framesMax: 7,
      },
    },
    attackBox: {
      offset: {
        x: -165,
        y: 6,
      },
      width: 130,
      height: 30,
    },
  });

  return enemy;
}

export default Enemy;
