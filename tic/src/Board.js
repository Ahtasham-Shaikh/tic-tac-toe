import React from 'react';
import Square from './Square.js';

import "./board.css"

class Board extends React.Component{

  status = "Next Player: X";

  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handler(index){
    const squares = this.state.squares.slice();
    squares[index] = "X";
    this.setState({
      squares: squares
    })
  }

  createSquare = (i) => <Square
    value={this.state.squares[i]}
    onClick={() => this.handler(i)} />

  render(){
    return(
      <div>
        <div className="status">{this.status}</div>
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



export default Board;
