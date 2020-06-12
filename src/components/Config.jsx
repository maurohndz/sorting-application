import React, { Component } from "react";
/*___ Components ___*/
import ButtonAlgorithm from "./ButtonAlgorithm";
import StartApp from "./StartApp";
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
          <ButtonAlgorithm />
          <StartApp />
        </div>
      </React.Fragment>
    );
  }
}

export default Config;
