import {
  toAppError,
  createApiError,
  createNetworkError,
  createValidationError,
  logError,
} from "@/lib/errors/errorHandlers";
import { ErrorCodes } from "@/lib/errors/errorTypes";

describe("errorHandlers", () => {
  describe("toAppError", () => {
    it("Errorオブジェクトをアプリケーションエラーに変換する", () => {
      const error = new Error("テストエラー");
      const appError = toAppError(error);

      expect(appError.code).toBe(ErrorCodes.UNKNOWN_ERROR);
      expect(appError.message).toBe("テストエラー");
      expect(appError.details).toHaveProperty("stack");
    });

    it("文字列をアプリケーションエラーに変換する", () => {
      const appError = toAppError("テストエラー");

      expect(appError.code).toBe(ErrorCodes.UNKNOWN_ERROR);
      expect(appError.message).toBe("テストエラー");
      expect(appError.details).toBeUndefined();
    });

    it("その他の型をアプリケーションエラーに変換する", () => {
      const appError = toAppError({ custom: "error" });

      expect(appError.code).toBe(ErrorCodes.UNKNOWN_ERROR);
      expect(appError.message).toBe("Unknown error occurred");
      expect(appError.details).toHaveProperty("originalError");
    });
  });

  describe("createApiError", () => {
    it("APIエラーを作成する", () => {
      const apiError = createApiError("APIエラー", "/api/test", "GET", 404);

      expect(apiError.code).toBe(ErrorCodes.API_ERROR);
      expect(apiError.message).toBe("APIエラー");
      expect(apiError.endpoint).toBe("/api/test");
      expect(apiError.method).toBe("GET");
      expect(apiError.status).toBe(404);
    });
  });

  describe("createNetworkError", () => {
    it("ネットワークエラーを作成する", () => {
      const networkError = createNetworkError("ネットワークエラー", false);

      expect(networkError.code).toBe(ErrorCodes.NETWORK_ERROR);
      expect(networkError.message).toBe("ネットワークエラー");
      expect(networkError.isOnline).toBe(false);
    });
  });

  describe("createValidationError", () => {
    it("バリデーションエラーを作成する", () => {
      const validationError = createValidationError(
        "バリデーションエラー",
        "email",
        "invalid-email"
      );

      expect(validationError.code).toBe(ErrorCodes.VALIDATION_ERROR);
      expect(validationError.message).toBe("バリデーションエラー");
      expect(validationError.field).toBe("email");
      expect(validationError.value).toBe("invalid-email");
    });
  });

  describe("logError", () => {
    // 注: コンソールメソッドのモックはjest.setup.jsで一元管理されています

    afterEach(() => {
      // 注: jest.clearAllMocksはjest.setup.jsで一元管理されています
    });

    it("エラーレベルでエラーをログに出力する", () => {
      const appError = {
        code: ErrorCodes.UNKNOWN_ERROR,
        message: "テストエラー",
        details: { test: "details" },
      };

      logError(appError);

      expect(console.error).toHaveBeenCalledWith(
        `[${ErrorCodes.UNKNOWN_ERROR}] テストエラー`,
        { test: "details" }
      );
    });

    it("警告レベルでエラーをログに出力する", () => {
      const appError = {
        code: ErrorCodes.UNKNOWN_ERROR,
        message: "テスト警告",
      };

      logError(appError, "warn");

      expect(console.warn).toHaveBeenCalledWith(
        `[${ErrorCodes.UNKNOWN_ERROR}] テスト警告`,
        undefined
      );
    });

    it("情報レベルでエラーをログに出力する", () => {
      const appError = {
        code: ErrorCodes.UNKNOWN_ERROR,
        message: "テスト情報",
      };

      logError(appError, "info");

      expect(console.info).toHaveBeenCalledWith(
        `[${ErrorCodes.UNKNOWN_ERROR}] テスト情報`,
        undefined
      );
    });
  });
});
