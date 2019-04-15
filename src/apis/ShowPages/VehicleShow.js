// fetch to get person information
export function fetchVehicle(matchUrl) {
  console.log(matchUrl);
  return fetch(`https://swapi.co/api${matchUrl}`).then(resp => resp.json());
}

// fetch to get the person's homeworld information
export function fetchPilots(matchUrl) {
  return fetch(matchUrl).then(resp => resp.json());
}
