// src/app/arengukava/alamLehed/sport/spordihallid-ja-valjakud/page.tsx

export default function SpordihallidJaValjakudPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Spordihallid ja väljakud</h1>

      {/* Ülevaade spordirajatistest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu linnas on mitmeid sise- ja välispordirajatisi: täismõõtmelised spordihallid, 
          koolide võimlad, kunstmuruväljakud, tennise- ja korvpalliplatsid ning mitmeotstarbelised 
          tänavaväljakud. Need pakuvad võimalusi nii harrastus- kui võistlussportlastele, aga ka 
          vaba aja veetmiseks kogukondadele.
        </p>
      </section>

      {/* Peamised fookusvaldkonnad */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised fookusvaldkonnad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Rajatise seisukorra uuendus:</strong> põrandakatete vahetus, tribüünide renoveerimine ning haldus- ja tehnoruumide värskendus.
          </li>
          <li>
            <strong>Ligipääsetavus ja turvalisus:</strong> ratastoolirajad, õuealade valgustus, elektroonilised lukusüsteemid ja videovalve.
          </li>
          <li>
            <strong>Energiasäästlikkus:</strong> spordihallide kütte- ning ventilatsioonisüsteemide optimeerimine ja LED-valgustus.
          </li>
          <li>
            <strong>Multifunktsionaalsus:</strong> paindlikud korvpalli-, võrkpalli- ning badmintoniplatsid koos liigendseinte ja keritavate lahendustega.
          </li>
          <li>
            <strong>Kogukonna kaasamine:</strong> treening- ja laenutusprogrammid, noortefestivalid ning spordipäevade korraldamine.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Viia läbi kõigi spordihallide ja välijälgede detailne seisukorra hindamine ja riskianalüüs.
          </li>
          <li>
            Koostada investeeringuplaan 5–7 aasta perioodiks, prioritiseerides enim kasutatavad ja korrasoleku poolest kriitilised rajatised.
          </li>
          <li>
            Rakendada energiatõhusaid valgustus- ja küttesüsteeme ning paigaldada päikesepaneelid avatud platsidele.
          </li>
          <li>
            Parandada ligipääsetavust läbi kaldteede, esteetiliste väravalahenduste ja kaasava disaini põhimõtete järgimise.
          </li>
          <li>
            Luua veebipõhine broneerimissüsteem koos reaalajas saadavusega ning lihtsustada noortespordi- ja kogukonnaürituste registreerimist.
          </li>
        </ol>
      </section>
    </div>
  );
}
