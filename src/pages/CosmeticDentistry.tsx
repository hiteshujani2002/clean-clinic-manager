import Layout from '@/components/layout/Layout';
import ClinicalExcellence from '@/components/home/ClinicalExcellence';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import cosmeticHero from '@/assets/cosmetic-hero.png';

const CosmeticDentistry = () => {
  const checklistItems = [
    "Dull, stained, or discolored teeth that resist standard cleaning",
    "Chipped, cracked, or worn-down tooth edges",
    "Gaps between teeth or minor misalignments",
    "Irregularly shaped or unevenly sized teeth",
    "Patients looking for a complete \"Smile Makeover\" for special occasions",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Transform Your Confidence with Expert Cosmetic Dentistry
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At Dr. Jyoti's Dental Care, we combine dental science with artistry to design the smile of your dreams. From professional whitening to full smile makeovers in Andheri East, we offer personalized cosmetic solutions to enhance your natural beauty and boost your self-esteem.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental3}
                  alt="Beautiful smile transformation at Dr. Jyoti's Dental Care"
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
              Our Aesthetic Approach
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Every cosmetic journey begins with a detailed smile analysis where we consider your facial features, tooth color, and alignment. Whether you are opting for veneers, bonding, or professional whitening, we use high-grade materials and precise techniques to ensure your results look both stunning and natural.
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
                Common Aesthetic Concerns We Address
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
                  src={aboutDental1}
                  alt="Cosmetic dental treatment results"
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
              The Power of a Confident Smile
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cosmetic dentistry is about more than just looks; it's about the confidence that comes with a healthy, radiant smile. Beyond aesthetics, many cosmetic treatments—like bonding and veneers—also provide an extra layer of protection to your natural teeth, improving both form and function.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Ready to Reveal Your Best Smile?
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=919167544950" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Book Your Smile Consultation
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

export default CosmeticDentistry;
