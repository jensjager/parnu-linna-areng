// src/app/arengukava/alamLehed/ettevotlus/koostoo-haridusasutustega/page.tsx

export default function KoostooHaridusasutustegaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Koostöö haridusasutustega</h1>

      {/* Ülevaade ja eesmärk */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu linnarahvas ja haridusasutused teevad tihedat koostööd, et tagada noortele
          vajalikud oskused ja kogemused. Koostöö hõlmab praktikaprogramme, ühisprojekte
          ning ettevõtete ja koolide omavahelist teadmusvahetust.
        </p>
      </section>

      {/* Peamised koostöövormid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised koostöövormid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Koolipraktikad:</strong> ettevõtete pakutavad praktikavõimalused
            kutse- ja üldhariduse õpilastele.
          </li>
          <li>
            <strong>Mentorlusprogrammid:</strong> eksperdid jagavad teadmisi ettevõtluse,
            IT ja innovatsiooni valdkondades.
          </li>
          <li>
            <strong>Õppekavade kaasajastamine:</strong> koostöös ettevõtetega kohandatakse
            õppetöö reaalturu nõudmistele vastavaks.
          </li>
          <li>
            <strong>Ühine teadus- ja arengutöö:</strong> linn ja ülikoolid viivad läbi
            arendusprojekte robootika, rohetehnoloogia ja digilahenduste alal.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Töötada välja praktikaprogrammid kõigis Pärnu kutse- ja üldharidusasutustes
            koostöös kohalike ettevõtetega.
          </li>
          <li>
            Käivitada mentorlusvõrgustik, kus igal õpilasel on ligipääs ettevõtja- või
            valdkonnaeksperdi juhendamisele.
          </li>
          <li>
            Uuendada kutseõppe õppekavu, lisades digioskuste ja rohetehnoloogia moodulid.
          </li>
          <li>
            Korraldada iga-aastased hackathonid ja innovatsioonivõistlused koos
            ülikoolide ja teadusasutustega.
          </li>
          <li>
            Luua stipendiumide ja auhindade süsteem kooliõpilaste parimate projektide
            tunnustamiseks.
          </li>
        </ol>
      </section>
    </div>
  );
}
