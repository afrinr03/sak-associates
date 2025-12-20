export const metadata = {
  title: "Building Demolition Services | SAK Associates",
  description:
    "Professional building demolition services including manual, mechanical, interior and industrial demolition in Chennai.",
};

export default function BuildingDemolitionPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Building Demolition
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl">
          We provide complete building demolition solutions using manual,
          mechanical and heavy machinery methods with strict safety standards.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Manual Demolition"
            img="/gallery/site1.jpg"
            desc="Controlled dismantling for small structures and interior spaces."
          />

          <ServiceCard
            title="Compressor Demolition"
            img="/gallery/site2.jpg"
            desc="Breaker and compressor-based demolition for concrete structures."
          />

          <ServiceCard
            title="Machine Demolition"
            img="/gallery/site3.jpg"
            desc="Excavator and heavy machinery demolition for large projects."
          />

          <ServiceCard
            title="Interior Demolition"
            img="/gallery/site4.jpg"
            desc="Safe internal demolition for renovation and remodeling."
          />

          <ServiceCard
            title="Foundation Removal"
            img="/gallery/site5.jpg"
            desc="Foundation breaking and complete site clearance."
          />

          <ServiceCard
            title="Warehouse & Industrial"
            img="/gallery/site6.jpg"
            desc="Large-scale industrial and warehouse demolition services."
          />
        </div>
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  img,
  desc,
}: {
  title: string;
  img: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition">
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
