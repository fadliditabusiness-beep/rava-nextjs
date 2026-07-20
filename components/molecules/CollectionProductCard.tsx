import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/atoms/StarRating";
import type { CollectionProduct } from "@/lib/types";

export default function CollectionProductCard({
  slug,
  name,
  description,
  ageRange,
  rating,
  reviewCount,
  image,
  ribbon,
}: CollectionProduct) {
  return (
    <div className="product-card bg-surface-container-lowest rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
      {ribbon && (
        <div className="absolute top-6 left-6 z-10">
          <span
            className={`ribbon text-white font-label-caps text-[10px] px-3 py-1 rounded-full uppercase tracking-widest ${
              ribbon === "New" ? "bg-[#F3745D]" : "bg-[#F4932F]"
            }`}
          >
            {ribbon}
          </span>
        </div>
      )}
      <div className="w-full aspect-square mb-stack-md relative overflow-hidden rounded-lg bg-surface-container-low">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="image-zoom object-contain p-4"
        />
      </div>
      <div className="flex items-center gap-1 mb-2">
        <StarRating rating={rating} colorClassName="text-[#F4932F]" />
        <span className="text-on-surface-variant text-[12px] ml-1">
          ({reviewCount})
        </span>
      </div>
      <h3 className="font-headline-md text-primary mb-2">{name}</h3>
      <p className="font-body-md text-on-surface-variant text-sm mb-2">
        {description}
      </p>
      <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-[12px] font-bold mb-stack-md">
        {ageRange}
      </span>
      <div className="mt-auto flex flex-col w-full gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          href={`/products/${slug}`}
          className="w-full bg-primary text-on-primary py-3 rounded-full font-body-md hover:bg-primary/90 transition-all"
        >
          View Detail
        </Link>
        <button
          type="button"
          className="w-full border-2 border-secondary text-secondary py-3 rounded-full font-body-md hover:bg-secondary/10 transition-all"
        >
          Quick View
        </button>
      </div>
    </div>
  );
}
