import type { Metadata } from "next";
import WaveDivider from "@/components/wave-divider";
import { Clock, Calendar, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Hours",
  description:
    "High Tide Cafe opening hours — open 7 days a week in Semaphore, SA.",
};

const hours = [
  { day: "Monday", open: "7:00am", close: "3:00pm" },
  { day: "Tuesday", open: "7:00am", close: "3:00pm" },
  { day: "Wednesday", open: "7:00am", close: "3:00pm" },
  { day: "Thursday", open: "7:00am", close: "3:00pm" },
  { day: "Friday", open: "7:00am", close: "3:00pm" },
  { day: "Saturday", open: "7:00am", close: "4:00pm" },
  { day: "Sunday", open: "7:00am", close: "4:00pm" },
];

export default function HoursPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#324740] pt-36 pb-4 px-6 text-center">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">When to Visit</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          Opening Hours
        </h1>
        <WaveDivider fill="#FEF8F4" bg="transparent" />
      </section>

      {/* Hours table */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#324740] px-8 py-6 flex items-center gap-3">
              <Clock size={20} className="text-[#F8D9D4]" />
              <span className="text-[#F8D9D4] font-semibold tracking-wide text-sm uppercase">
                Weekly Hours
              </span>
            </div>
            <div className="divide-y divide-[#324740]/10">
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between items-center px-8 py-5"
                >
                  <span className="font-medium text-[#324740]">{row.day}</span>
                  <span className="font-[family-name:var(--font-fraunces)] text-[#324740] text-lg">
                    {row.open} – {row.close}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex gap-3 items-start bg-[#F8D9D4]/50 rounded-xl p-5">
              <Calendar size={18} className="text-[#324740] shrink-0 mt-0.5" />
              <p className="text-[#324740]/80 text-sm leading-relaxed">
                We may have adjusted hours over public holidays. Follow us on Facebook for any updates.
              </p>
            </div>
            <div className="flex gap-3 items-start bg-[#F8D9D4]/50 rounded-xl p-5">
              <Info size={18} className="text-[#324740] shrink-0 mt-0.5" />
              <p className="text-[#324740]/80 text-sm leading-relaxed">
                Breakfast is served all morning. Lunch from 11:30am until close. Kitchen may close 15 minutes before we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tide quote */}
      <div className="bg-[#324740]">
        <WaveDivider fill="#324740" bg="#FEF8F4" />
      </div>
      <section className="bg-[#324740] py-16 px-6 text-center">
        <blockquote className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-3xl md:text-4xl italic max-w-xl mx-auto leading-snug">
          &ldquo;The best time to visit is always right now.&rdquo;
        </blockquote>
        <p className="text-[#F8D9D4]/40 text-sm mt-4">— The High Tide Team</p>
      </section>
      <div className="bg-[#324740]">
        <WaveDivider fill="#FEF8F4" bg="#324740" />
      </div>
    </>
  );
}
