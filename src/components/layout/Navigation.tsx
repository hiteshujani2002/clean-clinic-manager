import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Phone, Calendar, Menu, Smile, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Doctors', href: '/#doctors' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    const [path, hash] = href.split('#');
    if (location.pathname === '/' || location.pathname === path) {
      const element = document.querySelector(`#${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/new-logo.png" 
              alt="Dr.Jyoti's Dental Care Logo" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Dr.Jyoti's Dental Care</h1>
              <p className="text-xs text-muted-foreground">Cosmetic and General Dentistry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 mr-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary text-muted-foreground relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">9167544950</span>
            </Button>
            <Button 
              size="sm" 
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Book My Appointment
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919167544950">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex items-center space-x-2 pb-4 border-b">
                    <img 
                      src="/lovable-uploads/new-logo.png" 
                      alt="Dr.Jyoti's Dental Care Logo" 
                      className="h-10 w-auto object-contain"
                    />
                    <div>
                      <h2 className="text-lg font-bold">Dr.Jyoti's Dental Care</h2>
                      <p className="text-sm text-muted-foreground">Cosmetic and General Dentistry</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent text-muted-foreground hover:text-foreground text-left"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button 
                      className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full transition-all duration-300"
                      asChild
                    >
                      <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4" />
                        Book My Appointment
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;