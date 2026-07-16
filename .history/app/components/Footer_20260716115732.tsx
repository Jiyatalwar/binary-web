import React from 'react';

const Footer = () => {
  const solutionsLinks = [
    'Smart Infrastructure',
    'Cyber Defence',
    'Data Management',
    'Cloud Solutions',
    'Artificial Intelligence'
  ];

  const companyLinks = [
    'About Us',
    'Leadership',
    'Business Resiliency',
    'Career',
    'Customer Success',
    'Partners',
    'Contact Us'
  ];

  const servicesLinks = [
    'Professional Services',
    'Managed Services',
    'Strategic Technology Staffing',
    'Support Services',
    'Assessments',
    'Training Services',
    'Cloud Consulting Services',
    'Security Services'
  ];

  const industriesLinks = [
    'IT/ITES Industry',
    'Manufacturing Industry',
    'Media & Entertainment Industry',
    'Oil and Gas Industry',
    'Service Providers Industry',
    'E-Commerce & Financial Services Industry'
  ];

  const resourcesLinks = [
    'Blogs',
    'Press Release',
    'Case Studies',
    'Whitepapers',
    'Customer Experience',
    'CSR',
    'Whistleblower Policy',
    'Sales Terms & Conditions'
  ];

  const bottomLinks = [
    { name: 'Legal Disclaimer', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Term of Conditions', href: '#' },
    { name: 'Sitemap', href: '#' }
  ];

  return (
    <footer className="bg-[#ffffff] text-gray-600 font-sans px-6  md:px-16 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-700">
          
          {/* Left Column (Brand, Corporate Head Office Info, Flags, Socials) */}
          <div className="lg:col-span-3 flex flex-col ">
            <div className="flex items-center ">
              <img 
                src="logo/binarylogo.png" 
                alt="Binary Global Ltd. Logo" 
                className="w-46  h-46  object-contain mt-[-60px]" 
              />
            </div>
            <div className="text-[14px] text-blackspace-y-1">
              <p>+91 11 40140000</p>
              <p>1800 102 3579</p>
            </div>
            <div className="text-[14px]">
              <a href="mailto:contact@binaryglobal.com" className="text-gray-600 hover:underline">
                contact@binaryglobal.com
              </a>
            </div>

            <div className="text-[14px] text-gray-600 space-y-1">
              <p className="font-semibold text-white text-[15px]">Corporate Head Office</p>
              <p>C-145, Okhla Phase-1,</p>
              <p>New Delhi-110020</p>
            </div>

            {/* Country Flags Mock Container */}
            {/* <div className="flex gap-2 items-center opacity-90">
              <span title="India" className="text-lg">🇮🇳</span>
              <span title="Singapore" className="text-lg">🇸🇬</span>
              <span title="UK" className="text-lg">🇬🇧</span>
              <span title="USA" className="text-lg">🇺🇸</span>
            </div> */}
            
            {/* Social Icons */}
            {/* <div className="flex gap-3 pt-2">
              <a href="#" className="w-8 h-8 bg-white text-[#1a1a1a] flex items-center justify-center rounded-full hover:opacity-80 transition-opacity">
                <span className="font-bold text-xs">YT</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white text-[#1a1a1a] flex items-center justify-center rounded-full hover:opacity-80 transition-opacity">
                <span className="font-bold text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white text-[#1a1a1a] flex items-center justify-center rounded-full hover:opacity-80 transition-opacity">
                <span className="font-bold text-base">X</span>
              </a>
            </div> */}
          </div>

          {/* Right Columns (Links Directories grouped dynamically) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-[13px] text-gray-600">
            
            {/* Solutions */}
            <div>
              <h2 className="text-[15px] font-semibold text-gray-600 mb-5 pb-1 border-b border-[#12afd6] inline-block">
                Solutions
              </h2>
              <ul className="space-y-3">
                {solutionsLinks.map((link) => (
                  <li key={link}><a href="#" className="hover:text-blue-500 hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-[15px] font-semibold text-gray-600 mb-5 pb-1 border-b border-[#12afd6] inline-block">
                Company
              </h2>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}><a href="#" className="hover:text-blue-500 hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-[15px] font-semibold text-gray-600 mb-5 pb-1 border-b border-[#12afd6] inline-block">
                Services
              </h2>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link}><a href="#" className="hover:text-blue-500 hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-[15px] font-semibold text-gray-600 mb-5 pb-1 border-b border-[#12afd6] inline-block">
                Industries
              </h2>
              <ul className="space-y-3">
                {industriesLinks.map((link) => (
                  <li key={link}><a href="#" className="hover:text-blue-500 hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-[15px] font-semibold text-gray-600 mb-5 pb-1 border-b border-[#12afd6] inline-block">
                Resources
              </h2>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link}><a href="#" className="hover:text-blue-500 hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-400">
          <div>
            ©2026 Binary Global Limited. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white hover:underline">
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;