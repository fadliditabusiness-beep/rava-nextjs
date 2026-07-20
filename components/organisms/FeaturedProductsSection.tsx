import ProductCard from "@/components/molecules/ProductCard";
import SectionHeading from "@/components/atoms/SectionHeading";
import { featuredProducts } from "@/lib/data";

export default function FeaturedProductsSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="Produk Pilihan RAVA Toys"
          subtitle="Temukan koleksi mainan edukatif dan aktivitas belajar yang dirancang untuk menemani tumbuh kembang si kecil."
          align="center"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
