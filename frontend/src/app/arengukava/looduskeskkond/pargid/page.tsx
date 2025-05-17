// src/app/arengukava/alamLehed/looduskeskkond/pargid/page.tsx

export default function PargidPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pargid</h1>

      {/* Parkide ülevaade */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu linnapargid on olulised avalikud rohealad, mis pakuvad elanikele ja külalistele
          puhke- ning liikumisvõimalusi. Järjestikuste etappidena on kavandatud mitme pargi
          rekonstrueerimine ja väljaarendamine, et tõsta nende funktsionaalsust, esteetikat
          ning ligipääsetavust.
        </p>
      </section>

      {/* Peamised pargiprojektid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Planeeritavad pargiprojektid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Koidula park:</strong> kivimüüri parendus, kõnniteede uuendus,
            valgustuse kaasajastamine ja peenraaede korrastamine.
          </li>
          <li>
            <strong>Brackmanni park:</strong> ausamba valgustus, istutusalade laiendamine
            ning taimmaterjali hooldus ja uuendamine.
          </li>
          <li>
            <strong>Munamäe park:</strong> väljaarendamine kaasaegseks rohealaks,
            kaasa arvatud pingid, prügikastid ja värske haljastus.
          </li>
          <li>
            <strong>Vanapargi rekonstrueerimine:</strong> teedevõrgu uuendamine,
            haljastuse korrastamine ja puhkealade lisavarustuse paigaldamine.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Koostada detailplaneering ja rekonstrueerimisplaan igale pargile (Koidula, Brackmanni,
            Munamäe ja Vanapark).
          </li>
          <li>
            Kaasata kogukond ja huvigruppide esindajad ideede kogumiseks ning
            haldus- ja hoolduslahenduste väljatöötamiseks.
          </li>
          <li>
            Planeerida valgustuse, mööbli ja rajatiste uuendused vastavalt
            turvalisuse ja ligipääsetavuse nõuetele.
          </li>
          <li>
            Istutada mitmekesist puu- ja põõsasistutust ning rajada madalakihi taimestikku
            toetavad peenrad.
          </li>
          <li>
            Seirata parkide kasutust ja rahulolu, et kohandada haldus- ja hoolduskava
            vastavalt tagasisidele.
          </li>
        </ol>
      </section>
    </div>
  );
}
