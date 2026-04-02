import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MagneticLetter = ({ char, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      onMouseEnter={() => setIsHovered(true)}
      animate={{
        x: position.x,
        y: position.y,
        rotate: position.x * 0.05
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative overflow-hidden pointer-events-auto h-max cursor-default"
    >
      {/* Slide Reveal: Original (White) */}
      <motion.div
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.02 }}
        className="block"
      >
        <span className="text-white block">{char}</span>
      </motion.div>

      {/* Slide Reveal: Hover (Purple) */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.02 + 0.05 }}
        className="absolute inset-0 block"
      >
        <span className="text-[#6C3BFF] block">{char}</span>
      </motion.div>
    </motion.div>
  );
};

const HidingBall = ({ footerRef }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isCaught, setIsCaught] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [canBeCaught, setCanBeCaught] = useState(false);
  const ballRef = React.useRef(null);
  const timerRef = React.useRef(null);

  // Initialize position to the expected starting spot (right side)
  React.useEffect(() => {
    if (footerRef.current) {
      const rect = footerRef.current.getBoundingClientRect();
      setPos({ 
        x: rect.width - 150, 
        y: 100 
      });
    }
  }, [footerRef]);

  const teleport = () => {
    if (isCaught || canBeCaught || !footerRef.current) return;
    
    if (!isGameStarted) {
      setIsGameStarted(true);
      timerRef.current = setTimeout(() => {
        setCanBeCaught(true);
      }, 10000);
    }
    
    const footerRect = footerRef.current.getBoundingClientRect();
    const ballSize = 100; // Approx size of the ball
    
    // Jump to ANY random position within the footer
    const randomX = Math.max(20, Math.random() * (footerRect.width - ballSize - 40));
    const randomY = Math.max(20, Math.random() * (footerRect.height - ballSize - 40));
    
    setPos({ x: randomX, y: randomY });
  };

  // Mouse tracking logic - Repel from across the footer
  React.useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!ballRef.current || isCaught || canBeCaught) return;

      const { pageX, pageY } = e;
      const rect = ballRef.current.getBoundingClientRect();
      
      const ballCenterX = rect.left + window.scrollX + rect.width / 2;
      const ballCenterY = rect.top + window.scrollY + rect.height / 2;

      const dx = pageX - ballCenterX;
      const dy = pageY - ballCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const threshold = 250; 

      if (distance < threshold) {
        teleport();
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [isCaught, canBeCaught, isGameStarted]);

  const handleCatch = (e) => {
    if (!canBeCaught) {
      teleport();
      return;
    }
    
    setIsCaught(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
    
    setTimeout(() => {
      setIsCaught(false);
      setIsGameStarted(false);
      setCanBeCaught(false);
      // Reset position to right side
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setPos({ x: rect.width - 150, y: 100 });
      }
    }, 2000);
  };

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={ballRef}
      onMouseEnter={teleport}
      onClick={handleCatch}
      animate={{ 
        left: pos.x, 
        top: pos.y,
        scale: isCaught ? 1.2 : (canBeCaught ? 1.1 : 1),
        backgroundColor: isCaught ? "#D3FF52" : (canBeCaught ? "#6C3BFF" : "#6C3BFF"),
        boxShadow: isCaught 
          ? "0 0 60px rgba(211,255,82,0.6)" 
          : (canBeCaught ? "0 0 50px rgba(108,59,255,0.8)" : "0 0 40px rgba(108,59,255,0.4)")
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25
      }}
      className="absolute w-[12vw] h-[12vw] md:w-[6.5vw] md:h-[6.5vw] rounded-full cursor-pointer pointer-events-auto flex items-center justify-center border-2 border-white/10 z-50"
    >
      {!isCaught ? (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white font-black text-[10px] md:text-[11px] whitespace-nowrap text-center leading-tight px-2"
        >
          {canBeCaught ? "CLICK\nME" : (isGameStarted ? "CAN'T\nSEE ME" : "CATCH\nME")}
        </motion.span>
      ) : (
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-black font-black text-[10px] md:text-[11px] whitespace-nowrap"
        >
          GO!!
        </motion.span>
      )}
    </motion.div>
  );
};

export default function Footer() {
  const footerRef = React.useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer ref={footerRef} className="bg-black text-white pt-20 md:pt-24 pb-12 px-[24px] md:px-[40px] w-full overflow-hidden font-sans border-t border-white/5 relative">
      <div className="w-full flex flex-col relative z-10">

        {/* Ball is now an absolute child of the relative footer */}
        <HidingBall footerRef={footerRef} />

        {/* Branding Section with Magnetic Effect */}
        <div className="flex flex-row items-end justify-between mb-12 md:mb-24 px-0 cursor-default group">
          <div className="relative flex-1 flex items-end justify-start overflow-visible">
            <div className="text-[20vw] md:text-[14vw] font-black leading-[0.8] tracking-[-0.05em] uppercase flex pointer-events-none">
              <MagneticLetter char="A" index={0} />
              <MagneticLetter char="N" index={1} />
              <MagneticLetter char="G" index={2} />
            </div>
          </div>

          {/* Empty space where the ball used to be */}
          <div className="mb-[4vw] md:mb-[1.5vw] shrink-0 w-[12vw] md:w-[6.5vw] h-[12vw] md:h-[6.5vw]" />
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-white/10 mb-10" />

        {/* Info & Navigation Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 text-[11px] md:text-[15px] font-bold tracking-[0.1em] uppercase">

          {/* Copyright */}
          <div className="text-white/40 order-3 md:order-1">
            ©2024 DESIGNER
          </div>

          {/* Right Navigation */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-white/90 order-2">

            {/* Status & Location */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-[16px] h-[16px] md:w-[20px] md:h-[20px]">
                <div className="absolute inset-0 border border-white/20 rounded-full" />
                <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>
              <span className="whitespace-nowrap">KTM, NEPAL</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="hover:text-[#6C3BFF] transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
            >
              BACK TO TOP ↗
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}
