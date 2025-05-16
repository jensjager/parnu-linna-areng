// src/app/arengukava/alamLehed/looduskeskkond/kliimamuutus/page.tsx

export default function KliimamuutusPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kliimamuutus</h1>

      {/* Ülevaade kliimamuutusest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Kliimamuutus mõjutab Pärnu linna nii keskmise temperatuuri tõusu, äärmuslike ilmastikunähtuste sagenemise kui ka merepinna määratut kõrgendamist. Eesti kliimagi prognooside kohaselt võib aastane keskmine õhutemperatuur tõusta kuni 2 °C võrra aastaks 2050.
        </p>
      </section>

      {/* Mõjud Pärnu linnale */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised mõjud</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Merepinna tõus ja erosioon:</strong> rannikualadel oht ranniku väiksemaks kulumiseks ja üleujutusteks.
          </li>
          <li>
            <strong>Kuumalained:</strong> sagedasemad ja intensiivsemad kuumaperioodid, mis tõstavad terviseriske ja koormavad energiasüsteeme.
          </li>
          <li>
            <strong>Sademe- ja tormimustrid:</strong> tugevamad äikesetormid ja vihmasajud suurendavad üleujutuste riski ning koormavad sadevee kanalisatsiooni.
          </li>
          <li>
            <strong>Elurikkuse muutused:</strong> temperatuuri ja niiskuse kõikumised mõjutavad kohalikke liike ning võõrliikide levikut.
          </li>
        </ul>
      </section>

      {/* Kohanemis- ja leevendusstrateegiad */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Kohanemis- ja leevendusstrateegiad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Kaldakaitse ja ranniku taastamine:</strong> merekaitsetõkete renoveerimine ning rannarööbaste taastamine roheliste lahendustega.
          </li>
          <li>
            <strong>Linna soojuskaart ja jahutavad alad:</strong> kuuma saarte vähendamine suurendatud haljastuse ja rohelise infrastruktuuriga.
          </li>
          <li>
            <strong>Üleujutuste käsitlus:</strong> säästev sadevee majandus elurõngaste rohealade ja ciivlatega.
          </li>
          <li>
            <strong>Energiatõhusus ja taastuvenergia:</strong> avalike hoonete renoveerimine ning päikese- ja tuuleenergia rakendamine.
          </li>
        </ul>
      </section>

      {/* Tegevuskava kliimamuutuse vastu võitlemiseks */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Vii läbi detailne riskihinnang merepinna tõusu ja üleujutuste kohta ning uuenda ranniku kaitse planeeringuid.</li>
          <li>Koosta linna soojuskaardid ja alusta jahutusradade rajamist kõrge temperatuuriga piirkondades.</li>
          <li>Tugevda sadevee süsteeme, luues rohelisi sademevagunin ja ülevoolupaiku.</li>
          <li>Seadista eesmärgipõhised CO₂-heite vähendamise kavad avalikele hoonetele ja transpordile.</li>
          <li>Korralda elanikke kaasavad töötoad ja kampaaniad, et tõsta teadlikkust kliimamuutuse mõjudest ja lahendustest.</li>
        </ol>
      </section>
    </div>
  );
}
