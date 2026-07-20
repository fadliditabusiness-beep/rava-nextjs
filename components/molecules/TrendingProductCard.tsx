import Image from "next/image";
import Link from "next/link";
import type { TrendingProduct } from "@/lib/types";

export default function TrendingProductCard({
  slug,
  name,
  description,
  price,
  discount,
  image,
}: TrendingProduct) {
  const isDiscounted = discount < price;

  return (
    <Link
      href={`/products/${slug}`}
      className="min-w-[300px] md:min-w-[400px] snap-center bg-white rounded-xl overflow-hidden shadow-xl p-8 flex gap-6 bouncy-hover"
    >
      <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
        <Image src={image} alt={name} fill sizes="128px" className="object-cover" />
      </div>
      <div>
        <h4 className="font-headline-md text-primary mb-2">{name}</h4>
        <p className="text-sm text-on-surface-variant mb-4">{description}</p>
        <div className="flex items-center gap-2">
          {isDiscounted && (
            <span className="text-sm text-on-surface-variant line-through">
              Rp{price.toLocaleString("id-ID")}
            </span>
          )}
          <span className="font-bold text-secondary text-lg">
            Rp{discount.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </Link>
  );
}
