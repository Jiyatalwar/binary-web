import React from 'react';
import { Layers, Target, HeartHandshake, Users, Cloud, Briefcase } from 'lucide-react';

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
      icon: <Cloud size={40} strokeWidth={1.2} />,
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
      {/* Presentation animation rules */}
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
          animation: slowPresentation 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* Main Container - Controlled Max-Height Environment */}
      <section className="relative w-full overflow-hidden bg-[#020617] flex flex-col justify-center min-h-[750px] lg:h-[780px] lg:max-h-[800px] py-12 md:py-16 mt-[-60px]">
        
        {/* Ambient Video layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none z-0"
        >
          <source src="vedioes/it.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Matrix wrapper */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-4 flex flex-col justify-center h-full">
          
          {/* Row 1: Split Header Deck - Added margin bottom layout constraint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start w-full mb-10 lg:mb-14">
            
            {/* Left Hero Header Column */}
            <div className="lg:col-span-6 group/hero cursor-default select-none animate-present-slow" style={{ animationDelay: '0s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white leading-[1.1] tracking-tight origin-left transition-transform duration-500 mt-[30px]">
                Why Customers <br className="hidden lg:block"/>Choose 
                <span className="font-bold text-cyan-400 block lg:inline-block lg:ml-3">Binary Global</span>
              </h1>
            </div>
            
            {/* Right Supporting Copy Column */}
            <div className="lg:col-span-6 flex items-center h-full group/desc animate-present-slow" style={{ animationDelay: '0.3s' }}>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined cloud solution. User generated content in
                real-time will have multiple touchpoints for offshoring.
              </p>
            </div> 
          </div>

          {/* Row 2: Grid Deck - Cards made larger via padding (p-7) and typography sizing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 border-t border-white/10 pt-6 lg:pt-8 w-full">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-start p-7 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm transition-all duration-300 cursor-pointer shadow-sm hover:bg-white hover:border-white hover:shadow-2xl overflow-hidden animate-present-slow"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Vector Accent Node */}
                <div className="mb-4 text-white group-hover:text-cyan-600 transition-colors duration-300">
                  {item.icon}
                </div>
                
                {/* Feature Header Segment */}
                <h3 className="text-xl sm:text-base font-black tracking-wider uppercase mb-2 text-cyan-400 group-hover:text-cyan-600 leading-tight transition-colors duration-300">
                  {item.titleLine1} 
                  <span className="font-bold text-white group-hover:text-black block transition-colors duration-300">
                    {item.titleLine2}
                  </span>
                </h3>
                
                {/* Description Body Block */}
                <p className=" text-zinc-400 group-hover:text-white text-s leading-relaxed transition-colors duration-300">
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