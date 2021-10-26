import React from 'react';
import Square from './Square.js';

import "./board.css"

class Board extends React.Component{

  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      isXNext: true
    }
  }

  handler(index){
    const squares = this.state.squares.slice();
    squares[index] = this.state.isXNext? "X" : "O";
    this.setState({
      squares: squares,
      isXNext: !(this.state.isXNext)
    })
  }

  createSquare = (i) => 
    <Square
      value={this.state.squares[i]}
      onClick={() => this.handler(i)} 
    />

  render(){
    const winner = checkWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');
    }
    return(
      <div>
        <div className="status">{status}</div>
        <div className="row">
          {this.createSquare(0)}
          {this.createSquare(1)}
          {this.createSquare(2)}
        </div>
        <div className="row">
          {this.createSquare(3)}
          {this.createSquare(4)}
          {this.createSquare(5)}
        </div>
        <div className="row">
          {this.createSquare(6)}
          {this.createSquare(7)}
          {this.createSquare(8)}
        </div>
      </div>
    );

  }

}

function checkWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i=0; i < lines.length; i++ ){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      console.log("We Have a winner!");
      return;
   }else
      return null
  }

}

export default Board;
