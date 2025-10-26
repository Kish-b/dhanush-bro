import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here (connect to Flask backend)
    console.log("Sign in attempt with:", email, password);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Sign In Form */}
            <div className="max-w-md animate-fade-in">
              <h1 className="text-4xl font-bold mb-2">
                Welcome Back <span className="inline-block animate-[wave_0.6s_ease-in-out]">👋</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Today is a new day. It's your day. You shape it.<br />
                Sign in to start managing your projects.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-base">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2"
                    required
                  />
                  <div className="text-right mt-2">
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Sign in
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full" size="lg" type="button">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign in with Google
                  </Button>

                  <Button variant="outline" className="w-full" size="lg" type="button">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Sign in with Facebook
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Don't you have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>

            {/* Illustration */}
            <div className="hidden md:block">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="relative z-10 text-center p-12">
                  <div className="w-full max-w-md mx-auto space-y-8">
                    <div className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
                      <div className="h-2 bg-primary/30 rounded mb-2"></div>
                      <div className="h-2 bg-primary/20 rounded w-3/4 mx-auto"></div>
                    </div>
                    <div className="flex justify-center gap-4">
                      <div className="w-24 h-24 bg-accent/30 backdrop-blur-sm rounded-xl"></div>
                      <div className="w-24 h-24 bg-primary/30 backdrop-blur-sm rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
