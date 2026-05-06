import type { Metadata } from "next";
import WaveDivider from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "High Tide Cafe menu — specialty coffee, breakfast, lunch and house-made bakes in Semaphore.",
};

const menu = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "$4.50" },
      { name: "Macchiato", price: "$4.80" },
      { name: "Long Black", price: "$5.00" },
      { name: "Flat White", price: "$5.50" },
      { name: "Cappuccino", price: "$5.50" },
      { name: "Latte", price: "$5.50" },
      { name: "Chai Latte", price: "$6.00" },
      { name: "Matcha Latte", price: "$6.50" },
      { name: "Cold Brew", price: "$7.00" },
    ],
  },
  {
    category: "Breakfast",
    items: [
      {
        name: "Smashed Avo Toast",
        desc: "Sourdough, whipped ricotta, chilli flakes, lemon",
        price: "$18",
      },
      {
        name: "Eggs Your Way",
        desc: "Scrambled, poached or fried on sourdough",
        price: "$14",
      },
      {
        name: "French Toast",
        desc: "Brioche, maple, fresh berries, mascarpone",
        price: "$19",
      },
      {
        name: "Granola Bowl",
        desc: "House granola, coconut yoghurt, seasonal fruit, honey",
        price: "$16",
      },
      {
        name: "Big Breakfast",
        desc: "Eggs, bacon, mushroom, roast tomato, sourdough, hash brown",
        price: "$24",
      },
      {
        name: "Brekky Wrap",
        desc: "Scrambled eggs, bacon, cheese, tomato salsa",
        price: "$15",
      },
    ],
  },
  {
    category: "Lunch",
    items: [
      {
        name: "Pulled Chicken Wrap",
        desc: "Slow-cooked chicken, house slaw, chipotle mayo",
        price: "$17",
      },
      {
        name: "High Tide Burger",
        desc: "Beef patty, cheddar, pickles, house sauce, brioche bun + chips",
        price: "$22",
      },
      {
        name: "Poke Bowl",
        desc: "Rice, edamame, cucumber, avocado, sesame dressing",
        price: "$20",
      },
      {
        name: "Roast Veggie Salad",
        desc: "Seasonal roasted veg, feta, dukkah, lemon tahini",
        price: "$18",
      },
      {
        name: "Soup of the Day",
        desc: "Ask the team — served with sourdough",
        price: "$14",
      },
    ],
  },
  {
    category: "Bakes & Sweets",
    items: [
      { name: "Croissant", desc: "Butter or almond", price: "$5.50" },
      { name: "Banana Bread", desc: "Thick slice, served warm", price: "$6" },
      { name: "Cookie", desc: "Choc chip or seasonal", price: "$4.50" },
      { name: "Slice of the Day", desc: "Ask us what&apos;s fresh", price: "$6.50" },
      { name: "Muffin", desc: "Blueberry or bran", price: "$5" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#324740] pt-36 pb-4 px-6 text-center">
        <p className="text-[#F8D9D4]/60 text-xs uppercase tracking-widest mb-3">
          What&apos;s Cooking
        </p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[#F8D9D4] text-5xl md:text-6xl">
          Our Menu
        </h1>
        <p className="text-[#F8D9D4]/60 mt-4 max-w-md mx-auto text-sm">
          Menus change seasonally. Speak to our team for today&apos;s specials.
        </p>
        <WaveDivider fill="#FEF8F4" bg="transparent" />
      </section>

      {/* Menu sections */}
      <section className="bg-[#FEF8F4] py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {menu.map((section) => (
            <div key={section.category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-[family-name:var(--font-fraunces)] text-[#324740] text-3xl">
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-[#324740]/15" />
              </div>
              <div className="flex flex-col divide-y divide-[#324740]/10">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start py-4 gap-4"
                  >
                    <div>
                      <p className="font-medium text-[#324740]">{item.name}</p>
                      {"desc" in item && item.desc && (
                        <p className="text-[#324740]/50 text-sm mt-0.5"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                      )}
                    </div>
                    <p className="font-[family-name:var(--font-fraunces)] text-[#324740] text-lg whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="bg-[#F8D9D4] py-10 px-6 text-center">
        <p className="text-[#324740]/70 text-sm max-w-lg mx-auto">
          Dietary requirements? Please let us know — we&apos;re happy to accommodate. GF, vegan and dairy-free options available on request.
        </p>
      </section>
    </>
  );
}
