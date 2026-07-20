import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import CartSection from "@/components/organisms/CartSection";

export default function CartTemplate() {
  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[160px] pb-section-gap">
        <div className="mb-stack-lg">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-stack-sm">
            Your Play Basket
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Review your selected joy-makers before checkout.
          </p>
        </div>
        <CartSection />
      </main>
      <Footer />
    </>
  );
}
