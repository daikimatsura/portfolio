import type { Metadata } from "next";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "daiki matsuura | ポートフォリオ",
  description:
    "フロントエンド開発とAWSネイティブなシステム開発を専門とするソフトウェアエンジニア、daiki matsuuraのポートフォリオサイトです。",
  keywords: [
    "ポートフォリオ",
    "フロントエンド",
    "React",
    "Next.js",
    "AWS",
    "ソフトウェアエンジニア",
  ],
  authors: [{ name: "daiki matsuura" }],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Header />
          <main className="pt-20 flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
