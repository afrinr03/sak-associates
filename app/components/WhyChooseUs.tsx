"use client";

import Image from "next/image";

const topItems = [
  {
    title: "Best Quality",
    desc: "Get the best services in market.",
    icon: "/why/quality.png",
  },
  {
    title: "Affordable Price",
    desc: "Best value pricing with clear quotes.",
    icon: "/why/price.png",
  },
  {
    title: "Safety",
    desc: "We always put people’s safety first.",
    icon: "/why/safety.png",
  },
];

const bottomItems = [
  {
    title: "Skilled Execution",
    desc: "Highly experienced team executing demolition with precision and control.",
    icon: "/why/skilled-execution.png",
  },
  {
    title: "Controlled Demolition",
    desc: "Planned dismantling ensuring safety, stability and minimal disturbance.",
    icon: "/why/controlled-demolition.png",
  },
  {
    title: "Clean Site Handover",
    desc: "Complete debris removal and a clean, ready-to-use project handover.",
    icon: "/why/clean-handover.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24"
      style={{ backgroundColor: "#EEF6FF" }} // warm light blue like JKM
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700 tracking-tight">
          Why Choose SAK Associates
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
          We strive to deliver safe, reliable and efficient demolition solutions
          while ensuring quality execution and timely project completion.
        </p>

        {/* TOP 3 ICONS */}
        <div className="mt-16 grid gap-14 md:grid-cols-3">
          {topItems.map((it) => (
            <div
              key={it.title}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={it.icon}
                alt={it.title}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="text-2xl font-extrabold text-blue-700">
                {it.title}
              </h3>
              <p className="mt-2 text-lg text-gray-900">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER EXCAVATOR IMAGE */}
        <div className="mt-20 flex justify-center">
          <Image
            src="/why/excavator.png"
            alt="Excavator"
            width={520}
            height={520}
            className="object-contain"
            priority
          />
        </div>

        {/* BOTTOM 3 ICONS (SAME STYLE AS TOP) */}
        <div className="mt-20 grid gap-14 md:grid-cols-3">
          {bottomItems.map((it) => (
            <div
              key={it.title}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={it.icon}
                alt={it.title}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="text-2xl font-extrabold text-blue-700">
                {it.title}
              </h3>
              <p className="mt-2 text-lg text-gray-900">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
