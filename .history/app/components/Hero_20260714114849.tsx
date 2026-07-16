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
    <div className="relative h-[600px] w-full overflow-hidden text-white p-4 flex flex-col items-center justify-center text-center">
      
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/vedioes/hero-background2.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10" />

      {/* Content Container */}
      <div className="max-w-4xl px-4 mx-auto overflow-hidden">
        <div 
          className={`w-full flex flex-col items-center space-y-6 transition-all duration-500 ease-in-out transform ${
            isTransitioning 
              ? 'opacity-0 -translate-x-full' // Slide out to the left & fade out
              : 'opacity-100 translate-x-0'    // Slide in to center & fade in
          }`}
        >
          {/* Main Elegant Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight min-h-[120px] md:min-h-[160px]">
            {slides[currentSlide].title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
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