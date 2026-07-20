"use client";
import MaterialIcon from "@/components/atoms/MaterialIcon";

type MarketplaceLinkProps = {
  name: string;
  price: number;
  color: string;
  hoverColor: string;
  icon: string;
};

export default function MarketplaceLink({
  name,
  price,
  color,
  hoverColor,
  icon,
}: MarketplaceLinkProps) {
  return (
    <a
      href="#"
      style={{ backgroundColor: color }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
      className="flex items-center justify-between text-white px-6 py-4 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg"
    >
      <span className="flex flex-col items-start leading-tight">
        <span className="font-bold">{name}</span>
        <span className="text-sm font-normal text-white/80">
          Rp{price.toLocaleString("id-ID")}
        </span>
      </span>
      <MaterialIcon
        name={icon}
        className="group-hover:translate-x-1 transition-transform"
      />
    </a>
  );
}
