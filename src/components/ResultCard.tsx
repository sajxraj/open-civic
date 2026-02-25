import { z } from 'zod';
import { ChatResponseSchema } from '@/types/ai';

type ChatResponse = z.infer<typeof ChatResponseSchema>;

interface ResultCardProps {
  result: ChatResponse;
}

export default function ResultCard({ result }: ResultCardProps) {
  if (result.feedback) {
    return (
      <div className="animate-fade-in-up rounded-2xl bg-white p-8 shadow-md">
        <p className="text-center text-slate-600">{result.feedback}</p>
      </div>
    );
  }

  return (
    <article className="animate-fade-in-up overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-civic-green-700 to-civic-green-500" />

      <div className="p-8">
        {/* Name */}
        {result.name && (
          <h2 className="mb-3 flex items-center gap-2 text-2xl font-semibold text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 shrink-0 text-civic-green-700"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm2 6h2v1H9v-1z"
                clipRule="evenodd"
              />
            </svg>
            {result.name}
          </h2>
        )}

        {/* Summary highlight */}
        {result.summary && (
          <div className="mb-6 rounded-xl bg-civic-green-50 px-5 py-4">
            <p className="text-sm leading-relaxed text-civic-green-900">
              {result.summary}
            </p>
          </div>
        )}

        {/* About */}
        {result.about && (
          <p className="mb-6 leading-relaxed text-slate-600">{result.about}</p>
        )}

        {/* Info grid */}
        {result.info && result.info.length > 0 && (
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {result.info.map(({ location, phone_number }, idx) => (
              <div
                key={`${location}-${phone_number}-${idx}`}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                {location && (
                  <div className="mb-2 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145 15.945 15.945 0 002.51-1.714c1.66-1.38 3.375-3.476 3.375-6.063 0-3.866-3.134-7-7-7s-7 3.134-7 7c0 2.587 1.715 4.683 3.375 6.063a15.948 15.948 0 002.791 1.859l.018.008.006.003zM10 11.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-700">{location}</span>
                  </div>
                )}
                {phone_number && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0 text-slate-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href={`tel:${phone_number}`}
                      className="text-sm text-civic-green-700 hover:underline"
                    >
                      {phone_number}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Website */}
        {result.website && (
          <a
            href={result.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-civic-green-700 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
            {result.website}
          </a>
        )}
      </div>
    </article>
  );
}
