"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "SAK Building Demolition Contractor in Chennai",
    subtitle: "Safe • Planned • Professional Demolition Services",
    image: "/gallery/site7.jpg",
  },
  {
    title: "Roofing Sheet Contractor",
    subtitle: "Industrial • Commercial • Warehouse Roofing Solutions",
    image: "/gallery/site2.jpg",
  },
  {
    title: "All Types of Civil Works",
    subtitle: "Residential • Commercial • Industrial Construction",
    image: "/gallery/site3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-20 flex h-full items-center">
            <div className="mx-auto max-w-6xl px-6">
              <p className="mb-4 text-sm uppercase tracking-widest text-blue-300">
                Demolition & Civil Contractors
              </p>

              <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold text-white leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-gray-200">
                {slide.subtitle}
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#services"
                  className="rounded-md bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-white px-7 py-3 text-white font-medium hover:bg-white hover:text-black transition"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === current ? "bg-blue-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
