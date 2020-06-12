import React, { Component } from "react";

class StartApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="StartApp">
          <button type="button" className="u-btn">
            Sorting
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default StartApp;
