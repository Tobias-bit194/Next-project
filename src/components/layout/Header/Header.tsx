
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  UserRound,
  ShoppingCart,
  ChevronDown,
  Menu,
} from "lucide-react";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    window.location.href =
      `/products?search=${encodeURIComponent(query)}`;
  };

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-3xl font-extrabold tracking-tight text-[#43AE75]">
            Bizda
          </span>
        </Link>

        {/* Delivery */}
        <div className="hidden items-center gap-2 border-l border-gray-200 pl-5 md:flex">
          <MapPin size={22} className="text-[#142C2E]" />

          <div>
            <p className="text-[11px] text-gray-400">
              Deliver to
            </p>
            <p className="text-xs font-semibold text-[#142C2E]">
              Your address
            </p>
          </div>
        </div>

        {/* Language */}
        <button
          type="button"
          className="hidden items-center gap-1 text-xs font-semibold text-[#142C2E] lg:flex"
        >
          <span>🇬🇧</span>
          EN
          <ChevronDown size={13} />
        </button>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="order-3 flex w-full items-center rounded-full bg-[#EAF7E8] p-1 sm:order-none sm:max-w-[350px] lg:max-w-[440px] lg:flex-1"
        >
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="What you're looking for"
            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-[#142C2E] outline-none placeholder:text-gray-500"
          />

          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#142C2E] transition hover:bg-[#DDF3DE]"
          >
            <Search size={16} />
            Search
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link
            href="/profile"
            aria-label="Profile"
            className="transition hover:text-[#43AE75]"
          >
            <UserRound size={21} />
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm font-semibold transition hover:text-[#43AE75]"
          >
            <ShoppingCart size={21} />
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <button
            type="button"
            aria-label="Mobile menu"
            className="lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
