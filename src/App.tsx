import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import ClientDashboard from "./pages/ClientDashboard";
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
          <Route path="/about" element={<NotFound />} />
          <Route path="/career" element={<NotFound />} />
          
          {/* Product Routes */}
          <Route path="/products/timex" element={<NotFound />} />
          <Route path="/products/corex" element={<NotFound />} />
          <Route path="/products/fleetx" element={<NotFound />} />
          <Route path="/products/churchx" element={<NotFound />} />
          <Route path="/products/medzorx" element={<NotFound />} />
          
          {/* Resource Routes */}
          <Route path="/blog" element={<NotFound />} />
          <Route path="/documentation" element={<NotFound />} />
          <Route path="/downloads" element={<NotFound />} />
          
          {/* Other Routes */}
          <Route path="/contact" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
