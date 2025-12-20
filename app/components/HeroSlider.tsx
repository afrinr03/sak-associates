"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const slides = [
  {
    title: "SAK Building Demolition Contractor in Chennai",
    subtitle: "Safe • Planned • Professional Demolition Services",
    image: "/gallery/site1.jpg",
  },
  {
    title: "Barrigation and Fabrication Sheet Contractor",
    subtitle: "Reliable Sheet Works for Sites & Structures",
    image: "/gallery/site9.jpg",
  },
  {
    title: "Iron Scraps",
    subtitle: "Buying & Selling with Quick Pickup",
    image: "/gallery/site13.jpg",
  },
  {
    title: "All Types of Building Demolition Services in Chennai",
    subtitle: "Residential • Commercial • Industrial Demolition",
    image: "/gallery/site10.jpg",
  },
];

function splitWords(text: string) {
  return text.trim().split(/\s+/);
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = slides.length;

  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  // autoplay
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // current slide data
  const slide = slides[current];

  // word animation key (forces re-animate per slide)
  const animKey = useMemo(() => `slide-${current}`, [current]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;

    // swipe threshold
    if (diff > 60) next(); // left swipe -> next
    if (diff < -60) prev(); // right swipe -> prev
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      // mobile + desktop height
    >
      <div
        className="relative h-[78vh] sm:h-[86vh] md:h-[92vh]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />


        {/* Content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 text-sm uppercase tracking-widest text-blue-300 animate-fadeUp">
              Demolition Contractors
            </p>

            {/* Per-word animated title */}
            <h1
              key={animKey}
              className="max-w-5xl text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              {splitWords(slide.title).map((w, i) => (
                <span
                  key={`${w}-${i}`}
                  className="inline-block animate-fadeUp"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  {w}&nbsp;
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-200 animate-fadeUp delay-300">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-fadeUp delay-450">
              <a
                href="/services"
                className="rounded-md bg-blue-600 px-7 py-3 text-white font-semibold hover:bg-blue-700 transition"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white px-7 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-blue-500" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
