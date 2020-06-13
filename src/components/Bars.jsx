import React, { Component } from "react";
import { connect } from "react-redux";
/*___ styles ___*/
import "./styles/Bars.css";

class Bars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  showBars = () => {
    return (
      <div className="bars">
        {this.props.values.map((bar, key) => {
          let h_style = {
            height: `${bar}px`,
          };
          return <div className="bars-item" style={h_style} key={key}></div>;
        })}
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.showBars()} </React.Fragment>;
  }
}
/*___ mapStateToProps ___*/
const mapStateToProps = ({ dataReducer }) => dataReducer;

export default connect(mapStateToProps)(Bars);
