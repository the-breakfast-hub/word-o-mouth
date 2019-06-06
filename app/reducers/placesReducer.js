import axios from "axios";

const GET_SEACH_PLACES = "GET_SEARCH_PLACES";

const getSearchPlacesActionHandler = places => ({
    type: GET_SEACH_PLACES, 
    places 
  })



export const getSearchPlaces = formData => {
  return async dispatch => {
    try {
      const { data } = await axios.put("/api/places", formData);
      dispatch(getSearchPlacesActionHandler(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEACH_PLACES:
      return [...action.places];
    default:
      return state;
  }
};

export default reducer;
