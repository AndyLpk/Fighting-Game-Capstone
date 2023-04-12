import Fighter from "./Fighter";

function Enemy({ canvas, ctx, gravity }) {
  const enemy = new Fighter({
    position: {
      x: 900,
      y: 0,
    },
    ctx: ctx,
    canvas: canvas,
    gravity: gravity,
  });

  return enemy;
}

export default Enemy;
