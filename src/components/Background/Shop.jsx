import Sprite from "../Sprite/Sprite";
import ShopImg from "../../assets/shop.png";

function Shop({ctx,canvas}) {
  const shop = new Sprite({
    position: {
      x: 650,
      y: 160,
    },
    imageSrc: ShopImg,
    ctx: ctx,
    canvas: canvas,
    scale: 2.5,
    framesMax: 6,
  });

  return shop;
}

export default Shop;
