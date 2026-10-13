
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronRight } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  "Smartphones",
  "Laptops",
  "Tablets",
  "Gaming",
  "TVs",
  "Headphones",
  "Cameras",
  "Smart Watches",
  "PC Components",
  "Accessories",
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white">
      {/* Main navigation */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <div className="flex items-center gap-5 text-xs text-[#142C2E]">
            <button
              type="button"
              className="flex items-center gap-2"
            >
              <Menu size={17} />
              Menu
            </button>

            <span className="h-4 w-px bg-gray-300" />

            <Link href="/products">Explore</Link>
            <Link href="/products?deals=true">Deals</Link>
            <Link href="/saved">Saved</Link>
          </div>

          <div className="flex items-center gap-6 text-xs md:gap-9">
            {mainLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition hover:text-[#43AE75] ${
                    active
                      ? "font-semibold text-[#43AE75]"
                      : "text-[#142C2E]"
                  }`}
                >
                  {link.label}

                  {active && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#43AE75]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Categories */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1440px] items-center gap-7 overflow-x-auto px-5 py-4 text-xs whitespace-nowrap lg:px-10">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className="shrink-0 text-[#123D40] transition hover:text-[#43AE75]"
            >
              {category}
            </Link>
          ))}

          <Link
            href="/products"
            className="flex shrink-0 items-center gap-1 text-[#6B68FF]"
          >
            See more
            <ChevronRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
