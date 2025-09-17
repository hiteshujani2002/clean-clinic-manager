import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-primary-light via-background to-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our friendly team. We're here to help with all your dental needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>Main Office: <strong>(555) 123-4567</strong></p>
                    <p>Emergency Line: <strong>(555) 911-HELP</strong></p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    Location & Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>123 Dental Street<br />Health City, HC 12345</p>
                    </div>
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <div className="space-y-1 text-sm">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p>Sunday: Emergency Only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-lg text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-bold text-lg">Dental Emergency?</h3>
                    <p className="mb-3">Call our 24/7 emergency line</p>
                    <Button variant="secondary" size="lg">
                      (555) 911-HELP
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/mandgpyv" method="POST" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      name="firstName"
                      placeholder="First Name" 
                      required 
                    />
                    <Input 
                      name="lastName"
                      placeholder="Last Name" 
                      required 
                    />
                  </div>
                  <Input 
                    name="email"
                    placeholder="Email Address" 
                    type="email" 
                    required 
                  />
                  <Input 
                    name="phone"
                    placeholder="Phone Number" 
                    type="tel" 
                    required 
                  />
                  <Textarea 
                    name="message"
                    placeholder="Message" 
                    className="min-h-32" 
                    required 
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;