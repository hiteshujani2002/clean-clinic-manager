import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Award, GraduationCap, MapPin } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      title: "General Dentist & Practice Owner",
      image: "/api/placeholder/300/300",
      specialties: ["General Dentistry", "Cosmetic Dentistry", "Preventive Care"],
      education: [
        "DDS, University of California San Francisco",
        "Residency in General Dentistry, UCSF Medical Center"
      ],
      experience: "15+ years",
      languages: ["English", "Spanish"],
      certifications: ["American Dental Association", "California Dental Association"],
      rating: 4.9,
      reviews: 247,
      bio: "Dr. Johnson is passionate about providing gentle, comprehensive dental care. She believes in building long-term relationships with her patients and helping them achieve optimal oral health through prevention and education."
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      image: "/api/placeholder/300/300",
      specialties: ["Orthodontics", "Invisalign", "TMJ Treatment"],
      education: [
        "DDS, Harvard School of Dental Medicine",
        "Orthodontic Residency, Boston University"
      ],
      experience: "12+ years",
      languages: ["English", "Mandarin", "Cantonese"],
      certifications: ["American Association of Orthodontists", "Invisalign Certified"],
      rating: 4.8,
      reviews: 189,
      bio: "Dr. Chen specializes in creating beautiful, healthy smiles using the latest orthodontic techniques. He is dedicated to making orthodontic treatment comfortable and effective for patients of all ages."
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Oral Surgeon",
      image: "/api/placeholder/300/300",
      specialties: ["Oral Surgery", "Dental Implants", "Wisdom Teeth Extraction"],
      education: [
        "DDS, New York University College of Dentistry",
        "Oral Surgery Residency, Mount Sinai Hospital"
      ],
      experience: "10+ years",
      languages: ["English", "Spanish", "Portuguese"],
      certifications: ["American Association of Oral Surgeons", "Dental Implant Certified"],
      rating: 4.9,
      reviews: 156,
      bio: "Dr. Rodriguez brings expertise in complex oral surgical procedures with a focus on patient comfort and successful outcomes. She is skilled in the latest implant techniques and minimally invasive surgery."
    },
    {
      name: "Dr. David Thompson",
      title: "Pediatric Dentist",
      image: "/api/placeholder/300/300",
      specialties: ["Pediatric Dentistry", "Special Needs Dentistry", "Sedation Dentistry"],
      education: [
        "DDS, University of Pennsylvania School of Dental Medicine",
        "Pediatric Dentistry Residency, Children's Hospital of Philadelphia"
      ],
      experience: "8+ years",
      languages: ["English", "French"],
      certifications: ["American Academy of Pediatric Dentistry", "Special Care Dentistry"],
      rating: 5.0,
      reviews: 98,
      bio: "Dr. Thompson creates a fun, comfortable environment for children while providing exceptional dental care. He specializes in treating children with special needs and uses gentle techniques to ensure positive dental experiences."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light via-background to-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our experienced dentists are committed to providing exceptional care with 
            a gentle touch. Each brings unique expertise and years of experience to serve you better.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  {/* Doctor Image */}
                  <div className="md:w-1/3">
                    <img 
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Doctor Info */}
                  <CardContent className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{doctor.name}</h3>
                      <p className="text-primary font-semibold">{doctor.title}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center mt-2">
                        <div className="flex text-trust mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {doctor.rating} ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Experience & Languages */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="flex items-center mb-1">
                          <Award className="w-4 h-4 text-primary mr-2" />
                          <span className="font-semibold">Experience</span>
                        </div>
                        <p className="text-muted-foreground">{doctor.experience}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <MapPin className="w-4 h-4 text-primary mr-2" />
                          <span className="font-semibold">Languages</span>
                        </div>
                        <p className="text-muted-foreground">{doctor.languages.join(', ')}</p>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-4 h-4 text-primary mr-2" />
                        <span className="font-semibold text-sm">Education</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {doctor.education.map((edu, eduIndex) => (
                          <li key={eduIndex}>• {edu}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>

                    {/* CTA Button */}
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book with {doctor.name.split(' ')[1]}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience and expertise you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">45+</h3>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-secondary mb-2">15+</h3>
              <p className="text-muted-foreground">Advanced Certifications</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-trust mb-2">690+</h3>
              <p className="text-muted-foreground">Patient Reviews</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">4.9★</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Meet Your New Dentist?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with one of our expert dentists and experience 
            the difference personalized dental care can make.
          </p>
          <Button size="lg" variant="secondary">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Doctors;