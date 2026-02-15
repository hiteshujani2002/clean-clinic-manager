import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import serviceGeneral from '@/assets/service-general.jpg';
import serviceCosmetic from '@/assets/service-cosmetic.jpg';
import serviceRestorative from '@/assets/service-restorative.jpg';

const Services = () => {
  const services = [
    {
      image: serviceGeneral,
      title: "General Dentistry",
      description: "Complete oral health solutions for your family, from routine cleanings to detailed X-rays.",
      href: "/general-dentistry",
      items: [
        "Dental check-ups & X-rays",
        "Teeth cleaning (prophylaxis)",
        "Kids' care (pediatric dentistry)"
      ]
    },
    {
      image: serviceCosmetic,
      title: "Cosmetic Dentistry",
      description: "Enhance your natural smile with our advanced whitening and invisible aligner treatments.",
      href: "/cosmetic-dentistry",
      items: [
        "Braces, aligners & Invisalign (orthodontics)",
        "Teeth whitening"
      ]
    },
    {
      image: serviceRestorative,
      title: "Restorative Care",
      description: "Durable and natural-looking solutions to restore your teeth's strength and function.",
      href: "/restorative-care",
      items: [
        "Root canal treatment",
        "Crowns & bridges",
        "Surgical extractions",
        "Dental implants",
        "Gum surgeries (periodontal)"
      ]
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md border border-border/60 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 md:space-y-3 flex-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm md:text-base text-muted-foreground flex items-start">
                      <span className="text-secondary mr-2 md:mr-3 flex-shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
