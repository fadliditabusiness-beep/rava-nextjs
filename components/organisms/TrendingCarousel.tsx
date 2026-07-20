import TrendingProductCard from "@/components/molecules/TrendingProductCard";
import { trendingProducts } from "@/lib/data";

export default function TrendingCarousel() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12">
          Trending Right Now
        </h2>
        <div className="flex gap-gutter overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory">
          {trendingProducts.map((product) => (
            <TrendingProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
