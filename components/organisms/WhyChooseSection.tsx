import FeatureCard from "@/components/molecules/FeatureCard";
import SectionHeading from "@/components/atoms/SectionHeading";
import { features } from "@/lib/data";

export default function WhyChooseSection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low/30">
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="The RAVA Difference"
          align="center"
          withRule
          className="mb-20"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
