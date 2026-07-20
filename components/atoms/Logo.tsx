import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { box: "h-10", text: "text-headline-md" },
  md: { box: "h-12", text: "text-headline-lg" },
  lg: { box: "h-14", text: "text-headline-lg" },
};

export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const s = sizeMap[size];
  return (
    <Link href="/" className={`flex items-center gap-4 ${className}`}>
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.name} Logo`}
        width={56}
        height={56}
        className={`${s.box} w-auto`}
      />
      <span className={`font-headline-md ${s.text} font-bold text-primary`}>
        {siteConfig.name}
      </span>
    </Link>
  );
}
