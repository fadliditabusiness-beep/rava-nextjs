import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";

type PageHeroProps = {
  breadcrumb: string[];
  title: string;
  description: string;
};

export default function PageHero({ breadcrumb, title, description }: PageHeroProps) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
      <nav className="flex items-center gap-2 text-on-surface-variant font-body-md mb-stack-sm flex-wrap">
        {breadcrumb.map((crumb, i) => {
          const isLast = i === breadcrumb.length - 1;
          return (
            <span key={crumb} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-primary font-semibold">{crumb}</span>
              ) : (
                <Link href={i === 0 ? "/" : "/products"} className="hover:text-primary transition-colors">
                  {crumb}
                </Link>
              )}
              {!isLast && (
                <MaterialIcon name="chevron_right" className="text-[16px]" />
              )}
            </span>
          );
        })}
      </nav>
      <div className="max-w-3xl">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">
          {title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
