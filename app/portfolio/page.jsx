'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';

const categories = ['All', 'SaaS', 'App', 'CRM', 'Web'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(
    () =>
      activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <h1 className='font-display text-4xl font-bold'>Portfolio</h1>
      <p className='mt-3 text-slate-300'>Filter by product type and explore project outcomes.</p>
      <div className='mt-6 flex flex-wrap gap-3'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`focus-ring rounded-full border px-4 py-2 text-sm ${
              activeCategory === category
                ? 'border-accentCyan bg-accentCyan/20 text-white'
                : 'border-white/20 text-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        {projects.map((project) => (
          <motion.article
            key={project.id}
            layout
            className='glass-panel group overflow-hidden rounded-2xl'
            whileHover={{ y: -6 }}
          >
            <button className='w-full text-left' onClick={() => setSelectedProject(project)}>
              <div className='relative h-64'>
                <Image src={project.image} alt={project.title} fill className='object-cover' loading='lazy' />
              </div>
              <div className='p-5'>
                <p className='text-xs uppercase tracking-wider text-accentCyan'>{project.category}</p>
                <h2 className='font-display text-2xl'>{project.title}</h2>
                <p className='mt-2 text-sm text-slate-300'>{project.summary}</p>
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className='glass-panel max-w-2xl rounded-2xl p-6'
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-sm text-accentCyan'>{selectedProject.category}</p>
                  <h3 className='font-display text-2xl'>{selectedProject.title}</h3>
                </div>
                <button className='focus-ring rounded-full p-2 hover:bg-white/10' onClick={() => setSelectedProject(null)}>
                  <X size={18} />
                </button>
              </div>
              <p className='mt-4 text-slate-300'>{selectedProject.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
