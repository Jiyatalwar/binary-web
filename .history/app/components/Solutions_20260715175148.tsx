'use client';
import React, { useState } from 'react';
import { 
  Server, Shield, Cloud, Cpu, Network, Database, 
  Key, Terminal, HardDrive, Eye, Lock, Globe, Share2, Layers,
  FileSpreadsheet, HardDriveDownload, BarChart3, RefreshCw, Blocks
} from 'lucide-react';

const categoryData = {
  SmartInfrastructure: {
    tagline: "High-performance physical and virtual IT environments.",
    cards: [
      { 
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeT8Owd0PBpNIArMz3J4gXu2NBUxq6TW4adqluYYX-rA&s=10"
            alt="icon" 
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
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
            className="w-14 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
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
            className="w-20 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
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
            className="w-20 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
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
            className="w-20 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
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
        icon: <Cloud className="w-6 h-6 text-cyan-600" />,
        title: "Network as a Service (NaaS)",
        description: "Simplify your network management with Network as a Service. Take advantage of this solution to reduce costs and enhance efficiency in your operations.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Database className="w-6 h-6 text-purple-600" />,
        title: "Distributed Databases",
        description: "Scale storage with high-availability relational databases configured across diverse global zones to guarantee minimal latency.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <Cpu className="w-5 h-5 text-amber-600" />,
        title: "Serverless Scale",
        description: "Cut idle billing with event-driven actions triggered strictly on request demand.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Share2 className="w-5 h-5 text-indigo-600" />,
        title: "Data Migration",
        description: "Secure data pipelines designed to transition assets to the cloud without business interruption.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Layers className="w-5 h-5 text-emerald-600" />,
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
        icon: <Shield className="w-6 h-6 text-red-600" />,
        title: "Zero-Trust Frameworks",
        description: "Assume breach at all stages. Enforce continuous multi-factor posture checks, strict device compliance, and granular data isolation rules.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Key className="w-6 h-6 text-orange-600" />,
        title: "IAM Identity Gates",
        description: "Control exactly who gets access to what with highly dynamic role assignment, session key revocation, and behavior-based checks.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <Terminal className="w-5 h-5 text-rose-600" />,
        title: "SOC Threat Response",
        description: "Continuous log ingestion matched with real-time response mechanisms.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Lock className="w-5 h-5 text-blue-600" />,
        title: "Next-Gen Firewall",
        description: "Smart traffic monitoring checking patterns deeper than headers to prevent complex intrusion vectors.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Eye className="w-5 h-5 text-purple-600" />,
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
        icon: <Database className="w-6 h-6 text-emerald-600" />,
        title: "Enterprise Data Warehousing",
        description: "Consolidate diverse operational streams into a highly optimized query pool for real-time dashboard analytics.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <RefreshCw className="w-6 h-6 text-teal-600 animate-[spin_10s_linear_infinite]" />,
        title: "Automated ETL Pipelines",
        description: "Extract, transform, and load processing routines that clean and standardize incoming database inputs on the fly.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <HardDriveDownload className="w-5 h-5 text-indigo-600" />,
        title: "Disaster Recovery",
        description: "Continuous block-level replication safeguarding data states against localized center loss.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <BarChart3 className="w-5 h-5 text-violet-600" />,
        title: "Predictive Analytics",
        description: "Model behavior patterns and asset lifecycles with customized ML forecasting engines.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Blocks className="w-5 h-5 text-amber-600" />,
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
    <section 
      id="solutions" 
      className="relative h-[600px] w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center p-4" 
      style={{ backgroundImage: "url('')" }}
    >
      
      {/* Subtle background glow effect (soft blues and indigos) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
    
      <div className="max-w-6xl w-full mx-auto px-4 flex flex-col h-full justify-between py-4">
        
        {/* --- HERO / HEADING --- */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-2">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-1 leading-tight bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent">
              Our Solutions
          </h2>
          <p className="text-gray-900/60 text-xs md:text-sm max-w-xl font-medium leading-relaxed">
              We deliver state-of-the-art technological infrastructures to secure, automate, and accelerate operations across your entire global business.
          </p>
        </div>
        

        {/* --- INTERACTIVE CATEGORY LINKS (CENTERED) --- */}
        <div className="border-t border-zinc-200/80 pt-2 pb-2 mb-2">
          <div className="flex flex-wrap gap-x-6 gap-y-1 items-center justify-center"> 
            
            <button 
              onClick={() => setSelectedCategory('SmartInfrastructure')}
              className={`text-sm md:text-base font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'SmartInfrastructure' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-0.5' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent '
              }`}
            >
              Smart Infrastructure
            </button>
            
            <button 
              onClick={() => setSelectedCategory('cloud')}
              className={`text-sm md:text-base font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cloud' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-0.5' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent'
              }`}
            >
              Cloud Solutions
            </button>

            <button 
              onClick={() => setSelectedCategory('dataManagement')}
              className={`text-sm md:text-base font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'dataManagement' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-0.5' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent'
              }`}
            >
              Data Management
            </button>
            
            <button 
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`text-sm md:text-base font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cybersecurity' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-0.5' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent '
              }`}
            >
              Cyber Defense
            </button>
            
          </div>          
        </div>

        {/* --- BENTO GRID CARDS --- */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 transition-all duration-500 flex-1 items-stretch">
          {categoryData[selectedCategory].cards.map((card, index) => {
            const gridClasses = card.isLarge  
              ? 'col-span-2 md:col-span-3' 
              : 'col-span-2 md:col-span-2';

            return (
              <div 
                key={index}
                className={`group flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#E6E6F1] to-transparent border border-[#04043C]/20 rounded-[1.5rem] p-4 relative overflow-hidden hover:shadow-[0_10px_20px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-all duration-300 ${gridClasses}`}
              >
                
                {/* Visual Graphic Overlays */}
                {card.graphicType === "grid" && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e4e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />
                )}
                {card.graphicType === "rings" && (
                  <>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-zinc-100 rounded-full opacity-40 pointer-events-none" />
                    <div className="absolute -bottom-10 -right-10 w-44 h-44 border border-zinc-100 rounded-full opacity-40 pointer-events-none" />
                  </>
                )}

                {/* Centered Card Text Content */}
                <div className="relative z-10 flex flex-col items-center mb-2">
                  <h3 className="font-bold text-sm md:text-base mb-1 bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent group-hover:text-black transition-colors line-clamp-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-900 text-xs leading-normal font-normal max-w-sm line-clamp-3 md:line-clamp-2">
                    {card.description}
                  </p>
                </div>

                {/* Graphic Icon Render centered at the bottom of each card */}
                <div className="relative z-10 flex justify-center items-center mt-auto">
                  {card.isLarge ? (
                    // Large Card Graphic Treatment
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)] group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                      <span className="absolute -top-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                      <span className="absolute -left-2 w-1 h-1 bg-indigo-400 rounded-full" />
                      <span className="absolute -right-3 w-1 h-1 bg-indigo-400 rounded-full" />
                    </div>
                  ) : (
                    // Small Card Graphic Treatment
                    <div className={`relative flex items-center justify-center w-20 h-12 rounded-xl bg-slate-50 border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-300 
                      ${card.graphicType === "tilt-left" ? "rotate-6 group-hover:rotate-0" : ""}
                      ${card.graphicType === "tilt-right" ? "-rotate-6 group-hover:rotate-0" : ""}
                      ${card.graphicType === "scale" ? "group-hover:scale-105" : ""}
                    `}>
                      {card.icon}
                    </div>
                  )}
                </div>
                <span className="absolute inset-0 border-2 border-transparent rounded-[1.5rem] pointer-events-none transition-all duration-500 group-hover:border-[#04043C] mix-blend-overlay" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Solutions;