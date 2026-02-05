export const cn = (...classes) => classes.filter(Boolean).join(' ');

export const shouldReduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
