"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="SAK Associates Logo"
    className="h-14 md:h-20 w-auto object-contain"
  />
</Link>


          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
            <a href="/#about" className="hover:text-blue-600">
              About
            </a>
            <a href="/services" className="hover:text-blue-600">
              Services
            </a>
            <a href="/#gallery" className="hover:text-blue-600">
              Gallery
            </a>
            <a href="/#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          
          {/* Close Button */}
          <button
            onClick={() => {
              setMenuOpen(false);
              setServicesOpen(false);
            }}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Menu Content */}
          <div className="h-full flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center gap-8 text-3xl font-medium">

              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <a href="/#about" onClick={() => setMenuOpen(false)}>
                About Us
              </a>

              {/* Services Toggle */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-3"
              >
                Services
                <span className="text-xl">
                  {servicesOpen ? "−" : "+"}
                </span>
              </button>

              {/* Services Submenu */}
              {servicesOpen && (
                <div className="flex flex-col items-center gap-4 text-xl text-white/90">
                  <Link
                    href="/services#building-demolition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Building Demolition
                  </Link>

                  <Link
                    href="/services#fabrication-roofing"
                    onClick={() => setMenuOpen(false)}
                  >
                    Fabrication & Roofing
                  </Link>

                  <Link
                    href="/services#iron-scrap"
                    onClick={() => setMenuOpen(false)}
                  >
                    Iron Scrap
                  </Link>
                </div>
              )}

              <a href="/#gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>

              <a href="/#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
