import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                clipRule="evenodd"
              />
            </svg>
            Pärnu Kogukond
          </Link>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-2 sm:gap-8">
            <li>
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Avaleht
              </Link>
            </li>
            <li>
              <Link
                href="/ideed"
                className="hover:text-blue-200 transition-colors"
              >
                Ideed
              </Link>
            </li>
            <li>
              <Link
                href="/polls"
                className="hover:text-blue-200 transition-colors"
              >
                Küsitlused
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="hover:text-blue-200 transition-colors"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
