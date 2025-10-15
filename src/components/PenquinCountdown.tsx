import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Terminal,
  Bell,
  Code,
  User,
  Mail,
  Phone,
  X,
  Loader2,
} from "lucide-react";
import { notificationService } from "@/services";
import { useToast } from "@/hooks/use-toast";

const PenquinCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Launch date: October 1, 2025
  const launchDate = new Date("2025-11-14T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await notificationService.createNotification({
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
      });
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Penquin launches.",
      });
      setIsDialogOpen(false);
      setFormData({ name: "", email: "", mobile: "" });
    } catch (error: any) {
      console.error("Failed to submit notification:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-8 bg-gradient-to-r from-gray-100 to-gray-200 border-y border-gray-300">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #000 1px, transparent 1px),
            linear-gradient(0deg, #000 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Info */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-800 text-white rounded-full px-3 py-1 text-xs font-mono mb-3">
              <Terminal className="w-3 h-3" />
              <span>LAUNCHING_SOON</span>
            </div>

            {/* Main Content */}
            <h3 className="text-lg font-mono font-bold text-gray-800 mb-2">
              <span className="text-gray-600">const</span>{" "}
              <span className="text-blue-600">penquin</span> ={" "}
              <span className="text-green-600">"cybersecurity_platform"</span>;
            </h3>

            <p className="text-sm text-gray-600 font-mono">
              <span className="text-gray-500">//</span> Master tools, exploit
              vulnerabilities, become a security expert
            </p>
          </div>

          {/* Center - Countdown */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-800">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                DAYS
              </div>
            </div>
            <div className="text-gray-400 font-mono">:</div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-800">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                HRS
              </div>
            </div>
            <div className="text-gray-400 font-mono">:</div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-800">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                MIN
              </div>
            </div>
            <div className="text-gray-400 font-mono">:</div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-gray-800">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                SEC
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex-shrink-0">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-2 font-mono border border-gray-600 hover:border-gray-700"
              onClick={() => setIsDialogOpen(true)}
            >
              <Bell className="w-3 h-3 mr-2" />
              <span className="font-mono">notify_me()</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Notification Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-lg font-mono">
              <Terminal className="w-5 h-5 text-gray-400" />
              <span>getNotification()</span>
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label
                  htmlFor="name"
                  className="text-gray-300 text-sm font-mono"
                >
                  const name =
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 font-mono text-sm"
                    placeholder="'your_name'"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-300 text-sm font-mono"
                >
                  const email =
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 font-mono text-sm"
                    placeholder="'your@email.com'"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="mobile"
                  className="text-gray-300 text-sm font-mono"
                >
                  const mobile =
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 font-mono text-sm"
                    placeholder="'+1234567890'"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-mono"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Code className="mr-2 h-4 w-4" />
                )}
                {isLoading ? "submitting..." : "submit()"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="border-gray-500 text-gray-200 hover:bg-gray-700 hover:text-white text-sm font-mono bg-transparent"
                disabled={isLoading}
              >
                <X className="mr-2 h-4 w-4" />
                cancel()
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PenquinCountdown;
