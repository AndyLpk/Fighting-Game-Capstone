function Collision({ hitBox1, hitBox2 }) {
  return (
    hitBox1.attackBox.position.x + hitBox1.attackBox.width >=
      hitBox2.position.x &&
    hitBox1.attackBox.position.x <= hitBox2.position.x + hitBox2.width &&
    hitBox1.attackBox.position.y + hitBox1.attackBox.height >=
      hitBox2.position.y &&
    hitBox1.attackBox.position.y <= hitBox2.position.y + hitBox2.height
  );
}

export default Collision;
