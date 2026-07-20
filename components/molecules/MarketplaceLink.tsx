"use client";
import MaterialIcon from "@/components/atoms/MaterialIcon";

type MarketplaceLinkProps = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  color: string;
  hoverColor: string;
  icon: string;
};

export default function MarketplaceLink({
  name,
  originalPrice,
  discountedPrice,
  color,
  hoverColor,
  icon,
}: MarketplaceLinkProps) {
  const isDiscounted = discountedPrice < originalPrice;

  return (
    <a
      href="#"
      style={{ backgroundColor: color }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
      className="w-full flex items-center justify-between text-white px-6 py-4 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg"
    >
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
    </a>
  );
}
