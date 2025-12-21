"use client";

import { useState } from "react";

const services = [
  {
    title: "Building Demolition",
    desc: "Complete demolition solutions for residential, commercial and industrial structures.",
    items: [
      "Manual Demolition",
      "Compressor Demolition",
      "Machine Demolition",
      "Interior Demolition",
      "Foundation Removal",
      "Warehouse & Industrial Demolition",
      "Debris and Waste Removal",
    ],
  },
  {
    title: "Barrigation and Fabrication Sheet Works",
    desc: "Barrigation and Fabrication Sheet Workfor long-lasting and safe structures.",
    items: [
      "Residential Structures",
      "Commercial Structures",
      "Warehouse Structures",
      "Temporary Structures",
    ],
  },
  {
    title: "Iron Scrap",
    desc: "Buying and selling iron scrap with transparent pricing.",
    items: [
      "Buying Iron Scrap",
      "Selling Iron Scrap",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="border rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="text-blue-600 font-medium"
              >
                {open === i ? "Hide details" : "View details"}
              </button>

              {open === i && (
                <ul className="mt-4 space-y-2 text-gray-700">
                  {s.items.map(item => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
