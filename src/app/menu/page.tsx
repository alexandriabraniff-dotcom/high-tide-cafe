import type { Metadata } from "next";
import WaveDivider from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Menu",
  description: "High Tide Cafe menu — coming soon.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative bg-[#324740] pt-36 pb-24 px-6 text-center overflow-hidden">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">What&apos;s Cooking</p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          Our Menu
        </h1>
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider fill="#FEF8F4" bg="transparent" />
        </div>
      </section>

      <section className="bg-[#FEF8F4] py-32 px-6 text-center">
        <p className="font-[family-name:var(--font-fraunces)] text-[#324740] text-4xl md:text-5xl mb-4">
          Menu coming soon.
        </p>
        <p className="text-[#324740]/60 text-base mt-4">
          In the meantime, come in and see what&apos;s on — we&apos;re open seven days.
        </p>
      </section>
    </>
  );
}
