// fetch to get person information
export function fetchVehicle(matchUrl) {
  return fetch(`https://swapi.co/api${matchUrl}`).then(resp => resp.json());
}
