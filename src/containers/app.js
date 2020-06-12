import React from "react";
import { connect } from "react-redux";
import { generate } from "../actions/generate.action";
class App extends React.Component {
  componentWillMount() {
    this.props.generate();
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        Hola
      </div>
    );
  }
}
const mapSatatToProps = ({ dataReducer }) => dataReducer;

export default connect(mapSatatToProps, { generate })(App);
