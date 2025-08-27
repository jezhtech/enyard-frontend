import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import ClientDashboard from "./pages/ClientDashboard";
import About from "./pages/About";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Documentation from "./pages/Documentation";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TimeX from "./pages/TimeX";
import CoreX from "./pages/CoreX";
import XSafety from "./pages/XSafety";
import MedzorX from "./pages/MedzorX";
import FleetX from "./pages/FleetX";
import Penguin from "./pages/Penguin";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          
          {/* Product Routes */}
          <Route path="/products/timex" element={<TimeX />} />
          <Route path="/products/corex" element={<CoreX />} />
          <Route path="/products/fleetx" element={<FleetX />} />
          <Route path="/products/xsafety" element={<XSafety />} />
          <Route path="/products/medzorx" element={<MedzorX />} />
          <Route path="/products/penguin" element={<Penguin />} />
          
          {/* Resource Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/downloads" element={<Downloads />} />
          
          {/* Other Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
