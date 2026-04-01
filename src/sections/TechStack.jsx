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
    <Section id="stack" className="bg-black text-white px-[40px] pt-0 pb-32">
      {/* Sticky Header Wrapper - Same as Experience */}
      <div className="sticky top-0 z-20 bg-black pt-10 md:pt-[60px] pb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <div className="max-w-[800px] flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
              className="text-[12.5vw] md:text-[8vw] lg:text-[120px] font-bold uppercase leading-[0.8] tracking-[-0.04em] mb-4 md:mb-6 order-1"
            >
              CREATIVE STACK
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-[14px] md:text-[18px] font-bold uppercase tracking-[0.05em] leading-[1.4] text-white/80 order-2 mt-2"
            >
              EXPLORE MY CURATED <span className="underline decoration-[#6C3BFF] underline-offset-8 decoration-2 text-white">TOP DESIGN PICS</span>
            </motion.p>
          </div>

          {/* Status Pill - Same as Year Range Pill */}
          <div className="flex items-center gap-4 group pb-12 lg:pb-0">
            <div className="w-[12px] h-[12px] bg-white rounded-full" />
            <div className="bg-[#6C3BFF] h-[36px] px-6 flex items-center justify-center rounded-full text-[12px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-white shadow-[0_0_20px_rgba(108,59,255,0.3)]">
              MY SKILL
            </div>
          </div>
        </div>
      </div>

      {/* Skill List Area with Offset - Same as Experience */}
      <div className="flex flex-col lg:flex-row">
        {/* Left space (blank on desktop) */}
        <div className="hidden lg:block lg:w-1/2" />

        {/* Right side (content) */}
        <div className="flex-1 flex flex-col gap-8 md:gap-12 pt-0">
          {PORTFOLIO_DATA.stack.map((item, index) => (
            <motion.div
              key={index}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 pt-6 border-t border-white/5 first:border-0"
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
              {/* Icon Container */}
              <div className="pt-1">
                <TechIcon name={item.name} />
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    {/* Animated Name Area */}
                    <div className="relative overflow-hidden h-[40px] md:h-[50px] flex items-center">
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
                            className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-white inline-block"
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
                            className="text-[32px] md:text-[44px] font-black uppercase tracking-tight text-[#6C3BFF] inline-block"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {item.type}
                    </span>
                  </div>

                  {/* Percentage Pill */}
                  <div className="flex items-center">
                    <span className="text-[14px] md:text-[18px] font-bold tracking-[0.05em] uppercase text-white px-4 py-1 border border-white/10 rounded-sm bg-white/5">
                      [ {item.percent} ]
                    </span>
                  </div>
                </div>

                {/* Description Area */}
                <p className="text-[18px] md:text-[22px] lg:text-[24px] leading-relaxed text-white/70 max-w-[900px] group-hover:text-white transition-colors duration-300">
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
