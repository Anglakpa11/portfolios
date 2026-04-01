import { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import ScrambleText from '../components/ScrambleText';

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const num = PORTFOLIO_DATA.work.length;
    let idx = Math.floor(latest * num);
    if (idx >= num) idx = num - 1;
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  });

  const activeProject = PORTFOLIO_DATA.work[activeIndex] || PORTFOLIO_DATA.work[0];

  return (
    <Section id="work" className="border-t border-white/10 pt-[80px] md:pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-24 gap-12 lg:gap-8 relative w-full">
        {/* Left Side: Massive Title with Hollow Circle */}
        <div className="relative">
          <h2 className="text-[64px] md:text-[120px] lg:text-[140px] font-bold uppercase leading-[0.85] tracking-[-0.04em] text-[#FFFFFF]">
            SELECTED<br />WORK
          </h2>
          <div className="absolute right-[-20px] md:right-[-40px] bottom-2 md:bottom-8 w-[36px] h-[36px] md:w-[48px] md:h-[48px] rounded-full border border-white/30" />
        </div>

        {/* Right Side: Badges & Description */}
        <div className="flex flex-col w-full lg:w-1/2 lg:max-w-[600px] items-end lg:items-start pt-4 lg:pt-0">
          
          <div className="flex w-full justify-end mb-8 md:mb-16">
            <div className="flex items-center gap-4">
              <div className="w-[14px] h-[14px] bg-white rounded-full"></div>
              <div className="bg-[#6C3BFF] px-6 py-2 rounded-[4px] text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                EXPLORE
              </div>
            </div>
          </div>

          <p className="text-[#FFFFFF] text-[16px] md:text-[22px] leading-[1.4] font-medium text-left lg:ml-auto w-full lg:w-[90%]">
            Precision pixels. Intuitive flows. Human-centered logic. Design that doesn't just look good it performs. My work is the evidence.
          </p>
        </div>
      </div>
      
      {/* Pinned Scroll Showcase */}
      <div ref={containerRef} className="relative mt-8 md:mt-16 w-full h-[800vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 z-20 overflow-hidden py-16 md:py-0">
          
          {/* Left Side: Static Image & Metadata Table */}
          <div className="w-full md:w-[45%] lg:w-1/2 flex flex-col pr-0 md:pr-12 lg:pr-24 z-20 transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col gap-4 md:gap-12"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-[12px] md:rounded-[16px] overflow-hidden bg-[#111111] border border-white/10 shadow-2xl">
                   <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover opacity-90" />
                </div>
                
                {/* Metadata Table */}
                <div className="w-full flex flex-col border-t border-white/20">
                   <div className="flex flex-row py-4 md:py-6 border-b border-white/10 gap-6 sm:gap-12 items-start">
                     <h4 className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-white/40 w-[100px] md:w-[140px] shrink-0 pt-1.5">Overview</h4>
                     <p className="text-[16px] md:text-[20px] leading-relaxed text-white/80 font-medium">{activeProject.overview}</p>
                   </div>
                   <div className="flex flex-row py-4 md:py-6 border-b border-white/10 gap-6 sm:gap-12 items-center">
                     <h4 className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-white/40 w-[100px] md:w-[140px] shrink-0">Industry</h4>
                     <p className="text-[16px] md:text-[20px] leading-relaxed text-white/80 font-medium">{activeProject.industry}</p>
                   </div>
                   <div className="flex flex-row py-4 md:py-6 border-b border-white/10 gap-6 sm:gap-12 items-center">
                     <h4 className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-white/40 w-[100px] md:w-[140px] shrink-0">Explore</h4>
                     <a 
                       href={activeProject.link} 
                       className="group/link flex items-center gap-3 text-[16px] md:text-[20px] leading-relaxed text-white font-bold tracking-tight hover:text-[#6C3BFF] transition-all duration-300"
                     >
                       VIEW PROJECT
                       <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:border-[#6C3BFF] group-hover/link:bg-[#6C3BFF] transition-all duration-300">
                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                           <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                       </div>
                     </a>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center fixed text (Date) */}
          <div className="hidden lg:flex w-[10%] items-center justify-center z-0">
            <span className="text-[24px] font-mono tracking-widest text-[#FFFFFF] opacity-60">
              <ScrambleText text={activeProject.year} activeIndex={activeIndex} />
            </span>
          </div>

          {/* Right Side: Static Typographic Tracker */}
          <div className="w-full md:w-[55%] lg:w-[45%] flex flex-col items-start lg:items-end text-left lg:text-right relative z-10 h-full justify-center">
             <div className="flex flex-col gap-4 md:gap-8 w-full">
               {PORTFOLIO_DATA.work.map((project, idx) => {
                 const isActive = activeIndex === idx;
                 return (
                   <div 
                     key={project.id}
                     className="flex flex-col justify-center w-full"
                   >
                     <motion.h3 
                       animate={{ 
                         color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.15)",
                       }}
                       transition={{ duration: 0.3, ease: "easeOut" }}
                       className="text-[clamp(24px,3.5vw,48px)] lg:text-[clamp(32px,4.5vw,72px)] font-bold tracking-tighter leading-[1.1] transition-colors cursor-pointer select-none text-left whitespace-nowrap"
                       onClick={() => {
                          if (containerRef.current) {
                            const rect = containerRef.current.getBoundingClientRect();
                            const top = window.scrollY + rect.top + ((idx + 0.5) / PORTFOLIO_DATA.work.length) * rect.height;
                            window.scrollTo({ top, behavior: 'smooth' });
                          }
                       }}
                     >
                       {project.title}
                     </motion.h3>
                   </div>
                 )
               })}
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
