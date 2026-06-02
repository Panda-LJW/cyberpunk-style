import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Q_77 - Digital Designer",
  description: "Digital designer and creative developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
