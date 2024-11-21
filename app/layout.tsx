import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "clubsoda",
    description: "made by high-haseeb",
};

const fredoka = Fredoka({
    subsets: ["latin"],
    variable: "--font-fredoka"
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fredoka.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
