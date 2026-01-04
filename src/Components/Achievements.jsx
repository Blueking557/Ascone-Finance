function Achievements() {
  return (
    <section className="w-full px-2 sm:px-10 md:px-16 lg:px-20 py-20">
      <div
        className="
          relative w-full min-h-[360px]
          bg-[#143c36]
          flex flex-col md:flex-row items-center justify-center
          gap-24
          overflow-hidden
        "
      >
        {/* STRONG RANDOM RADIANCE */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-emerald-400/60 rounded-full blur-[160px]" />
        <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-teal-300/55 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-green-500/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/3 w-[300px] h-[300px] bg-lime-400/45 rounded-full blur-[130px]" />

        {/* LEFT: STATS (SLIGHTLY SPREAD, STILL CENTERED) */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-16 text-white text-center sm:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold">$14B</h1>
            <p className=" opacity-85">
              Funds and Syndicates
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold">23K</h1>
            <p className=" opacity-85">
              Raised by active Startups
            </p>
          </div>
        </div>

        {/* RIGHT: TEXT (MOVED SLIGHTLY OUTWARD, NOT TOO FAR) */}
        <div className="relative z-10 text-white text-center md:text-left max-w-sm space-y-3">
          <p className="text-xs tracking-widest opacity-80">
            NUMBERS
          </p>
          <h2 className="text-3xl md:text-3xl font leading-snug">
            Market and build <br />
            the solutions
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Achievements;


