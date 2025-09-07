export default function NavBar({ onRegister }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-stone-950/40 bg-stone-950/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-sm tracking-[0.2em] font-semibold text-white/90 hover:text-white">ALGOUNIVERSITY</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#benefits" className="hover:text-white">Key Aspects</a>
          <a href="#showcase" className="hover:text-white">Partners</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </nav>
        <button onClick={onRegister} className="rounded-full bg-gradient-to-r from-amber-300 via-rose-400 to-indigo-400 text-stone-900 text-sm font-medium px-4 py-2 hover:opacity-95 active:scale-[0.99] transition">Register</button>
      </div>
    </header>
  );
}
