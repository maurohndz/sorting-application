import React, { Component } from "react";
import { connect } from "react-redux";
/*___ styles ___*/
import "./styles/ButtonAlgorithm.css";
/*___ actions ___*/
import * as utilitiesActions from "../actions/utilitiesActions";
const { updateAlgorithmSelect } = utilitiesActions;

class ButtonAlgorithm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  selectAlgorithm = (key) => {
    this.props.updateAlgorithmSelect(key);
  };

  generateButtons = () => {
    return (
      <div className="typesAlgorithm">
        {this.props.algorithm.map((algo, key) => {
          const setValue = () => {
            //check if the application has an active algorithm
            if (!this.props.working) {
              this.selectAlgorithm(algo.key);
            }
          };
          if (this.props.algorithm_select === algo.key) {
            return (
              <button
                type="button"
                className="u-btn typesAlgorithm-btn select"
                key={key}
                onClick={setValue}
              >
                {algo.title}
              </button>
            );
          } else {
            return (
              <button
                type="button"
                className="u-btn typesAlgorithm-btn"
                key={key}
                onClick={setValue}
              >
                {algo.title}
              </button>
            );
          }
        })}
      </div>
    );
  };

  render() {
    return <React.Fragment> {this.generateButtons()} </React.Fragment>;
  }
}
/*___ mapStateToProps ___*/
const mapStateToProps = ({ dataReducer }) => dataReducer;

const mapDispatchToProps = {
  updateAlgorithmSelect,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAlgorithm);
