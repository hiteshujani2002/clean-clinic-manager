import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutDental1 from '@/assets/about-dental-1.jpg';
import aboutDental2 from '@/assets/about-dental-2.jpg';
import aboutDental3 from '@/assets/about-dental-3.jpg';

const GeneralDentistry = () => {
  const checklistItems = [
    "People prone to plaque and tartar buildup",
    "Individuals with gum disease or bleeding gums",
    "Patients with braces or other dental appliances",
    "Smokers or people with poor oral hygiene habits",
    "Anyone wanting to maintain fresh breath and a clean smile",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                General Dentistry & Dental Check-ups in Andheri East
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We provide comprehensive dental check-ups to diagnose cavities, gum problems, and oral health issues at an early stage. Regular check-ups help prevent major dental treatments in the future.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Regular cleanings, typically recommended every six months, are essential for maintaining healthy teeth and preventing more serious dental issues. The procedure is quick, painless, and a vital part of your overall oral health care routine.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                During the cleaning, a hygienist uses specialized tools to scale away hardened deposits and polish the teeth for a smooth, clean finish.
              </p>
            </div>
            <div className="relative h-[350px] md:h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutDental1}
                  alt="General dentistry consultation at Dr. Jyoti's Dental Care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens During Your Visit */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
              What Happens During Your Visit?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A comprehensive dental check-up includes plaque and tartar removal (scaling), teeth polishing, and a thorough examination of your teeth and gums. In some cases, digital X-rays may be taken to assess underlying issues and ensure a precise diagnosis.
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary pt-6">
              Why is a Dental Check-up Important?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Regular cleanings help prevent cavities, gingivitis, and bad breath. They also reduce the risk of gum disease and can improve overall health, as oral health is closely linked to heart and immune system health.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Schedule a Check-up */}
      <section className="py-12 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                Who Should Schedule a Check-up?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Preventive care is important for everyone, regardless of age. Regular cleanings help prevent disease and detect problems early. However, some people may benefit even more from frequent cleanings.
              </p>
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
                  alt="Healthy smile after dental check-up"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center md:text-left">
              Want To Schedule An Appointment?
            </h2>
            <Button
              size="lg"
              className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8"
              asChild
            >
              <Link to="/#inquiries">
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GeneralDentistry;
