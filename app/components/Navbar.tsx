"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SAK Associates"
            width={200}   // increase if needed (220 / 240)
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
