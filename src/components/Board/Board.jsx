import React, { useEffect, useRef } from "react";
import "./Board.scss";
// import Fighter from "../Fighter/Fighter";
import { Animate } from "../Animate/Animate";
import Player from "../Fighters/Player";
import Enemy from "../Fighters/Enemy";
import KeyDownListener from "../Utils/KeyDownListener";
import KeyUpListener from "../Utils/KeyUpListener";
import HealthBar from "../HealthBar/HealthBar";
import Result from "../Result/Result"
import { decreaseTimer } from "../Utils/Utils";
import Background from "../Background/Background";
import KeyInformation from "../KeyInformation/KeyInformation";
import Shop from "../Background/Shop";

function Board() {
  const canvasRef = useRef(null);
  //in order to utilize the canvas and we going to have a component dead mount
  //we will be using "useEffect"

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 576;
    const gravity = 0.7;

    const player = new Player({ canvas, ctx, gravity }); //player component
    const enemy = new Enemy({ canvas, ctx, gravity }); //enemy component

    const background = new Background({canvas,ctx}); //background img
    const shop = new Shop({canvas,ctx}); //shop background

    // to have a more accurate movement
    const keys = {
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
      s: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
      ArrowRight: {
        pressed: false,
      },
      ArrowDown: {
        pressed: false,
      },
    };

    let timerId;
    decreaseTimer(60, timerId, player, enemy); //decrease timer

    Animate({ canvas, ctx, player, enemy, keys,timerId, background, shop }); //animation component

    KeyDownListener({ player, enemy, keys }); //keydown event listener

    KeyUpListener({ keys }); //keyup event listener
  }, []);
  return (
    <div className="board">
      <div className="board__player1">Player 1</div>
      <div className="board__player2">Player 2</div>
      <HealthBar />
      <Result />
      <canvas id="canvas" ref={canvasRef} className="board__canvas" />
      <KeyInformation />
    </div>
  );
}

export default Board;
