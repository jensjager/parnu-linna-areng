// src/app/arengukava/ettevotlus/ettevotlus-ja-toostusalad/page.tsx

export default function EttevotlusJaToostusaladPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ettevõtlus- ja tööstusalad</h1>

      {/* Ülevaade ettevõtlus- ja tööstuspiirkondadest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Ettevõtluse arengut toetava linna põhimõtteks on mitmekesine ja jätkusuutlik
          ettevõtluskeskkond, kus tugevad põhiväärtused – rikkalik looduskeskkond ja
          rahvusvaheline kuurordilinna kuvand – ühenduvad nutika linnaplaneerimise ning
          tõhusa transpordivõrgustikuga. Julgustame ettevõtjaid looma uusi töökohti,
          sh kaugtöökohti, ning loome soodsa pinnase innovaatiliste ja kõrge
          lisandväärtusega ettevõtete asutamiseks.
        </p>
      </section>

      {/* Peamised fookusvaldkonnad */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised fookusvaldkonnad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Atraktiivne linnaruumi arendus:</strong> ettevõtlus- ja tööstuspiirkondade
            planeerimine ning visuaalne uuendus.
          </li>
          <li>
            <strong>Seadusandliku hooajalisuse vähendamine:</strong> turundus- ja arendustegevused,
            mis toetavad ettevõtlust aastaringselt.
          </li>
          <li>
            <strong>Innovaatilised töövõimalused:</strong> kõrge lisandväärtusega tööstus- ja
            teenusalade edendamine.
          </li>
          <li>
            <strong>Infovahetuse platvorm:</strong> piirkondlike ettevõtete andme- ja
            teabeväljade sidumine ühtseks digikeskkonnaks.
          </li>
        </ul>
      </section>

      {/* Peamised arendusprojektid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised arendusprojektid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Tõstamaa tehnoküla:</strong> robootika- ja teadus- ning
            tehnoloogiaettevõtete inkubaator.
          </li>
          <li>
            <strong>Hiiu äri- ja tööstusala:</strong> logistika- ja tootmisettevõtete
            taristu tugevdamine.
          </li>
          <li>
            <strong>Piirikivi tööstuspiirkond:</strong> multimodaalse ühenduse loomine
            tootmis- ja ladustamisvajadustele.
          </li>
          <li>
            <strong>Rail Baltic kaubajaam:</strong> transpordisolmiku ja maanteelogiistika
            ühendamine.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Kaardistada ja planeerida ettevõtlus- ja tööstuspiirkondade laienemine
            strateegilistes kohtades (Tõstamaa, Hiiu, Piirikivi, Rail Baltic).
          </li>
          <li>
            Kujundada ja rakendada logistikalahendused Rail Baltic kaubajaama ja
            lennujaama ühendamiseks.
          </li>
          <li>
            Tööstus- ja ärimaa visuaalne uuendus koos taristu moderniseerimisega
            ettevõtjate ligimeelitamiseks.
          </li>
          <li>
            Luua digitaalne teabeplatvorm, mis ühendab piirkondlikud ettevõtjad ja
            toetab info vahetust.
          </li>
          <li>
            Toetada ettevõtlusinkubaatoreid ja tehnoloogiakeskusi rahastus- ja
            mentorlusprogrammidega.
          </li>
        </ol>
      </section>
    </div>
  );
}
