'use client';

import { motion } from 'framer-motion';

const story = [
  {
    title: 'Vision',
    text: 'To become the go-to digital design and engineering partner for ambitious startups worldwide.'
  },
  {
    title: 'Mission',
    text: 'Create elegant, measurable, and scalable digital products that accelerate growth and customer trust.'
  },
  {
    title: 'Future Direction',
    text: 'Blending AI-assisted workflows, behavioral UX research, and robust development systems for next-gen products.'
  }
];

export default function AboutPage() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <h1 className='font-display text-4xl font-bold'>About PixelNest Studio</h1>
      <p className='mt-4 max-w-3xl text-slate-300'>
        We are a cross-functional team of designers, strategists, and engineers building purposeful digital products.
      </p>
      <div className='mt-10 space-y-6'>
        {story.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className='glass-panel rounded-2xl p-6'
          >
            <h2 className='font-display text-2xl text-accentCyan'>{item.title}</h2>
            <p className='mt-3 text-slate-300'>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
