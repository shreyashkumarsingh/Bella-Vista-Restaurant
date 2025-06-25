
import React, { useState } from 'react';
import { Search, Filter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages'];

  const menuItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      category: "Main Courses",
      price: 28,
      description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: false
    },
    {
      id: 2,
      name: "Burrata Caprese",
      category: "Appetizers",
      price: 16,
      description: "Fresh burrata with heirloom tomatoes, basil, and balsamic reduction",
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: false
    },
    {
      id: 3,
      name: "Osso Buco",
      category: "Main Courses",
      price: 35,
      description: "Braised veal shanks with saffron risotto and gremolata",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80",
      popular: false,
      spicy: false
    },
    {
      id: 4,
      name: "Tiramisu",
      category: "Desserts",
      price: 12,
      description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: false
    },
    {
      id: 5,
      name: "Arancini",
      category: "Appetizers",
      price: 14,
      description: "Crispy risotto balls filled with mozzarella and served with marinara",
      image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&q=80",
      popular: false,
      spicy: true
    },
    {
      id: 6,
      name: "Chianti Classico",
      category: "Beverages",
      price: 45,
      description: "Premium Italian red wine from Tuscany region",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=400&q=80",
      popular: false,
      spicy: false
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search dishes..."
                className="pl-10 py-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-500" size={20} />
              <span className="text-gray-600">Filter:</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                {item.spicy && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    🌶️ Spicy
                  </div>
                )}
                <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart size={20} className="text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No items found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
