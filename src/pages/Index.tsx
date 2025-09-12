import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Inquiries from '@/components/home/Inquiries';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Inquiries />
      <CallToAction />
    </Layout>
  );
};

export default Index;
