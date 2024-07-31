import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import AnimatedBackground from "@/components/animated-background/animated-background";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "asiaauto.uz",
  description: "asiaauto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng">
      <body className={inter.className}>
        <Navbar />
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
