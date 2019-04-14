import React, { useState, useEffect } from "react";

import {
  fetchPerson,
  fetchHomeworld
} from "../../../apis/ShowPages/PersonShow";

// show page for an individual person
const Person = props => {
  // use hook to create initial state of null person
  const [person, setPerson] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // if there is no person, do a fetch based on the url to get the person
    // data from the Star Wars API
    if (!person) {
      // use local url to fetch to API
      fetchPerson(props.match.url).then(character => {
        // update hook state to include person information
        setPerson(character);
      });
    }

    if (person && !homeworld) {
      fetchHomeworld(person.homeworld).then(homeworld => {
        console.log(homeworld);
        setHomeworld(homeworld);
      });
    }
  });

  console.log(person);
  if (person === null) {
    return (
      <img
        src="https://media.giphy.com/media/5wikad3qSOqAg/giphy.gif"
        alt="loading gif"
        className="loadingGif"
      />
    );
  } else {
    return (
      <div className="personShowPage">
        <div className="personShowPageMain">
          <div className="personShowImg">
            <img
              src="https://dummyimage.com/250x250/fff/aaa"
              alt="Star Wars Character"
            />
          </div>
          <div className="personShowName">
            <h1>{person.name}</h1>
          </div>
          <div className="personShowDetails">
            <h3>
              Hair color:{" "}
              {person.hair_color.charAt(0).toUpperCase() +
                person.hair_color.substring(1)}
            </h3>
            <h3>
              Eye color:{" "}
              {person.eye_color.charAt(0).toUpperCase() +
                person.eye_color.substring(1)}
            </h3>
            <h3>Height: {person.height}</h3>
            <h3>
              Gender:{" "}
              {person.gender.charAt(0).toUpperCase() +
                person.gender.substring(1)}
            </h3>
          </div>
        </div>

        <div className="personShowPageRelatedInfo">
          <div className="personHomewold">
            <h2>Homeworld: {homeworld && homeworld.name}</h2>
            <h3>
              Terrain:{" "}
              {homeworld &&
                homeworld.terrain.charAt(0).toUpperCase() +
                  homeworld.terrain.substring(1)}
            </h3>
            <h3>
              Climate:{" "}
              {homeworld &&
                homeworld.climate.charAt(0).toUpperCase() +
                  homeworld.climate.substring(1)}
            </h3>
            <h3>Population: {homeworld && homeworld.population}</h3>
          </div>
          <div className="personVehicles">
            <h3>Vehicles {person.vehicles[0]}</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Person;
