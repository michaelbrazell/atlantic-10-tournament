import React, { Component } from "react";
import Bracket from "./Bracket.js";

class Brackets extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h2 className="mb-3">Brackets</h2>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="btn-group float-sm-right" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">Kevin</button>
              <button type="button" className="btn btn-secondary">John</button>
              <button type="button" className="btn btn-secondary">Chris</button>
              <button type="button" className="btn btn-secondary">Mike</button>
            </div>
          </div>
        </div> 
        <hr />
        <Bracket bracketName="Official" />
        <hr />
      </div>
    );
  }
}

export default Brackets;