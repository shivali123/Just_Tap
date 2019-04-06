import * as actions from "./actiontypes";

export const addPlace = obj => ({
  type: actions.ADD_PLACE,
  id: obj.id,
  title: obj.title,
  lat: obj.lat,
  lng: obj.lng,
  disable: obj.disable,
  _id: obj._id
});

export const editPlace = id => ({
  type: actions.EDIT_PLACE,
  id
});

export const editLat = (id, data) => ({
  type: actions.EDIT_LAT,
  id,
  data
});

export const editLng = (id, data) => ({
  type: actions.EDIT_LNG,
  id,
  data
});

export const populatePlaces = data => ({
  type: actions.POPULATE_PLACES,
  data
});

export const deletePlace = id => {
  return {
    type: actions.DELETE_PLACE,
    id
  };
};

export const inputLat = data => ({
  type: actions.LAT_INPUT,
  data
});

export const inputLng = data => ({
  type: actions.LNG_INPUT,
  data
});

export const inputPlace = data => ({
  type: actions.PLACE_INPUT,
  data
});
export const count = data => ({
  type: actions.COUNT,
  data
});
export const emptyStore = () => ({
  type: actions.EMPTY_STORE
});
