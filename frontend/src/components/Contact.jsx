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
    <section id="contact" className="py-20 section-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-medium">
            I'm always interested in new opportunities, collaborations, and interesting conversations about product management, analytics, and AI innovations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white-primary mb-6">Get in Touch</h3>
              <p className="text-gray-light leading-relaxed mb-8 font-medium">
                Whether you're looking for a product manager, have a project in mind, 
                or just want to connect about the industry and AI innovations, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div 
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-teal-bright/20 hover:border-teal-bright/40"
                onClick={handleEmailClick}
              >
                <div className="p-3 bg-teal-bright/20 rounded-lg border border-teal-bright/40">
                  <Mail size={20} className="text-teal-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary">Email</p>
                  <p className="text-gray-light text-sm font-medium">{profileData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm border-2 border-blue-bright/20">
                <div className="p-3 bg-blue-bright/20 rounded-lg border border-blue-bright/40">
                  <MapPin size={20} className="text-blue-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary">Location</p>
                  <p className="text-gray-light text-sm font-medium">{profileData.location}</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-teal-bright/20 hover:border-teal-bright/40"
                onClick={handleLinkedInClick}
              >
                <div className="p-3 bg-teal-bright/20 rounded-lg border border-teal-bright/40">
                  <Linkedin size={20} className="text-teal-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary">LinkedIn</p>
                  <p className="text-gray-light text-sm font-medium">Connect with me professionally</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-orange-bright/20 hover:border-orange-bright/40"
                onClick={handleResumeDownload}
              >
                <div className="p-3 bg-orange-bright/20 rounded-lg border border-orange-bright/40">
                  <Download size={20} className="text-orange-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary">Resume</p>
                  <p className="text-gray-light text-sm font-medium">Download my latest resume</p>
                </div>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="p-6 bg-gradient-to-r from-teal-bright to-blue-bright text-background rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={20} />
                <h4 className="font-semibold">Quick Response</h4>
              </div>
              <p className="text-background/90 text-sm leading-relaxed font-medium">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to mention it in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-2 border-teal-bright/20 bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white-primary mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white-primary mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full border-border focus:border-teal-bright focus:ring-teal-bright/20 bg-background text-white-primary placeholder:text-gray-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white-primary mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full border-border focus:border-teal-bright focus:ring-teal-bright/20 bg-background text-white-primary placeholder:text-gray-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white-primary mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full border-border focus:border-teal-bright focus:ring-teal-bright/20 bg-background text-white-primary placeholder:text-gray-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows={5}
                    required
                    className="w-full resize-none border-border focus:border-teal-bright focus:ring-teal-bright/20 bg-background text-white-primary placeholder:text-gray-medium"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-bright hover:bg-teal-bright/90 text-background py-3 transition-all duration-200 font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
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

              <p className="text-xs text-gray-medium mt-4 text-center font-medium">
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