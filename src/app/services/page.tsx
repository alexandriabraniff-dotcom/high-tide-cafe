import type { Metadata } from "next";
import WaveDivider from "@/components/wave-divider";
import { Coffee, Utensils, Cake, Users, PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything High Tide Cafe offers — specialty coffee, breakfast, lunch, catering and more.",
};

const services = [
  {
    icon: <PawPrint size={28} />,
    title: "Dog Friendly Patio",
    desc: "We're dog people. Our sunny patio is fully dog friendly, so bring your pup along and enjoy your coffee in the open air. Dogs are always welcome at High Tide — just like their owners.",
  },
  {
    icon: <Coffee size={28} />,
    title: "Specialty Coffee",
    desc: "We work with carefully selected single-origin and seasonal blends, dialled in fresh every day. Espresso-based drinks, filter, cold brew, batch brew, and a full range of non-dairy milks.",
  },
  {
    icon: <Utensils size={28} />,
    title: "Breakfast",
    desc: "Morning done right, until midday. Eggs your way, smashed avo toast, granola bowls, French toast — made with local produce and changing with the season.",
  },
  {
    icon: <Utensils size={28} />,
    title: "Lunch",
    desc: "Simple, fresh, and satisfying. Wraps and sandwiches, salads, hot mains, and a soup of the day — all built around bold flavours and generous portions.",
  },
  {
    icon: <Cake size={28} />,
    title: "House-Made Bakes",
    desc: "We bake fresh every morning. Croissants, banana bread, seasonal slices, and cookies — the kind of things that make you glad you stopped in.",
  },
  {
    icon: <Users size={28} />,
    title: "Private & Group Bookings",
    desc: "We love hosting. Whether it's a team catch-up, a birthday brunch, or a community gathering — seated groups, platter options, BYO cake welcome. Enquire via phone.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#324740] pt-36 pb-24 px-6 text-center overflow-hidden">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">What We Offer</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          Our Services
        </h1>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider fill="#FEF8F4" bg="transparent" />
        </div>
      </section>

      {/* Services list */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col divide-y divide-[#324740]/10">
          {services.map((service, i) => (
            <div key={i} className="flex gap-8 items-start py-10 first:pt-0 last:pb-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#324740] flex items-center justify-center text-[#F8D9D4] mt-1">
                {service.icon}
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-2xl mb-2">
                  {service.title}
                </h2>
                <p className="text-[#324740]/70 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
