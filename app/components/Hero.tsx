import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    {
      title: "Transforming IT Infrastructure for Enterprise Growth",
      subtitle: "Empower your organization with next-generation networking, cloud-ready infrastructure, and secure connectivity solutions."
    },
    {
      title: "Intelligent Infrastructure for a Connected Enterprise",
      subtitle: "Unlock Cloud Potential with Infrastructure Designed for Speed, Scale, and Operational Excellence."
    },
    {
      title: "Secure. Detect. Respond. Cybersecurity Without Compromise.",
      subtitle: "Enable secure growth with intelligent cybersecurity solutions that protect critical infrastructure, data, and digital operations."
    },
     {
      title: "Data Management Solutions That Drive Enterprise Growth",
      subtitle: "Turn complex data into strategic insights with scalable data management, advanced analytics, and AI-driven automation services."
    },
     {
      title: "Cloud Transformation & Application Modernization Solutions",
      subtitle: "Empower Your Business with Agile Cloud Adoption, Application Modernization, and Scalable Innovation for the Cloud Era."
    },
     {
      title: "End-to-End Managed IT Services for Business Continuity and Growth",
      subtitle: "Enhance business performance with proactive IT management, infrastructure support, cybersecurity services, and 24×7 monitoring."
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
    <div className="relative min-h-[480px] sm:min-h-[900px] lg:h-[600px] w-full overflow-hidden text-white p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center">
      
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="vedioes/hero-background2.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="metadata"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10" />

      {/* Content Container */}
      <div className="max-w-4xl px-2 sm:px-4 mx-auto overflow-hidden">
        <div 
          className={`w-full flex flex-col items-center space-y-6 transition-all duration-500 ease-in-out transform ${
            isTransitioning 
              ? 'opacity-0 -translate-x-full' // Slide out to the left & fade out
              : 'opacity-100 translate-x-0'    // Slide in to center & fade in
          }`}
        >
          {/* Main Elegant Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight min-h-[96px] sm:min-h-[120px] md:min-h-[160px]">
            {slides[currentSlide].title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed px-2 sm:px-0">
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