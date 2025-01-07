"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const IntroductionThisSite = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="space-y-6 text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Overview
        </h1>
        <p className="text-3xl font-bold animate-bounce">準備中</p>
        <div className="space-y-2 text-gray-300">
          <p>
            このサイトで使用している技術や実装のポイントについて、近日公開予定です
          </p>
          <p>今しばらくお待ちください</p>
        </div>
      </div>
      <Button
        className="mt-12 bg-blue-500 px-6 hover:bg-blue-700 shadow-lg transform hover:scale-110 transition duration-300"
        onClick={() => router.back()}
      >
        戻る
      </Button>
    </div>
  );
};

export default IntroductionThisSite;
