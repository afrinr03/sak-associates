"use client";

import { useState } from "react";

const images = [
  "/gallery/site1.jpg",
  "/gallery/site2.jpg",
  "/gallery/site3.jpg",
  "/gallery/site4.jpg",
  "/gallery/site5.jpg",
  "/gallery/site6.jpg",
  "/gallery/site7.jpg",
  "/gallery/site8.jpg",
  "/gallery/site9.jpg",
  "/gallery/site10.jpg",
  "/gallery/site11.jpg",
  "/gallery/site12.jpg",
  "/gallery/site13.jpg",
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Project Gallery
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            A glimpse of our completed demolition, roofing and civil construction projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <div
              key={img}
              onClick={() => setActive(img)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
            >
              <div
                className="h-[260px] bg-cover bg-center transition-transform duration-500
                  group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0
                  transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Text */}
              <div
                className="absolute inset-0 flex items-center justify-center
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="text-white text-sm uppercase tracking-widest">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Project"
            className="max-h-[90vh] max-w-full rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
