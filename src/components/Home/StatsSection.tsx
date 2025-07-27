import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      value: "100M+",
      label: "Contacts Validated",
      description: "Processed and verified with 99.5% accuracy"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: "47%",
      label: "Avg. Deliverability Boost",
      description: "Increase in successful email delivery"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "1,200+",
      label: "Active Customers",
      description: "Sales teams trusting our platform"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "10+ hrs",
      label: "Time Saved Weekly",
      description: "Per SDR team using our validation"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Sales Teams Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of companies using Prodemandgen to validate their contact data and boost campaign performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-xl bg-accent/30">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;