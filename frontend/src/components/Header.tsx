"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24  py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="relative flex flex-row items-center gap-4">
            <Image
              src="/images/vapp.png"
              alt="Logo"
              width={50}
              height={50}
              style={{ filter: "invert(100%) brightness(200%)" }}
            />
            <h1 className="text-2xl sm:text-4xl">PÄRNU LINN</h1>
          </Link>
        </div>

        {/* Hamburger menu button - visible on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex flex-wrap gap-8">
            <li>
              <Link
                href="/"
                className="hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
              >
                Avaleht
              </Link>
            </li>
            <li>
              <Link
                href="/arengukava"
                className="hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
              >
                Arengukava
              </Link>
            </li>
            <li>
              <Link
                href="/ideed"
                className="hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
              >
                Ettepanekud
              </Link>
            </li>
            <li>
              <Link
                href="/polls"
                className="hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
              >
                Küsitlused
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-primary shadow-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex flex-col gap-4 pb-4">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-blue-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Avaleht
              </Link>
            </li>
            <li>
              <Link
                href="/arengukava"
                className="block py-2 hover:text-blue-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Arengukava
              </Link>
            </li>
            <li>
              <Link
                href="/ideed"
                className="block py-2 hover:text-blue-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ettepanekud
              </Link>
            </li>
            <li>
              <Link
                href="/polls"
                className="block py-2 hover:text-blue-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Küsitlused
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
