import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanishk Nagpal",
  description: "personal protfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inconsolata.className}>
        {children}
      </body>
    </html>
  );
}
