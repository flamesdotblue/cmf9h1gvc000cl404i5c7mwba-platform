export default function NavBar({ onRegister }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-sm tracking-widest font-semibold text-white/90 hover:text-white">ALGOUNIVERSITY</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#benefits" className="hover:text-white">Key Aspects</a>
          <a href="#showcase" className="hover:text-white">Partners</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </nav>
        <button onClick={onRegister} className="rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 text-black text-sm font-medium px-4 py-2 hover:opacity-95 active:scale-[0.99] transition">Register</button>
      </div>
    </header>
  );
}
