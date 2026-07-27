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
      {/* Presentation & Mobile Tap Action animation rules */}
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

        /* Enforce hover rules only on mouse-capable desktop displays */
        @media (hover: hover) {
          .hover-card:hover {
            background-color: #ffffff !important;
            border-color: #ffffff !important;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;
            transform: scale(1.03) !important;
          }
          .hover-card:hover .card-icon { color: #0891b2 !important; }
          .hover-card:hover .card-t1 { color: #0891b2 !important; }
          .hover-card:hover .card-t2 { color: #000000 !important; }
          .hover-card:hover .card-desc { color: #111827 !important; }
        }

        /* Provide instant dynamic response feedback for touch/tap inputs on small devices */
        @media (hover: none) {
          .hover-card:active {
            background-color: #ffffff !important;
            border-color: #ffffff !important;
            transform: scale(0.98) !important;
            transition: all 100ms ease;
          }
          .hover-card:active .card-icon { color: #0891b2 !important; }
          .hover-card:active .card-t1 { color: #0891b2 !important; }
          .hover-card:active .card-t2 { color: #000000 !important; }
          .hover-card:active .card-desc { color: #111827 !important; }
        }
      `}</style>

      {/* Main Container */}
      <section className="relative w-full overflow-hidden bg-[#020617] flex flex-col justify-center min-h-[750px] lg:h-[780px] lg:max-h-[800px] py-12 md:py-16">
        
        {/* Ambient Video layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none z-0"
        >
          <source src="vedioes/whyus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Matrix wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          
          {/* Row 1: Split Header Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start w-full mb-10 lg:mb-14">
            
            {/* Left Hero Header Column */}
            <div className="lg:col-span-6 cursor-default select-none animate-present-slow transition-transform duration-300 hover:scale-[1.02]" style={{ animationDelay: '0s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white leading-[1.1] tracking-tight origin-left">
                Why Customers <br className="hidden lg:block"/>Choose 
                <span className="font-bold text-cyan-400 block lg:inline-block lg:ml-3">Binary Global</span>
              </h1>
            </div>
            
            {/* Right Supporting Copy Column */}
            <div className="lg:col-span-6 flex items-center h-full animate-present-slow transition-transform duration-300 hover:scale-[1.01] origin-left" style={{ animationDelay: '0.3s' }}>
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-xl">
                We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined cloud solution.
              </p>
            </div> 
          </div>

          {/* Row 2: Grid Deck */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 border-t border-white/20 pt-6 lg:pt-8 w-full">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="hover-card flex flex-col items-start p-7 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm shadow-sm overflow-hidden animate-present-slow transition-all duration-300 transform origin-left"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Vector Accent Node */}
                <div className="card-icon mb-4 text-white transition-colors duration-300">
                  {item.icon}
                </div>
                
                {/* Feature Header Segment */}
                <h3 className="card-t1 text-xl sm:text-base font-black tracking-wider uppercase mb-2 text-cyan-400 leading-tight transition-colors duration-300">
                  {item.titleLine1} 
                  <span className="card-t2 font-bold text-white block transition-colors duration-300">
                    {item.titleLine2}
                  </span>
                </h3>
                
                {/* Description Body Block */}
                <p className="card-desc text-zinc-400 text-sm leading-relaxed transition-colors duration-300">
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