import Image from "next/image";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import FooterColumn from "@/components/molecules/FooterColumn";
import SocialLinks from "@/components/molecules/SocialLinks";
import { siteConfig } from "@/lib/data";
import { getCurrentYear } from "@/lib/date";

const exploreLinks = [
  { label: "Home", href: "/" },
  // { label: "Collections", href: "/products" },
  { label: "Products", href: "/products" },
  // { label: "Reviews", href: "/#reviews" },
];

const supportLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  // { label: "Shipping", href: "/#shipping" },
  // { label: "Returns", href: "/#returns" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-inverse-surface w-full pt-section-gap pb-stack-lg border-t border-surface-container">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4 mb-10 md:mb-0">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              width={56}
              height={56}
              className="h-12 w-auto"
            />
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md mb-8">
            RAVA Toys menghadirkan mainan edukatif, sensory play, dan buku
            aktivitas yang membantu anak belajar, berkreasi, dan berkembang
            melalui pengalaman bermain yang menyenangkan.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary bouncy-hover active-scale"
            >
              <MaterialIcon name="face_nod" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary bouncy-hover active-scale"
            >
              <MaterialIcon name="share" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <FooterColumn title="Explore" links={exploreLinks} />
        </div>
        <div className="md:col-span-2">
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-primary mb-6">Ikuti Kami</h4>
          <p className="text-on-surface-variant mb-6">
            Ikuti kami untuk mendapatkan inspirasi bermain, tips tumbuh kembang,
            dan informasi produk terbaru.
          </p>
          <SocialLinks />
        </div>

        <div className="md:col-span-12 pt-12 mt-12 border-t border-surface-container text-center">
          <p className="text-on-surface-variant font-body-md text-body-md opacity-60">
            © {getCurrentYear()} {siteConfig.name} RAVA Toys. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
