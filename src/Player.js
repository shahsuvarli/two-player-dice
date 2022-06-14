import { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="header-conatiner">
          <h2>{this.props.title}</h2>
          <h3>Score: {this.props.score}</h3>
          <h2 className={`status-${this.props.status}`}>{this.props.status}</h2>
        </div>
        <div className="player-dices">
          <div className={`dice-${this.props.move}`}>{this.props.icon1}</div>
          <div className={`dice-${this.props.move}`}>{this.props.icon2}</div>
        </div>
        </div>
    );
  }
}

export default Player;
