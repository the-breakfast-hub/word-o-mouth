import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import rootReducer from "./reducers";
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk

const GET_ALL_PLACES = "GET_ALL_PLACES";

const getAllPlacesActionHandler = places => {
  return { type: GET_ALL_PLACES, places };
};

export const getAllPlaces = () => {
  return async dispatch => {
    try {
      const { data } = axios.get("/api/places");
      dispatch(getAllPlacesActionHandler(data));
    } catch (error) {}
  };
};

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
