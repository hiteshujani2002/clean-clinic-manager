import { Check } from 'lucide-react';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental2 from '@/assets/about-dental-2.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const AboutUs = () => {
  const values = [
    "10+ Years Experience",
    "Patient-First Approach",
    "Advanced Technology",
    "Strict Sterilization"
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Creative Image Composition */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[550px] animate-fade-in">
            {/* Main large image */}
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-lg z-10">
              <img 
                src={aboutDental1} 
                alt="Dentist consulting with patient"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top right smaller image */}
            <div className="absolute top-0 right-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-background">
              <img 
                src={aboutDental3} 
                alt="Happy patient with beautiful smile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom right image */}
            <div className="absolute bottom-0 right-4 w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-lg z-30 border-4 border-background">
              <img 
                src={aboutDental2} 
                alt="Modern dental equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/10 rounded-full -z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                About Us
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Dr. Jyoti's Dental Care, we are committed to providing ethical, gentle, and advanced dental care in Andheri East, Mumbai. Led by Dr. Jyoti Arora, BDS, our clinic focuses on preventive, restorative, and cosmetic dentistry for all age groups.
              </p>
              <p>
                With over 10 years of clinical experience, we prioritize a patient-first, pain-free, and transparent approach—ensuring every patient feels comfortable and informed.
              </p>
              <p>
                Conveniently located in Sher-E-Punjab, we are easily accessible from JB Nagar, Marol, Chakala, and MIDC. We use modern equipment and strict sterilization protocols for everything from routine check-ups to advanced root canals and cosmetic procedures.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 transition-all duration-300 hover:bg-primary/10"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
