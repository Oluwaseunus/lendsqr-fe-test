import Layout from "@/components/Layout";
import { render, screen } from "@testing-library/react";

describe("Layout", () => {
  it("renders successfully", () => {
    const { container } = render(<Layout>Hello World</Layout>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    expect(container.getElementsByTagName("nav")).toBeTruthy();
    expect(container.getElementsByTagName("aside")).toBeTruthy();
    expect(container.getElementsByTagName("main")).toBeTruthy();
  });
});
