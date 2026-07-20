import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import CategoryCard from "@/components/molecules/CategoryCard";
import { categories } from "@/lib/data";

export default function ProductCategoriesSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Jelajahi Koleksi RAVA Toys
            </h2>
            <p className="text-on-surface-variant">
              Temukan berbagai aktivitas edukatif yang dirancang untuk membantu
              anak belajar, bermain, dan berkembang setiap hari.
            </p>
          </div>
          <Link
            href="/products"
            className="text-secondary font-bold flex items-center gap-2 group"
          >
            Lihat Semua
            <MaterialIcon
              name="arrow_forward"
              className="transition-transform group-hover:translate-x-2"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
