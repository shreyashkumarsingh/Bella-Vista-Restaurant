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
      price: 4 * 83,
      description: "Tender chicken in creamy tomato-based curry with aromatic spices and fresh herbs",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: false
    },
    {
      id: 2,
      name: "Samosa Chaat",
      category: "Appetizers",
      price: 2 * 83,
      description: "Crispy samosas topped with chutneys, yogurt, and fresh herbs",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
      popular: true,
      spicy: true
    },
    {
      id: 3,
      name: "Chicken Biryani",
      category: "Main Courses",
      price: 5 * 83,
      description: "Fragrant basmati rice layered with tender chicken and aromatic spices",
      image: "data:image/jpeg;base64,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",
      popular: false,
      spicy: true
    },
    {
      id: 4,
      name: "Jalebi",
      category: "Desserts",
      price: 2 * 83,
      description: "Fresh Jalebis soaked in cardamom-scented sugar syrup",
      image: "data:image/jpeg;base64,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",
      popular: true,
      spicy: false
    },
    {
      id: 5,
      name: "Paneer Tikka",
      category: "Appetizers",
      price: 3 * 83,
      description: "Marinated cottage cheese grilled with bell peppers and onions",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=80",
      popular: false,
      spicy: true
    },
    {
      id: 6,
      name: "Mango Lassi",
      category: "Beverages",
      price: 2 * 83,
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
                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
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
