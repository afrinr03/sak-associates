"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* Call */}
      <a
        href="tel:+919150314546"
        className="h-14 w-14 rounded-full bg-blue-600 text-white
        flex items-center justify-center shadow-lg
        hover:scale-110 transition"
        title="Call Us"
      >
        📞
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919150314546"
        target="_blank"
        className="h-14 w-14 rounded-full bg-green-500 text-white
        flex items-center justify-center shadow-lg
        hover:scale-110 transition"
        title="WhatsApp"
      >
        💬
      </a>

    </div>
  );
}
