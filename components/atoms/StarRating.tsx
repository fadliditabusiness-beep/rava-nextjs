import MaterialIcon from "./MaterialIcon";

type StarRatingProps = {
  rating: number; // e.g. 4.5
  size?: "sm" | "md";
  colorClassName?: string;
};

export default function StarRating({
  rating,
  size = "sm",
  colorClassName = "text-orange-400",
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const totalStars = 5;
  const sizeClass = size === "md" ? "text-[18px]" : "text-[16px]";

  return (
    <div className={`flex items-center gap-1 ${colorClassName}`}>
      {Array.from({ length: totalStars }).map((_, i) => {
        const isFull = i < fullStars;
        const isHalf = !isFull && hasHalf && i === fullStars;
        return (
          <MaterialIcon
            key={i}
            name={isHalf ? "star_half" : "star"}
            filled={isFull}
            className={sizeClass}
          />
        );
      })}
    </div>
  );
}
