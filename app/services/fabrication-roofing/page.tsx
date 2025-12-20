export const metadata = {
  title: "Fabrication & Roofing Services | SAK Associates",
};
export default function FabricationRoofingPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Fabrication & Roofing Sheet Works
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl">
          We provide strong, durable and cost-effective fabrication and roofing
          sheet solutions for residential, commercial and industrial projects.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Residential Roofing Works"
            img="/gallery/site8.jpg"
            desc="Roofing sheet and fabrication works for houses and residential buildings."
          />

          <ServiceCard
            title="Commercial Roofing Works"
            img="/gallery/site9.jpg"
            desc="Fabrication and roofing solutions for offices, shops and commercial spaces."
          />

          <ServiceCard
            title="Warehouse Roofing Works"
            img="/gallery/site10.jpg"
            desc="Heavy-duty roofing sheet installation for warehouses and factories."
          />

          <ServiceCard
            title="Temporary Structures"
            img="/gallery/site11.jpg"
            desc="Temporary sheds, site covers and fast-installation structures."
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
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
