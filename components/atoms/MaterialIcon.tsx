type MaterialIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
};

export default function MaterialIcon({
  name,
  className = "",
  filled = false,
  style,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? "fill-icon" : ""} ${className}`}
      style={style}
    >
      {name}
    </span>
  );
}
