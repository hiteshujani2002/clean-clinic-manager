import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import AboutUs from '@/components/home/AboutUs';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Inquiries from '@/components/home/Inquiries';

const Index = () => {
  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="doctors">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Inquiries />
      </section>
    </Layout>
  );
};

export default Index;
