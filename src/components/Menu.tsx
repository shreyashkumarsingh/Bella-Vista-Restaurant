
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
      name: "Butter Chicken",
      category: "Main Courses",
      price: 22,
      description: "Tender chicken in creamy tomato-based curry with aromatic spices and fresh herbs",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: false
    },
    {
      id: 2,
      name: "Samosa Chaat",
      category: "Appetizers",
      price: 12,
      description: "Crispy samosas topped with chutneys, yogurt, and fresh herbs",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: true
    },
    {
      id: 3,
      name: "Lamb Biryani",
      category: "Main Courses",
      price: 28,
      description: "Fragrant basmati rice layered with tender lamb and aromatic spices",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d7d3?auto=format&fit=crop&w=400&q=80",
      popular: false,
      spicy: true
    },
    {
      id: 4,
      name: "Gulab Jamun",
      category: "Desserts",
      price: 8,
      description: "Soft milk dumplings soaked in cardamom-scented sugar syrup",
      image: "https://images.unsplash.com/photo-1571167230394-f3dee6c8e2eb?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: false
    },
    {
      id: 5,
      name: "Paneer Tikka",
      category: "Appetizers",
      price: 16,
      description: "Marinated cottage cheese grilled with bell peppers and onions",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80",
      popular: false,
      spicy: true
    },
    {
      id: 6,
      name: "Mango Lassi",
      category: "Beverages",
      price: 6,
      description: "Traditional yogurt-based drink blended with fresh mango and cardamom",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
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
            Discover our carefully crafted Indian dishes made with the finest ingredients
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
