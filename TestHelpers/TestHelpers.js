import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export function renderWithRedux(str, ui, { store = str } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
