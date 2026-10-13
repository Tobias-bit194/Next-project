
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Discover the Latest Tech",
    highlight: "Up to 50% Off!",
    description: "Explore amazing deals on your favorite electronics.",
    background:
      "linear-gradient(110deg, #00383B 0%, #075D5D 55%, #2FAE84 100%)",
  },
  {
    title: "Upgrade Your Setup",
    highlight: "Gaming Deals",
    description: "Powerful laptops and accessories for every gamer.",
    background:
      "linear-gradient(110deg, #101A36 0%, #263D68 55%, #466B91 100%)",
  },
  {
    title: "Smart Technology",
    highlight: "Better Everyday",
    description: "Discover devices that make life easier.",
    background:
      "linear-gradient(110deg, #143E38 0%, #267C6C 55%, #78C7A2 100%)",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slide = slides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className="relative min-h-[370px] overflow-hidden text-white md:min-h-[430px]"
      style={{ background: slide.background }}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 top-[-100px] h-[450px] w-[450px] rounded-full border-[70px] border-white/5" />
      <div className="pointer-events-none absolute bottom-[-200px] right-[10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[370px] max-w-[1440px] items-center px-16 pb-20 md:min-h-[430px] md:px-28 lg:px-40">
        <div className="max-w-[560px]">
          <p className="mb-2 text-xl font-light md:text-2xl">
            {slide.title}
          </p>

          <h1 className="mb-4 text-3xl font-bold italic md:text-5xl">
            {slide.highlight}
          </h1>

          <p className="mb-7 max-w-sm text-sm text-white/80">
            {slide.description}
          </p>

          <Link
            href="/products"
            className="inline-flex min-w-[150px] justify-center rounded-full bg-[#E9FAE8] px-7 py-3 text-sm font-semibold text-[#063D3D] transition hover:bg-white"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105 md:left-9"
      >
        <ArrowLeft size={21} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105 md:right-9"
      >
        <ArrowRight size={21} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-7 bg-white"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
