
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely incredible dining experience! The truffle risotto was perfection and the service was impeccable. Will definitely be returning soon.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c96?auto=format&fit=crop&w=150&q=80",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Best Italian restaurant in the city! The ambiance is romantic, the food is authentic, and Chef Marco is a true artist. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Celebrated our anniversary here and it was magical. Every dish was a masterpiece and the staff made us feel so special. Thank you!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 4,
      comment: "Fantastic food and great wine selection. The tiramisu was the best I've ever had. Only minor complaint was the wait time, but worth it!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      date: "3 weeks ago"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      comment: "Outstanding! From the warm welcome to the last bite of dessert, everything was perfect. The burrata caprese is a must-try!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      date: "1 month ago"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => prev === 0 ? reviews.length - 1 : prev - 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-gray-600">Return Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>

        {/* Main Review Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-8 left-8 text-orange-200" size={48} />
            
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {renderStars(reviews[currentReview].rating)}
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium italic">
                "{reviews[currentReview].comment}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-lg text-gray-800">
                  {reviews[currentReview].name}
                </div>
                <div className="text-gray-500">
                  {reviews[currentReview].date}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="text-orange-600" size={24} />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="text-orange-600" size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-orange-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Small Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={review.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
