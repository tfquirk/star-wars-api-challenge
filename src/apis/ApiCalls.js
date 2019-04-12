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
      console.log(characters);
      dispatch({
        type: UPDATE_CHARACTERS,
        payload: characters["results"]
      });
      if (characters.next) {
        dispatch({
          type: CHARACTERS_NEXT,
          payload: characters["next"]
        });
      }
      if (characters.previous) {
        dispatch({
          type: CHARACTERS_BACK,
          payload: characters["previous"]
        });
      }
    });
}
