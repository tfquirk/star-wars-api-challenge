// fetch to get person information
export function fetchPerson(matchUrl) {
  return fetch(`https://swapi.co/api${matchUrl}`).then(resp => resp.json());
}

// fetch to get the person's homeworld information
export function fetchHomeworld(matchUrl) {
  return fetch(matchUrl).then(resp => resp.json());
}
