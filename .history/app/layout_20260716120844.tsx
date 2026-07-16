import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-indigo-500 selection:text-white">
        
        {/* Navbar safely inside the body */}
        <Navbar />
        
        {/* Main layout frame pushes the footer down if content is short */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer safely inside the body */}
        <Footer />

      </body>
    </html>
  );
}