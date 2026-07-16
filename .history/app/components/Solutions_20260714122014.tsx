import React, { useState } from 'react';
import { 
  Server, Shield, Cloud, Cpu, Network, Database, 
  ArrowUpRight, Monitor, Key, Terminal, Globe, HardDrive 
} from 'lucide-react';

// 1. Define distinct data content for each of our interactive links
const categoryData = {
  infrastructure: {
    tagline: "High-performance physical and virtual IT environments.",
    cards: [
      {
        icon: <Server className="w-6 h-6 text-blue-600" />,
        title: "ICT Infrastructure",
        description: "Scale with modern enterprise hardware configurations, structured cabling systems, and high-capacity server integration."
      },
      {
        icon: <Network className="w-6 h-6 text-indigo-600" />,
        title: "LAN/WAN Networking",
        description: "Robust, low-latency enterprise campus networking designed for seamless connection speeds and smart bandwidth allocation."
      },
      {
        icon: <HardDrive className="w-6 h-6 text-emerald-600" />,
        title: "Smart Data Centers",
        description: "Resilient data center designs featuring cooling optimizations, modular layouts, and failproof power backups."
      }
    ]
  },
  cloud: {
    tagline: "Scale rapidly without physical boundaries.",
    cards: [
      {
        icon: <Cloud className="w-6 h-6 text-cyan-600" />,
        title: "Multi-Cloud Architectures",
        description: "Integrate public platforms like AWS, Microsoft Azure, and private cloud layers into a single unified management pane."
      },
      {
        icon: <Database className="w-6 h-6 text-purple-600" />,
        title: "Serverless Computing",
        description: "Reduce overhead cost completely by deploying on-demand serverless actions that scale dynamically based on request load."
      },
      {
        icon: <Cpu className="w-6 h-6 text-amber-600" />,
        title: "Virtualization Layers",
        description: "Increase infrastructure efficiency with hypervisors and custom containers configured for hyper-threaded workloads."
      }
    ]
  },
  cybersecurity: {
    tagline: "Protecting your digital assets 24/7/365.",
    cards: [
      {
        icon: <Shield className="w-6 h-6 text-red-600" />,
        title: "Zero-Trust Frameworks",
        description: "Enforce multi-factor verification, device health checks, and micro-segmentation to restrict unauthorized access."
      },
      {
        icon: <Key className="w-6 h-6 text-orange-600" />,
        title: "IAM & Firewall Management",
        description: "Establish robust, granular privilege controls alongside intelligent firewalls capable of sniffing edge anomalies."
      },
      {
        icon: <Terminal className="w-6 h-6 text-rose-600" />,
        title: "SOC Operations",
        description: "Proactive threat detection, real-time log ingestion, and incident response runbooks led by expert security engineers."
      }
    ]
  }
};

type CategoryKey = keyof typeof categoryData;

const Solutions = () => {
  // Track which link category is currently selected
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('infrastructure');

  return (
    <section id="solutions" className="relative py-32 bg-white text-zinc-900 overflow-hidden">
      
      {/* Soft Light Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HERO / HEADING STYLE --- */}
        <div className="max-w-4xl mb-12 text-left">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            Our Enterprise <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
              Solutions Portfolio
            </span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            We deliver state-of-the-art technological infrastructures to secure, automate, and accelerate operations across your entire global business lifecycle.
          </p>
        </div>

        {/* --- CALL TO ACTION BUTTONS --- */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a 
            href="#Contact Us" 
            className="bg-black text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-zinc-800 transition-all flex items-center gap-2 group shadow-lg shadow-black/10"
          >
            Consult Our Experts
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="#Services" 
            className="bg-zinc-100 border border-zinc-200 text-zinc-700 font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-zinc-200 transition-all"
          >
            Explore Services
          </a>
        </div>

        {/* --- INTERACTIVE CATEGORY LINKS --- */}
        <div className="border-t border-zinc-200 pt-10 pb-4 mb-12">
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mr-2">
              Select Architecture:
            </span>
            <button 
              onClick={() => setSelectedCategory('infrastructure')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'infrastructure' 
                  ? 'text-black border-b-2 border-blue-600 pb-1' 
                  : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              Infrastructure
            </button>
            <button 
              onClick={() => setSelectedCategory('cloud')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cloud' 
                  ? 'text-black border-b-2 border-cyan-600 pb-1' 
                  : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              Cloud Capabilities
            </button>
            <button 
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`text-lg md:text-xl font-bold transition-all duration-300 focus:outline-none ${
                selectedCategory === 'cybersecurity' 
                  ? 'text-black border-b-2 border-red-600 pb-1' 
                  : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              Cyber Security
            </button>
          </div>
          {/* Active Tagline description under current link selection */}
          <p className="text-zinc-500 text-sm mt-3 animate-fade-in font-medium italic">
            → {categoryData[selectedCategory].tagline}
          </p>
        </div>

        {/* --- SOLUTIONS GRID CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {categoryData[selectedCategory].cards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-zinc-200/80 p-8 rounded-2xl hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle background glow card gradient effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-t from-zinc-100/50 via-zinc-50/0 to-zinc-50/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6 p-3.5 bg-zinc-50 border border-zinc-100 w-fit rounded-xl group-hover:bg-zinc-100 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-800 group-hover:text-black transition-colors">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;