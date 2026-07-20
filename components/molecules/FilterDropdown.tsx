import MaterialIcon from "@/components/atoms/MaterialIcon";

type FilterDropdownProps = {
  label: string;
};

export default function FilterDropdown({ label }: FilterDropdownProps) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center gap-2 bg-surface-container-lowest px-5 py-3 rounded-full font-body-md border border-outline-variant hover:border-primary transition-colors"
      >
        {label} <MaterialIcon name="expand_more" />
      </button>
    </div>
  );
}
