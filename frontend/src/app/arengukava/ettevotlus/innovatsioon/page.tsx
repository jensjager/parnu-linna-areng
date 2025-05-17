// src/app/arengukava/alamLehed/ettevõtlus/innovatsioon/page.tsx

export default function InnovatsioonPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Innovatsioon</h1>

      {/* Ülevaade innovatsioonist */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Innovatsioon on Pärnu ettevõtluse arengu nurgakivi – eesmärk on luua soodne keskkond uute ideede, tehnoloogiate ja ärimudelite katsetamiseks.
          Linna strateegiasse on kirjeldatud innovatsioonikeskuste, inkubaatorite ja teaduskoostöö arendamist, mis toetavad kohalikku ettevõtlust ja teadmuspõhist majandust.
        </p>
      </section>

      {/* Peamised fookusvaldkonnad */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised fookusvaldkonnad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Äriinkubaatorid ja kiirendid:</strong> toetada iduettevõtteid esimeses arengufaasis.
          </li>
          <li>
            <strong>Teadus- ja arendustegevus:</strong> koostöö ülikoolide ja teadusasutustega robootika, digilahenduste ja rohetehnoloogia valdkonnas.
          </li>
          <li>
            <strong>Digitaalsed platvormid:</strong> luua keskne portaal ettevõtete ja investorite info- ning võrgustikutöös.
          </li>
          <li>
            <strong>Rahastamisvõimalused:</strong> arendada kohalikke ja rahvusvahelisi toetusprogramme ning riskikapitali fondide kaasamist.
          </li>
        </ul>
      </section>

      {/* Peamised arendusprojektid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised arendusprojektid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Pärnu Tehnoloogiainkubaator:</strong> uus ruumide kompleks koos laborite ja üritustsoonidega.
          </li>
          <li>
            <strong>Startup-kiirendi programm:</strong> intensiivne mentorlusprogramm koos rahalise toega.
          </li>
          <li>
            <strong>Digitaalse linna platvorm:</strong> andmejaam, mis ühendab avaliku sektori ja ettevõtete andmed.
          </li>
          <li>
            <strong>Teaduskoostöö labor:</strong> Pärnu Ülikooli ja linnavalitsuse ühine R&D labor rohetehnoloogiate katsetamiseks.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Luua ja varustada Pärnu Tehnoloogiainkubaator vajaliku infrastruktuuriga järgmise kahes aasta jooksul.</li>
          <li>Töötada välja startup-kiirendi programm, kaasates kogenud mentoreid ja investorite võrgustikke.</li>
          <li>Arendada digitaalse linna platvormi prototüüp, integreerides hoonete energiakasutuse ja liiklussüsteemide andmeid.</li>
          <li>Alustada ühisprojekte teadusasutustega robootika ja rohetehnoloogia pilootlahenduste testimiseks.</li>
          <li>Luua rahastusvõrgustik, mis ühendab kohalikke ettevõtjaid Euroopa Liidu programmide ja era­­kapitali fondidega.</li>
        </ol>
      </section>
    </div>
  );
}
