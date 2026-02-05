import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';

export default function PortfolioPreview() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='mb-8 flex items-center justify-between'>
        <h2 className='font-display text-3xl font-semibold'>Selected work</h2>
        <Link href='/portfolio' className='focus-ring rounded-md text-accentCyan'>See all projects</Link>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        {portfolioItems.slice(0, 4).map((project) => (
          <article key={project.id} className='group glass-panel relative overflow-hidden rounded-2xl'>
            <div className='relative h-64'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover transition duration-500 group-hover:scale-105'
                loading='lazy'
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition group-hover:opacity-100' />
            <div className='absolute bottom-0 p-5'>
              <p className='text-xs uppercase tracking-wider text-accentCyan'>{project.category}</p>
              <h3 className='font-display text-xl'>{project.title}</h3>
              <p className='text-sm text-slate-300'>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
