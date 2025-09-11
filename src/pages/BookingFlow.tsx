import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, CreditCard } from 'lucide-react';

const BookingFlow = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-lg text-muted-foreground">Simple 3-step booking process</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Step 1: Choose Service & Doctor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Select the service you need and your preferred dentist</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle>Step 2: Pick Date & Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Choose from available appointment slots that work for you</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-trust" />
                  </div>
                  <CardTitle>Step 3: Confirm & Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Enter your details and secure your appointment with a deposit</p>
                </CardContent>
              </Card>
            </div>

            <Card className="text-center">
              <CardContent className="p-12">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-8">
                  Online booking system will be fully functional once connected to backend services.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Start Booking Process
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingFlow;