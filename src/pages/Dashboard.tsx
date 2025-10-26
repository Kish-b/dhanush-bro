import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const stats = [
    { title: "Total Courses", value: "12", icon: BookOpen, color: "text-primary" },
    { title: "Active Students", value: "1,234", icon: Users, color: "text-blue-500" },
    { title: "Certificates", value: "856", icon: Award, color: "text-green-500" },
    { title: "Completion Rate", value: "87%", icon: TrendingUp, color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your dashboard is ready. Connect to Flask backend to see your personalized data.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
