import type { Metadata } from "next";
import ProductListTemplate from "@/components/templates/ProductListTemplate";

export const metadata: Metadata = {
  title: "Sensory Toys | RAVA Educational Toys",
  description:
    "Curated tools designed to stimulate curiosity and develop fine motor skills through tactile exploration.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string; sort?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { category, sort } = await searchParams;
  return <ProductListTemplate selectedCategory={category} selectedSort={sort} />;
}
