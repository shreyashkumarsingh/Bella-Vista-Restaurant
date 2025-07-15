
import React from 'react';
import { ChefHat, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indian Flavour Palace has been serving exceptional cuisine for over two decades, 
            combining traditional recipes with modern culinary innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant Interior"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="animate-fade-in delay-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Passion for Excellence
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey began with a simple vision: to create a dining experience 
              that combines the warmth of Italian hospitality with the finest ingredients 
              and masterful preparation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every dish tells a story, every ingredient is carefully selected, 
              and every meal is crafted with love and dedication by our award-winning chefs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50k+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in delay-500">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Master Chefs</h4>
            <p className="text-gray-600">
              Our team of expert chefs brings decades of culinary excellence to every dish.
            </p>
          </div>

          <div className="text-center animate-fade-in delay-700">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Award Winning</h4>
            <p className="text-gray-600">
              Recognized by culinary institutes and food critics for our exceptional cuisine.
            </p>
          </div>

          <div className="text-center animate-fade-in delay-1000">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Family Friendly</h4>
            <p className="text-gray-600">
              A warm, welcoming atmosphere perfect for families and special occasions.
            </p>
          </div>

          <div className="text-center animate-fade-in delay-1100">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Fresh Daily</h4>
            <p className="text-gray-600">
              We source the freshest ingredients daily to ensure quality in every bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
