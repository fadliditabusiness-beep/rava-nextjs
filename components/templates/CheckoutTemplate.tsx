import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import CheckoutForm from "@/components/organisms/CheckoutForm";

export default function CheckoutTemplate() {
  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[160px] pb-section-gap">
        <div className="mb-stack-lg">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-stack-sm">
            Checkout
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Isi data diri dan alamat pengiriman untuk melanjutkan pesanan.
          </p>
        </div>
        <CheckoutForm />
      </main>
      <Footer />
    </>
  );
}
