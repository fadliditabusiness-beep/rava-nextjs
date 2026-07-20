import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import PageHero from "@/components/organisms/PageHero";
import FilterBar from "@/components/organisms/FilterBar";
import ProductGrid from "@/components/organisms/ProductGrid";
import { collectionHero } from "@/lib/data";

type ProductListTemplateProps = {
  selectedCategory?: string;
  selectedSort?: string;
};

export default function ProductListTemplate({
  selectedCategory,
  selectedSort,
}: ProductListTemplateProps) {
  return (
    <>
      <Header />
      <main className="pt-[160px] pb-section-gap">
        <PageHero
          breadcrumb={collectionHero.breadcrumb}
          title={selectedCategory ?? collectionHero.title}
          description={collectionHero.description}
        />
        <FilterBar selectedCategory={selectedCategory} selectedSort={selectedSort} />
        <ProductGrid selectedCategory={selectedCategory} selectedSort={selectedSort} />
      </main>
      <Footer />
    </>
  );
}
