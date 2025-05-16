// src/app/arengukava/ettevotlus/kasitoo/page.tsx

export default function KasitooPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Käsitöö</h1>

      {/* Ülevaade */}
      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu ja selle osavaldade käsitööl on rikkalik ajalugu: traditsioonilised tekstiili-, nõela- ja puutööd on kandunud põlvest põlve. Käsitöö toetab kohalikku identiteeti ning loob uusi elatusvõimalusi, ühendades oskused turismi ja kultuuripärandiga.
        </p>
      </section>

      {/* Peamised arendusprojektid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised arendusprojektid</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Tõstamaa mõisa käsitöökodade väljaarendamine:</strong> renoveerida ja varustada 
            Tagatalli hoone puutöö, keraamika ja tekstiilitööde ruumidega.
          </li>
          <li>
            <strong>Kogukondlikud õpitoad:</strong> mobiilsed käsitöökojad küla- ja pargialadel, 
            et õpetada puitarhitektuuri ja maalritöid.
          </li>
          <li>
            <strong>Käsitöömarktide toetus:</strong> korraldada aastaringsed laatade sarjad ja 
            arendada e-platvorm kohalike meistrite toodete müügiks.
          </li>
        </ul>
      </section>

      {/* Tegevuskava */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Renoveerida ja varustada Tõstamaa mõisa käsitöökodade ruumid.</li>
          <li>Käivitada meistriklasside sari koostöös kohalike käsitöömeistritega.</li>
          <li>Toetada käsitöökooperatiivide asutamist algkapitali ja koolitustega.</li>
          <li>Korraldada iga-aastased käsitöölaatade ja näituste sarjad.</li>
          <li>Arendada veebipõhine platvorm käsitööturu ja kursuste koondamiseks.</li>
        </ol>
      </section>
    </div>
  );
}
