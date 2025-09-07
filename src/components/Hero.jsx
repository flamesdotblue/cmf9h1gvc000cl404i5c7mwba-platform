import Spline from '@splinetool/react-spline';

export default function Hero({ onRegister }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Neutral overlay with accent sweep */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/80 to-stone-950" />
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30"
           style={{background: 'conic-gradient(from 90deg at 50% 50%, rgba(251,191,36,0.35), rgba(244,114,182,0.28), rgba(99,102,241,0.30), rgba(14,165,233,0.25), rgba(251,191,36,0.35))'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-white/75 mb-4">HYDERABAD • IN-PERSON</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">AU Hiring Tournament</h1>
          <p className="mt-4 text-white/85 text-lg md:text-xl">Invite-only, skill-first hiring for techies. Learn a core DSA topic, take a test right after, and get matched with partner companies based on performance.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button onClick={onRegister} className="rounded-full bg-gradient-to-r from-amber-300 via-rose-400 to-indigo-400 text-stone-900 font-semibold px-6 py-3 shadow-[0_10px_40px_-10px_rgba(236,72,153,0.5)]">Register Now</button>
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
