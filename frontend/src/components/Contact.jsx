import React from 'react';
import { Mail, MapPin, Linkedin, CheckCircle, Download } from 'lucide-react';
import profileData from '../mock/data';

const Contact = () => {
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white-primary mb-6">Get in Touch</h3>
              <p className="text-gray-light leading-relaxed mb-8 font-medium max-w-2xl mx-auto">
                Whether you're looking for a product manager, have a project in mind, 
                or just want to connect about the industry and AI innovations, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-teal-bright/20 hover:border-teal-bright/40"
                onClick={handleEmailClick}
              >
                <div className="p-4 bg-teal-bright/20 rounded-xl border border-teal-bright/40">
                  <Mail size={24} className="text-teal-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary text-lg">Email</p>
                  <p className="text-gray-light text-sm font-medium">{profileData.email}</p>
                  <p className="text-teal-bright text-xs font-medium">Click to send email</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg border-2 border-blue-bright/20">
                <div className="p-4 bg-blue-bright/20 rounded-xl border border-blue-bright/40">
                  <MapPin size={24} className="text-blue-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary text-lg">Location</p>
                  <p className="text-gray-light text-sm font-medium">{profileData.location}</p>
                  <p className="text-blue-bright text-xs font-medium">Available for new opportunities</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-teal-bright/20 hover:border-teal-bright/40"
                onClick={handleLinkedInClick}
              >
                <div className="p-4 bg-teal-bright/20 rounded-xl border border-teal-bright/40">
                  <Linkedin size={24} className="text-teal-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary text-lg">LinkedIn</p>
                  <p className="text-gray-light text-sm font-medium">Connect professionally</p>
                  <p className="text-teal-bright text-xs font-medium">Click to view profile</p>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-orange-bright/20 hover:border-orange-bright/40"
                onClick={handleResumeDownload}
              >
                <div className="p-4 bg-orange-bright/20 rounded-xl border border-orange-bright/40">
                  <Download size={24} className="text-orange-bright" />
                </div>
                <div>
                  <p className="font-semibold text-white-primary text-lg">Resume</p>
                  <p className="text-gray-light text-sm font-medium">Download latest version</p>
                  <p className="text-orange-bright text-xs font-medium">Click to download PDF</p>
                </div>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="mt-12 p-8 bg-gradient-to-r from-teal-bright to-blue-bright text-background rounded-2xl shadow-xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle size={24} />
                <h4 className="font-semibold text-xl">Quick Response</h4>
              </div>
              <p className="text-background/90 leading-relaxed font-medium">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to mention it in your subject line. Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;