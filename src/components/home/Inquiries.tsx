import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';
import { useToast } from '@/hooks/use-toast';

const LocationMap = lazy(() => import('./LocationMap'));

const Inquiries = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkgplkzd', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      name: "Sher-E-Punjab",
      address: "Shop no 17, HILTON TOWER, Jijamata Rd, Sher E Punjab, Andheri East, Mumbai 400093",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shop+no+17+HILTON+TOWER+Jijamata+Rd+Sher+E+Punjab+Andheri+East+Mumbai+400093"
    },
    {
      name: "Pump House Clinic",
      address: "Shop no.15, New Pump House, Jijamata chowk, opposite Hanjar nagar society, Andheri East, Mumbai 400093",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shop+no+15+New+Pump+House+Jijamata+chowk+opposite+Hanjar+nagar+society+Andheri+East+Mumbai+400093"
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            Contact Us for Inquiries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Need to schedule an appointment? 
            We're here to help you achieve your perfect smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-secondary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="New inquiry from homepage" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" className="rounded-xl" required />
                  <Input name="lastName" placeholder="Last Name" className="rounded-xl" required />
                </div>
                <Input name="email" placeholder="Email Address" type="email" className="rounded-xl" required />
                <Input name="phone" placeholder="Phone Number" type="tel" className="rounded-xl" required />
                <Textarea 
                  name="message"
                  placeholder="Tell us about your dental needs or questions..."
                  className="min-h-32 rounded-xl resize-none"
                  required
                />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <p className="text-muted-foreground">9167544950 / 9321844795 / 8369962388</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-muted-foreground">drjyotisdentalcare@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <div>Monday - Saturday: 10:00 AM - 9:00 PM</div>
                      <div>Sunday: Closed (Available by prior appointment only)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-secondary flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              Our Locations
            </h3>
          </div>
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden relative z-0">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row min-h-[320px]">
                {/* Google Maps Embed - Left Side */}
                <div className="w-full lg:w-1/2 h-[280px] lg:h-auto relative overflow-hidden rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl isolate" style={{ zIndex: 0 }}>
                  <Suspense fallback={<div className="w-full h-full min-h-[280px] bg-muted animate-pulse" />}>
                    <LocationMap />
                  </Suspense>
                </div>
                
                {/* Location Cards - Right Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  {locations.map((location, index) => (
                    <div 
                      key={index} 
                      className={`flex-1 p-6 flex flex-col justify-center ${
                        index === 0 ? 'border-b lg:border-b border-border/50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary mb-1">{location.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{location.address}</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-fit rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white"
                        asChild
                      >
                        <a 
                          href={location.directionsUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Inquiries;