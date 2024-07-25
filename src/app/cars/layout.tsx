import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "asiaauto.uz",
    description: "asiaauto.uz",
};

export default function CarsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <p>Cars sahifa</p>
            {children}
        </section>

    );
}
