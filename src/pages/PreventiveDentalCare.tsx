import Layout from '@/components/layout/Layout';
import ClinicalExcellence from '@/components/home/ClinicalExcellence';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import preventiveHero from '@/assets/preventive-hero.png';
import preventiveBenefits from '@/assets/preventive-benefits.png';

const PreventiveDentalCare = () => {
  const checklistItems = [
    "Children and teenagers developing their permanent teeth",
    "Adults looking to avoid costly and complex dental procedures",
    "Patients with a history of frequent cavities or gum sensitivity",
    "Individuals with systemic health conditions like diabetes that affect oral health",
    "Anyone committed to maintaining fresh breath and a natural, healthy smile",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Protect Your Smile with Proactive Preventive Care
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                The best dental treatment is the one you never need. At Dr. Jyoti's Dental Care, our preventive services in Andheri East focus on stopping dental issues before they start, ensuring your teeth and gums stay healthy for a lifetime through regular monitoring and expert guidance.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={preventiveHero}
                  alt="Preventive dental care consultation at Dr. Jyoti's Dental Care"
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
              Our Comprehensive Preventive Approach
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Preventive care goes beyond just a cleaning. It involves detailed oral hygiene education, professional fluoride applications to strengthen enamel, and the application of dental sealants to protect vulnerable surfaces from decay. We use advanced diagnostic tools to monitor your oral health trends and provide personalized care plans tailored to your specific needs.
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
                Why Everyone Benefits from Preventive Care
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
                  alt="Healthy smile through preventive dental care"
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
              The Foundation of Long-Term Oral Health
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Preventive dentistry is the foundation of a healthy body. By managing plaque and bacteria proactively, we reduce the risk of gum disease, which is linked to heart health and overall wellness. Investing in prevention today saves you from the discomfort and expense of restorative treatments tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Invest in Your Future Smile Today
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Start My Wellness Plan
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ClinicalExcellence />
    </Layout>
  );
};

export default PreventiveDentalCare;
