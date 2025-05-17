// src/app/arengukava/alamLehed/looduskeskkond/puhkealade-arendamine/page.tsx

export default function PuhkealadeArendaminePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Puhkealade arendamine</h1>

      {/* Olemasolevate puhkealade ülevaade */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu linnas on mitmeid avalikke puhkealasid: rannapromenaad, linna pargid,
          jõekallaste jalutus- ja rattateed ning väiksemad kogukonna haljasväljakud.
          Nende eesmärk on tagada elanikele ja külalistele tervisesõbralikud liikumis- ja
          puhkamisvõimalused.
        </p>
      </section>

      {/* Arenduse fookusvaldkonnad */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Arenduse fookusvaldkonnad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Ranna- ja jõekallaste infrastruktuur:</strong> promenaadide,
            jalakäija- ja rattateede laiendamine, turvalised sildumiskohad ja puhkeplatvormid.
          </li>
          <li>
            <strong>Parkide mitmekesistamine:</strong> uued laste- ja spordiväljakud,
            õueala kohvikud, lille- ja temaatilised aiad.
          </li>
          <li>
            <strong>Kogukonnapõhised puhkealad:</strong> väiksemad siseõued,
            kogukonnatasandi tervisejaamad ja õppealad linnakeskkonna tutvustamiseks.
          </li>
          <li>
            <strong>Jätkusuutlikkus ja ligipääsetavus:</strong> säästvad materjalid,
            ratastoolisõbralikud rajatised ja viidad eri keeles.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Kaardistada ja inventeerida kõik olemasolevad puhkealad koos varustuse ja ligipääsutingimustega.</li>
          <li>Viia läbi elanike ning huvigruppide kaasamine avalikel aruteludel ja küsitlustes.</li>
          <li>Koostada arengukava, mis määratleb prioriteetsed alad investeeringuteks järgmise 5 aasta jooksul.</li>
          <li>Tagada rahastuslahendused (avalik-õiguslikud partnerlussuhted, Euroopa fondid, kodanikualgatused).</li>
          <li>Rakendada ehitus- ja haldustöid, kasutades säästvaid ja esteetilisi lahendusi.</li>
          <li>Seirata ning hinnata puhkealade kasutust ja rahulolu, kohandades tegevusi vastavalt tagasisidele.</li>
        </ol>
      </section>
    </div>
  );
}
