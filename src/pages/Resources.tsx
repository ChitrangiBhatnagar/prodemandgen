import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, BookOpen, Video, Shield, Users, 
  TrendingUp, ArrowRight, Download, ExternalLink 
} from "lucide-react";

const Resources = () => {
  const caseStudies = [
    {
      title: "SaaS Company Increases Deliverability by 47%",
      description: "How a growing SaaS startup improved their email campaign performance",
      industry: "SaaS",
      results: "+47% deliverability"
    },
    {
      title: "Enterprise Sales Team Saves 15 Hours Weekly",
      description: "Fortune 500 company streamlines contact validation process",
      industry: "Enterprise",
      results: "15 hours saved/week"
    },
    {
      title: "PSA Implementation Success Story",
      description: "Professional services firm automates entire project lifecycle",
      industry: "Professional Services",
      results: "300% ROI increase"
    }
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to Email Validation",
      description: "Everything you need to know about contact data verification",
      pages: "24 pages",
      category: "Email Validation"
    },
    {
      title: "B2B Sales Intelligence in 2025",
      description: "Trends and best practices for modern sales teams",
      pages: "18 pages",
      category: "Sales Intelligence"
    },
    {
      title: "CRM Data Hygiene Best Practices",
      description: "Keep your CRM clean and actionable",
      pages: "16 pages",
      category: "Data Management"
    }
  ];

  const tutorials = [
    {
      title: "Getting Started with Contact Validation",
      description: "Step-by-step guide to setting up your first validation campaign",
      duration: "15 min",
      type: "Video Tutorial"
    },
    {
      title: "CRM Integration Masterclass",
      description: "Learn how to integrate with Salesforce, HubSpot, and more",
      duration: "45 min",
      type: "Webinar"
    },
    {
      title: "Advanced Validation Techniques",
      description: "Pro tips for maximizing validation accuracy",
      duration: "30 min",
      type: "Video Tutorial"
    }
  ];

  const documentation = [
    {
      title: "User Guide",
      description: "Complete documentation for all platform features",
      link: "https://salescentri.com/docs/user-guide",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "API Reference",
      description: "Developer documentation for our REST API",
      link: "https://salescentri.com/docs/api-reference",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Security & Privacy",
      description: "Information about our security measures and compliance",
      link: "https://salescentri.com/trust/security-privacy",
      icon: <Shield className="h-5 w-5" />
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
              <Badge className="bg-gradient-primary text-primary-foreground text-sm px-4 py-2">
                Knowledge Hub
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Resources to Help You{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Succeed
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our comprehensive library of guides, case studies, tutorials, and documentation to maximize your success.
              </p>
              <div className="flex justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from companies using our platform
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{study.industry}</Badge>
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                      <CardDescription className="text-base">
                        {study.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-lg font-bold text-primary">{study.results}</div>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                          Read Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Whitepapers & eBooks */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Whitepapers & eBooks
              </h2>
              <p className="text-xl text-muted-foreground">
                In-depth guides and industry insights
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whitepapers.map((paper, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{paper.category}</Badge>
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{paper.title}</CardTitle>
                      <CardDescription className="text-base">
                        {paper.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-muted-foreground">{paper.pages}</div>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                          Download Free
                          <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials & Webinars */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Tutorials & Training
              </h2>
              <p className="text-xl text-muted-foreground">
                Learn through video tutorials and live webinars
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tutorials.map((tutorial, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{tutorial.type}</Badge>
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                      <CardDescription className="text-base">
                        {tutorial.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-muted-foreground">{tutorial.duration}</div>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                          Watch Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Documentation
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Complete technical documentation, user guides, and security information to help you get the most out of our platform.
                  </p>
                </div>
                <div className="space-y-4">
                  {documentation.map((doc, index) => (
                    <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                              {doc.icon}
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{doc.title}</div>
                              <div className="text-sm text-muted-foreground">{doc.description}</div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a href={doc.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-hero text-primary-foreground p-8 shadow-strong">
                  <div className="space-y-6">
                    <Users className="h-12 w-12" />
                    <h3 className="text-2xl font-bold">
                      Need Help Getting Started?
                    </h3>
                    <p className="text-primary-foreground/90">
                      Our team is here to help you succeed. Get personalized onboarding and training.
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                        Contact Support
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
                  Ready to Put Knowledge into Action?
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Start your free trial today and see how our platform can transform your contact validation process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
                    asChild
                  >
                    <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                      Schedule Demo
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

export default Resources;