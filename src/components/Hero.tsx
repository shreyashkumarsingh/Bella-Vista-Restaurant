import React, { useState, useEffect } from 'react';
import { ChefHat, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80",
      title: "Exceptional Dining Experience",
      subtitle: "Where flavors meet perfection"
    },
    {
      image: "https://wallpapers.com/images/hd/luscious-butter-chicken-curry-b2bz7umva0ym85bx.jpg",
      title: "Fresh Ingredients Daily",
      subtitle: "Farm to table excellence"
    },
    {
      image: "https://wallpapers.com/images/hd/1920x1080-kitchen-background-1920-x-1080-dagj4l16ve9jjqkt.jpg",
      title: "Award Winning Cuisine",
      subtitle: "Crafted by master chefs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        console.log(`Switching to slide ${nextSlide}`);
        return nextSlide;
      });
    }, 4000); // Reduced from 5000ms to 4000ms for better visibility
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${
            index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-fade-in">
              <ChefHat className="mx-auto mb-6 text-orange-400" size={64} />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-scale-in">
                Indian Flavour Palace
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-300">
                {slides[currentSlide].subtitle}
              </p>
              
              {/* Stats */}
              <div className="flex justify-center space-x-8 mb-12 animate-fade-in delay-500">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="text-yellow-400 mr-1" size={20} />
                    <span className="text-2xl font-bold">4.9</span>
                  </div>
                  <p className="text-sm text-gray-300">Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="text-green-400 mr-1" size={20} />
                    <span className="text-2xl font-bold">25min</span>
                  </div>
                  <p className="text-sm text-gray-300">Delivery</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">500+</div>
                  <p className="text-sm text-gray-300">Happy Customers</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
                <Button
                  onClick={() => scrollToSection('menu')}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  View Menu
                </Button>
                <Button
                  onClick={() => scrollToSection('reservations')}
                  className="bg-white/90 text-gray-900 hover:bg-white border-2 border-white/90 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Make Reservation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
