import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <Section id="process" className="py-24 md:py-40 bg-black">

      {/* Centered Header Block */}
      <div className="flex flex-col items-center text-center mb-24 md:mb-32">
        <span className="text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase text-[#FFFFFF] mb-4">
          LET ME SHOW HOW I DO
        </span>
        <h2 className="text-[40px] md:text-[80px] lg:text-[100px] font-bold uppercase leading-[1.1] tracking-tighter text-[#FFFFFF] mb-8">
          MY WORK METHOD
        </h2>

        {/* Subheader accent */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-[48px] h-[48px] rounded-full border border-white/30 hidden md:block" />
          <p className="text-[14px] md:text-[18px] font-bold uppercase tracking-widest text-[#FFFFFF] border-y border-white/10 py-4 px-8">
            [ ELEVATE YOUR VISUAL DESIGN WITH Bett TECHNIQUES ]
          </p>
        </div>
      </div>

      {/* Main Split Content */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Left: Cinematic Image */}
        <div className="w-full lg:w-[45%] sticky top-24 hidden lg:block">
          <div className="aspect-[4/5] rounded-[12px] overflow-hidden bg-[#111111] border border-white/10">
            <img
              src="/assets/work1.jpg"
              alt="Workspace"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Right: Detailed Process List */}
        <div className="w-full lg:w-[55%] flex flex-col gap-20">
          {PORTFOLIO_DATA.process.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col border-b border-white/10 pb-16 last:border-0"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[16px] md:text-[18px] font-bold font-mono text-[#FFFFFF]">
                  [ {step.id} ]
                </span>
                {/* Icon Placeholder (Hexagonal shape from mockup) */}
                <div className="w-10 h-10 opacity-60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
              </div>

              <h3 className="text-[28px] md:text-[40px] font-black uppercase tracking-tighter text-[#FFFFFF] mb-6">
                {step.title}
              </h3>

              <p className="text-[20px] md:text-[24px] leading-relaxed text-[#FFFFFF90] font-medium mb-8">
                {step.description}
              </p>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-4">
                {step.details?.map((detail, i) => (
                  <li key={i} className="flex items-start gap-4 text-[14px] md:text-[18px] text-[#FFFFFF]">
                    <span className="mt-[10px] w-1.5 h-1.5 bg-white/40 shrink-0" />
                    <span className="font-medium opacity-80">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>

    </Section>
  );
}
