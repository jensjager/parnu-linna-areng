// src/app/arengukava/alamLehed/rahvastiku-areng/tooturg/page.tsx

export default function TooturgPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tööturg</h1>

      <section className="mb-6">
        <p className="text-base leading-relaxed">
          2017. aasta andmetel on 29 % Pärnu linna töötajatest hõivatud töötlevas
          tööstuses (keskmine brutokuupalk 895 €), 10 % hulgi- ja jaekaubanduses
          (691 €), tervishoiu- ja sotsiaalhoolekandes (687 €) ning majutuse- ja
          toitlustussektoris (564 €). Kõrgeim palgatase oli mäetööstuses, kus see
          ületas Eesti keskmist 35 %.
        </p>
        <p className="text-base leading-relaxed mt-4">
          Hõive jätkuvat vähenemist on oodata põllumajanduses ja jaekaubanduses.
          Eesti keskmisest erinevalt prognoositakse töökohtade kärpimist ka
          avalikus sektoris, samas kui kiireimat kasvu nähakse programmeerimise
          ning teadus- ja tehnikaalastes tegevustes. See eeldab teadmistepõhiselt
          majanduselt senisest paremat ettevalmistust tööturule sisenejatelt.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Peamised fookusvaldkonnad</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-snug">
          <li>
            <strong>Sektoriaalne struktuur ja palgatase:</strong> töötlev tööstus,
            jaekaubandus, tervishoid ja majutus-toitlustus moodustavad kolm suurimat
            palgaskeemi sektori lõikes.
          </li>
          <li>
            <strong>Hõive trendid:</strong> alanemine põllumajanduses ja jaekaubanduses
            ning avalikus sektoris, samal ajal kui teadmistepõhistes tegevustes
            prognoositakse tugevat kasvu.
          </li>
          <li>
            <strong>Teadmistepõhine majandus:</strong> digitaliseerumine ja tehnoloogia
            valdkondade laienemine suurendavad nõudlust kõrgema kvalifikatsiooniga
            töötajate järele.
          </li>
          <li>
            <strong>Elukestev õpe:</strong> paindlike täiend- ja ümberõppeprogrammide
            arendamine, mis toetavad nii ettevõtjaid kui töötajaid kogu elukaare
            vältel.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>
            Tehke tihedat koostööd ettevõtete ja haridusasutustega, et kohandada
            õppekavu kohalike tööturu nõudmistele.
          </li>
          <li>
            Toetage elukestva õppe mudeleid ja kutse- ning täiendõppe programme,
            et tugevdada Pärnu tööjõu oskuste pagasit.
          </li>
          <li>
            Looge innovatsioonisõlm ning pakkuge algatusi tehnoloogia- ja
            teadmistepõhistes sektorites ettevõtluse ergutamiseks.
          </li>
          <li>
            Parandage ühistranspordi ja liikumisvõimalusi, et toetada pendelrännet
            Pärnu keskuslinnas ja maakonnas.
          </li>
        </ol>
      </section>
    </div>
  );
}
