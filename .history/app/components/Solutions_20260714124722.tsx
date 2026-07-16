import React from 'react';
import { 
  Handshake, Target, BarChart3, ShieldCheck, Globe, ArrowUpRight 
} from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 bg-[#f4f7fa] text-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Our Enterprise Solutions
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Empowering modern businesses with reliable tracking, deep analysis, threat detection, and scalable infrastructure.
          </p>
        </div>

        {/* --- BENTO GRID CONTAINER --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Effortless affiliate management (Large - Span 3) */}
          <div className="md:col-span-3 flex flex-col justify-between bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[340px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
            {/* Soft background grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-30" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Effortless affiliate management</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
                Manage all of your advertisers, affiliates, offers, automated billing & invoicing in one place.
              </p>
            </div>

            {/* Centered Graphic Icon */}
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border border-blue-100 shadow-[0_8px_20px_rgba(59,130,246,0.1)]">
                <Handshake className="w-8 h-8 text-blue-500" />
                <span className="absolute -top-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                <span className="absolute -left-6 w-1 h-1 bg-blue-300 rounded-full" />
                <span className="absolute -right-8 w-1 h-1 bg-blue-300 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2: Reliable tracking (Large - Span 3) */}
          <div className="md:col-span-3 flex flex-col justify-between bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[340px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
            {/* Concentric Circle Background */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-slate-100 rounded-full opacity-50 pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-slate-100 rounded-full opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Reliable tracking</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
                Track and analyze impressions, clicks and conversions in real time.
              </p>
            </div>

            {/* Centered Graphic Icon */}
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 border border-indigo-100 shadow-[0_8px_20px_rgba(99,102,241,0.1)]">
                <Target className="w-8 h-8 text-indigo-500" />
              </div>
            </div>
          </div>

          {/* Card 3: Analyze & predict (Small - Span 2) */}
          <div className="md:col-span-2 flex flex-col justify-between bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[300px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Analyze & predict</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Get deep insights of your network performance.
              </p>
            </div>

            {/* Isometric Stack Icon */}
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 shadow-[0_8px_20px_rgba(168,85,247,0.1)] rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <BarChart3 className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Card 4: Detect (Small - Span 2) */}
          <div className="md:col-span-2 flex flex-col justify-between bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[300px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Detect</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Comes with the best-in-industry fraud detection system.
              </p>
            </div>

            {/* Glowing Shield Icon */}
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-[0_8px_20px_rgba(16,185,129,0.1)] -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          </div>

          {/* Card 5: Scale (Small - Span 2) */}
          <div className="md:col-span-2 flex flex-col justify-between bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] min-h-[300px] relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scale</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                With OffersHub Cloud, just pay for what you use.
              </p>
            </div>

            {/* Cloud Global Icon */}
            <div className="relative z-10 flex justify-center items-center mt-6">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-rose-50 border border-rose-100 shadow-[0_8px_20px_rgba(244,63,94,0.1)] group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-rose-500 animate-pulse" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;