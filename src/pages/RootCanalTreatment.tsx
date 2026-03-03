import Layout from '@/components/layout/Layout';
import ClinicalExcellence from '@/components/home/ClinicalExcellence';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const RootCanalTreatment = () => {
  const checklistItems = [
    "Severe toothache that worsens with chewing or pressure",
    "Lingering sensitivity to hot or cold temperatures",
    "Discoloration or darkening of a single tooth",
    "Swelling or tenderness in the nearby gums",
    "A recurring pimple-like bump (abscess) on the gums",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Save Your Natural Tooth with Advanced Root Canal Therapy
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Dr. Jyoti's Dental Care, we provide expert root canal treatment in Andheri East using modern, painless techniques. Our priority is to eliminate your tooth pain and save your natural tooth from extraction, restoring your oral health with precision and care.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental1}
                  alt="Modern root canal treatment setup at Dr. Jyoti's Dental Care"
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
              What to Expect During Your RCT
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A Root Canal involves removing the infected or damaged pulp from within the tooth. The canals are then meticulously cleaned, disinfected, and shaped before being sealed with a biocompatible material. This process removes the source of infection, stops the pain, and prepares the tooth for a protective crown.
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
                Common Symptoms Requiring a Root Canal
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
                  alt="Patient smiling after root canal treatment"
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
              The Importance of Timely Treatment
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ignoring an infected tooth can lead to the spread of bacteria, bone loss around the root, and eventual tooth loss. A root canal is a highly successful procedure that allows you to keep your natural tooth, maintaining your bite alignment and preventing the need for more complex implants or bridges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Stop the Pain and Save Your Smile Today
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Request an Evaluation
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

export default RootCanalTreatment;
