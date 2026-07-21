import type { Metadata } from "next";
import ContactTemplate from "@/components/templates/ContactTemplate";

export const metadata: Metadata = {
  title: "Hubungi Kami | RAVA Educational Toys",
  description: "Hubungi tim RAVA Toys lewat WhatsApp, form, atau media sosial.",
};

export default function ContactPage() {
  return <ContactTemplate />;
}
