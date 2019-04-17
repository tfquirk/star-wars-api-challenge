// import types to be used with dispatches
import { UPDATE_VEHICLES, VEHICLES_NEXT, VEHICLES_BACK } from "../types/types";

// set API endpoints to hit as constants
const VEHICLES_API = "https://swapi.co/api/vehicles/?page=1";

// fecth to star wars api and get vehicles
export function fetchVehicles(dispatch, endpoint) {
  return fetch(endpoint || VEHICLES_API)
    .then(res => res.json())
    .then(vehicles => {
      // update array of 10 vehicles in Redux state
      dispatch({
        type: UPDATE_VEHICLES,
        payload: vehicles["results"]
      });
      // if there is a next key, add it to Redux state
      // so the button knows where to fecth to next
      if (vehicles.next) {
        // if there is a next key, add it to Redux state
        // so the button knows where to fecth to next
        dispatch({
          type: VEHICLES_NEXT,
          payload: vehicles["next"]
        });
      } else {
        // dispatch to Redux state and set to blank, so that the forward button
        // will not desplay any longer
        dispatch({
          type: VEHICLES_NEXT,
          payload: ""
        });
      }
      // if there is a previous key, add it to Redux state
      // so the button knows where to fecth to next
      if (vehicles.previous) {
        // dispatch to Redux state, and now back btn will display since
        // there is somthing in Redux state to move back to
        dispatch({
          type: VEHICLES_BACK,
          payload: vehicles["previous"]
        });
      } else {
        // dispatch to Redux state and set to blank, so that the back button
        // will not desplay any longer
        dispatch({
          type: VEHICLES_BACK,
          payload: ""
        });
      }
    });
}
