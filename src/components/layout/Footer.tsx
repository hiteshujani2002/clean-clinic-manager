import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Dr.Jyoti's Dental Care Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-lg font-bold">Dr.Jyoti's Dental Care</h3>
                <p className="text-sm text-muted-foreground">Cosmetic and General Dentistry</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional dental care with modern technology and a gentle touch. 
              Creating beautiful, healthy smiles for our community.
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
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#doctors" className="text-muted-foreground hover:text-primary transition-colors">Doctors</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">General Dentistry</span></li>
              <li><span className="text-muted-foreground">Cosmetic Dentistry</span></li>
              <li><span className="text-muted-foreground">Restorative Care</span></li>
              <li><span className="text-muted-foreground">Dental Implants</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 9167544950</span>
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