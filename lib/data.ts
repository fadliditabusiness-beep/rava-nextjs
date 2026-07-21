import type {
  AccordionItemData,
  Category,
  CollectionProduct,
  Feature,
  Testimonial,
  TrendingProduct,
  FaqItem,
  Review,
  RelatedProduct,
  ProductDetailData,
  Marketplace,
  ProductMarketplacePricing,
} from "./types";

function buildThumbnails(
  folder: string,
  nextFolder: string,
  total: number,
): string[] {
  return Array.from({ length: total }, (_, index) => {
    return `/assets/images/thumbnails/${folder}/${nextFolder}/${index + 1}.png`;
  });
}

export const siteConfig = {
  name: "",
  tagline: "Belajar Seru Melalui Bermain",
  logo: "/assets/images/logo.png",
  whatsappNumber: "6282298948991",
  announcements: [
    "Gratis Ongkir | Koleksi Terbaru | Produk Terlaris",
    "Bahan Aman | Ramah Lingkungan | Mainan Edukatif Bersertifikat",
    "Produk Coding Terbaru Telah Hadir | Stok Terbatas",
  ],
};

export const navLinks = [
  { label: "Beranda", href: "/" },
  // { label: "Katalog", href: "/products" },
  { label: "Produk", href: "/products" },
  // { label: "Ulasan", href: "/#reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/contact" },
];

export const siteFaqs: FaqItem[] = [
  {
    question: "Bagaimana cara memesan produk RAVA Toys?",
    answer:
      "Pilih produk yang kamu suka, tambahkan ke keranjang, lalu isi data diri dan alamat pengiriman di halaman checkout. Pesanan akan diteruskan lewat WhatsApp untuk konfirmasi akhir.",
  },
  {
    question: "Apakah bisa bayar lewat Shopee, Tokopedia, atau TikTok Shop?",
    answer:
      "Bisa. Selain checkout via WhatsApp, setiap produk juga punya tautan langsung ke Shopee, Tokopedia, dan TikTok Shop di halaman detail produk.",
  },
  {
    question: "Apakah bahan mainan aman untuk anak-anak?",
    answer:
      "Aman. Semua produk menggunakan material non-toxic, bebas BPA, dan sudah melalui proses quality control sebelum dikirim.",
  },
  {
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Pesanan dikirim ke seluruh Indonesia dan biasanya diproses 1-2 hari kerja setelah pesanan dikonfirmasi lewat WhatsApp.",
  },
  {
    question: "Bagaimana kalau barang yang diterima rusak atau cacat produksi?",
    answer:
      "Hubungi kami lewat WhatsApp maksimal 2x24 jam setelah barang diterima disertai foto/video produk, dan kami akan bantu proses penggantian.",
  },
  {
    question: "Apakah bisa request tema atau desain khusus?",
    answer:
      "Untuk beberapa produk seperti flashcard dan wipe & clean, kami membuka request tema khusus. Silakan tanyakan ketersediaannya lewat WhatsApp.",
  },
];

export const heroImage = "/assets/images/hero-home.png";

export const trustStats = [
  {
    value: "Material Aman",
    label: "Dipilih untuk Anak",
    color: "text-primary",
  },
  {
    value: "Sensory Learning",
    label: "Belajar Sambil Bermain",
    color: "text-primary",
  },
  {
    value: "Aktivitas Kreatif",
    label: "Melatih Imajinasi",
    color: "text-primary",
  },
  {
    value: "Pengiriman Cepat",
    label: "Ke Seluruh Indonesia",
    color: "text-primary",
  },
  // {
  //   value: "100%",
  //   label: "Material Aman",
  //   color: "text-on-tertiary-container",
  // },
  // { value: "Fast", label: "Pengiriman Cepat", color: "text-primary" },
];

// export const features: Feature[] = [
//   {
//     icon: "verified_user",
//     title: "Material Aman Bersertifikat",
//     description: "Non-toxic, sustainable wood and BPA-free materials only.",
//     iconBg: "bg-primary-fixed",
//     iconColor: "text-primary",
//   },
//   {
//     icon: "school",
//     title: "Fokus Edukatif",
//     description: "Curriculum-inspired designs that spark meaningful growth.",
//     iconBg: "bg-secondary-container",
//     iconColor: "text-secondary",
//   },
//   {
//     icon: "fitness_center",
//     title: "Motorik Halus",
//     description: "Improving hand-eye coordination through tactile interaction.",
//     iconBg: "bg-tertiary-fixed",
//     iconColor: "text-on-tertiary-container",
//   },
//   {
//     icon: "palette",
//     title: "Kreativitas Tanpa Batas",
//     description: "Open-ended play that lets their imagination run wild.",
//     iconBg: "bg-primary-fixed",
//     iconColor: "text-primary",
//   },
//   {
//     icon: "phonelink_off",
//     title: "Bebas Gadget",
//     description: "Real-world engagement that replaces digital distractions.",
//     iconBg: "bg-secondary-container",
//     iconColor: "text-secondary",
//   },
//   {
//     icon: "child_care",
//     title: "Belajar Sambil Bermain",
//     description: "Because every moment is a chance to learn something new.",
//     iconBg: "bg-tertiary-fixed",
//     iconColor: "text-on-tertiary-container",
//   },
// ];

export const features: Feature[] = [
  {
    icon: "verified_user",
    title: "Material Aman",
    description:
      "Menggunakan material yang aman dan nyaman untuk mendukung aktivitas bermain anak setiap hari.",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
  },
  {
    icon: "school",
    title: "Bermain Sambil Belajar",
    description:
      "Dirancang untuk membantu mengembangkan logika, kreativitas, dan rasa ingin tahu melalui aktivitas yang menyenangkan.",
    iconBg: "bg-secondary-container",
    iconColor: "text-secondary",
  },
  {
    icon: "fitness_center",
    title: "Melatih Motorik Halus",
    description:
      "Membantu meningkatkan koordinasi tangan dan mata serta keterampilan motorik melalui permainan interaktif.",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-on-tertiary-container",
  },
  {
    icon: "palette",
    title: "Mengembangkan Kreativitas",
    description:
      "Memberikan ruang bagi anak untuk berimajinasi, bereksplorasi, dan menciptakan ide-ide baru.",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
  },
  {
    icon: "phonelink_off",
    title: "Screen-Free Play",
    description:
      "Mengurangi waktu layar dengan aktivitas bermain yang lebih aktif, seru, dan penuh interaksi.",
    iconBg: "bg-secondary-container",
    iconColor: "text-secondary",
  },
  {
    icon: "child_care",
    title: "Tumbuh Bersama Bermain",
    description:
      "Setiap permainan menjadi pengalaman belajar yang membantu anak berkembang dengan percaya diri.",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-on-tertiary-container",
  },
];

export const categories: Category[] = [
  // {
  //   name: "Mainan Sensorik",
  //   gradient: "from-primary/60",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0MrmrW__k1FQXWvxYjYcgqT1_ZPrhq-Yyowr8op5oLe0HgpzBgdoE19T4mDlIiCdNl4IFRe9Nooo1phbhx4WSSfLkaWVyMUqXct_7BIEJKZKl18hKGv4jrVSp69rXj0so7Bnn1u6fKieSZjUPL7ulnCvLBPubzKxfmPbmJcT69tK-iCUbFKAb5snmixKzPz53z5Kcut9BOrXHgT84bo_ml45tFfiKvOtJ_c-hio94lqslt5LfrHXlw",
  // },
  // {
  //   name: "Paket DIY",
  //   gradient: "from-secondary/60",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuC-b0b77BEUa-GR-MP4ZjZ-3PlYObcVqU34w1KGez6rVBJvUkfbiag9cvM9D4zB81xGx_6wZpgqeAypHTWWp4EX7WDtNTcAnrlTgxuQbb651aw_ra9W-9o4XtO-GoZ7by_Z8-cc87qSfxEnUcEjYK7Wn8rn4SKvtFm143m4UU9sg_wkmdXP9UQuHiCOIFUtorcspckR6t4k2yyxNJrRA95w1W1-uscb3XdAM9y654Wo0P05yxhMM9xFrQ",
  // },
  {
    name: "Flashcard",
    gradient: "from-primary/60",
    image: "/assets/images/products/flashcard/penjumlahan-pilot-male.png",
  },
  {
    name: "Buku Mewarnai",
    gradient: "from-primary-container/60",
    span: true,
    image: "/assets/images/products/coloring-book/coloring-tracing-ocean.png",
  },
  // {
  //   name: "Buku Coding",
  //   gradient: "from-secondary-fixed/60",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAolV-PMKthmEtNxWknWeyTaxpnnDn7_8lMss39PE6xbJKbrfJb7MIULn4meTObR_yqt7oTFj6upHwUvzfD9duiYMh1cFjw623NMOWAHA_4O8PGPPsf1tLzvR1W7ELPH7J8mfk1uWisrYJb6KWsoXwadlkWd6RV_lhhbcMHaxfAQslGo16Gr1ki4gw7vLw8KrpSy0tw8z3AIXuL7R3V31MO4ii2OSRbElGvMbpArSDD4wLPk3KGJ6ELwA",
  // },
  // {
  //   name: "Buku Aktivitas",
  //   gradient: "from-primary/60",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuC8cYRzFlIreX3NEACTx8_1Dk_kzkP_fG1JQauvU2B9OMS24Lj2nrIjROgje8sX3UaMECkXm0LGkCdRPB-XQXQA4OPSfuJuq_sM24mfpIFxZHaPK5nYpouXTnXYBZ7NsfZQt7Yx_Tk3ne27SNfEBBLn448Qz0cH_ErnK78_Tg6xc97SoQTso9JqHQxS2jcW9HTa-A8gIVBr2KYva6m1GGT5DBvPyVuVihVnBMpNSSuGEmaX4LW6UQe4Cw",
  // },
  // {
  //   name: "Materi Cetak",
  //   gradient: "from-secondary/60",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDkZwpmSlHM85IBg8-CB6dvQa10XIFKFuEdCNlXFz-j0ydnF01Zi2VfBnVVcxgqYEymGUfWnc5Sk5bBuAbBPUTADf1kYz3kjbmd98_L96ogfX0K_Ts0C8MLTOo-rm1Yj8JOSP1So3e04Tjpu2-9yw1ptlvty68OWqrc3-ufqH9iV8CVnYqpro02_RU3jQdwyn-IGsrNrK-Sl0YihUNmjjtvfPk6EkcfcsKPWqHkGdrlEYbhtojGvXRAnw",
  // },

  {
    name: "Poster Edukasi",
    gradient: "from-primary-container/60",
    image: "/assets/images/products/poster/hewan-darat.png",
  },
  {
    name: "Wipe & Clean",
    gradient: "from-primary/60",
    image: "/assets/images/products/wipe-and-clean/alfabet.png",
  },
  {
    name: "Montessori",
    gradient: "from-secondary/60",
    span: true,
    image: "/assets/images/products/montessori/busy-jar.png",
  },
  {
    name: "Worksheet",
    gradient: "from-secondary-container/60",
    image: "/assets/images/products/worksheet/coloring-book-unicorn.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    location: "London, UK • Son aged 4",
    quote:
      "The quality of the wooden blocks is exceptional. My 4-year-old hasn't stopped building 'dream cities' since we opened the box. Truly premium.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDITWRcYmYexmIz3t4xZ18W-eDUP-95Qckl3Idp0geb135mLMQg9z2Kw0uAQSjkGTJfGlfZKt3JrPKDlTQgtqrbbREWqMOl1zF0zc0uF79fmVmi9O3-PuTdaoPuY7xegqIA8H-ApD2C7ZhJwgM8683eobeDpOGeY--A55F4PeVx2KHIt3jieocO8LHJ8MObtPTeyDRqEOFX_CvhCyye1dGYyk8sB8rG9u2vVfJjckrWQcu5aOWWPgApwg",
  },
  {
    name: "Mark Thompson",
    location: "Sydney, AU • Daughter aged 3",
    quote:
      "RAVA is our go-to for birthday gifts. The educational value is clear immediately, and they look beautiful on the shelf too!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClvsX70x7XMl6D76PDrHNq9XwvjlfvMZTTJgaohX1-fV-FIpWnoV1Cg6q-z4An5r8f-0af7WfC9MCRQdQXqzJeTaxPqMg9SN-F87SXknoPJb5u8lPFLuVzG6BaRLdx50HwGJV5n4DxLCy7bdBnI2jbeLVNT_eXkShBQqqc7wY104FFIogLLETVdEHGKahaWgTzbhlrJWRuQAvUgF2nWToUZG7UrT-qpXmqDkX2lRy1lqpBLxn3l01MfA",
  },
  {
    name: "Dr. Elena Rossi",
    location: "Milan, IT • Educator",
    quote:
      "Finally, toys that aren't over-stimulating. My students love the sensory board. It keeps them focused and calm.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuHO6dfFDx0LQ9Dlu0unUBO7mSo-wmBl0b4vfK1I7yoL-Eqblorzti64T-80XbbcevgF_KfJvrp9XJashMnBv34VEDaeFT-SIvJ0yeWps_2TEv8vNuvkni0dki2TFCwGdhPcy5-Qz35K2eLHjFHi7zG9qKX9H6_jgTPtxLbpJEkrg1sZPbjFrj60dWW-ZN6ZU4j4Rh0yVgeMXQEn8q5Pgu444uHqHSp8tuyR2HAO7-UFN1tqUKXms3Fg",
  },
];

// Product Listing (Collections) page — "Mainan Sensorik" category
export const collectionHero = {
  breadcrumb: ["Beranda", "Katalog"],
  title: "Semua Produk",
  description:
    "Temukan berbagai mainan edukatif, sensory play, flashcard, buku aktivitas, dan media belajar yang dirancang untuk mendukung tumbuh kembang anak melalui pengalaman bermain yang menyenangkan.",
};

export const collectionProducts: CollectionProduct[] = [
  {
    slug: "color-by-number-part-1",
    name: "Color by Number Part 1",
    category: "Buku Mewarnai",
    description:
      "Mewarnai sesuai angka untuk melatih fokus dan pengenalan warna.",
    ageRange: "Umur 3+",
    price: 25,
    marketplace: {
      shopee: { beforeDiscount: 25000, afterDiscount: 25000 },
      tokopedia: { beforeDiscount: 25000, afterDiscount: 22500 },
      tiktokShop: { beforeDiscount: 25000, afterDiscount: 22500 },
      whatsapp: { beforeDiscount: 25000, afterDiscount: 20000 },
    },
    rating: 5,
    reviewCount: 18,
    ribbon: "New",
    featured: true,
    image: "/assets/images/products/coloring-book/color-by-number-part-1.png",
    thumbnails: [
      "/assets/images/products/coloring-book/color-by-number-part-1.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Mewarnai sesuai kode angka melatih fokus, pengenalan angka, dan koordinasi tangan dalam satu aktivitas.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Angka: Mencocokkan angka dengan warna yang tepat.",
          "Fokus & Ketelitian: Melatih kesabaran mewarnai sesuai pola.",
          "Koordinasi Tangan: Melatih genggaman pensil warna/crayon.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku aktivitas berisi halaman gambar color-by-number, dicetak di atas kertas tebal.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 20. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "color-by-number-part-2",
    name: "Color by Number Part 2",
    category: "Buku Mewarnai",
    description:
      "Lanjutan seri mewarnai angka dengan gambar yang lebih menantang.",
    ageRange: "Umur 3+",
    price: 25,
    marketplace: {
      shopee: { beforeDiscount: 25000, afterDiscount: 25000 },
      tokopedia: { beforeDiscount: 25000, afterDiscount: 22500 },
      tiktokShop: { beforeDiscount: 25000, afterDiscount: 22500 },
      whatsapp: { beforeDiscount: 25000, afterDiscount: 20000 },
    },
    rating: 5,
    reviewCount: 12,
    featured: true,
    image: "/assets/images/products/coloring-book/color-by-number-part-2.png",
    thumbnails: [
      "/assets/images/products/coloring-book/color-by-number-part-2.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Lanjutan seri dengan gambar lebih kompleks untuk menantang anak yang sudah menguasai part 1.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Angka Lanjutan: Kombinasi angka lebih beragam.",
          "Ketekunan: Gambar lebih detail melatih daya tahan fokus.",
          "Ekspresi Kreatif: Kebebasan memilih gradasi warna pada tiap angka.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku aktivitas lanjutan dengan halaman color-by-number tingkat lanjut.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 20. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "coloring-tracing-animal-part-1",
    name: "Coloring & Tracing Hewan Part 1",
    category: "Buku Mewarnai",
    description:
      "Mewarnai sambil menjiplak garis bentuk hewan untuk motorik halus.",
    ageRange: "Umur 3+",
    price: 28,
    marketplace: {
      shopee: { beforeDiscount: 28000, afterDiscount: 28000 },
      tokopedia: { beforeDiscount: 28000, afterDiscount: 25200 },
      tiktokShop: { beforeDiscount: 28000, afterDiscount: 25200 },
      whatsapp: { beforeDiscount: 28000, afterDiscount: 22400 },
    },
    rating: 4.5,
    reviewCount: 21,
    ribbon: "Best Seller",
    featured: true,
    trending: true,
    image:
      "/assets/images/products/coloring-book/coloring-tracing-animal-part-1.png",
    thumbnails: [
      "/assets/images/products/coloring-book/coloring-tracing-animal-part-1.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Menggabungkan aktivitas menjiplak garis bentuk hewan dan mewarnai untuk melatih motorik halus sekaligus mengenal satwa.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Motorik Halus: Menjiplak garis melatih kontrol pensil.",
          "Pengenalan Hewan: Mengenal nama dan bentuk berbagai hewan.",
          "Kreativitas Warna: Bebas memilih warna sesuai imajinasi.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku aktivitas berisi halaman tracing dan mewarnai bertema hewan.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 20. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "coloring-tracing-fruit",
    name: "Coloring & Tracing Buah",
    category: "Buku Mewarnai",
    description: "Kenali nama-nama buah sambil mewarnai dan menjiplak garis.",
    ageRange: "Umur 3+",
    price: 28,
    marketplace: {
      shopee: { beforeDiscount: 28000, afterDiscount: 28000 },
      tokopedia: { beforeDiscount: 28000, afterDiscount: 25200 },
      tiktokShop: { beforeDiscount: 28000, afterDiscount: 25200 },
      whatsapp: { beforeDiscount: 28000, afterDiscount: 22400 },
    },
    rating: 4.5,
    reviewCount: 15,
    image: "/assets/images/products/coloring-book/coloring-tracing-fruit.png",
    thumbnails: [
      "/assets/images/products/coloring-book/coloring-tracing-fruit.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Aktivitas mewarnai dan menjiplak bertema buah membantu anak mengenal nama buah sambil melatih motorik halus.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Buah: Mengenal nama dan bentuk berbagai buah.",
          "Motorik Halus: Menjiplak garis bentuk buah.",
          "Kreativitas Warna: Eksplorasi warna sesuai buah asli atau imajinasi.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku aktivitas berisi halaman tracing dan mewarnai bertema buah.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 20. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "coloring-tracing-ocean",
    name: "Coloring & Tracing Laut",
    category: "Buku Mewarnai",
    description:
      "Jelajahi hewan-hewan laut lewat aktivitas mewarnai dan menjiplak.",
    ageRange: "Umur 3+",
    price: 28,
    marketplace: {
      shopee: { beforeDiscount: 28000, afterDiscount: 28000 },
      tokopedia: { beforeDiscount: 28000, afterDiscount: 25200 },
      tiktokShop: { beforeDiscount: 28000, afterDiscount: 25200 },
      whatsapp: { beforeDiscount: 28000, afterDiscount: 22400 },
    },
    rating: 5,
    reviewCount: 9,
    image: "/assets/images/products/coloring-book/coloring-tracing-ocean.png",
    thumbnails: [
      "/assets/images/products/coloring-book/coloring-tracing-ocean.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Menjelajahi dunia bawah laut lewat aktivitas mewarnai dan menjiplak yang merangsang imajinasi dan motorik halus.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Biota Laut: Mengenal nama dan bentuk hewan laut.",
          "Motorik Halus: Menjiplak garis bentuk hewan laut.",
          "Kreativitas Warna: Eksplorasi warna dunia bawah laut.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku aktivitas berisi halaman tracing dan mewarnai bertema laut.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 20. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "busy-jar-montessori",
    name: "Busy Jar Montessori",
    category: "Montessori",
    description:
      "Toples aktivitas sensorik berisi pompom, kancing, dan kartu tugas edukatif.",
    ageRange: "Umur 2-5",
    price: 45,
    marketplace: {
      shopee: { beforeDiscount: 45000, afterDiscount: 45000 },
      tokopedia: { beforeDiscount: 45000, afterDiscount: 40500 },
      tiktokShop: { beforeDiscount: 45000, afterDiscount: 40500 },
      whatsapp: { beforeDiscount: 45000, afterDiscount: 36000 },
    },
    rating: 5,
    reviewCount: 20,
    ribbon: "New",
    featured: true,
    image: "/assets/images/products/montessori/busy-jar.png",
    thumbnails: ["/assets/images/products/montessori/busy-jar.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Enam toples aktivitas berisi pompom, kancing warna-warni, jepitan kayu, dan kartu tugas bergambar melatih motorik halus sekaligus pengenalan warna dan bentuk dalam satu set.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Motorik Halus: Menjepit dan menyusun benda-benda kecil dengan presisi.",
          "Pengenalan Warna & Bentuk: Mencocokkan benda sesuai instruksi kartu tugas.",
          "Konsentrasi: Melatih fokus menyelesaikan satu aktivitas hingga tuntas.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "6 toples berisi pompom, kancing, jepitan kayu, pipe cleaner, dan bentuk plastik, dilengkapi 4 kartu aktivitas bergambar.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: plastik BPA-free, kayu, dan wol. Ukuran toples: 6x6cm.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Bebas BPA dan ftalat. Berisi komponen berukuran kecil, perlu pengawasan orang tua untuk anak di bawah 3 tahun.",
      },
    ],
  },
  {
    slug: "play-mat-sensori",
    name: "Play Mat Sensori",
    category: "Montessori",
    description:
      "Matras puzzle bertekstur untuk eksplorasi raba dan stimulasi sensorik anak.",
    ageRange: "Umur 1-4",
    price: 55,
    marketplace: {
      shopee: { beforeDiscount: 55000, afterDiscount: 55000 },
      tokopedia: { beforeDiscount: 55000, afterDiscount: 49500 },
      tiktokShop: { beforeDiscount: 55000, afterDiscount: 49500 },
      whatsapp: { beforeDiscount: 55000, afterDiscount: 44000 },
    },
    rating: 4.5,
    reviewCount: 14,
    featured: true,
    image: "/assets/images/products/montessori/play-mat.png",
    thumbnails: ["/assets/images/products/montessori/play-mat.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Matras puzzle berbahan rumput sintetis dilengkapi elemen bertekstur seperti pompom, kancing, kain kasar, dan spons untuk merangsang indera peraba anak.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Stimulasi Sentuhan: Mengenal tekstur kasar, halus, dan lembut dalam satu matras.",
          "Motorik Halus: Memutar baling-baling dan menyentuh tiap permukaan.",
          "Eksplorasi Bebas: Bermain tanpa arahan untuk melatih rasa ingin tahu.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 matras puzzle sensorik ukuran 30x30cm dengan 9 elemen tekstur berbeda.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Material: foam EVA non-toxic. Ukuran: 30x30cm.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Bebas BPA, permukaan lembut dan aman digunakan sebagai alas bermain anak.",
      },
    ],
  },
  {
    slug: "poster-hewan-darat",
    name: "Poster Hewan Darat",
    category: "Poster Edukasi",
    description:
      "Poster edukasi mengenal nama hewan darat dalam Bahasa Indonesia dan Inggris.",
    ageRange: "Umur 2+",
    price: 15,
    marketplace: {
      shopee: { beforeDiscount: 15000, afterDiscount: 15000 },
      tokopedia: { beforeDiscount: 15000, afterDiscount: 13500 },
      tiktokShop: { beforeDiscount: 15000, afterDiscount: 13500 },
      whatsapp: { beforeDiscount: 15000, afterDiscount: 12000 },
    },
    rating: 5,
    reviewCount: 34,
    ribbon: "Best Seller",
    featured: false,
    trending: true,
    image: "/assets/images/products/poster/hewan-darat.png",
    thumbnails: ["/assets/images/products/poster/hewan-darat.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Poster bergambar 16 hewan darat lengkap dengan nama Indonesia dan Inggris memperkaya kosakata anak sejak dini lewat ilustrasi yang menarik.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Kosakata: Mengenal nama hewan dalam dua bahasa sekaligus.",
          "Pengenalan Bentuk: Mengenali ciri khas tiap hewan lewat ilustrasi detail.",
          "Bahasa Inggris Dasar: Menghafal padanan kata sederhana dalam Bahasa Inggris.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content: "1 lembar poster laminasi berisi 16 ilustrasi hewan darat.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A3 (29.7x42cm). Bahan: art paper laminasi doff.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content: "Tinta cetak non-toxic, tahan lecek dan mudah dibersihkan.",
      },
    ],
  },
  {
    slug: "poster-hewan-laut",
    name: "Poster Hewan Laut",
    category: "Poster Edukasi",
    description:
      "Poster edukasi mengenal nama biota laut dalam Bahasa Indonesia dan Inggris.",
    ageRange: "Umur 2+",
    price: 15,
    marketplace: {
      shopee: { beforeDiscount: 15000, afterDiscount: 15000 },
      tokopedia: { beforeDiscount: 15000, afterDiscount: 13500 },
      tiktokShop: { beforeDiscount: 15000, afterDiscount: 13500 },
      whatsapp: { beforeDiscount: 15000, afterDiscount: 12000 },
    },
    rating: 5,
    reviewCount: 27,
    image: "/assets/images/products/poster/hewan-laut.png",
    thumbnails: ["/assets/images/products/poster/hewan-laut.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Poster bergambar 16 biota laut lengkap dengan nama Indonesia dan Inggris mengajak anak menjelajahi dunia bawah laut sambil belajar kosakata baru.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Kosakata: Mengenal nama biota laut dalam dua bahasa sekaligus.",
          "Pengenalan Bentuk: Mengenali ciri khas tiap biota laut lewat ilustrasi detail.",
          "Bahasa Inggris Dasar: Menghafal padanan kata sederhana dalam Bahasa Inggris.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content: "1 lembar poster laminasi berisi 16 ilustrasi biota laut.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A3 (29.7x42cm). Bahan: art paper laminasi doff.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content: "Tinta cetak non-toxic, tahan lecek dan mudah dibersihkan.",
      },
    ],
  },
  {
    slug: "poster-hewan-udara",
    name: "Poster Hewan Udara",
    category: "Poster Edukasi",
    description:
      "Poster edukasi mengenal nama hewan udara dalam Bahasa Indonesia dan Inggris.",
    ageRange: "Umur 2+",
    price: 15,
    marketplace: {
      shopee: { beforeDiscount: 15000, afterDiscount: 15000 },
      tokopedia: { beforeDiscount: 15000, afterDiscount: 13500 },
      tiktokShop: { beforeDiscount: 15000, afterDiscount: 13500 },
      whatsapp: { beforeDiscount: 15000, afterDiscount: 12000 },
    },
    rating: 4.5,
    reviewCount: 19,
    image: "/assets/images/products/poster/hewan-udara.png",
    thumbnails: ["/assets/images/products/poster/hewan-udara.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Poster bergambar 16 hewan udara mulai dari burung hingga serangga, lengkap dengan nama Indonesia dan Inggris untuk memperkaya kosakata anak.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Kosakata: Mengenal nama hewan udara dalam dua bahasa sekaligus.",
          "Pengenalan Bentuk: Mengenali ciri khas tiap hewan lewat ilustrasi detail.",
          "Bahasa Inggris Dasar: Menghafal padanan kata sederhana dalam Bahasa Inggris.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content: "1 lembar poster laminasi berisi 16 ilustrasi hewan udara.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A3 (29.7x42cm). Bahan: art paper laminasi doff.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content: "Tinta cetak non-toxic, tahan lecek dan mudah dibersihkan.",
      },
    ],
  },
  {
    slug: "wipe-clean-alfabet",
    name: "Wipe & Clean Alfabet",
    category: "Wipe & Clean",
    description:
      "Papan laminasi tulis-hapus untuk belajar mengenal huruf A-Z bersama gambar.",
    ageRange: "Umur 3+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 5,
    reviewCount: 42,
    ribbon: "Best Seller",
    featured: false,
    trending: true,
    image: "/assets/images/products/wipe-and-clean/alfabet.png",
    thumbnails: ["/assets/images/products/wipe-and-clean/alfabet.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan laminasi berisi huruf A sampai Z lengkap dengan gambar dan garis putus-putus untuk berlatih menulis huruf berulang kali menggunakan spidol khusus.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Huruf: Menghafal bentuk huruf besar A-Z lewat gambar pendamping.",
          "Motorik Halus: Menebalkan garis putus-putus melatih genggaman alat tulis.",
          "Kosakata Dwibahasa: Mengenal nama benda dalam Bahasa Indonesia dan Inggris.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 3 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-angka-0-10",
    name: "Wipe & Clean Angka 0-10",
    category: "Wipe & Clean",
    description:
      "Papan laminasi tulis-hapus untuk berlatih menulis angka 0 sampai 10.",
    ageRange: "Umur 3+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 5,
    reviewCount: 38,
    image: "/assets/images/products/wipe-and-clean/angka-0-10.png",
    thumbnails: ["/assets/images/products/wipe-and-clean/angka-0-10.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan laminasi berisi angka 0 sampai 10 dengan garis putus-putus membantu anak berlatih menulis angka dengan benar secara berulang.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Angka: Menghafal bentuk dan urutan angka 0-10.",
          "Motorik Halus: Menebalkan garis putus-putus melatih genggaman alat tulis.",
          "Konsentrasi: Melatih fokus menyelesaikan tiap angka satu per satu.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 3 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-day-of-the-week",
    name: "Wipe & Clean Hari dalam Seminggu",
    category: "Wipe & Clean",
    description:
      "Papan laminasi tulis-hapus untuk mengenal nama hari dalam Bahasa Indonesia dan Inggris.",
    ageRange: "Umur 4+",
    price: 18,
    marketplace: {
      shopee: { beforeDiscount: 18000, afterDiscount: 18000 },
      tokopedia: { beforeDiscount: 18000, afterDiscount: 16200 },
      tiktokShop: { beforeDiscount: 18000, afterDiscount: 16200 },
      whatsapp: { beforeDiscount: 18000, afterDiscount: 14400 },
    },
    rating: 4.5,
    reviewCount: 16,
    image: "/assets/images/products/wipe-and-clean/day-of-the-week.png",
    thumbnails: ["/assets/images/products/wipe-and-clean/day-of-the-week.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan laminasi memuat 7 nama hari dalam Bahasa Indonesia dan Inggris lengkap dengan garis putus-putus untuk berlatih menulis.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Waktu: Menghafal urutan hari dalam seminggu.",
          "Kosakata Dwibahasa: Mengenal nama hari dalam Bahasa Indonesia dan Inggris.",
          "Motorik Halus: Menebalkan garis putus-putus melatih genggaman alat tulis.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-month-of-the-year",
    name: "Wipe & Clean Bulan dalam Setahun",
    category: "Wipe & Clean",
    description:
      "Papan laminasi tulis-hapus untuk mengenal nama bulan dalam Bahasa Indonesia dan Inggris.",
    ageRange: "Umur 4+",
    price: 18,
    marketplace: {
      shopee: { beforeDiscount: 18000, afterDiscount: 18000 },
      tokopedia: { beforeDiscount: 18000, afterDiscount: 16200 },
      tiktokShop: { beforeDiscount: 18000, afterDiscount: 16200 },
      whatsapp: { beforeDiscount: 18000, afterDiscount: 14400 },
    },
    rating: 4.5,
    reviewCount: 12,
    image: "/assets/images/products/wipe-and-clean/month-of-the-year.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/month-of-the-year.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan laminasi memuat 12 nama bulan dalam Bahasa Indonesia dan Inggris lengkap dengan garis putus-putus untuk berlatih menulis.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Waktu: Menghafal urutan bulan dalam setahun.",
          "Kosakata Dwibahasa: Mengenal nama bulan dalam Bahasa Indonesia dan Inggris.",
          "Motorik Halus: Menebalkan garis putus-putus melatih genggaman alat tulis.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-shape",
    name: "Wipe & Clean Bentuk",
    category: "Wipe & Clean",
    description:
      "Papan laminasi tulis-hapus untuk mengenal 12 macam bentuk geometris.",
    ageRange: "Umur 3+",
    price: 18,
    marketplace: {
      shopee: { beforeDiscount: 18000, afterDiscount: 18000 },
      tokopedia: { beforeDiscount: 18000, afterDiscount: 16200 },
      tiktokShop: { beforeDiscount: 18000, afterDiscount: 16200 },
      whatsapp: { beforeDiscount: 18000, afterDiscount: 14400 },
    },
    rating: 5,
    reviewCount: 22,
    ribbon: "New",
    image: "/assets/images/products/wipe-and-clean/shape.png",
    thumbnails: ["/assets/images/products/wipe-and-clean/shape.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan laminasi memuat 12 bentuk geometris seperti lingkaran, segitiga, hingga segi enam, lengkap dengan garis putus-putus untuk berlatih menebalkan bentuk.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Bentuk: Mengenal 12 macam bentuk geometris dasar.",
          "Kosakata Dwibahasa: Mengenal nama bentuk dalam Bahasa Indonesia dan Inggris.",
          "Motorik Halus: Menebalkan garis putus-putus melatih genggaman alat tulis.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 3 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-bunny",
    name: "Wipe & Clean Jadwal Pelajaran Bunny",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan tema kelinci lucu.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 5,
    reviewCount: 8,
    image: "/assets/images/products/wipe-and-clean/jadwal-pelajaran-bunny.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-bunny.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema kelinci membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu dengan cara yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Tanggung Jawab: Melatih anak menyiapkan pelajaran sesuai jadwal.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-cute",
    name: "Wipe & Clean Jadwal Pelajaran Cute",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan ilustrasi bertema imut.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 4.5,
    reviewCount: 6,
    image: "/assets/images/products/wipe-and-clean/jadwal-pelajaran-cute.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-cute.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema imut membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu dengan cara yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Tanggung Jawab: Melatih anak menyiapkan pelajaran sesuai jadwal.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-doctor",
    name: "Wipe & Clean Jadwal Pelajaran Dokter",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan tema profesi dokter.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 4.5,
    reviewCount: 5,
    image: "/assets/images/products/wipe-and-clean/jadwal-pelajaran-doctor.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-doctor.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema dokter membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu sekaligus mengenal profesi.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Pengenalan Profesi: Mengenal profesi dokter lewat ilustrasi tema.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-police",
    name: "Wipe & Clean Jadwal Pelajaran Polisi",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan tema profesi polisi.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 5,
    reviewCount: 9,
    image: "/assets/images/products/wipe-and-clean/jadwal-pelajaran-police.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-police.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema polisi membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu sekaligus mengenal profesi.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Pengenalan Profesi: Mengenal profesi polisi lewat ilustrasi tema.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-sekolah",
    name: "Wipe & Clean Jadwal Pelajaran Sekolah",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan ilustrasi bertema sekolah.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 5,
    reviewCount: 11,
    image:
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-sekolah.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-sekolah.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema sekolah membantu anak mencatat dan mengingat jadwal pelajaran Senin sampai Sabtu di kolom yang sudah tersedia.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Tanggung Jawab: Melatih anak menyiapkan pelajaran sesuai jadwal.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-soldier",
    name: "Wipe & Clean Jadwal Pelajaran Tentara",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan tema profesi tentara.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 4.5,
    reviewCount: 7,
    image:
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-soldier.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-soldier.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema tentara membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu sekaligus mengenal profesi.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Pengenalan Profesi: Mengenal profesi tentara lewat ilustrasi tema.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-unicorn",
    name: "Wipe & Clean Jadwal Pelajaran Unicorn",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan tema unicorn yang lucu.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 5,
    reviewCount: 13,
    ribbon: "New",
    image:
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-unicorn.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-unicorn.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema unicorn membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu dengan cara yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Tanggung Jawab: Melatih anak menyiapkan pelajaran sesuai jadwal.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "wipe-clean-jadwal-pelajaran-wild",
    name: "Wipe & Clean Jadwal Pelajaran Hewan Liar",
    category: "Wipe & Clean",
    description:
      "Papan jadwal pelajaran mingguan tulis-hapus dengan tema hewan liar.",
    ageRange: "Umur 4+",
    price: 20,
    marketplace: {
      shopee: { beforeDiscount: 20000, afterDiscount: 20000 },
      tokopedia: { beforeDiscount: 20000, afterDiscount: 18000 },
      tiktokShop: { beforeDiscount: 20000, afterDiscount: 18000 },
      whatsapp: { beforeDiscount: 20000, afterDiscount: 16000 },
    },
    rating: 4.5,
    reviewCount: 6,
    image: "/assets/images/products/wipe-and-clean/jadwal-pelajaran-wild.png",
    thumbnails: [
      "/assets/images/products/wipe-and-clean/jadwal-pelajaran-wild.png",
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "Papan jadwal pelajaran mingguan bertema hewan liar membantu anak mencatat dan mengingat jadwal sekolah Senin sampai Sabtu sekaligus mengenal satwa.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Manajemen Waktu: Membiasakan anak mengecek jadwal harian secara mandiri.",
          "Pengenalan Hewan: Mengenal berbagai hewan liar lewat ilustrasi tema.",
          "Motorik Halus: Menulis nama mata pelajaran pada kolom yang tersedia.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 papan laminasi Wipe & Clean ukuran A3 dan 1 spidol non-permanen.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Ukuran: A3 (29.7x42cm). Bahan: laminasi glossy tahan air, dapat dihapus dan ditulis ulang.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta spidol non-toxic dan mudah dihapus dengan lap kering, aman untuk anak usia 4 tahun ke atas.",
      },
    ],
  },
  {
    slug: "worksheet-coloring-book-unicorn",
    name: "Coloring Book Unicorn",
    category: "Worksheet",
    description:
      "Buku mewarnai bertema unicorn dengan 13 halaman ilustrasi bergaris tebal.",
    ageRange: "Umur 3+",
    price: 25,
    marketplace: {
      shopee: { beforeDiscount: 25000, afterDiscount: 25000 },
      tokopedia: { beforeDiscount: 25000, afterDiscount: 22500 },
      tiktokShop: { beforeDiscount: 25000, afterDiscount: 22500 },
      whatsapp: { beforeDiscount: 25000, afterDiscount: 20000 },
    },
    rating: 5,
    reviewCount: 17,
    featured: false,
    image: "/assets/images/products/worksheet/coloring-book-unicorn.png",
    thumbnails: ["/assets/images/products/worksheet/coloring-book-unicorn.png"],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "13 halaman ilustrasi unicorn bergaris tebal mengajak anak mewarnai sambil melatih kreativitas dan koordinasi tangan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Motorik Halus: Melatih genggaman pensil warna/crayon saat mewarnai.",
          "Kreativitas: Kebebasan memilih warna sesuai imajinasi anak.",
          "Fokus & Ketelitian: Melatih kesabaran mewarnai di dalam garis.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku worksheet berisi 13 halaman ilustrasi unicorn, dicetak di atas kertas tebal.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 13. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "worksheet-coloring-book-permainan-tradisional",
    name: "Coloring Book Permainan Tradisional",
    category: "Worksheet",
    description:
      "Buku mewarnai bertema permainan tradisional Indonesia seperti congklak dan engklek.",
    ageRange: "Umur 3+",
    price: 25,
    marketplace: {
      shopee: { beforeDiscount: 25000, afterDiscount: 25000 },
      tokopedia: { beforeDiscount: 25000, afterDiscount: 22500 },
      tiktokShop: { beforeDiscount: 25000, afterDiscount: 22500 },
      whatsapp: { beforeDiscount: 25000, afterDiscount: 20000 },
    },
    rating: 5,
    reviewCount: 14,
    image:
      "/assets/images/products/worksheet/coloring-book-permainan-tradisional.png",
    thumbnails: [
      "/assets/images/products/worksheet/coloring-book-permainan-tradisional.png",
      ...buildThumbnails("flashcard", "penjumlahan-female-pilot", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "12 halaman ilustrasi permainan tradisional Indonesia seperti congklak, engklek, dan gasing mengenalkan budaya sambil melatih kreativitas mewarnai.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Pengenalan Budaya: Mengenal ragam permainan tradisional Indonesia.",
          "Motorik Halus: Melatih genggaman pensil warna/crayon saat mewarnai.",
          "Kreativitas: Kebebasan memilih warna sesuai imajinasi anak.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 buku worksheet berisi 12 halaman ilustrasi permainan tradisional, dicetak di atas kertas tebal.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content: "Ukuran: A4. Jumlah halaman: 12. Kertas: 150gsm bebas asam.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, aman digunakan anak usia 3 tahun ke atas dengan pengawasan.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-penjumlahan-pilot-male",
    name: "Flashcard Tabel Penjumlahan Pilot Male",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema pilot untuk drilling tabel penjumlahan 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 5,
    reviewCount: 24,
    ribbon: "Best Seller",
    featured: true,
    trending: true,
    image: "/assets/images/products/flashcard/penjumlahan-pilot-male.png",
    thumbnails: [
      "/assets/images/products/flashcard/penjumlahan-pilot-male.png",
      ...buildThumbnails("flashcard", "penjumlahan-male-pilot", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema pilot memuat tabel penjumlahan 1 sampai 10, membantu anak menghafal hasil penjumlahan lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil penjumlahan 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel penjumlahan, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-penjumlahan-pilot-female",
    name: "Flashcard Tabel Penjumlahan Pilot Female",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema pilot untuk drilling tabel penjumlahan 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 5,
    reviewCount: 24,
    ribbon: "Best Seller",
    featured: true,
    trending: true,
    image: "/assets/images/products/flashcard/penjumlahan-pilot-female.png",
    thumbnails: [
      "/assets/images/products/flashcard/penjumlahan-pilot-female.png",
      ...buildThumbnails("flashcard", "penjumlahan-male-pilot", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema pilot memuat tabel penjumlahan 1 sampai 10, membantu anak menghafal hasil penjumlahan lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil penjumlahan 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel penjumlahan, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-pengurangan-astronot-male",
    name: "Flashcard Tabel Pengurangan Astronot Male",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema astronot untuk drilling tabel pengurangan 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 5,
    reviewCount: 18,
    image: "/assets/images/products/flashcard/pengurangan-astronot-male.png",
    thumbnails: [
      "/assets/images/products/flashcard/pengurangan-astronot-male.png",
      ...buildThumbnails("flashcard", "pengurangan-male-astrounout", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema astronot memuat tabel pengurangan 1 sampai 10, membantu anak menghafal hasil pengurangan lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil pengurangan 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel pengurangan, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-pengurangan-astronot-female",
    name: "Flashcard Tabel Pengurangan Astronot Female",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema astronot untuk drilling tabel pengurangan 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 5,
    reviewCount: 18,
    image: "/assets/images/products/flashcard/pengurangan-astronot-female.png",
    thumbnails: [
      "/assets/images/products/flashcard/pengurangan-astronot-female.png",
      ...buildThumbnails("flashcard", "pengurangan-female-astronaut", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema astronot memuat tabel pengurangan 1 sampai 10, membantu anak menghafal hasil pengurangan lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil pengurangan 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel pengurangan, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-perkalian-polisi-male",
    name: "Flashcard Tabel Perkalian Polisi Male",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema polisi untuk drilling tabel perkalian 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 5,
    reviewCount: 21,
    image: "/assets/images/products/flashcard/perkalian-police-male.png",
    thumbnails: [
      "/assets/images/products/flashcard/perkalian-police-male.png",
      ...buildThumbnails("flashcard", "perkalian-male-police", 4),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema polisi memuat tabel perkalian 1 sampai 10, membantu anak menghafal hasil perkalian lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil perkalian 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel perkalian, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-perkalian-polisi-female",
    name: "Flashcard Tabel Perkalian Polisi Female",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema polisi untuk drilling tabel perkalian 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 5,
    reviewCount: 21,
    image: "/assets/images/products/flashcard/perkalian-police-female.png",
    thumbnails: [
      "/assets/images/products/flashcard/perkalian-police-female.png",
      ...buildThumbnails("flashcard", "perkalian-female-police", 4),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema polisi memuat tabel perkalian 1 sampai 10, membantu anak menghafal hasil perkalian lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil perkalian 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel perkalian, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-pembagian-pemadam-male",
    name: "Flashcard Tabel Pembagian Pemadam Kebakaran Male",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema pemadam kebakaran untuk drilling tabel pembagian 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 4.5,
    reviewCount: 15,
    image: "/assets/images/products/flashcard/pembagian-pemadam-male.png",
    thumbnails: [
      "/assets/images/products/flashcard/pembagian-pemadam-male.png",
      ...buildThumbnails("flashcard", "pembagian-male-fire-figter", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema pemadam kebakaran memuat tabel pembagian 1 sampai 10, membantu anak menghafal hasil pembagian lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil pembagian 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel pembagian, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
  {
    slug: "flashcard-tabel-pembagian-pemadam-female",
    name: "Flashcard Tabel Pembagian Pemadam Kebakaran Female",
    category: "Flashcard",
    description:
      "Kartu lipat kipas bertema pemadam kebakaran untuk drilling tabel pembagian 1 sampai 10.",
    ageRange: "Umur 5+",
    price: 30,
    marketplace: {
      shopee: { beforeDiscount: 30000, afterDiscount: 30000 },
      tokopedia: { beforeDiscount: 30000, afterDiscount: 27000 },
      tiktokShop: { beforeDiscount: 30000, afterDiscount: 27000 },
      whatsapp: { beforeDiscount: 30000, afterDiscount: 24000 },
    },
    rating: 4.5,
    reviewCount: 15,
    image: "/assets/images/products/flashcard/pembagian-pemadam-female.png",
    thumbnails: [
      "/assets/images/products/flashcard/pembagian-pemadam-female.png",
      ...buildThumbnails("flashcard", "pembagian-female-fire-fighter", 5),
    ],
    accordion: [
      {
        icon: "eco",
        title: "Manfaat",
        defaultOpen: true,
        content:
          "10 kartu lipat model kipas bertema pemadam kebakaran memuat tabel pembagian 1 sampai 10, membantu anak menghafal hasil pembagian lewat drilling yang menyenangkan.",
      },
      {
        icon: "psychology",
        title: "Hasil Pembelajaran",
        content: [
          "Kemampuan Berhitung: Menghafal hasil pembagian 1-10 secara cepat.",
          "Motorik Halus: Membuka dan melipat kartu kipas melatih koordinasi jari.",
          "Fokus & Ketelitian: Melatih konsentrasi mengikuti urutan tabel.",
        ],
      },
      {
        icon: "inventory_2",
        title: "Isi Paket",
        content:
          "1 set kartu lipat kipas berisi 10 kartu tabel pembagian, tersedia varian karakter pria dan wanita.",
      },
      {
        icon: "architecture",
        title: "Spesifikasi",
        content:
          "Material: kertas art karton laminasi. Ukuran per kartu: 6x18cm, disatukan dengan ring.",
      },
      {
        icon: "verified_user",
        title: "Informasi Keamanan",
        content:
          "Tinta cetak non-toxic, tepi kartu membulat aman untuk anak usia 5 tahun ke atas.",
      },
    ],
  },
];

// Homepage "Our Top Rated Tools" — pulled from products flagged featured: true
export const featuredProducts = collectionProducts.filter(
  (product) => product.featured,
);

// Homepage "Trending Right Now" — pulled from products flagged trending: true
export const trendingProducts: TrendingProduct[] = collectionProducts
  .filter((product) => product.trending)
  .map((product) => ({
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.marketplace.whatsapp.beforeDiscount,
    discount: product.marketplace.whatsapp.afterDiscount,
    image: product.image,
  }));

export const filterOptions = [];
export const sortOptions = [
  "Terbaru",
  "Terpopuler",
  "Harga: Rendah ke Tinggi",
  "Harga: Tinggi ke Rendah",
];

// Product Detail page — "Master Architect Set"
export const productDetail = {
  slug: "master-architect-set",
  category: "Building Blocks",
  ageRange: "Umur 3-8",
  name: "Master Architect Set",
  rating: 4.9,
  reviewCount: 124,
  description:
    "Elevate playtime with a masterclass in open-ended exploration. Inspired by Scandinavian minimalism, these 100 precision-cut beechwood blocks invite your little architect to build without boundaries.",
  heroImage:
    "https://lh3.googleusercontent.com/aida/AP1WRLvLEF-QT2J8R4Im0uOTTpivOzjYOdC7NzFiPG_eMvEFdsArkt_UamxYJTB5oWHKv3VNnrz_jY2LD6EWmcslcu6Y-cjwNnQL5qr2IrQcMMEUU7gaVF1_0UoqnA9wO33J6xoKeZt8YuDGmVBeY5uh2s6rB_UMIU_ko2_kdsXZFOH8e9XOWyrLui8Duk44NM5oNPue2jm-_UduPFet1riWrdtRcY3m3UvT_Ni9bAAs3MrrDRlci4r0zc7HEww",
  thumbnails: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuATY9ngp5q90KJHLWMbXCDCx_-Scq25jV28SVoGStKl1WScXQyZ5TACt-Zn7evaQ8ryhHCqcddHQBkxEq2YMpFg2hm5UNJuSMuFnUC3LjwnKpwiZEFV_TNf_hbFemBoCzDAUxdF1tWBx8umns_u-NI7As0DhvDfDT076lr8lbhpomELp9cMjYZoJKPs09WjlgCxcKwFDkbWvhjeso0Kka7o8mJYUjbLfuR7YaoKKA-fRVkqxCkC1jVZpg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDaSb2pxXaqR1innGbk5Zr5vk6TCurno5T-CjxIPGldfJkmKVEBnVVJiElNyRI4F_GpkZqYtobzU4RyaKYVO-CrgaD-s20e6Gt6HYSAgoeRBYSfMiyBxntRkqhzMZGyR3ZbaRCBieZPGNRqCCgfqmBa1wxifu7NE5tiKrn3OCXlSqPdI4YiwytS9WGC_V-JBfpshavmIcFxH3LSXpQun8OiCp9Vglr0HyDi1LhHna3Szq8W1Ac_o-0yQg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAOTyztsoXPCjF1oSLaE20qBXQgVRoCOx-ZjA2JS3Sj8O3l-Jm01mAQNp7n92Q-PVs9Rhn_Ss2Z0ZzD69ndGW7WGp9dmwq9jcc0drI4DKlFKzIgBtUsFjdwvVcJiRV-i1JZcvdjzONchmQdDQGcg8hXI503kzaX4J8gzBjKlnvZ12CI6rdlY15F6JTogK_4MaJQxAFxCevXp2kD_lFTg2wZ_L9e0eOaEF2OWal3C-r_GChxJVpNL21Aqw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgf8HfM7JDLjPmHPeythjqaFkbOGHFmvfV0W_cQ3A2taID_uewEQhO19w4PmbwFdXadUJIiS9yo-7_w9Qj94ZmV7wR7CqbQkp6m5Cpo9FGNcCOcyh6a3QtQLfwe6JnhJ8X05MGPn84vXiy6dFSm6llRdBeKmbWJ0YoOm6IwqeSF8NEfJsIVZ4c-kGhhpFsfMZlXS-TUePoj-b_yWLMb_WDyLUGi9NqidGJ3L1nktVpBOKh-rl_lrVgeQ",
  ],
};

// Marketplace branding is shared across every product. `price` on a product
// is stored in thousands of Rupiah (e.g. 35 = Rp35.000). Each platform then
// applies its own discount share on top of that original price, so the
// original vs. discounted price differs per product instead of a single
// fixed amount for every page.
const marketplacePlatforms: Array<
  Omit<Marketplace, "originalPrice" | "discountedPrice">
> = [
  {
    name: "Shopee",
    color: "#EE4D2D",
    hoverColor: "#d43f21",
    icon: "arrow_forward",
  },
  {
    name: "Tokopedia",
    color: "#03AC0E",
    hoverColor: "#028b0b",
    icon: "arrow_forward",
  },
  {
    name: "TikTok Shop",
    color: "#000000",
    hoverColor: "#111111",
    icon: "arrow_forward",
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    hoverColor: "#1da851",
    icon: "chat",
  },
];
const marketplaceDiscountShare = [1, 0.9, 0.9, 0.8];
const marketplacePricingKeys: Array<keyof ProductMarketplacePricing> = [
  "shopee",
  "tokopedia",
  "tiktokShop",
  "whatsapp",
];

// Products with manual `marketplace` pricing (see each entry in
// collectionProducts) use those exact before/after discount numbers. Products
// without it (trending/related picks) fall back to a computed estimate off
// their base price.
function buildMarketplaces(
  pricing: ProductMarketplacePricing | undefined,
  basePrice: number,
): Marketplace[] {
  if (pricing) {
    return marketplacePlatforms.map((platform, i) => {
      const { beforeDiscount, afterDiscount } =
        pricing[marketplacePricingKeys[i]];
      return {
        ...platform,
        originalPrice: beforeDiscount,
        discountedPrice: afterDiscount,
      };
    });
  }

  const originalPrice = Math.round(basePrice * 1000);
  return marketplacePlatforms.map((platform, i) => ({
    ...platform,
    originalPrice,
    discountedPrice: Math.round(originalPrice * marketplaceDiscountShare[i]),
  }));
}

export const productAccordion = [
  {
    icon: "eco",
    title: "Manfaat",
    defaultOpen: true,
    content:
      "Crafted for durability and tactile pleasure, our blocks encourage screen-free play. They foster patience, concentration, and a deep appreciation for geometric harmony.",
  },
  {
    icon: "psychology",
    title: "Hasil Pembelajaran",
    defaultOpen: false,
    content: [
      "Motorik Halus: Refining fine motor control through careful stacking and balancing.",
      "Spatial Awareness: Visualizing structures in 3D and understanding structural integrity.",
      "Creativity: Transforming abstract shapes into castles, cities, or animals.",
    ],
  },
  {
    icon: "inventory_2",
    title: "Isi Paket",
    defaultOpen: false,
    content:
      "Includes 100 blocks in 14 unique shapes: cubes, rectangular prisms, triangles, cylinders, and arches. Comes with a high-quality cotton drawstring storage bag for easy cleanup.",
  },
  {
    icon: "architecture",
    title: "Spesifikasi",
    defaultOpen: false,
    content:
      "Material: FSC-Certified Solid Beechwood. Weight: 3.5kg. Finishing: Food-grade linseed oil and water-based tints.",
  },
  {
    icon: "verified_user",
    title: "Informasi Keamanan",
    defaultOpen: false,
    content:
      "Safety is our priority. All pieces are BPA-free, lead-free, and painted with non-toxic water-based stains. Exceeds EN71 and ASTM F963 international safety standards.",
  },
];

// export const relatedProducts: RelatedProduct[] = [
//   {
//     slug: "nordic-rainbow",
//     category: "Toddler Classics",
//     name: "Nordic Rainbow",
//     price: 45,
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCVWhuaTNzvOsm1-Uxge5hF6MvddcUjUOLPYYR60EsdqJHNGiyY5V93JL1FusMxXQf98H5wRNaORVJxRsgmkk-1WgfIAt3Dcew_Q9sNqE5-8vIr0hPzF-MPdUO9Smz9USJi2iM5SNAbTX70-C_wM3OjliPgp9rD4KFDYvAfhKZiTwishHy5TsmZT4LqHc7nMj5R-ZT_BeVA3Ix6ZNpIFTyiXeVNmSgw7oAdAVtAT-AKoKcP0ku-X_2AEA",
//   },
//   {
//     slug: "savanna-friends",
//     category: "Logic & Puzzles",
//     name: "Savanna Friends",
//     price: 38,
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuASE5CUtOmbEQRrji62-Nl3ErYZ3l1ExoPjAFCNrzs67GDLGF_g9eRyxqT5rotb6w2sAvQOlcSka3qSxQi-mX_lTybgY98k1msyc7PNZzaSGjFprjLwHd6DSWnofNRYn7ppnvpxhu2FzuNK3eIaD3lv_ThycW-QLoD8K_BZVd3GXp_CJnv9tnzCQp-9WCNz9gNNbEAqdb8CC0nAdVK_7JpmMRV1M3lZ-Z6JhdgQly-VeuZIgdIDfqg1iw",
//   },
//   {
//     slug: "balance-pebbles",
//     category: "Sensory Play",
//     name: "Balance Pebbles",
//     price: 52,
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDe-0v4s5_NgjE341FPAp0aQf2CIGgBSkbBgo3SF3Tuo9LCbYo2-_qcL3nWPnrrWlX8k7Dr--aMPA6Niz4VkIBAA1_esszHAyHdWHqg3nkVdBAiT3a0qZxtdkO3Mzj0XLoTcjSxjo_K0grZA0HfhpuzXaxsdN7XXV5HgsXpwxSN0mz7-9TDUBT_qY2BBwRxB97r7mn5Bl_EoZFFvcfCi3yRb4FdetQUwGFRw43PfpzRXoGJ6-2LQaQkaQ",
//   },
// ];

export const ratingBreakdown = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 6 },
  { stars: 3, percent: 2 },
];

export const productReviews: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    timeAgo: "2 minggu yang lalu",
    quote:
      "The quality of the wood is exceptional. Unlike cheaper blocks, these have a weight and texture that feels truly premium. My 4-year-old hasn't stopped building 'castles' for days.",
  },
  {
    name: "David L.",
    rating: 5,
    timeAgo: "1 bulan yang lalu",
    quote:
      "As an architect myself, I appreciate the precision of these cuts. They balance perfectly. It's beautiful enough to leave out on the coffee table!",
  },
  {
    name: "Elena R.",
    rating: 4,
    timeAgo: "2 bulan yang lalu",
    quote:
      "Love the sustainability aspect. The storage bag is a nice touch too. Only wish they came in even bigger sets!",
  },
];

export const productFaqs: FaqItem[] = [
  {
    question: "How do I clean the wooden blocks?",
    answer:
      "Simply wipe with a slightly damp, lint-free cloth. Avoid soaking in water or using harsh detergents, as this can raise the wood grain or damage the non-toxic finish. For a deeper clean, a mild solution of water and white vinegar can be used.",
  },
  {
    question: "Are the paints safe if my child chews on them?",
    answer:
      "Yes! We use only water-based, non-toxic tints and food-grade linseed oil. Our products are rigorously tested and certified BPA-free and lead-free, ensuring they are completely safe for mouthing.",
  },
  {
    question: "Is the wood prone to splintering?",
    answer:
      "We use solid, kiln-dried beechwood which is known for its high density and resistance to splintering. Every block undergoes a multi-stage sanding process to ensure all edges and corners are perfectly smooth.",
  },
];

// Every clickable product across the site (home + collections + trending +
// related) indexed by slug, so /products/[slug] can render the product that
// was actually clicked instead of always showing the Master Architect Set.
const allProducts: Array<{
  slug: string;
  name: string;
  image: string;
  thumbnails?: string[];
  category?: string;
  ageRange?: string;
  description?: string;
  price?: number;
  marketplace?: ProductMarketplacePricing;
  rating?: number;
  reviewCount?: number;
  accordion?: AccordionItemData[];
}> = collectionProducts;

export function getAllProductSlugs(): string[] {
  return allProducts.map((product) => product.slug);
}

export function getProductBySlug(slug: string): ProductDetailData | null {
  const match = allProducts.find((product) => product.slug === slug);
  if (!match) return null;

  const basePrice = match.price ?? 50;

  return {
    slug: match.slug,
    name: match.name,
    category: match.category ?? productDetail.category,
    ageRange: match.ageRange ?? productDetail.ageRange,
    description: match.description ?? productDetail.description,
    price: match.price,
    rating: match.rating ?? productDetail.rating,
    reviewCount: match.reviewCount ?? productDetail.reviewCount,
    heroImage: match.image,
    thumbnails: match.thumbnails ?? [match.image, ...productDetail.thumbnails],
    marketplaces: buildMarketplaces(match.marketplace, basePrice),
    accordion: match.accordion ?? productAccordion,
  };
}

export function getRelatedProducts(excludeSlug: string): RelatedProduct[] {
  const pool = collectionProducts.filter(
    (product) => product.slug !== excludeSlug,
  );
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, 4).map((product) => ({
    slug: product.slug,
    category: product.category,
    name: product.name,
    price: product.marketplace.whatsapp.beforeDiscount,
    discount: product.marketplace.whatsapp.afterDiscount,
    image: product.image,
  }));
}
