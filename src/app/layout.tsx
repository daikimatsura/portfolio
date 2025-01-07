import type { Metadata } from "next";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "daikimatsura's Portfolio Site",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-white">
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
