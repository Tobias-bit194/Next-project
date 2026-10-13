
import Image from "next/image";
import Link from "next/link";

import { categoryBanners } from "../../services/home.service";

const CategoryBanners = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-5 lg:px-10">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {categoryBanners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.href}
            className="group relative h-[145px] overflow-hidden rounded-xl bg-[#EAF7F0] sm:h-[175px]"
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center text-white">
              <h3 className="text-base font-bold sm:text-xl">
                {banner.title}
              </h3>

              <p className="mt-1 hidden text-xs text-white/80 sm:block">
                {banner.subtitle}
              </p>

              <span className="mt-3 rounded-full border border-white/70 bg-white/15 px-5 py-1.5 text-[11px] transition group-hover:bg-white group-hover:text-[#123D40]">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanners;
