import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ContactForm from "@/components/organisms/ContactForm";
import SocialLinks from "@/components/molecules/SocialLinks";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { siteConfig } from "@/lib/data";

export default function ContactTemplate() {
  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[160px] pb-section-gap">
        <div className="mb-stack-lg">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-stack-sm">
            Hubungi Kami
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Ada pertanyaan seputar produk atau pesanan? Tim kami siap bantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-surface-container-low shadow-xl rounded-xl p-stack-md lg:p-8 border border-surface-variant/30 space-y-6">
              <div>
                <h2 className="text-headline-md font-headline-md text-primary mb-2">
                  Chat Langsung
                </h2>
                <p className="text-on-surface-variant mb-4">
                  Respon lebih cepat lewat WhatsApp untuk pertanyaan seputar
                  produk, pesanan, atau kerja sama.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold bouncy-hover active-scale shadow-lg flex items-center justify-center gap-2"
                >
                  <MaterialIcon name="chat" />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>

              <div className="pt-6 border-t border-outline-variant/30">
                <h2 className="text-headline-md font-headline-md text-primary mb-4">
                  Ikuti Kami
                </h2>
                <SocialLinks />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
