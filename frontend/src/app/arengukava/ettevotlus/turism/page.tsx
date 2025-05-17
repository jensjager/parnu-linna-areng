// src/app/arengukava/ettevotlus/turism/page.tsx

export default function TurismPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Turism</h1>

      <section className="mb-6">
        <p className="text-base leading-relaxed">
          Pärnu on tuntud kuurordilinn, kus pikk liivarand ja kausjas laht hoiavad suvel vee soojemana.  
          Traditsiooniline spaaturism ja rahvusvahelised festivalid toovad hooajal linna üle 700 000 sise- ja väliskülastaja.
        </p>
        <p className="text-base leading-relaxed mt-2">
          2017. aastaks kasvas majutatud külaliste arv 360 000-ni (48 % tõus viie aastaga), kusjuures 78 % reisidest oli puhkusereisid.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Tegevuskava</h2>
        <ol className="list-decimal list-inside space-y-1 text-base leading-snug">
          <li>Renoveerida ja laiendada spaakeskusi, hotelle ja puhkerajatisi.</li>
          <li>Arendada konverentsi- ja ärikeskuseid koos tehnoloogiliste lahendustega.</li>
          <li>Luua talvehooaja festivalid ja üritused turismiperioodi pikendamiseks.</li>
          <li>Tugevdada digitaalset turundust ja külastajateportaali isikupärastatud pakkumistega.</li>
        </ol>
      </section>
    </div>
  );
}
