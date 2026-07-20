import Image from "next/image";
import Button from "@/components/atoms/Button";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import { heroImage } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="pt-[140px] md:pt-[180px] pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden relative">
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-secondary-container/30 organic-blob animate-float blur-xl" />
      <div
        className="absolute bottom-40 left-[5%] w-48 h-48 bg-on-tertiary-container/10 organic-blob animate-float blur-2xl"
        style={{ animationDelay: "-2s" }}
      />
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div className="z-10 text-center md:text-left">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-caps text-label-caps mb-6">
            Learning Through Play
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
            Explore <br className="hidden md:block" /> Through Play
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg mx-auto md:mx-0">
            Membantu anak belajar melalui permainan yang menyenangkan. Rangkaian
            sensory play, busy book, flashcard, dan aktivitas edukatif yang
            dirancang untuk mendukung tumbuh kembang anak usia 2–8 tahun.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md justify-center md:justify-start">
            <Button href="/products" variant="primary">
              Lihat Koleksi
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] transform rotate-2 transition-transform group-hover:rotate-0" />
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/3]">
            <Image
              src={heroImage}
              alt="Child playing with RAVA educational toys"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-3xl shadow-xl animate-float">
            <MaterialIcon
              name="toys"
              className="text-4xl text-on-tertiary-container"
            />
          </div>
          <div
            className="absolute top-10 -right-6 bg-surface-container-lowest p-6 rounded-full shadow-xl animate-float"
            style={{ animationDelay: "-3s" }}
          >
            <MaterialIcon
              name="psychology"
              className="text-4xl text-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
