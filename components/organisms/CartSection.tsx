"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { useCartStore, SHIPPING_ESTIMATE } from "@/lib/store/cart-store";

function formatRupiah(value: number) {
  return `Rp${Math.round(value).toLocaleString("id-ID")}`;
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-lg mx-auto">
      <div className="w-48 h-48 bg-surface-container rounded-full flex items-center justify-center mb-8">
        <MaterialIcon
          name="shopping_cart_off"
          className="text-[80px] text-on-surface-variant/40"
        />
      </div>
      <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
        Your cart is empty.
      </h2>
      <p className="text-body-lg text-on-surface-variant mb-10">
        Let&apos;s find something fun to explore!
      </p>
      <Link
        href="/products"
        className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold bouncy-hover active-scale"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default function CartSection() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItemFromStore = useCartStore((state) => state.removeItem);
  const [removingSlug, setRemovingSlug] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const removeItem = (slug: string) => {
    setRemovingSlug(slug);
    setTimeout(() => {
      removeItemFromStore(slug);
      setRemovingSlug(null);
    }, 300);
  };

  if (!mounted) return null;

  if (items.length === 0) {
    return <EmptyCart />;
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? SHIPPING_ESTIMATE : 0;
  const grandTotal = subtotal + shipping;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <div className="lg:col-span-8 space-y-6">
        {items.map((item) => (
          <div
            key={item.slug}
            className={`bg-surface-container-lowest shadow-md rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center border border-surface-variant/30 transition-all duration-300 ${
              removingSlug === item.slug
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <Link
              href={`/products/${item.slug}`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-surface-container flex-shrink-0 relative"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="160px"
                className="object-cover"
              />
            </Link>
            <div className="flex-grow space-y-1 text-center md:text-left">
              <Link href={`/products/${item.slug}`}>
                <h3 className="font-headline-md text-headline-md text-primary hover:underline decoration-secondary">
                  {item.name}
                </h3>
              </Link>
              <div className="pt-4 flex flex-wrap justify-center md:justify-start items-center gap-6">
                <div className="flex items-center bg-surface-container rounded-full px-2 py-1 border border-outline-variant">
                  <button
                    type="button"
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() =>
                      updateQuantity(item.slug, item.quantity - 1)
                    }
                    className="w-8 h-8 flex items-center justify-center text-primary hover:text-secondary transition-colors"
                  >
                    <MaterialIcon name="remove" className="text-sm" />
                  </button>
                  <span className="px-4 font-bold text-primary">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() =>
                      updateQuantity(item.slug, item.quantity + 1)
                    }
                    className="w-8 h-8 flex items-center justify-center text-primary hover:text-secondary transition-colors"
                  >
                    <MaterialIcon name="add" className="text-sm" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.slug)}
                  className="flex items-center gap-1 text-on-surface-variant hover:text-error transition-colors font-bold text-sm"
                >
                  <MaterialIcon name="delete" className="text-base" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-headline-md text-headline-md text-secondary">
                {formatRupiah(item.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all duration-300"
          >
            <MaterialIcon name="arrow_back" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>

      <aside className="lg:col-span-4">
        <div className="bg-surface-container-low shadow-xl rounded-xl p-stack-md lg:p-8 sticky top-[180px] border border-surface-variant/30">
          <h2 className="text-headline-md font-headline-md text-primary mb-6">
            Order Summary
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-body-md">
              <span className="text-on-surface-variant">Subtotal</span>
              <span className="text-on-surface font-semibold">
                {formatRupiah(subtotal)}
              </span>
            </div>
            <div className="flex justify-between text-body-md">
              <span className="text-on-surface-variant">
                Shipping (Estimated)
              </span>
              <span className="text-on-surface font-semibold">
                {formatRupiah(shipping)}
              </span>
            </div>
            <div className="h-px bg-outline-variant/30 my-2" />
            <div className="flex justify-between">
              <span className="font-headline-md text-headline-md text-primary">
                Grand Total
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                {formatRupiah(grandTotal)}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <Link
              href="/checkout"
              className="w-full bg-secondary text-on-secondary py-4 rounded-full font-bold bouncy-hover active-scale shadow-lg flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <MaterialIcon name="arrow_forward" />
            </Link>
            <p className="text-center text-sm text-on-surface-variant">
              Shipping calculated at checkout
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/30 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center gap-2">
              <MaterialIcon
                name="verified_user"
                filled
                className="text-secondary"
              />
              <span className="text-sm text-on-surface-variant">
                Secure Payment
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <MaterialIcon
                name="local_shipping"
                filled
                className="text-secondary"
              />
              <span className="text-sm text-on-surface-variant">
                Eco-Packaging
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
