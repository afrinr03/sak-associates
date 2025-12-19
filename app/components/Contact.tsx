"use client";

export default function Contact() {
  const phone = "9150314546";
  const whatsappMessage =
    "Hello SAK Associates, I would like to enquire about demolition services.";

  return (
    <section id="contact" className="bg-slate-50 border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Enquiry</h2>
        <p className="mt-2 text-slate-600">
          Share your requirement. We’ll contact you shortly.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          
          {/* Contact Details */}
          <div className="rounded-lg border bg-white p-6">
            <h3 className="text-lg font-semibold">SAK Associates</h3>
            <p className="mt-1 text-slate-600">
              Chennai – Demolition & Dismantling Services
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p>📞 Phone: +91 {phone}</p>
              <p>📍 Address: No.7, KRJ Building, Welder Street, Mount Road, Chennai – 600002</p>
              <p>✉️ Email: sakassociateschennai@gmail.com</p>
            </div>

            <a
              href={`https://wa.me/91${phone}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-green-500 px-6 py-3 text-white hover:bg-green-600"
            >
              WhatsApp Enquiry
            </a>
          </div>

          {/* Enquiry Form (UI only) */}
          <div className="rounded-lg border bg-white p-6">
            <h3 className="text-lg font-semibold">Send an Enquiry</h3>

            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-md border px-4 py-2"
              />
              <textarea
                placeholder="Your Requirement"
                rows={4}
                className="w-full rounded-md border px-4 py-2"
              />

              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=Welder%20Street%20Mount%20Road%20Chennai&output=embed"
            className="w-full h-[300px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
