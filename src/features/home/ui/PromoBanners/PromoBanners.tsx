
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const gamingAccessories = [
  { name: "Headsets", icon: "🎧" },
  { name: "Mouse", icon: "🖱️" },
  { name: "Controllers", icon: "🎮" },
  { name: "Keyboards", icon: "⌨️" },
];

const PromoBanners = () => {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-[1440px] px-5 pb-12 lg:px-8">
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* Main promo */}
        <div className="flex min-h-[280px] flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#142C2E]">
            Upgrade Your Tech
          </h2>

          <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#E8F6F2] via-[#D6EAEF] to-[#BBD8D4] p-6">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-widest text-[#387C73]">
                NEXT GENERATION
              </p>
              <p className="mt-3 text-5xl">💻</p>
              <h3 className="mt-3 text-xl font-bold text-[#123D40]">
                Powerful Laptops
              </h3>
              <p className="mt-1 text-xs text-[#667085]">
                Work. Play. Create.
              </p>
            </div>

            <Link
              href="/products?category=Laptops"
              className="mt-5 rounded-full bg-[#E9FAE8] px-7 py-2 text-xs font-semibold text-[#123D40] shadow-sm transition hover:bg-white"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Gaming accessories */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-[#142C2E]">
              Gaming accessories
            </h2>

            <Link
              href="/products?category=Gaming"
              className="text-xs text-[#7772F6]"
            >
              See more
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {gamingAccessories.map((item) => (
              <Link
                key={item.name}
                href={`/products?search=${encodeURIComponent(item.name)}`}
                className="group flex min-h-[105px] flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-[#43AE75]"
              >
                <span className="text-4xl transition-transform group-hover:scale-110">
                  {item.icon}
                </span>

                <span className="mt-3 text-xs font-medium text-[#142C2E]">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right promotions */}
        <div className="grid min-h-[280px] grid-cols-2 gap-3 md:col-span-2 xl:col-span-1">
          <Link
            href="/products?category=Gaming"
            className="relative flex min-h-[130px] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#141824] to-[#A72F42] p-4 text-white"
          >
            <span className="text-xs font-bold">
              GAMING SALE
            </span>

            <span className="text-5xl">🎮</span>

            <span className="flex items-center gap-1 text-xs">
              Explore
              <ArrowUpRight size={14} />
            </span>
          </Link>

          <Link
            href="/products?category=Smartphones"
            className="relative flex min-h-[130px] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br from-[#143E88] to-[#8D3DAF] p-4 text-white"
          >
            <span className="text-xs font-bold">
              SMARTPHONES
            </span>

            <span className="text-5xl">📱</span>

            <span className="flex items-center gap-1 text-xs">
              Shop Now
              <ArrowUpRight size={14} />
            </span>
          </Link>

          <Link
            href="/products?category=TVs"
            className="col-span-2 flex min-h-[125px] items-center justify-between overflow-hidden rounded-xl border border-gray-100 bg-[#F8FAFC] p-5"
          >
            <div>
              <p className="text-xs text-[#43AE75]">
                Special Offer
              </p>

              <h3 className="mt-1 text-base font-bold text-[#142C2E]">
                Smart TVs
              </h3>

              <p className="mt-1 text-xs text-[#667085]">
                Stunning picture quality
              </p>

              <span className="mt-3 inline-flex rounded-full bg-[#E9FAE8] px-4 py-1.5 text-xs font-semibold text-[#123D40]">
                Shop Now
              </span>
            </div>

            <span className="text-6xl">📺</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
