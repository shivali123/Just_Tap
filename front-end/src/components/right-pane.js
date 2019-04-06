import React, { Component } from "react";
import { editPlace, editLat, editLng, deletePlace } from "../actions";
import Placeapiobject from "../placeapi";

import "../style/components/right-pane.css";

class Rigtpane extends Component {
  edit(data) {
    this.props.dispatch(editPlace(data.id));
  }

  save(data) {
    this.props.dispatch(editPlace(data.id));
    let obj = {
      lat: data.lat,
      lng: data.lng,
      title: data.title,
      disable: true
    };
    Placeapiobject.update(data._id, obj);
  }

  editLat(data, pl) {
    this.props.dispatch(editLat(pl.id, data.target.value));
  }

  editLng(data, pl) {
    this.props.dispatch(editLng(pl.id, data.target.value));
  }

  deleteL(data) {
    this.props.dispatch(deletePlace(data.id));
    Placeapiobject.del(data._id);
  }

  cancel(data) {
    this.props.dispatch(editPlace(data.id));
    Placeapiobject.getdata(this.props.dispatch);
  }

  inputFields(place) {
    return (
      <div>
        <div>
          <label className="inputText">Lat: </label>
          <input
            type="text"
            name="title"
            className="inputLat"
            placeholder="set place"
            value={place.lat}
            disabled={place.disable}
            onChange={e => this.editLat(e, place)}
          />
        </div>
        <div>
          <label className="inputText">Lng: </label>
          <input
            type="text"
            name="title"
            className="inputLat"
            placeholder="set place"
            value={place.lng}
            disabled={place.disable}
            onChange={e => this.editLng(e, place)}
          />
        </div>
      </div>
    );
  }

  actionButtons(place) {
    return (
      <div>
        {place.disable === true && (
          <div className="buttoncontainer">
            <button
              className="beforeEditbutton"
              onClick={() => this.edit(place)}
            >
              <img src={require("../assets/edit.png")} alt="edit" />
            </button>
            <button
              className="beforeEditbutton"
              onClick={() => this.deleteL(place)}
            >
              <img src={require("../assets/delete.png")} alt="delete" />
            </button>
          </div>
        )}
        {place.disable === false && (
          <div className="buttoncontainer">
            <button
              className="afterEditbutton"
              onClick={() => this.save(place)}
            >
              <img src={require("../assets/save.png")} alt="save" />
            </button>
            <button
              className="afterEditbutton"
              onClick={() => this.cancel(place)}
            >
              <img src={require("../assets/cancel.png")} alt="cancel" />
            </button>
          </div>
        )}
      </div>
    );
  }

  render() {
    let places = this.props.places;
    let box = places.map(place => (
      <div className="box" key={place.id}>
        <div style={{ flexDirection: "row" }}>
          <img src={require("../assets/icon.png")} alt="marker" />
          <label className="text">{place.title}</label>
        </div>
        {this.inputFields(place)}
        {this.actionButtons(place)}
      </div>
    ));
    return (
      <div className="container">
        <div className="scroller">{box}</div>
      </div>
    );
  }
}

export default Rigtpane;
