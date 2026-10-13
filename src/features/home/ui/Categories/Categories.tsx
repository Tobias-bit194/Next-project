
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { homeCategories } from "../../services/home.service";

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#111111] md:text-2xl">
          Start exploring now
        </h2>

        <Link
          href="/categories"
          className="rounded-full border border-[#344054] px-5 py-2 text-xs font-medium text-[#344054] transition hover:bg-[#344054] hover:text-white"
        >
          View All
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {homeCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.slug)}`}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  group flex w-[135px] shrink-0 flex-col
                  items-center rounded-xl border bg-white p-3
                  transition-all duration-200
                  ${
                    isActive
                      ? "border-[#43AE75] ring-1 ring-[#43AE75]"
                      : "border-[#EAECF0] hover:border-[#43AE75]"
                  }
                `}
              >
                <div className="relative h-[105px] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="135px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <p
                  className={`
                    mt-3 text-center text-xs font-medium
                    ${
                      isActive
                        ? "text-[#43AE75]"
                        : "text-[#344054]"
                    }
                  `}
                >
                  {category.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Navigation */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous categories"
          className="absolute -left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md transition hover:bg-[#EAF7F0]"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next categories"
          className="absolute -right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md transition hover:bg-[#EAF7F0]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Categories;
