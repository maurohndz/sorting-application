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
            height: `${bar.heigth}px`,
            backgroundColor: this.setColor(bar.color),
          };
          return <div className="bars-item" style={h_style} key={key}></div>;
        })}
      </div>
    );
  };

  setColor = (state) => {
    switch (state) {
      case "normal":
        return "var(--bars-color)";

      case "current":
        return "var(--current)";

      case "next":
        return "var(--next)";

      case "done":
        return "var(--green-primary)";

      default:
        console.error(new Error("the status of the bar does not exist"));
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.showBars()}
        {console.log(this.props)}
      </React.Fragment>
    );
  }
}
/*___ mapStateToProps ___*/
const mapStateToProps = ({ dataReducer }) => dataReducer;

export default connect(mapStateToProps)(Bars);
