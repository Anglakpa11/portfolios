import { useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Discovery() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal shift based on the number of process steps
  // (Steps - 1) * 100vw if each step is full screen, but I'll use a staggered feel.
  const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-80%"]);

  return (
    <Section id="process" className="p-0 border-t border-white/10">
      <div ref={containerRef} className="h-[500vh] relative w-full bg-black">
        
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          
          {/* Centered Header Block (Top Pinned) */}
          <div className="flex flex-col items-center text-center pt-24 pb-12 z-30">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase text-[#FFFFFF] mb-4">
              LET ME SHOW HOW I DO
            </span>
            <h2 className="text-[32px] md:text-[60px] lg:text-[80px] font-bold uppercase leading-[1.1] tracking-tighter text-[#FFFFFF] mb-4">
              DISCOVER MY WORK METHOD
            </h2>
            <div className="flex items-center gap-6">
               <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-[#FFFFFF80] border-y border-white/10 py-3 px-6">
                 [ © ELEVATE YOUR VISUAL DESIGN WITH EXPERT TECHNIQUES AND ADVICE ]
               </p>
            </div>
          </div>

          {/* Horizontal Scrubbing Track */}
          <div className="flex-1 flex items-center relative gap-0">
             <motion.div 
               style={{ x }}
               className="flex flex-row items-center cursor-none"
             >
                {PORTFOLIO_DATA.process.map((step, idx) => (
                  <div 
                    key={step.id}
                    className="w-[100vw] shrink-0 flex flex-col items-center justify-center px-[5vw]"
                  >
                    <div className="w-full h-full flex flex-col lg:flex-row items-stretch">
                      
                      {/* Left: Content Block (50%) */}
                      <div className="flex-[1] flex flex-col justify-center px-[5vw] lg:px-[8vw] py-24 order-2 lg:order-1">
                         <div className="flex items-start gap-8 mb-10">
                            <span className="text-[20px] md:text-[24px] font-bold font-mono text-[#FFFFFF40] shrink-0">
                               [ {step.id} ]
                            </span>
                            <h3 className="text-[40px] md:text-[60px] lg:text-[80px] font-black uppercase tracking-tighter text-[#FFFFFF] leading-[0.9]">
                               {step.title}
                            </h3>
                         </div>

                         <p className="text-[18px] md:text-[20px] leading-relaxed text-[#FFFFFF90] font-medium mb-12 max-w-[600px]">
                           {step.description}
                         </p>

                         {/* Bullet Points */}
                         <ul className="flex flex-col gap-6">
                           {step.details?.map((detail, i) => (
                             <li key={i} className="flex items-start gap-4 text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">
                               <span className="mt-[12px] w-2 h-2 bg-white/40 shrink-0" />
                               <span className="font-medium opacity-80">{detail}</span>
                             </li>
                           ))}
                         </ul>
                      </div>

                      {/* Right: Full-Size Image Column (50%) */}
                      <div className="flex-1 w-full relative order-1 lg:order-2">
                         <motion.div 
                           className="absolute inset-0 bg-[#111111]"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 1 }}
                         >
                            <img 
                              src={step.image} 
                              alt={step.title} 
                              className="w-full h-full object-cover opacity-80" 
                            />
                            {/* Subtle gradient overlay to blend image edge */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
                         </motion.div>
                      </div>

                    </div>
                  </div>
                ))}
             </motion.div>
          </div>

          {/* Progress Indicator (Bottom) */}
          <div className="absolute bottom-[40px] left-[40px] right-[40px] flex justify-between items-center z-30">
             <div className="flex gap-2">
                {PORTFOLIO_DATA.process.map((_, i) => (
                   <motion.div 
                     key={i}
                     className="h-[2px] w-12 bg-white/10 overflow-hidden"
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
             <span className="text-[12px] font-bold tracking-[0.2em] text-[#FFFFFF30]">
               SCROLL TO EXPLORE METHOD
             </span>
          </div>

        </div>
      </div>
    </Section>
  );
}
