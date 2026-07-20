import MaterialIcon from "@/components/atoms/MaterialIcon";

export default function NewsletterForm() {
  return (
    <div className="flex gap-2">
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-surface-container-high border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none"
      />
      <button
        type="submit"
        className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold active-scale flex items-center gap-1"
      >
        Join
        <MaterialIcon name="arrow_forward" className="text-lg hidden sm:inline" />
      </button>
    </div>
  );
}
