import type { Metadata } from "next";
import WaveDivider from "@/components/wave-divider";
import { Coffee, Utensils, Cake, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything High Tide Cafe offers — specialty coffee, breakfast, lunch, catering and more.",
};

const services = [
  {
    icon: <Coffee size={32} />,
    title: "Specialty Coffee",
    desc: "We work with carefully selected single-origin and seasonal blends. Every cup is dialled in daily — whether you take it black, with milk, or as a cold brew on a warm Semaphore afternoon.",
    items: ["Espresso-based drinks", "Filter & cold brew", "Non-dairy milks", "Batch brew"],
  },
  {
    icon: <Utensils size={32} />,
    title: "Breakfast",
    desc: "Morning done right. Our breakfast menu runs until midday and changes with the season. Hearty, flavourful, and made to fuel your day — whatever that looks like.",
    items: ["Eggs your way", "Smashed avo toast", "Granola bowls", "French toast"],
  },
  {
    icon: <Utensils size={32} />,
    title: "Lunch",
    desc: "Fresh and satisfying. Our lunch menu keeps it simple and delicious — built around local produce, bold flavours, and generous portions.",
    items: ["Wraps & sandwiches", "Salads", "Hot mains", "Soup of the day"],
  },
  {
    icon: <Cake size={32} />,
    title: "House-Made Bakes",
    desc: "We bake fresh every morning. From buttery croissants to chunky cookies and slices — the kind of things that make you glad you stopped in.",
    items: ["Croissants", "Banana bread", "Seasonal slices", "Cookies"],
  },
  {
    icon: <Users size={32} />,
    title: "Private & Group Bookings",
    desc: "Planning something? We love hosting. Whether it&apos;s a small team catch-up, a birthday brunch, or a community event — come chat to us and we&apos;ll make it work.",
    items: ["Seated groups", "Platter options", "BYO cake welcome", "Enquire via phone"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#324740] pt-36 pb-4 px-6 text-center">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">What We Offer</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          Our Services
        </h1>
        <WaveDivider fill="#FEF8F4" bg="transparent" />
      </section>

      {/* Services list */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-10 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#324740] flex items-center justify-center text-[#F8D9D4]">
                {service.icon}
              </div>
              <div className="flex-1">
                <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-3xl mb-3">
                  {service.title}
                </h2>
                <p className="text-[#324740]/70 leading-relaxed mb-5">{service.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      className="bg-[#F8D9D4] text-[#324740] text-xs font-medium px-4 py-2 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#324740]">
        <WaveDivider fill="#324740" bg="#FEF8F4" />
      </div>
      <section className="bg-[#324740] py-20 px-6 text-center">
        <h2 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-4xl mb-4">
          Ready to ride the wave?
        </h2>
        <p className="text-[#F8D9D4]/70 mb-8 max-w-md mx-auto">
          Come in and see what we&apos;re serving today. We&apos;re open seven days a week.
        </p>
        <a
          href="/menu"
          className="inline-block bg-[#F8D9D4] text-[#324740] font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200 text-sm tracking-wide"
        >
          View the Menu
        </a>
      </section>
      <div className="bg-[#324740]">
        <WaveDivider fill="#FEF8F4" bg="#324740" />
      </div>
    </>
  );
}
