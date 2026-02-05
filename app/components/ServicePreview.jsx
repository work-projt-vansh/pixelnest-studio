import { serviceGroups } from '@/data/services';

export default function ServicePreview() {
  const cards = serviceGroups.flatMap((group) => group.services).slice(0, 6);

  return (
    <section id='services-preview' className='mx-auto max-w-7xl px-6 py-16'>
      <h2 className='font-display text-3xl font-semibold'>Specialized services for modern digital teams</h2>
      <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {cards.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className='glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accentCyan/40 hover:shadow-glow'
            >
              <Icon className='text-accentCyan' />
              <h3 className='mt-4 font-display text-xl'>{service.title}</h3>
              <p className='mt-2 text-sm text-slate-300'>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
