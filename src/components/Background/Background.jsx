import BackgroundImg from "../../assets/background1.png";
import Sprite from "../Sprite/Sprite";

function Background({ canvas, ctx }) {
  const background = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: BackgroundImg,
    ctx: ctx,
    canvas: canvas,
  });
  return background;
}

export default Background;
