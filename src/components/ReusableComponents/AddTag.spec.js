import React from "react";
import { createStore } from "redux";
import { reducer } from "../../reducers/rootReducer";
import { renderWithRedux } from "../../../TestHelpers/TestHelpers";

import AddTag from "./AddTag";
import { fireEvent } from "@testing-library/dom";

const initialState = {
  tags: []
};

const store = createStore(reducer, initialState);

describe("Components/ReuseableComponents/AddTag", () => {
  it("creates a new tag", () => {
    const { getByLabelText, getByText } = renderWithRedux(
      store,
      <AddTag item={{ url: "test/url/favCharacter" }} />
    );

    const input = getByLabelText("Input tag text");
    expect(input).toBeTruthy();
    fireEvent.change(input, {
      target: { value: "My favorite character" }
    });

    const changeColor = getByLabelText("Select tag color");
    expect(changeColor).toBeTruthy();
    fireEvent.click(changeColor);
    fireEvent.change(changeColor, {
      target: { value: "orange" }
    });

    const createTag = getByText("Add Tag");
    fireEvent.click(createTag);
    expect(createTag).toBeTruthy();
  });

  it("alert is triggered upon click without input value", () => {
    const { getByText } = renderWithRedux(
      store,
      <AddTag item={{ url: "test/url/favCharacter" }} />
    );
    const alertMock = jest.spyOn(window, "alert");

    const createTag = getByText("Add Tag");
    fireEvent.click(createTag);
    expect(createTag).toBeTruthy();
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
