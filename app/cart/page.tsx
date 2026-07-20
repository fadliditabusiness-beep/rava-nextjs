import type { Metadata } from "next";
import CartTemplate from "@/components/templates/CartTemplate";

export const metadata: Metadata = {
  title: "Shopping Cart | RAVA Educational Toys",
  description: "Review your selected items before checkout.",
};

export default function CartPage() {
  return <CartTemplate />;
}
