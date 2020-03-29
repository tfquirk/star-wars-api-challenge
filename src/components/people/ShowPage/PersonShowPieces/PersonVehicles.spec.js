import React from "react";
import { render } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import PersonVehicles from "./PersonVehicles";

const personOne = {
  name: "Boba Fett",
  height: "183",
  mass: "78.2",
  hair_color: "black",
  skin_color: "fair",
  eye_color: "brown",
  birth_year: "31.5BBY",
  gender: "male",
  homeworld: "https://swapi.co/api/planets/10/",
  vehicles: []
};

const personTwo = {
  name: "Anakin Skywalker",
  height: "188",
  mass: "84",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "41.9BBY",
  gender: "male",
  homeworld: "https://swapi.co/api/planets/1/",
  vehicles: [
    {
      name: "Zephyr-G swoop bike",
      manufacturer: "Mobquet Swoops and Speeders",
      vehicle_class: "repulsorcraft",
      url: "https://swapi.co/api/vehicles/44/"
    },
    {
      name: "XJ-6 airspeeder",
      manufacturer: "Narglatch AirTech prefabricated kit",
      vehicle_class: "airspeeder",
      url: "https://swapi.co/api/vehicles/46/"
    }
  ]
};

const history = createMemoryHistory();

describe("Components/people/ShowPage/PersonShowPieces/PersonVehicles", () => {
  it("Renders a person with no vehicles", () => {
    const { getByText } = render(
      <Router history={history}>
        <Route exact path="/people/22">
          <PersonVehicles person={personOne} vehicles={personOne.vehicles} />
        </Route>
      </Router>
    );

    const headline = getByText("Vehicle(s):");
    expect(headline).toBeTruthy();

    const disclaimer = getByText("Boba Fett does not have any vehicles.");
    expect(disclaimer).toBeTruthy();
  });

  it("Renders person's list of vehicles", () => {
    const { getByText, queryByText } = render(
      <Router history={history}>
        <Route exact path="/people/11">
          <PersonVehicles person={personTwo} vehicles={personTwo.vehicles} />
        </Route>
      </Router>
    );

    const headline = getByText("Vehicle(s):");
    expect(headline).toBeTruthy();

    const vehicleOne = getByText("Zephyr-G swoop bike");
    expect(vehicleOne).toBeTruthy();

    const vehicleTwo = getByText("XJ-6 airspeeder");
    expect(vehicleTwo).toBeTruthy();

    const disclaimer = queryByText(
      "Anakin Skywalker does not have any vehicles."
    );
    expect(disclaimer).toBeFalsy();
  });

  it("Renders nothing because vehicle api call has not yet returned anything", () => {
    const { getByText, queryByText } = render(
      <Router history={history}>
        <Route exact path="/people/11">
          <PersonVehicles person={personTwo} vehicles={[]} />
        </Route>
      </Router>
    );

    const headline = getByText("Vehicle(s):");
    expect(headline).toBeTruthy();

    const vehicleOne = queryByText("Zephyr-G swoop bike");
    expect(vehicleOne).toBeFalsy();

    const vehicleTwo = queryByText("XJ-6 airspeeder");
    expect(vehicleTwo).toBeFalsy();

    const disclaimer = queryByText(
      "Anakin Skywalker does not have any vehicles."
    );
    expect(disclaimer).toBeFalsy();
  });

  it("Renders nothing when api call returns bad data", () => {
    const { getByText, queryByText } = render(
      <Router history={history}>
        <Route exact path="/people/11">
          <PersonVehicles
            person={personTwo}
            vehicles={[undefined, undefined]}
          />
        </Route>
      </Router>
    );

    const headline = getByText("Vehicle(s):");
    expect(headline).toBeTruthy();

    const vehicleOne = queryByText("Zephyr-G swoop bike");
    expect(vehicleOne).toBeFalsy();

    const vehicleTwo = queryByText("XJ-6 airspeeder");
    expect(vehicleTwo).toBeFalsy();

    const disclaimer = queryByText(
      "Anakin Skywalker does not have any vehicles."
    );
    expect(disclaimer).toBeFalsy();
  });
});
