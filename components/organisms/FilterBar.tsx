import FilterDropdown from "@/components/molecules/FilterDropdown";
import CategoryFilterDropdown from "@/components/molecules/CategoryFilterDropdown";
import SortSelect from "@/components/molecules/SortSelect";
import { filterOptions, sortOptions } from "@/lib/data";

type FilterBarProps = {
  selectedCategory?: string;
  selectedSort?: string;
};

export default function FilterBar({
  selectedCategory,
  selectedSort,
}: FilterBarProps) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
      <div className="flex flex-wrap items-center justify-between gap-gutter p-6 bg-surface-container-low rounded-xl">
        <div className="flex flex-wrap items-center gap-stack-md">
          <CategoryFilterDropdown selected={selectedCategory} />
          {filterOptions.map((option) => (
            <FilterDropdown key={option} label={option} />
          ))}
        </div>
        <SortSelect options={sortOptions} selected={selectedSort} />
      </div>
    </section>
  );
}
