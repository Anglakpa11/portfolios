import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <Section id="stack" className="py-[160px] border-t border-white/10">
      <div className="flex flex-col gap-16">
        <span className="inline-block px-4 py-2 border border-white/10 text-[12px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF80] rounded-full w-fit">
          FAVOURITE STACK
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.stack.map((item, index) => (
            <motion.div 
              key={index} 
              className="group relative border border-white/5 p-10 md:p-12 bg-[#141414] hover:border-accent/50 transition-all duration-500 rounded-[12px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h4 className="text-3xl font-black uppercase tracking-tight text-[#EDEDED] group-hover:text-accent transition-colors">
                  {item.name}
                </h4>
                <span className="text-xl font-bold font-mono text-accent/60">
                  {item.percent}
                </span>
              </div>
              
              <div className="relative z-10 flex flex-col gap-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF40] bg-white/5 px-4 py-2 rounded-full w-fit">
                  {item.type}
                </span>
                <p className="text-[#FFFFFF60] font-medium leading-relaxed text-lg">
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
