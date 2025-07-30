import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, 
  HeadphonesIcon, Users, Building, ArrowRight 
} from "lucide-react";

const Contact = () => {
  const contactOptions = [
    {
      title: "Sales Inquiry",
      description: "Get pricing information and schedule a demo",
      icon: <Building className="h-6 w-6" />,
      link: "https://salescentri.com/contact/sales-inquiry",
      action: "Contact Sales"
    },
    {
      title: "Support Request",
      description: "Get help with your account or technical issues",
      icon: <HeadphonesIcon className="h-6 w-6" />,
      link: "https://salescentri.com/contact/support-request",
      action: "Get Support"
    },
    {
      title: "Partnership Inquiry",
      description: "Explore partnership and integration opportunities",
      icon: <Users className="h-6 w-6" />,
      link: "https://salescentri.com/contact/partnerships",
      action: "Partner With Us"
    }
  ];

  const supportOptions = [
    {
      title: "Submit a Ticket",
      description: "Create a detailed support request",
      link: "https://salescentri.com/contact/support-request/submit-ticket"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team instantly",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      title: "Request Quote",
      description: "Get custom pricing for your needs",
      link: "https://salescentri.com/contact/sales-inquiry/request-quote"
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
                Get in Touch
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                We're Here to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Help You Succeed
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you need sales support, technical assistance, or want to explore partnerships, we're here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Schedule Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                    Book Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                How Can We Help?
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the option that best fits your needs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <CardHeader className="space-y-4 text-center">
                      <div className="flex justify-center">
                        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                          {option.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                      <CardDescription className="text-base">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={option.link} target="_blank" rel="noopener noreferrer">
                          {option.action}
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

        {/* Contact Information */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Reach out to us directly through any of these channels
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">support@prodemandgen.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">(509) 555-0123</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div className="text-muted-foreground">Spokane, WA</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div className="text-muted-foreground">Monday - Friday, 8 AM - 6 PM PST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Quick Actions
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fast access to common requests
                  </p>
                </div>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-foreground">{option.title}</div>
                            <div className="text-sm text-muted-foreground">{option.description}</div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a href={option.link} target="_blank" rel="noopener noreferrer">
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Partnership */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Partnership Opportunities
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're always looking for new ways to collaborate and integrate with complementary platforms and services.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://salescentri.com/contact/partnerships/partner-inquiry" target="_blank" rel="noopener noreferrer">
                      Partner Inquiry
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://salescentri.com/contact/partnerships/integration-requests" target="_blank" rel="noopener noreferrer">
                      Integration Request
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-hero text-primary-foreground p-8 shadow-strong">
                  <div className="space-y-6">
                    <MessageSquare className="h-12 w-12" />
                    <h3 className="text-2xl font-bold">
                      24/7 Support Available
                    </h3>
                    <p className="text-primary-foreground/90">
                      Our support team is available around the clock to help with any questions or technical issues.
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                        Start Live Chat
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-hero text-primary-foreground p-12 text-center shadow-strong max-w-4xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Experience the power of accurate contact validation with a free trial.
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
                    <a href="https://salescentri.com/get-started/contact" target="_blank" rel="noopener noreferrer">
                      Contact Form
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

export default Contact;