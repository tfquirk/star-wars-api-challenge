// import types to be used with dispatches
import { UPDATE_VEHICLES, VEHICLES_NEXT, VEHICLES_BACK } from "../types/types";

// set API endpoints to hit as constants
const VEHICLES_API = "https://swapi.co/api/spaceships/?page=1";

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
        dispatch({
          type: VEHICLES_NEXT,
          payload: vehicles["next"]
        });
      } else {
        dispatch({
          type: PLANETS_NEXT,
          payload: ""
        });
      }
      // if there is a previous key, add it to Redux state
      // so the button knows where to fecth to next
      if (vehicles.previous) {
        dispatch({
          type: PLANETS_BACK,
          payload: vehicles["previous"]
        });
      } else {
        dispatch({
          type: PLANETS_BACK,
          payload: ""
        });
      }
    });
}
