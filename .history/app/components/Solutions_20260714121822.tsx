import React from 'react';
import { Server, Shield, Cloud, Cpu, Network, Database } from 'lucide-react';

const Solutions = () => {
  const solutionsList = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: "ICT Infrastructure",
      description: "Build a robust foundation with high-performance networking, servers, and structured cabling setups designed for scale."
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: "Cloud Capabilities",
      description: "Migrate smoothly, optimize hybrid cloud setups, and manage your assets safely across AWS, Azure, or private clouds."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Cyber Security",
      description: "Multi-layered defense, real-time threat monitoring, and zero-trust policies to safeguard your company data."
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: "Network Automation",
      description: "Streamline operations with smart, automated workflows that eliminate manual downtime and human errors."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Data Management",
      description: "Scalable enterprise storage solutions, disaster recovery planning, and seamless database migrations."
    },
    {
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
      title: "Smart Computing",
      description: "Upgrade your operations with customized edge computing and next-generation architecture tailored to your goals."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Enterprise <span className="text-blue-500">Solutions</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            We provide cutting-edge IT frameworks to help businesses drive efficiency, enhance security, and scale operations effortlessly.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsList.map((sol, index) => (
            <div 
              key={index}
              className="bg-white border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700/80 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-5 p-3 bg-zinc-800/40 w-fit rounded-xl group-hover:bg-zinc-800 transition-colors">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {sol.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {sol.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;