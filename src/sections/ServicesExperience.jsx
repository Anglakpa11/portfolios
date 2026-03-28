import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function ServicesExperience() {
  return (
    <Section id="services" className="py-[160px] border-t border-white/10 bg-[#0A0A0A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 border border-white/10 text-[12px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF80] rounded-full mb-16">
            SERVICES
          </span>
          <div className="flex flex-col gap-8">
            {PORTFOLIO_DATA.services.map((service, index) => (
              <div 
                key={index} 
                className="group border border-white/5 p-10 md:p-12 bg-[#141414] hover:border-accent/50 transition-all duration-500 rounded-[12px]"
              >
                <h4 className="text-3xl font-black uppercase tracking-tight mb-6 text-[#EDEDED] group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-[#FFFFFF60] font-medium mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#EDEDED]/80">
                        <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_#6C3BFF]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 border border-white/10 text-[12px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF80] rounded-full mb-16">
            EXPERIENCE
          </span>
          <div className="flex flex-col">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-6 border-b border-white/5 py-12 first:pt-0 last:border-0 hover:bg-white/[0.02] px-8 -mx-8 transition-colors group"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[#FFFFFF40] uppercase">
                  {exp.period}
                </span>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 text-[#EDEDED] group-hover:text-accent transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-lg font-bold uppercase tracking-widest text-accent/80">
                    {exp.company}
                  </p>
                </div>
                <p className="text-[#FFFFFF60] font-medium leading-relaxed mt-2 text-lg max-w-xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
