import MaterialIcon from "@/components/atoms/MaterialIcon";
import RelatedProductCard from "@/components/molecules/RelatedProductCard";
import { getRelatedProducts } from "@/lib/data";

type RelatedProductsSectionProps = {
  excludeSlug?: string;
};

export default function RelatedProductsSection({
  excludeSlug,
}: RelatedProductsSectionProps) {
  const relatedProducts = getRelatedProducts(excludeSlug ?? "");

  return (
    <div className="mt-section-gap">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-headline-lg font-headline-lg text-primary">
            Pairs Well With
          </h2>
          <p className="text-on-surface-variant">Extend their play ecosystem</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <MaterialIcon name="chevron_left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <MaterialIcon name="chevron_right" />
          </button>
        </div>
      </div>
      <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-8">
        {relatedProducts.map((product) => (
          <RelatedProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
