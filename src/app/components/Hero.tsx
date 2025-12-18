export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm uppercase tracking-wide text-slate-600">
          Chennai Demolition Services
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
          SAK Associates – Safe & Professional Demolition
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          We handle building demolition, interior dismantling, debris clearance,
          and scrap removal across Chennai.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-slate-900 text-white rounded-md">
            Request Quote
          </a>

          <a href="tel:+919999999999" className="px-6 py-3 border rounded-md">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
