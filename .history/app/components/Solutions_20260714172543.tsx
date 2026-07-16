'use client';
import React, { useState } from 'react';
import { 
  Server, Shield, Cloud, Cpu, Network, Database, 
  Key, Terminal, HardDrive, Eye, Lock, Globe, Share2, Layers,
  FileSpreadsheet, HardDriveDownload, BarChart3, RefreshCw, Blocks
} from 'lucide-react';

// Added "dataManagement" to match the new tab selection with working Lucide icons
const categoryData = {
 SmartInfrastructure :{
    tagline: "High-performance physical and virtual IT environments.",
    cards: [
      { 
        icon: <Server className="w-8 h-8 text-blue-600" />, 
        title: "Enterprise Wireless & Wi-Fi 6E / Wi-Fi 7 Solutions",
        description: "High-performance enterprise wireless powered by Wi-Fi 6E and Wi-Fi 7, enabling secure, scalable, and AI-ready connectivity for modern digital enterprises.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Network className="w-8 h-8 text-indigo-600" />,
        title: "Enterprise Collaboration & Unified Communications",
        description: "High-capacity network distribution featuring enterprise campus fiber networking designed for ultra-low latency.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <HardDrive className="w-6 h-6 text-emerald-600" />,
        title: "Smart Data Centers",
        description: "Resilient data layouts optimized with custom cooling and automated failover power.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Layers className="w-6 h-6 text-purple-600" />,
        title: "Structured Cabling",
        description: "Organized, high-density copper and fiber architecture for long-term scalability.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Globe className="w-6 h-6 text-rose-600" />,
        title: "Edge Operations",
        description: "Deploy localized compute layers close to your core units to shave off round-trip delay.",
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
        title: "Multi-Cloud Architectures",
        description: "Unify management across multiple clouds—like AWS, Azure, and private clusters—under a single interface to reduce operational silos.",
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
    <section id="solutions" className="relative py-32  text-zinc-900 overflow-hidden">
      
      {/* Subtle background glow effect (soft blues and indigos) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HERO / HEADING --- */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] mt-[-100px] bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent">
              Our Solutions
          </h2>
          <p className="bg-gradient-to-r from-[#3c3b3f] via-[#605c3c] to-[#605c3c] bg-clip-text text-transparent text-lg md:text-xl max-w-2xl font-semibold leading-relaxed">
              We deliver state-of-the-art technological infrastructures to secure,<br/> automate, and accelerate operations across your entire global business lifecycle.
          </p>
        </div>

        {/* --- INTERACTIVE CATEGORY LINKS (CENTERED) --- */}
        <div className="border-t border-zinc-200/80 pt-10 pb-4 mb-12">
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center"> 
            
            <button 
              onClick={() => setSelectedCategory('SmartInfrastructure')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'SmartInfrastructure' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent hover:border-cyan-400'
              }`}
            >
              Smart Infrastructure
            </button>
            
            <button 
              onClick={() => setSelectedCategory('cloud')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cloud' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent hover:border-cyan-400'
              }`}
            >
              Cloud Solutions
            </button>

            {/* Added: New Data Management Link */}
            <button 
              onClick={() => setSelectedCategory('dataManagement')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'dataManagement' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent hover:border-cyan-400'
              }`}
            >
              Data Management
            </button>
            
            <button 
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cybersecurity' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent hover:border-cyan-400'
              }`}
            >
              Cyber Defense
            </button>
            
          </div>          
        </div>

        {/* --- BENTO GRID CARDS --- */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 transition-all duration-500 ">
          {categoryData[selectedCategory].cards.map((card, index) => {
            const gridClasses = card.isLarge 
              ? 'md:col-span-3 min-h-[340px]' 
              : 'md:col-span-2 min-h-[300px]';

            return (
              <div 
                key={index}
className={`group flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#E6E6F1] to-transparent  border-[#04043C]/20 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(4,4,60,0.05)] relative overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 ${gridClasses}`}              >
                
                {/* Visual Graphic Overlays */}
                {card.graphicType === "grid" && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e4e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
                )}
                {card.graphicType === "rings" && (
                  <>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-zinc-100 rounded-full opacity-60 pointer-events-none" />
                    <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-zinc-100 rounded-full opacity-60 pointer-events-none" />
                  </>
                )}

                {/* Centered Card Text Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-black transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light max-w-sm">
                    {card.description}
                  </p>
                </div>

                {/* Graphic Icon Render centered at the bottom of each card */}
                <div className="relative z-10 flex justify-center items-center">
                  {card.isLarge ? (
                    // Large Card Graphic Treatment
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] group-hover:scale-105 transition-transform duration-300 mt-[-150px]">
                      {card.icon}
                      <span className="absolute -top-1 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                      <span className="absolute -left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span className="absolute -right-5 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    </div>
                  ) : (
                    // Small Card Graphic Treatment
                    <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300 mt-[-150px]
                      ${card.graphicType === "tilt-left" ? "rotate-12 group-hover:rotate-0" : ""}
                      ${card.graphicType === "tilt-right" ? "-rotate-12 group-hover:rotate-0" : ""}
                      ${card.graphicType === "scale" ? "group-hover:scale-110" : ""}
                    `}>
                      {card.icon}
                    </div>
                  )}
                </div>
                <span className="absolute inset-0 border-2 border-transparent rounded-[2rem] pointer-events-none transition-all duration-500 group-hover:border-[#04043C] mix-blend-overlay" />
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Solutions;