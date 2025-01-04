import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DragonProps {
  isHappy: boolean | null;
  isAnimating: boolean;
}

const Dragon: React.FC<DragonProps> = ({ isHappy, isAnimating }) => {
  return (
    <div className="relative w-full h-64 md:h-96">
      {/* Dragon Body */}
      <motion.div
        className={`absolute inset-0 ${
          isAnimating && isHappy ? "animate-dragon-laugh" : "animate-dragon-idle"
        }`}
      >
        <div className="relative w-full h-full">
          {/* Dragon Head */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-dragonGreen rounded-t-3xl relative">
              {/* Eyes */}
              <div className="absolute top-1/4 left-1/4 w-6 h-6 md:w-8 md:h-8 bg-dragonRed rounded-full" />
              <div className="absolute top-1/4 right-1/4 w-6 h-6 md:w-8 md:h-8 bg-dragonRed rounded-full" />
              
              {/* Scales */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="grid grid-cols-4 gap-1 p-2">
                  {Array(16).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 md:w-6 md:h-6 bg-dragonGold rounded-full opacity-50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dragon Body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-dragonGreen rounded-b-3xl relative">
              {/* Body Scales */}
              <div className="absolute inset-0">
                <div className="grid grid-cols-6 gap-1 p-2">
                  {Array(36).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 md:w-6 md:h-6 bg-dragonGold rounded-full opacity-50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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

      {/* Gold Pile */}
      <AnimatePresence>
        {isAnimating && isHappy && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-48 h-24 bg-dragonGold rounded-full relative">
              <div className="absolute inset-0">
                <div className="grid grid-cols-8 gap-1 p-2">
                  {Array(24).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-yellow-300 rounded-full opacity-80"
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