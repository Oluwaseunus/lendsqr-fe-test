import { render, screen } from "@testing-library/react";
import DashboardInfoCard from "@/components/DashboardInfoCard";

describe("DashboardInfoCard", () => {
  it("renders successfully", () => {
    render(
      <DashboardInfoCard
        count={1}
        img="Image"
        title="Title"
        backgroundColor="a"
      />
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Image")).toHaveStyle("backgroundColor: a1a");
  });
});
