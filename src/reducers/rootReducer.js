// set default Redux state
const initialState = {
  people: [],
  peopleNext: "",
  peopleBack: "",
  planets: [],
  planetsNext: "",
  planetsBack: "",
  vehicles: [],
  vehiclesNext: "",
  vehiclesBack: "",
  history: [],
  selected: {}
};

// reducer with cases for Redux
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PEOPLE":
      return { ...state, people: action.payload };
    case "PEOPLE_NEXT":
      return { ...state, peopleNext: action.payload };
    case "PEOPLE_BACK":
      return { ...state, peopleBack: action.payload };
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
    case "SET_SELECTED":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}

export default reducer;
