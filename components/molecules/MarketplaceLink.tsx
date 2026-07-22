"use client";
import MaterialIcon from "@/components/atoms/MaterialIcon";

type MarketplaceLinkProps = {
  name: string;
  color: string;
  hoverColor: string;
  icon: string;
  link: string;
};

export default function MarketplaceLink({
  name,
  color,
  hoverColor,
  icon,
  link,
}: MarketplaceLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: color }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
      className="w-full flex items-center justify-between text-white px-6 py-4 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-95 group shadow-lg"
    >
      <span className="font-bold">{name}</span>
      <MaterialIcon
        name={icon}
        className="group-hover:translate-x-1 transition-transform"
      />
    </a>
  );
}
