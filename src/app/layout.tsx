import type { Metadata } from "next";
import { Inter, Anton, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Toft Men's | Premium Imported Shoe Store Edavannappara",
  description: "Experience the finest collection of imported shoes, Nike AF, and Crocs at Toft Men's Edavannappara. Quality shoes at value prices with fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${anton.variable} ${syne.variable} font-sans antialiased text-white bg-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
