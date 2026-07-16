import React from 'react';
import { 
  Layers, 
  Target, 
  HeartHandshake, 
  Users, 
  Cloud, 
  Briefcase 
} from 'lucide-react'; // Using lucide-react for matching modern icons

const Whyus = () => {
  // Data structure for the grid items
  const features = [
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "CONVERGED SOLUTIONS",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: "INDUSTRY VERTICAL FOCUSED",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-cyan-400" />,
      title: "EXCEPTIONAL CUSTOMER SERVICE",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "STRONG PARTNERSHIPS",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "CLOUD CONFIDENCE",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
      title: "SKILLED PROJECT MANAGEMENT",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    }
  ];

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden font-sans flex flex-col justify-center py-16 px-6 md:px-12 lg:px-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* Replace with your local video path or an online URL */}
        <source src="/tech-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to ensure readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950/80 z-5" />

      {/* Large Backdrop Text Effect (Optional) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none z-10 hidden lg:flex">
        <h1 className="text-[10rem] font-black tracking-widest text-white text-center leading-none">
          INFORMATION<br />TECHNOLOGY
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Why Customers <br />
              Choose <span className="text-cyan-400">Binary Global</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success. 
              Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
              going forward, a new normal that has evolved from generation X is on the runway heading towards a 
              streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            </p>
          </div>
        </div>

        {/* Features Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-cyan-500/30 flex flex-col gap-4"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 flex items-center justify-start">
                {item.icon}
              </div>
              
              {/* Feature Content */}
              <div>
                <h4 className="text-cyan-400 font-bold tracking-wider text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Whyus;