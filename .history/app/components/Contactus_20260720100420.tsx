import React from 'react';

const Contactus = () => {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="https://elements.envato.com/digital-data-earth-technology-7VHFCLG" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Overlaid Gradient Shield (Ensures text remains highly legible) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
      />

      {/* 3. Main Content Container (Brought to front via relative z-20) */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
        
        {/* Left Content Column */}
        <div className="w-full max-w-2xl space-y-6 text-center lg:mx-0 lg:max-w-[550px] lg:text-left">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 lg:justify-start" />

          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Innovate with Binary Global for private markets & finance
          </h1>

          <p className="mx-auto max-w-[450px] text-base leading-relaxed text-white lg:mx-0">
            Process entire data rooms in minutes. Extract precise metrics from CIMs and financial statements.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#efa332] hover:shadow-lg hover:shadow-orange-500/10 sm:px-8">
              Book a demo
            </button>
          </div>
        </div>

        {/* Right Video Column (Contains your inline demo element) */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden relative z-30">
          <div className="relative w-full pt-[56.25%]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="vedioes/futuristic-digital-circuit-board-logo-opener-2026-01-28-04-06-53-utc.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />

            {/* Inner Video Interactive Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between bg-black/30 p-4 sm:p-6">
              <div className="self-start max-w-[320px] text-left">
                <h3 className="text-lg font-medium leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-xl lg:text-2xl">
                  How Leading Finance Firms Use AI
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contactus;