function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white border-b border-slate-200 sticky top-0 z-50">
      <h1 className="text-xl font-black uppercase tracking-widest">Agency.UX</h1>
      <div className="hidden md:flex gap-8 text-sm font-bold uppercase">
        <a href="#" className="hover:text-blue-600">Projects</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600 text-blue-600 underline">Add Work</a>
      </div>
    </nav>
  );
}
export default Navbar;