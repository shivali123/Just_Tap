import React from "react";
import "../style/components/add-place.css";

export default class Inputfields extends React.Component {
  render() {
    return (
      <div className="head">
        <input
          className="input"
          type="text"
          name="latitude"
          value={this.props.input.lat}
          placeholder="lat.."
          onChange={this.props.handleLatitude.bind(this)}
        />
        <input
          type="text"
          name="longitude"
          className="input"
          value={this.props.input.lng}
          placeholder="lng.."
          onChange={this.props.handleLongitude.bind(this)}
        />
        <input
          type="text"
          name="title"
          className="input"
          placeholder="place.."
          value={this.props.input.title}
          onChange={this.props.handleName.bind(this)}
        />
      </div>
    );
  }
}
