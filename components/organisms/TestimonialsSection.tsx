import SectionHeading from "@/components/atoms/SectionHeading";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="What Our Community Says"
          subtitle="Real stories from parents who've seen the RAVA spark."
          align="center"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
