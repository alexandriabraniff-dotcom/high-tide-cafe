import type { Metadata } from "next";
import Image from "next/image";
import WaveDivider from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about High Tide Cafe — our story, our people, and why we love Semaphore.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#324740] pt-36 pb-4 px-6 text-center">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">Our Story</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          About High Tide
        </h1>
        <WaveDivider fill="#FEF8F4" bg="transparent" />
      </section>

      {/* Story */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=80"
              alt="High Tide Cafe"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl mb-6 leading-tight">
              Born from the love of good coffee and the Semaphore vibe.
            </h2>
            <div className="flex flex-col gap-4 text-[#324740]/70 leading-relaxed">
              <p>
                High Tide started as a simple idea — a place where locals could start their morning right, with a coffee worth lingering over and a plate worth talking about. We opened our doors on the Semaphore esplanade and never looked back.
              </p>
              <p>
                The name says it all. Every high tide brings something new to the shore — and every morning, we bring something fresh to the table. We source locally, cook from scratch, and pour with care.
              </p>
              <p>
                We&apos;re not trying to be the biggest cafe in Adelaide. We&apos;re trying to be the one you come back to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <div className="bg-[#324740]">
        <WaveDivider fill="#324740" bg="#FEF8F4" />
      </div>
      <section className="bg-[#324740] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-4xl">
            What we stand for
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality First",
              desc: "We don't cut corners — not with coffee, not with ingredients, not with hospitality.",
            },
            {
              title: "Community Roots",
              desc: "Semaphore is our home. We support local suppliers, local growers, and local people.",
            },
            {
              title: "Keep It Simple",
              desc: "Great coffee. Fresh food. A genuine welcome. That's all you need.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-[#F8D9D4]/5 border border-[#F8D9D4]/10 rounded-2xl p-8 text-center"
            >
              <div className="w-10 h-0.5 bg-[#F8D9D4]/30 mx-auto mb-6" />
              <h3 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-2xl mb-3">
                {val.title}
              </h3>
              <p className="text-[#F8D9D4]/60 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-[#324740]">
        <WaveDivider fill="#FEF8F4" bg="#324740" />
      </div>

      {/* Team photo */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#324740]/50 text-xs uppercase tracking-widest mb-4">The Team</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl mb-6">
            Faces behind the coffee
          </h2>
          <p className="text-[#324740]/70 text-base leading-relaxed mb-10">
            We&apos;re a small, passionate crew who genuinely love what we do. You&apos;ll find us behind the bar most mornings — come say g&apos;day.
          </p>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80"
              alt="High Tide Cafe team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
