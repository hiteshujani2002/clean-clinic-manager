import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const RootCanalTreatment = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const treatments = [
    {
      name: "Single-Visit Root Canal",
      description: "Advanced techniques allow us to complete many root canal treatments in a single appointment, saving you time while ensuring thorough treatment."
    },
    {
      name: "Painless RCT with Modern Anesthesia",
      description: "Using the latest anesthesia methods, we ensure your root canal treatment is completely pain-free from start to finish."
    },
    {
      name: "Post & Core Restoration",
      description: "After root canal treatment, we place a post and core to strengthen the tooth before fitting a protective crown for long-lasting results."
    },
    {
      name: "Re-Root Canal Treatment",
      description: "Specialized retreatment for previously treated teeth that have developed new infections or complications."
    }
  ];

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Our Services</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Root Canal Treatment (RCT)</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clinic provides painless root canal treatment in Andheri East, using advanced techniques to save infected teeth and eliminate tooth pain.
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
                <img src={aboutDental1} alt="Root canal treatment" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[50%] h-[55%] rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-background">
                <img src={aboutDental3} alt="Painless dental care" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary/20 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Our Root Canal Treatments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Save your natural teeth with our advanced, painless root canal procedures.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">End Your Tooth Pain Today</h2>
            <p className="text-muted-foreground">Don't suffer in silence. Our painless root canal treatment can save your tooth and relieve your pain quickly.</p>
            <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full" asChild>
              <a href="https://api.whatsapp.com/send/?phone=919167544950&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />Get Pain Relief Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RootCanalTreatment;
