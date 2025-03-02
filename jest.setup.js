// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// React 19のサポートを追加
// ReactDOMTestUtils.actの警告を抑制
jest.mock("react-dom/test-utils", () => {
  const originalModule = jest.requireActual("react-dom/test-utils");
  return {
    ...originalModule,
    act: jest.requireActual("react").act,
  };
});

// @testing-library/reactのactを最適化
jest.mock("@testing-library/react", () => {
  const originalModule = jest.requireActual("@testing-library/react");
  return {
    ...originalModule,
    // actをReactから直接インポート
    act: jest.requireActual("react").act,
  };
});

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

// Mock @/lib/styles
jest.mock("@/lib/styles", () => ({
  errorCardBg: "error-card-bg-mock",
  errorIconBg: "error-icon-bg-mock",
  errorText: "error-text-mock",
  gradientButtonBg: "gradient-button-bg-mock",
  gradientText: "gradient-text-mock",
  blueIconColor: "blue-icon-color-mock",
  greenIconColor: "green-icon-color-mock",
  redIconColor: "red-icon-color-mock",
  purpleIconColor: "purple-icon-color-mock",
  yellowIconColor: "yellow-icon-color-mock",
  orangeIconColor: "orange-icon-color-mock",
  getTechCardColor: jest
    .fn()
    .mockImplementation((color) => `tech-card-color-${color}-mock`),
}));

// Mock @/components/atoms/Button
jest.mock("@/components/atoms/Button", () => ({
  Button: ({
    children,
    onClick,
    gradient,
    className,
    variant,
    size,
    asChild,
    disabled,
  }) => {
    // バリアントに基づいてクラスを生成
    let variantClasses = "";
    if (variant === "default" || !variant) {
      variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
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

    // サイズに基づいてクラスを生成
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

    const allClasses = `${variantClasses} ${sizeClasses} ${className || ""}`;

    // asChildがtrueの場合は子要素のpropsを拡張
    if (asChild && children && typeof children === "object") {
      // 直接子要素を返す（React.cloneElementは使用しない）
      const childProps = {
        className: allClasses,
        disabled,
        onClick,
        "data-testid": "button-mock",
        "data-gradient": gradient,
      };

      return <div {...childProps}>{children}</div>;
    }

    return (
      <button
        data-testid="button-mock"
        onClick={onClick}
        className={allClasses}
        data-gradient={gradient}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
  buttonVariants: ({ variant, size, className }) => {
    // バリアントに基づいてクラスを生成
    let variantClasses = "";
    if (variant === "default" || !variant) {
      variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
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

    // サイズに基づいてクラスを生成
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

    return `${variantClasses} ${sizeClasses} ${className || ""}`;
  },
}));

// Mock @/components/atoms/SectionTitle
jest.mock("@/components/atoms/SectionTitle", () => {
  return {
    __esModule: true,
    default: ({ title, subtitle, align = "center", className = "", icon }) => (
      <div
        data-testid="section-title-mock"
        className={`text-${align} ${className}`}
      >
        <h2 className="text-4xl font-bold mb-4 inline-block relative text-transparent bg-clip-text">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
    ),
  };
});

// 共通のモックリファレンス
const mockRef = { current: null };

// Mock framer-motion
jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return {
    ...actual,
    useReducedMotion: jest.fn().mockReturnValue(false),
    motion: {
      div: ({ children, ...props }) => <div {...props}>{children}</div>,
      h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
      h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
      h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
      p: ({ children, ...props }) => <p {...props}>{children}</p>,
      span: ({ children, ...props }) => <span {...props}>{children}</span>,
      button: ({ children, ...props }) => (
        <button {...props}>{children}</button>
      ),
      a: ({ children, ...props }) => <a {...props}>{children}</a>,
      ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
      li: ({ children, ...props }) => <li {...props}>{children}</li>,
      section: ({ children, ...props }) => (
        <section {...props}>{children}</section>
      ),
      article: ({ children, ...props }) => (
        <article {...props}>{children}</article>
      ),
      header: ({ children, ...props }) => (
        <header {...props}>{children}</header>
      ),
      footer: ({ children, ...props }) => (
        <footer data-testid="footer-mock" {...props}>
          Footer Mock{children}
        </footer>
      ),
      nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
      main: ({ children, ...props }) => <main {...props}>{children}</main>,
      aside: ({ children, ...props }) => <aside {...props}>{children}</aside>,
      form: ({ children, ...props }) => <form {...props}>{children}</form>,
      input: (props) => <input {...props} />,
      textarea: ({ children, ...props }) => (
        <textarea {...props}>{children}</textarea>
      ),
      select: ({ children, ...props }) => (
        <select {...props}>{children}</select>
      ),
      option: ({ children, ...props }) => (
        <option {...props}>{children}</option>
      ),
      label: ({ children, ...props }) => <label {...props}>{children}</label>,
      fieldset: ({ children, ...props }) => (
        <fieldset {...props}>{children}</fieldset>
      ),
      legend: ({ children, ...props }) => (
        <legend {...props}>{children}</legend>
      ),
      table: ({ children, ...props }) => <table {...props}>{children}</table>,
      tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
      td: ({ children, ...props }) => <td {...props}>{children}</td>,
      th: ({ children, ...props }) => <th {...props}>{children}</th>,
      thead: ({ children, ...props }) => <thead {...props}>{children}</thead>,
      tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
      tfoot: ({ children, ...props }) => <tfoot {...props}>{children}</tfoot>,
    },
  };
});

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

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
  }),
  Noto_Sans_JP: () => ({
    variable: "--font-noto-sans-jp",
  }),
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
    Monitor: () => <span data-testid="monitor-icon">��️</span>,
    Send: () => <span data-testid="send-icon">Send Icon</span>,
    CheckCircle: () => (
      <span data-testid="check-circle-icon">CheckCircle Icon</span>
    ),
    AlertCircle: () => (
      <span data-testid="alert-circle-icon">AlertCircle Icon</span>
    ),
    TestTube: ({ className }) => (
      <span data-testid="test-tube-icon" className={className}>
        TestTube Icon
      </span>
    ),
    Rocket: ({ className }) => (
      <span data-testid="rocket-icon" className={className}>
        Rocket Icon
      </span>
    ),
    Gauge: ({ className }) => (
      <span data-testid="gauge-icon" className={className}>
        Gauge Icon
      </span>
    ),
    Shield: ({ className }) => (
      <span data-testid="shield-icon" className={className}>
        Shield Icon
      </span>
    ),
    Cpu: ({ className }) => (
      <span data-testid="cpu-icon" className={className}>
        Cpu Icon
      </span>
    ),
    AlertTriangle: ({ className }) => (
      <span data-testid="alert-triangle-icon" className={className}>
        AlertTriangle Icon
      </span>
    ),
    RefreshCw: ({ className }) => (
      <span data-testid="refresh-cw-icon" className={className}>
        RefreshCw Icon
      </span>
    ),
    Mail: () => <span data-testid="mail-icon">Mail Icon</span>,
  };
});

// Mock @/components/templates/Header
jest.mock("@/components/templates/Header", () => {
  return {
    __esModule: true,
    default: () => <header data-testid="header-mock">Header Mock</header>,
  };
});

// Mock @/components/templates/Footer
jest.mock("@/components/templates/Footer", () => {
  return {
    __esModule: true,
    default: () => <footer data-testid="footer-mock">Footer Mock</footer>,
  };
});

// Mock @/hooks/useTheme
jest.mock("@/hooks/useTheme", () => {
  return {
    __esModule: true,
    ThemeProvider: ({ children }) => (
      <div data-testid="theme-provider-mock">{children}</div>
    ),
    useTheme: () => ({
      theme: "dark",
      setTheme: jest.fn(),
    }),
  };
});

// Mock CSS imports
jest.mock("@/app/globals.css", () => ({}), { virtual: true });
