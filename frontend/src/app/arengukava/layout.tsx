"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

const menu = [
  { title: "RAHVASTIKU ARENG", sub: ["Tööturg"] },
  {
    title: "LOODUSKESKKOND",
    sub: [
      "Looduslik mitmekesisus",
      "Rohevõrgustik",
      "Puhkealade arendamine",
      "Pargid",
      "Keskkonnasäästlikud lahendused",
      "Kliimamuutus",
    ],
  },
  { title: "KULTUUR", sub: ["Kultuuriüritused", "Muuseumid"] },
  { title: "SPORT", sub: ["Spordiüritused", "Spordihallid ja väljakud"] },
  {
    title: "ETTEVÕTLUS",
    sub: [
      "Ettevõtlus- ja tööstusalad",
      "Turism",
      "Koostöö haridusasutustega",
      "Innovatsioon",
      "Käsitöö",
    ],
  },
  {
    title: "ELUKESKKOND",
    sub: [
      "Linnaplaneerimine",
      "Sadamate arendus",
      "Sillad",
      "Rattateed",
      "Sõidu- ja jalakäijateed",
      "Kesklinn",
      "Pärnu rand",
      "Linnatransport",
    ],
  },
  {
    title: "AVALIKUD TEENUSED",
    sub: ["Sotsiaalhoolekanne", "Tervishoid", "Turvalisus", "Linnajuhtimine"],
  },
  {
    title: "HARIDUS",
    sub: ["Kutse- ja kõrgharidus", "Haridus erivajadusega õpilasele"],
  },
  { title: "MUU", sub: ["Midagi muud"] },
];

// simple slugify helper
const slug = (str: string) =>
  str
    .toLowerCase()
    .replace(/õ/g, "o")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ArengukavaLayout({ children }: { children: ReactNode }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Valdkonnad</h2>
        <nav className="space-y-3">
          {menu.map((item, idx) => (
            <div key={item.title}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-1.5 px-2 rounded hover:bg-gray-100 transition"
              >
                <span className="font-medium text-sm">{item.title}</span>
                <span className="text-base">{openIdx === idx ? "−" : "+"}</span>
              </button>
              {openIdx === idx && (
                <ul className="mt-1 ml-4 space-y-1">
                  {item.sub.map((subItem) => (
                    <li key={subItem}>
                      <Link
                        href={`/arengukava/${slug(item.title)}/${slug(subItem)}`}
                        className="block py-1 px-2 rounded hover:bg-gray-100 transition text-sm"
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Page content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
