import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The team at SmileCare made my dental anxiety disappear. Dr. Smith was incredibly gentle and explained every step. My smile has never looked better!"
    },
    {
      name: "Michael Chen", 
      role: "Teacher",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Professional, clean, and efficient. The online booking system is fantastic and the staff always remembers my preferences. Highly recommend!"
    },
    {
      name: "Emma Rodriguez",
      role: "Nurse",
      image: "/api/placeholder/80/80", 
      rating: 5,
      text: "After years of avoiding the dentist, SmileCare changed everything. The technology is impressive and the care is genuinely compassionate."
    },
    {
      name: "David Thompson",
      role: "Engineer",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "My family has been coming here for 3 years. Great with kids, flexible scheduling, and always transparent about costs. Best dental office in town!"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say 
            about their experience at SmileCare Dental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-trust fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">4.9★</h3>
              <p className="text-sm opacity-90">Average Rating</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">10K+</h3>
              <p className="text-sm opacity-90">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">20+</h3>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">99%</h3>
              <p className="text-sm opacity-90">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;