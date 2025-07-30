import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, Users, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Up to 1,000 validations/month",
        "Real-time email verification",
        "Basic CRM integrations",
        "Email support",
        "99.5% accuracy guarantee"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For growing sales teams",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Up to 10,000 validations/month",
        "Advanced verification algorithms",
        "All CRM integrations",
        "Priority support",
        "Bulk upload & processing",
        "Custom webhooks",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored for large organizations",
      icon: <Building className="h-6 w-6" />,
      features: [
        "Unlimited validations",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantees",
        "Custom security requirements",
        "On-premise deployment options"
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry",
      popular: false
    }
  ];

  const services = [
    {
      title: "Data Enrichment",
      description: "Enhance your contact data with additional information",
      link: "https://salescentri.com/services/data-enrichment"
    },
    {
      title: "SDR Service",
      description: "Professional SDR services to boost your outreach",
      link: "https://salescentri.com/services/sdr-service"
    },
    {
      title: "PSA Suite",
      description: "Complete Professional Services Automation",
      link: "https://salescentri.com/solutions/psa-suite"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Simple, Transparent{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose the perfect plan for your team. Start with a free trial on any plan.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/pricing/free-trial" target="_blank" rel="noopener noreferrer">
                    Try Free for 14 Days
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-strong' : 'shadow-soft'}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">{plan.icon}</div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">
                        {plan.price}
                        <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "hero" : "outline"}
                      asChild
                    >
                      <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Additional Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Extend your capabilities with our professional services
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                          Learn More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-hero text-primary-foreground p-12 text-center shadow-strong max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Need Something Custom?
                </h2>
                <p className="text-xl text-primary-foreground/90">
                  Our enterprise solutions are tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="https://salescentri.com/pricing/enterprise-custom" target="_blank" rel="noopener noreferrer">
                      Enterprise Solutions
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
                    asChild
                  >
                    <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                      Request Quote
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;