import Layout from '@/components/layout/Layout';
import ClinicalExcellence from '@/components/home/ClinicalExcellence';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const ToothExtraction = () => {
  const checklistItems = [
    "Impacted or painful wisdom teeth causing crowding",
    "Severely decayed teeth that cannot be saved by a Root Canal",
    "Advanced gum disease causing significant tooth looseness",
    "Preparing for orthodontic treatment (braces) to create necessary space",
    "Fractured or broken teeth that are damaged below the gum line",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Gentle and Safe Tooth Extractions with Expert Care
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Dr. Jyoti's Dental Care, we prioritize your comfort for all surgical procedures. Whether it's a simple extraction or complex wisdom tooth removal in Andheri East, our team uses gentle techniques and proper after-care to ensure a smooth and painless recovery.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental1}
                  alt="Gentle tooth extraction at Dr. Jyoti's Dental Care"
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
              The Extraction & Wisdom Tooth Process
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              After a thorough examination and digital X-ray, the area is completely numbed to ensure you feel no pain. For wisdom teeth, we carefully manage the surrounding tissue to remove the tooth efficiently. Once removed, we provide detailed post-operative instructions and support to facilitate fast healing and prevent complications.
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
                When is an Extraction Necessary?
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
                  alt="Professional tooth extraction care"
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
              Protecting Your Oral Health
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              While saving natural teeth is always our first goal, removing a compromised or impacted tooth is often essential to prevent infections, cysts, or damage to neighboring healthy teeth. Timely extraction of problematic wisdom teeth can prevent future pain and maintain the alignment of your smile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Concerned About a Problematic Tooth?
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Schedule a Consultation
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

export default ToothExtraction;
