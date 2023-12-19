import React from "react";
import withAuth from "@/components/withAuth";
import { render } from "@testing-library/react";

const getItem = jest.fn();
const setItem = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: getItem,
    setItem: setItem,
    removeItem: jest.fn(),
  },
});

describe("withAuth", () => {
  it("fetches the authentication from local storage", () => {
    jest.spyOn(React, "useEffect").mockImplementation((callback) => callback());

    render(withAuth(<p>Hello</p>));

    expect(getItem).toHaveBeenCalled();
  });
});
