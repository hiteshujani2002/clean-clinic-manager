import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, CreditCard, Shield, Calendar, Phone } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Care Plan",
      price: "$29",
      period: "/month",
      description: "Essential dental care for maintaining oral health",
      features: [
        "2 Annual Cleanings",
        "2 Annual Exams", 
        "Annual X-rays",
        "Fluoride Treatment",
        "20% Off Additional Services",
        "Emergency Consultation"
      ],
      popular: false,
      savings: "Save $180/year"
    },
    {
      name: "Complete Care Plan",
      price: "$49",
      period: "/month",
      description: "Comprehensive dental care with enhanced benefits",
      features: [
        "3 Annual Cleanings",
        "2 Annual Exams",
        "Digital X-rays",
        "Periodontal Screening",
        "30% Off Additional Services",
        "Priority Scheduling",
        "Free Whitening Treatment",
        "Emergency Care 24/7"
      ],
      popular: true,
      savings: "Save $420/year"
    },
    {
      name: "Family Care Plan",
      price: "$99",
      period: "/month",
      description: "Complete family dental care for up to 4 members",
      features: [
        "All Complete Plan Benefits",
        "Covers Up to 4 Family Members",
        "Pediatric Dental Care",
        "Orthodontic Consultation",
        "40% Off Additional Services",
        "Family Scheduling Coordination",
        "Dental Education Programs"
      ],
      popular: false,
      savings: "Save $800/year"
    }
  ];

  const individualServices = [
    {
      category: "Preventive Care",
      services: [
        { name: "Dental Cleaning", price: "$120 - $180" },
        { name: "Dental Exam", price: "$80 - $120" },
        { name: "Digital X-rays", price: "$50 - $200" },
        { name: "Fluoride Treatment", price: "$40 - $60" },
        { name: "Sealants (per tooth)", price: "$45 - $65" }
      ]
    },
    {
      category: "Restorative Care",
      services: [
        { name: "Composite Filling", price: "$180 - $400" },
        { name: "Dental Crown", price: "$1,200 - $2,000" },
        { name: "Root Canal", price: "$800 - $1,500" },
        { name: "Dental Bridge", price: "$2,000 - $5,000" },
        { name: "Dentures", price: "$1,500 - $4,000" }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      services: [
        { name: "Teeth Whitening", price: "$400 - $600" },
        { name: "Porcelain Veneers", price: "$1,000 - $2,000" },
        { name: "Dental Bonding", price: "$300 - $600" },
        { name: "Smile Makeover", price: "$5,000 - $15,000" }
      ]
    },
    {
      category: "Specialized Care",
      services: [
        { name: "Dental Implant", price: "$3,000 - $5,000" },
        { name: "Invisalign", price: "$4,000 - $7,000" },
        { name: "Wisdom Tooth Extraction", price: "$200 - $600" },
        { name: "Gum Disease Treatment", price: "$500 - $2,000" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light via-background to-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transparent, Affordable Dental Care
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Quality dental care shouldn't break the bank. We offer flexible pricing options 
            and payment plans to make excellent oral health accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="w-5 h-5 mr-2" />
              Call for Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dental Membership Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save money with our membership plans designed to keep your smile healthy 
              year-round with predictable, affordable monthly payments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                  <Badge variant="outline" className="text-trust border-trust">
                    {plan.savings}
                  </Badge>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Plan Benefits */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Why Choose Our Membership Plans?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">No Insurance Hassles</h4>
                <p className="text-sm text-muted-foreground">
                  Direct relationship with no waiting periods, annual maximums, or claim denials.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Predictable Costs</h4>
                <p className="text-sm text-muted-foreground">
                  Know exactly what you'll pay each month with no surprise bills or hidden fees.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-trust" />
                </div>
                <h4 className="font-semibold mb-2">Priority Scheduling</h4>
                <p className="text-sm text-muted-foreground">
                  Members get priority scheduling and extended hours for maximum convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Service Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Individual Service Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for all our dental services. Prices may vary based on 
              complexity and individual treatment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {individualServices.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="border-b border-border pb-3 last:border-0">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-medium pr-2">{service.name}</span>
                          <span className="text-sm text-primary font-semibold">{service.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make it easy to afford the dental care you need with multiple payment 
              options and financing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Insurance Accepted</h3>
                <p className="text-sm text-muted-foreground">
                  We accept most major dental insurance plans and will help maximize your benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Payment Plans</h3>
                <p className="text-sm text-muted-foreground">
                  Interest-free payment plans available for treatments over $500.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-trust" />
                </div>
                <h3 className="font-semibold mb-2">CareCredit</h3>
                <p className="text-sm text-muted-foreground">
                  Special healthcare financing with 0% interest options for qualified applicants.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Senior Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Special pricing for seniors (65+) and military personnel with valid ID.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and we'll help you choose the best 
            payment option for your dental needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;