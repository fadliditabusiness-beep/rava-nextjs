"use client";

import { useRouter, useSearchParams } from "next/navigation";

type SortSelectProps = {
  options: string[];
  selected?: string;
};

export default function SortSelect({ options, selected }: SortSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === options[0]) {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-stack-md">
      <span className="font-body-md text-on-surface-variant hidden lg:block">
        Sort By:
      </span>
      <select
        value={selected ?? options[0]}
        onChange={(e) => handleChange(e.target.value)}
        className="bg-surface-container-lowest border-outline-variant rounded-full px-5 py-3 font-body-md focus:ring-primary focus:border-primary outline-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
