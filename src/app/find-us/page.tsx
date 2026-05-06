import type { Metadata } from "next";
import WaveDivider from "@/components/wave-divider";
import { MapPin, Clock, Phone, Car, Train } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find High Tide Cafe on the Semaphore esplanade, South Australia. Directions, parking and transport info.",
};

export default function FindUsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#324740] pt-36 pb-4 px-6 text-center">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">Where to Go</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          Find Us
        </h1>
        <WaveDivider fill="#FEF8F4" bg="transparent" />
      </section>

      {/* Info + Map */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-3xl mb-6">
                Come find us on the esplanade.
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#F8D9D4]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Address</p>
                    <p className="text-[#324740]/70">
                      35 Semaphore Rd
                      <br />
                      Semaphore SA 5019
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#F8D9D4]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Hours</p>
                    <p className="text-[#324740]/70">
                      Mon–Fri: 7am – 3pm
                      <br />
                      Sat–Sun: 7am – 4pm
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#324740] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#F8D9D4]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#324740] mb-1">Phone</p>
                    <a
                      href="tel:0884490000"
                      className="text-[#324740]/70 hover:text-[#324740] transition-colors"
                    >
                      (08) 8449 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting here */}
            <div className="border-t border-[#324740]/10 pt-8">
              <h3 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-2xl mb-5">
                Getting Here
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <Car size={20} className="text-[#324740] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#324740] mb-1">By Car</p>
                    <p className="text-[#324740]/70 text-sm">
                      Street parking is available along the Semaphore Esplanade and nearby side streets. We&apos;re easy to spot right along the foreshore.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Train size={20} className="text-[#324740] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#324740] mb-1">By Train</p>
                    <p className="text-[#324740]/70 text-sm">
                      Take the Outer Harbor line to Semaphore station — we&apos;re a short 5-minute walk down to the esplanade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=35+Semaphore+Rd+Semaphore+SA+5019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#324740] text-[#F8D9D4] font-semibold px-8 py-4 rounded-full hover:bg-[#253530] transition-colors duration-200 text-sm tracking-wide text-center"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm h-[480px]">
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
      </section>

      {/* Bottom wave */}
      <div className="bg-[#324740]">
        <WaveDivider fill="#324740" bg="#FEF8F4" />
      </div>
      <section className="bg-[#324740] py-16 px-6 text-center">
        <p className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-3xl md:text-4xl italic">
          The tide&apos;s always in for good coffee.
        </p>
        <p className="text-[#F8D9D4]/50 text-sm mt-4">See you soon.</p>
      </section>
      <div className="bg-[#324740]">
        <WaveDivider fill="#FEF8F4" bg="#324740" />
      </div>
    </>
  );
}
