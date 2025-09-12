import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Phone, Calendar, Menu, Smile, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog & FAQs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">SmileCare</h1>
              <p className="text-xs text-muted-foreground">Dental Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent",
                  isActive(item.href) 
                    ? "text-primary bg-accent" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Now</span>
            </Button>
            <Button size="sm" className="gap-2 bg-secondary hover:bg-secondary/90 text-white rounded-full">
              <Calendar className="w-4 h-4" />
              Book My Appointment
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">Patient Portal</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
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
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary">
                      <Smile className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">SmileCare</h2>
                      <p className="text-sm text-muted-foreground">Dental Clinic</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent",
                          isActive(item.href) 
                            ? "text-primary bg-accent" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button className="gap-2 bg-secondary hover:bg-secondary/90 rounded-full">
                      <Calendar className="w-4 h-4" />
                      Book My Appointment
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/dashboard" className="gap-2">
                        <User className="w-4 h-4" />
                        Patient Portal
                      </Link>
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