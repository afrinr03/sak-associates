import Link from "next/link";

export const metadata = {
  title: "Our Services | SAK Associates",
  description:
    "Building demolition, barrication & fabrication sheet works and iron scrap services in Chennai.",
};

const services = [
  {
    title: "Building Demolition",
    desc:
      "Complete demolition solutions executed with safety, planning and proper waste management.",
    image: "/gallery/site1.jpg",
    link: "/services/building-demolition",
    points: [
      "Manual Demolition",
      "Compressor Demolition",
      "Machine Demolition",
      "Interior Demolition",
      "Foundation Removal",
      "Warehouse & Industrial",
      "Debris & Waste Removal",
    ],
  },
  {
    title: "Barrication & Fabrication Sheet Works",
    desc:
      "Reliable fabrication and roofing sheet works for residential, commercial and industrial sites.",
    image: "/gallery/site9.jpg",
    link: "/services/fabrication-roofing",
    points: [
      "Residential Works",
      "Commercial Works",
      "Warehouse Works",
      "Temporary Structures",
    ],
  },
  {
    title: "Iron Scrap",
    desc:
      "Buying and selling all types of building iron scrap with transparent pricing and quick pickup.",
    image: "/gallery/site13.jpg",
    link: "/services/iron-scrap",
    points: [
      "Buying Iron Scrap",
      "Selling Iron Scrap",
      "Site Scrap Clearance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Home / Services
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            We deliver professional demolition, fabrication and iron scrap
            solutions with safety, experience and reliability.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <section
              key={service.title}
              className={`grid gap-12 items-center ${
                index % 2 === 0
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600 max-w-xl">
                  {service.desc}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-block mt-8 rounded-md bg-blue-600 px-7 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  View Details →
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
