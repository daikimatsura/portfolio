/**
 * エラーハンドリングユーティリティ
 */
import {
  ApiError,
  AppError,
  ErrorCodes,
  NetworkError,
  ValidationError,
} from "./errorTypes";

/**
 * エラーをアプリケーションエラーに変換する
 * @param error 元のエラー
 * @returns アプリケーションエラー
 */
export function toAppError(error: unknown): AppError {
  if (error instanceof Error) {
    return {
      code: ErrorCodes.UNKNOWN_ERROR,
      message: error.message,
      details: { stack: error.stack },
    };
  }

  if (typeof error === "string") {
    return {
      code: ErrorCodes.UNKNOWN_ERROR,
      message: error,
    };
  }

  return {
    code: ErrorCodes.UNKNOWN_ERROR,
    message: "Unknown error occurred",
    details: { originalError: error },
  };
}

/**
 * APIエラーを作成する
 * @param message エラーメッセージ
 * @param endpoint エンドポイント
 * @param method HTTPメソッド
 * @param status HTTPステータスコード
 * @returns APIエラー
 */
export function createApiError(
  message: string,
  endpoint: string,
  method: string,
  status?: number
): ApiError {
  return {
    code: ErrorCodes.API_ERROR,
    message,
    endpoint,
    method,
    status,
  };
}

/**
 * ネットワークエラーを作成する
 * @param message エラーメッセージ
 * @param isOnline オンライン状態かどうか
 * @returns ネットワークエラー
 */
export function createNetworkError(
  message: string,
  isOnline: boolean
): NetworkError {
  return {
    code: ErrorCodes.NETWORK_ERROR,
    message,
    isOnline,
  };
}

/**
 * バリデーションエラーを作成する
 * @param message エラーメッセージ
 * @param field フィールド名
 * @param value 値
 * @returns バリデーションエラー
 */
export function createValidationError(
  message: string,
  field: string,
  value: unknown
): ValidationError {
  return {
    code: ErrorCodes.VALIDATION_ERROR,
    message,
    field,
    value,
  };
}

/**
 * エラーをログに出力する
 * @param error エラー
 * @param level ログレベル
 */
export function logError(
  error: AppError,
  level: "error" | "warn" | "info" = "error"
): void {
  const logMethod = console[level];
  logMethod(`[${error.code}] ${error.message}`, error.details);
}
