import React from 'react';
import Square from './Square.js';

import "./board.css"

const createSquare = (value) => {
  return <Square value={value}/>;
}

const Board = () => {
  return(
    <div className="board">
      <div className="row">
        {createSquare(1)}
        {createSquare(2)}
        {createSquare(3)}
      </div>
      <div className="row">
        {createSquare(4)}
        {createSquare(5)}
        {createSquare(6)}
      </div>
      <div className="row">
        {createSquare(7)}
        {createSquare(8)}
        {createSquare(9)}
      </div>
    </div>
  );
}

export default Board;
