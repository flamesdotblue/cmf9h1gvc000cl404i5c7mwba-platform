export default function Hero({ onRegister }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Warm overlay and background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-white/75 mb-4">HYDERABAD • IN-PERSON</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">AU Hiring Tournament</h1>
          <p className="mt-4 text-white/85 text-lg md:text-xl">Invite-only, skill-first hiring for techies. Learn a core DSA topic, take a test right after, and get matched with partner companies based on performance.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button onClick={onRegister} className="rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black font-semibold px-6 py-3 shadow-[0_10px_40px_-10px_rgba(251,146,60,0.5)]">Register Now</button>
            <a href="#about" className="rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">Learn more</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
            <span>50+ Hiring Partners</span>
            <span className="opacity-30">•</span>
            <span>1:1 Mentorship by IIIT-H alumni</span>
            <span className="opacity-30">•</span>
            <span>Purely skill-based, no resume shortlisting</span>
          </div>
        </div>
      </div>
    </section>
  );
}
