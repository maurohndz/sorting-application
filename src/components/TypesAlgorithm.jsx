import React, { Component } from "react";
import { connect } from "react-redux";
/*___ ___*/

class TypesAlgorithm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  selectAlgorithm = (key) => {
    console.log(key);
  };

  generateButtons = () => {
    return (
      <div className="typesAlgorithm">
        {this.props.algorithm.map((algo, key) => {
          const setValue = () => {
            this.selectAlgorithm(algo.key);
          };
          if (this.props.algorithm_select === algo.key) {
            return (
              <button
                type="button"
                className="typesAlgorithm-btn select"
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
                className="typesAlgorithm-btn"
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

export default connect(mapStateToProps)(TypesAlgorithm);
