import React from 'react';
import Square from './Square.js';

import "./board.css"



class Board extends React.Component{

  text = "Next Player: ";
  status = "X"

  btnClicked = (event) => {

    if(this.state.marker === "X")
        this.setState({
          marker: "O"
        })

    else
      this.setState({
        marker: "X"
      })

  }

  constructor(){
    super();
    this.state = {
      marker: `X`
    }
  }

  createSquare = (value) => {
    return <Square value={value} btnClicked={this.btnClicked} marker={this.state.marker}/>;
  }

  render(){
    return(
      <div>
        <div className='marker'>{`${this.text} ${this.state.marker}`}</div>
        <div className="row">
          {this.createSquare(1)}
          {this.createSquare(2)}
          {this.createSquare(3)}
        </div>
        <div className="row">
          {this.createSquare(4)}
          {this.createSquare(5)}
          {this.createSquare(6)}
        </div>
        <div className="row">
          {this.createSquare(7)}
          {this.createSquare(8)}
          {this.createSquare(9)}
        </div>
      </div>
    );

  }

}



export default Board;
