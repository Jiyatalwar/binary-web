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

      <section 
  className="relative mt-[-80px] py-25 overflow-hidden bg-[#020617]"
>
  {/* Background Video Component */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-200 object-cover opacity-25 mix-blend-screen pointer-events-none z-0"
  >
    <source 
      src="vedioes/vecteezy_business-button-24-hours-service-online-netcom-web-icon_1807827.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
          
          {/* Top Section: Header and Intro Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24">
            
            {/* Left Column: Hero Text with Hover Zoom */}
            <div className="group/hero cursor-default select-none animate-present-slow" style={{ animationDelay: '0s' }}>
              <span className=" mt-[-80px] text-xs font-bold tracking-widest uppercase text-white block mb-4 transition-transform duration-500 ease-out group-hover/hero:translate-x-1">
                What We Do
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight origin-left transition-transform duration-700 ease-out group-hover/hero:scale-105">
                Why Customers Choose
                <span className="font-bold text-cyan-300 block lg:inline transition-colors duration-500 group-hover/hero:text-cyan-400"> Binary Global</span>
              </h1>
            </div>
            
            {/* Right Column: Narrative Info Text */}
            <div className="mt-[-50px] flex flex-col items-start justify-center h-full pt-2 lg:pt-8 group/desc animate-present-slow" style={{ animationDelay: '0.6s' }}>
              <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-xl origin-left transition-transform duration-700 ease-out group-hover/desc:scale-[1.02]">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined cloud solution. User generated content in
                real-time will have multiple touchpoints for offshoring.
              </p>
            </div> 
          </div>

          {/* Bottom Section: 3-Column Features Grid with a 2-Second Staggered Sequence */}
          <div className="mt-[-80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-10 border-t border-white pt-16 w-full max-w-6xl mx-auto">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:bg-none hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden animate-present-slow"
                // 💡 Starts after the hero section is visible, then cascades each card precisely 2 seconds apart
                style={{ animationDelay: `${1.5 + index *0.50}s` }}
              >
                {/* Icon Container: Micro-scales and switches context color */}
                <div className="mb-6 text-white group-hover:text-[#041f33] group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.icon}
                </div>
                
                {/* Feature Title: Zooming text elements */}
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