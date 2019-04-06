const initialState = {
  lat: "",
  lng: "",
  title: "",
  count: 0
};

export const inputfields = (state = initialState, action) => {
  switch (action.type) {
    case "LAT_INPUT":
      return {
        ...state,
        lat: action.data
      };
    case "LNG_INPUT":
      return {
        ...state,
        lng: action.data
      };
    case "PLACE_INPUT":
      return {
        ...state,
        title: action.data
      };
    case "COUNT":
      return {
        ...state,
        count: action.data
      };
    default:
      return state;
  }
};
