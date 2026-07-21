import Link from "next/link";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import FaqAccordionItem from "@/components/molecules/FaqAccordionItem";
import { siteFaqs } from "@/lib/data";

export default function FaqTemplate() {
  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[160px] pb-section-gap">
        <div className="max-w-3xl mx-auto text-center mb-stack-lg">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-stack-sm">
            Pertanyaan Umum
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Jawaban seputar pemesanan, pengiriman, dan produk RAVA Toys.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {siteFaqs.map((faq) => (
            <FaqAccordionItem key={faq.question} {...faq} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-stack-lg pt-stack-lg border-t border-surface-container">
          <p className="text-on-surface-variant mb-4">
            Masih ada pertanyaan lain?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-bold bouncy-hover active-scale"
          >
            Hubungi Kami
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
