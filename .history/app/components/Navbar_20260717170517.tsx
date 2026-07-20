'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react'; // 👈 Imported Search icon
import Hero from './Hero';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); // Tracks mobile menu toggle state

  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#Services' },
    { name: 'Industries', href: '#Industries' },
    { name: 'Financing', href: '#Financing' },
    { name: 'Resources', href: '#Resources' },
    { name: 'About Us', href: '#About Us' },
    { name: 'Contact Us', href: '#Contact Us' }
  ];

  const handleSearchClick = () => {
    console.log("Search clicked!");
    // Add your search functionality or modal logic here
  };

  return (
    <div>
      <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8">
        {/* --- FLOATING CAPSULE CONTAINER --- */}
        <header className="bg-[#18181b] border border-zinc-800/50 rounded-full h-20s sm:h-25 py-2 px-3 sm:px-6 flex items-center justify-between w-full max-w-7xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative">
          
          {/* Left Side: Logo Brand Asset */}
          <a 
            href="#" 
            className="flex items-center justify-center hover:scale-105 transition-transform duration-200 shrink-0 overflow-hidden"
          >
            <Image 
              src="/logo/binarylogo.png"  
              alt="Binary Global Logo"
              width={140}                
              height={60}
              className="w-[100px] sm:w-[120px] lg:w-[140px] h-auto object-contain"
              priority                  
            />
          </a>

          {/* Center: Desktop Navigation Links + Search Icon (Hidden on mobile/tablet) */}
          <nav className="hidden lg:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-2 rounded-full text-[11px] sm:text-xs xl:text-sm font-medium text-white hover:text-gray-900 transition-colors duration-300 whitespace-nowrap"
                onMouseEnter={() => setActiveTab(item.name)}
                onMouseLeave={() => setActiveTab('')}
              >
                {/* Animated Background Pill Indicator */}
                {activeTab === item.name && (
                  <span className="absolute inset-0 bg-white rounded-full -z-10 animate-fade-in transition-all duration-200" />
                )}
                {item.name}
              </a>
            ))}

            {/* --- DESKTOP SEARCH ICON --- */}
            <button
              onClick={handleSearchClick}
              className="relative p-2 ml-2 rounded-full text-white hover:text-gray-900 transition-colors duration-300 focus:outline-none"
              onMouseEnter={() => setActiveTab('search-icon')}
              onMouseLeave={() => setActiveTab('')}
              aria-label="Search"
            >
              {activeTab === 'search-icon' && (
                <span className="absolute inset-0 bg-white rounded-full -z-10 animate-fade-in transition-all duration-200" />
              )}
              <Search className="w-4 h-4 xl:w-5 xl:h-5" />
            </button>
          </nav>

          {/* Right Side: Hamburger Toggle Button (Only visible on mobile/tablet) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-zinc-400 hover:text-white p-2 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* --- MOBILE ACCORDION DRAWER OVERLAY --- */}
        {isOpen && (
          <div className="absolute top-24 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-[#18181b] border border-zinc-800/80 rounded-2xl p-6 shadow-2xl lg:hidden animate-fade-in z-50">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Auto-closes container when link is clicked
                  className="text-sm font-medium text-zinc-400 hover:text-white px-3 py-2 rounded-lg hover:bg-zinc-800/40 transition-all"
                >
                  {item.name}
                </a>
              ))}

              {/* --- MOBILE SEARCH OPTION --- */}
              <button
                onClick={() => {
                  handleSearchClick();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-3 text-sm font-medium text-zinc-400 hover:text-white px-3 py-2 rounded-lg hover:bg-zinc-800/40 transition-all text-left w-full"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </nav>
          </div>
        )}
      </div>
      <Hero/>
    </div>
  );
}