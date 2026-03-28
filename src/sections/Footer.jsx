import { PORTFOLIO_DATA } from '../data/portfolioData';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 overflow-hidden">
      {/* CTA Section */}
      <Section className="py-[160px] relative">
        <div className="flex flex-col items-center text-center gap-12 relative z-10">
          <h2 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase leading-[0.85] tracking-tighter text-[#EDEDED]">
            LET'S MAKE YOUR <br />
            DESIGN <span className="text-accent underline underline-offset-[16px] decoration-[12px] decoration-accent/20">SHINE</span>
          </h2>
          
          <motion.a 
            href="mailto:contact@anglakpa.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full font-bold text-xl uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl shadow-accent/20"
          >
            GET IN TOUCH
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </motion.a>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-[0.02] pointer-events-none select-none">
          <span className="text-[400px] font-black uppercase whitespace-nowrap">CONTACT</span>
        </div>
      </Section>

      {/* Brand Footer */}
      <div className="px-[40px] pb-[60px] flex flex-col gap-24">
        {/* Large Brand Mark */}
        <div className="w-full flex justify-center py-20 border-y border-white/5">
          <h1 className="text-[20vw] md:text-[25vw] font-black tracking-[-0.05em] leading-none text-[#EDEDED] opacity-10 select-none">
            ANG
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="text-sm font-bold tracking-widest text-[#FFFFFF40] uppercase">© {currentYear} ALL RIGHTS RESERVED</span>
            <div className="flex gap-8 justify-center md:justify-start">
              {PORTFOLIO_DATA.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold tracking-widest uppercase text-[#FFFFFF60] hover:text-accent transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 text-right hidden md:flex">
            <span className="text-sm font-bold tracking-widest text-accent uppercase">BASED IN NEPAL</span>
            <span className="text-xs text-[#FFFFFF40] font-mono">27.7172° N, 85.3240° E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
