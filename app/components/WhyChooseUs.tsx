"use client";

const points = [
  {
    title: "Experienced Professionals",
    desc: "Decades of hands-on experience in demolition, roofing and civil construction projects.",
  },
  {
    title: "Safety First Approach",
    desc: "Strict safety standards followed on every site to protect people, property and environment.",
  },
  {
    title: "Quality Workmanship",
    desc: "We focus on strong execution, durable materials and long-lasting results.",
  },
  {
    title: "On-Time Delivery",
    desc: "Well-planned execution ensures projects are completed within agreed timelines.",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear quotations with no hidden charges or last-minute surprises.",
  },
  {
    title: "Chennai-Based Local Expertise",
    desc: "Deep understanding of local regulations, conditions and client requirements in Chennai.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Contractor in Chennai
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            SAK Associates is known for delivering reliable, safe and high-quality
            construction solutions backed by years of industry experience.
          </p>
        </div>

        {/* Points */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-8 border border-gray-200
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
