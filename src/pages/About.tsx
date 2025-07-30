import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, MapPin, Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "John Smith",
      title: "CEO & Founder",
      bio: "15+ years in SaaS and data verification technology"
    },
    {
      name: "Sarah Johnson",
      title: "CTO",
      bio: "Former VP of Engineering at leading contact intelligence company"
    },
    {
      name: "Mike Chen",
      title: "VP of Sales",
      bio: "Expert in B2B sales operations and team scaling"
    }
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Security",
      description: "Your data security and privacy are our top priorities"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Accuracy First",
      description: "We deliver 99.5% accuracy in every validation"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Success",
      description: "Your success drives everything we do"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Innovation",
      description: "Constantly improving our technology and services"
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
                About Prodemandgen
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Building the Future of{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Contact Intelligence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in Spokane, WA, we're on a mission to help sales teams worldwide achieve better results through accurate, verified contact data.
              </p>
              <div className="flex justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://salescentri.com/company/careers" target="_blank" rel="noopener noreferrer">
                    Join Our Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Our Story
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Prodemandgen Solutions was born from a simple observation: most sales teams waste countless hours on invalid contact data, leading to poor campaign performance and frustrated teams.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We set out to solve this problem by building the most accurate, real-time contact validation platform available. Today, we help over 1,200 sales teams worldwide improve their outbound performance.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Headquartered in Spokane, Washington</span>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-card shadow-strong p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">100M+</div>
                      <div className="text-sm text-muted-foreground">Contacts Validated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">1,200+</div>
                      <div className="text-sm text-muted-foreground">Active Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">99.5%</div>
                      <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                    <CardHeader className="space-y-4">
                      <div className="flex justify-center">
                        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                          {value.icon}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Experienced leaders driving innovation in contact intelligence
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leadership.map((leader, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardHeader className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground text-2xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{leader.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">{leader.title}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">{leader.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="pt-8">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/company/about-us/leadership-team" target="_blank" rel="noopener noreferrer">
                    View Full Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership & Trust */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Powered by Innovation
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our partnership with leading AI and sales intelligence providers ensures you get the most advanced contact validation technology available.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">GDPR & CCPA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Enterprise-Grade Security</span>
                  </div>
                </div>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer">
                    View Security Details
                  </a>
                </Button>
              </div>
              <div className="relative">
                <Card className="bg-gradient-hero text-primary-foreground p-8 shadow-strong">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-8 w-8" />
                      <span className="text-xl font-bold">Sales AI Partnership</span>
                    </div>
                    <p className="text-primary-foreground/90">
                      Leveraging cutting-edge AI technology to deliver unmatched accuracy and performance in contact validation.
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href="https://salescentri.com/company/partners-affiliates" target="_blank" rel="noopener noreferrer">
                        Learn About Partnership
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
                  Join Our Mission
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Help us transform how sales teams validate and use contact data worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="https://salescentri.com/company/team-advisors/career-openings" target="_blank" rel="noopener noreferrer">
                      View Open Positions
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
                    asChild
                  >
                    <a href="https://salescentri.com/contact/partnerships/partner-inquiry" target="_blank" rel="noopener noreferrer">
                      Partner With Us
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

export default About;