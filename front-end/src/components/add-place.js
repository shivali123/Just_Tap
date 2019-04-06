import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Inputfields from "./input-fields";
import { inputLat, inputLng, inputPlace } from "../actions";
import { range, messages } from "../constants/base";
import "../style/components/add-place.css";
import "react-toastify/dist/ReactToastify.css";
import Placeapiobject from "../placeapi";
var obj;

export default class Addplace extends React.Component {
  onClick = () => {
    if (
      this.props.input.lat === "" ||
      this.props.input.lng === "" ||
      this.props.input.title === ""
    ) {
      toast.error(messages.inputerror, {
        position: toast.POSITION.TOP_LEFT
      });
      return;
    }
    let latitude = Number(this.props.input.lat);
    let longitude = Number(this.props.input.lng);
    if (
      !(
        latitude >= range.lowerLat &&
        latitude <= range.upperLat &&
        longitude >= range.lowerLng &&
        longitude <= range.upperLng
      )
    ) {
      toast.error(messages.error, {
        position: toast.POSITION.TOP_LEFT
      });
      return;
    }
    let obj = {
      title: this.props.input.title,
      lat: latitude,
      lng: longitude,
      disable: true
    };
    Placeapiobject.add(obj, this.props.dispatch, this.props.input);
    this.updateInputs();
  };

  updateInputs() {
    this.props.dispatch(inputPlace(""));
    this.props.dispatch(inputLat(""));
    this.props.dispatch(inputLng(""));
  }

  handleName(event) {
    obj.props.dispatch(inputPlace(event.target.value));
  }

  handleLatitude(event) {
    obj.props.dispatch(inputLat(event.target.value));
  }

  handleLongitude(event) {
    obj.props.dispatch(inputLng(event.target.value));
  }

  render() {
    obj = this;
    return (
      <div className="head">
        <Inputfields
          handleName={this.handleName}
          handleLatitude={this.handleLatitude}
          handleLongitude={this.handleLongitude}
          input={this.props.input}
        />
        <button className="button" onClick={this.onClick}>
          Add
        </button>
        <ToastContainer autoClose={range.seconds} />
      </div>
    );
  }
}
