
import Image from "next/image";
import Link from "next/link";

import { bestSellingBanners } from "../../services/home.service";

const bannerClasses = [
  // Top row: 3 small banners
  "lg:col-span-3 lg:row-start-1",
  "lg:col-span-3 lg:row-start-1",
  "lg:col-span-3 lg:row-start-1",

  // Right banner: spans both rows
  "lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:row-span-2",

  // Bottom row: wide + small banner
  "lg:col-span-6 lg:col-start-1 lg:row-start-2",
  "lg:col-span-3 lg:col-start-7 lg:row-start-2",
];

const BestSelling = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pb-16 lg:px-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-[#111111] md:text-2xl">
          Best selling product
        </h2>

        <Link
          href="/products"
          className="
            shrink-0 rounded-full
            border border-[#344054]
            px-5 py-2 text-xs
            font-medium text-[#344054]
            transition-colors
            hover:bg-[#344054]
            hover:text-white
          "
        >
          View All
        </Link>
      </div>

      {/* Banner Grid */}
      <div
        className="
          grid grid-cols-2 gap-3
          md:grid-cols-3
          lg:grid-cols-12
          lg:grid-rows-[160px_160px]
        "
      >
        {bestSellingBanners.slice(0, 6).map((banner, index) => (
          <Link
            key={banner.id}
            href={banner.href}
            aria-label={banner.title}
            className={`
              group relative block
              h-[160px] min-w-0
              overflow-hidden rounded-xl
              border border-[#EAECF0]
              bg-[#F8FAF9]
              transition-all duration-300
              hover:shadow-md
              lg:h-full
              ${bannerClasses[index]}
            `}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="
                (max-width: 767px) 50vw,
                (max-width: 1023px) 33vw,
                50vw
              "
              className="
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
