import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutBenefits from './components/AboutBenefits';
import Showcase from './components/Showcase';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen text-white font-inter relative overflow-x-clip bg-stone-950">
      {/* Ambient accent glows */}
      <div className="pointer-events-none absolute -top-20 -right-32 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-30"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(251,191,36,0.28), rgba(236,72,153,0.22) 45%, rgba(79,70,229,0.20) 85%, rgba(0,0,0,0) 100%)'}}/>
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[50rem] w-[50rem] rounded-full blur-3xl opacity-25"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(14,165,233,0.22), rgba(168,85,247,0.18) 45%, rgba(251,146,60,0.16) 85%, rgba(0,0,0,0) 100%)'}}/>

      <NavBar onRegister={() => setOpen(true)} />
      <main>
        <Hero onRegister={() => setOpen(true)} />
        <AboutBenefits onRegister={() => setOpen(true)} />
        <Showcase />
      </main>

      <footer className="border-t border-white/10 mt-20 bg-stone-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} AlgoUniversity — AU Hiring Tournament</p>
          <div className="flex items-center gap-4 text-white/80">
            <a href="https://www.instagram.com/algouniversity/" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a>
            <span className="opacity-30">•</span>
            <a href="https://www.linkedin.com/school/algouniversity/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
            <span className="opacity-30">•</span>
            <a href="https://www.youtube.com/@audevday" target="_blank" rel="noreferrer" className="hover:text-white transition">YouTube</a>
          </div>
        </div>
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-xl bg-stone-900/90 border border-white/10 rounded-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-stone-900 to-stone-900/70">
              <h3 className="text-lg font-semibold">Register for AU Hiring Tournament</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/70 hover:text-white">✕</button>
            </div>
            <div className="p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! Your interest has been recorded.'); setOpen(false); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Full Name</label>
                    <input required type="text" className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Email</label>
                    <input required type="email" className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="you@example.com" />
                  </div>
                  <div className="md:col-span-2 grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm text-white/80 mb-1">Code</label>
                      <select className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" defaultValue={"+91"}>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm text-white/80 mb-1">Phone</label>
                      <input required type="tel" className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="WhatsApp number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">College</label>
                    <input required type="text" className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="Your college" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Graduation Year</label>
                    <select required className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60">
                      <option value="">Select</option>
                      {Array.from({ length: 12 }).map((_, i) => {
                        const year = 2030 - i;
                        return <option key={year} value={year}>{year}</option>;
                      })}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-white/80 mb-1">Tech Stack</label>
                    <select required className="w-full rounded-lg bg-stone-800/70 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60">
                      <option value="">--Select--</option>
                      <option value="mern">MERN / MEAN</option>
                      <option value="java">Java</option>
                      <option value="dotnet">.NET</option>
                      <option value="python">Python / Django</option>
                      <option value="app">Android / iOS</option>
                      <option value="aiml">AI / ML / DL</option>
                      <option value="cpp">C++</option>
                      <option value="devops">DevOps / CloudOps</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-amber-300 via-rose-400 to-indigo-400 text-stone-950 font-semibold py-3 shadow-[0_10px_40px_-10px_rgba(234,179,8,0.5)]">Register</button>
                <p className="text-xs text-white/60">By registering you agree to be contacted with event updates via email/WhatsApp.</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
