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

      {/* Treasure Chest Animation */}
      <AnimatePresence>
        {isAnimating && isHappy && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            {/* Treasure Chest */}
            <div className="w-48 h-32 bg-[#8B4513] rounded-t-lg relative">
              {/* Chest Lid */}
              <div className="absolute -top-4 left-0 w-full h-8 bg-[#A0522D] rounded-t-lg transform origin-bottom"></div>
              
              {/* Gold Coins */}
              <div className="absolute inset-2">
                <div className="grid grid-cols-6 gap-1">
                  {Array(24).fill(null).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="w-4 h-4 bg-dragonGold rounded-full shadow-lg"
                    />
                  ))}
                </div>
              </div>
              
              {/* Glowing Gems */}
              <div className="absolute inset-4">
                <div className="grid grid-cols-3 gap-2">
                  {Array(6).fill(null).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className={`w-6 h-6 rounded-lg shadow-lg animate-pulse ${
                        i % 3 === 0 ? 'bg-red-500' : 
                        i % 3 === 1 ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dragon;