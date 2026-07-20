import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-label-caps text-label-caps ${className}`}
    >
      {children}
    </span>
  );
}
