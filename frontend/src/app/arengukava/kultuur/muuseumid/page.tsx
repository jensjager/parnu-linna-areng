// src/app/arengukava/alamLehed/kultuur/muuseumid/page.tsx

export default function MuuseumidPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Muuseumid</h1>

      {/* Ülevaade muuseumidest */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu muuseumid on linna kultuuripärandi hoidjad ja hariduskeskused, mis tutvustavad nii ajaloolisi kui kaasaegseid kunstivorme. Peamiste asutuste hulka kuuluvad Pärnu Kunstimuuseum, Eesti Sõjamuuseum – kindral Laidoneri muuseum ja Koidula muuseum.
        </p>
      </section>

      {/* Näituste ja programmide fookus */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Näitused ja programmid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Püsiekspositsioonid:</strong> linna ajaloo, sõjamuuseumi kogude ja rahvusliku kirjanduse tutvustus.
          </li>
          <li>
            <strong>Ajutised näitused:</strong> kaasaegne kunst, fotonäitused, kaasaegse disaini projektid.
          </li>
          <li>
            <strong>Haridusprogrammid:</strong> töötubade sari kooliõpilastele, giidituurid ja loengud.
          </li>
          <li>
            <strong>Kultuurisündmused:</strong> muuseumide õhtud, teemaõhtud ja koostöö festivaliüritustega.
          </li>
        </ul>
      </section>

      {/* Eesmärgid ja mõju */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Eesmärgid ja mõju</h2>
        <ul className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Suurendada muuseumikülastuste arvu ja ligipääsetavust igas vanuses publikule.
          </li>
          <li>
            Tugevdada koostööd koolide ja ülikoolidega, et integreerida muuseumiharidus õppekavadesse.
          </li>
          <li>
            Edendada kaasaegse kunsti ja rahvakultuuri välišõude ning rahvusvahelisi näitustekoostöid.
          </li>
          <li>
            Parendada muuseumirajatiste ligipääsetavust ja hoida mälestusväärseid hooneid.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Värskendada püsinäituste sisu ja kujundust, kaasates digilahendusi ja interaktiivseid väljapanekuid.
          </li>
          <li>
            Korraldada regulaarselt ajutisi näituseid koos Eesti ja rahvusvaheliste kuraatoritega.
          </li>
          <li>
            Laiendada haridusprogramme, pakkudes tasuta giidituure ja töötoad koolidele.
          </li>
          <li>
            Parandada muuseumite füüsilist ligipääsetavust (liftid, kaldteed, viidad eri keeltes).
          </li>
          <li>
            Arendada digitaalset muuseumiplatvormi, kus tutvustada kollektsioone virtuaalselt ja korraldada veebiloenguid.
          </li>
        </ol>
      </section>
    </div>
  );
}
