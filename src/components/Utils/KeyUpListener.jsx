function KeyUpListener({ keys }) {

    function HandleKeyUp (event) {

        //player keys
         switch (event.key) {
        case "d":
          keys.d.pressed = false;
          break;
        case "a":
          keys.a.pressed = false;
          break;
        case "s":
          keys.s.pressed = false;
          break;
        default:
          break;
      }

      //enemy keys
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = false;
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = false;
          break;
        case "ArrowDown":
          keys.ArrowDown.pressed = false;
          break;
        default:
          break;
      }
    
    }
  return window.addEventListener("keyup", HandleKeyUp);
}

export default KeyUpListener
