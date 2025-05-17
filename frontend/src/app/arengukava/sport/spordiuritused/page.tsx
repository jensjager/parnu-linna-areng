// src/app/arengukava/alamLehed/sport/spordiüritused/page.tsx

export default function SpordiuritusedPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Spordiüritused</h1>

      {/* Ülevaade spordiüritustest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu spordiüritused toetavad elanike tervist, tugevdavad kogukonda ja suurendavad linna atraktiivsust nii kohalike kui ka üle-eestiliste sportlaste seas.
          Linn korraldab igal aastal jooksu-, ujumis- ja rattavõistlusi, noorteturniire ning rahvaspordi sündmusi.
        </p>
      </section>

      {/* Peamised võistlus- ja üritusetüübid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised võistlustüübid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Pärnu Linnajooks:</strong> kevadine 10 km ja 5 km distants kõigile vanusegruppidele.
          </li>
          <li>
            <strong>Rannaujumine:</strong> suvised ujumisvõistlused Pärnu lahes, kus osalevad nii amatöörid kui profid.
          </li>
          <li>
            <strong>Kergejõustiku MV:</strong> Eesti meistrivõistlused murdmaa- ja kergejõustikus Pärnu Rannapargis.
          </li>
          <li>
            <strong>Rattaralli ja triatlon:</strong> kevadine maastikusõit ja suvine triatlonidistants linnarannas.
          </li>
          <li>
            <strong>Noorteturniirid:</strong> käsipall, jalgpall ja võrkpall noortele 7–18 aastastele.
          </li>
        </ul>
      </section>

      {/* Eesmärgid ja mõju */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Eesmärgid ja mõju</h2>
        <ul className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Suurendada elanike igapäevast liikumist ja terviseteadlikkust läbi massispordiürituste.
          </li>
          <li>
            Tugevdada Pärnu mainet spordilinnana ning meelitada kohale osalejaid üle Eesti.
          </li>
          <li>
            Toetada noorsportlaste arengut, pakkudes kvaliteetseid võistlusvõimalusi ja treeningprogramme.
          </li>
          <li>
            Luua aastaringne spordikalender, mis jaotub võrdselt külmematele ja soojadele kuudele.
          </li>
          <li>
            Edendada kaasavat sportimist, tagades ligipääsu ja erivajadustega inimeste võimalused osaleda.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Koostada spordikalender, mis hõlmab vähemalt 8 suuremat avalikku üritust ja 12 noorteturniiri.
          </li>
          <li>
            Tugevdada koostööd koolide ja spordiklubidega, et laiendada treening- ja osalemisvõimalusi.
          </li>
          <li>
            Arendada turunduskampaaniaid, et meelitada osalejaid ja pealtvaatajaid väljastpoolt Pärnut.
          </li>
          <li>
            Parendada rattateede ja jooksuradade võrku, ühendades peamised spordirajatised ja looduslikud alad.
          </li>
          <li>
            Luua kaasav spordiabileti süsteem, mis tagab soodustused peredele, pensionäridele ja erivajadustega isikutele.
          </li>
        </ol>
      </section>
    </div>
  );
}
