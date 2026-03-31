import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-32 px-[40px] flex flex-col items-center justify-center text-center gap-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C3BFF]/20 rounded-full blur-[160px] pointer-events-none select-none opacity-50" />

      {/* Title */}
      <h2 className="text-[10vw] md:text-[8vw] lg:text-[100px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#FFFFFF]">
        LET'S MAKE YOUR DESIGN <br /> SHINE
      </h2>

      {/* Quote */}
      <div className="max-w-[700px]">
        <p className="text-[14px] md:text-[18px] font-bold uppercase tracking-[0.05em] leading-[1.6] text-white/80">
          "COLLABORATE WITH ME TO CRAFT EXCEPTIONAL DESIGNS <br className="hidden md:block" /> REFLECT YOUR UNIQUE VISION."
        </p>
      </div>

      {/* Spacer */}
      <div className="h-12" />

      {/* Social Links Bar */}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {PORTFOLIO_DATA.socials.map((social) => (
          <a 
            key={social.name}
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[14px] md:text-[16px] font-bold tracking-[0.1em] uppercase text-white hover:text-[#6C3BFF] transition-colors"
          >
            {social.name} 
            <span className="text-[18px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
          </a>
        ))}
      </div>

      {/* Bottom Small Print */}
      <div className="mt-24 pt-12 border-t border-white/5 w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase">© {currentYear} ALL RIGHTS RESERVED</span>
        <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase">BASED IN NEPAL</span>
            <span className="text-[10px] font-mono select-none">/</span>
            <span className="text-[10px] font-mono uppercase">KATHMANDU</span>
        </div>
      </div>
    </footer>
  );
}
