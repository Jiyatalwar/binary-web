import React from 'react'

const page = () => {
  return (
    <div className='text-3xl text-center h-200 bg-gray-200 text-teal-900'>
      sarvice page 
    </div>
  )
}

export default page

// import React from 'react';
// import { Briefcase, Wrench, Lightbulb, Cpu } from 'lucide-react';

// const ServicePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-300 flex flex-col items-center justify-center p-6 md:p-12">
      
//       {/* Top Navigation / Category Tabs */}
//       <div className="w-full max-w-6xl mb-8 overflow-x-auto border-b border-zinc-800/60 scrollbar-none">
//         <div className="flex space-x-6 text-xs md:text-sm font-medium uppercase tracking-wider whitespace-nowrap pb-4 text-zinc-500">
//           <span className="text-emerald-400 border-b-2 border-emerald-400 pb-4 -mb-[18px]">Professional Services</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Managed Services</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Strategic Technology Staffing</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Support Services</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Assessments</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Training Services</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Cloud Consulting Services</span>
//           <span className="hover:text-zinc-300 cursor-pointer transition-colors">Security Services</span>
//         </div>
//       </div>

//       {/* Main Grid Container - Changed to a clean layout with 40px (gap-10) spacing */}
//       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        
//         {/* Left Section: Hero Text & Value Proposition */}
//         <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between items-start gap-8 rounded-2xl  bg-gradient-to-b from-[#141719] to-[#121416] shadow-2xl">
//           <div className="space-y-6">
//             <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-zinc-400 font-semibold">
//               <span className="text-emerald-400">⚡</span> WHY CHOOSE US
//             </div>
            
//             <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
//               Professional Services for <span className="text-emerald-400">Seamless IT Solutions</span> and Success
//             </h1>
            
//             <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
//               Binary Global offers a comprehensive range of professional services to bring your IT projects to life. Our skilled team of technicians and engineers specializes in project management, implementation, consulting, and OEM services, ensuring that every deployment is smooth and effective.
//             </p>

//             {/* Why Choose Binary Global Features Checklist */}
//             <div className="pt-4 space-y-3 border-t border-zinc-800/80">
//               <div className="flex items-start gap-2 text-xs text-zinc-400">
//                 <span className="text-emerald-400 font-bold mr-1.5">✓</span>
//                 <span><strong>Expert Project Management:</strong> We manage every phase of your IT projects, from planning to execution, ensuring timely and cost-effective delivery.</span>
//               </div>
//               <div className="flex items-start gap-2 text-xs text-zinc-400">
//                 <span className="text-emerald-400 font-bold mr-1.5">✓</span>
//                 <span><strong>Seamless Integration:</strong> Our implementation services ensure smooth transitions with minimal downtime.</span>
//               </div>
//               <div className="flex items-start gap-2 text-xs text-zinc-400">
//                 <span className="text-emerald-400 font-bold mr-1.5">✓</span>
//                 <span><strong>Tailored IT Consulting:</strong> Get strategic insights and solutions that align with your business goals.</span>
//               </div>
//               <div className="flex items-start gap-2 text-xs text-zinc-400">
//                 <span className="text-emerald-400 font-bold mr-1.5">✓</span>
//                 <span><strong>OEM Expertise:</strong> Leverage our partnerships with top OEMs for optimized system deployments.</span>
//               </div>
//             </div>
//           </div>
          
//           <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-emerald-500/10 mt-4 w-full sm:w-auto text-center">
//             Get Started
//           </button>
//         </div>

//         {/* Right Section: Features Grid with 40px spacing */}
//         <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
          
//           {/* Card 1: Project Management */}
//           <div className="p-8 md:p-10 rounded-2xl border border-zinc-800 bg-[#121416] flex flex-col justify-between min-h-[240px] hover:bg-[#15181a] transition-all hover:-translate-y-0.5 shadow-xl group">
//             <Briefcase className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
//             <div className="mt-6 space-y-2">
//               <h3 className="text-lg font-medium text-white">Project Management Services</h3>
//               <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
//                 Our experienced project managers oversee the entire project lifecycle, from initial planning to final delivery, ensuring timely completion and budget adherence.
//               </p>
//               <a href="#" className="inline-block pt-1 text-xs font-medium text-emerald-400 hover:underline">Read More →</a>
//             </div>
//           </div>

//           {/* Card 2: Professional Implementation */}
//           <div className="p-8 md:p-10 rounded-2xl border border-zinc-800 bg-[#121416] flex flex-col justify-between min-h-[240px] hover:bg-[#15181a] transition-all hover:-translate-y-0.5 shadow-xl group">
//             <Wrench className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
//             <div className="mt-6 space-y-2">
//               <h3 className="text-lg font-medium text-white">Professional Implementation</h3>
//               <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
//                 Seamlessly integrate and deploy the latest technologies tailored to your business requirements, ensuring smooth transitions and optimized performance.
//               </p>
//               <a href="#" className="inline-block pt-1 text-xs font-medium text-emerald-400 hover:underline">Read More →</a>
//             </div>
//           </div>

//           {/* Card 3: Consulting & IT Consulting */}
//           <div className="p-8 md:p-10 rounded-2xl border border-zinc-800 bg-[#121416] flex flex-col justify-between min-h-[240px] hover:bg-[#15181a] transition-all hover:-translate-y-0.5 shadow-xl group">
//             <Lightbulb className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
//             <div className="mt-6 space-y-2">
//               <h3 className="text-lg font-medium text-white">Consulting & IT Consulting</h3>
//               <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
//                 Strategic guidance on technology trends, IT budgeting, and infrastructure planning to ensure your technical strategies scale cleanly with business goals.
//               </p>
//               <a href="#" className="inline-block pt-1 text-xs font-medium text-emerald-400 hover:underline">Read More →</a>
//             </div>
//           </div>

//           {/* Card 4: Configuration & OEM Services */}
//           <div className="p-8 md:p-10 rounded-2xl border border-zinc-800 bg-[#121416] flex flex-col justify-between min-h-[240px] hover:bg-[#15181a] transition-all hover:-translate-y-0.5 shadow-xl group">
//             <Cpu className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
//             <div className="mt-6 space-y-2">
//               <h3 className="text-lg font-medium text-white">Configuration & OEM Services</h3>
//               <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
//                 Streamline hardware setups and optimize OEM investments with authorized deployments, ensuring standardized settings and enhanced environment efficiency.
//               </p>
//               <a href="#" className="inline-block pt-1 text-xs font-medium text-emerald-400 hover:underline">Read More →</a>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default ServicePage;