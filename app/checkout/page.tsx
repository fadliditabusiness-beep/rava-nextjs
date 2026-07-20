import type { Metadata } from "next";
import CheckoutTemplate from "@/components/templates/CheckoutTemplate";

export const metadata: Metadata = {
  title: "Checkout | RAVA Educational Toys",
  description: "Isi data diri dan alamat pengiriman untuk melanjutkan pesanan.",
};

export default function CheckoutPage() {
  return <CheckoutTemplate />;
}
