// src/app/arengukava/page.tsx
export default function ArengukavaPage() {
  return (
    <>
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
    </>
  );
}
