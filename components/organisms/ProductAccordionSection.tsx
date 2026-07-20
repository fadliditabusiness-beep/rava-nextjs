import AccordionItem from "@/components/molecules/AccordionItem";
import type { AccordionItemData } from "@/lib/types";

type ProductAccordionSectionProps = {
  items: AccordionItemData[];
};

export default function ProductAccordionSection({
  items,
}: ProductAccordionSectionProps) {
  return (
    <div className="lg:col-span-7 space-y-4">
      <h2 className="text-headline-lg font-headline-lg text-primary mb-stack-md">
        Crafted with Care
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <AccordionItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
