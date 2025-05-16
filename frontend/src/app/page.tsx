import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Mock news/events data
  const uudised = [
    {
      id: 1,
      title: "Uus ideede konkurss kogukonna arendamiseks",
      date: "15. mai 2023",
      image: "/images/uudis1.jpg",
      link: "/uudised/1",
    },
    {
      id: 2,
      title: "Rannaala uuenduste avalik arutelu",
      date: "12. mai 2023",
      image: "/images/uudis2.jpg",
      link: "/uudised/2",
    },
    {
      id: 3,
      title: "Suveürituste kava on avaldatud",
      date: "10. mai 2023",
      image: "/images/uudis3.jpg",
      link: "/uudised/3",
    },
  ];

  // Quick links for services
  const teenused = [
    { title: "Ideed", icon: "🚀", link: "/ideed" },
    { title: "Küsitlused", icon: "📊", link: "/polls" },
    { title: "Arengukava", icon: "📝", link: "/arengukava" },
    { title: "Kalender", icon: "📅", link: "/kalender" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/parnu-hero.jpg"
            alt="Pärnu linn"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pärnu Kogukond
            </h1>
            <p className="text-xl mb-8">
              Osale Pärnu linna arengus - jaga oma ideid, osale küsitlustel ja
              aita kaasa meie linna tuleviku kujundamisel
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ideed"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Esita idee
              </Link>
              <Link
                href="/polls"
                className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Osale küsitlusel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick links section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teenused.map((teenus, index) => (
              <Link
                key={index}
                href={teenus.link}
                className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg flex items-center transition-colors"
              >
                <span className="text-3xl mr-4">{teenus.icon}</span>
                <span className="font-medium text-lg">{teenus.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* News section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Viimased uudised
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uudised.map((uudis) => (
              <Link href={uudis.link} key={uudis.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={uudis.image || "/images/placeholder.jpg"}
                      alt={uudis.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{uudis.date}</p>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {uudis.title}
                    </h3>
                    <span className="text-blue-600 font-medium">
                      Loe rohkem →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-action section */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Liitu kogukonna aruteluga</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Üheskoos saame aidata Pärnu linnal areneda ja paremaks muutuda. Sinu
            ideed ja arvamus on olulised!
          </p>
          <Link
            href="/ideed"
            className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-md font-medium text-lg inline-block transition-colors"
          >
            Jaga oma ideed
          </Link>
        </div>
      </div>

      {/* Community statistics */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">124</p>
              <p className="text-gray-600">Esitatud ideed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">18</p>
              <p className="text-gray-600">Käimasolevad küsitlused</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">1,432</p>
              <p className="text-gray-600">Kogukonna liiget</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">37</p>
              <p className="text-gray-600">Teostatud projekti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
