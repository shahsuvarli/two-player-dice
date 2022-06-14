import { Component } from "react";

class Player extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="player">
        <div>
          <div className="player-name">{this.props.title}</div>
          <div className="player-score">Score: {this.props.score}</div>
        </div>
        <div className="player-dices">
          <div className="dice">dice 1</div>
          <div className="dice">dice 2</div>
        </div>
      </div>
    );
  }
}

export default Player;
