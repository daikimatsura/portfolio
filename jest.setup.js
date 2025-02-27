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

// Mock @radix-ui/react-slot
jest.mock("@radix-ui/react-slot", () => ({
  Slot: jest.fn().mockImplementation(({ children, ...props }) => {
    // 簡易的な実装: 子要素にpropsを転送
    if (children && typeof children === "object") {
      return { ...children, props: { ...children.props, ...props } };
    }
    return children;
  }),
}));

// Mock class-variance-authority
jest.mock("class-variance-authority", () => ({
  cva: (base, options) => {
    return ({ variant, size, className }) => {
      // ボタンのバリアントに基づいてクラスを生成
      let variantClasses = "";
      if (variant === "default" || !variant) {
        variantClasses =
          "bg-primary text-primary-foreground hover:bg-primary/90";
      } else if (variant === "destructive") {
        variantClasses =
          "bg-destructive text-destructive-foreground hover:bg-destructive/90";
      } else if (variant === "outline") {
        variantClasses =
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
      } else if (variant === "secondary") {
        variantClasses =
          "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      } else if (variant === "ghost") {
        variantClasses = "hover:bg-accent hover:text-accent-foreground";
      } else if (variant === "link") {
        variantClasses = "text-primary underline-offset-4 hover:underline";
      }

      // ボタンのサイズに基づいてクラスを生成
      let sizeClasses = "";
      if (size === "default" || !size) {
        sizeClasses = "h-10 px-4 py-2";
      } else if (size === "sm") {
        sizeClasses = "h-9 rounded-md px-3";
      } else if (size === "lg") {
        sizeClasses = "h-11 rounded-md px-8";
      } else if (size === "icon") {
        sizeClasses = "h-10 w-10";
      }

      // 基本クラス、バリアントクラス、サイズクラス、カスタムクラスを結合
      return [base, variantClasses, sizeClasses, className]
        .filter(Boolean)
        .join(" ");
    };
  },
}));

// Mock @/lib/utils
jest.mock("@/lib/utils", () => ({
  cn: (...inputs) => {
    // 簡易的な実装: 入力された文字列を結合して返す
    return inputs.filter(Boolean).join(" ");
  },
}));

// 共通のモックリファレンス
const mockRef = { current: null };

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <div {...props}>{children}</div>
      )),
    h1: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <h1 {...props}>{children}</h1>
      )),
    h2: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <h2 {...props}>{children}</h2>
      )),
    h3: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <h3 {...props}>{children}</h3>
      )),
    p: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <p {...props}>{children}</p>
      )),
    span: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <span {...props}>{children}</span>
      )),
    ul: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <ul {...props}>{children}</ul>
      )),
    li: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <li {...props}>{children}</li>
      )),
    a: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <a {...props}>{children}</a>
      )),
    button: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <button {...props}>{children}</button>
      )),
    section: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <section {...props}>{children}</section>
      )),
    footer: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <footer {...props}>{children}</footer>
      )),
    header: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <header {...props}>{children}</header>
      )),
    nav: jest
      .fn()
      .mockImplementation(({ children, whileHover, whileTap, ...props }) => (
        <nav {...props}>{children}</nav>
      )),
  },
  AnimatePresence: jest.fn().mockImplementation(({ children }) => children),
  useAnimation: jest.fn().mockReturnValue({
    start: jest.fn(),
    stop: jest.fn(),
  }),
  useInView: jest.fn().mockReturnValue([mockRef, true]),
}));

// Mock react-intersection-observer
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn().mockReturnValue({
    ref: mockRef,
    inView: true,
    entry: null,
  }),
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, target, ...props }) => (
    <a href={href} target={target} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock for lucide-react icons
jest.mock("lucide-react", () => {
  return {
    Zap: ({ className }) => (
      <span data-testid="zap-icon" className={className}>
        Zap Icon
      </span>
    ),
    Code: ({ className }) => (
      <span data-testid="code-icon" className={className}>
        Code Icon
      </span>
    ),
    Palette: ({ className }) => (
      <span data-testid="palette-icon" className={className}>
        Palette Icon
      </span>
    ),
    Layers: ({ className }) => (
      <span data-testid="layers-icon" className={className}>
        Layers Icon
      </span>
    ),
    Github: ({ className }) => (
      <span data-testid="github-icon" className={className}>
        Github Icon
      </span>
    ),
    Moon: ({ className }) => (
      <span data-testid="moon-icon" className={className}>
        Moon Icon
      </span>
    ),
    Sun: ({ className }) => (
      <span data-testid="sun-icon" className={className}>
        Sun Icon
      </span>
    ),
    Menu: () => <span data-testid="menu-icon">☰</span>,
    X: () => <span data-testid="x-icon">✕</span>,
    ChevronRight: () => (
      <span data-testid="chevron-right-icon">ChevronRight Icon</span>
    ),
    Mail: ({ className }) => (
      <span data-testid="mail-icon" className={className}>
        Mail Icon
      </span>
    ),
    Linkedin: ({ className, "data-testid": testId }) => (
      <span data-testid={testId || "linkedin-icon"} className={className}>
        LinkedinIcon
      </span>
    ),
    Clock: ({ className }) => (
      <span data-testid="clock-icon" className={className}>
        Clock Icon
      </span>
    ),
    Briefcase: ({ className }) => (
      <span data-testid="briefcase-icon" className={className}>
        Briefcase Icon
      </span>
    ),
    Calendar: ({ className }) => (
      <span data-testid="calendar-icon" className={className}>
        Calendar Icon
      </span>
    ),
    Award: ({ className }) => (
      <span data-testid="award-icon" className={className}>
        Award Icon
      </span>
    ),
    ExternalLink: () => <span data-testid="external-link-icon">↗</span>,
    ArrowRight: ({ className }) => (
      <span data-testid="arrow-right-icon" className={className}>
        Arrow Right Icon
      </span>
    ),
    ChevronDown: () => <span data-testid="chevron-down-icon">▼</span>,
    ChevronUp: () => <span data-testid="chevron-up-icon">▲</span>,
    Monitor: () => <span data-testid="monitor-icon">🖥️</span>,
  };
});
