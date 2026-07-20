"use client";
import { useRouter } from "next/navigation";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { useCartStore } from "@/lib/store/cart-store";

type MarketplaceLinkProps = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  color: string;
  hoverColor: string;
  icon: string;
  product: {
    slug: string;
    name: string;
    image: string;
  };
};

export default function MarketplaceLink({
  name,
  originalPrice,
  discountedPrice,
  color,
  hoverColor,
  icon,
  product,
}: MarketplaceLinkProps) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const isWhatsApp = name === "Pesan melalui WhatsApp";
  const isDiscounted = discountedPrice < originalPrice;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = hoverColor;
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = color;
  };

  const content = (
    <>
      <span className="flex flex-col items-start leading-tight">
        <span className="font-bold">{name}</span>
        <span className="flex items-center gap-2">
          {isDiscounted && (
            <span className="text-xs font-normal text-white/60 line-through">
              Rp{originalPrice.toLocaleString("id-ID")}
            </span>
          )}
          <span className="text-sm font-normal text-white/80">
            Rp{discountedPrice.toLocaleString("id-ID")}
          </span>
        </span>
      </span>
      <MaterialIcon
        name={icon}
        className="group-hover:translate-x-1 transition-transform"
      />
    </>
  );

  const sharedClassName =
    "w-full flex items-center justify-between text-white px-6 py-4 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg";

  if (isWhatsApp) {
    return (
      <button
        type="button"
        style={{ backgroundColor: color }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          addItem({
            slug: product.slug,
            name: product.name,
            image: product.image,
            price: discountedPrice,
          });
          router.push("/cart");
        }}
        className={sharedClassName}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href="#"
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={sharedClassName}
    >
      {content}
    </a>
  );
}
