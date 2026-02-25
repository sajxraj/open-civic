### OpenCivic

OpenCivic is an AI-powered government services assistant for Nepal. Ask questions about government services — passports, driving licenses, business registration, citizenship, and more — and get instant answers with locations, phone numbers, and official links.

#### Features

- **Two query modes** — "Find a Service" for specific details (locations, phone numbers) or "Ask a Question" for general guidance
- **Suggestion chips** — Clickable example questions to get started quickly
- **Structured results** — Service name, summary, contact info grid with clickable phone links, and website links
- **Loading skeletons** — Animated placeholders while results are fetched
- **Error handling** — Graceful fallback messages on network or API failures
- **Accessible** — ARIA roles, live regions, keyboard navigable

#### Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with custom `civic-green` / `civic-red` color scales
- **TypeScript** with Zod schema validation
- **Inter** font via `next/font`

#### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

#### Project Structure

```
src/
├── app/          # Next.js App Router (layout, page, API routes)
├── components/   # UI components (hero, search, results, etc.)
└── types/        # Zod schemas and TypeScript types
```
