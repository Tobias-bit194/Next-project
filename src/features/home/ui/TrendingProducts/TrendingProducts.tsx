
import Image from "next/image";
import Link from "next/link";

import ProductCard from "./ProductCard";

import {
  trendingProducts,
  collectionProducts,
} from "../../services/home.service";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US").format(price);

const TrendingProducts = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10">
      {/* Section heading */}
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#111111]">
          Trending Product
        </h2>

        <Link
          href="/products"
          className="rounded-full border border-[#142C2E] px-6 py-2 text-xs font-medium text-[#142C2E] transition hover:bg-[#142C2E] hover:text-white"
        >
          View All
        </Link>
      </div>

      {/* Products and collection */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-3">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Collection */}
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-[#142C2E]">
            Trending Tech Collection
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {collectionProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products?search=${encodeURIComponent(product.name)}`}
                className="group relative flex min-h-[150px] flex-col overflow-hidden rounded-xl border border-gray-100 bg-[#FAFBFC] p-2"
              >
                <div className="relative min-h-[100px] flex-1">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="150px"
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="mt-2">
                  <p className="truncate text-[11px] font-medium text-[#142C2E]">
                    {product.name}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold text-[#43AE75]">
                    {formatPrice(product.price)} UZS
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/products"
            className="mt-4 flex justify-center rounded-full bg-[#E9FAE8] px-4 py-2 text-xs font-semibold text-[#123D40] transition hover:bg-[#D9F3DB]"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
