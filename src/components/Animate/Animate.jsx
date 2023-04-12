import Collision from "../Collision/Collision";
import { determineWinner } from "../Utils/Utils";

export function Animate({ ctx, canvas, player, enemy, keys, timerId }) {
  function animation() {
    window.requestAnimationFrame(animation); //to loop the animation function over and over again
    ctx.fillStyle = "#323232";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    //player Movement
    if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
    } else if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
    }

    //detect collision on enemy
    if (
      Collision({
        hitBox1: player,
        hitBox2: enemy,
      }) &&
      player.isAttacking
    ) {
      player.isAttacking = false;

      enemy.health -= 10;
      document.querySelector("#enemyHealth").style.width = enemy.health + "%";
      console.log("Enemy Hit");
    }

    //Enemy Movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      enemy.velocity.x = -5;
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      enemy.velocity.x = 5;
    }

    //detect collision on player
    if (
      Collision({
        hitBox1: enemy,
        hitBox2: player,
      }) &&
      enemy.isAttacking
    ) {
      enemy.isAttacking = false;
      player.health -= 10;

      document.querySelector("#playerHealth").style.width = player.health + "%";
      console.log("Player Hit");
    }

    //end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      console.log("player", player);
      determineWinner(player, enemy, timerId);  //get the winner at the end
    }
  }
  animation();
}
