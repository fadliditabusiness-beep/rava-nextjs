import CollectionProductCard from "@/components/molecules/CollectionProductCard";
import { collectionProducts } from "@/lib/data";
import type { CollectionProduct } from "@/lib/types";

type ProductGridProps = {
  selectedCategory?: string;
  selectedSort?: string;
};

function byRibbonFirst(ribbon: CollectionProduct["ribbon"]) {
  return (a: CollectionProduct, b: CollectionProduct) =>
    (a.ribbon === ribbon ? 0 : 1) - (b.ribbon === ribbon ? 0 : 1);
}

function sortProducts(
  products: CollectionProduct[],
  sort?: string,
): CollectionProduct[] {
  const sorted = [...products];

  switch (sort) {
    case "Terpopuler":
      return sorted.sort(byRibbonFirst("Best Seller"));
    case "Harga: Rendah ke Tinggi":
      return sorted.sort(
        (a, b) =>
          a.marketplace.whatsapp.afterDiscount -
          b.marketplace.whatsapp.afterDiscount,
      );
    case "Harga: Tinggi ke Rendah":
      return sorted.sort(
        (a, b) =>
          b.marketplace.whatsapp.afterDiscount -
          a.marketplace.whatsapp.afterDiscount,
      );
    default:
      return sorted.sort(byRibbonFirst("New"));
  }
}

export default function ProductGrid({
  selectedCategory,
  selectedSort,
}: ProductGridProps) {
  const filtered = selectedCategory
    ? collectionProducts.filter(
        (product) => product.category === selectedCategory,
      )
    : collectionProducts;
  const products = sortProducts(filtered, selectedSort);

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
      {/* {products.length > 0 && (
        <div className="flex justify-center mt-section-gap">
          <button
            type="button"
            className="px-12 py-4 border-2 border-primary text-primary rounded-full font-body-md font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg active:scale-95"
          >
            Load More Products
          </button>
        </div>
      )} */}
    </section>
  );
}
