
import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Reservation submitted:', formData);
    toast({
      title: "Reservation Confirmed!",
      description: "We've received your reservation request. You'll receive a confirmation email shortly.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="reservations" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Make a Reservation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book your table for an unforgettable dining experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reservation Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center">
                    <User size={16} className="mr-2" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center">
                    <Mail size={16} className="mr-2" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white flex items-center">
                  <Phone size={16} className="mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white flex items-center">
                    <Calendar size={16} className="mr-2" />
                    Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="bg-white/10 border-white/30 text-white"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white flex items-center">
                    <Clock size={16} className="mr-2" />
                    Time *
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white flex items-center">
                    <Users size={16} className="mr-2" />
                    Guests *
                  </Label>
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="Number" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests" className="text-white">
                  Special Requests
                </Label>
                <textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  className="w-full p-3 bg-white/10 border-white/30 border rounded-md text-white placeholder:text-gray-400 min-h-[100px]"
                  placeholder="Any dietary restrictions, special occasions, or other requests..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Reserve Table
              </Button>
            </form>
          </div>

          {/* Restaurant Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Restaurant Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="text-orange-400">5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="text-orange-400">5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-orange-400">4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 text-orange-400" size={20} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 text-orange-400" size={20} />
                  <span>reservations@bellavista.com</span>
                </div>
                <div className="flex items-start">
                  <Calendar className="mr-3 text-orange-400 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">123 Culinary Street</div>
                    <div className="text-gray-300">Downtown, Foodie District</div>
                    <div className="text-gray-300">India, 744103</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl p-8 border border-orange-400/30">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Reservation Policy</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Reservations recommended for parties of 4 or more</li>
                <li>• Tables held for 15 minutes past reservation time</li>
                <li>• Cancellations accepted up to 2 hours before</li>
                <li>• Special dietary needs accommodated with advance notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
