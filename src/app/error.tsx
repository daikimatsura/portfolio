"use client";

import { useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";
import { Home } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <span className="text-6xl">⚠️</span>

        <h2 className="text-2xl font-semibold">予期せぬエラーが発生しました</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          申し訳ありません。問題が発生しました。
          <br />
          再度お試しください。
        </p>
        <div className="space-y-4">
          <Button onClick={reset}>再試行</Button>
          <Button asChild className="mt-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
