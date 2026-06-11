'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Products', path: '/products', icon: 'chair' },
    { name: 'Services', path: '/services', icon: 'design_services' },
    { name: 'Gallery', path: '/gallery', icon: 'photo_library' },
    { name: 'Contact', path: '/contact', icon: 'support_agent' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'}`}>
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter relative">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo-tr.png" alt="Khushi Furniture Logo" className="h-10 w-10 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform" />
          <span className="font-headline-md text-headline-md font-bold tracking-tight text-primary">Khushi Furniture</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-label-md text-label-md transition-colors duration-300 ${isActive
                  ? 'text-secondary font-bold border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-on-surface-variant hover:text-secondary transition-all active:scale-95 flex items-center justify-center" aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link href="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-md active:scale-95 duration-200">
            Request a Quote
          </Link>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex md:hidden items-center space-x-4">
          <button className="text-on-surface-variant hover:text-secondary transition-all active:scale-95 flex items-center justify-center" aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button
            className="text-on-surface-variant hover:text-secondary transition-all active:scale-95 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <nav className="flex flex-col space-y-2 px-6 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(85vh - 3rem)' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-label-md text-label-md w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group ${isActive
                  ? 'text-primary font-bold bg-primary/10 shadow-sm translate-x-2 border-l-4 border-primary'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container hover:translate-x-2 border-l-4 border-transparent'
                  }`}
              >
                <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${isActive ? 'scale-110 text-primary' : 'group-hover:scale-110'}`}>{link.icon}</span>
                <span className="tracking-wide">{link.name}</span>
                {isActive && <span className="material-symbols-outlined ml-auto text-primary text-sm">arrow_forward_ios</span>}
              </Link>
            );
          })}
          <div className="pt-6 mt-4 w-full border-t border-outline-variant/30">
            <Link href="/contact" className="bg-primary text-on-primary w-full py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-3 hover:bg-primary-container transition-all shadow-xl active:scale-95 duration-200">
              <span className="material-symbols-outlined">edit_document</span>
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
