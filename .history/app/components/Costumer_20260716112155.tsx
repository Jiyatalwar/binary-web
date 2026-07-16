 'use-client'

import { useState } from 'react';
import { Quote, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

const Customer = () => {
  // Mock data for the testimonial slider (Image 1 style)
  const testimonials = [
    {
      id: 1,
      quote: "Recently we launched some campaigns and we had double the open-rates, double the conversion rates.",
      author: "Felipe C.",
      role: "Senior Sales Representative at ThreeDots",
      statValue: "78%",
      statLabel: "YoY growth",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop", // Replace with your image assets
      bgColor: "bg-amber-500"
    },
    {
      id: 2,
      quote: "Switching platforms reduced our onboarding friction completely. The real-time collaboration tools are unmatched.",
      author: "Sarah M.",
      role: "Operations Head at PayUp",
      statValue: "2.4x",
      statLabel: "Faster onboarding",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      bgColor: "bg-cyan-500"
    }
  ];

  // Mock data for the grid items (Image 2 style)
  const gridStories = [
    {
      id: 1,
      brand: "Shopz",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop",
      desc: "Shopz solved the mass onboarding complications with structured workflows.",
      tagColor: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      id: 2,
      brand: "PayUp",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
      desc: "PayUp switches to HRLink to facilitate change management and rapid expansion.",
      tagColor: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      id: 3,
      brand: "Planner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
      desc: "Planner scales by 30% in one year staying completely efficient with HRLink.",
      tagColor: "text-purple-600 bg-purple-50 border-purple-200"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 block mb-3">Customer Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Trusted by thousands of fast-growing companies.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Learn how fast-growing companies around the world have been successfully recruiting, onboarding, and improving team performance.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 bg-[#041f33] hover:bg-cyan-700 text-white text-sm font-semibold py-3 px-6 rounded-lg transition-all duration-300 group shadow-md">
            View all stories
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Card Wrapper (Image 2 style layout with Image 1 element injections) */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative min-h-[450px] flex flex-col justify-between shadow-2xl mb-20 overflow-hidden group/main">
          
          {/* Subtle grid background mask decorative layer */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 block mb-4">Featured Story</span>
                <div className="text-cyan-400 mb-4 opacity-80">
                  <Quote size={40} className="fill-cyan-400/10" />
                </div>
              
              </div>

              <div>
                <p className="font-bold text-slate-200 text-base">{testimonials[activeIndex].author}</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{testimonials[activeIndex].role}</p>
                
                <button className="mt-6 inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium group/btn transition-colors">
                  Read full case study 
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Media Side (Circular mask with absolute metric popping) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-8 lg:pt-0">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                
                {/* Background colored sphere display layout mirroring Image 1 */}
                <div className={`absolute inset-0 rounded-full ${testimonials[activeIndex].bgColor} opacity-90 transition-all duration-700 ease-in-out scale-95 group-hover/main:scale-100`} />
                
                {/* User Image cutout positioning layers */}
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />

                {/* Floating Metrics Counter Badge Overlay element */}
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-100 animate-bounce-slow">
                  <div className="w-2 h-8 bg-cyan-500 rounded-full" />
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">{testimonials[activeIndex].statValue}</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1">{testimonials[activeIndex].statLabel}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Controls Bar inside Featured Box */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-8 relative z-10">
            {/* Slider Dots indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'}`}
                />
              ))}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-3">
              <button onClick={prevSlide} className="p-2.5 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextSlide} className="p-2.5 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Section Title 2: "Why People Love" Bottom Grid Area */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Why people love us</h3>
          
          {/* Mock filters mimicking layout 2 controls */}
          <div className="flex gap-3 items-center self-end sm:self-auto">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all">
              Industry <SlidersHorizontal size={12} />
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all">
              Category <SlidersHorizontal size={12} />
            </button>
          </div>
        </div>

        {/* Bottom Stories Grid Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridStories.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Card Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.brand} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Floating Brand Badge */}
                <span className={`absolute bottom-3 left-3 px-3 py-1 text-xs font-bold rounded-md border shadow-sm ${item.tagColor}`}>
                  {item.brand}
                </span>
              </div>

              {/* Card Bottom Content Description */}
              <div className="p-5 flex-grow flex flex-col justify-between items-start">
                <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
                  {item.desc}
                </p>
                <button className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Read Story 
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Embedded micro-animation helpers */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Customer;