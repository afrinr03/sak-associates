"use client";

import Image from "next/image";
import WaveDivider from "./WaveDivider";

export default function Footer() {
  return (
    <footer className="bg-[#0B1628] text-white">
      {/* TOP: Logo area */}
      <div className="px-6 pt-16 pb-10">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="SAK Associates"
              width={520}
              height={220}
              priority
              className="h-auto w-[260px] md:w-[420px] object-contain opacity-90"
            />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-white/80 leading-relaxed">
            Trusted demolition contractors delivering safe and reliable solutions
            across Chennai.
          </p>
        </div>
      </div>

      {/* Wave + Mustard strip */}
      <div className="relative">
        <WaveDivider
          className="absolute -top-[60px] left-0 w-full sm:-top-[68px]"
          fill="#D9A441"
        />

        <div className="bg-[#D9A441] text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-12 md:grid-cols-3 md:gap-10">
              {/* Address */}
              <div className="flex gap-4">
                <div className="text-3xl leading-none">📍</div>
                <div>
                  <h4 className="text-xl font-extrabold">Address</h4>
                  <p className="mt-2 text-lg leading-relaxed text-white/95">
                    No.7, KRJ Building, Welders Street,
                    <br />
                    Mount Road, Chennai – 600002
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4">
                <div className="text-3xl leading-none">📞</div>
                <div>
                  <h4 className="text-xl font-extrabold">Call Us</h4>
                  <p className="mt-2 text-lg leading-relaxed text-white/95">
                    +91 9150314546
                    <br />
                    +91 9940514546
                    <br />
                    +91 9840714546
                  </p>
                  <p className="mt-2 text-white/90">24 × 7 Support</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl leading-none">✉️</div>
                <div>
                  <h4 className="text-xl font-extrabold">Email</h4>
                  <p className="mt-2 text-lg text-white/95 break-words">
                    sakassociateschennai@gmail.com
                  </p>
                  <p className="mt-2 text-white/90">24 × 7 Online Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-center text-white/70">
            © {new Date().getFullYear()} SAK Associates. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
