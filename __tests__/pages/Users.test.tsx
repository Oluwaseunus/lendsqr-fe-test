import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Users from "../../src/pages/dashboard/users";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Users />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
