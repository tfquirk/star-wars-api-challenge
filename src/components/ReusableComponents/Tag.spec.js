import React from "react";
import Tag from "./Tag";
import { render } from "@testing-library/react";

describe("Components/ReuseableComponents/Tag", () => {
  it("Renders a tag", () => {
    const { getByText } = render(
      <Tag tagColor="orange" tagName="This is a test" />
    );

    const tag = getByText("THIS IS A TEST");
    expect(tag).toBeTruthy();
    expect(tag.parentElement).toHaveStyleRule("color", "orange");
  });

  it("Renders properly colored tag", () => {
    const { getByText } = render(
      <Tag tagColor="red" tagName="This is a test" />
    );

    const tag = getByText("THIS IS A TEST");
    expect(tag).toBeTruthy();
    expect(tag.parentElement).toHaveStyleRule("color", "red");
  });
});
