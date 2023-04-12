import "./HealthBar.scss";

function HealthBar() {
  return (
    <div className="board__health-bar">
      <div className="board__container board__container--flip">
        <div className="board__player"></div>
        <div id="playerHealth" className="board__player-health"></div>
      </div>
      <div id="timer" className="board__timer">10</div>
      <div className="board__container">
        <div className="board__enemy"></div>
        <div id="enemyHealth" className="board__enemy-health"></div>
      </div>
    </div>
  );
}

export default HealthBar;
