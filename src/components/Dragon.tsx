import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DragonProps {
  isHappy: boolean | null;
  isAnimating: boolean;
}

const Dragon: React.FC<DragonProps> = ({ isHappy, isAnimating }) => {
  return (
    <div className="relative w-full h-64 md:h-96">
      {/* Dragon Image */}
      <motion.div
        className={`absolute inset-0 ${
          isAnimating && isHappy ? "animate-dragon-laugh" : "animate-dragon-idle"
        }`}
      >
        <img 
          src="/lovable-uploads/4eac3b64-5433-428f-bcca-9ae0a0681ae6.png" 
          alt="Wise Dragon"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Fire Animation */}
      <AnimatePresence>
        {isAnimating && !isHappy && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.8 }}
            exit={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-dragonRed rounded-full blur-xl"
          />
        )}
      </AnimatePresence>

      {/* Coins Animation */}
      <AnimatePresence>
        {isAnimating && isHappy && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-16 h-16"
              >
                <img 
                  src="/lovable-uploads/2c973959-b07e-4453-bb6b-777e33246bdd.png" 
                  alt="Gold Coin"
                  className="w-full h-full object-contain animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dragon;