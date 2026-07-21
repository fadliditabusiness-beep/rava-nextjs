"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { siteConfig } from "@/lib/data";

const fieldClass =
  "w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none";
const labelClass = "block text-sm font-semibold text-on-surface-variant mb-1";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = [
      "*PESAN DARI WEBSITE*",
      `Nama : ${nama}`,
      `Pesan:\n${pesan}`,
    ].join("\n\n");

    window.location.href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest shadow-md rounded-xl p-6 md:p-8 border border-surface-variant/30 space-y-4"
    >
      <h2 className="text-headline-md font-headline-md text-primary mb-2">
        Kirim Pesan
      </h2>
      <div>
        <label className={labelClass}>Nama Lengkap *</label>
        <input
          required
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className={fieldClass}
          placeholder="Nama lengkap"
        />
      </div>
      <div>
        <label className={labelClass}>Pesan *</label>
        <textarea
          required
          rows={5}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          className={fieldClass}
          placeholder="Tulis pertanyaan atau pesan kamu di sini..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold bouncy-hover active-scale shadow-lg flex items-center justify-center gap-2"
      >
        <MaterialIcon name="chat" />
        <span>Kirim via WhatsApp</span>
      </button>
    </form>
  );
}
