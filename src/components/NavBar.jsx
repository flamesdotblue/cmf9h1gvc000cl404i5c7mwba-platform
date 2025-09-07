export default function NavBar({ onRegister }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-sm tracking-widest font-semibold text-white/90 hover:text-white">ALGOUNIVERSITY</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#benefits" className="hover:text-white">Benefits</a>
          <a href="#showcase" className="hover:text-white">Partners</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </nav>
        <button onClick={onRegister} className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-black text-sm font-medium px-4 py-2 shadow-[0_6px_26px_-8px_rgba(59,130,246,0.6)] hover:shadow-[0_10px_36px_-10px_rgba(236,72,153,0.6)] transition-transform hover:-translate-y-0.5 active:translate-y-0">Register</button>
      </div>
    </header>
  );
}
