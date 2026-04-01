import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2500; // 2.5 seconds for a smooth, steady climb
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Using a smooth ease-out power function for a professional feel
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easedProgress * end);

      setPercent(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => onComplete(), 500);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-8"
    >
      <div className="w-full max-w-[400px] flex flex-col items-center gap-8">

        {/* Real-time Number Counter */}
        <div className="flex items-baseline gap-2">
          <h1 className="text-[100px] md:text-[140px] font-black tracking-tighter text-[#FFFFFF] leading-none">
            {percent}
          </h1>
          <span className="text-[24px] md:text-[32px] font-bold text-[#6C3BFF]">
            %
          </span>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#6C3BFF] shadow-[0_0_20px_rgba(108,59,255,0.5)]"
            style={{ width: `${percent}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>

        {/* Loading Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="text-[12px] font-bold tracking-[0.4em] text-[#FFFFFF] uppercase"
        >
          Loading creativity…
        </motion.span>

      </div>
    </motion.div>
  );
}
