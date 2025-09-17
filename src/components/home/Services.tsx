import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: "🦷",
      title: "General Dentistry",
      description: "Comprehensive dental care for all ages",
      items: [
        "Dental check-ups & X-rays",
        "Teeth cleaning (prophylaxis)",
        "Kids' care (pediatric dentistry)"
      ]
    },
    {
      icon: "✨",
      title: "Cosmetic Dentistry", 
      description: "Beautiful smiles with advanced aesthetics",
      items: [
        "Braces, aligners & Invisalign (orthodontics)",
        "Teeth whitening"
      ]
    },
    {
      icon: "🔧",
      title: "Restorative Care",
      description: "Repair and restore damaged teeth",
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
            <div key={index} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 bg-secondary rounded-3xl flex items-center justify-center text-3xl md:text-4xl">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm md:text-base text-muted-foreground flex items-start">
                    <span className="text-secondary mr-2 md:mr-3 flex-shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;