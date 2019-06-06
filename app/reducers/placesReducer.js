import axios from 'axios';

const GET_SEARCH_PLACES = 'GET_SEARCH_PLACES';
const GOT_USERS_PLACES = 'GOT_PLACES';


const getSearchPlacesActionHandler = places => {
  return { type: GET_SEARCH_PLACES, places };
};
const gotUsersPlaces = places => ({
  type: GOT_USERS_PLACES,
  places,
});

export const getSearchPlaces = formData => {
  return async dispatch => {
    try {
      const { data } = await axios.put('/api/places', formData);
      dispatch(getSearchPlacesActionHandler(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsersPlaces = id => async dispatch => {
  const { data } = await axios.get(`/api/places/${id}`);
  dispatch(gotUsersPlaces(data));
};

const initialState = {
  myPlaces: [],
  selectedPlace: {},
  searchPlaces: [],
  myFriendsPlaces: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PLACES:
      return { ...state, searchPlaces: action.searchPlaces };
    case GOT_USERS_PLACES:
      return { ...state, myPlaces: action.places, loading: false };
    default:
      return state;
  }
};

export default reducer;
