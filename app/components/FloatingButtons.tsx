"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      {/* Tooltip */}
      <span
        className="absolute right-16 top-1/2 -translate-y-1/2
        whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs text-white
        opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919150314546"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500 text-white shadow-lg
        transition-all duration-300 hover:bg-green-600 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping" />

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative h-7 w-7"
        >
          <path d="M16.04 2.003c-7.72 0-14 6.28-14 14 0 2.48.66 4.91 1.92 7.05L2 30l7.1-1.86a13.94 13.94 0 006.94 1.83h.01c7.72 0 14-6.28 14-14s-6.28-14-14-14zm0 25.53a11.55 11.55 0 01-5.88-1.6l-.42-.25-4.2 1.1 1.12-4.1-.27-.43a11.52 11.52 0 1110.64 5.28zm6.33-8.62c-.35-.17-2.08-1.03-2.4-1.14-.32-.12-.56-.17-.79.17-.23.35-.9 1.14-1.1 1.37-.2.23-.4.26-.75.09-.35-.17-1.47-.54-2.8-1.72-1.04-.92-1.74-2.05-1.94-2.4-.2-.35-.02-.54.15-.71.16-.16.35-.42.53-.63.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.79-1.9-1.08-2.6-.28-.68-.56-.59-.79-.6h-.67c-.23 0-.6.09-.92.43-.32.35-1.21 1.18-1.21 2.88s1.24 3.35 1.41 3.58c.17.23 2.44 3.72 5.92 5.22.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.08-.85 2.37-1.67.29-.82.29-1.52.2-1.67-.08-.14-.32-.23-.67-.4z" />
        </svg>
      </a>
    </div>
  );
}
