import TrustStatItem from "@/components/molecules/TrustStatItem";
import { trustStats } from "@/lib/data";

export default function TrustStatsBar() {
  return (
    <section className="py-12 bg-white/50 border-y border-surface-container-highest backdrop-blur-sm">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustStats.map((stat) => (
            <TrustStatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
