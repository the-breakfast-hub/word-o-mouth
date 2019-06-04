const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PLACES":
      return [...action.places];
    default:
      return state;
  }
};

export default reducer;
