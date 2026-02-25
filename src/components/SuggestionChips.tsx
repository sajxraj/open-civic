const suggestions = [
  'How do I get a passport?',
  'Where to get a driving license?',
  'What does my ward office do?',
  'How to register a business?',
  'How to get citizenship certificate?',
];

interface SuggestionChipsProps {
  onSelect: (query: string) => void;
}

export default function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {suggestions.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onSelect(s)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm transition-all duration-200 hover:border-civic-green-700/40 hover:text-civic-green-700 hover:shadow"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
