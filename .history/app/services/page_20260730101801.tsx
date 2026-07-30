import React from 'react';
import { Clock, Network, Database, Hourglass } from 'lucide-react';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-300 flex items-center justify-center p-6 md:p-12">
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 border border-zinc-800 rounded-2xl overflow-hidden bg-[#121416]">
        
        {/* Left Section: Hero Text */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between items-start gap-8 border-b lg:border-b-0 lg:border-r border-zinc-800">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-zinc-400 font-medium">
              <span className="text-emerald-400">⚡</span> WHY CHOOSE US
            </div>
            
            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              Accelerate <span className="text-emerald-400">electrification with confidence</span>
            </h1>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              ePOP helps engineering teams save time, cut costs, and optimize power systems with physics-based tools and data-driven optimization.
            </p>
          </div>
          
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-emerald-500/10 mt-4">
            Book a demo
          </button>
        </div>

        {/* Right Section: Features Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2">
          
          {/* Card 1 */}
          <div className="p-8 md:p-10 border-b border-zinc-800 md:border-r flex flex-col justify-between min-h-[220px]">
            <Clock className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
            <div className="mt-8 space-y-2">
              <h3 className="text-xl md:text-2xl font-medium text-white">&lt;30 minutes</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Set up and start getting answers instantly</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-10 border-b border-zinc-800 flex flex-col justify-between min-h-[220px]">
            <Network className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
            <div className="mt-8 space-y-2">
              <h3 className="text-xl md:text-2xl font-medium text-white">&gt;90% system performance</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Achieved by aligning neighbouring subsystems through simulation</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 border-zinc-800 md:border-r flex flex-col justify-between min-h-[220px]">
            <Database className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
            <div className="mt-8 space-y-2">
              <h3 className="text-xl md:text-2xl font-medium text-white">&lt;5 CO₂e per kg of mass</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Achieved through material-property-level screening</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-8 md:p-10 flex flex-col justify-between min-h-[220px]">
            <Hourglass className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
            <div className="mt-8 space-y-2">
              <h3 className="text-xl md:text-2xl font-medium text-white">&gt;6 months saved</h3>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">By prototyping virtually instead of hardware trial-and-error</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ServicePage;