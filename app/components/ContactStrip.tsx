"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="bg-[#E6A843] py-16">
      <div className="mx-auto max-w-6xl px-6 text-white space-y-8">

        {/* Address */}
        <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
          <MapPin size={28} />
          <div>
            <p className="text-xl font-semibold">
              No.7, KRJ Building, Welders Street,
            </p>
            <p className="text-lg">
              Mount Road, Chennai – 600002
            </p>
          </div>
        </div>

        {/* Phone 1 */}
        <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
          <Phone size={28} />
          <div>
            <p className="text-xl font-semibold">+91 9150314546</p>
            <p className="text-sm opacity-90">24 × 7 Support</p>
          </div>
        </div>

        {/* Phone 2 */}
        <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
          <Phone size={28} />
          <div>
            <p className="text-xl font-semibold">+91 9940514546</p>
            <p className="text-sm opacity-90">24 × 7 Support</p>
          </div>
        </div>

        {/* Phone 3 */}
        <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
          <Phone size={28} />
          <div>
            <p className="text-xl font-semibold">+91 9940514546</p>
            <p className="text-sm opacity-90">24 × 7 Support</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
          <Mail size={28} />
          <div>
            <p className="text-xl font-semibold">
              sakassociateschennai@gmail.com
            </p>
            <p className="text-sm opacity-90">24 × 7 Online Support</p>
          </div>
        </div>

      </div>
    </section>
  );
}
