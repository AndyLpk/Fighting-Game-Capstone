//determine Winner and refactor some code
export function determineWinner(player, enemy, timerId) {
  clearTimeout(timerId);
  document.querySelector("#displayResult").style.display = "flex";

  if (player.health === enemy.health) {
    document.querySelector("#displayResult").innerHTML = "Tie";
    setTimeout(() => (window.location.href = "http://localhost:3000"), 10000);
  } else if (player.health > enemy.health) {
    document.querySelector("#displayResult").innerHTML = "Player 1 Win";
    setTimeout(() => (window.location.href = "http://localhost:3000"), 10000);
  } else if (player.health < enemy.health) {
    document.querySelector("#displayResult").innerHTML = "Player 2 Win";
    setTimeout(() => (window.location.href = "http://localhost:3000"), 10000);
  }
}

// export function handleKeyDown(keys, player, enemy){

// }

//setting timer and getting result at the end

// let timer = 60;
// let timerId;
export function decreaseTimer(timer, timerId, player, enemy) {
  // let timerId;
  // console.log(timer)
  if (timer > 0) {
    timerId = setTimeout(
      () => decreaseTimer(timer, timerId, player, enemy),
      1000
    );
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner(player, enemy, timerId);
  }
}
