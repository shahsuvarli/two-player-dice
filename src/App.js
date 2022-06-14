import { Component } from "react";
import "./App.css";
import Player from "./Player";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scores: {
        player1: 0,
        player2: 0,
      },
    };
  }
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="upper-container">
            <div className="header">DICE GAME</div>
            <div className="subheader">DICE GAME</div>
            <button>Go Roll</button>
          </div>
          <div className="bottom-container">
            <Player title="Player 1" score={this.state.scores.player1} />
            <Player title="Player 2" score={this.state.scores.player1} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
