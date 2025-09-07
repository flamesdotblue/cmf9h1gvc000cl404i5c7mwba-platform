export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.10),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(251,113,133,0.10),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">What participants say</h3>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard src="https://www.youtube.com/embed/hN6qtn_rUng" desc="Jhanwwee showcased her skills in the Hiring Tournament and got referred to Amazon." />
          <TextTestimonial name="Polkam Srinidhi" date="Sep 2" img="/static/nurture/images/audevday/polkam.jpg" link="https://www.linkedin.com/feed/update/urn:li:activity:7234356533797511168/" text="This workshop was so wholesome! Complex DSA topic like Graphs is now so easy, thanks to Manas sir — I was so excited to meet him in-person." />
          <TextTestimonial name="Yuvraj Kollur" date="Sep 2" img="/static/nurture/images/audevday/yuvraj.jpg" link="https://www.linkedin.com/feed/update/urn:li:activity:7234542677340405760/" text="I had so much fun participating in the coding contest and grabbing a spot on the coveted Hall of Fame!" />
          <VideoCard src="https://www.youtube.com/embed/v2i7gqAfyw4" desc="Satvik discusses cracking top product-based companies and how mentorship can change one's trajectory." />
          <VideoCard src="https://www.youtube.com/embed/DCiliMl3Coo" desc="Aditi got placed at ADP as a fresher after impressing mentors at AUHT July Edition." />
          <TextTestimonial name="Abhinay Marise" date="Feb 2" img="/static/nurture/images/audevday/abhinay.jpg" link="https://www.linkedin.com/feed/update/urn:li:activity:7291862499757375488/" text="Hands-on project building, a clear DSA roadmap, and valuable 1:1 mentorship. Loved the ALGOUNIVERSITY community!" />
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, desc }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col">
      <div className="relative aspect-video">
        <iframe src={src} title="Testimonial video" className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen />
      </div>
      <p className="p-4 text-white/85">{desc}</p>
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
            <p className="text-xs text-white/70">{date}</p>
          </div>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="text-xs text-white/80 hover:text-white">LinkedIn</a>
      </div>
      <p className="p-4 text-white/85">{text}</p>
    </div>
  );
}
