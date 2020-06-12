import React from "react";
import { connect } from "react-redux";
import { generate } from "../actions/generate.action";
import { bubbleSort } from "../actions/bubble.sort";
/*___ Components ___*/
import Config from "../components/Config";
/*___ Styles ___*/
import "./styles/Global.css";

class App extends React.Component {
  componentWillMount() {
    this.props.generate();
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Config />
        </div>
      </React.Fragment>
    );
  }
}
const mapSatatToProps = ({ dataReducer }) => dataReducer;

export default connect(mapSatatToProps, { generate, bubbleSort })(App);
