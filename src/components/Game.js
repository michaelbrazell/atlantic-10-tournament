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
  render() {
    return (
      <div className={"game-" + this.state.gameNumber + " card mb-3"}>
        <div className="card-header">
          <strong>Game {this.state.gameNumber}</strong> <span className="float-sm-right">{this.state.time}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className={ this.state.prediction === this.state.team1 ? "list-group-item list-group-item-info" : "list-group-item" }><span className="badge badge-dark">{this.state.team1Seed}</span> {this.state.team1} <span className="float-right">{this.state.team1Score}</span></li>
          <li className={ this.state.prediction === this.state.team2 ? "list-group-item list-group-item-info" : "list-group-item" }><span className="badge badge-dark">{this.state.team2Seed}</span> {this.state.team2} <span className="float-right">{this.state.team2Score}</span></li>
        </ul>
      </div>
    );
  }
}

export default Game;