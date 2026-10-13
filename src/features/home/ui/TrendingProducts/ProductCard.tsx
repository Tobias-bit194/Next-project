
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import type { HomeProduct } from "../../types/product.types";

interface ProductCardProps {
  product: HomeProduct;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US").format(price);
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#F6F8F8]">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-3 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <button
          type="button"
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Heart
            size={17}
            className={
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-1 flex-col pt-3">
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-[40px] text-[15px] font-bold leading-5 text-[#142C2E] hover:text-[#43AE75]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-2 min-h-[36px] text-xs leading-[18px] text-[#888888]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={13}
                className={
                  index < Math.round(product.rating)
                    ? "fill-[#FFB800] text-[#FFB800]"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span className="ml-1 text-[10px] text-[#667085]">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex flex-wrap items-baseline gap-2">
          <span className="text-[17px] font-bold text-[#43AE75]">
            {formatPrice(product.price)} UZS
          </span>

          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}

          {product.discount && (
            <span className="text-xs font-semibold text-[#142C2E]">
              {product.discount}% Off
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs text-[#6B68FF] hover:underline"
          >
            View Details
          </Link>

          <button
            type="button"
            disabled
            title="Cart integration coming soon"
            className="shrink-0 cursor-not-allowed rounded-full bg-[#43AE75] px-4 py-2 text-xs font-semibold text-white opacity-60"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
