import Image from "next/image";
import Link from "next/link";
import type { RelatedProduct } from "@/lib/types";

export default function RelatedProductCard({
  slug,
  category,
  name,
  price,
  discount,
  image,
}: RelatedProduct) {
  return (
    <Link
      href={`/products/${slug}`}
      className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-xl p-stack-md text-center group block"
    >
      <div className="aspect-square bg-surface-container rounded-lg mb-4 overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          sizes="320px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span className="text-label-caps font-label-caps text-secondary mb-1 block">
        {category}
      </span>
      <h4 className="text-headline-md font-headline-md text-primary">{name}</h4>
      <p className="text-primary font-bold mt-2 line-through">
        Rp {price.toLocaleString("id-ID")}
      </p>
      <p className="text-primary font-bold mt-2">
        Rp {discount.toLocaleString("id-ID")}
      </p>
    </Link>
  );
}
