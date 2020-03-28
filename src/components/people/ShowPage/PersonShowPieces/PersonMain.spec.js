import React from "react";
import { render } from "@testing-library/react";
import PersonMain from "./PersonMain";

const person = {
  name: "Test Person",
  hair_color: "Made up color",
  eye_color: "Strange made up color",
  height: "Very very tall",
  gender: "something"
};

const tags = [
  {
    key: "IAMAKEY",
    tagColor: "blue",
    tagName: "I am blue and therefore sad"
  },
  {
    key: "IAMAKEYTWO",
    tagColor: "red",
    tagName: "I am red and therefore angry"
  }
];

describe("Components/people/ShowPage/PersonShowPieces/PersonMain", () => {
  it("Renders placeholder image", () => {
    const { getByRole } = render(<PersonMain person={person} tags={[]} />);

    const img = getByRole("img");
    expect(img).toBeTruthy();
    expect(img.src).toBe("https://dummyimage.com/250x250/fff/aaa");
  });

  it("Renders person information", () => {
    const { getByText } = render(<PersonMain person={person} tags={[]} />);

    const name = getByText("Test Person");
    expect(name).toBeTruthy();

    const hairColor = getByText("Hair color: Made up color");
    expect(hairColor).toBeTruthy();

    const eyeColor = getByText("Eye color: Strange made up color");
    expect(eyeColor).toBeTruthy();

    const height = getByText("Height: Very very tall");
    expect(height).toBeTruthy();

    const gender = getByText("Gender: Something");
    expect(gender).toBeTruthy();
  });

  it("Renders a person's tags", () => {
    const { getByText, getAllByTestId } = render(
      <PersonMain person={person} tags={tags} />
    );

    const tagText = getByText("I AM BLUE AND THEREFORE SAD");
    expect(tagText).toBeTruthy();
    const allTags = getAllByTestId("TAG");
    expect(allTags).toHaveLength(2);
  });
});
