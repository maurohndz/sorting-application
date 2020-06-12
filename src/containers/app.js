import React from "react";
import { connect } from "react-redux";
import { generate } from "../actions/generate.action";
import { bubbleSort } from "../actions/bubble.sort";
class App extends React.Component {
  componentWillMount() {
    this.props.generate();
  }
  render() {
    return (
      <div>
        {console.log(this.props.values)}
        Hola
        <button onClick={this.props.bubbleSort}>ok</button>
      </div>
    );
  }
}
const mapSatatToProps = ({ dataReducer }) => dataReducer;

export default connect(mapSatatToProps, { generate, bubbleSort })(App);
