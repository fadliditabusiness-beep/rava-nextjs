# RAVA — Educational Toys (Next.js + Atomic Design)

Konversi 3 halaman statis (`homepage.html`, `product.html`, `detail.html`) menjadi
satu proyek **Next.js 15 (App Router)** dengan struktur **Atomic Design**.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur folder

```
app/
  layout.tsx            → root layout (font, metadata)
  page.tsx               → Home ("/")
  products/
    page.tsx              → Product listing / Collections ("/products")
    [slug]/page.tsx        → Product detail ("/products/[slug]")

components/
  atoms/          → elemen terkecil: Button, Badge, Logo, StarRating, Input, ...
  molecules/      → gabungan atoms: ProductCard, TestimonialCard, AccordionItem, ...
  organisms/      → seksi halaman: Header, Footer, HeroSection, ProductGallery, ...
  templates/      → menyusun organisms menjadi kerangka halaman penuh
                    (HomeTemplate, ProductListTemplate, ProductDetailTemplate)

lib/
  data.ts   → semua konten (produk, testimoni, FAQ, dll) hasil ekstrak dari HTML asli
  types.ts  → tipe TypeScript untuk data di atas
```

`app/page.tsx`, `app/products/page.tsx`, dan `app/products/[slug]/page.tsx`
masing-masing hanya merender komponen **template** yang sesuai — ini adalah
lapisan "pages" pada Atomic Design.

## Catatan implementasi

- **Header & Footer** dibuat identik dengan yang ada di `homepage.html` dan
  dipakai bersama (shared) di ketiga halaman, sesuai permintaan.
- Semua warna, spacing, radius, font size mengikuti `tailwind.config` gabungan
  dari ketiga file HTML asli (token sama di semua file, sudah digabung di
  `tailwind.config.ts`).
- Gambar produk memakai domain asli (`lh3.googleusercontent.com`) melalui
  `next/image` (`next.config.mjs` sudah mengizinkan domain tersebut).
- Interaksi kecil (announcement bar berputar, ganti gambar thumbnail produk,
  accordion FAQ/spesifikasi) diimplementasikan ulang dengan React
  (`"use client"` pada komponen yang butuh state) atau elemen native
  `<details>` untuk accordion.
- Halaman detail produk (`/products/[slug]`) saat ini menampilkan konten detail
  yang sama (data "Master Architect Set" dari `detail.html`, satu-satunya versi
  detail lengkap yang tersedia di source). Silakan lengkapi `lib/data.ts`
  per-slug bila ingin konten detail berbeda untuk tiap produk.

## Build untuk production

```bash
npm run build
npm start
```
