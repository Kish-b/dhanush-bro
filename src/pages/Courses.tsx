import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, BookOpen, Download, Star, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      id: 4,
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 4,
      duration: "22h 30min",
      lessons: 34,
      students: 250,
    },
    {
      id: 5,
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 5,
      duration: "22h 30min",
      lessons: 34,
      students: 250,
    },
    {
      id: 6,
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 4,
      duration: "22h 30min",
      lessons: 34,
      students: 250,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Our Courses</h1>
              <p className="text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for more details"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Button className="absolute right-0 top-0 rounded-l-none">Search</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
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
                  <p className="text-2xl font-bold text-primary mb-4">{course.price}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} Courses</span>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">Contact us</h2>
          <p className="text-muted-foreground mb-8">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Name*" />
              <Input type="email" placeholder="Email*" />
            </div>
            <Textarea placeholder="Comment" rows={6} />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="save-info" className="rounded" />
              <label htmlFor="save-info" className="text-sm text-muted-foreground">
                Save My Name, Email In This Browser For The Next Time I Comment
              </label>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Enquire
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
