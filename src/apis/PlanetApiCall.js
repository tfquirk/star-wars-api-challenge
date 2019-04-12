// import types to be used with dispatches
import { UPDATE_PLANETS, PLANETS_NEXT, PLANETS_BACK } from "../types/types";

// set API endpoints to hit as constants
const PLANETS_API = "https://swapi.co/api/planets/?page=1";

// fecth to star wars api and get characters
export function fetchPlanets(dispatch, endpoint) {
  return fetch(endpoint || PLANETS_API)
    .then(res => res.json())
    .then(planets => {
      // update array of 10 characters in Redux state
      dispatch({
        type: UPDATE_PLANETS,
        payload: planets["results"]
      });
      // if there is a next key, add it to Redux state
      // so the button knows where to fecth to next
      if (planets.next) {
        dispatch({
          type: PLANETS_NEXT,
          payload: planets["next"]
        });
      } else {
        dispatch({
          type: PLANETS_NEXT,
          payload: ""
        });
      }
      // if there is a previous key, add it to Redux state
      // so the button knows where to fecth to next
      if (planets.previous) {
        dispatch({
          type: PLANETS_BACK,
          payload: planets["previous"]
        });
      } else {
        dispatch({
          type: PLANETS_BACK,
          payload: ""
        });
      }
    });
}
