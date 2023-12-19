import Navbar from "@/components/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders successfully", () => {
    render(<Navbar />);

    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByAltText(/notifications/i)).toBeInTheDocument();
  });
});
