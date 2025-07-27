import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Start validating immediately",
    "No setup fees or contracts",
    "Access to all premium features",
    "24/7 customer support"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-hero text-primary-foreground p-12 lg:p-16 text-center shadow-strong">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Ready to Boost Your Email Deliverability?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Join 1,200+ sales teams using Prodemandgen to validate contact data and increase campaign ROI.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-left">
                  <CheckCircle className="h-5 w-5 text-primary-foreground flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground text-lg px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30 text-lg px-8"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust Signal */}
            <p className="text-sm text-primary-foreground/70 pt-4">
              No credit card required • 14-day free trial • GDPR compliant
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;