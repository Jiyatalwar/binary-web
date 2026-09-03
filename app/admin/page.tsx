'use client';

import { useState, useEffect } from 'react';
import {
  Save,
  Layers,
  Phone,
  Image as ImageIcon,
  CheckCircle,
  Menu,
  X,
  Compass,
  BarChart2,
  HelpCircle,
  Users,
  Layout,
  FileText,
  Plus,
  Trash2,
} from 'lucide-react';

// Default CMS fallbacks
const DEFAULT_NAV_LINKS = [
  { name: 'Solutions', href: '/solutions', hasMegaMenu: true },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Financing', href: '/financing' },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const DEFAULT_BANNER_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    title: 'Innovative Solutions Unveiled:',
    description: "Elevate Your Business Potential with Binary Global's Cutting-Edge Offerings for Enhanced Success",
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    title: 'Next-Gen Cyber Security:',
    description: 'Protect your enterprise with robust Zero Trust architecture and proactive threat detection.',
  },
];

const DEFAULT_SOLUTIONS_DATA = [
  {
    category: 'Smart Infrastructure',
    items: [
      'Campus, Branch & WAN Networking',
      'Enterprise Wireless & Wi-Fi 6/6E Solutions',
      'Data Center & Hybrid Infrastructure Build',
    ],
  },
  {
    category: 'Cyber Defence',
    items: [
      'Network Security & Next-Gen Firewall',
      'Zero Trust Security (ZCTA/ZTNA)',
      'Endpoint Protection & EDR/MDR',
    ],
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<
    'navbar' | 'hero' | 'solutions' | 'states' | 'whyus' | 'costumer' | 'contact' | 'footer'
  >('navbar');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // States matching your components
  const [heroData, setHeroData] = useState({
    title: 'Innovative Solutions Unveiled',
    subtitle: "Elevate Your Business Potential with Binary Global's Cutting-Edge Offerings",
    bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  });

  const [contactData, setContactData] = useState({
    email: 'info@binaryglobal.com',
    phone: '+1 (555) 000-0000',
    address: 'Global Technology Park, Tech Zone',
  });

  // Dynamic Navbar CMS states
  const [navLinks, setNavLinks] = useState(DEFAULT_NAV_LINKS);
  const [bannerSlides, setBannerSlides] = useState(DEFAULT_BANNER_SLIDES);
  const [solutionsData, setSolutionsData] = useState(DEFAULT_SOLUTIONS_DATA);

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedHero = localStorage.getItem('admin_hero');
    const savedContact = localStorage.getItem('admin_contact');
    const savedNavLinks = localStorage.getItem('admin_navbar_links');
    const savedSlides = localStorage.getItem('admin_navbar_slides');
    const savedSolutions = localStorage.getItem('admin_navbar_solutions');

    if (savedHero) setHeroData(JSON.parse(savedHero));
    if (savedContact) setContactData(JSON.parse(savedContact));
    if (savedNavLinks) setNavLinks(JSON.parse(savedNavLinks));
    if (savedSlides) setBannerSlides(JSON.parse(savedSlides));
    if (savedSolutions) setSolutionsData(JSON.parse(savedSolutions));
  }, []);

  const handleSave = () => {
    localStorage.setItem('admin_hero', JSON.stringify(heroData));
    localStorage.setItem('admin_contact', JSON.stringify(contactData));
    localStorage.setItem('admin_navbar_links', JSON.stringify(navLinks));
    localStorage.setItem('admin_navbar_slides', JSON.stringify(bannerSlides));
    localStorage.setItem('admin_navbar_solutions', JSON.stringify(solutionsData));

    // Dispatch event to trigger real-time updates across frontend components
    window.dispatchEvent(new Event('adminDataUpdated'));

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const navItems = [
    { id: 'navbar', label: 'Navbar', icon: Compass },
    { id: 'solutions', label: 'Mega Menu Solutions', icon: Layers },
    { id: 'hero', label: 'Hero Section', icon: ImageIcon },
    { id: 'states', label: 'States / Metrics', icon: BarChart2 },
    { id: 'whyus', label: 'Why Us', icon: HelpCircle },
    { id: 'costumer', label: 'Customers', icon: Users },
    { id: 'contact', label: 'Contact Us', icon: Phone },
    { id: 'footer', label: 'Footer', icon: Layout },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f12] text-zinc-100 flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#18181b] border-b border-zinc-800">
        <h1 className="text-lg font-bold text-white">CMS Dashboard</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-800"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-[#18181b] border-r border-zinc-800 shrink-0 min-h-[calc(100vh-61px)] md:min-h-screen p-4 flex flex-col justify-between`}
      >
        <div className="space-y-6">
          <div className="hidden md:flex items-center gap-2 px-2 py-3 border-b border-zinc-800">
            <FileText className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-lg text-white">CMS Admin</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider px-3 mb-2 block">
              Components
            </span>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as unknown as typeof activeTab);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-zinc-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800 mt-6">
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl shadow-lg transition-all text-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>
        </div>
      </aside>
 
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-6 w-full">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-white capitalize">{activeTab} Component Settings</h1>
            <p className="text-xs text-zinc-400 mt-1">
              Modify navigation links, mega menu structure, and promo slides reflected live on the site.
            </p>
          </div>

          <button
            onClick={handleSave}
            className="hidden sm:flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg transition-all text-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl text-sm">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>Changes successfully saved and updated across components!</span>
          </div>
        )}

        {/* Tab Content */}
        <div className="bg-[#18181b] border border-zinc-800 rounded-2xl p-6 space-y-8">
          {/* NAVBAR LINKS & PROMO SLIDES */}
          {activeTab === 'navbar' && (
            <div className="space-y-8">
              {/* Nav Menu Items */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-zinc-300">Header Menu Links</h2>
                  <button
                    onClick={() => setNavLinks([...navLinks, { name: 'New Link', href: '/' }])}
                    className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <Plus className="w-4 h-4" /> Add Link
                  </button>
                </div>

                <div className="space-y-3">
                  {navLinks.map((link, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 bg-[#0f0f12] p-3 rounded-xl border border-zinc-800/80">
                      <input
                        type="text"
                        value={link.name}
                        onChange={(e) => {
                          const updated = [...navLinks];
                          updated[idx].name = e.target.value;
                          setNavLinks(updated);
                        }}
                        placeholder="Link Name"
                        className="w-full sm:w-1/3 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        value={link.href}
                        onChange={(e) => {
                          const updated = [...navLinks];
                          updated[idx].href = e.target.value;
                          setNavLinks(updated);
                        }}
                        placeholder="URL Target"
                        className="w-full sm:w-1/3 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                      <label className="flex items-center gap-2 text-xs text-zinc-400 shrink-0 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!link.hasMegaMenu}
                          onChange={(e) => {
                            const updated = [...navLinks];
                            updated[idx].hasMegaMenu = e.target.checked;
                            setNavLinks(updated);
                          }}
                          className="rounded border-zinc-700 bg-zinc-900 text-blue-600 focus:ring-0"
                        />
                        <span>Enable Mega Menu</span>
                      </label>
                      <button
                        onClick={() => setNavLinks(navLinks.filter((_, i) => i !== idx))}
                        className="text-zinc-500 hover:text-red-400 p-1 ml-auto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Banner Slides */}
              <div className="space-y-4 pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-zinc-300">Mega Menu Featured Promo Slides</h2>
                  <button
                    onClick={() =>
                      setBannerSlides([
                        ...bannerSlides,
                        { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c', title: 'New Promo', description: 'Promo description' },
                      ])
                    }
                    className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <Plus className="w-4 h-4" /> Add Slide
                  </button>
                </div>

                <div className="space-y-4">
                  {bannerSlides.map((slide, idx) => (
                    <div key={idx} className="bg-[#0f0f12] p-4 rounded-xl border border-zinc-800 space-y-3 relative">
                      <button
                        onClick={() => setBannerSlides(bannerSlides.filter((_, i) => i !== idx))}
                        className="absolute top-4 right-4 text-zinc-500 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-1">
                        <label className="text-[11px] text-zinc-400">Slide Title</label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => {
                            const updated = [...bannerSlides];
                            updated[idx].title = e.target.value;
                            setBannerSlides(updated);
                          }}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] text-zinc-400">Image URL</label>
                        <input
                          type="text"
                          value={slide.image}
                          onChange={(e) => {
                            const updated = [...bannerSlides];
                            updated[idx].image = e.target.value;
                            setBannerSlides(updated);
                          }}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] text-zinc-400">Description</label>
                        <textarea
                          rows={2}
                          value={slide.description}
                          onChange={(e) => {
                            const updated = [...bannerSlides];
                            updated[idx].description = e.target.value;
                            setBannerSlides(updated);
                          }}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MEGA MENU SOLUTIONS STRUCTURE */}
          {activeTab === 'solutions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-zinc-300">Mega Menu Categories & Items</h2>
                <button
                  onClick={() => setSolutionsData([...solutionsData, { category: 'New Category', items: ['Sample Item'] }])}
                  className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium"
                >
                  <Plus className="w-4 h-4" /> Add Category
                </button>
              </div>

              <div className="space-y-6">
                {solutionsData.map((cat, catIdx) => (
                  <div key={catIdx} className="bg-[#0f0f12] p-4 rounded-xl border border-zinc-800 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <input
                        type="text"
                        value={cat.category}
                        onChange={(e) => {
                          const updated = [...solutionsData];
                          updated[catIdx].category = e.target.value;
                          setSolutionsData(updated);
                        }}
                        placeholder="Category Name"
                        className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-white font-semibold focus:outline-none focus:border-blue-500 flex-1"
                      />
                      <button
                        onClick={() => setSolutionsData(solutionsData.filter((_, i) => i !== catIdx))}
                        className="text-zinc-500 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Category Items */}
                    <div className="pl-4 border-l-2 border-zinc-800 space-y-2">
                      <span className="text-[11px] font-medium text-zinc-500">Sub-Items</span>
                      {cat.items.map((subItem, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={subItem}
                            onChange={(e) => {
                              const updated = [...solutionsData];
                              updated[catIdx].items[itemIdx] = e.target.value;
                              setSolutionsData(updated);
                            }}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-sm text-zinc-200 focus:outline-none focus:border-blue-500"
                          />
                          <button
                            onClick={() => {
                              const updated = [...solutionsData];
                              updated[catIdx].items = updated[catIdx].items.filter((_, i) => i !== itemIdx);
                              setSolutionsData(updated);
                            }}
                            className="text-zinc-600 hover:text-red-400 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const updated = [...solutionsData];
                          updated[catIdx].items.push('New Sub-Item');
                          setSolutionsData(updated);
                        }}
                        className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-2"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Sub-Item
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HERO TAB */}
          {activeTab === 'hero' && (
            <div className="space-y-5">
              <h2 className="text-sm font-semibold text-zinc-300">Hero Section Fields</h2>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">Main Title</label>
                <input
                  type="text"
                  value={heroData.title}
                  onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                  className="w-full bg-[#0f0f12] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">Subtitle Description</label>
                <textarea
                  rows={3}
                  value={heroData.subtitle}
                  onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                  className="w-full bg-[#0f0f12] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="space-y-5">
              <h2 className="text-sm font-semibold text-zinc-300">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className="w-full bg-[#0f0f12] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400">Phone Number</label>
                  <input
                    type="text"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className="w-full bg-[#0f0f12] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}