import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bubblebody = localFont({
  src: "./fonts/bubbleboddyneue-regular trial.ttf",
  variable: "--font-bubblebody",
  weight: "500",
});
const bubblebodybold = localFont({
  src: "./fonts/BubbleboddyNeue-Bold Trial.ttf",
  variable: "--font-bubblebodybold",
  weight: "900",
});

export const metadata: Metadata = {
  title: "clubsoda",
  description: "made by high-haseeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bubblebody.variable} ${bubblebodybold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
