import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Tips for Better Oral Hygiene",
      excerpt: "Learn simple daily habits that can dramatically improve your oral health.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Oral Health",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Understanding Dental Implants",
      excerpt: "Everything you need to know about dental implant procedures and recovery.",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2024",
      category: "Treatment",
      image: "/api/placeholder/400/200"
    }
  ];

  const faqs = [
    { q: "How often should I visit the dentist?", a: "Every 6 months for routine cleanings and checkups." },
    { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental insurance plans." },
    { q: "What should I do in a dental emergency?", a: "Call our emergency line at (555) 911-HELP immediately." }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-primary-light via-background to-secondary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dental Blog & FAQs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about oral health with our expert articles and find answers to common questions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </div>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;