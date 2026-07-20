"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { useCartStore } from "@/lib/store/cart-store";

export default function CartButton() {
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayCount = mounted ? itemCount : 0;

  return (
    <Link
      href="/cart"
      aria-label="Keranjang"
      className="relative bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center bouncy-hover active-scale"
    >
      <MaterialIcon name="shopping_cart" />
      {displayCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {displayCount}
        </span>
      )}
    </Link>
  );
}
