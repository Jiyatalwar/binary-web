'use client';
import React, { useState } from 'react';
import { 
  Server, Shield, Cloud, Cpu, Network, Database, 
  Key, Terminal, HardDrive, Eye, Lock, Globe, Share2, Layers,
  FileSpreadsheet, HardDriveDownload, BarChart3, RefreshCw, Blocks, CheckCircle2
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
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),
        title: "Enterprise Wireless & Wi-Fi 7",
        description: "High-performance enterprise wireless architectures built on modern Wi-Fi 6E & 7 standards for seamless global workspaces.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgwihigN5CteLmQlIbPvRg8FWv9M-ViWRVVKifdbw2Q&s=10"
            alt="icon" 
            className="w-16 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),        
        title: "Enterprise Collaboration & UC",
        description: "Unified communication frameworks facilitating seamless cross-department team connectivity and global video workspaces.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLkD3TXUhHLjt1yaRO3xe4jcz_wxrAVQcAD34ibz_j48Wuk-4p_Y1FoQg&s=10"
            alt="icon" 
            className="w-24 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),        
        title: "Campus & WAN Networking",
        description: "Resilient software-defined wide area network topologies built around maximum edge node performance.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj69bDZ5csWT-GFBne1kGU0h9TvGuO3vJIrWbTRIuAIg&s=10"
            alt="icon" 
            className="w-24 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),             
        title: "Network as a Service (NaaS)",
        description: "On-demand network provisioning architectures ensuring highly scalable enterprise infrastructure layers.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde-srNJ5pFTa21OLgjpwe4pMmEUtAhC1OOKd59QAa5Q&s=10"
            alt="icon" 
            className="w-24 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ),             
        title: "Industrial Enterprise IoT",
        description: "Unlock operations visibility with smart connected sensor integrations and real-time environment edge systems.",
        isLarge: false,
        graphicType: "scale"
      },
      {
        icon: <Server className="w-6 h-6 text-blue-700" />,
        title: "Next-Gen Data Center",
        description: "Hyperconverged modular server storage structures provisioned for low-latency delivery clusters.",
        isLarge: false,
        graphicType: "grid"
      }
    ]
  },
  cloud: {
    tagline: "Scale rapidly without physical boundaries.",
    cards: [
      {
        icon: <Cloud className="w-7 h-7 text-cyan-600" />,
        title: "Cloud Infrastructure NaaS",
        description: "Migrate traditional perimeter dependencies into flexible, cloud-delivered connectivity profiles seamlessly.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Database className="w-7 h-7 text-purple-600" />,
        title: "Distributed Global Databases",
        description: "Low-latency database layouts synchronized uniformly across multi-region active clusters.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <Cpu className="w-6 h-6 text-amber-600" />,
        title: "Serverless Compute",
        description: "Event-driven runtime functions reducing persistent computing overhead and execution idle limits.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Share2 className="w-6 h-6 text-indigo-600" />,
        title: "Data Migration Engines",
        description: "Zero-downtime block replication routines moving high-volume datastores to hybrid platforms safely.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Layers className="w-6 h-6 text-emerald-600" />,
        title: "Kubernetes Orchestration",
        description: "Resilient container microservice patterns scaling application tasks dynamically per system workload load.",
        isLarge: false,
        graphicType: "scale"
      },
      {
        icon: <Globe className="w-6 h-6 text-blue-600" />,
        title: "Edge CDN Delivery",
        description: "Static content caching networks offering high Availability access layers closest to global consumers.",
        isLarge: false,
        graphicType: "grid"
      }
    ]
  },
  cybersecurity: {
    tagline: "Protecting your digital assets 24/7/365.",
    cards: [
      {
        icon: <Shield className="w-7 h-7 text-red-600" />,
        title: "Zero-Trust Architecture",
        description: "Enforce strict runtime validation context checking devices, identity paths, and payload tokens explicitly.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <Key className="w-7 h-7 text-orange-600" />,
        title: "Enterprise IAM Infrastructure",
        description: "Dynamic role access synchronization engine tying corporate identities to strict privilege boundaries.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <Terminal className="w-6 h-6 text-rose-600" />,
        title: "24/7 Managed SOC Systems",
        description: "Continuous log analytics monitoring internal networks to contain system exploits instantly.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <Lock className="w-6 h-6 text-blue-600" />,
        title: "Next-Gen Layer 7 Firewalls",
        description: "Deep packet inspection nodes inspecting nested payload strings rather than checking simple ports.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Eye className="w-6 h-6 text-purple-600" />,
        title: "Threat Surface Audits",
        description: "Automated perimeter maps pinpointing internal misconfigurations before actors find vector gaps.",
        isLarge: false,
        graphicType: "scale"
      },
      {
        icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
        title: "Compliance Management",
        description: "Real-time compliance validation dashboards matching controls to global strict industry frameworks.",
        isLarge: false,
        graphicType: "grid"
      }
    ]
  },
  dataManagement: {
    tagline: "Turn raw storage into actionable intelligence.",
    cards: [
      {
        icon: <Database className="w-7 h-7 text-emerald-600" />,
        title: "Enterprise Data Warehouses",
        description: "Unify messy disconnected system tables into standardized query pools built for fast analytical reporting.",
        isLarge: true,
        graphicType: "grid"
      },
      {
        icon: <RefreshCw className="w-7 h-7 text-teal-600 animate-[spin_12s_linear_infinite]" />,
        title: "Real-time ETL Operations",
        description: "Automated streaming pipelines grooming incoming live fields into transactional targets flawlessly.",
        isLarge: true,
        graphicType: "rings"
      },
      {
        icon: <HardDriveDownload className="w-6 h-6 text-indigo-600" />,
        title: "Automated Disaster Recovery",
        description: "Continuous snapshot replication profiles making business continuity configurations simple.",
        isLarge: false,
        graphicType: "tilt-left"
      },
      {
        icon: <BarChart3 className="w-6 h-6 text-violet-600" />,
        title: "Predictive Analysis Pipelines",
        description: "Machine learning engines evaluating historic enterprise files to surface optimal volume margins.",
        isLarge: false,
        graphicType: "tilt-right"
      },
      {
        icon: <Blocks className="w-6 h-6 text-amber-600" />,
        title: "Unified Metadata Lakes",
        description: "Elastic structural file indexing allowing teams to lookup relevant historical data records accurately.",
        isLarge: false,
        graphicType: "scale"
      },
      {
        icon: <FileSpreadsheet className="w-6 h-6 text-cyan-600" />,
        title: "Data Governance Engines",
        description: "Advanced classification scripts locating sensitive PII layers to restrict cross-app leakage.",
        isLarge: false,
        graphicType: "grid"
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
      className="relative h-[800px] w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center py-8 px-4 bg-slate-50" 
      style={{ backgroundImage: "url('')" }}
    >
      
      {/* Background glow structures */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[110px] -z-10" />
    
      <div className="max-w-6xl w-full mx-auto px-4 flex flex-col h-full justify-between">
        
        {/* --- HERO / HEADING --- */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center pt-2">
          <h2 className="mb-2 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent">
              Our Solutions
          </h2>
          <p className="text-gray-800 tracking-normal text-sm md:text-base max-w-2xl font-normal leading-relaxed">
            We deliver state-of-the-art technological infrastructures to secure,<br/> automate, and accelerate operations across your entire global business.
          </p>
        </div>

        {/* --- INTERACTIVE CATEGORY LINKS --- */}
        <div className="border-t border-zinc-200/80 pt-4 pb-2 my-2">
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-center justify-center"> 
            
            <button 
              onClick={() => setSelectedCategory('SmartInfrastructure')}
              className={`text-base md:text-lg font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'SmartInfrastructure' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent'
              }`}
            >
              Smart Infrastructure
            </button>
            
            <button 
              onClick={() => setSelectedCategory('cloud')}
              className={`text-base md:text-lg font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cloud' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent'
              }`}
            >
              Cloud Solutions
            </button>

            <button 
              onClick={() => setSelectedCategory('dataManagement')}
              className={`text-base md:text-lg font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'dataManagement' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent'
              }`}
            >
              Data Management
            </button>
            
            <button 
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`text-base md:text-lg font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cybersecurity' 
                  ? 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent border-b-2 border-cyan-600 pb-1' 
                  : 'bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent hover:from-[#00D4FF] hover:to-[#090979] border-b-2 border-transparent'
              }`}
            >
              Cyber Defense
            </button>
            
          </div>          
        </div>

        {/* --- BENTO GRID CARDS (6 CARDS DESIGN) --- */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 transition-all duration-500 flex-1 items-stretch mb-4">
          {categoryData[selectedCategory].cards.map((card, index) => {
            // Balanced layout spanning: Two 3-column cards on top, Four 1.5-column equivalent (or clean 2/3 distribution)
            // Having exactly 6 cards: 2 large cards (col-span-3 each = 6), 4 small cards (col-span-3 each on mobile, col-span-3/col-span-2 mix)
            // To ensure 6 elements scale cleanly: 2 large cards take 3-columns each. 4 remaining small cards take 3-columns each on mobile, 3-columns on desktop split perfectly.
            const gridClasses = card.isLarge  
              ? 'col-span-2 md:col-span-3 h-auto' 
              : 'col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 h-auto'; 
              
            // Alternative clean grid map strategy for 6 elements:
            // Let's use clean col-span-3 for large (half row), and col-span-3 for smalls so they pair evenly.
            // Or change to standard balanced grid layout:
            const standardGridClasses = card.isLarge 
              ? 'col-span-2 md:col-span-3' 
              : 'col-span-2 md:col-span-3 lg:col-span-3';

            return (
              <div 
                key={index}
                className={`group flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#E6E6F1] to-transparent border border-[#04043C]/20 rounded-[1.75rem] p-5 relative overflow-hidden hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 ${standardGridClasses}`}
              >
                
                {/* Visual Graphic Overlays */}
                {card.graphicType === "grid" && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e4e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
                )}
                {card.graphicType === "rings" && (
                  <>
                    <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-zinc-200/50 rounded-full opacity-40 pointer-events-none" />
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-zinc-200/50 rounded-full opacity-40 pointer-events-none" />
                  </>
                )}

                {/* Centered Card Text Content */}
                <div className="relative z-10 flex flex-col items-center w-full mb-3">
                  <h3 className="font-extrabold text-base md:text-lg mb-1.5 bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent group-hover:text-black transition-colors line-clamp-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-900 text-xs md:text-sm leading-relaxed font-normal max-w-md line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Graphic Icon Render centered at the bottom of each card */}
                <div className="relative z-10 flex justify-center items-center mt-auto pt-2">
                  {card.isLarge ? (
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                      <span className="absolute -top-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                      <span className="absolute -left-2 w-1 h-1 bg-indigo-400 rounded-full" />
                      <span className="absolute -right-3 w-1 h-1 bg-indigo-400 rounded-full" />
                    </div>
                  ) : (
                    <div className={`relative flex items-center justify-center w-24 h-12 rounded-xl bg-white border border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-300 
                      ${card.graphicType === "tilt-left" ? "rotate-6 group-hover:rotate-0" : ""}
                      ${card.graphicType === "tilt-right" ? "-rotate-6 group-hover:rotate-0" : ""}
                      ${card.graphicType === "scale" ? "group-hover:scale-105" : ""}
                    `}>
                      {card.icon}
                    </div>
                  )}
                </div>
                <span className="absolute inset-0 border-2 border-transparent rounded-[1.75rem] pointer-events-none transition-all duration-500 group-hover:border-[#04043C] mix-blend-overlay" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Solutions;