import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar, WaveRings } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Nations Digital",
  description: "First Nations Digital — company website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WaveRings />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
