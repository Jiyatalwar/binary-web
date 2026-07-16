import React from 'react';
import { Layers, Target, HeartHandshake, Users, CloudCheck, Briefcase} from 'lucide-react';

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
    <section className=" mt-[-100px] relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://img.magnific.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-67827.jpg?semt=ais_hybrid&w=740&q=80')" }}>
      {/* Container matching the max-width profile of your Navbar */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Top Section: Header and Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24 mt-[-80px]">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-white block mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight">
              Why Customers Choose
              <span className="font-bold text-cyan-300"> Binary Global</span>
            </h1>
          </div>
          
          <div className="flex flex-col items-start justify-center h-full pt-2 lg:pt-8">
            <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-xl">
             We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
            <button className="border border-white text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 px-8 py-2.5 text-xs tracking-widest uppercase font-semibold">
              Button
            </button>
          </div>
        </div>

        {/* Bottom Section: 3-Column Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-16 lg:gap-y-20 border-t border-zinc-800 pt-16 w-full max-w-6xl mx-auto mt-[-100px]">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-start group">
          {/* Animated Icon Container */}
          <div className="mb-6 text-white group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-300">
            {item.icon}
          </div>
          
          {/* Typography Profile */}
          <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300 leading-tight">
            {item.titleLine1} <span className="font-normal text-white"><br />{item.titleLine2}</span>
          </h3>
          
          {/* Paragraph Copy */}
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

        

      </div>
    </section>
  );
};

export default Whyus;