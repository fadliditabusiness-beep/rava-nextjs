import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailTemplate from "@/components/templates/ProductDetailTemplate";
import { getAllProductSlugs, getProductBySlug } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return {
    title: product
      ? `${product.name} | RAVA Educational Toys`
      : "Product | RAVA",
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailTemplate product={product} />;
}
