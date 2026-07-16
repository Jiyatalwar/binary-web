'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';import { Layers, Target, HeartHandshake, Users, CloudCheck, Briefcase } from 'lucide-react';

// 💡 FIX: Moving variants OUTSIDE the component removes the red underline errors
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Whyus = () => {
  const features = [
    {
      icon: <Layers size={40} strokeWidth={1.2} />,
      titleLine1: "Converged",
      titleLine2: "Solutions",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Target size={40} strokeWidth={1.2} />,
      titleLine1: "Industry Vertical",
      titleLine2: "Focused",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <HeartHandshake size={40} strokeWidth={1.2} />,
      titleLine1: "Exceptional Customer",
      titleLine2: "Service",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Users size={40} strokeWidth={1.2} />,
      titleLine1: "Strong",
      titleLine2: "Partnerships",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <CloudCheck size={40} strokeWidth={1.2} />,
      titleLine1: "Cloud",
      titleLine2: "Confidence",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    },
    {
      icon: <Briefcase size={40} strokeWidth={1.2} />,
      titleLine1: "Skilled Project",
      titleLine2: "Management",
      desc: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."
    }
  ];

  return (
    <section 
      className="mt-[-80px] relative py-25 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" 
      style={{ backgroundImage: "url('https://img.magnific.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-67827.jpg?semt=ais_hybrid&w=740&q=80')" }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-0">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Block */}
          <motion.div variants={fadeInUpVariants} className="flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest uppercase text-white block mb-4">
              What We Do
            </span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight cursor-default origin-left"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Why Customers Choose
              <span className="font-bold text-cyan-300 block lg:inline"> Binary Global</span>
            </motion.h1>
          </motion.div>
          
          {/* Right Block */}
          <motion.div variants={fadeInUpVariants} className="flex flex-col items-start justify-center h-full pt-2 lg:pt-8">
            <motion.p 
              className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-xl cursor-default origin-left"
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              We Provide Technology Services with Innovative Strategies, Broad Vision, and a Drive for Success.
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </motion.p>
            <motion.button 
              className="border border-white text-white hover:bg-white hover:text-zinc-950 transition-colors duration-300 px-8 py-2.5 text-xs tracking-widest uppercase font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Button
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-10 border-t border-white pt-16 w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUpVariants}
              className="flex flex-col items-start group p-6 rounded-2xl bg-transparent hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl overflow-hidden"
            >
              <div className="mb-6 text-white group-hover:text-[#041f33] group-hover:scale-110 transition-all duration-300 origin-left">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold tracking-widest uppercase mb-3 text-cyan-300 group-hover:text-cyan-600 leading-tight transition-all duration-300 group-hover:scale-105 origin-left">
                {item.titleLine1} <span className="font-normal text-white group-hover:text-zinc-900"><br />{item.titleLine2}</span>
              </h3>
              
              <p className="text-zinc-400 group-hover:text-zinc-600 text-xs md:text-sm leading-relaxed max-w-sm transition-all duration-300 group-hover:scale-[1.02] origin-left">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Whyus;