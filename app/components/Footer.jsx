export default function Footer() {
  return (
    <footer className='border-t border-white/10 py-10'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row'>
        <p>© {new Date().getFullYear()} PixelNest Studio. All rights reserved.</p>
        <p>Designing premium digital products for startups and SaaS teams.</p>
      </div>
    </footer>
  );
}
