"use client";

import { usePathname } from "next/navigation";
import NavLink from "@/components/atoms/NavLink";
import { navLinks } from "@/lib/data";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-8 items-center">
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          href={link.href}
          label={link.label}
          active={link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) && link.href !== "/"}
        />
      ))}
    </div>
  );
}
