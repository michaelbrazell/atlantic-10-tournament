import React, { Component } from "react";
import Game from "./Game.js";

const bracketData =
[
  {
    "name":"Official",
    "gameData":[
      {
        "game":1,
        "time":"6:00",
        "team1Seed":"12",
        "team2Seed":"13",
        "team1":"La Salle",
        "team2":"Massachusetts",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":2,
        "time":"8:30",
        "team1Seed":"11",
        "team2Seed":"14",
        "team1":"Ge. Washington",
        "team2":"Fordam",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":3,
        "time":"12:00",
        "team1Seed":"8",
        "team2Seed":"9",
        "team1":"VCU",
        "team2":"Dayton",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":4,
        "time":"2:30",
        "team1Seed":"5",
        "team2Seed":"",
        "team1":"George Mason",
        "team2":"Game 1 Winner",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":5,
        "time":"6:00",
        "team1Seed":"7",
        "team2Seed":"10",
        "team1":"Richmond",
        "team2":"Duquesne",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":6,
        "time":"8:30",
        "team1Seed":"6",
        "team2Seed":"",
        "team1":"Saint Louis",
        "team2":"Game 2 Winner",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":7,
        "time":"12:00",
        "team1Seed":"1",
        "team2Seed":"",
        "team1":"Rhode Island",
        "team2":"Game 3 Winner",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":8,
        "time":"2:30",
        "team1Seed":"",
        "team2Seed":"4",
        "team1":"Game 4 Winner",
        "team2":"St. Joseph's",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":9,
        "time":"6:00",
        "team1Seed":"2",
        "team2Seed":"",
        "team1":"St. Bonaventure",
        "team2":"Game 5 Winner",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":10,
        "time":"8:30",
        "team1Seed":"",
        "team2Seed":"3",
        "team1":"Game 6 Winner",
        "team2":"Davidson",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":11,
        "time":"1:00",
        "team1Seed":"",
        "team2Seed":"",
        "team1":"Game 7 Winner",
        "team2":"Game 8 Winner",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":12,
        "time":"3:30",
        "team1Seed":"",
        "team2Seed":"",
        "team1":"Game 9 Winner",
        "team2":"Game 10 Winner",
        "teamScore1":"",
        "teamScore2":""
      },
      {
        "game":13,
        "time":"1:00",
        "team1Seed":"",
        "team2Seed":"",
        "team1":"Game 11 Winner",
        "team2":"Game 12 Winner",
        "teamScore1":"",
        "teamScore2":""
      }
    ]
  }
]

// This creates a warning because there is no else condition
function renderGame(bracketItem, gameNumber) {
  return (
    bracketItem.gameData.map( (item, index) => {
      if (item.game === gameNumber) {
        return (
          <Game 
            key={index}
            number={item.game} 
            time={item.time} 
            team1Seed={item.team1Seed} 
            team1={item.team1} 
            team2Seed={item.team2Seed} 
            team2={item.team2} 
            team1Score={item.team1Score} 
            team2Score={item.team2Score} 
          />
        )
      }
    })
  )
} 

class Bracket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bracketName: this.props.bracketName
    };
  }
  render() {
    return (
      <div>
        { bracketData.map( (bracket, index) => (
          <div key={index}>
            <h3 className="mb-3 display-4" id="Official">Bracket - {bracket.name}</h3>
            <div className="row bracket-group">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 7 <span className="badge badge-secondary float-right">2</span></h4>
                <hr />
                { renderGame(bracket, 1) }
                { renderGame(bracket, 2) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 8 <span className="badge badge-secondary float-right">3</span></h4>
                <hr />
                { renderGame(bracket, 3) }
                { renderGame(bracket, 4) }
                { renderGame(bracket, 5) }
                { renderGame(bracket, 6) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 9 <span className="badge badge-secondary float-right">5</span></h4>
                <hr />
                { renderGame(bracket, 7) }
                { renderGame(bracket, 8) }
                { renderGame(bracket, 9) }
                { renderGame(bracket, 10) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 10 <span className="badge badge-secondary float-right">8</span></h4>
                <hr />
                { renderGame(bracket, 11) }
                { renderGame(bracket, 12) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>March 11 <span className="badge badge-secondary float-right">13</span></h4>
                <hr />
                { renderGame(bracket, 13) }
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <h4>Bracket - {this.state.bracketName}</h4>
                <hr/>
                <div className="card game-13">
                  <div className="card-header">Winner</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Team Name</li>
                    <li className="list-group-item">Points: </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Bracket;