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
            className="w-10 h-10 object-contain transition-all duration-300" 
          />
        ),
        titleLine1: "Enterprise Wireless",
        titleLine2: "& Wi-Fi 7",
        desc: "High-performance enterprise wireless powered by Wi-Fi 6E and Wi-Fi 7, enabling secure, scalable connectivity."
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgwihigN5CteLmQlIbPvRg8FWv9M-ViWRVVKifdbw2Q&s=10"
            alt="icon" 
            className="w-10 h-10 object-contain transition-all duration-300" 
          />
        ),        
        titleLine1: "Unified",
        titleLine2: "Communications",
        desc: "Collaboration solutions facilitating seamless communication and teamwork across teams, departments, and global locations."
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLkD3TXUhHLjt1yaRO3xe4jcz_wxrAVQcAD34ibz_j48Wuk-4p_Y1FoQg&s=10"
            alt="icon" 
            className="w-10 h-10 object-contain transition-all duration-300" 
          />
        ),        
        titleLine1: "Campus, Branch",
        titleLine2: "& WAN Networking",
        desc: "Resilient data layouts optimized with custom cooling frameworks and dynamic automated failover power routes."
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj69bDZ5csWT-GFBne1kGU0h9TvGuO3vJIrWbTRIuAIg&s=10"
            alt="icon" 
            className="w-10 h-10 object-contain transition-all duration-300" 
          />
        ),             
        titleLine1: "Network as",
        titleLine2: "a Service (NaaS)",
        desc: "Simplify your network management with adaptive subscription services to reduce upfront costs and enhance operations."
      },
      {
        icon: (
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde-srNJ5pFTa21OLgjpwe4pMmEUtAhC1OOKd59QAa5Q&s=10"
            alt="icon" 
            className="w-10 h-10 object-contain transition-all duration-300" 
          />
        ),             
        titleLine1: "Industrial &",
        titleLine2: "Enterprise IoT",
        desc: "Unlock real-time operational value with automated intelligence edge sensors and secure workspace connectivity."
      }
    ]
  },
  cloud: {
    tagline: "Scale rapidly without physical boundaries. Deploy application microservices seamlessly across dynamic geographical compute nodes.",
    cards: [
      {
        icon: <Cloud size={40} strokeWidth={1.2} />,
        titleLine1: "Network as",
        titleLine2: "a Service (NaaS)",
        desc: "Simplify your network management with cloud infrastructure to reduce costs and enhance resource efficiency."
      },
      {
        icon: <Database size={40} strokeWidth={1.2} />,
        titleLine1: "Distributed",
        titleLine2: "Databases",
        desc: "Scale storage capacity with high-availability relational databases configured across diverse global latency zones."
      },
      {
        icon: <Cpu size={40} strokeWidth={1.2} />,
        titleLine1: "Serverless",
        titleLine2: "Scale Engines",
        desc: "Cut idle baseline architecture billing loops with event-driven actions triggered strictly on runtime request demand."
      },
      {
        icon: <Share2 size={40} strokeWidth={1.2} />,
        titleLine1: "Secure Data",
        titleLine2: "Migration Layers",
        desc: "Secure end-to-end data pipeline operations designed to transition heavy core assets to the cloud framework."
      },
      {
        icon: <Layers size={40} strokeWidth={1.2} />,
        titleLine1: "Containerized",
        titleLine2: "Architectures",
        desc: "Streamline systemic logic updates utilizing modern microservices deployments powered by Kubernetes orchestrations."
      }
    ]
  },
  cybersecurity: {
    tagline: "Protecting your digital assets 24/7/365 with predictive system scans, active network perimeters, and zero-trust identity gates.",
    cards: [
      {
        icon: <Shield size={40} strokeWidth={1.2} />,
        titleLine1: "Zero-Trust",
        titleLine2: "Frameworks",
        desc: "Assume breach status at all development stages. Enforce continuous multi-factor authorization checks."
      },
      {
        icon: <Key size={40} strokeWidth={1.2} />,
        titleLine1: "IAM Identity",
        titleLine2: "Access Gates",
        desc: "Control resource visibility with dynamic role assignment permissions and behavior-based profile checks."
      },
      {
        icon: <Terminal size={40} strokeWidth={1.2} />,
        titleLine1: "SOC Threat",
        titleLine2: "Response Systems",
        desc: "Continuous automated data log ingestion routines matched with real-time defensive infrastructure containment."
      },
      {
        icon: <Lock size={40} strokeWidth={1.2} />,
        titleLine1: "Next-Gen",
        titleLine2: "Firewall Routing",
        desc: "Smart traffic monitoring checking structures deeper than headers to isolate emerging intrusion vectors."
      },
      {
        icon: <Eye size={40} strokeWidth={1.2} />,
        titleLine1: "Vulnerability",
        titleLine2: "Scanning Arrays",
        desc: "Uncover configuration oversights, backdoors, and unpatched server cluster nodes before malicious vectors do."
      }
    ]
  },
  dataManagement: {
    tagline: "Turn raw storage arrays into actionable business intelligence. Cleanse operational inputs to discover analytics signals.",
    cards: [
      {
        icon: <Database size={40} strokeWidth={1.2} />,
        titleLine1: "Enterprise Data",
        titleLine2: "Warehousing",
        desc: "Consolidate diverse application operational streams into a highly optimized data query pool for dashboard metrics."
      },
      {
        icon: <RefreshCw size={40} strokeWidth={1.2} />,
        titleLine1: "Automated ETL",
        titleLine2: "Data Pipelines",
        desc: "Extract, transform, and load processing routines that clean and standardize incoming server database arrays."
      },
      {
        icon: <HardDriveDownload size={40} strokeWidth={1.2} />,
        titleLine1: "Continuous Block",
        titleLine2: "Disaster Recovery",
        desc: "Real-time storage cluster replication strategies safeguarding infrastructure data against data center loss."
      },
      {
        icon: <BarChart3 size={40} strokeWidth={1.2} />,
        titleLine1: "Predictive ML",
        titleLine2: "Analytics Modules",
        desc: "Model ongoing operations behavior patterns and critical asset lifecycles with custom trend forecasting engines."
      },
      {
        icon: <Blocks size={40} strokeWidth={1.2} />,
        titleLine1: "Automated Meta",
        titleLine2: "Catalog Systems",
        desc: "Index nested data files automatically to maintain accessible structural lookup directories over storage nodes."
      }
    ]
  }
};

type CategoryKey = keyof typeof categoryData;

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('SmartInfrastructure');

  return (
    <>
      {/* CSS Keyframes matching Whyus entrance presentation flow */}
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

      {/* Main Container - Locked strictly to h-[600px] matching WhyUs & Hero */}
      <section className="relative h-[600px] w-full overflow-hidden bg-[#020617] flex flex-col justify-center">
        
        {/* Background Video aligned precisely like Whyus */}
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

        {/* Content wrapper matching WhyUs structure inside the 600px footprint */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-between py-6 h-full">
          
          {/* Top Section: Header Title + Category Toggles + Active Tagline Descriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start mt-4">
            
            {/* Left Column: Interactive Title Text & Tab Selection Row */}
            <div className="group/hero cursor-default select-none animate-present-slow flex flex-col gap-4" style={{ animationDelay: '0s' }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-tight origin-left transition-transform duration-700 ease-out group-hover/hero:scale-105">
                Our Advanced
                <span className="font-bold text-cyan-300 block lg:inline transition-colors duration-500 group-hover/hero:text-cyan-400"> Technology Solutions</span>
              </h1>
              
              {/* Clean Nav Buttons Styled for Dark Theme context */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest font-bold pt-1">
                {(Object.keys(categoryData) as CategoryKey[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`transition-all duration-300 border-b-2 pb-1 focus:outline-none ${
                      selectedCategory === cat
                        ? 'text-cyan-300 border-cyan-300'
                        : 'text-zinc-400 border-transparent hover:text-white'
                    }`}
                  >
                    {cat === 'SmartInfrastructure' && 'Infrastructure'}
                    {cat === 'cloud' && 'Cloud'}
                    {cat === 'dataManagement' && 'Data Tech'}
                    {cat === 'cybersecurity' && 'Cyber Defense'}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Column: Dynamic Narrative Tagline changes according to category */}
            <div className="flex flex-col items-start justify-center h-full group/desc animate-present-slow" style={{ animationDelay: '0.4s' }}>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-xl origin-left transition-transform duration-700 ease-out group-hover/desc:scale-[1.02]">
                {categoryData[selectedCategory].tagline}
              </p>
            </div> 
          </div>

          {/* Bottom Section: 3-Column Features Bento Grid matching the visual language exactly */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 border-t border-white/20 pt-6 mb-4">
            {categoryData[selectedCategory].cards.map((item, index) => (
              <div 
                key={index} 
                className="col-span-1 flex flex-col items-start group p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent hover:bg-none hover:bg-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden animate-present-slow"
                style={{ animationDelay: `${0.6 + index * 0.12}s` }}
              >
                {/* Icon Container: Micro-scales and switches context color */}
                <div className="mb-3 text-white group-hover:text-[#041f33] group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.icon}
                </div>
                
                {/* Feature Title: Zooming text elements */}
                <h3 className="text-sm font-bold tracking-widest uppercase mb-1 text-cyan-300 group-hover:text-cyan-600 leading-tight transition-all duration-300 group-hover:scale-105 origin-left">
                  {item.titleLine1} <span className="font-normal text-white group-hover:text-zinc-900"><br />{item.titleLine2}</span>
                </h3>
                
                {/* Feature Subtext */}
                <p className="text-zinc-300 group-hover:text-zinc-600 text-[10px] md:text-[11px] leading-normal max-w-sm transition-all duration-300 group-hover:scale-[1.02] origin-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Solutions;