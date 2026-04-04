import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [cursorMode, setCursorMode] = useState('default'); // 'default', 'resume'
  const [cursorText, setCursorText] = useState('');

  // Use MotionValues for high-performance tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply springs to the MotionValues
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Dynamic scaling and dimensions
  const scale = useSpring(isNear && cursorMode === 'default' ? 1.5 : 1, springConfig);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleNearBall = (e) => setIsNear(e.detail);
    
    const handleCursorUpdate = (e) => {
      const { mode, text } = e.detail || {};
      if (mode) setCursorMode(mode);
      if (text !== undefined) setCursorText(text);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('cursorNearBall', handleNearBall);
    window.addEventListener('updateCursor', handleCursorUpdate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('cursorNearBall', handleNearBall);
      window.removeEventListener('updateCursor', handleCursorUpdate);
    };
  }, [isVisible, mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        left: 0, 
        top: 0,
        scale,
      }}
      className="fixed z-[9999] pointer-events-none flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
    >
      <AnimatePresence mode="wait">
        {cursorMode === 'resume' ? (
          <motion.div
            key="resume-cursor"
            initial={{ opacity: 0, scale: 0.5, width: 30, height: 30 }}
            animate={{ opacity: 1, scale: 1, width: 'auto', height: 'auto' }}
            exit={{ opacity: 0, scale: 0.5, width: 30, height: 30 }}
            className="bg-white px-6 py-3 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.8)] overflow-hidden flex items-center justify-center"
          >
            <span className="text-black text-[14px] font-bold uppercase tracking-[0.1em] whitespace-nowrap">
              {cursorText || 'DOWNLOAD RESUME'}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="default-cursor"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="w-[30px] h-[30px] rounded-full bg-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,1)]"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

