import React, { Component } from "react";
import Game from "./Game.js";

const bracketData = [
  {
    "name":"official",
    "data":[
      {
      "date":"march7",
      "data":[
        {
          "game":"1",
          "time":"6:00",
          "teamSeed1":"12",
          "teamSeed2":"13",
          "team1":"La Salle",
          "team2":"Massachusetts",
          "teamScore1":"",
          "teamScore2":""
        },
        {
          "game":"2",
          "time":"8:30",
          "teamSeed1":"11",
          "teamSeed2":"14",
          "team1":"Ge. Washington",
          "team2":"Fordam",
          "teamScore1":"",
          "teamScore2":""
        }
    ]}
  ]}
]

class Brackets extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-3">Brackets</h2>
        <hr />
        <h3 className="mb-3">Bracket - Official</h3>
        <div className="row bracket-group">
          <div className="col">
            <h4>March 7 <span className="badge badge-secondary float-right">2</span></h4>
            <hr />
            <Game number="1" time="6:00 PM" team1Seed="12" team1="La Salle" team2Seed="13" team2="Massachusetts" team1Score="" team2Score="" />
            <Game number="2" time="8:30 PM" team1Seed="11" team1="Ga Washington" team2Seed="14" team2="Fordam" team1Score="" team2Score="" />
          </div>
          <div className="col">
            <h4>March 8 <span className="badge badge-secondary float-right">3</span></h4>
            <hr />
            <Game number="3" time="12:00 PM" team1Seed="8" team1="VCU" team2Seed="9" team2="Dayton" team1Score="" team2Score="" />
            <Game number="4" time="2:30 PM" team1Seed="5" team1="George Mason" team2Seed="" team2="Game 1 Winner" team1Score="" team2Score="" />
            <Game number="5" time="6:00 PM" team1Seed="7" team1="Richmond" team2Seed="10" team2="Duquesne" team1Score="" team2Score="" />
            <Game number="6" time="8:30 PM" team1Seed="6" team1="Saint Louis" team2Seed="" team2="Game 2 Winner" team1Score="" team2Score="" />
          </div>
          <div className="col">
            <h4>March 9 <span className="badge badge-secondary float-right">5</span></h4>
            <hr />
            <Game number="7" time="12:00 PM" team1Seed="1" team1="Rhode Island" team2Seed="" team2="Game 3 Winner" team1Score="" team2Score="" />
            <Game number="8" time="2:30 PM" team1Seed="" team1="Game 4 Winner" team2Seed="4" team2="St. Josephs" team1Score="" team2Score="" />
            <Game number="9" time="6:00 PM" team1Seed="2" team1="St. Bonaventure" team2Seed="" team2="Game 5 Winner" team1Score="" team2Score="" />
            <Game number="10" time="8:30 PM" team1Seed="" team1="Game 6 Winner" team2Seed="2" team2="Davidson" team1Score="" team2Score="" />
          </div>
          <div className="col">
            <h4>March 10 <span className="badge badge-secondary float-right">8</span></h4>
            <hr />
            <Game number="11" time="1:00 PM" team1Seed="" team1="Game 7 Winner" team2Seed="" team2="Game 8 Winner" team1Score="" team2Score="" />
            <Game number="12" time="3:30 PM" team1Seed="" team1="Game 9 Winner" team2Seed="" team2="Game 10 Winner" team1Score="" team2Score="" />
          </div>
          <div className="col">
            <h4>March 11 <span className="badge badge-secondary float-right">13</span></h4>
            <hr />
            <Game number="13" time="1:00 PM" team1Seed="" team1="Game 13 Winner" team2Seed="" team2="Game 12 Winner" team1Score="" team2Score="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Brackets;