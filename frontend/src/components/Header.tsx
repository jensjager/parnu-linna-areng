"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setScrollProgress(1);
      return;
    }

    // Threshold values for when opacity starts and reaches maximum
    const scrollStartThreshold = 20;
    const scrollFullThreshold = window.innerHeight * 0.7;

    const handleScroll = () => {
      // Calculate scroll progress as a value between 0 and 1
      const currentScroll = window.scrollY;

      if (currentScroll <= scrollStartThreshold) {
        setScrollProgress(0);
      } else if (currentScroll >= scrollFullThreshold) {
        setScrollProgress(1);
      } else {
        // Calculate the progress between thresholds
        const progress =
          (currentScroll - scrollStartThreshold) /
          (scrollFullThreshold - scrollStartThreshold);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const calculateBlur = () => {
    return isHomePage ? scrollProgress * 8 : 0;
  };

  const blurValue = calculateBlur();

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed top-0 left-0 w-full h-20 flex justify-center z-50 transition-all`}
        style={{
          backgroundColor: isHomePage
            ? isMenuOpen
              ? "transparent"
              : `rgba(8, 108, 172, ${scrollProgress})`
            : isMenuOpen
            ? "transparent"
            : "var(--color-primary)", // Solid background on non-home pages
          backdropFilter: isHomePage ? `blur(${blurValue}px)` : "none",
          boxShadow:
            scrollProgress > 0.2 && !isMenuOpen
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              : "none",
        }}
      >
        <div className="w-screen px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/vapp.png"
                alt="Logo"
                width={50}
                height={50}
                style={{ filter: "invert(100%) brightness(200%)" }}
              />
              <h1 className="text-2xl sm:text-4xl text-white">PÄRNU LINN</h1>
            </Link>
          </div>

          {/* Hamburger menu button - visible on mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 z-[51]"
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
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                >
                  Avaleht
                </Link>
              </li>
              <li>
                <Link
                  href="/arengukava"
                  className="text-white hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                >
                  Arengukava
                </Link>
              </li>
              <li>
                <Link
                  href="/ideed"
                  className="text-white hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                >
                  Ettepanekud
                </Link>
              </li>
              <li>
                <Link
                  href="/polls"
                  className="text-white hover:text-blue-100 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full"
                >
                  Küsitlused
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu - slides from top */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-gradient2 text-white shadow-md transition-transform duration-200 z-49 ${
          isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        {/* Spacer to account for the height of the header */}
        <div className="h-20"></div>

        <nav className="container mx-auto pl-4 pr-8 py-2 text-right">
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
    </>
  );
}
