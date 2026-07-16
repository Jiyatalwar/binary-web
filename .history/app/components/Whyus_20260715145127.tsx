import React from 'react';
import { Layers, Target, HeartHandshake, Users, CloudCheck, Briefcase } from 'lucide-react';

const Whyus = () => {
  const features = [
    {
      icon: <Layers size={40} strokeWidth={1.2} />,
      titleLine1: "Converged",
      titleLine2: "Solutions",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Target size={40} strokeWidth={1.2} />,
      titleLine1: "Industry Vertical",
      titleLine2: "Focused",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <HeartHandshake size={40} strokeWidth={1.2} />,
      titleLine1: "Exceptional Customer",
      titleLine2: "Service",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Users size={40} strokeWidth={1.2} />,
      titleLine1: "Strong",
      titleLine2: "Partnerships",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <CloudCheck size={40} strokeWidth={1.2} />,
      titleLine1: "Cloud",
      titleLine2: "Confidence",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Briefcase size={40} strokeWidth={1.2} />,
      titleLine1: "Skilled Project",
      titleLine2: "Management",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    }
  ];

  return (
    <>
      {/* Inline styles injected strictly to handle the presentation entrance fade-up without runtime library dependency overhead */}
      <style>{`
        @keyframes customFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: customFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <section className="mt-[-80px] relative py-25 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://img.magnific.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-67827.jpg?semt=ais_hybrid&w=740&q=80')" }}>
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
          
          {/* Top Section: Header and Intro Text with zoom actions and entry motion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24 animate-fade-up">
            <div className="group/hero">
              <span className="text-xs font-bold tracking-widest uppercase text-white block mb-4">
                What We Do
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight cursor-default origin-left transition-transform duration-500 ease-out group-hover/hero:scale-[1.03]">
                Why Customers Choose
                <span className="font-bold text-cyan-300"> Binary Global</span>
              </h1>
            </div>
            
            <div className="flex flex-col items-start justify-center h-full pt-2 lg:pt-8 group/desc">
              <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-xl cursor-default origin-left transition-transform duration-500 ease-out group-hover/desc:scale-[1.015]">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined cloud solution. User generated content in
                real-time will have multiple touchpoints for offshoring.
              </p>
              <button className="border border-white text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 px-8 py-2.5 text-xs tracking-widest uppercase font-semibold hover:scale-105 active:scale-95 transform">
                Button
              </button>
            </div>
          </div>

          {/* Bottom Section: 3-Column Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-10 border-t border-white pt-16 w-full max-w-6xl mx-auto animate-fade-up">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start group p-6 rounded-2xl bg-transparent hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden"
              >
                {/* Icon Container: Changes color and micro-scales up */}
                <div className="mb-6 text-white group-hover:text-[#041f33] group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.icon}
                </div>
                
                {/* Title Text Layout: Swaps colors and scales up gracefully on hover */}
                <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300 group-hover:text-cyan-600 leading-tight transition-all duration-300 group-hover:scale-105 origin-left">
                  {item.titleLine1} <span className="font-normal text-white group-hover:text-zinc-900"><br />{item.titleLine2}</span>
                </h3>
                
                {/* Description Body Paragraph: Shifts colors and scales along with the headers */}
                <p className="text-zinc-400 group-hover:text-zinc-600 text-xs md:text-sm leading-relaxed max-w-sm transition-all duration-300 group-hover:scale-[1.02] origin-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Whyus;