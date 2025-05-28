import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Minute Anime",
  description: "Convert Anything to ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased h-svh `}>{children}</body>
    </html>
  );
}
