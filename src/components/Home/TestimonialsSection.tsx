import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Sales Director",
      company: "TechFlow Solutions",
      content: "Prodemandgen increased our email deliverability by 43% in just one month. Our SDR team now focuses on qualified leads instead of bounced emails.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      title: "VP of Marketing",
      company: "GrowthScale",
      content: "The real-time validation saved our team 15+ hours per week. We've seen a 50% reduction in bounce rates and much better campaign ROI.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      title: "Head of Sales Operations",
      company: "CloudFirst Inc",
      content: "GDPR compliance was crucial for us. Prodemandgen's platform meets all our security requirements while delivering exceptional accuracy.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real sales teams using Prodemandgen to validate their contact data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="p-2 rounded-full bg-accent/30">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-center italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;