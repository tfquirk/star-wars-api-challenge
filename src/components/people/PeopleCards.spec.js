import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../reducers/rootReducer";
import { fireEvent, render } from "@testing-library/react";

import PeopleCards from "./PeopleCards";
import { mapPersonToPeopleCards } from "./PeopleHelpers";

const people = [
  {
    name: "TestName",
    url: "ThisIsATestOfTheEmergencyBroadcastingSystem"
  },
  {
    name: "TestName2",
    url: "ThisIsATestOfTheEmergencyBroadcastingSystem1"
  },
  {
    name: "TestName3",
    url: "ThisIsATestOfTheEmergencyBroadcastingSystem2"
  }
];

const initialState = {
  people: people,
  peopleNext: "/test/go/forward",
  peopleBack: "/test/go/back",
  planets: [],
  planetsNext: "",
  planetsBack: "",
  vehicles: [],
  vehiclesNext: "",
  vehiclesBack: "",
  log: [],
  tags: []
};

const initialState2 = {
  ...initialState,
  peopleNext: "",
  peopleBack: ""
};

const store = createStore(reducer, initialState);
const store2 = createStore(reducer, initialState2);

function renderWithRedux(str, ui, { store = str } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe("Components/People/PeopleCards", () => {
  it("renders cards with a image and name", () => {
    const { getByText } = renderWithRedux(
      store,
      <PeopleCards people={people} />
    );
    expect(getByText("People:")).toBeTruthy();
  });

  it("creates cards for each person", () => {
    const peopleCards = mapPersonToPeopleCards(people);

    expect(peopleCards).toHaveLength(3);
    expect(peopleCards[0].props.person.name).toEqual("TestName");
    expect(peopleCards[1].props.person.name).toEqual("TestName2");
    expect(peopleCards[2].props.person.name).toEqual("TestName3");
  });

  it("back button works", () => {
    const { getByLabelText } = renderWithRedux(store, <PeopleCards />);
    const back = getByLabelText("see previous people");
    expect(back).toBeTruthy();
    fireEvent.click(back);

    const forward = getByLabelText("see more people");
    expect(forward).toBeTruthy();
    fireEvent.click(forward);
  });

  it("renders without forward or back buttons", () => {
    const { queryByLabelText } = renderWithRedux(store2, <PeopleCards />);

    const back = queryByLabelText("see previous people");
    expect(back).toBeFalsy();

    const forward = queryByLabelText("see more people");
    expect(forward).toBeFalsy();
  });
});
