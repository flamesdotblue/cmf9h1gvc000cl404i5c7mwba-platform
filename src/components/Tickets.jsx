import { useMemo, useState } from 'react';

export default function Tickets({ onRegister }) {
  const BASE_PRICE = 499; // in INR
  const [code, setCode] = useState('');
  const [applied, setApplied] = useState(null); // { code: string, discount: number (0..1) }
  const [error, setError] = useState('');

  const total = useMemo(() => {
    if (!applied) return BASE_PRICE;
    const d = Math.min(Math.max(applied.discount, 0), 1);
    return Math.max(0, Math.round(BASE_PRICE * (1 - d)));
  }, [applied]);

  function applyCoupon(e) {
    e.preventDefault();
    setError('');
    const c = code.trim();
    if (!c) {
      setError('Enter a coupon code');
      setApplied(null);
      return;
    }
    if (c.toUpperCase() === 'JNTUH100%') {
      setApplied({ code: c, discount: 1 });
      return;
    }
    // invalid
    setApplied(null);
    setError('Invalid coupon');
  }

  function clearCoupon() {
    setApplied(null);
    setCode('');
    setError('');
  }

  return (
    <section id="tickets" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="px-6 py-6 border-b border-white/10">
            <h3 className="text-2xl font-semibold">Tickets</h3>
            <p className="text-white/70 mt-1">Secure your spot for the AU Hiring Tournament.</p>
          </div>

          <div className="p-6 grid lg:grid-cols-[1.1fr_1fr] gap-8">
            <div className="space-y-5">
              <PriceRow label="Base Price" value={`₹${BASE_PRICE}`} />
              <div className="rounded-xl border border-white/10 p-4 bg-black/20">
                <form onSubmit={applyCoupon} className="flex flex-col sm:flex-row gap-3 items-stretch">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter coupon (e.g., JNTUH100%)"
                    className="flex-1 rounded-lg bg-zinc-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400/60"
                  />
                  <div className="flex gap-2">
                    <button type="submit" className="rounded-lg px-4 py-2 bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black font-medium">Apply</button>
                    {applied && (
                      <button type="button" onClick={clearCoupon} className="rounded-lg px-4 py-2 border border-white/15 text-white/80 hover:bg-white/10">Remove</button>
                    )}
                  </div>
                </form>
                <div className="min-h-[24px] mt-2">
                  {applied && (
                    <p className="text-sm text-emerald-400">Coupon applied: <span className="font-medium">{applied.code.toUpperCase()}</span> — {applied.discount * 100}% off</p>
                  )}
                  {!applied && error && (
                    <p className="text-sm text-rose-400">{error}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-lg">
                <span className="text-white/80">Total</span>
                <strong className="text-2xl">₹{total}</strong>
              </div>
              {applied?.discount === 1 && (
                <p className="text-sm text-white/60">Free ticket unlocked with coupon. Limited seats — confirm now.</p>
              )}
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-black/20">
              <h4 className="font-semibold">What you get</h4>
              <ul className="mt-3 space-y-2 text-white/75 list-disc pl-5">
                <li>Access to live DSA masterclass</li>
                <li>Immediate contest and performance report</li>
                <li>Shortlisting with 50+ hiring partners</li>
                <li>1:1 mentorship slots with senior engineers</li>
              </ul>
              <button
                onClick={onRegister}
                className="mt-6 w-full rounded-lg bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black font-semibold py-3"
              >
                {total === 0 ? 'Register for Free' : 'Proceed to Payment'}
              </button>
              <p className="text-xs text-white/50 mt-2">You won’t be charged now. We’ll guide you through the next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 p-4 bg-black/20">
      <span className="text-white/75">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
