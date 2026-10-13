
import type {
  HomeProduct,
  CategoryBanner,
} from "../types/product.types";

export const categoryBanners: CategoryBanner[] = [
  {
    id: "1",
    title: "Gaming Laptops",
    subtitle: "Power up your game",
    image: "/images/banners/gaming-laptop.jpg",
    href: "/products?category=Gaming",
  },
  {
    id: "2",
    title: "Smart Watches",
    subtitle: "Technology on your wrist",
    image: "/images/banners/smart-watch.jpg",
    href: "/products?category=Smart%20Watches",
  },
  {
    id: "3",
    title: "Smartphones",
    subtitle: "Discover the latest",
    image: "/images/banners/smartphones.jpg",
    href: "/products?category=Smartphones",
  },
  {
    id: "4",
    title: "Home Electronics",
    subtitle: "Smart living starts here",
    image: "/images/banners/home-electronics.jpg",
    href: "/products?category=TVs",
  },
];

export const trendingProducts: HomeProduct[] = [
  {
    id: "1",
    name: "Lenovo Legion 5",
    description:
      "Powerful gaming laptop with excellent performance.",
    image: "/images/products/lenovo-legion.jpg",
    price: 16499000,
    oldPrice: 18999000,
    rating: 4.8,
    reviews: 342,
    discount: 13,
    slug: "lenovo-legion-5",
  },
  {
    id: "2",
    name: "iPad Air 11",
    description:
      "Powerful and lightweight tablet for everyday creativity.",
    image: "/images/products/ipad-air.jpg",
    price: 8999000,
    rating: 4.7,
    reviews: 128,
    slug: "ipad-air-11",
  },
  {
    id: "3",
    name: "MacBook Air 15 M3",
    description:
      "Elegant laptop with impressive performance and battery life.",
    image: "/images/products/macbook-air.jpg",
    price: 18999000,
    rating: 4.9,
    reviews: 256,
    slug: "macbook-air-15-m3",
  },
];

export const collectionProducts = [
  {
    id: "1",
    name: "Gaming Laptop",
    image: "/images/products/lenovo-legion.jpg",
    price: 16499000,
  },
  {
    id: "2",
    name: "iPad Air",
    image: "/images/products/ipad-air.jpg",
    price: 8999000,
  },
  {
    id: "3",
    name: "MacBook Air",
    image: "/images/products/macbook-air.jpg",
    price: 18999000,
  },
  {
    id: "4",
    name: "Smart Watch",
    image: "/images/products/smart-watch.jpg",
    price: 2499000,
  },
];



import type {
  HomeCategory,
  BestSellingBanner,
} from "../types/product.types";

export const homeCategories: HomeCategory[] = [
  {
    id: "1",
    name: "Smartphones",
    image: "/images/categories/smartphones.png",
    slug: "smartphones",
  },
  {
    id: "2",
    name: "Laptops",
    image: "/images/categories/laptops.png",
    slug: "laptops",
  },
  {
    id: "3",
    name: "Gaming",
    image: "/images/categories/gaming.png",
    slug: "gaming",
  },
  {
    id: "4",
    name: "Headphones",
    image: "/images/categories/headphones.png",
    slug: "headphones",
  },
  {
    id: "5",
    name: "Smart Watches",
    image: "/images/categories/smart-watches.png",
    slug: "smart-watches",
  },
  {
    id: "6",
    name: "TV & Monitors",
    image: "/images/categories/monitors.png",
    slug: "monitors",
  },
  {
    id: "7",
    name: "Cameras",
    image: "/images/categories/cameras.png",
    slug: "cameras",
  },
];

export const bestSellingBanners: BestSellingBanner[] = [
  {
    id: "1",
    title: "Computer Accessories",
    image: "/images/best-selling/accessories.jpg",
    href: "/products?category=accessories",
  },
  {
    id: "2",
    title: "Gaming Collection",
    image: "/images/best-selling/gaming.jpg",
    href: "/products?category=gaming",
  },
  {
    id: "3",
    title: "Smartphone Deals",
    image: "/images/best-selling/smartphones.jpg",
    href: "/products?category=smartphones",
  },
  {
    id: "4",
    title: "Smart Home",
    image: "/images/best-selling/smart-home.jpg",
    href: "/products?category=smart-home",
  },
  {
    id: "5",
    title: "Security Cameras",
    image: "/images/best-selling/security.jpg",
    href: "/products?category=security",
  },
  {
    id: "6",
    title: "Premium Audio",
    image: "/images/best-selling/audio.jpg",
    href: "/products?category=audio",
  },
];
