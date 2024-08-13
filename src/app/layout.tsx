import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "A personal blog and portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        {/* footer start */}
        <footer className="bg-gray-300 shadow-md z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="space-x-4">
              <Link href="/" className="text-xl font-bold">
                <Facebook />
              </Link>
              <Link href="/" className="text-xl font-bold">
                <Instagram />
              </Link><Link href="/" className="text-xl font-bold">
                <LinkedIn />
              </Link>
            </div>
            <div>
              Copyright © 2024 Web Developer Portfolio
            </div>
          </div>
        </footer>
        {/* footer end */}
      </body>
    </html>
  );
}
