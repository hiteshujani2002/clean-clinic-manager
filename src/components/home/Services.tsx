import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import serviceGeneralDentistry from '@/assets/service-general-dentistry.jpg';
import serviceTeethScaling from '@/assets/service-teeth-scaling.jpg';
import serviceDentalFillings from '@/assets/service-dental-fillings.jpg';
import serviceRootCanal from '@/assets/service-root-canal.jpg';
import serviceToothExtraction from '@/assets/service-tooth-extraction.jpg';
import serviceCosmeticDentistry from '@/assets/service-cosmetic-dentistry.jpg';
import servicePreventiveCare from '@/assets/service-preventive-care.jpg';

const Services = () => {
  const services = [
    {
      image: serviceGeneralDentistry,
      title: "General Dentistry & Dental Check-ups",
      description: "We provide comprehensive dental check-ups in Andheri East to diagnose cavities, gum problems, and oral health issues at an early stage. Regular check-ups help prevent major dental treatments in the future.",
      href: "/general-dentistry",
    },
    {
      image: serviceTeethScaling,
      title: "Teeth Scaling & Polishing",
      description: "Professional teeth cleaning and scaling in Andheri East helps remove plaque, tartar, and stains. This treatment is essential for healthy gums and fresh breath.",
      href: "/general-dentistry",
    },
    {
      image: serviceDentalFillings,
      title: "Dental Fillings (Composite Fillings)",
      description: "We offer tooth-colored composite fillings for cavities to restore your tooth's natural appearance and function.",
      href: "/restorative-care",
    },
    {
      image: serviceRootCanal,
      title: "Root Canal Treatment (RCT)",
      description: "Our clinic provides painless root canal treatment in Andheri East, using advanced techniques to save infected teeth and eliminate tooth pain.",
      href: "/restorative-care",
    },
    {
      image: serviceToothExtraction,
      title: "Tooth Extraction & Wisdom Tooth Removal",
      description: "Safe and gentle tooth extractions, including wisdom teeth removal, are performed with minimal discomfort and proper after-care.",
      href: "/restorative-care",
    },
    {
      image: serviceCosmeticDentistry,
      title: "Cosmetic Dentistry",
      description: "Improve your smile with cosmetic dental treatments such as teeth whitening, smile correction, and aesthetic restorations.",
      href: "/cosmetic-dentistry",
    },
    {
      image: servicePreventiveCare,
      title: "Preventive Dental Care",
      description: "We focus on preventive dentistry, including oral hygiene education, fluoride treatments, and regular monitoring to maintain long-term dental health.",
      href: "/general-dentistry",
    },
  ];

  return (
    <section className="pt-8 pb-8 lg:pt-12 lg:pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-block">
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            Dental Services for Every Need
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              From preventive care to advanced cosmetic and restorative treatments, 
              we provide a full range of dental services tailored to your needs.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8">
              Explore All Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md border border-border/60 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
              />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors group"
                    asChild
                  >
                    <Link to={service.href}>
                      View All Details
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
