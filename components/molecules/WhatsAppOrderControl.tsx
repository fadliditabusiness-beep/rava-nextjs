"use client";

import { useEffect, useState } from "react";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { useCartStore } from "@/lib/store/cart-store";

type WhatsAppOrderControlProps = {
  originalPrice: number;
  discountedPrice: number;
  color: string;
  product: {
    slug: string;
    name: string;
    image: string;
  };
};

export default function WhatsAppOrderControl({
  originalPrice,
  discountedPrice,
  color,
  product,
}: WhatsAppOrderControlProps) {
  const [mounted, setMounted] = useState(false);
  const quantity = useCartStore(
    (state) => state.items.find((item) => item.slug === product.slug)?.quantity ?? 0,
  );
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const isDiscounted = discountedPrice < originalPrice;

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayQuantity = mounted ? quantity : 0;

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: discountedPrice,
    });
  };

  const handleIncrement = () => updateQuantity(product.slug, displayQuantity + 1);
  const handleDecrement = () => {
    if (displayQuantity <= 1) removeItem(product.slug);
    else updateQuantity(product.slug, displayQuantity - 1);
  };

  if (displayQuantity === 0) {
    return (
      <button
        type="button"
        onClick={handleAdd}
        style={{ backgroundColor: color }}
        className="w-full flex items-center justify-between text-white px-6 py-4 rounded-full font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
      >
        <span className="flex flex-col items-start leading-tight">
          <span className="font-bold">Tambah ke Keranjang</span>
          <span className="flex items-center gap-2">
            {isDiscounted && (
              <span className="text-xs font-normal text-white/60 line-through">
                Rp{originalPrice.toLocaleString("id-ID")}
              </span>
            )}
            <span className="text-sm font-normal text-white/80">
              Rp{discountedPrice.toLocaleString("id-ID")}
            </span>
          </span>
        </span>
        <span className="flex flex-col items-end gap-1">
          <MaterialIcon name="add_shopping_cart" />
          <span className="flex items-center gap-1 text-[10px] font-normal text-white/70">
            <MaterialIcon name="chat" className="text-[12px]" />
            Pesan via WhatsApp
          </span>
        </span>
      </button>
    );
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full flex items-center justify-between text-white px-4 py-2 rounded-full font-bold shadow-lg"
    >
      <button
        type="button"
        aria-label="Kurangi jumlah"
        onClick={handleDecrement}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-95 transition-all"
      >
        <MaterialIcon name="remove" />
      </button>
      <div className="flex flex-col items-center leading-tight">
        <span className="font-bold">{displayQuantity} di keranjang</span>
        <span className="flex items-center gap-1 text-[10px] font-normal text-white/70">
          <MaterialIcon name="chat" className="text-[12px]" />
          Pesan via WhatsApp
        </span>
      </div>
      <button
        type="button"
        aria-label="Tambah jumlah"
        onClick={handleIncrement}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-95 transition-all"
      >
        <MaterialIcon name="add" />
      </button>
    </div>
  );
}
