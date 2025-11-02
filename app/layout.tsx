import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_components/AuthProvider";
import Header from "./_components/Header";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.APP_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${lora.className} bg-purple-100`}>
          <Header />
          <main className="pt-24 w-4/5 m-auto h-dvh">{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
