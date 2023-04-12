import {useRef} from "react";
import './Result.scss'



function Result() {

  const displayResultRef = useRef(null);
  return <div ref={displayResultRef} id='displayResult' className='board__result'></div>;
}

export default Result;
