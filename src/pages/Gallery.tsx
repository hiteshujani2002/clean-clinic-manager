import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Gallery = () => {
  const beforeAfterImages = [
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Teeth Whitening" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Dental Veneers" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Orthodontic Treatment" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Dental Implant" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Smile Makeover" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Crown Restoration" },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-primary-light via-background to-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Before & After Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See the amazing transformations we've achieved for our patients. 
            These real results showcase the quality of our dental work.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Transformation
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img src={item.before} alt="Before treatment" className="w-full h-48 object-cover" />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Before</div>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt="After treatment" className="w-full h-48 object-cover" />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">After</div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;