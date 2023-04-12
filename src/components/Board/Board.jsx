import React, { useEffect, useRef } from "react";
import "./Board.scss";
// import Fighter from "../Fighter/Fighter";
import { Animate } from "../Animate/Animate";
import Player from "../Fighters/Player";
import Enemy from "../Fighters/Enemy";

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

    Animate({ canvas, ctx, player, enemy }); //animation component
  }, []);
  return (
    <div className="board">
      <canvas id="canvas" ref={canvasRef} className="board__canvas" />
    </div>
  );
}

export default Board;
