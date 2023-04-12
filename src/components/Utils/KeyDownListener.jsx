function KeyDownListener({ player, enemy, keys }) {

  function HandleKeyDown(event) {

    // if player is dead stop movement for player
    // if (!player.dead) {
      switch (event.key) {
        case "d":
          keys.d.pressed = true;
          player.lastKey = "d";
          break;
        case "a":
          keys.a.pressed = true;
          player.lastKey = "a";
          break;
        case "w":
          // if (!player.inTheAir) {
            // Can only jump if it's not in the air.
            player.velocity.y = -20;
          // }

          break;
        case "s":
          keys.s.pressed = true;
          player.lastKey = "s";
          break;
        default:
          break;
      }
    // }

    //if enemy is dead stop movement
    // if (!enemy.dead) {
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          enemy.lastKey = "ArrowRight";
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          enemy.lastKey = "ArrowLeft";
          break;
        case "ArrowUp":
          // if (!enemy.inTheAir) {
            // Can only jump if it's not in the air.
            enemy.velocity.y = -20;
          // }
          break;
        case "ArrowDown":
          keys.ArrowDown.pressed = true;
          enemy.lastKey = "ArrowDown";

          break;

        default:
          break;
      }
    // }
    // console.log(event.key);
  }
  return window.addEventListener("keydown", HandleKeyDown);
}

export default KeyDownListener;
