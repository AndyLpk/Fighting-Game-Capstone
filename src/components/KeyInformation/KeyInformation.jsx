import React from "react";
import './KeyInformation.scss';


function KeyInformation() {
  return (
    <div className="information">
      <div className="key">
        <a className="key__button" href="/">
          Menu
        </a>
        <a className="key__button" href="/arena">
          Restart
        </a>
      </div>
      <div className="keymapping">
        <div class="keys">
          <h1> Player 1 </h1>
          <p> Movement: W A D </p>
          <p> Attack: S </p>
        </div>
        <div className="keys">
          <h1> Player 2 </h1>
          <p> Movement: Arrow keys </p>
          <p> Attack: Arrow Down </p>
        </div>
      </div>
    </div>
  );
}

export default KeyInformation;
