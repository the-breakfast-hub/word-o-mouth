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
    default:
      return state;
  }
};

export default reducer;
