'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-xl'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <Link href='/' className='focus-ring rounded-md font-display text-xl font-bold text-gradient'>
          PixelNest Studio
        </Link>
        <ul className='flex items-center gap-6'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'focus-ring rounded-md text-sm font-medium transition hover:text-accentCyan',
                  pathname === link.href ? 'text-accentCyan' : 'text-slate-300'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
