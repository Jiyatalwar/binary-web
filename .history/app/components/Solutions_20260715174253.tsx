'use client';
import React, { useState } from 'react';
import { 
  Server, Shield, Cloud, Cpu, Network, Database, 
  Key, Terminal, HardDrive, Eye, Lock, Globe, Share2, Layers,
  FileSpreadsheet, HardDriveDownload, BarChart3, RefreshCw, Blocks
} from 'lucide-react';

const categoryData = {
  SmartInfrastructure: {
    tagline: "We deliver state-of-the-art technological infrastructures to secure, automate, and accelerate operations across your entire global business.",
    cards: [
      { 
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeT8Owd0PBpNIArMz3J4gXu2NBUxq6TW4adqluYYX-rA&s=10"
            alt="icon" 
            className="w-13 h-13 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),
        title: "Enterprise Wireless & Wi-Fi 6E / Wi-Fi 7 Solutions",
        description: "High-performance enterprise wireless powered by Wi-Fi 6E and Wi-Fi 7, enabling secure, scalable, and AI-ready connectivity for modern digital enterprises.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgwihigN5CteLmQlIbPvRg8FWv9M-ViWRVVKifdbw2Q&s=10"
            alt="icon" 
            className="w-18 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),        
        title: "Enterprise Collaboration & Unified Communications",
        description: "Collaboration is vital in today's interconnected world. Binary Global's Collaboration Solutions facilitate seamless communication and teamwork across teams, departments, and locations. ",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLkD3TXUhHLjt1yaRO3xe4jcz_wxrAVQcAD34ibz_j48Wuk-4p_Y1FoQg&s=10"
            alt="icon" 
            className="w-30 h-18 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),        
        title: "Campus, Branch & WAN Networking",
        description: "Resilient data layouts optimized with custom cooling and automated failover power.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj69bDZ5csWT-GFBne1kGU0h9TvGuO3vJIrWbTRIuAIg&s=10"
            alt="icon" 
            className="w-30 h-18 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),             
        title: "Network as a Service (NaaS)",
        description: "Simplify your network management with Network as a Service. Take advantage of this solution to reduce costs and enhance efficiency in your operations.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde-srNJ5pFTa21OLgjpwe4pMmEUtAhC1OOKd59QAa5Q&s=10"
            alt="icon" 
            className="w-30 h-18 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),             
        title: "Industrial & Enterprise IoT Solutions",
        description: "Unlock IoT Potential with Our Advanced Solutions. Enhance Business Efficiency and Innovation with Connectivity.",
        isLarge: false,
        graphicType: "scale"
      }
    ]
  },
  cloud: {
    tagline: "Scale rapidly without physical boundaries.",
    cards: [
      {
        icon: <Cloud className="w-8 h-8 text-cyan-600" />,
        title: "Network as a Service (NaaS)",
        description: "Simplify your network management with Network as a Service. Take advantage of this solution to reduce costs and enhance efficiency in your operations.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Database className="w-8 h-8 text-purple-600" />,
        title: "Distributed Databases",
        description: "Scale storage with high-availability relational databases configured across diverse global zones to guarantee minimal latency.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <Cpu className="w-6 h-6 text-amber-600" />,
        title: "Serverless Scale",
        description: "Cut idle billing with event-driven actions triggered strictly on request demand.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Share2 className="w-6 h-6 text-indigo-600" />,
        title: "Data Migration",
        description: "Secure data pipelines designed to transition assets to the cloud without business interruption.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Layers className="w-6 h-6 text-emerald-600" />,
        title: "Containerization",
        description: "Streamline updates utilizing microservices architectures powered by Kubernetes layers.",
        isLarge: false,
        graphicType: "scale"
      }
    ]
  },
  cybersecurity: {
    tagline: "Protecting your digital assets 24/7/365.",
    cards: [
      {
        icon: <Shield className="w-8 h-8 text-red-600" />,
        title: "Zero-Trust Frameworks",
        description: "Assume breach at all stages. Enforce continuous multi-factor posture checks, strict device compliance, and granular data isolation rules.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Key className="w-8 h-8 text-orange-600" />,
        title: "IAM Identity Gates",
        description: "Control exactly who gets access to what with highly dynamic role assignment, session key revocation, and behavior-based checks.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <Terminal className="w-6 h-6 text-rose-600" />,
        title: "SOC Threat Response",
        description: "Continuous log ingestion matched with real-time response mechanisms.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Lock className="w-6 h-6 text-blue-600" />,
        title: "Next-Gen Firewall",
        description: "Smart traffic monitoring checking patterns deeper than headers to prevent complex intrusion vectors.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Eye className="w-6 h-6 text-purple-600" />,
        title: "Vulnerability Scanning",
        description: "Uncover backdoors, unpatched nodes, and configuration oversights before threat actors do.",
        isLarge: false,
        graphicType: "scale"
      }
    ]
  },
  dataManagement: {
    tagline: "Turn raw storage into actionable intelligence.",
    cards: [
      {
        icon: <Database className="w-8 h-8 text-emerald-600" />,
        title: "Enterprise Data Warehousing",
        description: "Consolidate diverse operational streams into a highly optimized query pool for real-time dashboard analytics.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <RefreshCw className="w-8 h-8 text-teal-600 animate-[spin_10s_linear_infinite]" />,
        title: "Automated ETL Pipelines",
        description: "Extract, transform, and load processing routines that clean and standardize incoming database inputs on the fly.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <HardDriveDownload className="w-6 h-6 text-indigo-600" />,
        title: "Disaster Recovery",
        description: "Continuous block-level replication safeguarding data states against localized center loss.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <BarChart3 className="w-6 h-6 text-violet-600" />,
        title: "Predictive Analytics",
        description: "Model behavior patterns and asset lifecycles with customized ML forecasting engines.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Blocks className="w-6 h-6 text-amber-600" />,
        title: "Metadata Cataloging",
        description: "Index files and logs automatically to maintain structural search indexes across storage systems.",
        isLarge: false,
        graphicType: "scale"
      }
    ]
  }
};

type CategoryKey = keyof typeof categoryData;

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('SmartInfrastructure');

  return (
    <>
      {/* CSS Keyframes handling the presentation entrance flow exactly matching Whyus */}
      <style>{`
        @keyframes slowPresentation {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-present-slow {
          animation: slowPresentation 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* Main Section: Locked height to h-[600px] matching Whyus layout */}
      <section id="solutions" className="relative h-[600px] w-full overflow-hidden bg-[#020617] flex flex-col justify-center">
        
        {/* Background Video Component matching Whyus layout footprint */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none z-0"
        >
          <source 
            src="vedioes/vecteezy_business-button-24-hours-service-online-netcom-web-icon_1807827.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Content wrapper aligned strictly within the 600px box */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-between py-6 h-full">
          
          {/* Top Section: Header, Tabs and Intro Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mt-4">
            
            {/* Left Column: Title and Category Navigation Tabs */}
            <div className="group/hero cursor-default select-none animate-present-slow" style={{ animationDelay: '0s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-tight origin-left transition-transform duration-700 ease-out group-hover/hero:scale-105 mb-3">
                Our Advanced
                <span className="font-bold text-cyan-300 block lg:inline transition-colors duration-500 group-hover/hero:text-cyan-400"> Solutions</span>
              </h2>
              
              {/* Category Toggles fitted cleanly in the header area */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-sans uppercase tracking-widest font-bold">
                <button 
                  onClick={() => setSelectedCategory('SmartInfrastructure')}
                  className={`pb-1 transition-all focus:outline-none border-b-2 ${selectedCategory === 'SmartInfrastructure' ? 'text-cyan-300 border-cyan-300' : 'text-zinc-400 border-transparent hover:text-white'}`}
                >
                  Infrastructure
                </button>
                <button 
                  onClick={() => setSelectedCategory('cloud')}
                  className={`pb-1 transition-all focus:outline-none border-b-2 ${selectedCategory === 'cloud' ? 'text-cyan-300 border-cyan-300' : 'text-zinc-400 border-transparent hover:text-white'}`}
                >
                  Cloud
                </button>
                <button 
                  onClick={() => setSelectedCategory('dataManagement')}
                  className={`pb-1 transition-all focus:outline-none border-b-2 ${selectedCategory === 'dataManagement' ? 'text-cyan-300 border-cyan-300' : 'text-zinc-400 border-transparent hover:text-white'}`}
                >
                  Data Tech
                </button>
                <button 
                  onClick={() => setSelectedCategory('cybersecurity')}
                  className={`pb-1 transition-all focus:outline-none border-b-2 ${selectedCategory === 'cybersecurity' ? 'text-cyan-300 border-cyan-300' : 'text-zinc-400 border-transparent hover:text-white'}`}
                >
                  Cyber Defense
                </button>
              </div>
            </div>
            
            {/* Right Column: Narrative Dynamic Info Text */}
            <div className="flex flex-col items-start justify-center h-full group/desc animate-present-slow" style={{ animationDelay: '0.3s' }}>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-xl origin-left transition-transform duration-700 ease-out group-hover/desc:scale-[1.02]">
                {categoryData[selectedCategory].tagline}
              </p>
            </div> 
          </div>

          {/* Bottom Section: Original Bento Grid layout wrapped inside Whyus visual design */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 border-t border-white/20 pt-6 mb-4">
            {categoryData[selectedCategory].cards.map((card, index) => {
              const gridClasses = card.isLarge  
                ? 'col-span-2 md:col-span-3' 
                : 'col-span-2 md:col-span-2';

              return (
                <div 
                  key={index}
                  className={`group flex flex-col justify-between items-center text-center p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:bg-none hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden relative animate-present-slow ${gridClasses}`}
                  style={{ animationDelay: `${0.5 + index * 0.12}s` }}
                >
                  
                  {/* Visual Graphic Overlays */}
                  {card.graphicType === "grid" && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#fff_70%,transparent_100%)] opacity-5 group-hover:opacity-0 pointer-events-none" />
                  )}
                  {card.graphicType === "rings" && (
                    <>
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-white/5 rounded-full group-hover:border-zinc-200/40 pointer-events-none" />
                      <div className="absolute -bottom-16 -right-16 w-44 h-44 border border-white/5 rounded-full group-hover:border-zinc-200/40 pointer-events-none" />
                    </>
                  )}

                  {/* Card Main Text Content */}
                  <div className="relative z-10 flex flex-col items-center w-full">
                    <h3 className="text-sm font-bold tracking-widest uppercase mb-1 text-cyan-300 group-hover:text-cyan-600 leading-tight transition-all duration-300 group-hover:scale-105 origin-center">
                      {card.title}
                    </h3>
                    <p className="text-zinc-300 group-hover:text-zinc-600 text-[10px] md:text-[11px] leading-normal max-w-sm transition-all duration-300 group-hover:scale-[1.02] origin-center">
                      {card.description}
                    </p>
                  </div>

                  {/* Graphic Icon container centered at the bottom */}
                  <div className="relative z-10 flex justify-center items-center mt-3 mix-blend-lighten group-hover:mix-blend-normal">
                    {card.isLarge ? (
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-white/10 group-hover:bg-slate-50 group-hover:border-slate-100 transition-all duration-300">
                        {card.icon}
                        <span className="absolute -top-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                      </div>
                    ) : (
                      <div className={`relative flex items-center justify-center w-20 h-12 rounded-xl bg-slate-900 border border-white/10 group-hover:bg-slate-50 group-hover:border-slate-100 transition-all duration-300 
                        ${card.graphicType === "tilt-left" ? "rotate-6 group-hover:rotate-0" : ""}
                        ${card.graphicType === "tilt-right" ? "-rotate-6 group-hover:rotate-0" : ""}
                        ${card.graphicType === "scale" ? "group-hover:scale-105" : ""}
                      `}>
                        {card.icon}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default Solutions;