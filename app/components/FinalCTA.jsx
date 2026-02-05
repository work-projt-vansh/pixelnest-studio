import Link from 'next/link';
import MagneticButton from './MagneticButton';

export default function FinalCTA() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='rounded-3xl border border-white/20 bg-accent p-10 text-center text-night animate-pulseGlow'>
        <h2 className='font-display text-3xl font-bold'>Ready to launch your next digital product?</h2>
        <p className='mx-auto mt-3 max-w-2xl text-night/80'>
          Let&apos;s craft a conversion-focused experience for your startup, SaaS platform, or enterprise team.
        </p>
        <div className='mt-8'>
          <Link href='/contact'>
            <MagneticButton className='bg-night text-white'>Start Your Project</MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
