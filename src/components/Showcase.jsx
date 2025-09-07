import KeyAspects from './KeyAspects';

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

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
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

        <div id="testimonials" className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">What participants say</h3>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard src="https://www.youtube.com/embed/hN6qtn_rUng" desc="Jhanwwee showcased her skills in the Hiring Tournament & got referred to Amazon." />
            <TextTestimonial name="Polkam Srinidhi" date="Sep 2" img="/static/nurture/images/audevday/polkam.jpg" link="https://www.linkedin.com/feed/update/urn:li:activity:7234356533797511168/" text="This workshop was so wholesome! Complex DSA topic like Graphs is now so easy, thanks to Manas sir — I was so excited to meet him in-person." />
            <TextTestimonial name="Yuvraj Kollur" date="Sep 2" img="/static/nurture/images/audevday/yuvraj.jpg" link="https://www.linkedin.com/feed/update/urn:li:activity:7234542677340405760/" text="I had so much fun participating in the coding contest, and grabbing a spot on the coveted Hall of Fame!" />
            <VideoCard src="https://www.youtube.com/embed/v2i7gqAfyw4" desc="Satvik discusses cracking top Product Based Companies and how mentorship can change one's trajectory." />
            <VideoCard src="https://www.youtube.com/embed/DCiliMl3Coo" desc="Aditi got placed at ADP as a fresher, after impressing mentors at AUHT July Edition." />
            <TextTestimonial name="Abhinay Marise" date="Feb 2" img="/static/nurture/images/audevday/abhinay.jpg" link="https://www.linkedin.com/feed/update/urn:li:activity:7291862499757375488/" text="Hands-on project building session, a clear DSA roadmap, and valuable 1:1 mentorship. Absolutely love the ALGOUNIVERSITY Community!" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosMarquee({ items, reverse }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className={`flex items-center gap-10 py-6 animate-[marquee_35s_linear_infinite] ${reverse ? 'direction-rtl' : ''}`}
        style={{ width: 'max-content' }}
      >
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
    <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
      <div className="flex items-center gap-4 py-4 bg-white/5">
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

function VideoCard({ src, desc }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col">
      <div className="relative aspect-video">
        <iframe src={src} title="Testimonial video" className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen />
      </div>
      <p className="p-4 text-white/80">{desc}</p>
    </div>
  );
}

function TextTestimonial({ name, date, img, link, text }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-black">
            <img src={img} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-white/60">{date}</p>
          </div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="text-xs text-white/70 hover:text-white">LinkedIn</a>
      </div>
      <p className="p-4 text-white/80">{text}</p>
    </div>
  );
}
