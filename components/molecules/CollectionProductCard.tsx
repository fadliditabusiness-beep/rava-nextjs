import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
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
  marketplace,
}: CollectionProduct) {
  const { beforeDiscount, afterDiscount } = marketplace.whatsapp;
  const isDiscounted = afterDiscount < beforeDiscount;

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
      <Link
        href={`/products/${slug}`}
        className="w-full aspect-square mb-stack-md relative overflow-hidden rounded-lg bg-surface-container-low block"
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="image-zoom object-contain p-4"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
          <span className="flex items-center gap-1 text-white font-bold py-3 px-6 rounded-full border-2 border-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            View Detail
            <MaterialIcon name="arrow_forward" className="text-lg" />
          </span>
        </div>
      </Link>
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
      <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-[12px] font-bold mb-2">
        {ageRange}
      </span>
      <div className="flex items-center gap-2">
        {isDiscounted && (
          <span className="text-on-surface-variant text-sm line-through">
            Rp{beforeDiscount.toLocaleString("id-ID")}
          </span>
        )}
        <span className="text-primary font-bold">
          Rp{afterDiscount.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}
