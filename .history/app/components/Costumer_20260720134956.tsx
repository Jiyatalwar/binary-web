"use client";

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';

const Costumer = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Mock data matching the layout of the images
  const gridStories = [
    {
      id: 1,
      brand: "Endpoint Security",
      logoBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomf2Cob3jrKjDQqjjSlR7Ksbi4IIAX6Ur-hLM578JxA&s=10",
      desc: "Effective Data Management for a Telecom CDN Network Using NetApp Storage Solution",
    },
    {
      id: 2,
      brand: "Data Management",
      logoBg: "bg-orange-50 text-orange-700 border-orange-200",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPXzbxipxaqVU1WIiHawlmk4IWfQTRAx0nwNxZUNBSA&s=10",
      desc: "Strengthening Data Protection for a Leading Indian Digital Connectivity Infrastructure Company Using Forcepoint DLP",
    },
    {
      id: 3,
      brand: "Endpoint Security",
      logoBg: "bg-purple-50 text-purple-700 border-purple-200",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2sNLbiTcS9oNuFOu_FDtf8RAZgK6fNSOWBiD7MN8Dg&s=10",
      desc: "Strengthening Endpoint Security for a Small Finance Bank using Sophos Endpoint Security",
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 w-full mt-0 sm:mt-[-30px] lg:mt-[-60px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-16 ">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 block mb-3 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black  lg:text-6xl bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent mb-6 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
            Trusted by thousands of fast-growing companies.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-8 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
            Learn how fast-growing companies around the world have been successfully recruiting, onboarding, and improving employee experience with HRLink.
          </p>
          {/* <button className="inline-flex items-center gap-2 bg-[#1e3d38] hover:bg-[#162e2a] text-white text-sm font-semibold py-3 px-5 rounded-lg transition-colors group shadow-sm">
            View all 
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button> */}
        </div>

        {/* Featured Big Card Showcase (Row 2 Layout) */}
        <div className="bg-gradient-to-tr from-[#2c4260] via-[#162234] to-[#0a0e17] rounded-2xl overflow-hidden shadow-xl mb-24 transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
             
            {/* Left Narrative Frame */}
            <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-between text-white space-y-12">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 block mb-6 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
                  Featured
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug text-zinc-100 mb-12 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
                  Our clients success is our greatest achievement - read their stories here!
                </h3>
                <p className='transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer'>
                  Learn how fast-growing companies around the world have been successfully recruiting, onboarding, and improving employee experience with HRLink.
                </p>
              </div>
              
              <div>
                <button className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white group transition-colors transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
                  Read more 
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full aspect-video lg:aspect-auto overflow-hidden bg-zinc-800">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_-PmpCc2tCCmgEmkke_JPUrQBOxzKtXV-3cSTKABsQ&s=10" 
                alt="Featured team success" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-102"
              />
            </div>

          </div>
        </div>

        {/* Subsection Filters Head */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-10 mt-0 sm:mt-[-30px] lg:mt-[-70px]">
          <h4 className="text-2xl font-bold text-zinc-900 tracking-tight transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
            Customer Success Stories
          </h4>
          
          {/* Functional Filters Dropdown UI Setup */}
          <div className="flex gap-3 items-center ">
            <div className="relative">
              {/* <button className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 rounded-lg px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors">
                Industry <ChevronDown size={14} className="text-zinc-500" />
              </button>
            </div>
            <div className="relative">
              <button className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 rounded-lg px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors">
                Category <ChevronDown size={14} className="text-zinc-500" />
              </button> */}
            </div>
          </div>
        </div>

        {/* Dynamic Card Grid (Row 3 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
          {gridStories.map((story) => (
            <div key={story.id} className="group flex flex-col bg-transparent rounded-xl transition-all duration-300">
              
              {/* Card Image Container aspect matching visual targets */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-100 mb-5 shadow-sm">
                <img 
                  src={story.image} 
                  alt={story.brand} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                />
                
                {/* Embedded Floating Brand Box */}
                <span className={`absolute bottom-4 left-4 px-3 py-1.5 text-xs font-bold rounded-lg border shadow-sm tracking-wide ${story.logoBg}`}>
                  {story.brand}
                </span>
              </div>

              {/* Text Description Block */}
              <div className="flex flex-col flex-grow items-start justify-between">
                <p className="text-zinc-800 text-sm font-medium leading-relaxed mb-4">
                  {story.desc}
                </p>
                <button className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-950 group-hover:text-zinc-600 transition-colors">
                  Read more 
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Costumer;