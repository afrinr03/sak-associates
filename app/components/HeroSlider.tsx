"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "SAK BUILDING DEMOLITION CONTRACTOR IN CHENNAI",
    subtitle: "SAFE • PLANNED • PROFESSIONAL DEMOLITION SERVICES",
    image: "/gallery/site1.jpg",
  },
  {
    title: "BARRICATION & FABRICATION SHEET WORKS",
    subtitle: "RELIABLE SHEET WORKS FOR SITES & STRUCTURES",
    image: "/gallery/site9.jpg",
  },
  {
    title: "IRON SCRAP DEALERS",
    subtitle: "BUYING & SELLING WITH QUICK PICKUP",
    image: "/gallery/site13.jpg",
  },
  {
    title: "ALL TYPES OF BUILDING DEMOLITION SERVICES IN CHENNAI",
    subtitle: "RESIDENTIAL • COMMERCIAL • INDUSTRIAL DEMOLITION",
    image: "/gallery/site10.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const total = slides.length;
  const slide = slides[current];

  /* Auto slide */
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, total]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[90vh] w-full">

        {/* Background with zoom animation */}
        <div
          key={current}
          className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        {/* Strong dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6 text-white">

            {/* Counter */}
            <p className="mb-6 text-sm tracking-widest text-white/80 animate-fadeUp">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>

            {/* Heading */}
            <h1
              key={slide.title}
              className="max-w-5xl text-4xl md:text-6xl font-extrabold uppercase leading-tight text-white animate-slideUp"
            >
              {slide.title}
            </h1>

            {/* Accent line */}
            <div className="mt-5 h-1 w-28 bg-blue-600 animate-slideUp delay-150" />

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg md:text-xl font-medium tracking-wide text-white/90 animate-slideUp delay-300">
              {slide.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5 animate-slideUp delay-500">
              <a
                href="/services"
                className="rounded-md bg-blue-600 px-9 py-3 text-white font-bold tracking-wide hover:bg-blue-700 transition"
              >
                OUR SERVICES
              </a>
              <a
                href="#contact"
                className="rounded-md border-2 border-white px-9 py-3 font-bold tracking-wide text-white hover:bg-white hover:text-black transition"
              >
                GET QUOTE
              </a>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
          <div
            key={current}
            className="h-full bg-blue-600 animate-progress"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + total) % total)}
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white hover:bg-white/30 transition"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrent((c) => (c + 1) % total)}
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white hover:bg-white/30 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
