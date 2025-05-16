import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24  py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pärnu Linnavalitsus</h3>
            <p className="text-gray-300">
              Kogukonna platvorm, kus saad jagada ideid ja osaleda linna
              arengus.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kiirlingid</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Avaleht
                </Link>
              </li>
              <li>
                <Link
                  href="/ideed"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ideed
                </Link>
              </li>
              <li>
                <Link
                  href="/polls"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Küsitlused
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-gray-300">
              <p>Pärnu linnavalitsus</p>
              <p>Suur-Sepa 16, 80098 Pärnu</p>
              <p>Tel: 444 8200</p>
              <p>
                E-post:{" "}
                <a
                  href="mailto:linnavalitsus@parnu.ee"
                  className="hover:text-white"
                >
                  linnavalitsus@parnu.ee
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="my-8 w-full bg-white h-[1px]"></div>
        <div className="text-center text--400">
          <p>© {currentYear} Pärnu Linnavalitsus. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}
