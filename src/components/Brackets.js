import React, { Component } from "react";
import Game from "./Game.js";

class Brackets extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-3">Brackets</h2>
        <div class="row">
          <div class="col">
            <h3>Round 1</h3>
            <p>Points: 2</p>
          </div>
          <div class="col">
            <h3>Round 2</h3>
            <p>Points: 3</p>
          </div>
          <div class="col">
            <h3>Round 3</h3>
            <p>Points: 5</p>
          </div>
          <div class="col">
            <h3>Round 4</h3>
            <p>Points: 8</p>
          </div>
          <div class="col">
            <h3>Round 5</h3>
            <p>Points: 13</p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <Game number="1" time="6:00 PM" team1Seed="12" team1="La Salle" team2Seed="13" team2="Massachusetts" team1Score="" team2Score="" />
            <Game number="2" time="8:30 PM" team1Seed="11" team1="Ga Washington" team2Seed="14" team2="Fordam" team1Score="" team2Score="" />
          </div>
          <div class="col">
            <Game number="3" time="12:00 PM" team1Seed="8" team1="VCU" team2Seed="9" team2="Dayton" team1Score="" team2Score="" />
            <Game number="4" time="2:30 PM" team1Seed="5" team1="VCU" team2Seed="" team2="Game 1 Winner" team1Score="" team2Score="" />
            <Game number="5" time="6:00 PM" team1Seed="7" team1="Richmond" team2Seed="10" team2="Duquesne" team1Score="" team2Score="" />
            <Game number="6" time="8:30 PM" team1Seed="6" team1="Saint Louis" team2Seed="" team2="Game 2 Winner" team1Score="" team2Score="" />
          </div>
          <div class="col">
            <Game number="7" time="12:00 PM" team1Seed="1" team1="Rhode Island" team2Seed="" team2="Game 3 Winner" team1Score="" team2Score="" />
            <Game number="8" time="2:30 PM" team1Seed="" team1="Game 4 Winner" team2Seed="4" team2="St. Josephs" team1Score="" team2Score="" />
            <Game number="9" time="6:00 PM" team1Seed="2" team1="St. Bonaventure" team2Seed="" team2="Game 5 Winner" team1Score="" team2Score="" />
            <Game number="10" time="8:30 PM" team1Seed="" team1="Game 6 Winner" team2Seed="2" team2="Davidson" team1Score="" team2Score="" />
          </div>
          <div class="col">
            <Game number="11" time="1:00 PM" team1Seed="" team1="Game 7 Winner" team2Seed="" team2="Game 8 Winner" team1Score="" team2Score="" />
            <Game number="12" time="3:30 PM" team1Seed="" team1="Game 9 Winner" team2Seed="" team2="Game 10 Winner" team1Score="" team2Score="" />
          </div>
          <div class="col">
            <Game number="13" time="1:00 PM" team1Seed="" team1="Game 13 Winner" team2Seed="" team2="Game 12 Winner" team1Score="" team2Score="" />
          </div>
          
        </div>
      </div>
    );
  }
}

export default Brackets;