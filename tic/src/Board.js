import React from 'react';
import Square from './Square.js';

const createSquare = (value) => {
  return <Square value={value}/>;
}

const Board = () => {
  return(
    <div>
      <div>
        {createSquare(1)}
        {createSquare(2)}
        {createSquare(3)}
      </div>
      {createSquare(4)}
      {createSquare(5)}
      {createSquare(6)}
      {createSquare(7)}
      {createSquare(8)}
      {createSquare(9)}
    </div>
  );
}

export default Board;
