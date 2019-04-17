import React from 'react';
import glen from './Glen.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      squares: Array(9).fill(null),
    }
  }

  renderSquare() {
    return <Square></Square>
  }

  handleClick(){
    //get the value in each square, put in an array to check?
  }
  render() {
    return (
      <div>
        <img src={glen} alt='glen'></img>
        <div className="Board">
          <div className="board-row">
            {this.renderSquare()}
            {/* {this.renderSquare()}
            {this.renderSquare()} */}
            </div>
            {/* <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div> */}
        </div>
        <button onClick={this.handleClick}>Check Answer</button>
      </div>
    )
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderTile() {
    return <Tile />
  }
  // renderTile(i) {
  //   return <Tile onClick={()=> this.onClick(i)} value={this.state.squares[i]}/>
  // }
  onClick(i){
    console.log("clicked!");
    const squares = this.state.squares.slice();
    if (squares[i] < 9) {
      squares[i] = squares[i] + 1 ;
      this.setState({ squares : squares});
    }
    else {
      this.setState({ value: null });
    }
  }

  render() {
    return (
      <div className="subBoard">
        <div className="subBoard-row">
          {this.renderTile()}
          {this.renderTile()}
          {this.renderTile()}
        </div>
        <div className="subBoard-row">
          {this.renderTile()}
          {this.renderTile()}
          {this.renderTile()}
        </div>
        <div className="subBoard-row">
          {this.renderTile()}
          {this.renderTile()}
          {this.renderTile()}
        </div>
      </div>
    )
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked")
    if (this.state.value < 9) {
      this.setState({ value: this.state.value + 1 });
    }
    else {
      this.setState({ value: null });
    }
  }

  render() {
    return (
      <button className="tile"
        onClick={this.handleClick}> {this.state.value}</button>
   //   on click update the value  //in the future, when something is dragged over.
    )
  }
}

export default App;