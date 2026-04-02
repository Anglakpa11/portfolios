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
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-24 gap-8 lg:gap-8 relative w-full">
        {/* Left Side: Massive Title with Hollow Circle */}
        <div className="relative">
          <h2 className="text-[clamp(48px,12vw,64px)] md:text-[120px] lg:text-[140px] font-bold uppercase leading-[0.85] tracking-[-0.04em] text-[#FFFFFF]">
            SELECTED<br />WORK
          </h2>
          <div className="absolute right-[-10px] md:right-[-40px] bottom-1 md:bottom-8 w-[24px] h-[24px] md:w-[48px] md:h-[48px] rounded-full border border-white/30" />
        </div>

        {/* Right Side: Badges & Description */}
        <div className="flex flex-col w-full lg:w-1/2 lg:max-w-[600px] items-start pt-4 lg:pt-0">
          <div className="flex w-full justify-start md:justify-end mb-8 md:mb-16">
            <div className="flex items-center gap-4">
              <div className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] bg-white rounded-full"></div>
              <div className="bg-[#6C3BFF] px-4 md:px-6 py-1.5 md:py-2 rounded-[4px] text-white text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
                EXPLORE
              </div>
            </div>
          </div>

          <p className="text-[#FFFFFF] text-[16px] md:text-[22px] leading-[1.4] font-medium text-left lg:ml-auto w-full lg:w-[90%] opacity-80">
            Precision pixels. Intuitive flows. Human-centered logic. Design that doesn't just look good it performs. My work is the evidence.
          </p>
        </div>
      </div>
      
      {/* Mobile View: Simple Vertical Stack */}
      <div className="flex md:hidden flex-col gap-20 mt-12">
        {PORTFOLIO_DATA.work.map((project) => (
          <div key={project.id} className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#111111] border border-white/10">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#6C3BFF] font-black text-[12px] tracking-widest">{project.id} / {project.year}</span>
              <h3 className="text-[32px] font-bold text-white leading-tight uppercase">{project.title}</h3>
              <p className="text-white/60 text-[14px] leading-relaxed mb-4">{project.overview}</p>
              <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-white font-bold tracking-tight uppercase border-b border-white/20 pb-2 w-max"
              >
                VIEW PROJECT ↘
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Pinned Scroll Showcase */}
      <div ref={containerRef} className="hidden md:block relative mt-16 w-full h-[800vh]">
        <div className="sticky top-0 h-screen w-full flex flex-row items-center justify-between gap-0 z-20 overflow-hidden">
          
          {/* Left Side: Static Image & Metadata Table */}
          <div className="w-full md:w-[45%] lg:w-1/2 flex flex-col pr-12 lg:pr-24 z-20 transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col gap-12"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-[#111111] border border-white/10 shadow-2xl">
                   <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover opacity-90" />
                </div>
                
                {/* Metadata Table */}
                <div className="w-full flex flex-col border-t border-white/20">
                   <div className="flex flex-row py-6 border-b border-white/10 gap-12 items-start">
                     <h4 className="text-[14px] font-bold tracking-[0.2em] uppercase text-white/40 w-[140px] shrink-0 pt-1.5">Overview</h4>
                     <p className="text-[20px] leading-relaxed text-white/80 font-medium">{activeProject.overview}</p>
                   </div>
                   <div className="flex flex-row py-6 border-b border-white/10 gap-12 items-center">
                     <h4 className="text-[14px] font-bold tracking-[0.2em] uppercase text-white/40 w-[140px] shrink-0">Industry</h4>
                     <p className="text-[20px] leading-relaxed text-white/80 font-medium">{activeProject.industry}</p>
                   </div>
                   <div className="flex flex-row py-6 border-b border-white/10 gap-12 items-center">
                     <h4 className="text-[14px] font-bold tracking-[0.2em] uppercase text-white/40 w-[140px] shrink-0">Explore</h4>
                     <a 
                       href={activeProject.link} 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group/link flex items-center gap-3 text-[20px] leading-relaxed text-white font-bold tracking-tight hover:text-[#6C3BFF] transition-all duration-300"
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
          <div className="w-full md:w-[55%] lg:w-[45%] flex flex-col items-end text-right relative z-10 h-full justify-center">
             <div className="flex flex-col gap-8 w-full">
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
                       className="text-[clamp(32px,4vw,72px)] font-bold tracking-tighter leading-[1.1] transition-colors cursor-pointer select-none text-right whitespace-nowrap"
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
