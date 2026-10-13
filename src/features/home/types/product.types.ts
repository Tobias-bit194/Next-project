
export interface HomeProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  slug: string;
}

export interface CategoryBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}


export interface HomeCategory {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface BestSellingBanner {
  id: string;
  title: string;
  image: string;
  href: string;
}
