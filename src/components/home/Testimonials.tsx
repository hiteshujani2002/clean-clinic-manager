import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rati Kanade",
      avatar: "/api/placeholder/60/60",
      rating: 5.0,
      text: "Dr. Jyoti performed my re-root canal treatment, and I couldn't be more grateful. I had previously undergone a root canal with another dentist but continued to experience severe pain. Dr. Jyoti not only saved my tooth but also did an excellent job with the procedure. I am now completely pain-free and able to eat comfortably. Highly recommended!",
    },
    {
      name: "Hira Panhalkar",
      avatar: "/api/placeholder/60/60", 
      rating: 5.0,
      text: "Recently I got my root canal treatment done, the team is excellent in work. It was painless and quick. The assistant is also very cooperative with the appointments as it was very difficult for me to take out time with my office. Thanks team! Best dental clinic I found on google.",
    },
    {
      name: "Karina Vishwakarma", 
      avatar: "/api/placeholder/60/60",
      rating: 5.0,
      text: "I have done my root canal treatment with Dr Jyoti recently. I must say I had very good experience, it was painless and very reasonable price. Dr Jyoti is very experienced and her staff are very well trained. Thanks team! Dr Jyoti dental care is the best dental clinic in Andheri East.",
    },
    {
      name: "Apurva Bhoir",
      avatar: "/api/placeholder/60/60",
      rating: 5.0,
      text: "Saw the Google reviews and visited the clinic, team is really experienced and on top of the toe to hear your request. Did my filling and root canal treatment. Highly recommend in Andheri area.",
    },
    {
      name: "Abhishek Pandey",
      avatar: "/api/placeholder/60/60",
      rating: 5.0,
      text: "Dr. Jyoti's clinic is best for all dental procedures I had a very good experience in terms of understanding the root cause of my dental problem and the procedure to get it cured. I would highly recommend and wish well to Dr. Jyoti and her team for doing excellent job.",
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const step = isDesktop ? 3 : 1;
      return (prev + step) >= testimonials.length ? 0 : prev + step;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const step = isDesktop ? 3 : 1;
      return prev - step < 0 ? Math.max(0, testimonials.length - step) : prev - step;
    });
  };

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

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background border-border hover:bg-accent rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background border-border hover:bg-accent rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {/* Mobile: Show single testimonial */}
            <div className="block md:hidden">
              <Card className="border-0 shadow-sm bg-card rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback className="text-lg">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary">{testimonials[currentIndex].name}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">{testimonials[currentIndex].rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Desktop: Show 3 testimonials */}
            {Array.from({ length: 3 }, (_, i) => {
              const testimonialIndex = (currentIndex + i) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              return (
                <div key={testimonialIndex} className="hidden md:block">
                  <Card className="border-0 shadow-sm bg-card rounded-2xl h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star key={starIndex} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">{testimonial.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {/* Mobile dots - show all testimonials */}
            <div className="flex md:hidden space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            {/* Desktop dots - show sets of 3 */}
            <div className="hidden md:flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / 3) === index ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="text-center max-w-4xl mx-auto">
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