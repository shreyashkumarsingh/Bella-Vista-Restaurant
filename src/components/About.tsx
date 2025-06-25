
import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, number: "15", text: "Awards Won" },
    { icon: Users, number: "500K+", text: "Happy Customers" },
    { icon: Clock, number: "25", text: "Years Experience" },
    { icon: Heart, number: "100%", text: "Fresh Ingredients" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A culinary journey that began with passion and continues with excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Where Tradition Meets Innovation
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, Bella Vista has been crafting exceptional dining experiences 
              that celebrate the rich traditions of Italian cuisine while embracing modern culinary innovations. 
              Our commitment to fresh, locally-sourced ingredients and time-honored cooking techniques 
              has made us a beloved destination for food enthusiasts.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every dish tells a story, every meal creates a memory. Our passionate team of chefs, 
              led by award-winning Chef Marco Rossi, brings decades of experience and an unwavering 
              dedication to culinary excellence to your table.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                alt="Chef in kitchen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <achievement.icon className="mx-auto mb-4 text-orange-600" size={48} />
              <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
              <div className="text-gray-600">{achievement.text}</div>
            </div>
          ))}
        </div>

        {/* Chef Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28cedf4eca51?auto=format&fit=crop&w=400&q=80"
                alt="Head Chef"
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Meet Chef Marco Rossi</h3>
              <p className="text-gray-600">
                With over 25 years of culinary expertise, Chef Marco brings authentic Italian flavors 
                to every dish. Trained in the finest kitchens of Tuscany and recognized with multiple 
                culinary awards, he leads our kitchen with passion and precision.
              </p>
              <div class="flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600">Michelin Recommended</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
