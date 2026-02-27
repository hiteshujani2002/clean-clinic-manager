import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const TeethScalingPolishing = () => {
  const checklistItems = [
    "Patients noticing yellowing or stains on their teeth",
    "Anyone experiencing bleeding or swollen gums",
    "Individuals concerned about persistent bad breath",
    "Patients who haven't had a professional cleaning in over 6 months",
    "People looking for a non-chemical way to brighten their smile",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Experience a Brighter, Healthier Smile with Professional Scaling
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Maintain peak oral hygiene at Dr. Jyoti's Dental Care. Our expert scaling and polishing services in Andheri East effectively remove plaque and stains, giving you a fresh start for your teeth and gums.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental1}
                  alt="Professional teeth scaling and polishing at Dr. Jyoti's Dental Care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
              The Scaling & Polishing Process
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Using advanced ultrasonic technology, we gently eliminate hardened tartar (calculus) that regular brushing misses. We then finish with professional polishing to remove surface stains from coffee, tea, or food, leaving your teeth smooth and rejuvenated.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs This Section */}
      <section className="py-12 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                Is This Treatment Right for You?
              </h2>
              <ul className="space-y-3">
                {checklistItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary-foreground" />
                    </div>
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[350px] md:h-[400px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental3}
                  alt="Healthy smile after professional scaling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
              Why Regular Cleaning is Essential
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Beyond aesthetics, scaling prevents the onset of gum disease and potential tooth loss. By removing bacterial buildup, we help you maintain the foundation of your smile for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Book Your Professional Cleaning Today
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <Link to="/#inquiries">
                <Calendar className="w-5 h-5" />
                Schedule My Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeethScalingPolishing;
