import StarRating from "@/components/atoms/StarRating";

type RatingSummaryProps = {
  average: number;
  reviewCount: number;
  breakdown: { stars: number; percent: number }[];
};

export default function RatingSummary({
  average,
  reviewCount,
  breakdown,
}: RatingSummaryProps) {
  return (
    <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-lg border border-surface-variant/30">
      <div className="text-display-lg font-display-lg text-primary mb-1">
        {average}
      </div>
      <div className="mb-4">
        <StarRating rating={5} colorClassName="text-on-tertiary-container" />
      </div>
      <p className="text-on-surface-variant font-medium">
        Based on {reviewCount} reviews
      </p>
      <div className="space-y-3 mt-8">
        {breakdown.map((row) => (
          <div key={row.stars} className="flex items-center gap-4">
            <span className="text-label-caps w-4">{row.stars}</span>
            <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="bg-primary h-full"
                style={{ width: `${row.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
