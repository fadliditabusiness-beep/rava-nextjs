import MaterialIcon from "@/components/atoms/MaterialIcon";
import type { Feature } from "@/lib/types";

export default function FeatureCard({ icon, title, description, iconBg, iconColor }: Feature) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-xl bouncy-hover text-center flex flex-col items-center">
      <div
        className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center ${iconColor} mb-6`}
      >
        <MaterialIcon name={icon} className="text-3xl" />
      </div>
      <h3 className="font-headline-md text-headline-md text-primary mb-4">
        {title}
      </h3>
      <p className="text-on-surface-variant">{description}</p>
    </div>
  );
}
