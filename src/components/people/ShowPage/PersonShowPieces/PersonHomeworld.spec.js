import React from "react";
import { render } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import PersonHomeworld from "./PersonHomeworld";

const homeworld = {
  name: "Land of Mystery",
  terrain: "Rough and tumble",
  climate: "Best there ever was",
  population: "Rocks and tumbleweeds",
  url: "https://swapi.co/api/planets/555"
};

describe("Components/people/ShowPage/PersonShowPieces/PersonHomeworld", () => {
  it("Renders homeworld information", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Route exact path="/people/2">
          <PersonHomeworld homeworld={homeworld} />
        </Route>
      </Router>
    );

    const world = getByText("Land of Mystery");
    expect(world).toBeTruthy();

    const terrain = getByText("Terrain: Rough and tumble");
    expect(terrain).toBeTruthy();

    const climate = getByText("Climate: Best there ever was");
    expect(climate).toBeTruthy();

    const population = getByText("Population: Rocks and tumbleweeds");
    expect(population).toBeTruthy();
  });
});
