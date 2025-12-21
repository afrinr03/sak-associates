"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="bg-[#F0B23D] py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-12 text-white">

        {/* Address */}
        <div className="flex items-start gap-6">
          <MapPin size={34} strokeWidth={2.2} />
          <div>
            <p className="text-3xl font-bold tracking-wide">
              No.7, KRJ Building, Welders Street
            </p>
            <p className="text-xl mt-1">
              Mount Road, Chennai – 600002
            </p>
          </div>
        </div>

        {/* Phone 1 */}
        <div className="flex items-start gap-6">
          <Phone size={34} strokeWidth={2.2} />
          <div>
            <p className="text-3xl font-bold tracking-wide">
              +91 9150314546
            </p>
            <p className="text-base opacity-90 mt-1">
              24 × 7 Support
            </p>
          </div>
        </div>

        {/* Phone 2 */}
        <div className="flex items-start gap-6">
          <Phone size={34} strokeWidth={2.2} />
          <div>
            <p className="text-3xl font-bold tracking-wide">
              +91 9940514546
            </p>
            <p className="text-base opacity-90 mt-1">
              24 × 7 Support
            </p>
          </div>
        </div>

        {/* Phone 3 */}
        <div className="flex items-start gap-6">
          <Phone size={34} strokeWidth={2.2} />
          <div>
            <p className="text-3xl font-bold tracking-wide">
              +91 9840714546
            </p>
            <p className="text-base opacity-90 mt-1">
              24 × 7 Support
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-6">
          <Mail size={34} strokeWidth={2.2} />
          <div>
            <p className="text-3xl font-bold tracking-wide break-all">
              sakassociateschennai@gmail.com
            </p>
            <p className="text-base opacity-90 mt-1">
              24 × 7 Online Support
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
