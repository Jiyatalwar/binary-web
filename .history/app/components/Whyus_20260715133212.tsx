import React from 'react';
import { Lightbulb, Settings, Cloud } from 'lucide-react';

const Whyus = () => {
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
              <span className="font-bold"> Binary Global</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-white pt-16 mt-[-80px]">
          {/* Feature 1 */}
         <div className="flex flex-col items-start">
  {/* Icon Wrapper: Now handles custom images */}
  <div className="mb-6 relative w-10 h-10">
    <Image 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5xfR5TLkX6xvGqRBNIxkkghy0l29AOv0axmW1bsQGg&s=10" // 👈 Replace with your actual path in the public folder
      alt="Converged Solutions Icon"
      width={40} 
      height={40}
      className="object-contain"
    />
  </div>
  
  <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300">
    Converged <span className="font-normal text-white"><br/>Solutions</span>
  </h3>
  
  <p className="text-white text-xs md:text-sm leading-relaxed">
    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
  </p>
</div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-white">
              <Settings size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300">
             Industry <span className="font-normal text-white">Vertical<br></br> Focused</span>
            </h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-white">
              <Cloud size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300">
              Exceptional <span className="font-normal text-white">Customer<br/> Service</span>
            </h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          {/* feature 4 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-white">
              <Cloud size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300">
              Strong <br/><span className="font-normal text-white">Partnerships</span>
            </h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          {/* faeture 5 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-white">
              <Cloud size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300">
              Cloud<br/> <span className="font-normal text-white"> Confidence</span>
            </h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          {/* feature 6 */}
          <div className="flex flex-col items-start">
            <div className="mb-6 text-white">
              <Cloud size={40} strokeWidth={1.2} />
            </div>
            <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300">
              Skilled <span className="font-normal text-white"> Project Management</span>
            </h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
          </div>
          
        </div>

        

      </div>
    </section>
  );
};

export default Whyus;