import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binary Global Solutions",
  description: "State-of-the-art technological infrastructures to secure, automate, and accelerate operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-indigo-500 selection:text-white">
        
        {/* --- GLOBAL NAVIGATION BAR --- */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo Group */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-black text-2xl bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent">
                BINARY<span className="text-cyan-600 font-medium">GLOBAL</span>
              </span>
            </a>

            {/* Navigation Anchors */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-sm font-semibold text-gray-700 hover:text-[#090979] transition-colors">Solutions</a>
              <a href="#infrastructure" className="text-sm font-semibold text-gray-700 hover:text-[#090979] transition-colors">Infrastructure</a>
              <a href="#security" className="text-sm font-semibold text-gray-700 hover:text-[#090979] transition-colors">Cyber Defense</a>
              <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-[#090979] transition-colors">Company</a>
            </nav>

            {/* Action Group */}
            <div className="flex items-center gap-4">
              <a 
                href="#contact" 
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#020024] to-[#090979] hover:opacity-90 transition-all shadow-md shadow-indigo-900/10"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* --- DYNAMIC VIEWPORT ROUTE AREA --- */}
        <main className="flex-grow">
          {children}
        </main>

        {/* --- GLOBAL SITE FOOTER --- */}
        <footer className="w-full border-t border-gray-100 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              
              {/* Brand Identity Summary */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <span className="font-black text-xl bg-gradient-to-r from-[#020024] to-[#090979] bg-clip-text text-transparent">
                  BINARY<span className="text-cyan-600 font-medium">GLOBAL</span>
                </span>
                <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                  Delivering cutting-edge physical enterprise computing architectures, multi-cloud network scaling options, and fully modern zero-trust protection strategies.
                </p>
              </div>

              {/* Useful Nav Column 1 */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Services</h4>
                <a href="#solutions" className="text-sm text-gray-600 hover:text-[#090979] transition-colors">Smart Infrastructure</a>
                <a href="#solutions" className="text-sm text-gray-600 hover:text-[#090979] transition-colors">Cloud Networks</a>
                <a href="#solutions" className="text-sm text-gray-600 hover:text-[#090979] transition-colors">Data Catalogs</a>
              </div>

              {/* Useful Nav Column 2 */}
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Compliance</h4>
                <a href="#" className="text-sm text-gray-600 hover:text-[#090979] transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-[#090979] transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-gray-600 hover:text-[#090979] transition-colors">Threat Advisory</a>
              </div>

            </div>

            {/* Bottom Copyright Strip */}
            <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Binary Global Ltd. All rights reserved.
              </p>
              <p className="text-xs text-gray-400">
                Designed for high-performance networks.
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}