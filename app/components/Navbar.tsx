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

      {/* MOBILE OVERLAY MENU (JKM STYLE) */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl text-yellow-400"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* MENU ITEMS */}
          <nav className="flex flex-col items-center gap-8 text-2xl font-semibold text-white">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#about" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
