import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./containers/app";

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default AppContainer;
