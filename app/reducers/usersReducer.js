import axios from "axios";

const GOT_USER = "GOT_USER";
const ADD_USER = "ADD_USER";

const gotUser = user => ({
  type: GOT_USER,
  user
});

const addUserActionHandler = user => {
  return { type: ADD_USER, user };
};

export const addUser = formData => async dispatch => {
  const { data } = await axios.post("/api/users/add", formData);
  dispatch(gotUser(data));
};

export const getMe = () => async dispatch => {
  const { data } = await axios.get("/auth/me");
  dispatch(gotUser(data));
};

export const login = formData => async dispatch => {
  const { data } = await axios.put("/auth/login", formData);
  dispatch(gotUser(data));
};

export const logout = () => async dispatch => {
  await axios.delete("/auth/logout");
  dispatch(gotUser(initialState.user));
};

const initialState = {
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;
