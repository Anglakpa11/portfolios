import { useRef, useState } from 'react';
import Section from '../components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Motivation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const [isColorful, setIsColorful] = useState(false);

  return (
    <Section id="motivation" className="bg-black text-white px-[24px] md:px-[40px] pt-0 pb-20 md:pb-32">
      {/* Full Screen Image */}
      <div
        ref={containerRef}
        className="w-[calc(100%+48px)] md:w-[calc(100%+80px)] -mx-[24px] md:-mx-[40px] h-[60vh] md:h-screen mb-16 md:mb-[120px] overflow-hidden relative"
      >
        <motion.div 
          style={{ scale }} 
          className="w-full h-full cursor-pointer"
          onClick={() => setIsColorful(!isColorful)}
        >
          <motion.img
            src="/assets/ang.jpg"
            alt="Motivation Cover"
            className="w-full h-full object-cover"
            animate={{ 
              filter: isColorful ? "grayscale(0%)" : "grayscale(100%)",
              opacity: isColorful ? 1 : 0.6
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className="relative">
        {/* Sticky Header Wrapper (Matching Services) */}
        <div className="z-20 bg-black pt-8 md:pt-[60px] pb-8 md:pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12">
            <div className="max-w-[800px] flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                className="text-[clamp(44px,11vw,64px)] md:text-[8vw] lg:text-[120px] font-bold uppercase leading-[0.8] tracking-[-0.04em] mb-4 md:mb-6 order-1"
              >
                MOTIVATION
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-[12px] md:text-[18px] font-bold uppercase tracking-[0.05em] leading-[1.4] text-white/70 order-2 mt-2"
              >
                THE JOURNEY OF CREATIVE <span className="underline decoration-[#6C3BFF] underline-offset-8 decoration-2 text-white">INSPIRATION</span>
              </motion.p>
            </div>

            {/* Right-aligned icon in header */}
            <div className="hidden lg:flex items-center gap-6 group">
              <div className="w-[40px] h-[40px] rounded-full border border-white/30" />
            </div>
          </div>
        </div>

        {/* Content Area (Offset Layout Matching Services) */}
        <div className="flex flex-col lg:flex-row border-t border-white/10 lg:border-t-0">
          {/* Left space (blank on desktop) */}
          <div className="hidden lg:block lg:w-1/3 xl:w-1/4" />

          {/* Right side (Text & Quote Content) */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12 pt-8 md:pt-12">

            <div className="flex flex-col gap-6 md:gap-8 text-[16px] md:text-[24px] lg:text-[28px] font-medium leading-[1.6] text-white/90 max-w-[900px]">
              <p>
                Creativity is the heartbeat of design. Every pixel you place, and concept you bring to life is a testament to your unique vision. "Remember, each challenge is an opportunity to innovate setback is a step toward your breakthrough."
              </p>
              <p>
                Embrace the process, trust your instincts and let your passion drive you forward. Your designs have the power to inspire and leave a "Lasting impact on the World" Keep pushing boundaries and stay true to your Artistic journey you have the ability to create something extraordinary.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 mt-8 lg:mt-12 pt-8 md:pt-12 border-t border-white/5">
              <h3 className="text-[18px] md:text-[28px] lg:text-[32px] font-bold uppercase leading-[1.3] tracking-tight text-white max-w-[800px]">
                "DESIGN IS NOT JUST WHAT IT LOOKS LIKE AND FEELS LIKE. DESIGN IS HOW IT WORKS."
              </h3>
              <div className="flex justify-start pt-1 md:pt-2">
                <p className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase tracking-widest text-[#6C3BFF]">
                  — STEVE JOBS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
