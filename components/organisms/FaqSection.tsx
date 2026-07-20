import FaqAccordionItem from "@/components/molecules/FaqAccordionItem";
import { productFaqs } from "@/lib/data";

export default function FaqSection() {
  return (
    <div id="faq" className="mt-section-gap max-w-3xl mx-auto">
      <h2 className="text-headline-lg font-headline-lg text-primary text-center mb-stack-lg">
        Common Questions
      </h2>
      <div className="space-y-4">
        {productFaqs.map((faq) => (
          <FaqAccordionItem key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  );
}
