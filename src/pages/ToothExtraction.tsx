import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental2 from '@/assets/about-dental-2.jpg';
import aboutDental1 from '@/assets/about-dental-1.jpg';

const ToothExtraction = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const treatments = [
    {
      name: "Simple Tooth Extraction",
      description: "Quick and gentle removal of damaged or decayed teeth that cannot be saved, performed with local anesthesia for a pain-free experience."
    },
    {
      name: "Wisdom Tooth Removal",
      description: "Expert extraction of impacted or partially erupted wisdom teeth to prevent pain, infection, and crowding of adjacent teeth."
    },
    {
      name: "Surgical Extraction",
      description: "Advanced surgical techniques for complex cases including broken teeth, teeth with curved roots, or teeth embedded in the jawbone."
    },
    {
      name: "Post-Extraction Care",
      description: "Comprehensive aftercare guidance and follow-up to ensure proper healing and prevent complications like dry socket."
    }
  ];

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Our Services</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Tooth Extraction & Wisdom Tooth Removal</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Safe and gentle tooth extractions, including wisdom teeth removal, are performed with minimal discomfort and proper after-care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full" asChild>
                  <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5" />Book Appointment
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link to="/#services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[450px] animate-fade-in">
              <div className="absolute top-0 right-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-lg z-10">
                <img src={aboutDental2} alt="Tooth extraction" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[50%] h-[55%] rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-background">
                <img src={aboutDental1} alt="Wisdom tooth care" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary/20 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Our Extraction Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Safe, gentle, and pain-free tooth extractions with expert aftercare.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

      <section className="py-12 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">Need a Tooth Extracted?</h2>
            <p className="text-muted-foreground">Our experienced team ensures safe, comfortable extractions with thorough aftercare guidance for quick recovery.</p>
            <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full" asChild>
              <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />Book Your Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToothExtraction;
