import { Component } from "react";
import { uri, messages } from "./constants/base";
import { populatePlaces, count, addPlace, emptyStore } from "./actions";
import { toast } from "react-toastify";

export class Placeapi extends Component<> {
  add = (obj, dispatch, input) => {
    dispatch(
      addPlace({
        type: "ADD_PLACE",
        title: "Anonymous",
        id: input.count++,
        lat: obj.lat,
        lng: obj.lng,
        disable: true,
        _id: "null"
      })
    );
    var basepath = `${uri.url}places`;
    fetch(basepath, {
      timeout: 60000,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        this.getdata(dispatch);
        toast.success(messages.success, {
          position: toast.POSITION.TOP_RIGHT
        });
        return response;
      })
      .catch(error => {
        toast.error(error, {
          position: toast.POSITION.TOP_LEFT
        });
      });
  };

  getdata = dispatch => {
    var basepath = `${uri.url}places`;
    fetch(basepath, {
      timeout: 60000,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(response => {
        let id = 0;
        let res = response.map(res => {
          res.id = id++;
          return res;
        });
        dispatch(emptyStore());
        dispatch(populatePlaces(res));
        dispatch(count(res.length));
      })
      .catch(error => {
        toast.error(error, {
          position: toast.POSITION.TOP_LEFT
        });
      });
  };

  del = id => {
    var basepath = `${uri.url}places/${id}`;
    fetch(basepath, {
      timeout: 60000,
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(response => {
        toast.success(messages.delete, {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch(error => {
        toast.error(error, {
          position: toast.POSITION.TOP_LEFT
        });
      });
  };

  update = (id, data) => {
    var basepath = `${uri.url}places/${id}`;
    fetch(basepath, {
      timeout: 60000,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        toast.success(messages.update, {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch(error => {
        toast.error(error, {
          position: toast.POSITION.TOP_LEFT
        });
      });
  };
}

const Placeapiobject = new Placeapi();
export default Placeapiobject;
