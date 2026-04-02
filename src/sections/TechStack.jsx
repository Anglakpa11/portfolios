import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const TechIcon = ({ name }) => {
  const icons = {
    figma: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
    framer: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg",
    webflow: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/webflow.svg",
    photoshop: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg",
    canva: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg",
  };

  const iconUrl = icons[name.toLowerCase()];

  if (!iconUrl) return null;

  return (
    <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex items-center justify-center">
      <img
        src={iconUrl}
        alt={name}
        className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

export default function TechStack() {
  return (
    <Section id="stack" className="bg-black text-white px-[24px] md:px-[40px] pt-0 pb-24 md:pb-32">
      {/* Sticky Header Wrapper - Same as Experience */}
      <div className="sticky top-0 z-20 bg-black pt-8 md:pt-[60px] pb-6 md:pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12">
          <div className="max-w-[800px] flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
              className="text-[clamp(36px,10vw,50px)] md:text-[6vw] lg:text-[96px] font-bold uppercase leading-[0.8] tracking-[-0.04em] mb-4 md:mb-6 order-1"
            >
              CREATIVE STACK
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-[10px] md:text-[14px] font-bold uppercase tracking-[0.05em] leading-[1.4] text-white/70 order-2 mt-2"
            >
              EXPLORE MY CURATED <span className="underline decoration-[#6C3BFF] underline-offset-8 decoration-2 text-white">TOP DESIGN PICS</span>
            </motion.p>
          </div>

          {/* Status Pill - Same as Year Range Pill */}
          <div className="flex items-center gap-4 group pb-8 md:pb-12 lg:pb-0">
            <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-white rounded-full shrink-0" />
            <div className="bg-[#6C3BFF] h-[32px] md:h-[36px] px-5 md:px-6 flex items-center justify-center rounded-full text-[10px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-white shadow-[0_0_20px_rgba(108,59,255,0.3)]">
              MY SKILL
            </div>
          </div>
        </div>
      </div>

      {/* Skill List Area with Offset - Same as Experience */}
      <div className="flex flex-col lg:flex-row">
        {/* Left space (blank on desktop) */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Right side (content) - Vertical List Layout */}
        <div className="flex-1 flex flex-col pt-8 md:pt-12">
          {PORTFOLIO_DATA.stack.map((item, index) => (
            <motion.div
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-8 md:py-12 border-t border-white/5 first:pt-0 first:border-0"
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.8 } },
                hover: {}
              }}
            >
              {/* Icon & Percent Box (Left side of list item) */}
              <div className="flex items-center gap-6 shrink-0 w-full md:w-[120px] lg:w-[150px]">
                <div className="scale-90 md:scale-100 origin-left">
                  <TechIcon name={item.name} />
                </div>
                <div className="md:hidden ml-auto">
                   <span className="text-[10px] font-bold uppercase text-white/40 px-2 py-0.5 border border-white/10 rounded-sm bg-white/5">
                    {item.percent}
                  </span>
                </div>
              </div>

              {/* Content Area (Right side of list item) */}
              <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-12 w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="relative overflow-hidden h-[20px] md:h-[28px] flex items-center">
                      {/* Slide Out: Original */}
                      <div className="flex">
                        {item.name.toUpperCase().split("").map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            variants={{
                              initial: { x: 0, opacity: 1 },
                              animate: { x: 0, opacity: 1 },
                              hover: { x: "-110%", opacity: 0 }
                            }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: charIndex * 0.02 }}
                            className="text-[15px] md:text-[22px] font-black uppercase tracking-tight text-white inline-block leading-none"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </div>

                      {/* Slide In: Purple */}
                      <div className="absolute inset-x-0 flex">
                        {item.name.toUpperCase().split("").map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            variants={{
                              initial: { x: "120%", opacity: 0 },
                              animate: { x: "120%", opacity: 0 },
                              hover: { x: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: charIndex * 0.02 + 0.1 }}
                            className="text-[15px] md:text-[22px] font-black uppercase tracking-tight text-[#6C3BFF] inline-block leading-none"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden md:inline-block text-[10px] md:text-[12px] font-bold uppercase text-white/40 px-2 py-0.5 border border-white/10 rounded-sm bg-white/5">
                      {item.percent}
                    </span>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {item.type}
                  </span>
                </div>

                <p className="max-w-[450px] text-[11px] md:text-[13px] leading-relaxed text-white/50 group-hover:text-white/80 transition-colors duration-300 font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
