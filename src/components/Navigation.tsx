
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Indian Flavour Palace
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('menu')} className="text-white hover:text-orange-400 transition-colors">Menu</button>
            <button onClick={() => scrollToSection('reservations')} className="text-white hover:text-orange-400 transition-colors">Reservations</button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-orange-400 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('reviews')} className="text-white hover:text-orange-400 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-400 transition-colors">Contact</button>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span className="text-sm">123 Food St</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('menu')} className="text-white hover:text-orange-400 transition-colors text-left">Menu</button>
              <button onClick={() => scrollToSection('reservations')} className="text-white hover:text-orange-400 transition-colors text-left">Reservations</button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-orange-400 transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('reviews')} className="text-white hover:text-orange-400 transition-colors text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-400 transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
