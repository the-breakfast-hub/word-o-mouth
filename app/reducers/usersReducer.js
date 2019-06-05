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
    default:
      return state;
  }
};

export default reducer;