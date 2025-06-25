
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or want to plan a special event? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <MessageCircle className="text-orange-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Send us a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-white">Name *</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-white">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-white">Subject</Label>
                <Input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-white">Message *</Label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full p-3 bg-white/10 border-white/30 border rounded-md text-white placeholder:text-gray-400 min-h-[120px]"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <MapPin className="text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <div className="text-gray-300">
                <p>123 Culinary Street</p>
                <p>Downtown, Foodie District</p>
                <p>New York, NY 10001</p>
              </div>
              <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">(Map integration would go here)</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-orange-400 mr-4" size={20} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-orange-400 mr-4" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@bellavista.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-orange-400 mr-4 mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-2">Hours</div>
                    <div className="text-gray-300 space-y-1">
                      <div>Mon-Thu: 5:00 PM - 10:00 PM</div>
                      <div>Fri-Sat: 5:00 PM - 11:00 PM</div>
                      <div>Sunday: 4:00 PM - 9:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl p-8 border border-orange-400/30">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for special offers, events, and menu updates.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
