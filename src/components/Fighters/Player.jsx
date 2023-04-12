import Fighter from "./Fighter";

function Player({ canvas, ctx, gravity }) {
  const player = new Fighter({
    position: {
      x: 50,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    ctx: ctx,
    canvas: canvas,
    gravity: gravity,
  });

  return player;
}

export default Player;
