import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Techindia Software",
  description: "We are a Software Company",
  robots: process.env.NEXT_PUBLIC_ROBOTS || 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}