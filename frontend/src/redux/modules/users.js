const intialState = {
  isLoggedIn: localStorage.getItem('jwt') || false,
}

function reducer(state = intialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
