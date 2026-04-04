import { useRef, useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Discovery() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal shift based on the number of process steps
  const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-80%"]);

  return (
    <Section id="process" className="p-0 border-t border-white/10">
      <div ref={containerRef} className="h-auto md:h-[500vh] relative w-full bg-black">

        <div className="md:sticky md:top-0 md:h-screen relative w-full flex flex-col overflow-hidden">

          {/* Centered Header Block (Top Pinned) */}
          <div className="flex flex-col items-center text-center pt-4 md:pt-8 pb-1 md:pb-2 z-30 px-[24px]">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
              className="text-[clamp(20px,5vw,30px)] md:text-[4vw] lg:text-[72px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#FFFFFF] mb-1 md:mb-4"
            >
              DISCOVER MY WORK METHOD
            </motion.h2>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#FFFFFF] mb-3 md:mb-8"
            >
              LET ME SHOW HOW I DO
            </motion.span>
          </div>

          {/* Horizontal/Vertical Track */}
          <div className="flex-1 flex items-center relative gap-0 py-20 md:py-0">
            <motion.div
              style={{ x: isMobile ? 0 : x }}
              className="flex flex-col md:flex-row items-center md:cursor-none gap-20 md:gap-0"
            >
              {PORTFOLIO_DATA.process.map((step, idx) => (
                <div
                  key={step.id}
                  className="w-full md:w-[100vw] shrink-0 flex flex-col items-center justify-center px-[24px] md:px-[5vw]"
                >
                  <div className="w-full h-auto flex flex-col lg:flex-row items-stretch bg-[#0A0A0A] lg:bg-transparent rounded-xl overflow-hidden border border-white/5 lg:border-0">

                    {/* Left: Content Block (50%) */}
                    <div className="flex-[1] flex flex-col justify-center px-6 md:px-[5vw] lg:px-[8vw] py-6 md:py-12 order-2 lg:order-1">
                      <div className="flex items-start gap-4 md:gap-8 mb-4 md:mb-8">
                        <span className="text-[12px] md:text-[18px] font-bold font-mono text-[#FFFFFF40] shrink-0 mt-1 md:mt-2">
                          [ {step.id} ]
                        </span>
                        <h3 className="text-[clamp(18px,4vw,22px)] md:text-[40px] lg:text-[48px] font-black uppercase tracking-tighter text-[#FFFFFF] leading-[1]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-[13px] md:text-[18px] leading-relaxed text-[#FFFFFF90] font-medium mb-4 md:mb-8 max-w-[600px]">
                        {step.description}
                      </p>

                      {/* Bullet Points */}
                      <ul className="flex flex-col gap-2 md:gap-5">
                        {step.details?.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 md:gap-4 text-[13px] md:text-[16px] text-[#FFFFFF]">
                            <span className="mt-[7px] md:mt-[10px] w-1.5 h-1.5 md:w-2 md:h-2 bg-white/40 shrink-0" />
                            <span className="font-medium opacity-80 leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Full-Size Image Column (50%) */}
                    <div className="flex-1 w-full relative h-[300px] md:h-[40vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
                      <div className="md:absolute md:inset-0 w-full h-full bg-[#111111]">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover opacity-100 lg:opacity-80"
                        />
                        {/* Subtle gradient overlay to blend image edge */}
                        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
                        <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator (Hidden on Mobile) */}
          <div className="hidden md:flex absolute bottom-[20px] md:bottom-[40px] left-[24px] md:left-[40px] right-[24px] md:right-[40px] justify-between items-center z-30">
            <div className="flex gap-2">
              {PORTFOLIO_DATA.process.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[2px] w-8 md:w-12 bg-white/10 overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-white"
                    style={{
                      scaleX: useTransform(scrollYProgress,
                        [i / PORTFOLIO_DATA.process.length, (i + 1) / PORTFOLIO_DATA.process.length],
                        [0, 1]
                      ),
                      transformOrigin: "left"
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-[#FFFFFF30] uppercase">
              SCROLL METHOD
            </span>
          </div>

        </div>
      </div>
    </Section>
  );
}
