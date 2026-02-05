'use client';

import { useEffect, useState } from 'react';
import { shouldReduceMotion } from '@/lib/utils';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion()) return;
    setEnabled(true);
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed z-[60] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accentCyan/60 bg-accentCyan/10 md:block'
      style={{ left: position.x, top: position.y }}
    />
  );
}
