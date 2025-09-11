import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Shield, Sparkles, Zap, Heart, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Checkups", "Cavity Fillings", "Root Canal Treatment", "Gum Disease Treatment"],
      color: "from-primary to-primary-dark"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cosmetic Dentistry", 
      description: "Transform your smile with our advanced cosmetic procedures and treatments.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
      color: "from-secondary to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or modern clear aligners.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
      color: "from-trust to-yellow-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dental Implants",
      description: "Replace missing teeth with permanent, natural-looking implants.",
      features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Implant Crowns"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent oral health needs.",
      features: ["Tooth Pain Relief", "Trauma Care", "Same-Day Appointments", "Emergency Surgery"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Pediatric Dentistry",
      description: "Gentle, specialized dental care designed specifically for children.",
      features: ["Kid-Friendly Environment", "Preventive Care", "Fluoride Treatments", "Dental Education"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine cleanings to complex procedures, our experienced team provides 
            personalized care using the latest technology and techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
            View All Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;