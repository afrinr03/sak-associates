import Image from "next/image";

export default function BigLogo() {
  return (
    <section className="bg-[#1f2933] py-24">
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          alt="SAK Associates"
          width={420}
          height={420}
          className="opacity-95"
        />
      </div>
    </section>
  );
}
