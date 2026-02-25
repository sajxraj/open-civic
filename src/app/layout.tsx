import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenCivic — Nepal Government Services Assistant',
  description:
    "Ask anything about Nepal's government services and get instant, AI-powered answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
