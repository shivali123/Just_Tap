import React, { Component } from "react";
import { connect } from "react-redux";

import Leftpane from "../components/left-pane";
import Rightpane from "../components/right-pane";
import Addplace from "../components/add-place";
import "../style/containers/app.css";
import Placeapiobject from "../placeapi";

class App extends Component {
  componentDidMount() {
    Placeapiobject.getdata(this.props.dispatch);
  }

  render() {
    return (
      <div className="maincontainer">
        <div className="firstrow">
          <Addplace dispatch={this.props.dispatch} input={this.props.input} />
          <div className="menubar">
            <label className="menutitle">PLACES</label>
          </div>
        </div>
        <div className="secondrow">
          <Leftpane
            places={this.props.places}
            input={this.props.input}
            dispatch={this.props.dispatch}
            centralpoints={this.props.centralpoints}
          />
          <Rightpane
            places={this.props.places}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    );
  }
}
export default connect(store => store)(App);
