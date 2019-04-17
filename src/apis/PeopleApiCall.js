// import types to be used with dispatches
import { UPDATE_PEOPLE, PEOPLE_NEXT, PEOPLE_BACK } from "../types/types";

// set API endpoints to hit as constants
const PEOPLE_API = "https://swapi.co/api/people/?page=1";

// fecth to star wars api and get people
export function fetchPeople(dispatch, endpoint) {
  return fetch(endpoint || PEOPLE_API)
    .then(res => res.json())
    .then(people => {
      // update array of 10 people in Redux state
      dispatch({
        type: UPDATE_PEOPLE,
        payload: people["results"]
      });
      // if there is a next key, add it to Redux state
      // so the button knows where to fecth to next
      if (people.next) {
        // if there is a next key, add it to Redux state
        // so the button knows where to fecth to next
        dispatch({
          type: PEOPLE_NEXT,
          payload: people["next"]
        });
      } else {
        // dispatch to Redux state and set to blank, so that the forward button
        // will not desplay any longer
        dispatch({
          type: PEOPLE_NEXT,
          payload: ""
        });
      }
      // if there is a previous key, add it to Redux state
      // so the button knows where to fecth to next
      if (people.previous) {
        // dispatch to Redux state, and now back btn will display since
        // there is somthing in Redux state to move back to
        dispatch({
          type: PEOPLE_BACK,
          payload: people["previous"]
        });
      } else {
        // dispatch to Redux state and set to blank, so that the back button
        // will not desplay any longer
        dispatch({
          type: PEOPLE_BACK,
          payload: ""
        });
      }
    });
}
