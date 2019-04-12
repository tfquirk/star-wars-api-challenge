// set default Redux state
const initialState = {
  characters: [],
  charactersNext: "",
  charactersBack: "",
  planets: [],
  planetsNext: "",
  planetsBack: "",
  vehicles: [],
  vehiclesNext: "",
  vehiclesBack: "",
  history: []
};

// reducer with cases for Redux
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CHARACTERS":
      return { ...state, characters: action.payload };
    case "CHARACTERS_NEXT":
      return { ...state, charactersNext: action.payload };
    case "CHARACTERS_BACK":
      return { ...state, charactersBack: action.payload };
    case "UPDATE_PLANETS":
      return { ...state, planets: action.payload };
    case "PLANETS_NEXT":
      return { ...state, planetsNext: action.payload };
    case "PLANETS_BACK":
      return { ...state, planetsBack: action.payload };
    case "UPDATE_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "VEHICLES_NEXT":
      return { ...state, vehiclesNext: action.payload };
    case "VEHICLES_BACK":
      return { ...state, vehiclesBack: action.payload };
    case "UPDATE_HISTORY":
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
}

export default reducer;
