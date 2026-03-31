import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const ExperienceIcon = () => (
  <div className="w-[50px] md:w-[60px] flex items-center justify-center">
    <img 
      src="/assets/experience_logo.png" 
      alt="Experience Logo" 
      className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
    <div className="hidden text-[#6C3BFF] text-[40px] md:text-[50px] font-bold leading-none select-none items-center justify-center">
      <span className="scale-x-[-1] inline-block -mr-1">{"{"}</span>
      <span className="inline-block">{"{"}</span>
    </div>
  </div>
);

export default function Experience() {
  const { experience, experienceHeader } = PORTFOLIO_DATA;

  return (
    <Section id="experience" className="bg-black text-white px-[40px] pt-0 pb-32">
      <div className="relative">
        {/* Sticky Header Wrapper */}
        <div className="sticky top-0 z-20 bg-black pt-16 md:pt-24 pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="max-w-[800px]">
              <h2 className="text-[12.5vw] md:text-[8vw] lg:text-[120px] font-bold uppercase leading-[0.8] tracking-[-0.04em] mb-12">
                {experienceHeader.title}
              </h2>
              <div className="max-w-[700px]">
                <p className="text-[14px] md:text-[18px] font-bold uppercase tracking-[0.05em] leading-[1.4] text-white/80">
                  SHOWCASING MY VISUAL <span className="underline decoration-[#6C3BFF] underline-offset-8 decoration-2 text-white">DESIGNING JOURNEY</span>
                </p>
              </div>
            </div>

            {/* Year Range Pill */}
            <div className="flex items-center gap-4 group">
              <div className="w-[12px] h-[12px] bg-white rounded-full" />
              <div className="bg-[#6C3BFF] h-[36px] px-6 flex items-center justify-center rounded-full text-[12px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-white shadow-[0_0_20px_rgba(108,59,255,0.3)]">
                {experienceHeader.currentYearRange}
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience List Area */}
        <div className="flex flex-col lg:flex-row">
          {/* Left space (blank on desktop) */}
          <div className="hidden lg:block lg:w-1/3 xl:w-1/4" />
          
          {/* Right side (content) */}
          <div className="flex-1 flex flex-col gap-24 pt-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 md:gap-16 pt-12 border-t border-white/5 first:border-0"
              >
                {/* Icon Column */}
                <div className="pt-2">
                  <ExperienceIcon />
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-[28px] md:text-[40px] font-bold uppercase leading-none tracking-tight text-white group-hover:text-[#6C3BFF] transition-colors duration-300">
                        {exp.company}
                      </h4>
                      <p className="text-[16px] md:text-[20px] font-bold uppercase tracking-wider text-white/50">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[14px] md:text-[18px] font-bold tracking-[0.05em] uppercase text-white px-4 py-1 border border-white/10 rounded-sm bg-white/5">
                        [ {exp.period} ]
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-[16px] md:text-[18px] leading-relaxed text-white/70 max-w-[900px]">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
