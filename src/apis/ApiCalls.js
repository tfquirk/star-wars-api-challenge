// import types to be used with dispatches
import {
  UPDATE_CHARACTERS,
  CHARACTERS_NEXT,
  CHARACTERS_BACK,
  UPDATE_PLANETS,
  UPDATE_VEHICLES,
  UPDATE_HISTORY
} from "../types/types";

// set API endpoints to hit as constants
const CHARACTERS_API = "https://swapi.co/api/people/?page=1";

// fecth to star wars api and get characters
export function fetchCharacters(dispatch, endpoint) {
  return fetch(endpoint || CHARACTERS_API)
    .then(res => res.json())
    .then(characters => {
      // update array of 10 characters in Redux state
      dispatch({
        type: UPDATE_CHARACTERS,
        payload: characters["results"]
      });
      // if there is a next key, add it to Redux state
      // so the button knows where to fecth to next
      if (characters.next) {
        dispatch({
          type: CHARACTERS_NEXT,
          payload: characters["next"]
        });
      } else {
        dispatch({
          type: CHARACTERS_NEXT,
          payload: ""
        });
      }
      // if there is a previous key, add it to Redux state
      // so the button knows where to fecth to next
      if (characters.previous) {
        dispatch({
          type: CHARACTERS_BACK,
          payload: characters["previous"]
        });
      } else {
        dispatch({
          type: CHARACTERS_BACK,
          payload: ""
        });
      }
    });
}
