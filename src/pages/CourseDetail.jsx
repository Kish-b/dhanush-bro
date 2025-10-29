import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { id } = useParams();

  const curriculum = [
    {
      title: "working with Figma",
      duration: "50 hours, 9 tasks, 2months",
    },
    {
      title: "Design System",
      duration: "50 hours, 9 tasks, 2months",
    },
    {
      title: "UI Design",
      duration: "50 hours, 9 tasks, 2months",
    },
    {
      title: "Diploma Project",
      duration: "50 hours, 9 tasks, 2months",
      items: [
        "Redesign of an Existing Mobile App (e.g., food delivery, banking, or social app)",
        "E-Commerce Website Prototype with smooth navigation & checkout flow",
        "Dashboard UI for Analytics/Reporting Tool with charts, filters & interactive elements",
        "Travel Booking App with user-friendly search & booking experience",
        "Healthcare/Wellness App focusing on accessibility & clean UI",
        "Restaurant Finder for enterprise-grade data platform visualization",
      ],
    },
  ];

  const tools = ["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop", "Illustrator", "Webflow", "After Effects"];

  const skills = [
    "Problem-Solving & Critical Thinking",
    "Communication & Presentation Skills",
    "Teamwork & Collaboration",
    "Time Management & Organization",
    "Creativity & Innovation",
    "Adaptability to New Tools & Technologies",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Course Header */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">UI/UX Design for Beginners</h1>
              <Badge className="mb-4">Create engaging designs</Badge>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <Star className="h-5 w-5 text-muted" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. 
                Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh 
                expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence 
                partiality estimating terminated day everything.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">9</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tools<br />Learn top industry tools for design & prototyping.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    months<br />One-year structured learning journey
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">6</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    projects<br />Build real-world projects for your portfolio
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="w-full md:w-auto">Choose your Career</Button>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Course Curriculum</h2>
            <Badge>240 hours</Badge>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {curriculum.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="text-left">
                    <h3 className="font-bold text-lg">
                      {index + 1}. {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{section.duration}</p>
                  </div>
                </AccordionTrigger>
                {section.items && (
                  <AccordionContent>
                    <ul className="space-y-2 mt-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="py-6">
                  <p className="font-medium">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">Register</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
