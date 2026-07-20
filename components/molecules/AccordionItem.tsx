import MaterialIcon from "@/components/atoms/MaterialIcon";

type AccordionItemProps = {
  icon: string;
  title: string;
  content: string | string[];
  defaultOpen?: boolean;
};

export default function AccordionItem({
  icon,
  title,
  content,
  defaultOpen = false,
}: AccordionItemProps) {
  return (
    <details
      className="group bg-surface-container-lowest rounded-lg overflow-hidden shadow-md"
      open={defaultOpen}
    >
      <summary className="flex items-center justify-between p-stack-md cursor-pointer hover:bg-surface-container transition-colors list-none">
        <span className="text-headline-md font-headline-md text-primary flex items-center gap-3">
          <MaterialIcon name={icon} className="text-secondary" /> {title}
        </span>
        <MaterialIcon
          name="expand_more"
          className="group-open:rotate-180 transition-transform"
        />
      </summary>
      {Array.isArray(content) ? (
        <div className="px-stack-md pb-stack-md text-on-surface-variant space-y-2">
          {content.map((line) => {
            const [label, ...rest] = line.split(":");
            return (
              <p key={label}>
                <strong>{label}:</strong>
                {rest.join(":")}
              </p>
            );
          })}
        </div>
      ) : (
        <div className="px-stack-md pb-stack-md text-on-surface-variant leading-relaxed">
          {content}
        </div>
      )}
    </details>
  );
}
