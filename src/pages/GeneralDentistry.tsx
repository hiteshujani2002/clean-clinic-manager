import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental2 from '@/assets/about-dental-2.jpg';

const GeneralDentistry = () => {
  const treatments = [
    {
      name: "Dental Check-ups & X-rays",
      description: "Comprehensive oral examinations with digital X-rays to detect cavities, gum disease, and other dental issues early. We recommend check-ups every 6 months for optimal oral health."
    },
    {
      name: "Teeth Cleaning (Prophylaxis)",
      description: "Professional scaling and polishing to remove plaque, tartar, and surface stains. This preventive treatment helps maintain healthy gums and prevents tooth decay."
    },
    {
      name: "Kids' Care (Pediatric Dentistry)",
      description: "Gentle, child-friendly dental care designed to make your little one's visit comfortable and fun. We focus on building positive dental habits from an early age."
    },
    {
      name: "Fluoride Treatment",
      description: "Protective fluoride applications that strengthen tooth enamel and help prevent cavities, especially beneficial for children and those prone to decay."
    },
    {
      name: "Dental Sealants",
      description: "Thin protective coatings applied to the chewing surfaces of back teeth to prevent food and bacteria from getting stuck in the grooves."
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Our Services
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
                General Dentistry
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive dental care for the whole family. Our general dentistry services focus on prevention, early detection, and maintaining your oral health through regular check-ups and professional treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
                  asChild
                >
                  <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link to="/#services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[450px] animate-fade-in">
              <div className="absolute top-0 right-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-lg z-10">
                <img src={aboutDental1} alt="General dentistry consultation" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
              </div>
              <div className="absolute bottom-0 left-0 w-[50%] h-[55%] rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-background">
                <img src={aboutDental2} alt="Dental check-up" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
              </div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary/20 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our General Dentistry Treatments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of preventive and diagnostic services to keep your smile healthy and bright.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{treatment.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-9">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for General Dentistry */}
      <section className="py-12 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
              Why Choose Us for General Dentistry?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "10+ Years of Clinical Experience",
                "Pain-Free & Gentle Approach",
                "Advanced Digital X-rays",
                "Strict Sterilization Protocols",
                "Family-Friendly Environment",
                "Affordable & Transparent Pricing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full mt-4"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Schedule Your Visit Today
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GeneralDentistry;
