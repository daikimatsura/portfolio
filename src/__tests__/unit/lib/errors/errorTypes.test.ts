import { ErrorCodes, AppError } from "@/lib/errors/errorTypes";

describe("errorTypes", () => {
  describe("ErrorCodes", () => {
    it("エラーコードが正しく定義されている", () => {
      expect(ErrorCodes.UNKNOWN_ERROR).toBe("UNKNOWN_ERROR");
      expect(ErrorCodes.API_ERROR).toBe("API_ERROR");
      expect(ErrorCodes.NETWORK_ERROR).toBe("NETWORK_ERROR");
      expect(ErrorCodes.VALIDATION_ERROR).toBe("VALIDATION_ERROR");
      expect(ErrorCodes.AUTH_ERROR).toBe("AUTH_ERROR");
      expect(ErrorCodes.NOT_FOUND).toBe("NOT_FOUND");
    });
  });

  describe("AppError型", () => {
    it("AppErrorオブジェクトを作成できる", () => {
      const appError: AppError = {
        code: ErrorCodes.UNKNOWN_ERROR,
        message: "テストエラー",
      };

      expect(appError.code).toBe(ErrorCodes.UNKNOWN_ERROR);
      expect(appError.message).toBe("テストエラー");
      expect(appError.details).toBeUndefined();
      expect(appError.status).toBeUndefined();
    });

    it("詳細情報を含むAppErrorオブジェクトを作成できる", () => {
      const appError: AppError = {
        code: ErrorCodes.UNKNOWN_ERROR,
        message: "テストエラー",
        details: { reason: "テスト" },
        status: 500,
      };

      expect(appError.code).toBe(ErrorCodes.UNKNOWN_ERROR);
      expect(appError.message).toBe("テストエラー");
      expect(appError.details).toEqual({ reason: "テスト" });
      expect(appError.status).toBe(500);
    });
  });
});
