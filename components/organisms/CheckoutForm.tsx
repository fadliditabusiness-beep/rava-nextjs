"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { useCartStore, SHIPPING_ESTIMATE } from "@/lib/store/cart-store";
import { siteConfig } from "@/lib/data";

function formatRupiah(value: number) {
  return `Rp${Math.round(value).toLocaleString("id-ID")}`;
}

const fieldClass =
  "w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none";
const labelClass = "block text-sm font-semibold text-on-surface-variant mb-1";

export default function CheckoutForm() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kodePos, setKodePos] = useState("");
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
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
          Add something to your cart before checking out.
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

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = SHIPPING_ESTIMATE;
  const total = subtotal + shipping;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const itemLines = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.name}\n   Qty: ${item.quantity} x ${formatRupiah(item.price)}\n   Subtotal: ${formatRupiah(item.price * item.quantity)}`,
      )
      .join("\n\n");

    // const sections = [
    //   "🛒 *PESANAN BARU*",
    //   `👤 *Data Pemesan*\nNama: ${nama}\nNo. HP: ${noHp}`,
    //   `📦 *Detail Pesanan*\n${itemLines}`,
    //   `-------------------------\n💰 *Ringkasan*\nSubtotal : ${formatRupiah(subtotal)}\nOngkir   : ${formatRupiah(shipping)}\nTotal    : *${formatRupiah(total)}*`,
    //   `📍 *Alamat*\n${alamat}\n${kota}, ${provinsi}\n${kodePos}`,
    // ];

    const sections = [
      "*PESANAN BARU*",

      `*DATA PEMESAN*
Nama    : ${nama}
No. HP  : ${noHp}`,

      `*DETAIL PESANAN*
${itemLines}`,

      `*RINGKASAN*
Subtotal : ${formatRupiah(subtotal)}
TOTAL    : *${formatRupiah(total)}*`,

      `*ALAMAT*
${alamat}
${kota}, ${provinsi}
${kodePos}`,
    ];

    if (catatan.trim()) {
      sections.push(`📝 *Catatan*\n${catatan.trim()}`);
    }

    sections.push("Terima kasih 🙏");

    const message = sections.join("\n\n");
    window.location.href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-12 gap-gutter"
    >
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-surface-container-lowest shadow-md rounded-xl p-6 md:p-8 border border-surface-variant/30 space-y-4">
          <h2 className="text-headline-md font-headline-md text-primary mb-2">
            Data Diri
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
            <label className={labelClass}>No. HP / WhatsApp *</label>
            <input
              required
              type="tel"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              className={fieldClass}
              placeholder="08123456789"
            />
          </div>
        </div>

        <div className="bg-surface-container-lowest shadow-md rounded-xl p-6 md:p-8 border border-surface-variant/30 space-y-4">
          <h2 className="text-headline-md font-headline-md text-primary mb-2">
            Alamat Pengiriman
          </h2>
          <div>
            <label className={labelClass}>Alamat Lengkap *</label>
            <textarea
              required
              rows={2}
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className={fieldClass}
              placeholder="Jl. Merdeka No. 10"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Kota *</label>
              <input
                required
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                className={fieldClass}
                placeholder="Bandung"
              />
            </div>
            <div>
              <label className={labelClass}>Provinsi *</label>
              <input
                required
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
                className={fieldClass}
                placeholder="Jawa Barat"
              />
            </div>
          </div>
          <div>
            <label className={labelClass}>Kode Pos *</label>
            <input
              required
              value={kodePos}
              onChange={(e) => setKodePos(e.target.value)}
              className={fieldClass}
              placeholder="40123"
            />
          </div>
        </div>

        <div className="bg-surface-container-lowest shadow-md rounded-xl p-6 md:p-8 border border-surface-variant/30 space-y-4">
          <h2 className="text-headline-md font-headline-md text-primary mb-2">
            Catatan (Opsional)
          </h2>
          <textarea
            rows={3}
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            className={fieldClass}
            placeholder="Tolong packing yang rapi ya."
          />
        </div>
      </div>

      <aside className="lg:col-span-5">
        <div className="bg-surface-container-low shadow-xl rounded-xl p-stack-md lg:p-8 sticky top-[180px] border border-surface-variant/30">
          <h2 className="text-headline-md font-headline-md text-primary mb-6">
            Ringkasan Pesanan
          </h2>
          <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-2">
            {items.map((item) => (
              <div
                key={item.slug}
                className="flex justify-between gap-4 text-sm"
              >
                <span className="text-on-surface-variant">
                  {item.name}
                  <span className="text-on-surface-variant/70">
                    {" "}
                    x{item.quantity}
                  </span>
                </span>
                <span className="text-on-surface font-semibold whitespace-nowrap">
                  {formatRupiah(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="h-px bg-outline-variant/30 my-2" />
          <div className="space-y-3 my-4">
            <div className="flex justify-between text-body-md">
              <span className="text-on-surface-variant">Subtotal</span>
              <span className="text-on-surface font-semibold">
                {formatRupiah(subtotal)}
              </span>
            </div>
            {/* <div className="flex justify-between text-body-md">
              <span className="text-on-surface-variant">Ongkir</span>
              <span className="text-on-surface font-semibold">
                {formatRupiah(shipping)}
              </span>
            </div> */}
            <div className="h-px bg-outline-variant/30 my-2" />
            <div className="flex justify-between">
              <span className="font-headline-md text-headline-md text-primary">
                Total
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                {formatRupiah(total)}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold bouncy-hover active-scale shadow-lg flex items-center justify-center gap-2"
          >
            <MaterialIcon name="chat" />
            <span>Kirim Pesanan via WhatsApp</span>
          </button>
          <p className="text-center text-sm text-on-surface-variant mt-4">
            Kamu akan diarahkan ke WhatsApp untuk menyelesaikan pesanan.
          </p>
        </div>
      </aside>
    </form>
  );
}
