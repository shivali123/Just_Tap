import { combineReducers } from "redux";
import { placeReducer } from "./places";
import { inputfields } from "./inputfields";

export default combineReducers({
  places: placeReducer,
  input: inputfields
});
