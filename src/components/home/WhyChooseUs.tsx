import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Users, MapPin, Shield, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "20+ Years Experience",
      description: "Our experienced team has been serving the community with exceptional dental care.",
      stat: "20+"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10,000+ Happy Patients", 
      description: "Trusted by thousands of families for comprehensive oral health care.",
      stat: "10K+"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Latest Technology",
      description: "State-of-the-art equipment and modern techniques for better outcomes.",
      stat: "100%"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Convenient appointment times including evenings and weekends.",
      stat: "24/7"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Gentle & Caring",
      description: "Patient comfort is our priority with pain-free treatment options.",
      stat: "★4.9"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Convenient Location",
      description: "Easily accessible with ample parking in the heart of the city.",
      stat: "★★★★★"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose SmileCare Dental?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional dental care in a comfortable, 
            modern environment with a personal touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  {/* Background circle */}
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white">
                      {reason.icon}
                    </div>
                  </div>
                  {/* Stat badge */}
                  <div className="absolute -top-2 -right-2 bg-trust text-trust-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {reason.stat}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Insurance & Payment Options
              </h3>
              <p className="text-muted-foreground mb-6">
                We accept most dental insurance plans and offer flexible payment options 
                to make quality dental care accessible to everyone.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span>Most insurance plans accepted</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  <span>Flexible payment plans available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-trust rounded-full mr-3" />
                  <span>CareCredit financing options</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/400/300" 
                alt="Dental office reception and payment area"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;