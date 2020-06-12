import React from "react";
import { connect } from "react-redux";

/*___ Components ___*/
import Config from "../components/Config";
/*___ Styles ___*/
import "./styles/Global.css";

class App extends React.Component {
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

export default connect(mapSatatToProps)(App);
