import React, { useEffect, useRef } from "react";
import Sprite from "../Sprite/Sprite";
import "./HomePage.scss";

import BackgroundImg from "../../assets/background1.png";
import { Link } from "react-router-dom";

function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 576;

    const background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: BackgroundImg,
      ctx: ctx,
      canvas: canvas,
    });

    function animate() {
      window.requestAnimationFrame(animate);
      ctx.fillStyle = "#323232";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      background.update();
    }
    animate();
  });

  return (
    <div className="homepage">
      <div className="homepage__title">Fighting Martial Arena</div>
      <div className="homepage__subtitle">Player VS Player</div>
      <Link className="homepage__button" to="/arena">
        Fight
      </Link>
      <canvas id="canvas" ref={canvasRef} className="homepage__canvas" />
    </div>
  );
}
export default HomePage;
