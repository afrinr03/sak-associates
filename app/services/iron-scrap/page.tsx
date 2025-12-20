export const metadata = {
  title: "Iron Scrap Buying & Selling | SAK Associates",
};
export default function IronScrapPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Iron Scrap – Buying & Selling
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl">
          We buy and sell iron scrap with transparent pricing, accurate weight
          measurement and quick pickup from demolition and industrial sites.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Buying Iron Scrap"
            img="/gallery/site12.jpg"
            desc="We purchase iron scrap from demolition sites, factories and warehouses."
          />

          <ServiceCard
            title="Selling Iron Scrap"
            img="/gallery/site13.jpg"
            desc="Supplying iron scrap based on customer requirement and quantity."
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
