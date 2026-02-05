'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import LottiePulse from './LottiePulse';
import { shouldReduceMotion } from '@/lib/utils';

export default function HeroSection() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion()) return;
    const tl = gsap.timeline();
    tl.fromTo(headingRef.current, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(subRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');
  }, []);

  return (
    <section className='relative overflow-hidden px-6 pb-16 pt-20'>
      <div className='absolute inset-0 -z-10 bg-[length:200%_200%] bg-accent opacity-20 blur-3xl animate-gradientShift' />
      <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
        <div>
          <p className='mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300'>
            Premium Digital Agency
          </p>
          <h1 ref={headingRef} className='font-display text-4xl font-bold leading-tight md:text-6xl'>
            We design <span className='text-gradient'>digital experiences</span> that convert.
          </h1>
          <p ref={subRef} className='mt-6 max-w-xl text-lg text-slate-300'>
            UI/UX, SaaS product design, and web & app development.
          </p>
          <div ref={ctaRef} className='mt-8 flex flex-wrap gap-4'>
            <Link href='/portfolio'>
              <MagneticButton className='focus-ring'>View Work</MagneticButton>
            </Link>
            <Link href='/contact'>
              <MagneticButton className='focus-ring bg-white/10 hover:bg-white/20'>Start Project</MagneticButton>
            </Link>
          </div>
        </div>
        <div className='relative flex justify-center'>
          <div className='glass-panel relative w-full max-w-md rounded-3xl p-8 animate-float'>
            <h3 className='font-display text-xl'>Growth Dashboard</h3>
            <p className='mt-2 text-sm text-slate-300'>+128% qualified leads after UX optimization.</p>
            <div className='mt-6 grid gap-3'>
              <div className='rounded-xl bg-white/5 p-3'>Onboarding completion: 91%</div>
              <div className='rounded-xl bg-white/5 p-3'>Bounce rate reduced: 43%</div>
              <div className='rounded-xl bg-white/5 p-3'>CAC improved: 27%</div>
            </div>
            <div className='absolute -right-12 -top-12 hidden rounded-full bg-accent/20 p-2 md:block'>
              <LottiePulse />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-center'>
        <a href='#services-preview' className='focus-ring flex items-center gap-2 text-sm text-slate-300'>
          Scroll to explore <ChevronDown className='animate-bounce' size={18} />
        </a>
      </div>
    </section>
  );
}
