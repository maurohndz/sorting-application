import React, { Component } from "react";
import { connect } from "react-redux";
/*___ styles ___*/
import "./styles/StartApp.css";
/*___ actions ___*/
import { bubbleSort } from "../actions/bubbleSort";
import { updateWorking } from "../actions/utilitiesActions";

class StartApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  startSorting = () => {
    //check if the application has an active algorithm
    if (!this.props.working) {
      this.props.updateWorking(); //change application status
      let algorithm = this.props.algorithm_select;
      // select algorithm
      switch (algorithm) {
        case "bubble":
          this.props.bubbleSort();
          break;
        default:
          console.error(new Error("the algorithm does not exist"));
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="StartApp">
          <button
            type="button"
            className="u-btn startApp-btn"
            onClick={this.startSorting}
          >
            Sorting
          </button>
        </div>
      </React.Fragment>
    );
  }
}
/*___ mapStateToProps ___*/
const mapStateToProps = ({ dataReducer }) => dataReducer;
/*___ mapDispatchToProps ___*/
const mapDispatchToProps = { bubbleSort, updateWorking };

export default connect(mapStateToProps, mapDispatchToProps)(StartApp);
