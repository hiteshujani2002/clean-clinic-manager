import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "Dentist",
      image: "/api/placeholder/300/300",
      experience: "15+ years"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Dentist", 
      image: "/api/placeholder/300/300",
      experience: "20+ years"
    }
  ];

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Our Doctors
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            Dental Experts You Can Trust
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Badge
            variant="default"
            className="px-6 py-2 rounded-full bg-primary text-secondary"
          >
            Dentists
          </Badge>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-square">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-secondary mb-1">{doctor.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground">{doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;