import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  const text = "Hello World";

  it("renders its content", () => {
    render(<Button variant="primary">{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("calls the functions passed to it", () => {
    const func = jest.fn();
    render(
      <Button variant="primary" onClick={func}>
        A
      </Button>
    );

    screen.getByText("A").click();
    expect(func).toHaveBeenCalled();
  });
});
