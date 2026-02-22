import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/new-logo.png" alt="Dr.Jyoti's Dental Care Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-lg font-bold">Dr.Jyoti's Dental Care</h3>
                <p className="text-sm text-muted-foreground">Advanced Cosmetic and Dental Implant Centre</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted dental clinic in Andheri East, Mumbai, offering complete dental care under one roof. Safe, ethical, and modern treatments designed around your comfort. Because your smile deserves expert care—near you.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a href="https://www.facebook.com/drjyotisdentalcare/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="https://www.instagram.com/drjyotisdentalcare.mumbai?igsh=MTg2c3c0NGdqcWdweQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/#doctors" className="text-muted-foreground hover:text-primary transition-colors">Doctors</Link></li>
              <li><Link to="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/general-dentistry" className="text-muted-foreground hover:text-primary transition-colors">General Dentistry</Link></li>
              <li><Link to="/cosmetic-dentistry" className="text-muted-foreground hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link to="/restorative-care" className="text-muted-foreground hover:text-primary transition-colors">Restorative Care</Link></li>
              <li><Link to="/restorative-care" className="text-muted-foreground hover:text-primary transition-colors">Dental Implants</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+91 9167544950 / 9321844795 / 8369962388</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">drjyotisdentalcare@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-secondary">Clinic 1:</strong> Shop no 17, ground floor, HILTON TOWER, Jijamata Rd, Sher E Punjab, Andheri East, Mumbai 400093
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-secondary">Clinic 2:</strong> Shop no.15, New Pump House, Jijamata chowk, opposite Hanjar nagar society, Andheri East, Mumbai 400093
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <div>Monday - Saturday: 10:00 AM - 9:00 PM</div>
                  <div>Sunday: Closed (Available by prior appointment)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Dr.Jyoti's Dental Care. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;