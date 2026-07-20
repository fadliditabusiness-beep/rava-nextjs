import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

export default function NavLink({ href, label, active = false }: NavLinkProps) {
  if (active) {
    return (
      <Link
        href={href}
        className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
    >
      {label}
    </Link>
  );
}
