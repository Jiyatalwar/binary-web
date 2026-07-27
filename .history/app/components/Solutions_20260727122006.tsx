"use client";

import React, { Suspense, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ComponentItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface SolutionData {
  title: string;
  tagline: string;
  description: string;
  components: ComponentItem[];
}

const SolutionsContent = () => {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  
  // Read active solution from URL parameter, default to 'Smart Infrastructure'
  const activeSolution = searchParams.get('solution') || 'Smart Infrastructure';

  // Primary navigation items
  const solutionsNavbar = [
    'Smart Infrastructure', 
    'Application Service',
    'Data Management', 
    'Cloud Solutions', 
    'Managed IT Services', 
    'Cyber Defense'
  ];

  // Solutions data mapping all components for both modules
  const solutionsDataRepository: Record<string, SolutionData> = {
    'Smart Infrastructure': {
      title: 'Smart Infrastructure',
      tagline: 'Enterprise-Grade Infrastructure That Scales with Your Business',
      description: 'Deploy advanced edge, wireless, and network architectures custom-built for zero-downtime scalability and high performance.',
      components: [
        {
          id: 1,
          title: 'Enterprise Wireless Solutions | Wi-Fi 6E & Wi-Fi 7 Networks',
          description: 'Upgrade to enterprise-grade Wi-Fi 6E and Wi-Fi 7 for secure, scalable, high-performance wireless connectivity built for AI-ready enterprises.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwvdSQBhBk1eaHoGxYvRjtzN14UcM5sMw9DJjkaKo7Q&s=10', 
          imageAlt: 'Wireless enterprise visual layout'
        },
        {
          id: 2,
          title: 'Unified Communications & Enterprise Collaboration Tools ',
          description: 'Enable seamless team collaboration with secure unified communications, messaging, voice, and video solutions. ',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMslx32sz_h2kHiJCteav-9R9QyjqaCFaohhe-b_B0kQ&s',
          imageAlt: 'Team workspace and unified enterprise software'
        },
        {
          id: 3,
          title: 'Campus, Branch & WAN Network Infrastructure Solutions ',
          description: 'Design and manage resilient campus, branch, and WAN networks with secure connectivity, high availability, and zero-trust security. ',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlMu2gVTGQ9TmzGpLEuKu7svfvrYLOu1t-KMMMpl73w&s=10',
          imageAlt: 'Distributed branch network infrastructure topology'
        },
        {
          id: 4,
          title: 'Enterprise & Industrial IoT Connectivity Solutions ',
          description: 'Enable secure IoT connectivity, automation, and real-time insights with industrial and enterprise IoT solutions.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrYhKDZzd358qSrISBJFkwQf33lFj0qI4ZL7KuhUA1A&s',
          imageAlt: 'Industrial hardware automated sensor array grid'
        },
        {
          id: 5,
          title: 'Network as a Service (NaaS) Solutions',
          description: 'Discover NaaS solutions that cut costs, simplify management, and enhance operational efficiency with flexible networking.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ8mwmArg9ylsvbwct0_KmLJOE0bPE4cXul1O9-kcJQ&s=10',
          imageAlt: 'Cloud-managed virtualization dashboard network nodes'
        },
        {
          id: 6,
          title: 'Data Center & Hybrid Infrastructure Build Services ',
          description: "Expert data center build and hybrid infrastructure services designed for scalability, reliability, and long-term business growth.Top of Form ",
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Zasn1vjuTz_yMWYLX9rz__WmEIGKqxyC5EicdI4DgQ&s=10',
          imageAlt: 'Server rack installations inside modern server facility room'
        }
      ]
    },
    'Application Service': {
      title: 'Application Services',
      tagline: 'Unlock Data-Driven Insights and Automation with Our Application Services.',
      description: 'Use real-time observability to achieve better business results. Transform your business with Binary Global.',
      components: [
        {
          id: 7,  
          title: 'Data Analytics',
          description: 'Make Data-Driven Decisions Easily with Our Advanced Analytics.',
          imageUrl: '/images/data-analytics.jpg',
          imageAlt: 'Data Analytics visualization overview'
        },
        {
          id: 8,
          title: 'AI Solution',
          description: 'Transform your business with our AI-powered IT services and stay ahead of the competition.',
          imageUrl: '/images/ai-solutions.jpg',
          imageAlt: 'Artificial intelligence infrastructure layout'
        },
        {
          id: 9,
          title: 'Application Advisory',
          description: "Make Smart Decisions for Your Apps with Binary Global's IT Services. Boost Your Business Success.",
          imageUrl: '/images/app-advisory.jpg',
          imageAlt: 'Application mapping advisory board consultation'
        },
        {
          id: 10,
          title: 'RPA',
          description: 'Maximize Productivity with RPA Solutions. Automate Tasks, Reduce Errors, and Improve Accuracy. Contact Us to Transform Your Business Processes.',
          imageUrl: '/images/rpa.jpg',
          imageAlt: 'Robotic Process Automation control script nodes'
        },
        {
          id: 11,
          title: 'Automated Machine Learning',
          description: 'Supercharge your business insights with Automated Machine Learning from Binary Global. Utilize cutting-edge technology to analyze complex data effortlessly and make informed decisions.',
          imageUrl: '/images/auto-ml.jpg',
          imageAlt: 'Automated machine learning computing array'
        }
      ]
    }
  };

  const currentSolution = solutionsDataRepository[activeSolution] || {
    title: activeSolution,
    tagline: 'Transform your enterprise architecture.',
    description: 'Empower your modern digital business workflow frameworks with Binary Global.',
    components: []
  };

  // 1. Viewport alignment hook when switching active items
  useEffect(() => {
    if (window.location.hash === '#solutions' && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSolution]);

  // 2. Automatically center the active nav tab inside the horizontal scrollbar view on mobile
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeSolution]);

  return (
    <div 
      id="solutions" 
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-gray-900 min-h-screen scroll-mt-28"
    >
      
      {/* Top Level Header */}
      <div className="mb-[20px]">
        <span className="text-gray-500 font-medium text-sm block mb-2 uppercase tracking-wider">
          Our Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black block mb-2 bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent transition-transform duration-300 hover:scale-[1.01] origin-left cursor-pointer">
          Elevate Your Business with Innovative <br className="hidden sm:inline"/> IT System Integration by Binary Global.
        </h2>
      </div>

      {/* Solutions Navigation Selector Tabs (Smooth Mobile Horizontal Scroll Added) */}
     {/* Solutions Navigation Selector Tabs (With Custom Scrollbar Track & Borders) */}
<div 
  className="my-[30px] sm:my-[40px] -mx-4 px-4 font-black overflow-x-auto snap-x snap-mandatory pb-3
    [&::-webkit-scrollbar]:h-2 
    [&::-webkit-scrollbar-track]:bg-gray-100 
    [&::-webkit-scrollbar-track]:rounded-full 
    [&::-webkit-scrollbar-thumb]:bg-gray-300 
    [&::-webkit-scrollbar-thumb]:rounded-full 
    hover:[&::-webkit-scrollbar-thumb]:bg-[#004785]/60 
    scrollbar-thin"
>
  <div className="flex items-center justify-start gap-2 sm:gap-3 w-max   pb-3">
    {solutionsNavbar.map((solutionName) => {
      const isActive = activeSolution.toLowerCase() === solutionName.toLowerCase();
      const href = `?solution=${encodeURIComponent(solutionName)}#solutions`;

      return (
        <Link
          key={solutionName}
          href={href}
          scroll={false}
          ref={isActive ? activeTabRef : null}
          className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-black shadow-sm border transition-all duration-300 hover:scale-[1.03] origin-left cursor-pointer whitespace-nowrap text-center snap-ml-4 ${
            isActive
              ? 'bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] text-white border-transparent'
              : 'bg-white text-gray-900 border-gray-200/80 hover:bg-gray-50'
          }`}
        >
          {solutionName}
        </Link>
      );
    })}
  </div>
</div>

      {/* Dynamic Header Box for Active Solution Context */}    
      <div className="mb-[40px] rounded-2xl bg-white">
        <span className="text-lg sm:text-xl font-black uppercase tracking-widest block mb-2 bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent transition-transform duration-300 hover:scale-[1.01] origin-left cursor-pointer">
          {currentSolution.title}
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#004785] mb-3 leading-snug transition-transform duration-300 hover:scale-[1.01] origin-left cursor-pointer">
          {currentSolution.tagline}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl transition-transform duration-300 hover:scale-[1.01] origin-left cursor-pointer">
          {currentSolution.description}
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSolution.components.map((component) => (
          <div 
            key={component.id}  
            className="group flex flex-col justify-between rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:bg-gradient-to-b hover:from-zinc-950 hover:to-black transition-all duration-300 overflow-hidden hover:shadow-xl h-full hover:scale-[1.02] origin-left cursor-pointer"
          >
            <div className="flex flex-col">
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-gray-50 border-b border-gray-100 overflow-hidden">
                <Image
                  src={component.imageUrl}
                  alt={component.imageAlt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={component.imageUrl.startsWith('http')}
                />
              </div>

              {/* Text Info Container */}
              <div className="p-5 sm:p-6 flex flex-col space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight leading-snug group-hover:text-white transition-colors duration-300">
                  {component.title}
                </h4>

                <p className="text-gray-500 text-[12px] sm:text-[13px] leading-relaxed font-normal group-hover:text-zinc-300 transition-colors duration-300">
                  {component.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State Fallback */}
      {currentSolution.components.length === 0 && (
        <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl bg-white shadow-sm">
          <p className="text-gray-400 text-sm">Detailed sub-components are coming soon for this ecosystem.</p>
        </div>
      )}
    </div>
  );
};

const Solutions = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Solutions Hub Architecture...</div>}>
      <SolutionsContent />
    </Suspense>
  );
};

export default Solutions;