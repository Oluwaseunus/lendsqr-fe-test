import "@testing-library/jest-dom";

jest.mock(
  "next/font/local",
  () =>
    function () {
      return {
        style: {
          fontFamily: "my_font",
        },
      };
    }
);

jest.mock(
  "next/font/google",
  () =>
    function () {
      return {
        style: {
          fontFamily: "my_font",
        },
      };
    }
);

jest.mock("next/dist/client/router", () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: "/",
    asPath: "/",
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }),
}));
