import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SAK Associates | Demolition & Civil Contractors in Chennai",
  description:
    "SAK Associates is a trusted demolition, roofing sheet and civil construction contractor in Chennai with over 20 years of experience.",
  keywords:
    "demolition contractor Chennai, roofing sheet contractor Chennai, civil works Chennai, building demolition Chennai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
