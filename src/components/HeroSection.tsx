import Image from 'next/image';
import brandLogo from '@/asset/brand-logo.svg';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-civic-green-50/60 to-transparent px-6 pb-8 pt-12 text-center">
      <div className="mx-auto max-w-3xl">
        <Image
          src={brandLogo}
          alt="OpenCivic logo"
          width={100}
          height={100}
          priority
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Your Government Services,{' '}
          <span className="text-civic-green-700">Simplified</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Ask anything about Nepal&apos;s government services — get instant,
          AI-powered answers.
        </p>
      </div>
    </section>
  );
}
