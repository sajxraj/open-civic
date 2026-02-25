export default function ResultSkeleton() {
  return (
    <div
      role="status"
      className="animate-fade-in rounded-2xl bg-white p-8 shadow-md"
    >
      <span className="sr-only">Loading results...</span>
      {/* Accent bar */}
      <div className="mb-6 h-1 w-full rounded-full skeleton-shimmer" />
      {/* Title */}
      <div className="mb-4 h-7 w-2/3 rounded skeleton-shimmer" />
      {/* Summary box */}
      <div className="mb-6 space-y-2 rounded-xl bg-slate-50 p-4">
        <div className="h-4 w-full rounded skeleton-shimmer" />
        <div className="h-4 w-5/6 rounded skeleton-shimmer" />
        <div className="h-4 w-3/4 rounded skeleton-shimmer" />
      </div>
      {/* About */}
      <div className="mb-6 space-y-2">
        <div className="h-4 w-full rounded skeleton-shimmer" />
        <div className="h-4 w-4/5 rounded skeleton-shimmer" />
      </div>
      {/* Info cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="h-20 rounded-xl skeleton-shimmer" />
        <div className="h-20 rounded-xl skeleton-shimmer" />
      </div>
    </div>
  );
}
