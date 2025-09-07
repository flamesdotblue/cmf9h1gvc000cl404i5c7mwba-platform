const logosRow1 = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/1_4gg3q2e.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/2_Wv3SRIb.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/3_cTXU1Zu.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/4_skw0D0b.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/5_KazqLcI.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/6_usMgD14.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/7_tcL1M2N.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/8_Vnhhc9p.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/9_duC97cg.png',
];
const logosRow2 = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/10_9D5GyeY.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/11_Hb52hDj.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/12_NpkSGm1.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/13_4r1cwVc.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/14_OzhhAvb.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/15_wokRydi.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/16_esSpsEl.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/17_qIfpzvh.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/partners/18_c62hM0h.png',
];

const mentors = [
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/3_TenBkEV.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/4_gqUAHXB.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/1_WZtEJZF.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/2_LHU8iWP.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/5_XlJTcvs.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/7.png',
  'https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/mentors/6.png',
];

export default function LogosAndAspects() {
  return (
    <section id="showcase" className="py-20 relative">
      {/* Warm section background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.10),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.10),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-2xl md:text-3xl font-semibold">Our Partners & Referrals</h3>
        <div className="mt-10 space-y-6">
          <LogosMarquee items={logosRow1} />
          <LogosMarquee items={logosRow2} reverse />
        </div>

        <KeyAspects />

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">Meet our mentors</h3>
          <MentorsMarquee items={mentors} />
        </div>
      </div>
    </section>
  );
}

function LogosMarquee({ items, reverse }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className={`flex items-center gap-10 py-6 animate-[marquee_35s_linear_infinite] ${reverse ? 'direction-rtl' : ''}`} style={{ width: 'max-content' }}>
        {[...items, ...items].map((src, i) => (
          <img key={i} src={src} alt="Partner logo" loading="lazy" className="h-10 md:h-12 object-contain opacity-90" />
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .direction-rtl { animation-direction: reverse; }
      `}</style>
    </div>
  );
}

function MentorsMarquee({ items }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 group bg-white/5">
      <div className="flex items-center gap-4 py-4">
        <div className="flex items-center gap-4 animate-[mentorsLoop_22s_linear_infinite] group-hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {[...items, ...items].map((src, i) => (
            <img key={i} src={src} alt="Mentor" loading="lazy" className="h-64 object-cover rounded-xl border border-white/10 bg-black" />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes mentorsLoop { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

function KeyAspects() {
  return (
    <section id="benefits" className="relative mt-16 rounded-3xl overflow-hidden border border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.12),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(244,114,182,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Key Aspects</h3>
          <ul className="mt-4 space-y-3 text-white/85 list-disc pl-5">
            <li>New-age hiring module: learn, perform, & get hired.</li>
            <li>50+ Hiring Partners actively hiring from participants.</li>
            <li>Purely skill-based hiring: no resume shortlisting.</li>
            <li>1:1 Mentorship from IIIT-H alumni from FAANG.</li>
            <li>Feedback & continued support with actionable guidance.</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[url('https://d1lrk9cp1c3gxw.cloudfront.net/media/public/auht/sarigamamentor_5Irt7qj.png')] bg-cover bg-center" />
      </div>
    </section>
  );
}
