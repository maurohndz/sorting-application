import React from "react";
import ReactDOM from "react-dom";
/*___ Redux ____*/
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/index.reducer";
/*___ Containers ___*/
import App from "./containers/app";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
