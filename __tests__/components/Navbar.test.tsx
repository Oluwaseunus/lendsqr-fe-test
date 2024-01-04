import Navbar from "@/components/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders successfully", () => {
    render(<Navbar showSidebar={true} setShowSidebar={jest.fn()} />);

    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByAltText(/notifications/i)).toBeInTheDocument();
  });

  it("calls the setShowSidebar function", () => {
    const setShowSidebar = jest.fn();
    render(<Navbar showSidebar={true} setShowSidebar={setShowSidebar} />);

    fireEvent.click(screen.getByAltText("Show Sidebar"));
    expect(setShowSidebar).toHaveBeenCalled();
  });
});
