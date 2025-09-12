import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight">
              Ready for Your Perfect Smile?
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards a healthier, 
              more confident smile with our expert dental care.
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-8 py-6 text-lg"
            asChild
          >
            <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" />
              Book My Appointment
            </a>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-foreground mb-2">10,000+</div>
              <div className="text-secondary-foreground/70">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-foreground mb-2">20+</div>
              <div className="text-secondary-foreground/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-foreground mb-2">4.9/5</div>
              <div className="text-secondary-foreground/70">Patient Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;