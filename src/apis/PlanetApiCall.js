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
        // if there is a next key, add it to Redux state
        // so the button knows where to fecth to next
        dispatch({
          type: PLANETS_NEXT,
          payload: planets["next"]
        });
      } else {
        // dispatch to Redux state and set to blank, so that the forward button
        // will not desplay any longer
        dispatch({
          type: PLANETS_NEXT,
          payload: ""
        });
      }
      // if there is a previous key, add it to Redux state
      // so the button knows where to fecth to next
      if (planets.previous) {
        // dispatch to Redux state, and now back btn will display since
        // there is somthing in Redux state to move back to
        dispatch({
          type: PLANETS_BACK,
          payload: planets["previous"]
        });
      } else {
        // dispatch to Redux state and set to blank, so that the back button
        // will not desplay any longer
        dispatch({
          type: PLANETS_BACK,
          payload: ""
        });
      }
    });
}
