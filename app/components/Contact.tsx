"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Reach out to us for demolition, roofing and civil construction
            requirements. Our team will assist you with clear guidance and
            timely support.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 p-10 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            SAK Associates
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address</strong><br />
              Welders Street,<br />
              Anna Salai,<br />
              Chennai – 600002
            </p>

            <p>
              <strong>Phone</strong><br />
              +91 9150314546
            </p>

            <p>
              <strong>Email</strong><br />
              sakassociateschennai@gmail.com
            </p>
          </div>

          <p className="mt-6 text-gray-600">
            Serving clients across Chennai and nearby regions with a strong
            focus on safety, quality workmanship and on-time delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
