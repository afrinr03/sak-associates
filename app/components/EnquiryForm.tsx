"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // ✅ simple validation
    if (form.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const phoneNumber = "919150314546"; // client WhatsApp number (no +)

    const text = `
New Enquiry - SAK Associates

Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email}
Site Location: ${form.location}

Message:
${form.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSuccess(true);
    setForm({
      name: "",
      mobile: "",
      email: "",
      location: "",
      message: "",
    });
  };

  return (
    <section id="enquiry" className="bg-[#F4D77C] py-16 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <p className="mb-2 text-sm font-bold tracking-widest text-red-600 uppercase">
          Get a Free Quote
        </p>
        <h2 className="mb-10 text-3xl md:text-4xl font-semibold text-black">
          Enquire Now
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            required
            placeholder="Name *"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 text-lg"
          />

          <input
            name="mobile"
            required
            placeholder="Mobile Number *"
            value={form.mobile}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 text-lg"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email ID *"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 text-lg"
          />

          <input
            name="location"
            required
            placeholder="Site Location *"
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 text-lg"
          />

          <textarea
            name="message"
            required
            placeholder="Message *"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg px-5 py-4 text-lg resize-none"
          />

          {/* Error */}
          {error && (
            <p className="text-red-600 font-medium">{error}</p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-700 font-medium">
              Enquiry prepared. WhatsApp opened successfully.
            </p>
          )}

          <button
            type="submit"
            className="mt-4 rounded-lg bg-black px-10 py-4 text-lg font-semibold text-white hover:bg-neutral-800 transition"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
