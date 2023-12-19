import Login from "@/pages/login";
import { fireEvent, render, screen } from "@testing-library/react";

const getItem = jest.fn();
const setItem = jest.fn();

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: getItem,
    setItem: setItem,
    removeItem: jest.fn(),
  },
});

describe("Login", () => {
  it("renders successfully", () => {
    const { debug } = render(<Login />);

    expect(
      screen.getByAltText(/welcome to the login page/i)
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "email@mail.co" },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByText("Log In"));

    expect(setItem).toHaveBeenCalled();
  });
});
