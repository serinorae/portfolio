import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sulica",
  description: "This is a portfolio website of Sulica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

const NavBar = () => {
  return (
    <nav className="absolute z-10 my-4 w-full px-4">
      <div className="inline-block">
        <Link
          className="rounded-xl px-4 py-2 text-lg font-semibold font-serif transition hover:bg-primary hover:text-white"
          href="/"
        >
          Sulica @ Shu Ma Wa Win Htun
        </Link>
      </div>
      <div className="float-right inline-block">
        <div className="flex flex-row gap-2">
          <Link
            className="rounded-xl border-4 border-pink-300 px-4 py-2 text-lg font-semibold font-serif text-secondary transition hover:bg-primary hover:text-white"
            href="/quiz"
          >
            Quiz
          </Link>
          <Link
            className="rounded-xl border-4 border-pink-300 px-4 py-2 text-lg font-semibold font-serif text-secondary transition hover:bg-primary hover:text-white"
            href="/"
          >
            Blog
          </Link>
          <Link
            className="rounded-xl border-4 border-pink-300 px-4 py-2 text-lg font-semibold font-serif text-secondary transition hover:bg-primary hover:text-white"
            href="/about-me"
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};
