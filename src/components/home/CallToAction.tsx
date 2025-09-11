import { Button } from '@/components/ui/button';
import { Calendar, Phone, Clock, MapPin } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-32 w-20 h-20 border border-white/20 rounded-full" />
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, 
            more confident smile with our expert dental team.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto"
          >
            <Calendar className="w-6 h-6 mr-2" />
            Book Online Appointment
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/50 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
          >
            <Phone className="w-6 h-6 mr-2" />
            Call (555) 123-4567
          </Button>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <div className="text-sm text-white/90">
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 3:00 PM</p>
              <p>Sun: Emergency Only</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-semibold mb-2">Location</h3>
            <div className="text-sm text-white/90">
              <p>123 Dental Street</p>
              <p>Health City, HC 12345</p>
              <p className="text-white font-medium">Free Parking</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-semibold mb-2">Emergency Care</h3>
            <div className="text-sm text-white/90">
              <p className="font-semibold text-white">24/7 Emergency Line</p>
              <p>(555) 911-HELP</p>
              <p className="text-white/80">Immediate assistance</p>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="text-center mt-12 bg-white/15 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-2">New Patient Special!</h3>
          <p className="text-white/90 mb-4">
            Comprehensive exam, cleaning, and X-rays for just $99 
            <span className="line-through text-white/60 ml-2">$299</span>
          </p>
          <Button 
            variant="secondary" 
            className="bg-trust text-trust-foreground hover:bg-trust/90"
          >
            Claim Your Offer Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;