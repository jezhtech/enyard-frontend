import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/lovable-uploads/98fab40e-4f49-42c5-bf83-50cb4020d1a4.png"
            alt="ENYARD"
            className="h-8 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Welcome</h1>
          <p className="text-muted-foreground">
            Sign in or create an account to continue
          </p>
        </div>

        <Tabs value={location.pathname} className="w-full">
          <TabsList className="grid w-full grid-cols-2 glass">
            <TabsTrigger value="/login" asChild>
              <Link to="/login">Login</Link>
            </TabsTrigger>
            <TabsTrigger value="/register" asChild>
              <Link to="/register">Register</Link>
            </TabsTrigger>
          </TabsList>
          <Outlet />
        </Tabs>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Protected by enterprise-grade security and AI-powered threat
            detection
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
