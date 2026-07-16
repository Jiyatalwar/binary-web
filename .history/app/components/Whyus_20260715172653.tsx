import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    {
      title: "Transforming Your IT Landscape For The Future",
      subtitle: "Build the Backbone of Innovation with Our ICT Infrastructure Services. Ensure Seamless Connectivity and Optimized Performance."
    },
    {
      title: "Smart. Connected. Infrastructure",
      subtitle: "Unlock Cloud Potential with Our Smart Infrastructure. Accelerate Growth, Streamline Operations, and Stay Ahead of the Competition."
    },
    {
      title: "Protecting Your Digital World, One Byte At A Time",
      subtitle: "Empower Your Organization with Robust Cyber Defense. Get Multi-Layered Protection, Threat Detection, and Rapid Response."
    },
    {
      title: "Maximize Your Data's Value With Our Comprehensive Management Solutions",
      subtitle: "Harness Your Data’s Value with Our Intelligent Management Solution. Leverage Advanced Analytics and Automation to Drive Growth and Competitiveness."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Helper to handle smooth slide switching (used by both automatic loop and manual dot clicks)
  const goToSlide = (nextIndex: number) => {
    if (isTransitioning || nextIndex === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      setIsTransitioning(false);
    }, 500); // Matches the duration-500 transition speed
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      goToSlide(nextIndex);
    }, 10000); // Runs every 10 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]); // Updated dependency to track currentSlide changes safely

  return (
    /* Outer container locked exactly to h-[600px] */
    <div className="relative h-[600px] w-full overflow-hidden text-white flex flex-col items-center justify-center text-center">
      
      {/* Background Video (now constrained strictly to the outer wrapper's 600px height) */}
      <video 
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/vedioes/hero-background2.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content Container (Locked with a max-height and centered perfectly) */}
      <div className="w-full max-w-4xl px-6 mx-auto z-10">
        <div 
          className={`w-full flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out transform ${
            isTransitioning 
              ? 'opacity-0 -translate-x-12' // Softer, cleaner slide transition
              : 'opacity-100 translate-x-0'
          }`}
        >
          {/* 
            Main Elegant Title 
            Added a fixed/min height of 140px on mobile and 180px on desktop 
            to ensure that different title lengths do NOT push the subtitle down.
          */}
          <div className="flex items-center justify-center min-h-[140px] md:min-h-[180px] w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light leading-relaxed min-h-[80px]">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* --- NAVIGATION DOTS --- */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
              currentSlide === index 
                ? 'w-8 bg-white'       // Active slide: elongated active capsule
                : 'w-3 bg-white/40 hover:bg-white/70' // Inactive: standard circular dot
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;