import Button from "@/components/atoms/Button";
import MaterialIcon from "@/components/atoms/MaterialIcon";

export default function FinalCTASection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto rounded-xl bg-gradient-to-r from-primary to-primary-container p-12 md:p-20 text-center relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-on-tertiary-container/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8">
            Ready to Make Learning More Fun?
          </h2>
          <p className="text-primary-fixed text-xl mb-12 max-w-xl mx-auto">
            Join thousands of parents who are investing in their children&apos;s
            future through meaningful play.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button href="/products" variant="white">
              Shop Now
            </Button>
            <Button href="/products" variant="secondary">
              Browse Products
            </Button>
            <Button href="#" variant="ghost">
              <MaterialIcon name="chat" /> WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
