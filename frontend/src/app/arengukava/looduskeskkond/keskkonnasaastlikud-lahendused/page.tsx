// src/app/arengukava/alamLehed/looduskeskkond/keskkonnasäästlikud-lahendused/page.tsx

export default function KeskkonnasäästlikudLahendusedPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Keskkonnasäästlikud lahendused</h1>

      {/* Ülevaade keskkonnasäästlikest lahendustest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu linn on pühendunud säästvate ja keskkonnasõbralike lahenduste rakendamisele,
          et vähendada oma jalajälge ning tagada tervislik elukeskkond tulevastele
          põlvedele. Fookuses on energiaefektiivsus, jäätmekäitlus, vee säästmine ja rohehooned.
        </p>
      </section>

      {/* Peamised tehnoloogiad ja praktikad */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised tehnoloogiad ja praktikad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Energiamajanduse optimeerimine:</strong> avalike hoonete soojustagastusventilatsioon
            ja LED-valgustus.
          </li>
          <li>
            <strong>Taastuvenergia kasutus:</strong> päikese- ja tuuleenergia paigaldamine
            koolimajadesse, lasteaedadesse ja spordirajatistesse.
          </li>
          <li>
            <strong>Jäätmekäitlus ja ringmajandus:</strong> eralduskonteinerid jäätmete sorteerimiseks
            avalikel aladel ja algatused organilise biojäätmete kompostimiseks.
          </li>
          <li>
            <strong>Veesäästlikkus:</strong> vihmavee kogumine haljastus- ja tualetikasutuseks
            ning madala vooluhulgaga kraanide ja WC-de paigaldamine.
          </li>
          <li>
            <strong>Rohehooned:</strong> energiatõhusad konstruktsioonid, rohelised katused
            ja fassaadid, mis parandavad mikroklimaati ja vähendavad linnasoojust.
          </li>
        </ul>
      </section>

      {/* Kogukonna kaasamine */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Kogukonna kaasamine</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Kogukonna töötoad ja kampaaniad:</strong> energiasäästu ja jäätmetekke
            vähendamise teavituskampaaniad.
          </li>
          <li>
            <strong>Ühiste kogukonnaprojektide toetus:</strong> linnaosade ühisaiad ja
            kompostikogukonnad.
          </li>
          <li>
            <strong>Partnerlus ettevõtetega:</strong> roheinvesteeringute ja rohetehnoloogiate
            pilootprojektid kohalike ettevõtete toel.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Auditeerida kõiki avalikke hooneid energiakasutuse ja vee tarbimise osas ning
            koostada uuendusplaane.
          </li>
          <li>
            Rajada päikesepaneelide masspaigaldus vähemalt 10 suurimas avalikus hoones
            järgmise viie aasta jooksul.
          </li>
          <li>
            Laiendada avalike alade jäätmesortimise infrastruktuuri ja käivitada
            biojäätmete kompostimisprogramm.
          </li>
          <li>
            Arendada vihmavee kogumis- ja taaskasutussüsteemide pilootprojekte
            pargialadel ja kooliõuedel.
          </li>
          <li>
            Välja töötada rohehoonete ehitus- ja renoveerimisjuhend, mis seob
            energiatõhususe ja ökoloogilised nõuded kohustuslikeks normideks.
          </li>
        </ol>
      </section>
    </div>
  );
}
