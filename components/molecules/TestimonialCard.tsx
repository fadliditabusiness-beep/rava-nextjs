import Image from "next/image";
import MaterialIcon from "@/components/atoms/MaterialIcon";
import StarRating from "@/components/atoms/StarRating";
import type { Testimonial } from "@/lib/types";

export default function TestimonialCard({ name, location, quote, image }: Testimonial) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-xl border border-surface-container-high relative">
      <div className="absolute -top-6 left-10">
        <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
          <MaterialIcon name="format_quote" />
        </div>
      </div>
      <div className="mb-6 mt-2">
        <StarRating rating={5} />
      </div>
      <p className="font-body-lg text-on-surface-variant mb-8 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image} alt={name} fill sizes="48px" className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-primary">{name}</p>
          <p className="text-xs text-on-surface-variant">{location}</p>
        </div>
        <span className="ml-auto bg-primary-fixed text-primary px-2 py-1 rounded font-label-caps text-[10px]">
          VERIFIED
        </span>
      </div>
    </div>
  );
}
