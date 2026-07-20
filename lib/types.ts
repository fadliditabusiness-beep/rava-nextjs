export type Product = {
  slug: string;
  name: string;
  category: string;
  ageRange: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: "BEST SELLER" | "NEW";
};

export type AccordionItemData = {
  icon: string;
  title: string;
  content: string | string[];
  defaultOpen?: boolean;
};

export type MarketplacePricing = {
  beforeDiscount: number;
  afterDiscount: number;
};

export type ProductMarketplacePricing = {
  shopee: MarketplacePricing;
  tokopedia: MarketplacePricing;
  tiktokShop: MarketplacePricing;
  whatsapp: MarketplacePricing;
};

export type CollectionProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  ageRange: string;
  price: number;
  marketplace: ProductMarketplacePricing;
  rating: number;
  reviewCount: number;
  image: string;
  thumbnails?: string[];
  ribbon?: "New" | "Best Seller";
  featured?: boolean;
  accordion?: AccordionItemData[];
};

export type Category = {
  name: string;
  image: string;
  gradient: string;
  span?: boolean;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  image: string;
};

export type TrendingProduct = {
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Review = {
  name: string;
  rating: number;
  timeAgo: string;
  quote: string;
};

export type RelatedProduct = {
  slug: string;
  category: string;
  name: string;
  price: number;
  image: string;
};

export type Marketplace = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  color: string;
  hoverColor: string;
  icon: string;
};

export type ProductDetailData = {
  slug: string;
  name: string;
  category: string;
  ageRange: string;
  description: string;
  price?: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  thumbnails: string[];
  marketplaces: Marketplace[];
  accordion: AccordionItemData[];
};
