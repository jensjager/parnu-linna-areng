// src/app/arengukava/alamLehed/looduskeskkond/looduslik-mitmekesisus/page.tsx

export default function LooduslikMitmekesisusPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Looduslik mitmekesisus</h1>

      {/* Ülevaade linna looduslikust mitmekesisusest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnule on omane looduslähedus ja elukeskkonna mitmekesisus. Linn asub looduslikult kaunis piirkonnas, kus metsad, rohealad, meri ja jõed on elukeskkonnaga tihedalt seotud. Rikkalik looduslik eelisseisund ja geopoliitiline asend on Pärnule andnud arengu­eeldused ning muutnud linna atraktiivseks nii elanikele kui külalistele. {/* :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1} */}
        </p>
      </section>

      {/* Maa-ala jaotumine */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Maa-ala struktuur</h2>
        <p className="text-base leading-relaxed">
          Pärnu linna haldusala hõlmab 858,07 km², millest metsamaa moodustab 56%, loodulik rohumaa 7% ja põllumajanduslik maa 18%. See maajaotus peegeldab liitunud osavaldade roherikkust (Audru vallas 55%, Paikuse vallas 65%, Tõstamaal 59%) ning rõhutab vajadust rohealade jätkusuutliku haldamise järele. {/* :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3} */}
        </p>
      </section>

      {/* Kaitsealuste alade võrgustik */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Kaitsealused alad</h2>
        <p className="text-base leading-relaxed">
          Kaitsealune maa moodustab 4% Pärnu haldusala pindalast, sh on Natura 2000 võrgustikku kaasatud 22 loodusala (5 linnualad ja 17 looduskaitseala). Väärtus­elupaikadest moodustavad palu-männikud ja männisegametsad 20%, ülejäänud on sood, ohustatud või haruldaste liikide elupaigad. Rohevõrgustiku sidususe tagamiseks on vaja ühtlast haldus­praktikat üle kogu haldusala. {/* :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5} */}
        </p>
      </section>

      {/* Tegevuskava edasiseks mitmekesisuse hoidmiseks */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Kaardistada ja seirata kõiki vääriselupaiku ning uuendada kaitsekorraldusplaane.</li>
          <li>Tugevdada rohevõrgustikku, luues rohelisemaid koridore linna ja maakonna ühendamiseks.</li>
          <li>Edendada elupaikade taastamist (märgalad, puisniidud) koostöös kogukondade ja maaomanikega.</li>
          <li>Lõimida bioloogilise mitmekesisuse andmestik linna planeerimis­protsessidesse ja eelarveotsustesse.</li>
        </ol>
      </section>
    </div>
  );
}
