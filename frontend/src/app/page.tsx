import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Mock news/events data
  const uudised = [
    {
      id: 1,
      title: "Uus ideede konkurss kogukonna arendamiseks",
      date: "15. mai 2023",
      image:
        "https://visitparnu.com/wp-content/uploads/2023/01/top-20-parnu.jpg",
      excerpt:
        "Osale Pärnu linnaruumi parandamise ideede konkursil. Parimad ideed saavad rahastuse ja viime need ellu.",
      link: "/uudised/1",
    },
    {
      id: 2,
      title: "Rannaala uuenduste avalik arutelu",
      date: "12. mai 2023",
      image:
        "https://visitestonia.com/content-images/650005/parnu-en-001-visit-estonia.jpg",
      excerpt:
        "Tule ja ütle sõna sekka Pärnu rannaalal planeeritavate muutuste kohta. Avalik arutelu toimub 25. mail.",
      link: "/uudised/2",
    },
    {
      id: 3,
      title: "Suveürituste kava on avaldatud",
      date: "10. mai 2023",
      image:
        "https://frosthotel.ee/wp-content/uploads/2021/04/Ruutli-tanav-Parnu.jpg",
      excerpt:
        "Pärnu linna suvehooaja avalike ürituste kava on nüüd kättesaadav. Tutvu suviste sündmustega.",
      link: "/uudised/3",
    },
  ];

  // Quick links for services
  const teenused = [
    {
      title: "Esita idee",
      icon: "💡",
      link: "/ideed",
      description: "Jaga oma mõtteid Pärnu linna arendamiseks",
    },
    {
      title: "Osale küsitlustel",
      icon: "📊",
      link: "/polls",
      description: "Avalda arvamust linnaelu puudutavates küsimustes",
    },
    {
      title: "Arengukava",
      icon: "📝",
      link: "/arengukava",
      description: "Tutvu Pärnu linna arengukavaga",
    },
    {
      title: "Ürituste kalender",
      icon: "🗓️",
      link: "/kalender",
      description: "Vaata tulevasi sündmusi ja üritusi",
    },
  ];

  // Community statistics
  const statistika = [
    { number: "124", label: "Esitatud ideed" },
    { number: "18", label: "Käimasolevad küsitlused" },
    { number: "1,432", label: "Registreeritud kasutajat" },
    { number: "37", label: "Teostatud projekti" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative -top-20">
      {/* Hero banner */}
      <div className="relative h-[600px] bg-primary">
        <div
          className="absolute inset-0 blur-xl h-[580px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0.4) 15%, rgba(232, 121, 249, 0.6) 45%, rgba(204, 171, 238, 0.4) 75%)",
          }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kujundame Pärnu tulevikku koos
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              Osale Pärnu linna arengus - jaga ideid, osale küsitlustel ja aita
              kaasa meie linna tuleviku kujundamisel
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ideed"
                className="bg-white hover:bg-gray-100 text-[#1a78be] px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
              >
                Esita idee
              </Link>
              <Link
                href="/polls"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Osale küsitlusel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick links section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a78be]">
            Kuidas saad kaasa lüüa?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teenused.map((teenus, index) => (
              <Link
                key={index}
                href={teenus.link}
                className="bg-white hover:bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md"
              >
                <span className="text-5xl mb-4">{teenus.icon}</span>
                <h3 className="font-bold text-xl mb-2 text-[#1a78be]">
                  {teenus.title}
                </h3>
                <p className="text-slate-600">{teenus.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics banner */}
      <div className="bg-primary py-14">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistika.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a78be]">
            Viimased uudised
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uudised.map((uudis) => (
              <Link
                href={uudis.link}
                key={uudis.id}
                className="group hover:scale-102 transition-transform"
              >
                <div className="bg-gradient-to-br from-slate-100 via-gray-200 to-neutral-100 rounded-xl overflow-hidden shadow-sm h-full hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-52">
                    <Image
                      src={uudis.image || "/images/placeholder.jpg"}
                      alt={uudis.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-slate-400 mb-2">{uudis.date}</p>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#1a78be] transition-colors">
                      {uudis.title}
                    </h3>
                    <p className="text-slate-600 mb-4 flex-grow">
                      {uudis.excerpt}
                    </p>
                    <span className="text-primary font-medium inline-flex items-center">
                      Loe rohkem
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                      >
                        <path
                          d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-action section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1a78be]">
            Liitu kogukonna aruteluga
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-600">
            Üheskoos saame aidata Pärnu linnal areneda ja paremaks muutuda. Sinu
            ideed ja arvamus on olulised meie kogukonna jaoks!
          </p>
          <Link
            href="/ideed"
            className="bg-[#1a78be] hover:bg-[#1667a5] text-white px-8 py-4 rounded-md font-bold text-lg inline-block transition-colors shadow-md"
          >
            Jaga oma ideed
          </Link>
        </div>
      </div>
    </div>
  );
}
