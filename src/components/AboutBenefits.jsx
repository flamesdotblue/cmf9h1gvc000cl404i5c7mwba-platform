export default function AboutBenefits({ onRegister }) {
  return (
    <section id="about" className="relative py-20 border-t border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.12),transparent_60%)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">New‑Age Hiring Module</h2>
        <p className="mt-4 text-white/80">An invite-only, in-person hiring event for Techies of Hyderabad. Organized by a group of Senior Software Engineers from IIIT‑H Alumni, with experience at Google, Apple, Indeed, and Microsoft.</p>
        <p className="mt-4 text-white/80">Your resume, college, or educational background doesn’t matter here. What counts is your skill — show it off at our New‑Age Hiring Tournament and get hired!</p>
        <div className="mt-6">
          <p className="text-white/90 font-medium mb-2">Here’s how it works:</p>
          <ul className="space-y-2 text-white/80 list-disc pl-5">
            <li>Learn a core DSA topic</li>
            <li>Take a test right after the class</li>
            <li>Get matched with partner companies based on your performance</li>
          </ul>
        </div>
        <div className="mt-8">
          <button onClick={onRegister} className="rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black font-medium px-6 py-3">Register for Workshop</button>
        </div>
      </div>
    </section>
  );
}
