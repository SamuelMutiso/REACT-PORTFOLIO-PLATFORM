function Hero() {
  return (
    <section className="py-24 bg-white text-center px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 leading-[1.1]">
          We build the{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent italic px-2 animate-gradient-x">
            future
          </span>{" "}
          of web.
        </h2>
        
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          A creative hub for <span className="text-slate-900">high-performance</span> projects and digital storytelling.
        </p>
        
        {/* Added a subtle decorative element to ground the text */}
        <div className="mt-10 flex justify-center gap-2">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;