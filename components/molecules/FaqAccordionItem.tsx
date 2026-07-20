import MaterialIcon from "@/components/atoms/MaterialIcon";
import type { FaqItem } from "@/lib/types";

export default function FaqAccordionItem({ question, answer }: FaqItem) {
  return (
    <details className="group border-b border-surface-variant pb-4">
      <summary className="flex items-center justify-between cursor-pointer py-2 list-none">
        <span className="text-headline-md font-headline-md text-primary">
          {question}
        </span>
        <MaterialIcon
          name="expand_more"
          className="group-open:rotate-180 transition-transform"
        />
      </summary>
      <div className="mt-4 text-on-surface-variant leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
