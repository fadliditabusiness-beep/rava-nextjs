import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";

export default function CategoryCard({ name, image, gradient, span }: Category) {
  return (
    <Link
      href={`/products?category=${encodeURIComponent(name)}`}
      className={`relative group overflow-hidden rounded-xl h-[300px] ${span ? "md:col-span-2" : ""}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent z-10`} />
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-6 left-6 z-20 text-white">
        <p className="font-headline-md">{name}</p>
      </div>
    </Link>
  );
}
