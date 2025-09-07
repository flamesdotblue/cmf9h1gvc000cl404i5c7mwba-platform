export default function Hero({ onRegister }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1920&auto=format&fit=crop"
        >
          <source src="https://cdn.pixabay.com/video/2019/03/14/21942-326845020_tiny.mp4" type="video/mp4" />
          <source src="https://cdn.videvo.net/videvo_files/video/premium/video0326/medium_watermarked/11_11_2021_19h_55m_38s%20%281%29_preview.webm" type="video/webm" />
        </video>
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-white/70 mb-4">HYDERABAD • IN-PERSON</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1]">AU Hiring Tournament</h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">Invite-only, skill-first hiring for techies. Learn a core DSA topic, take a test right after, and get matched with partner companies based on performance.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button onClick={onRegister} className="pointer-events-auto rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-black font-semibold px-6 py-3">Register Now</button>
            <a href="#about" className="pointer-events-auto rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">Learn more</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
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
