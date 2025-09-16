import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, MapPin, Linkedin, Send, CheckCircle, Download } from 'lucide-react';
import profileData from '../mock/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${profileData.email}`;
  };

  const handleLinkedInClick = () => {
    // This would be updated with actual LinkedIn URL
    window.open('https://linkedin.com/in/neha-agrawal', '_blank');
  };

  const handleResumeDownload = () => {
    window.open(profileData.resumeLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-deep-blue mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting conversations about product management, analytics, and AI innovations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-deep-blue mb-6">Get in Touch</h3>
              <p className="text-charcoal leading-relaxed mb-8">
                Whether you're looking for a product manager, have a project in mind, 
                or just want to connect about the industry and AI innovations, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div 
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-deep-blue/10 hover:border-teal/20"
                onClick={handleEmailClick}
              >
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Mail size={20} className="text-teal" />
                </div>
                <div>
                  <p className="font-medium text-deep-blue">Email</p>
                  <p className="text-charcoal text-sm">{profileData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-deep-blue/10">
                <div className="p-3 bg-deep-blue/10 rounded-lg">
                  <MapPin size={20} className="text-deep-blue" />
                </div>
                <div>
                  <p className="font-medium text-deep-blue">Location</p>
                  <p className="text-charcoal text-sm">{profileData.location}</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-deep-blue/10 hover:border-teal/20"
                onClick={handleLinkedInClick}
              >
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Linkedin size={20} className="text-teal" />
                </div>
                <div>
                  <p className="font-medium text-deep-blue">LinkedIn</p>
                  <p className="text-charcoal text-sm">Connect with me professionally</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-deep-blue/10 hover:border-teal/20"
                onClick={handleResumeDownload}
              >
                <div className="p-3 bg-coral/10 rounded-lg">
                  <Download size={20} className="text-coral" />
                </div>
                <div>
                  <p className="font-medium text-deep-blue">Resume</p>
                  <p className="text-charcoal text-sm">Download my latest resume</p>
                </div>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="p-6 bg-gradient-to-r from-deep-blue to-teal text-white rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={20} />
                <h4 className="font-medium">Quick Response</h4>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to mention it in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-deep-blue mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-blue mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full border-deep-blue/20 focus:border-teal focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-blue mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full border-deep-blue/20 focus:border-teal focus:ring-teal/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-blue mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full border-deep-blue/20 focus:border-teal focus:ring-teal/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-blue mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows={5}
                    required
                    className="w-full resize-none border-deep-blue/20 focus:border-teal focus:ring-teal/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-deep-blue hover:bg-teal text-white py-3 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By sending a message, you agree to be contacted regarding your inquiry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;