'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        'focus-ring rounded-full bg-accent px-6 py-3 font-semibold text-white transition duration-300 hover:shadow-glow',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
