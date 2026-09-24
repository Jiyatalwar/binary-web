'use client';
// rechnages desgin
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Search, ChevronRight, ChevronDown } from 'lucide-react';
import Hero from './Hero';

// Solutions Data
const DEFAULT_SOLUTIONS_DATA = [
  {
    category: 'Smart Infrastructure',
    items: [
      'Campus, Branch & WAN Networking',
      'Enterprise Wireless & Wi-Fi 6/6E Solutions',
      'Data Center & Hybrid Infrastructure Build',
      'Enterprise Collaboration & Unified Communications',
      'Industrial & Enterprise IoT Solutions',
      'Network as a Service (NaaS)',
      'Software Defined Network (SDN)',
      'Hybrid Cloud Access',
      'Surveillance and Access Security',
    ],
  },
  {
    category: 'Cyber Defence',
    items: [
      'Network Security & Next-Gen Firewall',
      'Zero Trust Security (ZCTA/ZTNA)',
      'Endpoint Protection & EDR/MDR',
      'Cloud Security Posture Management',
    ],
  },
  {
    category: 'Data Management',
    items: [
      'Enterprise Storage & SAN Solutions',
      'Data Backup & Disaster Recovery',
      'Data Lifecycle & Archival',
    ],
  },
  {
    category: 'Cloud Solutions',
    items: [
      'Public & Private Cloud Migration',
      'Multi-Cloud Orchestration',
      'Cloud Cost Optimization',
    ],
  },
  {
    category: 'Artificial Intelligence',
    items: [
      'AI Infrastructure & GPU Clusters',
      'Enterprise Machine Learning Platforms',
      'Computer Vision & Analytics',
    ],
  },
];

// Services Data
const DEFAULT_SERVICES_DATA = [
  {
    category: 'Professional Services',
    items: [
      '24/7 Managed NOC & SOC',
      'Infrastructure Management',
      'Managed Cloud Services',
      'Managed Cyber Security',
    ],
  },
  {
    category: 'Managed Services',
    items: [
      'IT Consulting & Strategy',
      'Deployment & Integration',
      'System Audit & Assessment',
      'Migration Services',
    ],
  },
  {
    category: 'Strategic Technology Staffing',
    items: [
      'Annual Maintenance Contracts (AMC)',
      'SLA-based Technical Support',
      'Hardware Replacement Services',
    ],
  },
  {
    category: 'Support Services',
    items: [
      'Annual Maintenance Contracts (AMC)',
      'SLA-based Technical Support',
      'Hardware Replacement Services',
    ],
  },
  {
    category: 'Training Services',
    items: [
      'Annual Maintenance Contracts (AMC)',
      'SLA-based Technical Support',
      'Hardware Replacement Services',
    ],
  },
];

// Resources Data
const DEFAULT_RESOURCES_DATA = [
  {
    category: 'Blog',
    items: [
      'Whitepapers & Reports',
      'Case Studies',
      'Blogs & Articles',
      'E-Books & Guides',
    ],
  },
  {
    category: 'Press Release',
    items: [
      'Webinars & On-Demand Videos',
      'Upcoming Tech Events',
      'Press Releases',
    ],
  },
  {
    category: 'Customer Stories',
    items: [
      'Documentation & Guides',
      'Knowledge Base',
      'Community Forum',
    ],
  },
  {
    category: 'white papers',
    items: [
      'Documentation & Guides',
      'Knowledge Base',
      'Community Forum',
    ],
  },
];

const DEFAULT_BANNER_SLIDES = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-ksCkLI8HmI8Tb1h0TgN0RBLBxCudMkOPzj70lMamQ&s=10',
    title: 'Innovative Solutions Unveiled:',
    description: "Elevate Your Business Potential with Binary Global's Cutting-Edge Offerings for Enhanced Success",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aYbWNG6tERhAwnllxfzRd98HkQDS3nYmmoyZ1f5-rg&s=10',
    title: 'Next-Gen Cyber Security:',
    description: 'Protect your enterprise with robust Zero Trust architecture and proactive threat detection.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaavCV8nHcwr6ZegnAwcnPnZpxWpCqvI3TaMl5dNg-oA&s=10',
    title: 'Cloud & AI Acceleration:',
    description: 'Transform operations with scalable multi-cloud infrastructure and GPU-powered AI platforms.',
  },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [activeMegaMenuKey, setActiveMegaMenuKey] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Mobile Accordion States 
  const [mobileActiveMegaMenu, setMobileActiveMegaMenu] = useState<string | null>(null);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<number | null>(null);

  // CMS State Items 
  const [solutionsData, setSolutionsData] = useState(DEFAULT_SOLUTIONS_DATA);
  const [servicesData, setServicesData] = useState(DEFAULT_SERVICES_DATA);
  const [resourcesData, setResourcesData] = useState(DEFAULT_RESOURCES_DATA);
  const [bannerSlides, setBannerSlides] = useState(DEFAULT_BANNER_SLIDES);

  const [navLinks, setNavLinks] = useState([
    { name: 'Solutions', href: '/solutions', hasMegaMenu: true, key: 'solutions' },
    { name: 'Services', href: '/services', hasMegaMenu: true, key: 'services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Financing', href: '/financing' },
    { name: 'Resources', href: '/resources', hasMegaMenu: true, key: 'resources' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]);

  useEffect(() => {
    const loadNavbarData = () => {
      const savedNavLinks = localStorage.getItem('admin_navbar_links');
      const savedSlides = localStorage.getItem('admin_navbar_slides');
      const savedSolutions = localStorage.getItem('admin_navbar_solutions');
      const savedServices = localStorage.getItem('admin_navbar_services');
      const savedResources = localStorage.getItem('admin_navbar_resources');

      if (savedNavLinks) setNavLinks(JSON.parse(savedNavLinks));
      if (savedSlides) setBannerSlides(JSON.parse(savedSlides));
      if (savedSolutions) setSolutionsData(JSON.parse(savedSolutions));
      if (savedServices) setServicesData(JSON.parse(savedServices));
      if (savedResources) setResourcesData(JSON.parse(savedResources));
    };

    loadNavbarData();

    window.addEventListener('adminDataUpdated', loadNavbarData);
    return () => window.removeEventListener('adminDataUpdated', loadNavbarData);
  }, []);

  useEffect(() => {
    if (!isMegaMenuOpen || bannerSlides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMegaMenuOpen, bannerSlides.length]);

  const getActiveMegaMenuData = (key: string) => {
    switch (key) {
      case 'services':
        return servicesData;
      case 'resources':
        return resourcesData;
      case 'solutions':
      default:
        return solutionsData;
    }
  };

  const currentMegaMenuData = getActiveMegaMenuData(activeMegaMenuKey);

  const toggleMobileCategory = (index: number) => {
    setMobileActiveCategory(mobileActiveCategory === index ? null : index);
  };

  return (
    <div className="relative">
      <div
        className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8"
        onMouseLeave={() => {
          setIsMegaMenuOpen(false);
          setActiveMegaMenuKey('');
        }}
      >
        {/* Adjusted header height to compact h-16 sm:h-20 and py-2 px-5 */}
       <header className="bg-[#18181b]/70 rounded-full h-16 sm:h-20 py-2 px-5 sm:px-8 lg:px-10 flex items-center justify-between w-full max-w-[1380px] backdrop-blur-md relative border border-zinc-800/40">          {/* Company Logo - Reduced image height classes and width prop */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200 shrink-0 lg:ml-[20px]">
            <Image
             src="/logo/Binary Logo White.png"
    alt="Binary Global Logo"
    width={180} // Increased from 140
    height={45} // Increased from 32
    className="h-10 sm:h-12 md:h-11 w-auto object-contain" // Increased responsive height (was h-9 sm:h-10 md:h-8)
    priority
            />
          </Link>

          {/* Dynamic Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3 relative">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="relative px-4 py-2.5 rounded-full text-xs xl:text-sm 2xl:text-base font-medium text-white hover:text-gray-900 transition-colors duration-300 whitespace-nowrap z-10 block"
                  onMouseEnter={() => {
                    setActiveTab(item.name);
                    if (item.hasMegaMenu) {
                      setIsMegaMenuOpen(true);
                      setActiveMegaMenuKey(item.key || '');
                      setSelectedCategory(0);
                    } else {
                      setIsMegaMenuOpen(false);
                      setActiveMegaMenuKey('');
                    }
                  }}
                  onMouseLeave={() => setActiveTab('')}
                  onClick={() => {
                    if (item.hasMegaMenu) {
                      if (activeMegaMenuKey === item.key && isMegaMenuOpen) {
                        setIsMegaMenuOpen(false);
                      } else {
                        setIsMegaMenuOpen(true);
                        setActiveMegaMenuKey(item.key || '');
                        setSelectedCategory(0);
                      }
                    }
                  }}
                >
                  {activeTab === item.name && (
                    <span className="absolute inset-0 bg-white rounded-full -z-10 transition-all duration-200" />
                  )}
                  {item.name}
                </Link>
              </div>
            ))}

            <button
              onClick={() => console.log('Search clicked!')}
              className="relative p-2.5 ml-1 xl:ml-2 rounded-full text-white hover:text-gray-900 transition-colors duration-300 focus:outline-none z-10"
              onMouseEnter={() => setActiveTab('search-icon')}
              onMouseLeave={() => setActiveTab('')}
              aria-label="Search"
            >
              {activeTab === 'search-icon' && (
                <span className="absolute inset-0 bg-white rounded-full -z-10 transition-all duration-200" />
              )}
              <Search className="w-5 h-5 xl:w-6 xl:h-6" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2.5 focus:outline-none transition-colors rounded-full hover:bg-zinc-800/50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </header>

        {/* Desktop Mega Menu */}
        {isMegaMenuOpen && (
          <div
            className="absolute top-24 w-full max-w-[1380px] bg-white text-black rounded-3xl shadow-2xl border border-gray-200 hidden lg:grid grid-cols-12 overflow-hidden z-50 min-h-[520px]"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
          >
            {/* Column 1: Categories */}
            <div className="col-span-3 bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent border-r border-gray-200 p-8 flex flex-col justify-start">
              <span className="text-sm font-bold bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent uppercase tracking-wider mb-6 block">
                {activeMegaMenuKey === 'services'
                  ? 'Our Services'
                  : activeMegaMenuKey === 'resources'
                  ? 'Explore Resources'
                  : 'What We Offer'}
              </span>
              <ul className="space-y-2">
                {currentMegaMenuData.map((cat, index) => {
                  const isSelected = selectedCategory === index;
                  return (
                    <li key={cat.category}>
                      <button
                        onMouseEnter={() => setSelectedCategory(index)}
                        onClick={() => setSelectedCategory(index)}
                        className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-left text-sm font-semibold transition-all duration-150 ${
                          isSelected ? 'bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] text-white shadow-md' : 'text-gray-700 hover:bg-gray-200/60'
                        }`}
                      >
                        <span>{cat.category}</span>
                        <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 2: Items */}
            <div className="col-span-5 bg-white p-10 flex flex-col justify-start">
              <ul className="space-y-4">
                {currentMegaMenuData[selectedCategory]?.items.map((subItem) => (
                  <li key={subItem}>
                    <Link
                      href={`/${activeMegaMenuKey}`}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="text-base bg-gradient-to-br from-[#004785] via-[#002142] to-[#000d1d] bg-clip-text text-transparent font-bold hover:text-blue-600 transition-colors block leading-relaxed"
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Promo Carousel */}
            <div className="col-span-4 p-8 bg-slate-300/10 flex flex-col justify-between h-full">
              <div className="flex flex-col h-full">
                <div className="relative flex-1 w-full rounded-2xl overflow-hidden min-h-[320px]">
                  {bannerSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                        <p className="text-white text-xs font-large ">
                          <span className="font-black text-white text-[22px] block mb-2">{slide.title}</span>
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="absolute bottom-3 right-5 z-20 flex space-x-1.5">
                    {bannerSlides.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setCurrentSlide(dotIndex)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentSlide === dotIndex ? 'w-5 bg-blue-500' : 'w-1.5 bg-white/60 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Responsive Mobile Drawer Menu */}
        {isOpen && (
          <div className="absolute top-24 left-0 w-full px-4 lg:hidden z-50">
            <div className="bg-[#18181b]/95 border border-zinc-800/80 rounded-3xl p-5 backdrop-blur-xl shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-zinc-900/90 border border-zinc-700/60 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
              </div>

              <div className="space-y-1">
                {navLinks.map((item) => (
                  <div key={item.name}>
                    {item.hasMegaMenu ? (
                      <div>
                        <button
                          onClick={() => {
                            if (mobileActiveMegaMenu === item.key) {
                              setMobileActiveMegaMenu(null);
                            } else {
                              setMobileActiveMegaMenu(item.key || null);
                              setMobileActiveCategory(null);
                            }
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-medium text-white hover:bg-zinc-800/60 hover:text-blue-400 transition-all duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                              mobileActiveMegaMenu === item.key ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Mega Menu Accordion */}
                        {mobileActiveMegaMenu === item.key && (
                          <div className="pl-2 mt-1 space-y-1 border-l-2 border-zinc-800 my-1">
                            {getActiveMegaMenuData(item.key || '').map((cat, idx) => (
                              <div key={cat.category}>
                                <button
                                  onClick={() => toggleMobileCategory(idx)}
                                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:bg-zinc-800/40 hover:text-white transition-all duration-200"
                                >
                                  <span>{cat.category}</span>
                                  <ChevronRight
                                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                                      mobileActiveCategory === idx ? 'rotate-90' : ''
                                    }`}
                                  />
                                </button>

                                {mobileActiveCategory === idx && (
                                  <div className="pl-3 space-y-0.5 py-1">
                                    {cat.items.map((subItem) => (
                                      <Link
                                        key={subItem}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-1.5 rounded-md text-xs text-zinc-400 hover:bg-zinc-800/30 hover:text-blue-400 transition-all duration-150"
                                      >
                                        {subItem}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 rounded-xl font-medium text-white hover:bg-zinc-800/60 hover:text-blue-400 transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Hero />
    </div>
  );
}
