import Collision from "../Collision/Collision";
import { determineWinner } from "../Utils/Utils";

export function Animate({ ctx, canvas, player, enemy, keys, timerId, background, shop }) {
  function animation() {
    window.requestAnimationFrame(animation); //to loop the animation function over and over again
    ctx.fillStyle = "#323232";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    background.update();
    shop.update();

    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    //player Movement
    if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("runleft");
    } else if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    }
    // to flip image if character switch side
    else if (
      player.position.x + player.width >=
      enemy.position.x + enemy.width
    ) {
      player.switchSprite("idleleft");
      if (keys.s.pressed && player.lastKey === "s") {
        player.attackleft();
      }
    } else {
      player.switchSprite("idle");
      if (keys.s.pressed && player.lastKey === "s") {
        player.attack();
      }
    }

    //jump movement
    if (player.velocity.y < 0) {
      player.switchSprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchSprite("fall");
    }

    //detect collision on enemy
    if (
      Collision({
        hitBox1: player,
        hitBox2: enemy,
      }) &&
      player.isAttacking &&
      player.framesCurrent === 4
    ) {
      enemy.takeHit();
      player.isAttacking = false;

      document.querySelector("#enemyHealth").style.width = enemy.health + "%";
      console.log("Player Hit");
    }

    //if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
      player.isAttacking = false;
    }

    //Enemy Movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      enemy.velocity.x = -5;
      enemy.switchSprite("runleft");
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      enemy.velocity.x = 5;
      enemy.switchSprite("run");
    }
    //flip image for enemy when switch side
    else if (
      player.position.x + player.width >=
      enemy.position.x + enemy.width
    ) {
      enemy.switchSprite("idleleft");
      if (keys.ArrowDown.pressed && enemy.lastKey === "ArrowDown") {
        enemy.attackleft();
      }
    } else {
      enemy.switchSprite("idle");
      if (keys.ArrowDown.pressed && enemy.lastKey === "ArrowDown") {
        enemy.attack();
      }
    }

    //jump movement
    if (enemy.velocity.y < 0) {
      enemy.switchSprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite("fall");
    }

    //detect collision on player
    if (
      Collision({
        hitBox1: enemy,
        hitBox2: player,
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2
    ) {
      player.takeHit();
      enemy.isAttacking = false;

      document.querySelector("#playerHealth").style.width = player.health + "%";
      console.log("Enemy Hit");
    }

    //if enemy misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false;
    }

    //flip the hitbox when player and enemy switch position side
    if (player.position.x + player.width > enemy.position.x + enemy.width) {
      player.attackBox.offset.x = -60;
      player.attackBox.width = 180;
      enemy.attackBox.offset.x = 10;
    } else {
      player.attackBox.offset.x = 120;
      player.attackBox.width = 130;
      enemy.attackBox.offset.x = -165;
    }

    //stop the sprite from moving out of the canvas side
    if (player.position.x + player.width > canvas.width - 25) {
      player.velocity.x = -1;
    } else if (player.position.x < canvas.width - 1005) {
      player.velocity.x = 1;
    }

    if (enemy.position.x + enemy.width > canvas.width - 50) {
      enemy.velocity.x = -1;
    } else if (enemy.position.x < canvas.width - 1015) {
      enemy.velocity.x = 1;
    }

    //end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      console.log("player", player);
      determineWinner(player, enemy, timerId); //get the winner at the end
    }
  }
  animation();
}
