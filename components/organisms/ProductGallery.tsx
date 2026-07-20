"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  mainImage: string;
  thumbnails: string[];
  productName: string;
};

export default function ProductGallery({
  mainImage,
  thumbnails,
  productName,
}: ProductGalleryProps) {
  const [active, setActive] = useState(mainImage);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="lg:col-span-7 space-y-6">
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl aspect-[1.79] group relative">
        <Image
          src={active}
          alt={`${productName} Featured`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
        {thumbnails.map((thumb, i) => (
          <button
            key={thumb + i}
            type="button"
            onClick={() => {
              setActive(thumb);
              setActiveIndex(i);
            }}
            className={`w-24 h-24 flex-shrink-0 bg-surface-container-high rounded-lg overflow-hidden cursor-pointer transition-all relative ${
              activeIndex === i
                ? "border-2 border-primary"
                : "border-2 border-transparent hover:border-outline"
            }`}
          >
            <Image
              src={thumb}
              alt={`${productName} thumbnail ${i + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
