import React from "react";
import { TrendingUp, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnhancedCTAProps {
  visible: boolean;
  onStartTrial: () => void;
  onBookDemo?: () => void;
}

const EnhancedCTA: React.FC<EnhancedCTAProps> = ({
  visible,
  onStartTrial,
  onBookDemo,
}) => {
  return (
    <div
      className={`text-center ${
        visible ? "scroll-reveal revealed" : "scroll-reveal"
      }`}
      data-index="99"
    >
      <div className="relative overflow-hidden rounded-3xl p-12 max-w-4xl mx-auto">
        {/* Background with Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl" />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20" />

        {/* Foreground Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Ready to Redefine Your Future?
          </h3>

          <p className="text-black mb-8 text-lg max-w-2xl mx-auto">
            Join forward-thinking ventures already transforming their operations
            with our intelligent ecosystem. Experience the power of AI-driven
            innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group px-8 py-4 bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onStartTrial}
            >
              <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Start Free Trial
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              onClick={onBookDemo}
            >
              <Users className="mr-2 h-5 w-5" />
              Book Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCTA;
