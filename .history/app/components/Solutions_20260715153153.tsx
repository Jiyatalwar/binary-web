'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            className="w-13 h-13 object-contain" 
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
            className="w-18 h-16 object-contain" 
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
            className="w-30 h-18 object-contain" 
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
            className="w-30 h-18 object-contain" 
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
            className="w-30 h-18 object-contain" 
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

  // Hero Section Dynamic Animation Configs
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 70, damping: 12 } 
    }
  };

  // Bento Grid Configuration Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="solutions" className="relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed">
      
      {/* Subtle background glow effect (soft blues and indigos) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />
    
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- 💡 MOTION-ENHANCED HERO / HEADING --- */}
        <motion.div 
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center flex flex-col items-center cursor-default select-none mb-12"
        >
          {/* Smooth Zoom Out/In Effect on Hover Area */}
          <motion.h2 
            variants={heroItemVariants}
            whileHover={{ scale: 1.06, skewX: -1.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1] mt-[-80px] bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent origin-center"
          >
            Our Solutions
          </motion.h2>
          
          <motion.p 
            variants={heroItemVariants}
            className="text-gray-900/60 text-sm md:text-xl max-w-2xl font-medium leading-relaxed"
          >
            We deliver state-of-the-art technological infrastructures to secure,<br/> automate, and accelerate operations across your entire global business.
          </motion.p>
        </motion.div>
       
        {/* --- INTERACTIVE CATEGORY LINKS --- */}
        <div className="border-t border-zinc-200/80 pt-10 pb-4 ">
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center mt-[-30px] mb-3"> 
            
            {(['SmartInfrastructure', 'cloud', 'dataManagement', 'cybersecurity'] as CategoryKey[]).map((cat) => {
              const labelMap: Record<CategoryKey, string> = {
                SmartInfrastructure: 'Smart Infrastructure',
                cloud: 'Cloud Solutions',
                dataManagement: 'Data Management',
                cybersecurity: 'Cyber Defense'
              };
              
              const isActive = selectedCategory === cat;
              
              return (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none relative pb-1 text-[#090979]"
                >
                  <span className={`bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent transition-all duration-300 ${isActive ? 'font-extrabold' : 'hover:from-[#00D4FF] hover:to-[#090979]'}`}>
                    {labelMap[cat]}
                  </span>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-600"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>          
        </div>

        {/* --- BENTO GRID CARDS --- */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory} 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-6 gap-6"
          >
            {categoryData[selectedCategory].cards.map((card, index) => {
              const gridClasses = card.isLarge  
                ? 'md:col-span-3 min-h-[200px]' 
                : 'md:col-span-2 min-h-[200px]';

              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -6,
                    scale: 1.015,
                    boxShadow: "0px 20px 40px rgba(4, 4, 60, 0.06)"
                  }}
                  className={`group flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#E6E6F1] to-transparent border border-[#04043C]/10 rounded-[2rem] p-8 relative overflow-hidden transition-colors duration-300 ${gridClasses}`}
                >
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
                    <h3 className="font-black text-xl bg-gradient-to-b from-[#07065B] via-[#090979] to-[#020024] bg-clip-text text-transparent group-hover:text-black transition-colors duration-300 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-900 text-sm md:text-base leading-relaxed font-small max-w-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      {card.description}
                    </p>
                  </div>

                  {/* Graphic Icon Render centered at the bottom of each card */}
                  <div className="relative z-10 flex justify-center items-center mt-4">
                    {card.isLarge ? (
                      <div className="relative flex items-center justify-center w-25 h-25 rounded-full bg-slate-50 border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                        <span className="absolute -top-1 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                        <span className="absolute -left-4 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        <span className="absolute -right-5 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      </div>
                    ) : (
                      <div className={`relative flex items-center justify-center w-30 h-20 rounded-2xl bg-slate-50 border border-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300 
                        ${card.graphicType === "tilt-left" ? "rotate-12 group-hover:rotate-0" : ""}
                        ${card.graphicType === "tilt-right" ? "-rotate-12 group-hover:rotate-0" : ""}
                        ${card.graphicType === "scale" ? "group-hover:scale-110" : ""}
                      `}>
                        {card.icon}
                      </div>
                    )}
                  </div>
                  
                  <span className="absolute inset-0 border-2 border-transparent rounded-[2rem] pointer-events-none transition-all duration-500 group-hover:border-[#04043C]/30" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Solutions;