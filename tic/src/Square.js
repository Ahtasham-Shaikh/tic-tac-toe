import React from "react";
import "./square.css";

const Square = (props) => {
  return (
    <button className="square" onClick={props.btnClicked}>
      {props.marker}
    </button>
  )
}

export default Square
