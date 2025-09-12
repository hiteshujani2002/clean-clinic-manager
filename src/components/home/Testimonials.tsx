import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jeremy Curry",
      avatar: "/api/placeholder/60/60",
      rating: 5.0,
      text: "I've always been anxious about visiting the dentist, but when I walked into SmileCare, I felt at ease. The staff was incredibly welcoming, and Dr. Wilson took the time to explain everything in detail. The treatment was completely painless, and the results exceeded my expectations.",
    },
    {
      name: "Helena Erickson",
      avatar: "/api/placeholder/60/60", 
      rating: 4.8,
      text: "I had been putting off my dental check-up for years due to bad past experiences. A friend recommended SmileCare, and I'm so glad they did! Dr. Chen was kind, patient, and extremely thorough. I needed a filling, and it was done perfectly without any discomfort.",
    },
    {
      name: "Sarah Mitchell", 
      avatar: "/api/placeholder/60/60",
      rating: 5.0,
      text: "After years of being self-conscious about my smile, I finally decided to look into cosmetic dentistry. The team at SmileCare walked me through all my options and helped me choose the best treatment. They delivered exactly what they promised, and now I smile with confidence!",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm bg-card rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-trust text-trust" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="text-right max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-secondary mb-2">Smiles That Speak</h3>
            <p className="text-muted-foreground text-sm">
              Here's what our patients say about their transformative experiences with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;