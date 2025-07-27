import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, BarChart3, Globe, Lock, Cpu } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-time Validation",
      description: "Instantly verify email addresses as users type or upload bulk lists for immediate processing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Syntax & Domain Check",
      description: "Advanced validation including syntax verification, domain existence, and MX record validation.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Deliverability Scoring",
      description: "Get confidence scores for each email address to prioritize your highest-quality leads.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Coverage",
      description: "Validate emails from any country with support for international domains and formats.",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "GDPR Compliant",
      description: "Enterprise-grade security with full GDPR compliance and data protection standards.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "API Integration",
      description: "Seamlessly integrate with your existing CRM, marketing automation, and sales tools.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Data Accuracy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive validation suite ensures your contact data is clean, 
            accurate, and ready to drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-accent/30">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;