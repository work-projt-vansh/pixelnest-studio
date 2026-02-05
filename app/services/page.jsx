'use client';

import { motion } from 'framer-motion';
import { serviceGroups } from '@/data/services';

export const metadata = {
  title: 'Services | PixelNest Studio',
  description: 'Explore PixelNest Studio services across design, development, and business solutions.'
};

export default function ServicesPage() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <h1 className='font-display text-4xl font-bold'>Our Services</h1>
      <p className='mt-4 max-w-2xl text-slate-300'>
        We deliver end-to-end digital transformation from research and UX to full-stack implementation.
      </p>
      <div className='mt-10 space-y-12'>
        {serviceGroups.map((group) => (
          <div key={group.title}>
            <h2 className='font-display text-2xl text-accentCyan'>{group.title}</h2>
            <div className='mt-5 grid gap-5 md:grid-cols-2'>
              {group.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className='glass-panel rounded-2xl p-6'
                  >
                    <Icon className='text-accentCyan' />
                    <h3 className='mt-4 font-display text-xl'>{service.title}</h3>
                    <p className='mt-2 text-sm text-slate-300'>{service.description}</p>
                    <ul className='mt-4 list-inside list-disc space-y-1 text-sm text-slate-200'>
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
