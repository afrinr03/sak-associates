"use client";

import WaveDivider from "./WaveDivider";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E0B05C] pt-0 pb-24">
      {/* Wave Animation */}
      <WaveDivider />

      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-white/80">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto">
            Reach out to us for building demolition, roofing sheet works and iron
            scrap requirements. Our team will assist you with clear guidance and
            timely support.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            SAK Associates
          </h3>

          <div className="space-y-6 text-slate-700">
            {/* Address */}
            <p>
              <strong className="text-slate-900">Address</strong>
              <br />
              No.7, KRJ Building,
              <br />
              Welders Street,
              <br />
              Mount Road,
              <br />
              Chennai – 600002
            </p>

            {/* Phone */}
            <p>
              <strong className="text-slate-900">Phone</strong>
              <br />
              +91 9150314546
              <br />
              +91 9940514546
              <br />
              +91 9940514546
            </p>

            {/* Email */}
            <p>
              <strong className="text-slate-900">Email</strong>
              <br />
              sakassociateschennai@gmail.com
            </p>
          </div>

          <p className="mt-8 text-slate-600">
            Serving clients across Chennai and nearby regions with a strong focus
            on safety, quality workmanship and on-time project delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
