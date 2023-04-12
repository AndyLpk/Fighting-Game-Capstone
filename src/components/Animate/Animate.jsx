export function Animate({ctx,canvas,player,enemy}) {

    function animation() {

        window.requestAnimationFrame(animation); //to loop the animation function over and over again
        ctx.fillStyle = "#323232";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // player.update();
        player.draw();
        enemy.draw();
    }
    animation();
}

