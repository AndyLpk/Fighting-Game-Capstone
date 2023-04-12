import Fighter from "./Fighter";
import SamuraiIdle from "../../assets/samuraiMack/Idle.png";
import SamuraiRun from "../../assets/samuraiMack/Run.png";
import SamuraiRunLeft from "../../assets/samuraiMack/Runleft.png";
import SamuraiJump from "../../assets/samuraiMack/Jump.png";
import SamuraiFall from "../../assets/samuraiMack/Fall.png";
import SamuraiIdleLeft from "../../assets/samuraiMack/Idleleft.png";
import SamuraiAttack1 from "../../assets/samuraiMack/Attack1.png";
import SamuraiAttack1Left from "../../assets/samuraiMack/Attack2.png";
import SamuraiTakeHit from "../../assets/samuraiMack/Take Hit - white silhouette.png";
import SamuraiDeath from "../../assets/samuraiMack/Death.png"

function Player({ canvas, ctx, gravity }) {
    const player = new Fighter({
      position: {
        x: 50,
        y: 0,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      isAttacking: false,
      ctx: ctx,
      canvas: canvas,
      gravity: gravity,
      imageSrc: SamuraiIdle,
      scale: 2.5,
      framesMax: 8,
      offset: {
        x: 215,
        y: 205,
      },
      sprites: {
        idle: {
          imageSrc: SamuraiIdle,
          framesMax: 8,
        },
        idleleft: {
          imageSrc: SamuraiIdleLeft,
          framesMax: 8,
        },
        run: {
          imageSrc: SamuraiRun,
          framesMax: 8,
        },
        runleft: {
          imageSrc: SamuraiRunLeft,
          framesMax: 8,
        },
        jump: {
          imageSrc: SamuraiJump,
          framesMax: 2,
        },
        fall: {
          imageSrc: SamuraiFall,
          framesMax: 2,
        },
        attack1: {
          imageSrc: SamuraiAttack1,
          framesMax: 6,
        },
        attack2: {
          imageSrc: SamuraiAttack1Left,
          framesMax: 6,
        },
        takeHit: {
          imageSrc: SamuraiTakeHit,
          framesMax: 4,
        },
        death: {
          imageSrc: SamuraiDeath,
          framesMax: 6,
        },
      },
      attackBox: {
        offset: {
          x: 120,
          y: -5,
        },
        width: 130,
        height: 30,
      },
    });

  return player;
}

export default Player;
