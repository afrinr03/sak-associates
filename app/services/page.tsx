import Link from "next/link";

const serviceGroups = [
  {
    id: "building-demolition",
    title: "Building Demolition",
    intro:
      "Complete demolition solutions handled with safety, planning and proper waste management.",
    items: [
      {
        title: "Manual Demolition",
        img: "/gallery/site1.jpg",
        desc: "Careful dismantling for small areas and controlled demolition work.",
      },
      {
        title: "Compressor Demolition",
        img: "/gallery/site2.jpg",
        desc: "Breaker and compressor-based demolition for faster execution.",
      },
      {
        title: "Machine Demolition",
        img: "/gallery/site3.jpg",
        desc: "Excavator and heavy machinery demolition for large structures.",
      },
      {
        title: "Interior Demolition",
        img: "/gallery/site4.jpg",
        desc: "Internal dismantling for renovation and rework projects.",
      },
      {
        title: "Foundation Removal",
        img: "/gallery/site5.jpg",
        desc: "Foundation breaking and removal with proper site leveling support.",
      },
      {
        title: "Warehouse / Industrial",
        img: "/gallery/site6.jpg",
        desc: "Large warehouse and industrial demolition with safe clearance.",
      },
      {
        title: "Debris & Waste Removal",
        img: "/gallery/site7.jpg",
        desc: "Debris collection and site cleaning for safe handover.",
      },
    ],
  },
  {
    id: "fabrication-roofing",
    title: "Fabrication & Roofing Sheet Works",
    intro:
      "Sheet works and fabrication for residential, commercial and industrial requirements.",
    items: [
      {
        title: "Residential Works",
        img: "/gallery/site8.jpg",
        desc: "Roofing and fabrication for residential buildings.",
      },
      {
        title: "Commercial Works",
        img: "/gallery/site9.jpg",
        desc: "Sheet roofing solutions for commercial spaces.",
      },
      {
        title: "Warehouse Works",
        img: "/gallery/site10.jpg",
        desc: "Strong and durable warehouse roofing structures.",
      },
      {
        title: "Temporary Structures",
        img: "/gallery/site11.jpg",
        desc: "Temporary sheds and fast-install solutions.",
      },
    ],
  },
  {
    id: "iron-scrap",
    title: "Iron Scrap (Buy & Sell)",
    intro:
      "Buying and selling iron scrap with transparent pricing and quick pickup.",
    items: [
      {
        title: "Buying Iron Scrap",
        img: "/gallery/site12.jpg",
        desc: "We purchase iron scrap from demolition and industrial sites.",
      },
      {
        title: "Selling Iron Scrap",
        img: "/gallery/site13.jpg",
        desc: "Supplying iron scrap as per customer requirements.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-5 py-16">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Home / Services
          </p>

          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Services
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Professional demolition, fabrication, roofing and scrap
                solutions delivered with safety, experience and reliability.
              </p>
            </div>

            <Link
              href="/#contact"
              className="w-fit rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Services Sections */}
        {serviceGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="py-16 border-t"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {group.title}
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              {group.intro}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl overflow-hidden border border-gray-200 bg-white
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
