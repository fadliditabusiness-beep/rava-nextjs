import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import StarRating from "@/components/atoms/StarRating";
import type { Product } from "@/lib/types";

export default function ProductCard({
  slug,
  name,
  category,
  ageRange,
  description,
  rating,
  reviewCount,
  image,
  badge,
}: Product) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl aspect-square mb-6 shadow-xl">
        {badge && (
          <span
            className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full font-label-caps text-label-caps text-white ${
              badge === "BEST SELLER" ? "bg-on-tertiary-container" : "bg-secondary"
            }`}
          >
            {badge}
          </span>
        )}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button
          type="button"
          aria-label={`Save ${name} to favorites`}
          className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-white text-primary rounded-full shadow-lg flex items-center justify-center bouncy-hover active-scale"
        >
          <MaterialIcon name="favorite" />
        </button>
      </div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-label-caps text-secondary text-label-caps uppercase mb-1">
            {category}
          </p>
          <h3 className="font-headline-md text-primary">{name}</h3>
        </div>
        <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full font-label-caps text-label-caps">
          {ageRange}
        </span>
      </div>
      <p className="text-on-surface-variant mb-4 text-sm">{description}</p>
      <div className="flex items-center gap-1 mb-6">
        <StarRating rating={rating} />
        <span className="text-on-surface-variant text-sm ml-2">
          ({reviewCount})
        </span>
      </div>
      <Link
        href={`/products/${slug}`}
        className="block w-full text-center bg-primary text-on-primary py-3 rounded-full font-bold active-scale transition-all hover:bg-primary-container"
      >
        View Detail
      </Link>
    </div>
  );
}
