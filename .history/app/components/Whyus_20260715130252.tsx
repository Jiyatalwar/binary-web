import React from 'react';
import { Lightbulb, Settings, Cloud } from 'lucide-react';

const Whyus = () => {
  return (
    <section className=" mt-[-100px] relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://i.pinimg.com/236x/fd/09/94/fd099408f7d2823899b828cda6a13dc9.jpg')" }}>
      {/* Container matching the max-width profile of your Navbar */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Top Section: Header and Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-white block mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight">
              Why Customers Choose
              <span className="font-bold"> Binary Global</span>
            </h1>
          </div>
          
          <div className="flex flex-col items-start justify-center h-full pt-2 lg:pt-8">
            <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-xl">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-white pt-16 mt-[-100px]">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-white">
              <Lightbulb size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3">
              Business <span className="font-normal text-zinc-500">Strategy</span>
            </h3>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-zinc-950">
              <Settings size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3">
              Projects <span className="font-normal text-zinc-500">Manager</span>
            </h3>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-zinc-950">
              <Cloud size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-3">
              Internet <span className="font-normal text-zinc-500">Technology</span>
            </h3>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Whyus;