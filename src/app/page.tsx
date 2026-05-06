import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/wave-divider";
import { MapPin, Clock, Phone, Car, Train, Mail } from "lucide-react";

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
        <Image
          src="/hero.jpg"
          alt="High Tide Cafe interior"
          fill
          className="object-cover opacity-25"
          priority
        />

        {/* Wave down into cream intro */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#FEF8F4" bg="transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-[90px] pb-36">
          <p className="text-[#F8D9D4] text-sm md:text-base uppercase tracking-[0.25em] mb-6 tide-rise">
            High Tide Cafe Semaphore
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 tide-rise-delay-1">
            Catch the
            <br />
            <span className="italic text-white">Morning Tide</span>
          </h1>
          <p className="text-[#F8D9D4] text-lg md:text-xl opacity-80 mb-10 leading-relaxed tide-rise-delay-2">
            Coffee that grounds you. Food that lifts you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center tide-rise-delay-3">
            <Link
              href="/menu"
              className="inline-block bg-[#F8D9D4] text-[#324740] font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200 text-sm tracking-wide"
            >
              See Our Menu
            </Link>
            <Link
              href="/#find-us"
              className="inline-block border border-[#F8D9D4] text-[#F8D9D4] font-semibold px-8 py-4 rounded-full hover:bg-[#F8D9D4]/10 transition-colors duration-200 text-sm tracking-wide"
            >
              Find Us
            </Link>
          </div>
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

      {/* ── ABOUT ── */}
      <div id="about" className="bg-[#324740]">
        <WaveDivider fill="#324740" bg="#FEF8F4" />
      </div>
      <section className="bg-[#324740] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/about.jpg"
              alt="High Tide Cafe"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div>
            <p className="text-[#F8D9D4]/50 text-xs uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-4xl mb-6 leading-tight">
              The tide brought us here.
            </h2>
            <div className="flex flex-col gap-4 text-[#F8D9D4]/70 leading-relaxed text-sm">
              <p>
                High Tide started as a simple idea — a place where locals could start their morning right, with a coffee worth lingering over and a plate worth talking about. We opened our doors on the Semaphore esplanade and never looked back.
              </p>
              <p>
                Every high tide brings something new to the shore — and every morning, we bring something fresh to the table. We source locally, cook from scratch, and pour with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND US ── */}
      <div className="bg-[#324740]">
        <WaveDivider fill="#FEF8F4" bg="#324740" />
      </div>
      <section id="find-us" className="bg-[#FEF8F4] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#324740]/50 text-xs uppercase tracking-widest mb-3">Where to Go</p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl md:text-5xl">
              Find Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Details */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#324740]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Address</p>
                    <a
                      href="https://maps.google.com/?q=35+Semaphore+Rd+Semaphore+SA+5019"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#324740]/70 hover:text-[#324740] transition-colors"
                    >
                      35 Semaphore Rd, Semaphore SA 5019
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#324740]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Hours</p>
                    <p className="text-[#324740]/70">
                      Mon–Fri: 7am – 3pm
                      <br />
                      Sat–Sun: 7am – 4pm
                    </p>
                    <p className="text-[#324740]/40 text-xs mt-1">
                      Hours may vary on public holidays.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#324740]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Phone</p>
                    <a href="tel:0884490000" className="text-[#324740]/70 hover:text-[#324740] transition-colors">
                      (08) 8449 0000
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740]/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#324740]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Email</p>
                    <a href="mailto:hello@hightidecafe.com.au" className="text-[#324740]/70 hover:text-[#324740] transition-colors">
                      hello@hightidecafe.com.au
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#324740]/10 pt-6 flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  <Car size={18} className="text-[#324740] shrink-0 mt-0.5" />
                  <p className="text-[#324740]/70 text-sm">
                    Street parking along Semaphore Rd and nearby side streets.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Train size={18} className="text-[#324740] shrink-0 mt-0.5" />
                  <p className="text-[#324740]/70 text-sm">
                    Outer Harbor line to Semaphore station — 5-minute walk to the cafe.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <iframe
                title="High Tide Cafe location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5!2d138.4787!3d-34.8375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0bf10e6e9d5c7%3A0x0!2s35+Semaphore+Rd%2C+Semaphore+SA+5019!5e0!3m2!1sen!2sau!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
