import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNear, setIsNear] = useState(false);

  // Use MotionValues for high-performance tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply springs to the MotionValues
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const scale = useSpring(isNear ? 1.5 : 1, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleNearBall = (e) => setIsNear(e.detail);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('cursorNearBall', handleNearBall);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('cursorNearBall', handleNearBall);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: -15, 
        top: -15,
        scale,
      }}
      className="fixed z-[9999] pointer-events-none"
    >
      <div className="w-[30px] h-[30px] rounded-full bg-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,1)]" />
    </motion.div>
  );
}
