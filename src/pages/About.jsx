import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Instagram, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { value: "1000+", label: "Completed Projects" },
    { value: "250+", label: "On Going Projects" },
    { value: "500+", label: "Happy Clients" },
    { value: "25", label: "Offices through out GLOB" },
  ];

  const team = [
    {
      name: "Matthew E. McNatt",
      role: "Professor @George Brown College",
      specialty: "Engineering physics",
      description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    },
    {
      name: "Tracy D. Wright",
      role: "Professor @George Brown College",
      specialty: "Engineering physics",
      description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    },
    {
      name: "Cynthia A. Nelson",
      role: "Professor @George Brown College",
      specialty: "Engineering physics",
      description: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    },
  ];

  const testimonials = [
    {
      name: "Finlay Kirk",
      role: "Web Developer",
      content: "Teachings of the great explore of truth, the master-builder of human happiness. no one rejects dislikes or avoids pleasure itself, pleasure itself",
    },
    {
      name: "Dannette P. Cervantes",
      role: "Web Design",
      content: "Complete account of the system and expound the actual. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    },
    {
      name: "Clara R. Altman",
      role: "UI/UX Design",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-5xl font-bold mb-6">
                ABOUT <span className="text-primary">US</span>
              </h1>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. 
                Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable 
                oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And 
                excellence partiality estimating terminated day everything.
              </p>
              <div className="flex gap-4">
                <Button size="lg">LEARN MORE</Button>
                <Button size="lg" variant="outline">
                  Watch Video
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-3xl text-primary">{stat.value}</CardTitle>
                    <CardDescription className="text-sm">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Tracks</h2>
            <p className="text-muted-foreground">Lorem Ipsum is simply dummy text of the printing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-xs">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{member.specialty}</span>
                    <div className="flex gap-2">
                      <a href="#" className="text-primary hover:text-primary/80">
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Student's Say</h2>
            <p className="text-muted-foreground">Lorem Ipsum is simply dummy text of the printing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
