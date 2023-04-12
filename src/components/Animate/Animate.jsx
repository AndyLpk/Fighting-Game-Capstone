export function Animate({ctx,canvas,player}) {

    function animation() {

        window.requestAnimationFrame(animation);
        ctx.fillStyle = "#323232";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // player.update();
        player.draw();
    }
    animation();
}

