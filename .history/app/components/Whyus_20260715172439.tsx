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
      {/* CSS Keyframes handling the presentation entrance flow */}
      <style>{`
        @keyframes slowPresentation {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-present-slow {
          animation: slowPresentation 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* Keeps elements hidden until their delay timers trigger */
        }
      `}</style>

      {/* 
        Changes:
        - Removed mt-[-80px]
        - Changed py-25 (non-standard Tailwind) to standard py-20 lg:py-28 for natural vertical spacing
      */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#020617]">
        
        {/* 
          Background Video Component 
          - Changed h-200 to h-full so it scales cleanly with the section's actual height
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none z-0"
        >
          <source 
            src="vedioes/vecteezy_business-button-24-hours-service-online-netcom-web-icon_1807827.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-0">
          
          {/* Top Section: Header and Intro Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            
            {/* Left Column: Hero Text with Hover Zoom (Removed mt-[-80px] span margin) */}
            <div className="group/hero cursor-default select-none animate-present-slow" style={{ animationDelay: '0s' }}>
              <span className="text-xs font-bold tracking-widest uppercase text-white block mb-4 transition-transform duration-500 ease-out group-hover/hero:translate-x-1">
                What We Do
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight origin-left transition-transform duration-700 ease-out group-hover/hero:scale-105">
                Why Customers Choose
                <span className="font-bold text-cyan-300 block lg:inline transition-colors duration-500 group-hover/hero:text-cyan-400"> Binary Global</span>
              </h1>
            </div>
            
            {/* Right Column: Narrative Info Text (Removed mt-[-50px] container margin) */}
            <div className="flex flex-col items-start justify-center h-full lg:pt-8 group/desc animate-present-slow" style={{ animationDelay: '0.6s' }}>
              <p className="text-white text-sm md:text-base leading-relaxed max-w-xl origin-left transition-transform duration-700 ease-out group-hover/desc:scale-[1.02]">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined cloud solution. User generated content in
                real-time will have multiple touchpoints for offshoring.
              </p>
            </div> 
          </div>

          {/* Bottom Section: Features Grid (Removed mt-[-80px], softened border color to white/10) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-10 border-t border-white/10 pt-16 w-full max-w-6xl mx-auto">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:bg-none hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden animate-present-slow"
                style={{ animationDelay: `${1.2 + index * 0.15}s` }} // Adjusted cascade delays slightly for a smoother load-in
              >
                {/* Icon Container: Micro-scales and switches context color */}
                <div className="mb-6 text-white group-hover:text-[#041f33] group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.icon}
                </div>
                
                {/* Feature Title */}
                <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300 group-hover:text-cyan-600 leading-tight transition-all duration-300 group-hover:scale-105 origin-left">
                  {item.titleLine1} <span className="font-normal text-white group-hover:text-zinc-900"><br />{item.titleLine2}</span>
                </h3>
                
                {/* Feature Subtext */}
                <p className="text-zinc-300 group-hover:text-zinc-600 text-xs md:text-sm leading-relaxed max-w-sm transition-all duration-300 group-hover:scale-[1.02] origin-left">
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