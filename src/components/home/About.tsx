import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const categories = [
    { name: "All Experts", active: true },
    { name: "Dentists", active: false },
    { name: "Surgeons", active: false },
    { name: "Orthodontists", active: false }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "Dentist",
      image: "/api/placeholder/300/300",
      experience: "15+ years"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Surgeon", 
      image: "/api/placeholder/300/300",
      experience: "20+ years"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Orthodontist",
      image: "/api/placeholder/300/300", 
      experience: "12+ years"
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
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`px-6 py-2 rounded-full cursor-pointer transition-colors ${
                category.active 
                  ? "bg-primary text-secondary hover:bg-primary/90" 
                  : "bg-transparent border-border text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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