import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, X, Disc, Columns, Target } from 'lucide-react';

const ServiceIcon = ({ title }) => {
  const iconProps = { size: 28, strokeWidth: 1.5, className: "text-white/90" };
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('ux/ui')) return <X {...iconProps} />;
  if (lowerTitle.includes('graphic')) return <Disc {...iconProps} />;
  if (lowerTitle.includes('web')) return <Columns {...iconProps} />;
  
  return <Target {...iconProps} />;
};

const ExperienceIcon = () => (
  <div className="w-[50px] md:w-[60px] flex items-center justify-center">
    {/* Using the user-provided K-logo image */}
    <img 
      src="/assets/experience_logo.png" 
      alt="Experience Logo" 
      className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
      onError={(e) => {
        // Fallback to stylized brackets if image fails to load
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

export default function ServicesExperience() {
  const { servicesHeader, services, experience, experienceHeader } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="services" className="bg-black text-white px-[40px] pt-0">
      {/* Services Section */}
      <div className="flex flex-col mb-32 relative">
        {/* Sticky Header Wrapper */}
        <div className="sticky top-0 z-20 bg-black pt-16 md:pt-24 pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            {/* Header Part */}
            <div className="max-w-[800px]">
              <h2 className="text-[12.5vw] md:text-[8vw] lg:text-[120px] font-bold uppercase leading-[0.8] tracking-[-0.04em] mb-12">
                {servicesHeader.title}
              </h2>
              <div className="max-w-[600px]">
                <p className="text-[14px] md:text-[18px] font-bold uppercase tracking-[0.05em] leading-[1.4] text-white/80">
                  {servicesHeader.description}
                </p>
              </div>
            </div>

            {/* Action Button Part */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-[12px] h-[12px] bg-white rounded-full" />
              <div className="bg-[#6C3BFF] h-[48px] px-8 flex items-center justify-center rounded-[4px] text-[12px] md:text-[14px] font-bold tracking-[0.1em] uppercase group-hover:bg-[#5a2ee0] transition-colors">
                DISCOVER
              </div>
            </div>
          </div>
        </div>

        {/* Services List Area */}
        <div className="flex flex-col lg:flex-row">
          {/* Left space (blank on desktop) */}
          <div className="hidden lg:block lg:w-1/2" />
          
          {/* Right side (content) */}
          <div className="flex-1 flex flex-col pt-12">
            {services.map((service, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={false}
                  className="border-b border-white/20 overflow-hidden"
                >
                  {/* Header / Clickable Area */}
                  <div 
                    onClick={() => toggleExpand(index)}
                    className="py-12 md:py-16 flex items-center justify-between cursor-pointer group hover:bg-white/[0.02] transition-colors px-4 -mx-4"
                  >
                    <div className="flex items-center gap-10 md:gap-16">
                      <ServiceIcon title={service.title} />
                      <h3 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold uppercase tracking-tight leading-none group-hover:translate-x-4 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <div className="pr-4 md:pr-12 opacity-40 group-hover:opacity-100 transition-opacity">
                      {isExpanded ? <Minus size={40} strokeWidth={1} /> : <Plus size={40} strokeWidth={1} />}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pb-24 grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-24">
                          {/* Left Side: Info */}
                          <div className="flex flex-col space-y-12">
                            <p className="text-[18px] md:text-[24px] font-medium leading-[1.3] text-white/90 max-w-[500px]">
                              {service.description}
                            </p>
                            
                            <div className="space-y-6">
                              <h4 className="text-[18px] md:text-[20px] font-bold uppercase tracking-[0.1em] text-white/50">
                                [ KEY FEATURES ]
                              </h4>
                              <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="text-[16px] md:text-[18px] font-medium text-white/80 list-none pl-0">
                                    - {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Side: Visual */}
                          <div className="flex flex-col items-end">
                            <div className="w-full max-w-[450px]">
                              <div className="flex flex-col space-y-4">
                                <span className="text-[16px] md:text-[20px] font-bold tracking-widest text-white/50">
                                  ( {String(index + 1).padStart(2, '0')} )
                                </span>
                                <div className="aspect-[4/3] w-full rounded-[8px] overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                  <img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-700" 
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-60 relative">
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
          <div className="hidden lg:block lg:w-1/2" />
          
          {/* Right side (content) */}
          <div className="flex-1 flex flex-col gap-24 pt-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 md:gap-16 pt-12"
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
