import MarketplaceLink from "@/components/molecules/MarketplaceLink";
import WhatsAppOrderControl from "@/components/molecules/WhatsAppOrderControl";
import type { Marketplace } from "@/lib/types";

type PurchaseCardProps = {
  marketplaces: Marketplace[];
  product: {
    slug: string;
    name: string;
    image: string;
  };
};

export default function PurchaseCard({
  marketplaces,
  product,
}: PurchaseCardProps) {
  return (
    <div className="bg-surface-container-lowest p-stack-lg rounded-xl shadow-xl border border-surface-variant/30 space-y-4">
      <h3 className="text-headline-md font-headline-md text-primary mb-2">
        Choose Where to Buy
      </h3>
      {marketplaces.map((mp) =>
        mp.icon === "chat" ? (
          <WhatsAppOrderControl key={mp.name} {...mp} product={product} />
        ) : (
          <MarketplaceLink key={mp.name} {...mp} />
        ),
      )}
      <p className="text-center text-[12px] text-on-surface-variant font-medium mt-4">
        Secure checkout on partner platforms.
      </p>
    </div>
  );
}
