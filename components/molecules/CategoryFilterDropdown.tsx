import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { categories } from "@/lib/data";

type CategoryFilterDropdownProps = {
  selected?: string;
};

export default function CategoryFilterDropdown({
  selected,
}: CategoryFilterDropdownProps) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center gap-2 bg-surface-container-lowest px-5 py-3 rounded-full font-body-md border border-outline-variant hover:border-primary transition-colors"
      >
        {selected ?? "Kategori"} <MaterialIcon name="expand_more" />
      </button>
      <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg overflow-hidden">
          <Link
            href="/products"
            className={`block px-5 py-3 font-body-md hover:bg-surface-container-low transition-colors ${
              !selected ? "text-primary font-bold" : ""
            }`}
          >
            Semua Kategori
          </Link>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className={`block px-5 py-3 font-body-md hover:bg-surface-container-low transition-colors ${
                selected === category.name ? "text-primary font-bold" : ""
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
