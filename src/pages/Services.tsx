import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smile, Shield, Sparkles, Zap, Heart, Star, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: "General Dentistry",
      icon: <Smile className="w-8 h-8" />,
      color: "from-primary to-primary-dark",
      services: [
        { name: "Routine Cleanings", description: "Professional dental cleanings every 6 months", price: "From $120", duration: "45 mins" },
        { name: "Dental Fillings", description: "Tooth-colored composite fillings", price: "From $180", duration: "30 mins" },
        { name: "Root Canal Treatment", description: "Pain-free root canal therapy", price: "From $800", duration: "90 mins" },
        { name: "Dental Crowns", description: "Custom porcelain crowns", price: "From $1,200", duration: "2 visits" },
        { name: "Tooth Extractions", description: "Gentle tooth removal when necessary", price: "From $200", duration: "30 mins" }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-secondary to-green-600",
      services: [
        { name: "Teeth Whitening", description: "Professional in-office whitening", price: "From $400", duration: "60 mins" },
        { name: "Porcelain Veneers", description: "Custom-made porcelain veneers", price: "From $1,000", duration: "2-3 visits" },
        { name: "Dental Bonding", description: "Repair chips and gaps with bonding", price: "From $300", duration: "45 mins" },
        { name: "Smile Makeover", description: "Complete smile transformation", price: "From $5,000", duration: "Multiple visits" },
        { name: "Gum Contouring", description: "Reshape gums for better smile", price: "From $600", duration: "60 mins" }
      ]
    },
    {
      category: "Orthodontics",
      icon: <Shield className="w-8 h-8" />,
      color: "from-trust to-yellow-500",
      services: [
        { name: "Traditional Braces", description: "Metal braces for all ages", price: "From $3,500", duration: "18-24 months" },
        { name: "Clear Aligners", description: "Invisible teeth straightening", price: "From $4,000", duration: "12-18 months" },
        { name: "Ceramic Braces", description: "Tooth-colored braces", price: "From $4,500", duration: "18-24 months" },
        { name: "Retainers", description: "Custom retainers after treatment", price: "From $300", duration: "1 visit" }
      ]
    },
    {
      category: "Advanced Treatments",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Dental Implants", description: "Permanent tooth replacement", price: "From $3,000", duration: "3-6 months" },
        { name: "All-on-4 Implants", description: "Full arch restoration", price: "From $20,000", duration: "Multiple visits" },
        { name: "Bone Grafting", description: "Rebuild jawbone for implants", price: "From $800", duration: "60 mins" },
        { name: "Sinus Lift", description: "Prepare upper jaw for implants", price: "From $1,500", duration: "90 mins" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light via-background to-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Dental Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From routine care to advanced treatments, we offer a full range of dental services 
            using the latest technology and techniques for optimal results.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-foreground">{category.category}</h2>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <Badge variant="secondary">{service.duration}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced Dental Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use state-of-the-art equipment and modern techniques to provide 
              the most comfortable and effective treatments possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital X-Rays</h3>
                <p className="text-muted-foreground text-sm">
                  Low-radiation digital imaging for accurate diagnosis and treatment planning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">CEREC Same-Day Crowns</h3>
                <p className="text-muted-foreground text-sm">
                  Create and place custom crowns in a single visit using advanced CAD/CAM technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-trust" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Laser Dentistry</h3>
                <p className="text-muted-foreground text-sm">
                  Minimally invasive laser treatments for gum disease and soft tissue procedures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Care */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dental Emergency? We're Here to Help
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't let dental pain disrupt your life. Our emergency dental services 
            are available 24/7 to provide immediate relief and treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Call Emergency Line: (555) 911-HELP
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Emergency Callback
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;