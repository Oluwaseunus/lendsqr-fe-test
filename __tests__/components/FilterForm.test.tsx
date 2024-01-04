import FilterForm from "@/components/FilterForm";
import FilterProvider from "@/components/FilterForm/FilterProvider";
import { render, screen } from "@testing-library/react";

describe("FilterForm", () => {
  it("renders successfully", () => {
    const func = jest.fn();
    render(
      <FilterProvider>
        <FilterForm handleClickAway={func} />
      </FilterProvider>
    );

    expect(screen.getByText(/organization/i)).toBeInTheDocument();
  });
});
