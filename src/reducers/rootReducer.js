// set default Redux state
const initialState = {
  characters: [],
  planets: [],
  vehicles: []
};

// reducer with cases for Redux
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CHARACTERS":
      return { ...state, characters: action.payload };
    case "UPDATE_PLANETS":
      return { ...state, planets: action.payload };
    case "UPDATE_VEHICLES":
      return { ...state, vehicles: action.payload };
    default:
      return state;
  }
}

export default reducer;
