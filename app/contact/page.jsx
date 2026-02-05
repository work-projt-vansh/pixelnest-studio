'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: ''
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = 'Valid email is required.';
    if (!form.message.trim() || form.message.length < 20)
      nextErrors.message = 'Please provide at least 20 characters.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(false);
    if (!validate()) return;

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setSuccess(true);
      setForm(initialForm);
    }
  };

  return (
    <section className='mx-auto max-w-3xl px-6 py-16'>
      <h1 className='font-display text-4xl font-bold'>Start your project</h1>
      <p className='mt-4 text-slate-300'>Tell us about your goals and we&apos;ll respond with a roadmap.</p>
      <form onSubmit={handleSubmit} className='glass-panel mt-8 space-y-5 rounded-2xl p-6'>
        {['name', 'email', 'company', 'budget'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className='mb-2 block text-sm capitalize text-slate-300'>
              {field}
            </label>
            <input
              id={field}
              type={field === 'email' ? 'email' : 'text'}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className='focus-ring w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3'
            />
            {errors[field] && <p className='mt-1 text-sm text-red-300'>{errors[field]}</p>}
          </div>
        ))}
        <div>
          <label htmlFor='message' className='mb-2 block text-sm text-slate-300'>
            Message
          </label>
          <textarea
            id='message'
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className='focus-ring w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3'
          />
          {errors.message && <p className='mt-1 text-sm text-red-300'>{errors.message}</p>}
        </div>
        <button type='submit' className='focus-ring rounded-full bg-accent px-6 py-3 font-semibold text-white'>
          Send Inquiry
        </button>
        {success && (
          <p className='flex items-center gap-2 text-emerald-300'>
            <CheckCircle2 size={18} /> Your request was submitted successfully.
          </p>
        )}
      </form>
    </section>
  );
}
