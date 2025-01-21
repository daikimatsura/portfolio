import { Button } from "@/components/atoms/Button";
import { Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* 背景のグラデーションエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20" />

      {/* デコレーション要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* ヘッダー部分 */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/20" />
                <div className="relative bg-blue-500/10 rounded-full p-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              現在、お問い合わせフォームを準備中です。
              <br />
              もうしばらくお待ちください。
            </p>
          </div>

          {/* ステータス表示 */}
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-blue-400 font-medium">Coming Soon</span>
            </div>

            <Button
              size="lg"
              className="w-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              disabled
            >
              <div className="flex items-center justify-center space-x-2">
                <span>準備中</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
