import React from "react";
import { fireEvent, render } from "@testing-library/react";

import PersonCard from "./PersonCard";

const person = {
  name: "TestName",
  url: "ThisIsATestOfTheEmergencyBroadcastingSystem"
};

const onClick = jest.fn();

describe("Components/People/PersonCard", () => {
  it("renders card with a image and name", () => {
    const { getByText } = render(<PersonCard person={person} />);

    const testName = getByText("TestName");
    expect(testName).toBeTruthy();
  });

  it("reacts to a click", () => {
    const { container, getByText } = render(
      <PersonCard person={person} history={[]} />
    );

    const testName = getByText("TestName");
    fireEvent.click(testName);

    expect(container).toBeTruthy();
  });
});
