// /src/app/arengukava/rahvastikuAreng/tooturg/page.jsx
export default function TooturgPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tööturg</h1>
      <p className="text-base leading-relaxed mb-4">
        Siin analüüsime Pärnu tööjõu pakkumist ja nõudlust:
      </p>

      <ul className="list-disc list-inside space-y-2 text-base">
        <li>
          <strong>Tööealise elanikkonna kasv:</strong> analüüsime viimase 5 aasta
          demograafilisi trende ja nende mõju tööjõu turule.
        </li>
        <li>
          <strong>Peamised tööstusharud:</strong> ülevaade neist sektoritest,
          kus on suurim töökohtade loomise potentsiaal.
        </li>
        <li>
          <strong>Haridus ja oskused:</strong> milliseid oskusi Pärnu tööandjad
          hetkel enim vajavad ja kuidas koolitusvõimalused nendega haakuvad.
        </li>
      </ul>

      {/* …lisa siia diagrammid, tabelid või pikemad kirjeldused… */}
    </section>
  );
}
