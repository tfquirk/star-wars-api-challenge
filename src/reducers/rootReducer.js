// set default Redux state
const initialState = {
  // 10 people/characters will be stored here at a time
  people: [],
  // when this does != "" a forward btn will display for people on the homepage
  peopleNext: "",
  // when this does != "" a back btn will display for people on the homepage
  peopleBack: "",
  // 10 planets will be stored here at a time
  planets: [],
  // when this does != "" a forward btn will display for planets on the homepage
  planetsNext: "",
  // when this does != "" a back btn will display for planets on the homepage
  planetsBack: "",
  // 10 vehicles will be stored here at a time
  vehicles: [],
  // when this does != "" a forward btn will display for vehicles on the homepage
  vehiclesNext: "",
  // when this does != "" a back btn will display for vehicles on the homepage
  vehiclesBack: "",
  // all log items will be recorded here - this happens each time a user visits a new
  // page. Rerenders are not added additional times
  log: [],
  // any tags are stored here, and then only display on pages where the url matches
  tags: []
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
    case "UPDATE_LOG":
      return { ...state, log: [...state.log, action.payload] };
    case "ADD_TAG":
      return { ...state, tags: [...state.tags, action.payload] };
    default:
      return state;
  }
}

export default reducer;
