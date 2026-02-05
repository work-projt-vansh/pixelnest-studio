import { Database, Figma, Globe, Layers3, ShieldCheck, Workflow } from 'lucide-react';

const industries = ['SaaS', 'Fintech', 'HealthTech', 'E-commerce', 'EdTech', 'Enterprise'];
const tools = [Figma, Layers3, Workflow, Database, ShieldCheck, Globe];

export default function TrustSection() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='glass-panel rounded-3xl p-8'>
        <h2 className='font-display text-3xl font-semibold'>Trusted by teams building the future</h2>
        <p className='mt-3 text-slate-300'>We support high-growth startups and established SaaS companies.</p>
        <div className='mt-6 flex flex-wrap gap-3'>
          {industries.map((industry) => (
            <span key={industry} className='rounded-full border border-white/20 px-4 py-2 text-sm'>
              {industry}
            </span>
          ))}
        </div>
        <div className='mt-8 grid grid-cols-3 gap-4 md:grid-cols-6'>
          {tools.map((Icon, index) => (
            <div key={index} className='rounded-xl bg-white/5 p-4 text-center'>
              <Icon className='mx-auto text-accentCyan' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
