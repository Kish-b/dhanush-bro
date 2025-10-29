import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, TrendingUp, Clock, Users, Download, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-illustration.png";
import financeShield from "@/assets/finance-shield.png";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn The Latest Skills",
      description: "Access cutting-edge courses designed by industry experts to keep you ahead.",
    },
    {
      icon: TrendingUp,
      title: "Get Ready For a Career",
      description: "Build job-ready skills with practical projects and real-world applications.",
    },
    {
      icon: Award,
      title: "Earn a Certificate",
      description: "Receive recognized certifications upon course completion to boost your profile.",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 4,
      duration: "22h 30min",
      lessons: 34,
      students: 250,
    },
    {
      id: 2,
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 5,
      duration: "22h 30min",
      lessons: 34,
      students: 250,
    },
    {
      id: 3,
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 4,
      duration: "22h 30min",
      lessons: 34,
      students: 250,
    },
  ];

  const testimonials = [
    {
      name: "Emma K.",
      role: "Web Developer",
      content: "The courses are incredibly well-structured. I gained practical skills that helped me land my dream job!",
    },
    {
      name: "Joseph R. Gutierrez",
      role: "Designer",
      content: "Outstanding learning experience! The instructors are knowledgeable and the community is supportive.",
    },
    {
      name: "Diana S. Adams",
      role: "Data Analyst",
      content: "I've taken multiple courses here and each one has exceeded my expectations. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                The <span className="text-primary">Smart</span> Choice For{" "}
                <span className="text-primary">Future</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore a parallel way to pursue a career based on REALM that
                openplace in a modern and original to get creative and bring your ideas.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <img
                src={heroImage}
                alt="Students learning online"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-secondary-foreground/5 border-secondary-foreground/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-secondary-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-secondary-foreground/70">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Learning Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 animate-float">
                <div className="bg-muted rounded-2xl p-8 flex items-center justify-center h-48">
                  <Clock className="h-20 w-20 text-primary" />
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="bg-muted rounded-2xl p-6 flex items-center justify-center h-32">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-muted rounded-2xl p-6 flex items-center justify-center h-32">
                  <Award className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Premium <span className="text-primary">Learning</span> Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Easily Accessible</h3>
                  <p className="text-muted-foreground">
                    Learning Will Let Very Comfortable With CourseHub.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fun learning experience</h3>
                  <p className="text-muted-foreground">
                    Learning Will Let Very Comfortable With CourseHub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-muted-foreground">
              Learn a new skill, advance your career, or explore a passion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < course.rating ? "fill-primary text-primary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{course.students} Sales</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/courses/${course.id}`}>Join Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Welcome to <br />
                <span className="text-primary">Marko Finance</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover the future of banking with personalized services and
                innovative solutions designed just for you. Discover the future of
                banking with personalized services and innovative solutions designed
                just for you.
              </p>
              <Button size="lg">Explore Now</Button>
            </div>
            <div className="animate-float">
              <img
                src={financeShield}
                alt="Marko Finance"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Student's Say</h2>
            <p className="text-muted-foreground">
              Learn a new skill, advance your career, or explore a passion.
            </p>
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
                      <CardDescription>{testimonial.role}</CardDescription>
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

export default Home;
