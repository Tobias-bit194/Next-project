
import Hero from "@/features/home/ui/Hero/Hero";
import PromoBanners from "@/features/home/ui/PromoBanners/PromoBanners";
import CategoryBanners from "@/features/home/ui/CategoryBanners/CategoryBanners";
import TrendingProducts from "@/features/home/ui/TrendingProducts/TrendingProducts";
import Categories from "@/features/home/ui/Categories/Categories";
import BestSelling from "@/features/home/ui/BestSelling/BestSelling";
import LimitedDeals from "@/features/home/ui/LimitedDeals/LimitedDeals";
import Reviews from "@/features/home/ui/Reviews/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoBanners />

      <CategoryBanners />
      <TrendingProducts />

      <Categories />
      <BestSelling />

      <LimitedDeals />
      <Reviews />
    </>
  );
}
