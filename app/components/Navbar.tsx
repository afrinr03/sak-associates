export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">SAK Associates</div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <a
          href="#contact"
          className="px-4 py-2 text-sm rounded-md bg-slate-900 text-white"
        >
            <a
  href="#contact"
  className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
>
  Get Quote
</a>

          Get Quote
        </a>
      </div>
    </header>
  );
}
