type SortSelectProps = {
  options: string[];
};

export default function SortSelect({ options }: SortSelectProps) {
  return (
    <div className="flex items-center gap-stack-md">
      <span className="font-body-md text-on-surface-variant hidden lg:block">
        Sort By:
      </span>
      <select className="bg-surface-container-lowest border-outline-variant rounded-full px-5 py-3 font-body-md focus:ring-primary focus:border-primary outline-none cursor-pointer">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
