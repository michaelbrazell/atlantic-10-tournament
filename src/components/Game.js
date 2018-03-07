import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      gameNumber: this.props.number,
      time: this.props.time,
      team1Seed: this.props.team1Seed,
      team2Seed: this.props.team2Seed,
      team1: this.props.team1,
      team2: this.props.team2,
      team1Score: this.props.team1Score,
      team2Score: this.props.team2Score,
      prediction: this.props.prediction
    };
  }
  /*
    The bonus calculator:
    First, match if prediction === team1
    IF so, match if team1Seed > team2Seed. If it is, bonus.
    If it is not greater, no bonus
    Else condition, see if team2seed > team1seed, if it is, bonus
  */
  isBonus(prediction, team1, team2, team1Seed, team2Seed) {
     if (prediction === team1) {
       console.log('Person Predicted Team 1')
     } else {
       console.log('Person PRedicted team 2')
     }
  }
  render() {
    return (
      <div className={"game-" + this.state.gameNumber + " card mb-3"}>
        <div className="card-header">
          <strong>Game {this.state.gameNumber}</strong> <span className="float-sm-right">{this.state.time}</span>
        </div>
        <ul className="list-group list-group-flush">
        { this.isBonus(this.state.prediction, this.state.team1) }
          <li className={ this.state.prediction === this.state.team1 ? "list-group-item list-group-item-info" : "list-group-item" }>
            <span className="badge badge-secondary">{this.state.team1Seed}</span> {this.state.team1} <span className="float-right">{this.state.team1Score}</span>
          </li>
          <li className={ this.state.prediction === this.state.team2 ? "list-group-item list-group-item-info" : "list-group-item" }>
            <span className="badge badge-secondary">{this.state.team2Seed}</span> {this.state.team2} <span className="float-right">{this.state.team2Score}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Game;