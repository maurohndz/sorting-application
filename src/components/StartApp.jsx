import React, { Component } from "react";
/*___ styles ___*/
import "./styles/StartApp.css";

class StartApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="StartApp">
          <button type="button" className="u-btn startApp-btn">
            Sorting
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default StartApp;
