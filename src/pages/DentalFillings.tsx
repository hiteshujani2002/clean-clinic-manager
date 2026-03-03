import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const DentalFillings = () => {
  const checklistItems = [
    "Visible cavities or dark spots on the surface of your teeth",
    "Sensitivity to hot, cold, or sugary foods and drinks",
    "Food frequently getting trapped between specific teeth",
    "Minor chips or fractures in the tooth structure",
    "Replacing old, worn-out silver amalgam fillings with aesthetic composite",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Restore Your Smile with Seamless Tooth-Colored Fillings
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Dr. Jyoti's Dental Care, we specialize in high-quality composite fillings in Andheri East that blend perfectly with your natural teeth. Our goal is to restore the strength and function of your tooth while maintaining a flawless, aesthetic appearance.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental1}
                  alt="Tooth-colored dental filling restoration at Dr. Jyoti's Dental Care"
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
              The Composite Filling Process
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              After gently removing the decayed portion of the tooth, we apply a durable, tooth-colored composite resin in layers. Each layer is hardened using a specialized curing light, and the final filling is shaped and polished to match the contours of your natural bite perfectly.
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
                Signs You May Need a Dental Filling
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
                  alt="Healthy smile after dental filling treatment"
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
              Why Choose Composite Fillings?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Unlike traditional metal fillings, composite resins bond directly to the tooth structure, providing extra support. They require less tooth removal, prevent further decay, and are virtually invisible, ensuring your smile stays both healthy and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Don't Let a Small Cavity Turn Into a Big Problem
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Book Your Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DentalFillings;
