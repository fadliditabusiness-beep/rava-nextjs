import CollectionProductCard from "@/components/molecules/CollectionProductCard";
import { collectionProducts } from "@/lib/data";

type ProductGridProps = {
  selectedCategory?: string;
};

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const products = selectedCategory
    ? collectionProducts.filter(
        (product) => product.category === selectedCategory
      )
    : collectionProducts;

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => (
            <CollectionProductCard key={product.slug} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-center font-body-md text-on-surface-variant py-12">
          Belum ada produk pada kategori ini.
        </p>
      )}
      {products.length > 0 && (
        <div className="flex justify-center mt-section-gap">
          <button
            type="button"
            className="px-12 py-4 border-2 border-primary text-primary rounded-full font-body-md font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg active:scale-95"
          >
            Load More Products
          </button>
        </div>
      )}
    </section>
  );
}
