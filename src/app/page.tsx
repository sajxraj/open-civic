'use client';

import { useState } from 'react';
import { ChatResponseSchema } from '@/types/ai';
import HeroSection from '@/components/HeroSection';
import QueryTypeToggle from '@/components/QueryTypeToggle';
import SearchBar from '@/components/SearchBar';
import SuggestionChips from '@/components/SuggestionChips';
import ResultCard from '@/components/ResultCard';
import ResultSkeleton from '@/components/ResultSkeleton';
import Footer from '@/components/Footer';

export default function AssistantPage() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'specific' | 'general'>('specific');
  const [result, setResult] = useState(ChatResponseSchema.parse({}));
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const performSearch = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setMessage(trimmed);
    setIsLoading(true);
    setHasSearched(true);

    try {
      const res = await fetch(
        `/api/ask?message=${encodeURIComponent(trimmed)}&type=${type}`,
      );
      const data = await res.json();
      setResult(ChatResponseSchema.parse(data.data));
    } catch {
      setResult(
        ChatResponseSchema.parse({
          feedback:
            'Something went wrong. Please check your connection and try again.',
        }),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const hasResult =
    result.name || result.summary || result.about || result.feedback;

  return (
    <>
      <HeroSection />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-12 sm:px-6">
        {/* Controls */}
        <div className="flex flex-col items-center gap-5">
          <QueryTypeToggle type={type} onChange={setType} />
          <SearchBar
            value={message}
            onChange={setMessage}
            onSubmit={() => performSearch(message)}
            isLoading={isLoading}
          />
          {!hasSearched && (
            <SuggestionChips onSelect={(q) => performSearch(q)} />
          )}
        </div>

        {/* Results */}
        <section className="mt-10" aria-live="polite">
          {isLoading ? (
            <ResultSkeleton />
          ) : (
            hasResult && <ResultCard result={result} />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
