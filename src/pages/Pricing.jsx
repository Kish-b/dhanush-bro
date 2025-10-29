import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$499",
      period: "/Yearly",
      description: "Dynamic a economic strategic about financial management.",
      features: [
        { text: "All analytics features", included: true },
        { text: "Up to 5,000,000 tracked visits", included: true },
        { text: "Up to 50 team members", included: false },
        { text: "Deliciated support", included: false },
        { text: "Access to all features full year", included: false },
      ],
      icon: "💎",
    },
    {
      name: "Professional",
      price: "$599",
      period: "/Yearly",
      description: "Dynamic a economic strategic about financial management.",
      features: [
        { text: "All analytics features", included: true },
        { text: "Up to 5,000,000 tracked visits", included: true },
        { text: "Up to 50 team members", included: true },
        { text: "Deliciated support", included: true },
        { text: "Access to all features full year", included: true },
      ],
      icon: "✖️",
      popular: true,
    },
    {
      name: "Premium",
      price: "$999",
      period: "/Yearly",
      description: "Dynamic a economic strategic about financial management.",
      features: [
        { text: "All analytics features", included: true },
        { text: "Up to 5,000,000 tracked visits", included: true },
        { text: "Up to 50 team members", included: true },
        { text: "Deliciated support", included: true },
        { text: "Access to all features full year", included: true },
      ],
      icon: "⚙️",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Select A Pricing Package<br />
                For Your Transaction
              </h1>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                These subscription options flexibility to users based their preferences and financial situation,
                the affordability of weekly subscriptions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-shadow ${
                  plan.popular ? "border-primary border-2" : ""
                }`}
              >
                <div className="absolute top-4 right-4 text-4xl">{plan.icon}</div>
                
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground border-b pb-4">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`rounded-full p-1 mt-0.5 ${feature.included ? 'bg-primary/20' : 'bg-muted'}`}>
                          <Check className={`h-4 w-4 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <span className={`text-sm ${feature.included ? '' : 'text-muted-foreground'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
