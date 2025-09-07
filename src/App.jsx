import { useState, useMemo } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutBenefits from './components/AboutBenefits';
import Showcase from './components/Showcase';

const RZP_KEY = 'rzp_test_7hSfjBuH1Tp7mv';
const TICKET_AMOUNT_INR = 250; // INR

async function loadRazorpayScript() {
  if (window.Razorpay) return true;
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const amountPaise = useMemo(() => TICKET_AMOUNT_INR * 100, []);

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('fullName') || '').toString();
    const email = (fd.get('email') || '').toString();
    const phone = (fd.get('phone') || '').toString();

    setSubmitting(true);
    const ok = await loadRazorpayScript();
    if (!ok) {
      alert('Unable to load payment SDK. Please try again.');
      setSubmitting(false);
      return;
    }

    const options = {
      key: RZP_KEY,
      amount: amountPaise,
      currency: 'INR',
      name: 'AlgoUniversity',
      description: 'AU Hiring Tournament Ticket',
      image: 'https://cdn-icons-png.flaticon.com/512/3050/3050218.png',
      prefill: { name, email, contact: phone },
      notes: { event: 'AU Hiring Tournament', tier: 'General' },
      theme: { color: '#F59E0B' }, // warm amber
      handler: function () {
        setSuccess(true);
      },
      modal: {
        ondismiss: function () {
          setSubmitting(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen text-white font-inter relative overflow-x-clip bg-black">
      {/* Ambient warm glows */}
      <div className="pointer-events-none absolute -top-28 -right-32 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-25"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(245,158,11,0.35), rgba(251,113,133,0.25) 45%, rgba(244,114,182,0.2) 85%, rgba(0,0,0,0) 100%)'}}/>
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-20"
           style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(251,191,36,0.28), rgba(251,146,60,0.22) 45%, rgba(244,114,182,0.18) 85%, rgba(0,0,0,0) 100%)'}}/>

      <NavBar onRegister={() => { setOpen(true); setSuccess(false); }} />

      <main className="space-y-20">
        <Hero onRegister={() => { setOpen(true); setSuccess(false); }} />
        <AboutBenefits onRegister={() => { setOpen(true); setSuccess(false); }} />
        <Showcase />
      </main>

      <footer className="border-t border-white/10 mt-20 bg-black/50 backdrop-blur">
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
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-xl bg-zinc-900/95 border border-white/10 rounded-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10">
              <h3 className="text-lg font-semibold">Register for AU Hiring Tournament</h3>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/70 hover:text-white">✕</button>
            </div>

            {success ? (
              <div className="p-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center border border-amber-400/40">✓</div>
                <h4 className="text-xl font-semibold">Payment Initiated</h4>
                <p className="text-white/80">Thank you! Your payment for INR {TICKET_AMOUNT_INR} has been processed. You will receive a confirmation from Razorpay. Well be in touch with event details soon.</p>
                <button onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black font-medium px-6 py-2">Close</button>
              </div>
            ) : (
              <div className="p-6">
                <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Full Name</label>
                      <input name="fullName" required type="text" className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Email</label>
                      <input name="email" required type="email" className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="you@example.com" />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-sm text-white/70 mb-1">Code</label>
                        <select name="code" className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" defaultValue={"+91"}>
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+61">+61</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm text-white/70 mb-1">Phone</label>
                        <input name="phone" required type="tel" className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="WhatsApp number" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1">College</label>
                      <input name="college" required type="text" className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60" placeholder="Your college" />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Graduation Year</label>
                      <select name="gradYear" required className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60">
                        <option value="">Select</option>
                        {Array.from({ length: 12 }).map((_, i) => {
                          const year = 2030 - i;
                          return <option key={year} value={year}>{year}</option>;
                        })}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm text-white/70 mb-1">Tech Stack</label>
                      <select name="stack" required className="w-full rounded-lg bg-zinc-800 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60">
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
                  <button disabled={submitting} type="submit" className="w-full rounded-lg bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black font-semibold py-3 disabled:opacity-70">
                    {submitting ? 'Processing...' : `Pay INR ${TICKET_AMOUNT_INR} & Register`}
                  </button>
                  <p className="text-xs text-white/60">Secure payment powered by Razorpay. Youll receive updates via email/WhatsApp.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
