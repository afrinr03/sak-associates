import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">

      {/* Logo + Menu + Description */}
      <div className="max-w-6xl mx-auto px-6 py-14 text-center">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="SAK Associates"
          width={220}
          height={90}
          className="mx-auto"
        />

        {/* Menu Links */}
        <div className="flex justify-center gap-10 mt-8 text-lg font-semibold flex-wrap">
          <FooterLink>Home</FooterLink>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Gallery</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm max-w-3xl mx-auto text-gray-300">
          SAK Associates is a trusted and experienced building demolition,
          roofing sheet and barrication contractor providing safe and
          efficient project execution across Chennai and surrounding regions.
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SAK Associates. All rights reserved.
      </div>
    </footer>
  );
}

/* Helper */
function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="cursor-pointer hover:text-[#E6A843] transition">
      {children}
    </span>
  );
}
