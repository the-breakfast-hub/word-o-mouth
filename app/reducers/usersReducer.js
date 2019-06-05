<<<<<<< HEAD
import axios from "axios";

const ADD_USER = "ADD_USER";

const addUserActionCreator = user => {
  return { type: ADD_USER, user };
};

export const addNewUser = formData => {
  return async dispatch => {
    try {
      const { data } = await axios.post("/api/users/add", formData);
      dispatch(addUserActionCreator(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.user];
=======
import axios from 'axios';

const GOT_USER = 'GOT_USER';

const gotUser = user => ({
  type: GOT_USER,
  user,
});

export const getMe = () => async dispatch => {
  const { data } = await axios.get('/auth/me');
  dispatch(gotUser(data));
};

export const login = formData => async dispatch => {
  const { data } = await axios.put('/auth/login', formData);
  dispatch(gotUser(data));
};

export const logout = () => async dispatch => {
  await axios.delete('/auth/logout');
  dispatch(gotUser(initialState.user));
};

const initialState = {
  user: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return { ...state, user: action.user };
>>>>>>> ba839b7c228af39c2dc40b02d6aa379835129e21
    default:
      return state;
  }
};

export default reducer;