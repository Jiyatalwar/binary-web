import React from 'react';
import { Layers, Target, HeartHandshake, Users, CloudCheck, Briefcase } from 'lucide-react';

const Whyus = () => {
  const features = [
    {
      icon: <Layers size={32} strokeWidth={1.2} />,
      titleLine1: "Converged",
      titleLine2: "Solutions",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <Target size={32} strokeWidth={1.2} />,
      titleLine1: "Industry Vertical",
      titleLine2: "Focused",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <HeartHandshake size={32} strokeWidth={1.2} />,
      titleLine1: "Exceptional Customer",
      titleLine2: "Service",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <Users size={32} strokeWidth={1.2} />,
      titleLine1: "Strong",
      titleLine2: "Partnerships",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <CloudCheck size={32} strokeWidth={1.2} />,
      titleLine1: "Cloud",
      titleLine2: "Confidence",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <Briefcase size={32} strokeWidth={1.2} />,
      titleLine1: "Skilled Project",
      titleLine2: "Management",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <>
      {/* CSS Keyframes handling the presentation entrance flow */}
      <style>{`
        @keyframes slowPresentation {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-present-slow {
          animation: slowPresentation 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* 
        Outer wrapper strictly locked to h-[600px] 
        Matches the text styling, display layout, and alignment of the Hero.
      */}
      <section className="relative h-[600px] w-full overflow-hidden text-white flex flex-col items-center justify-center">
        
        {/* Background Video aligned exactly like Hero */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20 mix-blend-screen pointer-events-none"
        >
          <source 
            src="vedioes/vecteezy_business-button-24-hours-service-online-netcom-web-icon_1807827.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay matched to the Hero's opacity */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        {/* Content Container (Padded slightly to protect spacing within the 600px limits) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-0 flex flex-col justify-between h-full py-12">
          
          {/* Top Section: Standard Flex Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Column: Title */}
            <div className="group/hero cursor-default select-none animate-present-slow" style={{ animationDelay: '0s' }}>
              <span className="text-xs font-bold tracking-widest uppercase text-white block mb-2 transition-transform duration-500 ease-out group-hover/hero:translate-x-1">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-tight origin-left transition-transform duration-700 ease-out group-hover/hero:scale-105">
                Why Customers Choose
                <span className="font-bold text-cyan-300 block lg:inline transition-colors duration-500 group-hover/hero:text-cyan-400"> Binary Global</span>
              </h2>
            </div>
            
            {/* Right Column: Mini-description text fits compactly */}
            <div className="animate-present-slow" style={{ animationDelay: '0.4s' }}>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success. 
                Our approach delivers a modernized strategy to ensure your operations scale seamlessly with 
                advanced, future-ready IT infrastructure.
              </p>
            </div> 
          </div>

          {/* 
            Bottom Section: 3-Column Features Grid 
            - Reduced grid item padding (p-4) and spacing to make it fit gracefully into the 600px container.
            - Restructured animation delays to loop cleanly.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:bg-none hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl overflow-hidden animate-present-slow"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Micro Icon Container */}
                <div className="text-white group-hover:text-[#041f33] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                
                {/* Feature details aligned inline to save vertical height */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold tracking-wider uppercase mb-1 text-cyan-300 group-hover:text-cyan-600 transition-all duration-300">
                    {item.titleLine1} <span className="font-normal text-white group-hover:text-zinc-900">{item.titleLine2}</span>
                  </h3>
                  <p className="text-zinc-300 group-hover:text-zinc-600 text-[11px] md:text-xs leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Whyus;