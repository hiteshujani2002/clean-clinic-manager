import { Button } from '@/components/ui/button';
import { Calendar, Phone, Star, Shield, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-secondary-light">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Perfect <span className="text-primary">Smile</span> Starts Here
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience exceptional dental care with modern technology, gentle treatments, 
                and a team dedicated to your comfort and oral health.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-2">
                <div className="flex text-trust">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">10,000+ Happy Patients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Safe & Sterile</h4>
                  <p className="text-xs text-muted-foreground">Latest safety protocols</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Gentle Care</h4>
                  <p className="text-xs text-muted-foreground">Pain-free treatments</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-trust/10 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-trust" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Expert Team</h4>
                  <p className="text-xs text-muted-foreground">20+ years experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="Modern dental office with happy patient and dentist"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay with booking card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Next Available</p>
                      <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-secondary/20 to-trust/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-trust rounded-full" />
      </div>
    </section>
  );
};

export default Hero;