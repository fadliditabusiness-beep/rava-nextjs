import Link from "next/link";

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-bold text-primary mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-on-surface-variant hover:text-on-secondary-container transition-all"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
