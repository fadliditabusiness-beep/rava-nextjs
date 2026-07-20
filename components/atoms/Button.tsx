import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary shadow-lg",
  secondary: "bg-secondary text-on-secondary shadow-lg",
  outline: "border-2 border-secondary text-secondary",
  ghost: "text-white border border-white/30",
  white: "bg-white text-primary shadow-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-lg bouncy-hover active-scale transition-all ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
