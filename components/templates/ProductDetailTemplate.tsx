import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ProductGallery from "@/components/organisms/ProductGallery";
import ProductInfo from "@/components/organisms/ProductInfo";
import ProductAccordionSection from "@/components/organisms/ProductAccordionSection";
import RelatedProductsSection from "@/components/organisms/RelatedProductsSection";
import ReviewsSection from "@/components/organisms/ReviewsSection";
import FaqSection from "@/components/organisms/FaqSection";
import type { ProductDetailData } from "@/lib/types";

type ProductDetailTemplateProps = {
  product: ProductDetailData;
};

export default function ProductDetailTemplate({
  product,
}: ProductDetailTemplateProps) {
  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[160px] pb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <ProductGallery
            mainImage={product.heroImage}
            thumbnails={product.thumbnails}
            productName={product.name}
          />
          <ProductInfo
            slug={product.slug}
            category={product.category}
            ageRange={product.ageRange}
            name={product.name}
            rating={product.rating}
            reviewCount={product.reviewCount}
            description={product.description}
            image={product.heroImage}
            marketplaces={product.marketplaces}
          />
        </div>

        <div className="mt-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <ProductAccordionSection items={product.accordion} />
        </div>

        <RelatedProductsSection excludeSlug={product.slug} />
        {/* <ReviewsSection average={product.rating} reviewCount={product.reviewCount} /> */}
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
