import Badge from "@/components/atoms/Badge";
import StarRating from "@/components/atoms/StarRating";
import PurchaseCard from "@/components/organisms/PurchaseCard";
import type { Marketplace } from "@/lib/types";

type ProductInfoProps = {
  slug: string;
  category: string;
  ageRange: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  marketplaces: Marketplace[];
};

export default function ProductInfo({
  slug,
  category,
  ageRange,
  name,
  rating,
  reviewCount,
  description,
  image,
  marketplaces,
}: ProductInfoProps) {
  return (
    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-[100px]">
      <div>
        <div className="flex gap-2 mb-4">
          <Badge className="bg-primary/5 text-primary">{category}</Badge>
          <Badge className="bg-secondary/10 text-secondary">{ageRange}</Badge>
        </div>
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-2">
          {name}
        </h1>
        <div className="flex items-center gap-2 mb-6">
          <StarRating rating={rating} colorClassName="text-on-tertiary-container" />
          <span className="text-body-md font-bold text-primary">
            {rating}/5
          </span>
          <span className="text-on-surface-variant">({reviewCount} reviews)</span>
        </div>
        <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
          {description}
        </p>
      </div>
      <PurchaseCard
        marketplaces={marketplaces}
        product={{ slug, name, image }}
      />
    </div>
  );
}
