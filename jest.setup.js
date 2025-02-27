// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <div {...props}>{children}</div>
      )),
    h1: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <h1 {...props}>{children}</h1>
      )),
    h2: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <h2 {...props}>{children}</h2>
      )),
    p: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <p {...props}>{children}</p>
      )),
    span: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <span {...props}>{children}</span>
      )),
    ul: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <ul {...props}>{children}</ul>
      )),
    li: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <li {...props}>{children}</li>
      )),
    a: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <a {...props}>{children}</a>
      )),
    button: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <button {...props}>{children}</button>
      )),
  },
  AnimatePresence: jest.fn().mockImplementation(({ children }) => children),
  useAnimation: jest.fn().mockReturnValue({
    start: jest.fn(),
    stop: jest.fn(),
  }),
}));

// Mock react-intersection-observer
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn().mockReturnValue({
    ref: { current: null },
    inView: false,
    entry: null,
  }),
}));
