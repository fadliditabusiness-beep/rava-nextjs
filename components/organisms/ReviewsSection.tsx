import MaterialIcon from "@/components/atoms/MaterialIcon";
import RatingSummary from "@/components/molecules/RatingSummary";
import ReviewCard from "@/components/molecules/ReviewCard";
import { productReviews, ratingBreakdown, productDetail } from "@/lib/data";

type ReviewsSectionProps = {
  average?: number;
  reviewCount?: number;
};

export default function ReviewsSection({
  average = productDetail.rating,
  reviewCount = productDetail.reviewCount,
}: ReviewsSectionProps) {
  return (
    <div id="reviews" className="mt-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <div className="lg:col-span-4 space-y-6">
        <h2 className="text-headline-lg font-headline-lg text-primary">
          Customer Love
        </h2>
        <RatingSummary
          average={average}
          reviewCount={reviewCount}
          breakdown={ratingBreakdown}
        />
      </div>
      <div className="lg:col-span-8 space-y-6">
        {productReviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
        <div className="flex justify-center">
          <button
            type="button"
            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All {reviewCount} Reviews
            <MaterialIcon name="arrow_forward" />
          </button>
        </div>
      </div>
    </div>
  );
}
