import React from "react";
import "./square.css";

const Square = (props) => (
  <button
    onClick={props.onClick}
    className="square">
    {props.value}
  </button>
)

export default Square
