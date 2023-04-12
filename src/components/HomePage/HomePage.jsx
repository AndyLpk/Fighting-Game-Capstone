import React, { useEffect, useRef } from "react";
import "./HomePage.scss";

import { Link } from "react-router-dom";
import Background from "../Background/Background";

function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 576;

    const background = new Background({ ctx, canvas });

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
