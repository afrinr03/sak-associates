"use client";

import { useState } from "react";

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  const services = [
    {
      title: "Building Demolition",
      desc: "Safe and controlled demolition works for residential, commercial, and warehouse structures.",
      items: [
        "Manual Demolition",
        "Compressor Demolition",
        "Machine Demolition",
        "Interior Demolition",
        "Foundation Removal",
        "Warehouse & Industrial Demolition",
        "Debris & Waste Clearance",
      ],
    },
    {
      title: "Barrication & Structural Works",
      desc: "Barrication and demolition support works ensuring site safety and smooth execution.",
      items: [
        "Residential Demolition",
        "Commercial Demolition",
        "Warehouse Demolition",
        "Temporary Structure Removal",
        "Site Barrication & Safety Fencing",
      ],
    },
    {
      title: "Iron Scrap Buying & Selling",
      desc: "Iron scrap buying, selling, and clearance from demolition and dismantling sites.",
      items: [
        "Iron Scrap Buying",
        "Iron Scrap Selling",
        "Bulk Scrap Clearance",
        "Site Scrap Removal",
      ],
    },
  ];

  return (
    <section id="services" className="bg-slate-50 border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Established in 1970, SAK Associates provides demolition and dismantling
          services backed by over 55 years of experience in Chennai.
        </p>

        <div className="mt-10 space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-lg border bg-white p-6 cursor-pointer hover:shadow transition"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {service.desc}
                  </p>
                </div>
                <span className="text-2xl font-light">
                  {open === index ? "−" : "+"}
                </span>
              </div>

              {open === index && (
                <ul className="mt-4 list-disc list-inside text-sm text-slate-700 space-y-1">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
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
