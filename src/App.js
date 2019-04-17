import React from 'react';
import glen from './Glen.png';
import raryson from './Raryson.jpg';

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

  checkAnswer(){
    //get the value in each square, put in an array to check?
  }
  render() {
    return (
      <div>
        <img className='avatar' src={glen} alt='glen'></img>
        <img className='avatar' src={raryson} alt='raryson'></img>
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
        <button onClick={this.checkAnswer}>Check Answer</button>
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

  // renderTile() {
  //   return <Tile />
  // }
  renderTile(i) {
    return <Tile onClick={()=> this.onClick(i)} value={this.state.squares[i]}/>
  }
  
  onClick(i){
    console.log("clicked!");
    const squares = this.state.squares.slice();
    if (squares[i] < 9) {
      squares[i] = squares[i] + 1 ;
      console.log(squares[i]);
    }
    else { //reset that square's val to null
      squares[i] = null ;
    }
    this.setState({ squares : squares});
  }

  render() {
    return (
      <div className="subBoard">
        <div className="subBoard-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="subBoard-row">
          {this.renderTile(3)}
          {this.renderTile(4)}
          {this.renderTile(5)}
        </div>
        <div className="subBoard-row">
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}
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
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log("clicked")
  //   if (this.state.value < 9) {
  //     this.setState({ value: this.state.value + 1 });
  //   }
  //   else {
  //     this.setState({ value: null });
  //   }
  // }

  // render() {
  //   return (
  //     <button className="tile"
  //       onClick={this.handleClick}> {this.state.value}</button>
  //  //   on click update the value  //in the future, when something is dragged over.
  //   )
  // }
  render() {
    return (
      <button className="tile"
        onClick={this.props.onClick}> {this.props.value}</button>
   //   on click update the value  //in the future, when something is dragged over.
    )
  }
}

export default App;