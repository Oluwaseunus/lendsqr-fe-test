import FilterForm from "@/components/FilterForm";
import { render, screen } from "@testing-library/react";

describe("FilterForm", () => {
  it("renders successfully", () => {
    const func = jest.fn();
    render(<FilterForm handleClickAway={func} />);

    expect(screen.getByText(/organization/i)).toBeInTheDocument();
  });
});
