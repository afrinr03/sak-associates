export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              SAK Associates
            </h3>
            <p className="text-sm leading-relaxed">
              Trusted demolition, roofing and civil construction contractors
              delivering safe and reliable solutions across Chennai.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold mb-4">Address</h4>
            <p className="text-sm leading-relaxed">
              Welders Street,<br />
              Anna Salai,<br />
              Chennai – 600002
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">📞 +91 9150314546</p>
            <p className="text-sm mt-2">✉️ sakassociateschennai@gmail.com</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} SAK Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
