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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          
          {/* Product Routes */}
          <Route path="/products/timex" element={<NotFound />} />
          <Route path="/products/corex" element={<NotFound />} />
          <Route path="/products/fleetx" element={<NotFound />} />
          <Route path="/products/churchx" element={<NotFound />} />
          <Route path="/products/medzorx" element={<NotFound />} />
          
          {/* Resource Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/downloads" element={<Downloads />} />
          
          {/* Other Routes */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
