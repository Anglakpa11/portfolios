import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Discovery() {
  return (
    <Section id="method" className="border-t border-white/10 pt-[120px] pb-[160px] bg-[#0A0A0A]">
      <div className="flex flex-col gap-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-block px-4 py-2 border border-white/10 text-[12px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF80] rounded-full">
            WORK PROCESS
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#EDEDED]">
            DISCOVERY / WORK METHOD
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
          {/* Left: Atmospheric Image */}
          <div className="md:col-span-5 sticky top-[120px]">
            <motion.div 
              className="aspect-[3/4] overflow-hidden rounded-[12px] bg-[#1a1a1a] shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img 
                src="/src/assets/work1.png" 
                alt="Discovery Process" 
                className="w-full h-full object-cover grayscale opacity-40" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Right: Step List */}
          <div className="md:col-span-7 flex flex-col gap-4">
            {PORTFOLIO_DATA.process.map((step, index) => (
              <motion.div 
                key={step.id}
                className="group p-10 md:p-12 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex gap-8 items-start">
                  <span className="text-xl font-black text-accent opacity-50 font-mono">{step.id}</span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#EDEDED] group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#FFFFFF60] leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
