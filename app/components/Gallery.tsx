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
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Project Gallery</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A glimpse of our demolition, barrication, and scrap works across Chennai.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src) => (
            <div
              key={src}
              className="cursor-pointer overflow-hidden rounded-lg border group"
              onClick={() => setActiveImage(src)}
            >
              <img
                src={src}
                alt="SAK Associates work"
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Full view"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
