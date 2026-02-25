interface QueryTypeToggleProps {
  type: 'specific' | 'general';
  onChange: (type: 'specific' | 'general') => void;
}

const options = [
  { value: 'specific' as const, label: 'Find a Service' },
  { value: 'general' as const, label: 'Ask a Question' },
];

export default function QueryTypeToggle({
  type,
  onChange,
}: QueryTypeToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Query type"
      className="inline-flex rounded-full bg-slate-100 p-1"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={type === opt.value}
          onClick={() => onChange(opt.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            type === opt.value
              ? 'bg-white text-civic-green-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
