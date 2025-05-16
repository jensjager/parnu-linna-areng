// src/app/arengukava/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Arengukava() {
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
                        href={`/arengukava/${slug(item.title)}/${slug(
                          subItem
                        )}`}
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

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Arengukava 2035</h1>

        {/* Intro */}
        <section className="mb-6">
          <p className="text-base leading-relaxed">
            Pärnu Linnavalitsus koostas arengukava töösuunad, kutsudes kokku
            juhtgrupi ning valdkondlikud töörühmad. Need hõlmasid nii
            linnavalitsuse üksuste kui ka laiemalt kogukonna huvigruppide
            esindajaid, et tagada lõimuv ja kõiki kaasav protsess.
          </p>
        </section>

        {/* Mida käsitleb? */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Mida arengukava käsitleb?
          </h2>
          <ul className="list-disc list-inside space-y-1 text-base leading-snug">
            <li>
              <strong>Tervikliku kogukonna nägemus:</strong> Pärnu haldusala kui
              ühtne tervik, kus arvestatakse nii territooriumi kui ka elanike
              vajadustega.
            </li>
            <li>
              <strong>Uued juhtimispõhimõtted:</strong> Pärnu liitumine 2017.
              aastal 1. novembril muutis linna haldamise aluseid ja nõudis
              värskeid strateegilisi vaatenurki.
            </li>
            <li>
              <strong>2035 visioon:</strong> Sõnastatud strateegilised eesmärgid
              ja tegevuskavad, mis seovad linna tulevikuühise visiooniga.
            </li>
          </ul>
        </section>

        {/* Eesmärgid */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            Arengukava põhieesmärgid
          </h2>
          <p className="text-base mb-3">
            Arendusprotsessi käigus defineeriti kolm peamist suunist, mille
            alusel valmis avalik osa arengukavast:
          </p>
          <ul className="list-decimal list-inside space-y-1 text-base leading-snug">
            <li>
              <strong>Praktiline kasutus:</strong> Avalik osa peab olema
              lihtsasti loetav ja selgitama selgelt planeeritud arengusuundi.
            </li>
            <li>
              <strong>Kõigi Pärnu kaasamine:</strong> Võrdsed võimalused kogu
              haldusala piirkondade ja huvigruppide panuseks.
            </li>
            <li>
              <strong>Otsustamist toetavad põhimõtted:</strong> Keskenduti vaid
              kõige olulisematele põhimõtetele, vältides liigseid detaile.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
