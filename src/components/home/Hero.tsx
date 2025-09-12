import { Button } from '@/components/ui/button';
import { Calendar, Phone, Star, Shield, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-up">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                  Advanced Dental Care
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Your Perfect Smile Starts with <span className="text-secondary">Dr.Jyoti's Dental Care</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                Advanced dental care with a gentle touch. 
                Book your appointment today.
              </p>
            </div>

            {/* Working Hours Card */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 sm:p-6 max-w-xs animate-scale-in">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Working Hours</h3>
                <div className="space-y-1 text-sm text-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9AM - 9PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday, Sunday</span>
                    <span className="font-medium">10AM - 6PM</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-xs text-muted-foreground mb-2">Today: Tuesday 9:00PM</div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105">
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 animate-fade-in">
              <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Safe & Sterile</h4>
                  <p className="text-xs text-muted-foreground">Latest safety protocols</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Gentle Care</h4>
                  <p className="text-xs text-muted-foreground">Pain-free treatments</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
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
          <div className="relative lg:order-first">
            <div className="relative z-10 rounded-3xl overflow-hidden animate-scale-in">
              <img 
                src="/api/placeholder/600/500" 
                alt="Happy woman with beautiful smile holding a toothbrush"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-trust rounded-full animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;