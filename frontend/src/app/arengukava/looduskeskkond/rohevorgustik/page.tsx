// src/app/arengukava/alamLehed/looduskeskkond/rohevorgustik/page.tsx

export default function RohevorgustikPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Rohevõrgustik</h1>

      {/* Ülevaade rohevõrgustikust */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Rohevõrgustik on omavahel seotud rohealade ja bioloogiliste koridoride süsteem, mis
          tagab elurikkuse säilimise ning inimeste tervisliku ja turvalise elukeskkonna.
          Pärnu haldusala rohevõrgustiku keskseks elemendiks on metsad, pargid, ranna- ja
          kiireasustusalade rohekoridorid ning jõgede kallastel paiknevad puhkealad.
        </p>
      </section>

      {/* Rohevõrgustiku komponendid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Rohevõrgustiku komponendid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Metsakoridorid:</strong> olulised ühendused Audru, Paikuse ja Tõstamaa osavaldade metsade vahel.
          </li>
          <li>
            <strong>Veesilmade-äärsed rohealad:</strong> Pärnu jõe ja Sauga jõe kallastel paiknevad puhkeparkide ja loodusalade koridorid.
          </li>
          <li>
            <strong>Linnapargid ja tänavahaljastus:</strong> Rüütli tänavast kuni Papiniidu rohealadeni ulatuv haljastatud ühendus.
          </li>
          <li>
            <strong>Rohealade võrgustiku ühendus:</strong> kergliiklusteed ja jalakäijate rajad ühendavad rohealad, tagades ligipääsu ja liikumise elupaikade vahel.
          </li>
        </ul>
      </section>

      {/* Tegevuskava rohevõrgustiku tugevdamiseks */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Kaardistada olemasolevad rohealad ja koridorid ning määratleda nende omavahelised ühenduspunktid.</li>
          <li>Luua ja säilitada rohekoridore metsade, parkide ja veekogude vahel – sh istutada puid ja põõsaid.</li>
          <li>Tugevdada kergliiklus- ja jalakäijate võrgustikku, et tagada rohealade turvaline läbimine.</li>
          <li>Seirata loodusalade kasutust ja ohustatud liikide liikumist, et kohandada haldamis- ja kaitsekava.</li>
          <li>Suurendada rohekoridoride kvaliteeti ja esteetikat, paigaldades infostendid ning puhkealasid.</li>
        </ol>
      </section>
    </div>
  );
}
