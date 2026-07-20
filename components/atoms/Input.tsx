type InputProps = {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
};

export default function Input({
  type = "text",
  placeholder,
  className = "",
  name,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`flex-1 bg-surface-container-high border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none ${className}`}
    />
  );
}
