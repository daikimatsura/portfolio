"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { logError, toAppError } from "./errorHandlers";
import { errorCardBg, errorIconBg, errorText } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * エラー境界コンポーネント
 * 子コンポーネントでエラーが発生した場合にフォールバックUIを表示する
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // エラーをログに記録
    const appError = toAppError(error);
    logError({
      ...appError,
      details: {
        ...appError.details,
        componentStack: errorInfo.componentStack,
      },
    });
  }

  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      if (typeof fallback === "function") {
        return fallback(error, this.resetErrorBoundary);
      }

      return (
        fallback || (
          <div className={cn(errorCardBg, "p-4 border rounded-md")}>
            <h2 className={cn(errorIconBg, "text-lg font-semibold")}>
              エラーが発生しました
            </h2>
            <p className={cn(errorText, "mt-2")}>{error.message}</p>
            <button
              onClick={this.resetErrorBoundary}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              再試行
            </button>
          </div>
        )
      );
    }

    return children;
  }
}
