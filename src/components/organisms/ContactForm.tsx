"use client";

import { useActionState } from "react";
import { Button } from "@/components/atoms/Button";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import {
  blueIconColor,
  errorBg,
  formInputStyle,
  successBg,
  successText,
  blueText,
} from "@/lib/styles";
import { cn } from "@/lib/utils";

// フォームの状態を表す型
type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
};

// フォームデータの型
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// フォーム送信アクション
async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Formspreeのエンドポイント
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

  if (!FORMSPREE_ENDPOINT) {
    return {
      status: "error",
      errorMessage: "フォームのエンドポイントが設定されていません",
    };
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return { status: "success" };
    } else {
      const data = await response.json();
      return {
        status: "error",
        errorMessage: data.error || "フォームの送信に失敗しました",
      };
    }
  } catch (error) {
    return {
      status: "error",
      errorMessage:
        error instanceof Error ? error.message : "予期せぬエラーが発生しました",
    };
  }
}

export const ContactForm = () => {
  // useActionStateを使ってフォーム送信処理を管理
  const [formState, dispatch, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    { status: "idle" }
  );

  // Formspreeのエンドポイント - 環境変数から取得
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

  // フォームが設定されていない場合の表示
  if (!FORMSPREE_ENDPOINT) {
    return (
      <>
        <div className="flex items-center space-x-2 mb-4">
          <Clock className={cn("w-5 h-5 animate-pulse", blueIconColor)} />
          <span className={cn("font-medium", blueText)}>
            お問い合わせフォーム準備中
          </span>
        </div>

        <Button size="lg" gradient className="w-full backdrop-blur-sm" disabled>
          <div className="flex items-center justify-center space-x-2">
            <span>Coming Soon</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </div>
        </Button>
      </>
    );
  }

  // フォーム送信ハンドラー
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // FormDataをオブジェクトに変換
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // アクションを実行
    dispatch(data);

    // 成功時にフォームをリセット
    if (formState.status === "success") {
      form.reset();
    }
  };

  // フォームをリセットする関数
  const resetForm = () => {
    // 新しい初期状態を設定
    dispatch({ name: "", email: "", subject: "", message: "" });
  };

  // 送信成功時の表示
  if (formState.status === "success") {
    return (
      <div className="w-full">
        <motion.div
          className={cn(successBg, "p-8")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-500 mb-2" />
            <h3 className={cn("text-2xl font-bold", successText)}>送信完了</h3>
            <p className="text-gray-700 dark:text-gray-300">
              お問い合わせありがとうございます。できるだけ早くご返信いたします。
            </p>
            <Button onClick={resetForm} gradient className="mt-4">
              新しいメッセージを送信
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // 通常のフォーム表示（初期状態またはエラー状態）
  return (
    <div className="w-full">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={formInputStyle}
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={formInputStyle}
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              件名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className={formInputStyle}
              placeholder="お問い合わせの件名"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              メッセージ <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className={cn(formInputStyle, "resize-none")}
              placeholder="メッセージを入力してください"
            ></textarea>
          </div>
        </div>

        {formState.status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(errorBg, "p-4 flex items-start space-x-3")}
          >
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-red-600 dark:text-red-500">
                エラーが発生しました
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {formState.errorMessage}
              </p>
            </div>
          </motion.div>
        )}

        <Button
          type="submit"
          disabled={isPending}
          gradient
          size="lg"
          className="w-full backdrop-blur-sm text-lg py-6 shadow-lg"
        >
          <div className="flex items-center justify-center space-x-3">
            {isPending ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span className="text-white">送信中...</span>
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                <span className="text-white">送信する</span>
              </>
            )}
          </div>
        </Button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
