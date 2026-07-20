'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';
import Hero from './Hero';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
  };

  return (
    <div>
      <div className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8">
        {/* --- FLOATING CAPSULE CONTAINER --- */}
        <header className="bg-[#18181b]/70 rounded-full h-20 py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full max-w-7xl backdrop-blur-md relative border border-zinc-800/40">
          
          {/* --- RESPONSIVE LOGO WRAPPER --- */}
          <a 
            href="#" 
            className="flex items-center justify-center hover:scale-105 transition-transform duration-200 shrink-0 max-w-[30%] sm:max-w-[25%] md:max-w-none"
          >
            <div className="relative h-7 xs:h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto aspect-[13/3] flex items-center">
              <Image 
                src="/logo/Binary Logo White.png"  
                alt="Binary Global Logo"
                fill
                sizes="(max-width: 640px) 100px, (max-width: 1024px) 10px, 160px"
                className="object-contain"
                priority                  
              />
            </div>
          </a>

          {/* Center: Desktop Navigation Links + Search Icon */}
          <nav className="hidden lg:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 rounded-full text-[11px] xl:text-xs 2xl:text-sm font-medium text-white hover:text-gray-900 transition-colors duration-300 whitespace-nowrap z-10"
                onMouseEnter={() => setActiveTab(item.name)}
                onMouseLeave={() => setActiveTab('')}
              >
                {activeTab === item.name && (
                  <span className="absolute inset-0 bg-white rounded-full -z-10 transition-all duration-200" />
                )}
                {item.name}
              </a>
            ))}

            {/* --- DESKTOP SEARCH ICON --- */}
            <button
              onClick={handleSearchClick}
              className="relative p-2 ml-1 xl:ml-2 rounded-full text-white hover:text-gray-900 transition-colors duration-300 focus:outline-none z-10"
              onMouseEnter={() => setActiveTab('search-icon')}
              onMouseLeave={() => setActiveTab('')}
              aria-label="Search"
            >
              {activeTab === 'search-icon' && (
                <span className="absolute inset-0 bg-white rounded-full -z-10 transition-all duration-200" />
              )}
              <Search className="w-4 h-4 xl:w-5 xl:h-5" />
            </button>
          </nav>

          {/* Right Side: Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-zinc-400 hover:text-white p-2 focus:outline-none transition-colors rounded-full hover:bg-zinc-800/50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* --- MOBILE ACCORDION DRAWER OVERLAY --- */}
        {isOpen && (
          <div className="absolute top-24 left-4 right-4 bg-[#18181b] border border-zinc-800/80 rounded-2xl p-4 sm:p-6 shadow-2xl lg:hidden z-50 transition-all">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-zinc-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-zinc-800/60 transition-all"
                >
                  {item.name}
                </a>
              ))}

              <hr className="border-zinc-800 my-2" />

              {/* --- MOBILE SEARCH OPTION --- */}
              <button
                onClick={() => {
                  handleSearchClick();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-3 text-sm font-medium text-zinc-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-zinc-800/60 transition-all text-left w-full"
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