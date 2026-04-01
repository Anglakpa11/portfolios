import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.jpg';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ImageZoom() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <section ref={containerRef} className="w-full bg-black flex flex-col relative pb-8 md:pb-12">
      <div className="relative w-full h-[50vh] md:h-[776px] overflow-hidden group">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Subtitle below image on the left side */}
      <div className="w-full px-[24px] md:px-[40px] mt-[32px] md:mt-[40px] flex justify-start">
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative overflow-hidden block text-[#FFFFFF] text-[clamp(18px,4.5vw,24px)] md:text-[24px] max-w-[600px] leading-relaxed font-medium cursor-pointer"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {PORTFOLIO_DATA.hero.subtitle}
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {PORTFOLIO_DATA.hero.subtitle}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
