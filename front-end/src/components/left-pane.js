import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { style } from "../style/components/left-pane.js";
import { toast } from "react-toastify";
import markerok from "../assets/loading.gif";
import { messages, range, apikey } from "../constants/base";
import "react-toastify/dist/ReactToastify.css";
import Placeapiobject from "../placeapi";

export class Leftpane extends Component {
  addMarker = location => {
    if (this.verifyLocation(location) === true) {
      let obj = {
        title: "Anonymous",
        lat: location.latLng.lat(),
        lng: location.latLng.lng(),
        disable: true
      };
      Placeapiobject.add(obj, this.props.dispatch, this.props.input);
    } else {
      toast.error(messages.error, {
        position: toast.POSITION.TOP_LEFT
      });
    }
  };

  verifyLocation(location) {
    let lat = location.latLng.lat();
    let lng = location.latLng.lng();
    if (
      lat >= range.lowerLat &&
      lat <= range.upperLat &&
      lng >= range.lowerLng &&
      lng <= range.upperLng
    ) {
      return true;
    }
  }

  markers() {
    let marker = [];
    this.props.places.map(place => {
      marker.push(
        <Marker
          title={place.title}
          icon={{
            url: markerok,
            strokeColor: "blue",
            scale: 10
          }}
          position={{
            lat: place.lat,
            lng: place.lng
          }}
        />
      );
      return marker;
    });
    return marker;
  }

  render() {
    return (
      <Map
        style={style}
        provider={this.props.provider}
        initialCenter={{
          lat: range.centerLat,
          lng: range.centerLng
        }}
        onClick={(t, map, c) => this.addMarker(c)}
        google={this.props.google}
        zoom={range.zoom}
      >
        {this.markers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apikey.API_KEY
})(Leftpane);
