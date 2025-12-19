"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    small: "Chennai Based Contractors",
    title: "SAK Building Demolition\nContractor",
    subtitle: "Safe, controlled and professional demolition services.",
    image: "/gallery/site7.jpg",
  },
  {
    small: "Trusted Roofing Specialists",
    title: "Roofing Sheet\nContractor",
    subtitle: "Durable roofing sheet installation and replacement.",
    image: "/gallery/site2.jpg",
  },
  {
    small: "Complete Construction Solutions",
    title: "All Types of\nCivil Works",
    subtitle: "End-to-end civil construction and maintenance works.",
    image: "/gallery/site3.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Parallax scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY * 0.2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[460px] md:h-[620px]">
        {/* SLIDER TRACK */}
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative w-full flex-shrink-0 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms]
                  ${index === i ? "scale-110" : "scale-100"}
                `}
                style={{
                  backgroundImage: `url(${s.image})`,
                  transform: `translateY(${scrollY}px) scale(${
                    index === i ? 1.1 : 1
                  })`,
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/65" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="mx-auto max-w-6xl px-6">
                  {/* Small heading */}
                  <p
                    className={`text-white/80 text-xs md:text-sm uppercase tracking-[0.25em] mb-5 transition-all duration-700
                      ${
                        index === i
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }
                    `}
                  >
                    {s.small}
                  </p>

                  {/* MAIN HEADING */}
                  <h1
                    className={`whitespace-pre-line text-white
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                      font-extrabold leading-[1.1]
                      transition-all duration-700 delay-150
                      ${
                        index === i
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }
                    `}
                    style={{
                      textShadow:
                        "0 4px 20px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.4)",
                    }}
                  >
                    {s.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className={`mt-6 text-white/90 text-base md:text-lg max-w-2xl transition-all duration-700 delay-300
                      ${
                        index === i
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }
                    `}
                  >
                    {s.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === i
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
