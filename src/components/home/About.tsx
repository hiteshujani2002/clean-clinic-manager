import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import drNagrajImage from '@/assets/dr-nagraj.jpg';
import drRunalImage from '@/assets/dr-runal.jpg';

const About = () => {
  const doctors = [
    {
      name: "Dr. Nagraj",
      specialty: "Dentist",
      image: drNagrajImage,
      experience: "3+ years",
      bio: "Dr. Nagraj is an alumnus of Nair Hospital Dental College with 3+ years of clinical experience and worked at Sion and KEM Hospitals. He currently practices as an Associate Dentist at Dr Jyoti's Dental Care. With a special interest in aesthetic and cosmetic dentistry, he focuses on smile design and minimally invasive treatments. Dr. Nagraj is committed to delivering ethical, patient-centered care with precision and compassion."
    },
    {
      name: "Dr. Runal",
      specialty: "Dentist", 
      image: drRunalImage,
      experience: "3 years",
      bio: "Dr. Runal is an alumnus of Nair Hospital Dental College with 3 years of clinical experience and worked at Sion and KEM Hospitals. He currently works as an Associate Dentist at Dr. Jyoti's Dental Care. His core interests lie in restorative dentistry and endodontics, focusing on functional and long-lasting dental solutions. He strives to combine clinical skill with patient comfort to ensure high-quality dental care."
    }
  ];

  return (
    <section className="pt-8 pb-8 lg:pt-12 lg:pb-12 bg-muted/30">
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
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-secondary mb-1">{doctor.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{doctor.specialty}</p>
                  <p className="text-xs text-muted-foreground">{doctor.experience}</p>
                </div>
                {doctor.bio && (
                  <p className="text-base text-muted-foreground leading-relaxed text-left">
                    {doctor.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;