import React from 'react';
import { Layers, Target, HeartHandshake, Users, CloudCheck, Briefcase } from 'lucide-react';

const Whyus = () => {
  const features = [
    {
      icon: <Layers size={48} strokeWidth={1.2} />, // Increased icon size from 40 to 48
      titleLine1: "Converged",
      titleLine2: "Solutions",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Target size={48} strokeWidth={1.2} />,
      titleLine1: "Industry Vertical",
      titleLine2: "Focused",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <HeartHandshake size={48} strokeWidth={1.2} />,
      titleLine1: "Exceptional Customer",
      titleLine2: "Service",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Users size={48} strokeWidth={1.2} />,
      titleLine1: "Strong",
      titleLine2: "Partnerships",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <CloudCheck size={48} strokeWidth={1.2} />,
      titleLine1: "Cloud",
      titleLine2: "Confidence",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Briefcase size={48} strokeWidth={1.2} />,
      titleLine1: "Skilled Project",
      titleLine2: "Management",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    }
  ];

  return (
    <>
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
          opacity: 0;
        }
      `}</style>

      {/* Main Section 
        - Increased desktop height to lg:h-[850px] to easily hold the new larger card sizing
      */}
      <section className="relative min-h-screen lg:h-[850px] w-full overflow-hidden bg-[#020617] flex flex-col justify-center py-16 lg:py-0">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none z-0"
        >
          <source src="vedioes/it.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-0 flex flex-col justify-between h-full gap-12 lg:gap-0 py-8">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:mt-16">
            
            <div className="group/hero cursor-default select-none animate-present-slow" style={{ animationDelay: '0s' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-100 leading-tight tracking-tight origin-left transition-transform duration-700 ease-out lg:group-hover/hero:scale-105">
                Why Customers Choose
                <span className="font-bold text-cyan-300 block lg:inline transition-colors duration-500 lg:group-hover/hero:text-cyan-400"> Binary Global</span>
              </h1>
            </div>
            
            <div className="flex flex-col items-start justify-center h-full group/desc animate-present-slow" style={{ animationDelay: '0.6s' }}>
              <p className="text-zinc-300 lg:text-white text-base sm:text-lg leading-relaxed max-w-xl origin-left transition-transform duration-700 ease-out lg:group-hover/desc:scale-[1.02]">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined cloud solution. User generated content in
                real-time will have multiple touchpoints for offshoring.
              </p>
            </div> 
          </div>

          {/* Bottom Section: Features Grid
            - Increased inner padding to p-6 or p-8 for a noticeably roomier layout
            - Bumped up font sizes inside the card matches the scale shift cleanly
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-white/20 pt-8 lg:mb-12">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start group p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:bg-none hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden animate-present-slow"
                style={{ animationDelay: `${1.2 + index * 0.15}s` }}
              >
                {/* Icon Container */}
                <div className="mb-4 text-white group-hover:text-[#041f33] lg:group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.icon}
                </div>
                
                {/* Feature Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-wider uppercase mb-2 text-cyan-300 group-hover:text-cyan-600 leading-snug transition-all duration-300 lg:group-hover:scale-105 origin-left">
                  {item.titleLine1} <span className="font-normal text-white group-hover:text-zinc-900"><br />{item.titleLine2}</span>
                </h3>
                
                {/* Feature Subtext */}
                <p className="text-zinc-300 group-hover:text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm transition-all duration-300 lg:group-hover:scale-[1.02] origin-left">
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