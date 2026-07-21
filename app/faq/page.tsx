import type { Metadata } from "next";
import FaqTemplate from "@/components/templates/FaqTemplate";

export const metadata: Metadata = {
  title: "FAQ | RAVA Educational Toys",
  description:
    "Jawaban seputar pemesanan, pengiriman, dan produk RAVA Toys.",
};

export default function FaqPage() {
  return <FaqTemplate />;
}
