import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.jpg';

export default function ImageZoom() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 0.95]);

  return (
    <section ref={containerRef} className="w-full bg-black overflow-hidden relative">
      <div className="relative w-full h-[776px] overflow-hidden group">
        <motion.div 
          style={{ scale }}
          className="w-full h-full"
        >
          <img 
            src={profileImg} 
            alt="Profile Detail" 
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
          />
        </motion.div>

        {/* Subtle Overlay to ensure shadow detail */}

        {/* Subtle Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
