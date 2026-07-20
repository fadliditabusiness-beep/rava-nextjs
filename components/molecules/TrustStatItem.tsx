type TrustStatItemProps = {
  value: string;
  label: string;
  color: string;
};

export default function TrustStatItem({ value, label, color }: TrustStatItemProps) {
  return (
    <div className="text-center group">
      <div
        className={`font-display-lg ${color} mb-1 transform transition-transform group-hover:scale-110`}
      >
        {value}
      </div>
      <div className="font-label-caps text-on-surface-variant opacity-70">
        {label}
      </div>
    </div>
  );
}
