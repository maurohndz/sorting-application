import React, { Component } from "react";
import { connect } from "react-redux";
/*___ styles ___*/
import "./styles/Range.css";

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="range">
          <input type="range" className="range-input" min="-10" max="10" />
        </div>
      </React.Fragment>
    );
  }
}
/*___ mapStateToProps ___*/
const mapStateToProps = ({ dataReducer }) => dataReducer;

export default connect(mapStateToProps)(Range);
