"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* LOGO */}
          <Link href="/" className="text-xl font-bold">
            <img
              src="/logo.png"
              alt="SAK Associates"
              className="h-10 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 font-semibold text-gray-800">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact Us</Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="h-[2px] w-6 bg-gray-900" />
            <span className="h-[2px] w-6 bg-gray-900" />
            <span className="h-[2px] w-6 bg-gray-900" />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black/90 backdrop-blur-sm`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className={`absolute top-6 right-6 text-3xl text-yellow-400 transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* MENU CONTENT */}
        <nav
          className={`flex h-full flex-col items-center justify-center gap-8 text-2xl font-semibold text-white transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "/services" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact Us", href: "#contact" },
          ].map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="transition hover:text-yellow-400"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

