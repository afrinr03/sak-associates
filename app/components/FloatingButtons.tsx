"use client";

export default function FloatingButtons() {
  const phoneNumber = "919150314546"; // CHANGE to client number (with country code)
  const whatsappMessage = "Hello SAK Associates, I would like to enquire about demolition services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* Call Button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        aria-label="Call"
      >
        📞
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
        aria-label="WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
