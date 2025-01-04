import React, { useState } from "react";
import { motion } from "framer-motion";
import Dragon from "./Dragon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const DragonGame = () => {
  const [idea, setIdea] = useState("");
  const [isHappy, setIsHappy] = useState<boolean | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const wordCount = idea.trim().split(/\s+/).length;
    const isGoodIdea = wordCount >= 1 && wordCount <= 5;
    
    setIsHappy(isGoodIdea);
    setIsAnimating(true);

    toast({
      title: isGoodIdea ? "The dragon approves!" : "The dragon disapproves!",
      description: isGoodIdea 
        ? "Behold the dragon's treasure!" 
        : "Prepare for dragon's fire!",
      variant: isGoodIdea ? "default" : "destructive",
    });

    setTimeout(() => {
      setIsAnimating(false);
      setIdea("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#658E85] p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-dragonGold mb-8 font-medieval">
          The Wise Dragon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Present your idea to the dragon
        </p>

        <div className="relative mb-16">
          <Dragon isHappy={isHappy} isAnimating={isAnimating} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Enter your idea for consideration by the wise dragon"
            className="bg-gray-800 border-dragonGold text-white placeholder-gray-400"
            disabled={isAnimating}
          />
          <Button
            type="submit"
            disabled={!idea.trim() || isAnimating}
            className="bg-dragonGold hover:bg-yellow-600 text-medieval font-bold px-12 py-6 text-xl rounded-lg transition-colors duration-200 font-medieval"
          >
            Submit to the Dragon
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default DragonGame;