import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Users, Building, Brain, Phone, MessageSquare, 
  Database, Zap, Target, TrendingUp, ArrowRight, CheckCircle 
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      category: "By Industry",
      items: [
        {
          title: "IT Services",
          description: "Specialized solutions for IT service providers",
          icon: <Shield className="h-6 w-6" />,
          link: "https://salescentri.com/solutions/by-industry/it"
        },
        {
          title: "Healthcare",
          description: "HIPAA-compliant solutions for healthcare organizations",
          icon: <Building className="h-6 w-6" />,
          link: "https://salescentri.com/solutions/by-industry/healthcare"
        }
      ]
    },
    {
      category: "By Use Case",
      items: [
        {
          title: "SDR Teams",
          description: "Optimize your sales development operations",
          icon: <Users className="h-6 w-6" />,
          link: "https://salescentri.com/solutions/by-use-case/sdr-teams"
        },
        {
          title: "Use Case Navigator",
          description: "Find the perfect solution for your needs",
          icon: <Target className="h-6 w-6" />,
          link: "https://salescentri.com/solutions/use-case-navigator"
        }
      ]
    },
    {
      category: "AI Platforms",
      items: [
        {
          title: "AI Aggregator",
          description: "Unified contact intelligence platform",
          icon: <Brain className="h-6 w-6" />,
          link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator"
        },
        {
          title: "Voice AI Agent",
          description: "Intelligent voice automation for leads",
          icon: <Phone className="h-6 w-6" />,
          link: "https://salescentri.com/platforms/lead-management/voice-ai-agent"
        },
        {
          title: "Chat Bot",
          description: "Automated customer engagement",
          icon: <MessageSquare className="h-6 w-6" />,
          link: "https://salescentri.com/platforms/lead-management/chat-bot"
        }
      ]
    },
    {
      category: "Data Solutions",
      items: [
        {
          title: "Lead Generation",
          description: "Advanced lead discovery and qualification",
          icon: <Database className="h-6 w-6" />,
          link: "https://salescentri.com/platforms/lead-management/lead-generation"
        },
        {
          title: "Data Enrichment",
          description: "Enhance your contact database",
          icon: <TrendingUp className="h-6 w-6" />,
          link: "https://salescentri.com/services/data-enrichment"
        }
      ]
    }
  ];

  const psaFeatures = [
    "Project Management",
    "Time Tracking",
    "Resource Planning",
    "Billing & Invoicing",
    "Client Portal",
    "Reporting & Analytics"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <Badge className="bg-gradient-primary text-primary-foreground text-sm px-4 py-2">
                Complete Solution Suite
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Solutions Built for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Your Success
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From contact validation to complete business automation, we have the tools you need to scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator" target="_blank" rel="noopener noreferrer">
                    Find Your Solution
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                    Interactive Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {solutions.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {category.category}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                        <CardHeader className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                              {item.icon}
                            </div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                            asChild
                          >
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PSA Suite Highlight */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Featured Solution
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    PSA Suite
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Complete Professional Services Automation platform designed for service-based businesses.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {psaFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://salescentri.com/solutions/psa-suite/overview" target="_blank" rel="noopener noreferrer">
                      Explore PSA Suite
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://salescentri.com/solutions/psa-suite/pricing" target="_blank" rel="noopener noreferrer">
                      View Pricing
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-hero text-primary-foreground p-8 shadow-strong">
                  <div className="space-y-6">
                    <Zap className="h-12 w-12" />
                    <h3 className="text-2xl font-bold">
                      Streamline Your Operations
                    </h3>
                    <p className="text-primary-foreground/90">
                      From project initiation to final billing, manage your entire service delivery lifecycle in one platform.
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href="https://salescentri.com/solutions/psa-suite/features" target="_blank" rel="noopener noreferrer">
                        See All Features
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-hero text-primary-foreground p-12 text-center shadow-strong max-w-4xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Get personalized recommendations based on your specific needs and industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="https://salescentri.com/solutions/use-case-navigator/recommendations" target="_blank" rel="noopener noreferrer">
                      Get Custom Recommendations
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
                    asChild
                  >
                    <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                      Schedule Consultation
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

export default Solutions;