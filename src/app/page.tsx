import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/wave-divider";
import { Coffee, Utensils, Sun, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "High Tide Cafe | Semaphore, SA",
  description:
    "Where the coffee's strong and the sea breeze is stronger. Visit High Tide Cafe on the Semaphore esplanade.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#324740]">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&q=80"
          alt="High Tide Cafe interior"
          fill
          className="object-cover opacity-25"
          priority
        />

        {/* Animated wave overlay */}
        <div className="absolute bottom-16 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="wave-animate flex" style={{ width: "200%" }}>
            <svg
              viewBox="0 0 1440 80"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/2 h-16"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
                fill="#F8D9D4"
                fillOpacity="0.08"
              />
            </svg>
            <svg
              viewBox="0 0 1440 80"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/2 h-16"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
                fill="#F8D9D4"
                fillOpacity="0.08"
              />
            </svg>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#F8D9D4] text-sm md:text-base uppercase tracking-[0.25em] mb-6 tide-rise">
            Semaphore, South Australia
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 tide-rise-delay-1">
            Catch the
            <br />
            <span className="italic text-white">Morning Tide</span>
          </h1>
          <p className="text-[#F8D9D4] text-lg md:text-xl opacity-80 mb-10 leading-relaxed tide-rise-delay-2">
            Coffee that grounds you. Food that lifts you.
            <br className="hidden md:block" />
            Right here on the Semaphore esplanade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center tide-rise-delay-3">
            <Link
              href="/menu"
              className="inline-block bg-[#F8D9D4] text-[#324740] font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200 text-sm tracking-wide"
            >
              See Our Menu
            </Link>
            <Link
              href="/find-us"
              className="inline-block border border-[#F8D9D4] text-[#F8D9D4] font-semibold px-8 py-4 rounded-full hover:bg-[#F8D9D4]/10 transition-colors duration-200 text-sm tracking-wide"
            >
              Find Us
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider fill="#FEF8F4" bg="transparent" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl md:text-5xl mb-6 leading-tight">
            The tide brings something good every morning.
          </h2>
          <p className="text-[#324740]/70 text-lg leading-relaxed">
            We&apos;re a neighbourhood cafe tucked on the Semaphore esplanade — the kind of place you wander into for coffee and stay for the company. Honest food, quality coffee, and that unmistakable sea breeze drifting through the door.
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <div className="bg-[#324740]">
        <WaveDivider fill="#324740" bg="#FEF8F4" />
      </div>
      <section className="bg-[#324740] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Coffee size={28} />,
              title: "Specialty Coffee",
              desc: "Single-origin beans, pulled with care. Every cup like the first wave of the day.",
            },
            {
              icon: <Utensils size={28} />,
              title: "Fresh Bites",
              desc: "Breakfast and lunch made with local produce and a whole lot of love.",
            },
            {
              icon: <Sun size={28} />,
              title: "All-Day Vibes",
              desc: "Whether you&apos;re chasing the sunrise or a slow afternoon — we&apos;re here for it.",
            },
            {
              icon: <MapPin size={28} />,
              title: "Semaphore Locals",
              desc: "35 Semaphore Rd — steps from the jetty. Easy to find, hard to leave.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4 p-6"
            >
              <div className="w-14 h-14 rounded-full bg-[#F8D9D4]/10 flex items-center justify-center text-[#F8D9D4]">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-xl">
                {item.title}
              </h3>
              <p className="text-[#F8D9D4]/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-[#324740]">
        <WaveDivider fill="#FEF8F4" bg="#324740" />
      </div>

      {/* ── MENU TEASER ── */}
      <section className="bg-[#FEF8F4] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#324740]/50 text-xs uppercase tracking-widest mb-3">
              What&apos;s on
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl md:text-5xl">
              A taste of High Tide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
                category: "Coffee",
                title: "The Daily Pull",
                desc: "Our house espresso — smooth, balanced, and made to be savoured.",
              },
              {
                img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80",
                category: "Breakfast",
                title: "Smashed Avo Toast",
                desc: "Sourdough, whipped ricotta, chilli flakes, a squeeze of lemon.",
              },
              {
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
                category: "Lunch",
                title: "Pulled Chicken Wrap",
                desc: "Slow-cooked chicken, house slaw, chipotle mayo, soft flour wrap.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#324740]/50 text-xs uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#324740]/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-[#324740] text-[#F8D9D4] font-semibold px-8 py-4 rounded-full hover:bg-[#253530] transition-colors duration-200 text-sm tracking-wide"
            >
              Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOURS / FIND US CTA ── */}
      <section className="bg-[#F8D9D4] py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl md:text-5xl mb-4 leading-tight">
              Come find us
              <br />
              <span className="italic">before the tide turns.</span>
            </h2>
            <p className="text-[#324740]/70 text-base leading-relaxed max-w-sm">
              Open seven days a week. Breakfast and lunch served fresh, every single day.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-w-fit">
            <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#324740]/50 mb-1">
                Mon – Fri
              </p>
              <p className="font-[family-name:var(--font-fraunces)] text-[#324740] text-2xl">
                7am – 3pm
              </p>
            </div>
            <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#324740]/50 mb-1">
                Sat – Sun
              </p>
              <p className="font-[family-name:var(--font-fraunces)] text-[#324740] text-2xl">
                7am – 4pm
              </p>
            </div>
            <Link
              href="/find-us"
              className="text-center bg-[#324740] text-[#F8D9D4] font-semibold px-6 py-4 rounded-full hover:bg-[#253530] transition-colors duration-200 text-sm tracking-wide"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
