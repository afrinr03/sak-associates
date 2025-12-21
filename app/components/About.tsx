"use client";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            About Us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            SAK Associates
          </h2>
          <p className="mt-4 text-lg font-semibold text-blue-700">
            Over 20 Years of Industry Experience
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl text-gray-700 leading-relaxed space-y-6 text-lg">
          <p>
            SAK Associates is a trusted and experienced building demolition,
            roofing and barrication & fabrication sheet contractor based in
            Chennai. With over two decades of hands-on industry experience, we
            have successfully executed projects across residential, commercial
            and industrial sectors.
          </p>

          <p>
            Our team consists of skilled professionals specializing in controlled
            demolition, structural dismantling, interior demolition, foundation
            removal, roofing sheet works and barrication solutions for sites and
            industrial facilities. Every project is carried out based on
            detailed site assessments, proper safety planning and the use of
            efficient modern machinery.
          </p>

          <p>
            We place strong emphasis on safety, precision and minimal disruption
            to surrounding structures while ensuring timely completion and
            cost-effective execution. Our transparent working practices and
            commitment to quality have helped us build long-term relationships
            with clients across Chennai and nearby regions.
          </p>
        </div>
      </div>
    </section>
  );
}
