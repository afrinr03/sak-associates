"use client";

import { useEffect, useState } from "react";

const images = [
  "/gallery/site1.jpg",
  "/gallery/site2.jpg",
  "/gallery/site3.jpg",
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* WHO WE ARE */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Who We Are & What We Do
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            SAK Associates
          </h2>

          {/* EXPERIENCE – CHANGED TO BLUE */}
          <h3 className="mt-3 text-3xl md:text-4xl font-bold text-blue-600">
            Over 20 Years of Industry Experience
          </h3>

          <div className="mt-8 max-w-4xl space-y-5 text-gray-700 leading-relaxed">
            <p>
              SAK Associates is a trusted and experienced building demolition,
              roofing and civil construction contractor based in Chennai.
              With over two decades of hands-on industry experience, we have
              successfully delivered projects across residential, commercial
              and industrial sectors.
            </p>

            <p>
              Our team consists of skilled professionals who specialize in
              controlled demolition, structural dismantling, roofing sheet
              installation and complete civil works. Every project is executed
              based on carefully formulated plans, site assessments and the
              use of highly efficient modern machinery.
            </p>

            <p>
              We focus on safety, precision and minimal disruption while
              ensuring timely completion and cost-effective execution. Our
              commitment to quality and transparent working practices has
              earned us long-term relationships with clients across Chennai
              and surrounding regions.
            </p>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative mb-24 overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div
                  className="h-[420px] md:h-[520px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={() =>
                setIndex((index - 1 + images.length) % images.length)
              }
              className="rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((index + 1) % images.length)}
              className="rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
            >
              ›
            </button>
          </div>
        </div>

        {/* VISION / MISSION / VALUES */}
        <div className="grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <h4 className="text-xl font-bold text-blue-600 mb-3">
              Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To become a reliable and responsible leader in the demolition and
              construction industry by adopting safe, sustainable and
              environmentally conscious practices.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-blue-600 mb-3">
              Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To deliver innovative, cost-effective and high-quality demolition,
              roofing and civil construction solutions while maintaining strict
              safety standards and customer satisfaction.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-blue-600 mb-3">
              Values
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Safety, integrity, transparency, professionalism and respect for
              people, property and the environment form the foundation of our
              work culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
