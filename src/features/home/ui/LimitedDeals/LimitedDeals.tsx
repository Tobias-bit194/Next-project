
"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

type DealProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
};

const products: DealProduct[] = [
  {
    id: "1",
    name: "Samsung Galaxy S24",
    image: "/images/deals/samsung.jpg",
    price: 799,
    oldPrice: 1100,
    rating: 5,
    reviews: 342,
  },
  {
    id: "2",
    name: "Wireless Gaming Earbuds",
    image: "/images/deals/earbuds.jpg",
    price: 149,
    oldPrice: 230,
    rating: 5,
    reviews: 342,
  },
  {
    id: "3",
    name: "Gaming Laptop",
    image: "/images/deals/laptop.jpg",
    price: 1250,
    oldPrice: 2500,
    rating: 5,
    reviews: 218,
  },
  {
    id: "4",
    name: "Gaming Headset",
    image: "/images/deals/headset.jpg",
    price: 300,
    oldPrice: 460,
    rating: 5,
    reviews: 154,
  },
  {
    id: "5",
    name: "Smart Watch",
    image: "/images/deals/watch.jpg",
    price: 49,
    oldPrice: 70,
    rating: 5,
    reviews: 125,
  },
];

const LimitedDeals = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-12 lg:px-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-950 md:text-2xl">
          Limited-Time Deal
        </h2>

        <Link
          href="/products"
          className="rounded-full border border-gray-800 px-5 py-2 text-xs transition hover:bg-gray-900 hover:text-white"
        >
          View All
        </Link>
      </div>

      <div className="relative">
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => {
            const discount = Math.round(
              (1 - product.price / product.oldPrice) * 100
            );

            return (
              <article
                key={product.id}
                className="w-[190px] shrink-0 snap-start rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm sm:w-[210px]"
              >
                <div className="relative mb-2 aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  {/* Replace with real product images */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-2 top-2 rounded-full bg-[#43AE75] px-2 py-1 text-[10px] font-bold text-white">
                    -{discount}%
                  </span>

                  <button
                    type="button"
                    aria-label="Add to favorites"
                    className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-500"
                  >
                    <Heart size={15} />
                  </button>
                </div>

                <h3 className="line-clamp-2 min-h-9 text-sm font-semibold text-gray-950">
                  {product.name}
                </h3>

                <p className="mt-1 line-clamp-2 text-[11px] text-gray-500">
                  Discover the latest technology and great performance.
                </p>

                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={12}
                      fill={index < product.rating ? "#FFB020" : "none"}
                      className="text-[#FFB020]"
                    />
                  ))}
                  <span className="ml-1 text-[10px] text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-[#43AE75]">
                    ${product.price}
                  </span>
                  <span className="text-[11px] text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                  <span className="text-[10px] font-semibold">
                    {discount}% Off
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-[11px] text-indigo-500 hover:underline"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    className="rounded-full bg-[#43AE75] px-3 py-2 text-[11px] font-medium text-white transition hover:bg-[#348D5C]"
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-3 flex justify-end gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous products"
            className="rounded-full border border-gray-200 p-2 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next products"
            className="rounded-full border border-gray-200 p-2 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedDeals;
