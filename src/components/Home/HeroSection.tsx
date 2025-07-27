import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/50 rounded-full px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-accent-foreground font-medium">100M+ contacts validated</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Verify, Clean, Deliver —{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Contact Data that Converts
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Boost outbound engagement with real-time email verification. 
                Reduce bounces, improve deliverability, and maximize your campaign ROI.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Book Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 1,200+ reviews</span>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">99.5% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Real-time Validation</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Contact validation dashboard showing verified email data"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-gradient-card shadow-medium animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">99.5% Valid</span>
              </div>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 p-4 bg-gradient-card shadow-medium animate-fade-in">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">+47% Deliverability</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Partnership Banner */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading sales teams</p>
            <div className="flex justify-center">
              <a
                href="https://salescentri.com/?utm_source=prodemandgen.com&utm_medium=homepage&utm_campaign=partner_display"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
              >
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">
                  Powered by Sales AI
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;