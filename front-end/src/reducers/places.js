export const placeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLACE":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          lat: action.lat,
          lng: action.lng,
          disable: action.disable,
          _id: action._id
        }
      ];

    case "EDIT_PLACE":
      return state.map(
        obj => (obj.id === action.id ? { ...obj, disable: !obj.disable } : obj)
      );
    case "DELETE_PLACE":
      return state.filter(obj => obj.id !== action.id);
    case "EDIT_LAT":
      return state.map(
        obj => (obj.id === action.id ? { ...obj, lat: action.data } : obj)
      );
    case "EDIT_LNG":
      return state.map(
        obj => (obj.id === action.id ? { ...obj, lng: action.data } : obj)
      );
    case "POPULATE_PLACES":
      return [...state, ...action.data];
    case "EMPTY_STORE":
      return [];
    default:
      return state;
  }
};
