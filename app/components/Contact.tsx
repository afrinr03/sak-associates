"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E0B05C] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* LOGO */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/logo.png"
            alt="SAK Associates Logo"
            width={180}
            height={80}
            priority
          />
        </div>

        {/* TEXT */}
        <p className="text-sm uppercase tracking-widest text-white/80">
          Contact Us
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          Get in Touch
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-white/90">
          Reach out to us for building demolition, roofing sheet works and iron
          scrap requirements. Our team will assist you with clear guidance and
          timely support.
        </p>
      </div>

      {/* DARK BLUE CONTACT BOX */}
      <div className="mt-16 bg-[#0B1320] py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-left">

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Address
            </h3>
            <p className="text-gray-300 leading-relaxed">
              No.7, KRJ Building,<br />
              Welders Street,<br />
              Mount Road,<br />
              Chennai – 600002
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Call Us
            </h3>
            <p className="text-gray-300">
              +91 9150314546<br />
              +91 9940514546<br />
              +91 9840714546
            </p>
            <p className="mt-2 text-sm text-gray-400">
              24 × 7 Support
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Email
            </h3>
            <p className="text-gray-300">
              sakassociateschennai@gmail.com
            </p>
            <p className="mt-2 text-sm text-gray-400">
              24 × 7 Online Support
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
