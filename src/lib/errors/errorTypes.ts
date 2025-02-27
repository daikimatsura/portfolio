/**
 * エラー型定義
 */

/**
 * アプリケーションエラーの基本型
 */
export interface AppError {
  code: string;
  message: string;
  status?: number;
  details?: Record<string, unknown>;
}

/**
 * API関連のエラー
 */
export interface ApiError extends AppError {
  endpoint: string;
  method: string;
}

/**
 * バリデーションエラー
 */
export interface ValidationError extends AppError {
  field: string;
  value: unknown;
}

/**
 * 認証エラー
 */
export interface AuthError extends AppError {
  authType: "session" | "token" | "credentials";
}

/**
 * ネットワークエラー
 */
export interface NetworkError extends AppError {
  isOnline: boolean;
}

/**
 * エラーコード定数
 */
export const ErrorCodes = {
  NETWORK_ERROR: "NETWORK_ERROR",
  API_ERROR: "API_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  AUTH_ERROR: "AUTH_ERROR",
  NOT_FOUND: "NOT_FOUND",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;
