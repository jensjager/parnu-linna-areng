// src/app/arengukava/alamLehed/kultuur/kultuuriüritused/page.tsx

export default function KultuuriuritusedPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Kultuuriüritused</h1>

      {/* Ülevaade kultuuriüritustest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu kultuurielu rikastab linna identiteeti ja tugevdab kogukonna ühtekuuluvust. 
          Kultuuriüritused hõlmavad kontserte, festivale, näitusi, teatriprogramme ja rahvakultuuri etendusi,
          mis toimuvad nii linnasüdames kui ka külakeskustes.
        </p>
      </section>

      {/* Peamised sündmustüübid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised sündmustüübid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Suvefestivalid:</strong> Pärnu Muusikafestival, Cinema Mundi filmifestival, rannapromenaadi kontserdisari.
          </li>
          <li>
            <strong>Näitused ja kunstiprojektid:</strong> Linnagalerii ajutised näitused, avalik tänavakunst.
          </li>
          <li>
            <strong>Teater ja tants:</strong> Etenduskunstifestival, noorte teatrite etendused ja tantsustuudiote koolituspäevad.
          </li>
          <li>
            <strong>Rahvakultuur ja käsitöö:</strong> Võru folgifestivali küljealased üritused, töötoad ja laat.
          </li>
        </ul>
      </section>

      {/* Eesmärgid ja mõju */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Eesmärgid ja mõju</h2>
        <ul className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Tõsta Pärnu kultuuritarbimise ligipääsetavust kõigile elanikele, sh sise- ja äärelinna piirkondades.
          </li>
          <li>
            Toetada kohalikke kunstnikke ja loomeettevõtteid, suurendades sündmuste raames sissetulekuid.
          </li>
          <li>
            Luua aastaringne kultuurikalender, mis jaotub ühtlaselt külmadel ja soojadel kuudel.
          </li>
          <li>
            Tugevdada rahvusvahelist koostööd ja publiku vahetust, kutsudes Pärnusse külalistesinejaid.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Koostada iga-aastane kultuurikalender, mis hõlmab vähemalt 12 erinevat suurüritust.
          </li>
          <li>
            Luua toetusskeem kohalikele loomeinitsatiivididele, sh osalusfondid ja ruumitoetus.
          </li>
          <li>
            Arendada pop-up etendusruume välilaval, mereäärsetel aladel ja kogukonnakeskustes.
          </li>
          <li>
            Tihedam ühisturundus linnaplaneeringu, turismi ja kultuuriasutuste vahel ning digitaalne sündmusteportaali täiustamine.
          </li>
          <li>
            Viia ellu kogukondlikud töötubade sarjad, mis hõlmavad rahvakultuuri, käsitööd ja tänavakunsti.
          </li>
        </ol>
      </section>
    </div>
  );
}
