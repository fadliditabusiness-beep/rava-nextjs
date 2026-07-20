import StarRating from "@/components/atoms/StarRating";
import type { Review } from "@/lib/types";

export default function ReviewCard({ name, rating, timeAgo, quote }: Review) {
  return (
    <div className="bg-white p-stack-lg rounded-xl shadow-xl border-l-4 border-secondary">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <StarRating rating={rating} colorClassName="text-on-tertiary-container" />
        </div>
        <span className="text-on-surface-variant text-sm">{timeAgo}</span>
      </div>
      <p className="text-on-surface-variant italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
