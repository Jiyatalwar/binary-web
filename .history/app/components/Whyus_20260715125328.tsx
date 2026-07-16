import React from 'react';
// If you are using lucide-react for icons, you can import them like this:
import { Lightbulb, Settings, Cloud } from 'lucide-react';

const Whyus = () => {
  return (
    <section className="bg-gray-200 text-gray-900 py-20 px-6 md:px-16 lg:px-24 mt-[-90px] min-h-screen flex flex-col justify-center">
      {/* Top Section: Header and Intro Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-20">
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-gray-600 block mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
            Leverage Agile <br /> Frameworks <br />
            <span className="font-bold">To Provide</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-start justify-center h-full">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal
            that has evolved from generation X is on the runway heading
            towards a streamlined cloud solution. User generated content in
            real-time will have multiple touchpoints for offshoring.
          </p>
          <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8 py-3 text-sm tracking-widest uppercase font-semibold">
            Button
          </button>
        </div>
      </div>

      {/* Bottom Section: 3-Column Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {/* Feature 1 */}
        <div className="flex flex-col items-start">
          <div className="mb-6 p-1 text-gray-900">
            <Lightbulb size={48} strokeWidth={1.2} />
          </div>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-4">
            Business <span className="font-normal text-gray-600">Strategy</span>
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-start">
          <div className="mb-6 p-1 text-gray-900">
            <Settings size={48} strokeWidth={1.2} />
          </div>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-4">
            Projects <span className="font-normal text-gray-600">Manager</span>
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-start">
          <div className="mb-6 p-1 text-gray-900">
            <Cloud size={48} strokeWidth={1.2} />
          </div>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-4">
            Internet <span className="font-normal text-gray-600">Technology</span>
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Whyus;