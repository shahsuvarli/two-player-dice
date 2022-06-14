import { Component } from "react";
import "./App.css";
import Player from "./Player";
import dices from "./dices";

class App extends Component {
  constructor() {
    super();
    this.goRoll = this.goRoll.bind(this);
    this.state = {
      data: dices,
      player1: {
        status: "Draw",
        score: 0,
        values: { value1: 0, value2: 0 },
      },
      player2: {
        status: "Draw",
        score: 0,
        values: { value1: 0, value2: 0 },
      },
      move: "normal",
      buttonName: "Go Roll",
      isDisabled: false,
    };
  }
  goRoll() {
    let values1 = {
      value1: Math.floor(Math.random() * 6),
      value2: Math.floor(Math.random() * 6),
    };
    let values2 = {
      value1: Math.floor(Math.random() * 6),
      value2: Math.floor(Math.random() * 6),
    };

    let sum1 = values1.value1 + values1.value2;
    let sum2 = values2.value1 + values2.value2;

    let player1_data = this.state.player1;
    let player2_data = this.state.player2;

    if (sum1 > sum2) {
      player1_data = {
        status: "Win",
        score: this.state.player1.score + 1,
        values: values1,
      };
      player2_data = {
        status: "Lose",
        score: this.state.player2.score,
        values: values2,
      };
    } else if (sum1 < sum2) {
      player1_data = {
        status: "Lose",
        score: this.state.player1.score,
        values: values1,
      };
      player2_data = {
        status: "Win",
        score: this.state.player2.score + 1,
        values: values2,
      };
    } else {
      player1_data = {
        status: "Draw",
        score: this.state.player1.score,
        values: values1,
      };
      player2_data = {
        status: "Draw",
        score: this.state.player2.score,
        values: values2,
      };
    }

    this.setState({
      move: "shake",
      buttonName: "Rolling...",
      isDisabled: true,
    });

    setTimeout(
      () =>
        this.setState({
          move: "normal",
          player1: player1_data,
          player2: player2_data,
          buttonName: "Go Roll",
          isDisabled: false,
        }),
      2000
    );
  }
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="upper-container">
            <div className="header">DICE GAME</div>
            <div className="subheader">DICE GAME</div>
            <button onClick={this.goRoll} disabled={this.state.isDisabled}>
              {this.state.buttonName}
            </button>
          </div>
          <div className="bottom-container">
            <Player
              title="Player 1"
              score={this.state.player1.score}
              status={this.state.player1.status}
              move={this.state.move}
              icon1={this.state.data[this.state.player1.values.value1].icon}
              icon2={this.state.data[this.state.player1.values.value2].icon}
            />
            <Player
              title="Player 2"
              score={this.state.player2.score}
              status={this.state.player2.status}
              move={this.state.move}
              icon1={this.state.data[this.state.player2.values.value1].icon}
              icon2={this.state.data[this.state.player2.values.value2].icon}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
