"use client";

import React, { Suspense } from 'react';
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
          title: 'Enterprise Wireless & Wi-Fi 6E / Wi-Fi 7 Solutions',
          description: 'High-performance enterprise wireless powered by Wi-Fi 6E and Wi-Fi 7, enabling secure, scalable, and AI-ready connectivity for modern digital enterprises.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwvdSQBhBk1eaHoGxYvRjtzN14UcM5sMw9DJjkaKo7Q&s=10', 
          imageAlt: 'Wireless enterprise visual layout'
        },
        {
          id: 2,
          title: 'Enterprise Collaboration & Unified Communications',
          description: 'Boost Team Collaboration with Our Advanced Tools.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMslx32sz_h2kHiJCteav-9R9QyjqaCFaohhe-b_B0kQ&s',
          imageAlt: 'Team workspace and unified enterprise software'
        },
        {
          id: 3,
          title: 'Campus, Branch & WAN Networking',
          description: 'Design, deploy, and manage secure campus, branch, and WAN networks with high availability, performance, and zero-trust principles.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlMu2gVTGQ9TmzGpLEuKu7svfvrYLOu1t-KMMMpl73w&s=10',
          imageAlt: 'Distributed branch network infrastructure topology'
        },
        {
          id: 4,
          title: 'Industrial & Enterprise IoT Solutions',
          description: 'Unlock IoT Potential with Our Advanced Solutions. Enhance Business Efficiency and Innovation with Connectivity.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrYhKDZzd358qSrISBJFkwQf33lFj0qI4ZL7KuhUA1A&s',
          imageAlt: 'Industrial hardware automated sensor array grid'
        },
        {
          id: 5,
          title: 'Network as a Service (NaaS)',
          description: 'Simplify your network management with Network as a Service. Take advantage of this solution to reduce costs and enhance efficiency in your operations.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQ8mwmArg9ylsvbwct0_KmLJOE0bPE4cXul1O9-kcJQ&s=10',
          imageAlt: 'Cloud-managed virtualization dashboard network nodes'
        },
        {
          id: 6,
          title: 'Data Center & Hybrid Infrastructure Build',
          description: "Build a robust foundation for your digital operations with our Datacenter Build services. Rely on our expertise to create an infrastructure that's aligned with your business needs and future growth.",
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

  // Safe fallback structure if the selected route doesn't have components defined yet
  const currentSolution = solutionsDataRepository[activeSolution] || {
    title: activeSolution,
    tagline: 'Transform your enterprise architecture.',
    description: 'Empower your modern digital business workflow frameworks with Binary Global.',
    components: []
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-gray-900 min-h-screen">
      
      {/* Top Level Header */}
      <div className="mb-[20px]">
       <span className="text-gray-500 font-medium text-sm block mb-2 uppercase tracking-wider">
  Our Solutions
</span>
<h2 className="text-5xl font-black block mb-2 bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent transition-transform duration-300 hover:scale-105 origin-left cursor-pointer">
  Elevate Your Business with Innovative <br/> IT System Integration by Binary Global.
</h2>
      </div>

      {/* Solutions Navigation Selector Tabs */}
      <div className="flex flex-wrap gap-3 my-[40px]">
        {solutionsNavbar.map((solutionName) => {
          const isActive = activeSolution.toLowerCase() === solutionName.toLowerCase();
          const href = `?solution=${encodeURIComponent(solutionName)}`;

          return (
            <Link
              key={solutionName}
              href={href}
              scroll={false}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm border ${
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

      {/* Dynamic Header Box for Active Solution Context */}    
      <div className="mb-[40px] rounded-2xl bg-white">
      <span className="text-xl font-black uppercase tracking-widest block mb-2 bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
          {currentSolution.title}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-[#004785] mb-3 leading-snug transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
          {currentSolution.tagline}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
          {currentSolution.description}
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSolution.components.map((component) => (
          <div 
            key={component.id}  
            className="group flex flex-col justify-between rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:bg-gradient-to-b hover:from-zinc-950 hover:to-black transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-xl h-full"
          >
            <div className="flex flex-col">
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-gray-50 border-b border-gray-100 overflow-hidden">
                <Image
                  src={component.imageUrl}
                  alt={component.imageAlt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-7xl) 33vw, 100vw"
                  unoptimized={component.imageUrl.startsWith('http')}
                />
              </div>

              {/* Text Info Container */}
              <div className="p-6 flex flex-col space-y-3">
                <h4 className="text-base font-bold text-gray-900 tracking-tight leading-snug group-hover:text-white transition-colors duration-300 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
                  {component.title}
                </h4>

                <p className="text-gray-500 text-[13px] leading-relaxed font-normal group-hover:text-zinc-300 transition-colors duration-300 transition-transform duration-300 hover:scale-[1.03] origin-left cursor-pointer">
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