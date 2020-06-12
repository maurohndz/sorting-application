import React, { Component } from "react";
/*___ Components ___*/
import TypesAlgorithm from "./TypesAlgorithm";
/*___ Styles ___*/
import "./styles/Config.css";

class Config extends Component {
  types_Algorithm = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="config">
          <h1 className="config-title">
            Sorting
            <br />
            Algorithm
          </h1>
          <TypesAlgorithm />
        </div>
      </React.Fragment>
    );
  }
}

export default Config;
